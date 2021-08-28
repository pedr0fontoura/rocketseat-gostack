import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer does not exists.');
    }

    const productsDetails = await this.productsRepository.findAllById(products);

    if (productsDetails.length !== products.length) {
      throw new AppError("You can't create an order with an invalid product.");
    }

    products.forEach(product => {
      const productDetailsIndex = productsDetails.findIndex(
        productDetails => productDetails.id === product.id,
      );

      const updatedQuantity =
        productsDetails[productDetailsIndex].quantity - product.quantity;

      if (updatedQuantity < 0) {
        throw new AppError(
          "You can't create an order with insufficient products",
        );
      }

      productsDetails[productDetailsIndex].quantity = updatedQuantity;
    });

    const orderProducts = products.map(({ id, quantity }) => {
      const productDetailIndex = productsDetails.findIndex(
        productDetails => productDetails.id === id,
      );

      const { price } = productsDetails[productDetailIndex];

      return { product_id: id, price, quantity };
    });

    await this.productsRepository.updateQuantity(productsDetails);

    const order = await this.ordersRepository.create({
      customer,
      products: orderProducts,
    });

    return order;
  }
}

export default CreateOrderService;
