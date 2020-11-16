import errorNoImplemented from './errors/methodNoImplemented';

export class ValueObject {
  toJSON() {
    errorNoImplemented('[ValueObject#toJSON]');
  }
}
