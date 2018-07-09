import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpFacadeService {

  constructor() {
  }

  public signUp(email: string): Observable<boolean> {
    return of(true);
  }
}
