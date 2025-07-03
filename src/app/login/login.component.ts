import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  showLogin: boolean = true;

  registerModel = { email: '', password: '' };
  model = { email: '', password: '' };

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      console.log('Auth State Changed:', user);
    });
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
  }

  onLoginSubmit(form: any) {
    if (form.valid) {
      this.afAuth.signInWithEmailAndPassword(this.model.email, this.model.password)
        .then(() => {
          this.router.navigate(['/landing']); // Navigate on success
        })
        .catch(error => {
          alert('Login failed: ' + error.message);
        });
    }
  }

  onRegisterSubmit(form: any) {
    if (form.valid) {
      this.afAuth.createUserWithEmailAndPassword(this.registerModel.email, this.registerModel.password)
        .then(() => {
          this.showLogin = true; // switch back to login form after successful signup
          alert('Registration successful! Please login.');
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
}
