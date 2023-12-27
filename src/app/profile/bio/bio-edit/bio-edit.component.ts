import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BioService } from '../bio.service';
import { BioData } from '../bio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bio-edit',
  templateUrl: './bio-edit.component.html',
  styleUrls: ['./bio-edit.component.css']
})
export class BioEditComponent implements OnInit, OnDestroy {
  userId!: string;
  user!: BioData;
  isHavingPic!: boolean;
  isLoading: boolean = false;
  isLoadingPic: boolean = false;
  errorMsg:boolean=false;
  picUpdated:boolean=false;

  routeSub!: Subscription;
  constructor(private bioService: BioService, private route: ActivatedRoute, private modalService: NgbModal,private router:Router) { } 
   ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.userId = params['id'];
    })
    this.isLoading = true;
    this.bioService.fetchData(this.userId, this.userId).subscribe(result => {

      this.user = result;
      console.log(this.user);
      this.isLoading = false;
      this.havingPic();
    })
    
  }
  havingPic(){
    this.isHavingPic = this.user.profilePicture == "https://projectsstorage2001.blob.core.windows.net/recipeimages/default_avatar.jpg" ? false : true;

  }
  uploadPic() {
    document.getElementById('fileToUpload')?.click();
  }
  
  onSubmitPic(event: any) {
    this.modalService.dismissAll();

    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('ImageFile', file);
    console.log("formData",formData);
    this.isLoadingPic = true;
    this.bioService.updateProfilePicture(this.userId, formData).subscribe(response => {
      this.isLoadingPic = false;
      this.user.profilePicture = response;
      this.havingPic();

    });
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }
  removePic(){
    this.isLoadingPic = true;
    this.bioService.removeProfilePicture(this.userId).subscribe(response=>{
      this.user.profilePicture = response;
      this.modalService.dismissAll();
      this.isLoadingPic = false;
      this.havingPic();

    })
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.user.fullName = form.value.fullName;
    this.user.description = form.value.description;
    this.bioService.updateProfileBio(this.userId, this.user).subscribe(response => {
      if (response) {
        this.router.navigate(['profile', this.userId]);
      } else {
        this.errorMsg = true;
      }
    });
  }
  
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }


}

export interface editProfileModal {
  id: string;
  fullName: string;
  profilePicture: string;
  description?: string;

}
