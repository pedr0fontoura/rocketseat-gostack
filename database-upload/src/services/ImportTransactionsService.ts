import fs from 'fs';
import csvParse from 'csv-parse';
import { getRepository, getCustomRepository, In } from 'typeorm';

import Transaction from '../models/Transaction';
import Category from '../models/Category';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface CSVTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const readCSVStream = fs.createReadStream(filePath);

    const parseStream = csvParse({
      from_line: 2,
      ltrim: true,
      rtrim: true,
    });

    const parseCSV = readCSVStream.pipe(parseStream);

    const transactions: CSVTransaction[] = [];
    let categories: string[] = [];

    parseCSV.on('data', line => {
      const [title, type, value, category] = line;

      categories.push(category);

      transactions.push({ title, type, value: Number(value), category });
    });

    await new Promise(resolve => {
      parseCSV.on('end', resolve);
    });

    await fs.promises.unlink(filePath);

    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoriesRepository = getRepository(Category);

    categories = categories.filter(
      (value, index) => categories.indexOf(value) === index,
    );

    const existentCategories = await categoriesRepository.find({
      where: { title: In(categories) },
    });

    const existentCategoriesTitles = existentCategories.map(
      (category: Category) => category.title,
    );

    const addCategoryTitles = categories.filter(
      category => !existentCategoriesTitles.includes(category),
    );

    const newCategories = categoriesRepository.create(
      addCategoryTitles.map(title => ({ title })),
    );

    await categoriesRepository.save(newCategories);

    const allCategories = [...existentCategories, ...newCategories];

    const createdTransactions = transactionsRepository.create(
      transactions.map(({ title, type, value, category }) => ({
        title,
        type,
        value,
        category: allCategories.find(
          createdCategory => createdCategory.title === category,
        ),
      })),
    );

    await transactionsRepository.save(createdTransactions);

    return createdTransactions;
  }
}

export default ImportTransactionsService;
