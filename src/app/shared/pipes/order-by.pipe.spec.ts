import { OrderByPipe } from './order-by.pipe';

fdescribe('OrderByPipe', () => {
  const pipe = new OrderByPipe();
  const array = [
    {id : 1, name : 'first'},
    {id : 3, name : 'third'},
    {id : 2, name : 'second'}
  ];

  fit('transforms by "id"', () => {
    const arr = pipe.transform(array, 'id');

    expect(arr[0].id).toBe(1);
    expect(arr[1].id).toBe(2);
    expect(arr[2].id).toBe(3);
  });
});
