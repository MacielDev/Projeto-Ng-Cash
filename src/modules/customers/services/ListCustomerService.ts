import Customer from '../typeorm/entities/Customer';
import { CustomersRepository } from '../typeorm/repositories/CustomersRepository';

// interface IPaginateCustomer {
//   from: number;
//   to: number;
//   per_page: number;
//   total: number;
//   current_page: number;
//   prev_page: number | null;
//   next_page: number | null;
//   data: Customer[];
// }

class ListCustomerService {
  public async execute(): Promise<Customer[] | null> {
    const customers = await CustomersRepository.find();

    return customers;
  }
}
export default ListCustomerService;
