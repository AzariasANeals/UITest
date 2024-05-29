/* This is a SimpleLogger function that will log to the console when a class is instantiated
 The output should be */ 

function SimpleLogger(logger: Function){
    console.log(`Calling ${logger.name}.`);
}

/*This is a method decorator that will log method calls of MyTestClass function*/ 
function LogMethod<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return 
    >
    ) {
        const methodName = String(context.name);

        const replacementMethod = function(this: This, ...args: Args): Return{
            console.log('Inside method decorator');
            const result = target.call(this, ...args);
            
            return result;
        }

        return replacementMethod;
    };
    

/* This is a readonly function. It assigns a value to a property that cannot be changed or
modified once set.*/
function readOnly<This, Return, Result>(
    target: ClassAccessorDecoratorTarget<This, Return>,
    context: ClassAccessorDecoratorContext<This, Return>
){
    const result: ClassAccessorDecoratorResult<This, Return> =
    {
        get(this: This)
        {
            return target.get.call(this);
        },
        set()
        {
            throw new Error(`Cannot assign to read only property '${String(context.name)}'.`);

        },
    };
    return result;
}

@SimpleLogger
class MyTestClass{
    @readOnly accessor serId: number = 243;

    id: number;
    value: string;
    constructor(id: number, v: string){
        this.id = id;
        this.value = v;
        console.log(`Id: ${this.id}`);
        console.log(`Value: ${this.value}`)
    }

    
    @LogMethod
    greet() {
      return "Hello, " + this.value;
    }
    
   getValue():string{
    return this.value;
   }
}

let tester = new MyTestClass(14, '51 sticks');
console.log(tester.serId);
tester.greet();
// tester.serId = 488;
let testertwo = new MyTestClass(15, 'Hopping');

