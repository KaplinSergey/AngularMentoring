import { OrderService } from './order.service';
import { TestBed } from '@angular/core/testing';
import { OrderModel } from '../models/order';

fdescribe('Order service tests', () => {
    let service: OrderService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OrderService]
        });

        service = TestBed.get(OrderService);
    });

    fit('getOrders should return orders and first order with last name Ivanov', (done: DoneFn) => {
        service.getOrders().then(orders => {
            expect(orders[0].lastName).toBe('Ivanov');
            done();
        });
    });

    fit('update should update order in the orders list', (done: DoneFn) => {
        let order: OrderModel;

        service.getOrders().then(orders => {
            order = orders[0];
            expect(orders[0].address).toBe('Minsk');
            order.address = 'Gomel';
            done();
        });

        service.update(order).then(orders => {
            expect(orders[0].address).toBe('Gomel');
            done();
        });
    });
});
