/* This is a SimpleLogger function that will log to the console when a class is instantiated
 The output should be */
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function SimpleLogger(logger) {
    console.log("Calling ".concat(logger.name, "."));
}
/*This is a method decorator that will log method calls of MyTestClass function*/
function LogMethod(target, context) {
    var methodName = String(context.name);
    var replacementMethod = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Inside method decorator');
        var result = target.call.apply(target, __spreadArray([this], args, false));
        return result;
    };
    return replacementMethod;
}
;
/* This is a readonly function. It assigns a value to a property that cannot be changed or
modified once set.*/
function readOnly(target, context) {
    var result = {
        get: function () {
            return target.get.call(this);
        },
        set: function () {
            throw new Error("Cannot assign to read only property '".concat(String(context.name), "'."));
        },
    };
    return result;
}
var MyTestClass = function () {
    var _MyTestClass_serId_accessor_storage;
    var _classDecorators = [SimpleLogger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _serId_decorators;
    var _serId_initializers = [];
    var _serId_extraInitializers = [];
    var _greet_decorators;
    var MyTestClass = _classThis = /** @class */ (function () {
        function MyTestClass_1(id, v) {
            _MyTestClass_serId_accessor_storage.set(this, (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _serId_initializers, 555)));
            this.id = __runInitializers(this, _serId_extraInitializers);
            this.id = id;
            this.value = v;
            console.log("Id: ".concat(this.id));
            console.log("Value: ".concat(this.value));
        }
        Object.defineProperty(MyTestClass_1.prototype, "serId", {
            get: function () { return __classPrivateFieldGet(this, _MyTestClass_serId_accessor_storage, "f"); },
            set: function (value) { __classPrivateFieldSet(this, _MyTestClass_serId_accessor_storage, value, "f"); },
            enumerable: false,
            configurable: true
        });
        MyTestClass_1.prototype.greet = function () {
            return "Hello, this is the method decorator:  " + this.value;
        };
        return MyTestClass_1;
    }());
    _MyTestClass_serId_accessor_storage = new WeakMap();
    __setFunctionName(_classThis, "MyTestClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _serId_decorators = [readOnly];
        _greet_decorators = [LogMethod];
        __esDecorate(_classThis, null, _serId_decorators, { kind: "accessor", name: "serId", static: false, private: false, access: { has: function (obj) { return "serId" in obj; }, get: function (obj) { return obj.serId; }, set: function (obj, value) { obj.serId = value; } }, metadata: _metadata }, _serId_initializers, _serId_extraInitializers);
        __esDecorate(_classThis, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: function (obj) { return "greet" in obj; }, get: function (obj) { return obj.greet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyTestClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyTestClass = _classThis;
}();
// Calling MyTestClass
var tester = new MyTestClass(1, 'First Instantiation');
var testertwo = new MyTestClass(2, 'Second Instantiation');
// This shows a console log of my ReadOnly property value
console.log(tester.serId);
console.log(tester.greet());
//Notice that if I set it to a value other than "555", it will show an error.
//tester.serId = 444;
