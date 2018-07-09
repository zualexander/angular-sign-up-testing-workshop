import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpFacadeService} from '../../services/sign-up-facade.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;

  constructor(private _fb: FormBuilder, private _facade: SignUpFacadeService, private _router: Router) {
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  ngOnInit() {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      agb: [false, Validators.requiredTrue]
    });
  }


  public signUp(): void {
    if (this.form.valid) {
      this._facade.signUp(this.email.value).subscribe((isSignedUp: boolean) => {
        if (isSignedUp) {
          this._router.navigate(['users']);
        }
      });
    }
  }


}
