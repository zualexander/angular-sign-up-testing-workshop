import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../shared/interfaces/user';
import {UserFacadeService} from '../../services/user-facade.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public users: User[];
  public subscription: Subscription;
  public counter: number = 55;

  constructor(private _facade: UserFacadeService) {
  }

  ngOnInit() {
    this.subscription = this._facade.getUserList()
      .subscribe((users) => this.users = users);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  public handleCounterUpdate(newCounter: number): void {
    this.counter = newCounter;
  }


}
