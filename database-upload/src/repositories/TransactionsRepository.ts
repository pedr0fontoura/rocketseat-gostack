import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();

    const income = transactions.reduce((result, transaction) => {
      let total = result;
      if (transaction.type === 'income') {
        total += transaction.value;
      }
      return total;
    }, 0);

    const outcome = transactions.reduce((result, transaction) => {
      let total = result;
      if (transaction.type === 'outcome') {
        total += transaction.value;
      }
      return total;
    }, 0);

    const total = income - outcome;

    return { income, outcome, total };
  }
}

export default TransactionsRepository;
