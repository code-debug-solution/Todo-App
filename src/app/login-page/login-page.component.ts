import { Component, OnInit, HostBinding } from '@angular/core';
import {Router} from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class LoginPageComponent implements OnInit {
  state = '';
  error: any;

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/users');
      }
    });
   }

   onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/users']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

   Githublogin() {
     this.af.auth.login({
       provider: AuthProviders.Github,
       method: AuthMethods.Popup,
     }).then(
       (seccess) => {
         this.router.navigate(['/users']);
       }).catch(
         (err) => {
           this.error = err;
         });
    }

    Googlelogin() {
     this.af.auth.login({
       provider: AuthProviders.Google,
       method: AuthMethods.Popup,
     }).then(
       (seccess) => {
         this.router.navigate(['/users']);
       }).catch(
         (err) => {
           this.error = err;
         });
    }

    Facebooklogin() {
     this.af.auth.login({
       provider: AuthProviders.Facebook,
       method: AuthMethods.Popup,
     }).then(
       (seccess) => {
         this.router.navigate(['/users']);
       }).catch(
         (err) => {
           this.error = err;
         });
    }

  ngOnInit() {
  }

}
