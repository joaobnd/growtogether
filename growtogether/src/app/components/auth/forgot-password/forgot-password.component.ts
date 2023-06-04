import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPswdForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  forgotPswd() {
    let email = this.forgotPswdForm.get('email')?.value;
    this.auth.forgotPswd(email);
    this.forgotPswdForm.reset()
  }

}
