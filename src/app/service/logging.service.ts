export class LoggingService {
  loggingList: string[] = [];

  constructor() { }

  public logging(messageStr: string) {
    console.log('logging str: ' + messageStr);
    this.loggingList.push(messageStr);
  }

  public getLoggingMessage(): string[] {
    this.logging('get loggingList variable');
    return this.loggingList;
  }
}
