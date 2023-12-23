// import { Injectable, OnInit } from "@angular/core";
// import { AuthService } from "../auth/auth.service";
// import { Subscription } from "rxjs";

// @Injectable({ providedIn: 'root' })
// export class ProfileService implements OnInit {
//      currentUserId: string='';
//     subscribtion!:Subscription

// constructor(private authService:AuthService){}
// ngOnInit(): void {
//     this.subscribtion = this.authService.user.subscribe(user => {
//       this.currentUserId = user.id;
//     })
//   }
// fetchBio(){}
// }