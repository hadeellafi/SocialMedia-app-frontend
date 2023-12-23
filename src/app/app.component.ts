import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // isAuthenticated: boolean = false;
  
  // //! post-fix expression operator : tell TypeScript that subAuth will be definitely assigned at runtime:
  // private subAuth!: Subscription;
  // constructor(private authService: AuthService) { }

  // ngOnInit(): void {
  //   this.subAuth = this.authService.user.subscribe(user => {
  //     this.isAuthenticated = !!user;
  //   })
  // }
  // ngOnDestroy(): void {
  //   this.subAuth.unsubscribe();
  // }
}
