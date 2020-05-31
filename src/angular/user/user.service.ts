import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  getUser() {
    return {
      display: 'Shaun',
      username: 'sconnolly',
      twitter: '@esastincy9'
    }
  }

}

export interface User {
  display: string;
  username: string;
  twitter: string;
}
