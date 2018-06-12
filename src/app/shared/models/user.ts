import { Deserializable } from './deserializable.model';
import { Car } from './car';

export class User implements Deserializable {
  id: Number;
  name: String;
  car: Car;

  deserialize(input: any) {
    Object.assign(this, input);

    this.car = new Car().deserialize(input.car);

    return this;
  }
}
