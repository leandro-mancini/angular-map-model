import { Deserializable } from './deserializable.model';

export class Car implements Deserializable {
  brand: String;
  year: Number;

  deserialize(input: any) {
    Object.assign(this, input);

    return this;
  }
}
