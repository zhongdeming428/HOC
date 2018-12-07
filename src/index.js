class A {
  constructor() {
    this.b = 12;
  }
  @APlus
  say() {}
}

function APlus(target, name, descriptor) {
  descriptor.value = function() {
    console.log('?');
  }
}

let a = new A();
a.say();