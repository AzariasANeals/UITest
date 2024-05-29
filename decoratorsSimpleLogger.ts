
function SimpleLogger(logger: Function){
    console.log(`Calling ${logger.name}.`);
}

@SimpleLogger
class MyTestClass{

    id: number;
    value: string;
    constructor(id: number, v: string){
        this.id = id;
        this.value = v;
        console.log(`Id: ${this.id}`);
        console.log(`Value: ${this.value}`)
    }
}

let tester = new MyTestClass(14, '51 sticks');
let testertwo = new MyTestClass(15, 'Hopping');

