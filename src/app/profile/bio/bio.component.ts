import { Component, OnInit } from '@angular/core';
import { BioService } from './bio.service';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { BioData } from './bio.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  currentUserId: string = '3';
  userId: string = '9badc200-6c82-452b-954c-30a2fea33e62';
  isSelfProfile: boolean = false;
  subscribtion!: Subscription;
  bioData!: BioData;
  isLoading: boolean = true;
  constructor(private authService: AuthService, private http: HttpClient, private bioService: BioService) { }
  ngOnInit() {

    this.isSelfProfile = this.currentUserId == this.userId ? true : false;
    this.bioService.fetchData(this.currentUserId, this.userId).subscribe(resData => {
      this.isLoading = false;
      this.bioData = resData;
      console.log(resData);

    })
  }
  follow() {
    this.bioService.follow(this.currentUserId, this.userId).subscribe(resData => {
      this.bioData.isFollowing = resData;
    })
  }
  unFollow() {
    this.bioService.unFollow(this.currentUserId, this.userId).subscribe(resData => {
      this.bioData.isFollowing = !resData;
    })
  }
}


