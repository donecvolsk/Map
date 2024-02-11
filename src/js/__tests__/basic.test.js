import { ErrorRepository } from '../ErrorRepository';

test('class ErrorRepository testing text', () => {
  const testValue = 2;
  const result = new ErrorRepository();
  expect(result.translate(testValue)).toBe('Ошибка №2');
})

test('class ErrorRepository testing Unknown error', () => {
  const testValue = 4;
  const result = new ErrorRepository();    
  expect(result.translate(testValue)).toBe('Unknown error');
 })
