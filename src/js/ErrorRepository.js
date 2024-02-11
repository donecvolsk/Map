export class ErrorRepository {
    constructor() {
        this.map = new Map();
        this.map.set(1, 'Ошибка №1');
        this.map.set(2, 'Ошибка №2');
        this.map.set(3, 'Ошибка №3');
    }

    translate(code) {
        if(this.map.has(code)) {
            return this.map.get(code);
        } else {
            return "Unknown error";
        }       
    }    
}