import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicUserData } from '../Shared/BasicUserData.model';
import { BioService } from '../profile/bio/bio.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() users!: BasicUserData[];
  @Input() title!: string;
  @Input() currentId!: string;

  constructor(public activeModal: NgbActiveModal, private bioService: BioService) { }
  ngOnInit(): void {
    console.log(this.users, this.title)
  }
  Follow(currentId: string, userId: string) {
    this.bioService.follow(currentId, userId).subscribe(
      result => {
        const user = this.users.find(user => user.userID === userId);
        if (user) {
          user.isFollowing = result;
          console.log(user.isFollowing);
        }
      }
    )
  }unFollow(currentId: string, userId: string) {
    this.bioService.unFollow(currentId, userId).subscribe(
      result => {
        const user = this.users.find(user => user.userID === userId);
        if (user) {
          user.isFollowing = !result;
          console.log(user.isFollowing);

        }
      }
    )
  }
  
}
