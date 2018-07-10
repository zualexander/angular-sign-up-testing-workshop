import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserFacadeService} from '../../services/user-facade.service';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss']
})
export class IncrementerComponent implements OnInit {
  @Input() counter: number;
  @Output() newValue: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _facade: UserFacadeService) {
  }

  ngOnInit() {
  }

  public increment(): void {
    const newCounter = this._facade.incrementNumber(this.counter);
    this.newValue.emit(newCounter);
  }

}
