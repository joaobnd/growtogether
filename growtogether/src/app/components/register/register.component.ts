import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    let email = this.registerForm.get('email')?.value;
    let password = this.registerForm.get('password')?.value;
    this.auth.register(email, password);
    this.registerForm.reset()
  }

}
