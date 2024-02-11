import { ErrorRepository } from './ErrorRepository';

const numberError = 3; // Номер ошибки

const textError = new ErrorRepository();
const result = textError.translate(numberError); // текст ошибки
console.log(result); 


