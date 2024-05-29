
function SimpleLogger(logger: Function){
    console.log(`Calling ${logger.name}.`);
}

function enumerable(value: boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value;
        target.enumerable = value;
        propertyKey = "hello";
    };
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
    @enumerable(false)

    SimpleLogger(){
        return "Hello!";
    }
    
}

let tester = new MyTestClass(14, '51 sticks');
let testertwo = new MyTestClass(15, 'Hopping');

