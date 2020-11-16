import errorNoImplemented from './errors/methodNoImplemented';

export class Entity {
  toJSON() {
    errorNoImplemented('[Entity#toJSON]');
  }
}
