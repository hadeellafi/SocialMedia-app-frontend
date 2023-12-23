import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signUpMood: boolean = false;
  isLoading:boolean=false;
  showTooltip = false;
  hide = true;
  errorMessage:string="";
  takenEmail:string="";
  takenUserName:string="";

  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;

    if (!this.signUpMood) {
      this.authService.logIn(form.value).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
         this.router.navigate([''])
        },
        errorMessage => {
          this.errorMessage = errorMessage;
          this.isLoading = false;
        }
      );
      form.reset();
    } else {
      this.authService.signUp(form.value).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate([''])

        },
        errorResponse => {
          console.log(errorResponse);
          this.isLoading = false;

          if (errorResponse.error.errors) {
            if (errorResponse.error.errors['Username']) {
              this.takenUserName= errorResponse.error.errors['Username'][0] ;
            }
            if (errorResponse.error.errors['Email']) {
              this.takenEmail= errorResponse.error.errors['Email'][0] ;
            }
          }
        }
      );
    }
  }
}
