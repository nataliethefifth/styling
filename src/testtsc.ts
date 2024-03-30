export let helloworld = "Hey";

function LogMethod(
  target: any,
  // propertyKey: string | symbol,
  propertyKey: any,
  descriptor?: PropertyDescriptor
) {
  console.log('target', target);
  console.log('propertyKey', propertyKey);
  console.log('descriptor', descriptor);
}

class Demo {
  @LogMethod
  public foo(bar: number) {
    console.log('demo foo', bar);
    return bar + 100;
  }
}

export const demo = new Demo();
