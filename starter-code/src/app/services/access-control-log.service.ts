import { Injectable } from '@angular/core';

interface logMessages {
  person: String,
  message: String,
  createdAt: Date
}

@Injectable()
export class AccessControlLogService {

  logMessages: Array<logMessages> = [ ]

  addAccessItem(person: string, message: string) {
  }

  getAccessLog(): Array<logMessages> {
    return this.logMessages
  }

  constructor() { }

}
