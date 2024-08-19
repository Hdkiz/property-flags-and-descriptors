'use strict';

const character = {
    name: 'Shiro',
    age: 11,

    toString() {
        return this.name;
    },
};

const descriptor = Object.getOwnPropertyDescriptor(character, 'name');
console.log(descriptor);
/* property descriptor:
{
    "value": "Shiro",
    "writable": true,
    "enumerable": true,
    "configurable": true
}
*/

Object.defineProperty(character, 'name', 
    {
        "value": true,
        "writable": false,
        "enumerable": false,
        "configurable": false
    }
);

try {
    character.name = 'Sora'; // Error: Cannot assign to read only property 'name'
} catch (error) {
    console.error(error.message);
}

console.log(Object.getOwnPropertyDescriptor(character, 'name'));

console.log(Object.keys(character)); // [ 'age', 'toString' ]

Object.defineProperty(character, 'toString', {
    enumerable: false,
});

console.log(Object.keys(character)); // [ 'age' ]

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

try {
    Math.PI = 8; // Cannot assign to read only property 'PI'
} catch (error) {
    console.error(error.message);
}

const descriptors = Object.getOwnPropertyDescriptors(character);
console.log(descriptors);

const clone = Object.defineProperties({}, descriptors);
console.log(clone);

console.log(Object.is(character, clone)); // false

Object.preventExtensions(character); 
Object.seal(character);
Object.freeze(character);

console.log(Object.isExtensible());
console.log(Object.isSealed());
console.log(Object.isFrozen());