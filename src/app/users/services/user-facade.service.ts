import {Injectable} from '@angular/core';
import {User} from '../../shared/interfaces/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  constructor() {
  }

  public getUserList(): Observable<User[]> {
    return of([
      {email: 'testmail@customer.at'},
      {email: 'email2@tester.org'},
      {email: 'first_subscriber@monstersubscriber.wien'}
    ]);
  }

  public incrementNumber(val: number): number {
    return val + 1;
  }
}
