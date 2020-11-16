import errorNoImplemented from './errors/methodNoImplemented';

export class UseCase {
  execute() {
    errorNoImplemented('[UseCase#execute]');
  }
}
