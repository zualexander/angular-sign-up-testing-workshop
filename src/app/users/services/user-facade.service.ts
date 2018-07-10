import {Injectable} from '@angular/core';
import {User} from '../../shared/interfaces/user';
import {Observable, of} from 'rxjs';
import {Calculation} from '../../shared/calculation';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {
  private calculation: Calculation = new Calculation();

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
    return this.calculation.add(val, 1);
  }
}
