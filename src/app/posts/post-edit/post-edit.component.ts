import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postForm!: FormGroup;
  id!: number;
  editMode = false;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  constructor(private route: ActivatedRoute, private router: Router,private http:HttpClient) { }

  private initForm() {
    let postName = "";
    let postDescription = "";
    let postIngredients = new FormArray([]);
    let postSteps = new FormArray([]);
  
    if (this.editMode) {
      // const postToEdit = this.postService.getPost(this.id);
      // postName = postToEdit.name;
      // postDescription = postToEdit.description;
      // if (postToEdit['ingredients']) {
      //   for (let ingredient of postToEdit['ingredients']) {
      //     postIngredients.push(new FormGroup({
      //       'ingredientID': new FormControl(ingredient.ingredientID),
      //       'quantity': new FormControl(ingredient.quantity)
      //     }))
      //   }
      // }
      // if (postToEdit['steps']) {
      //   for (let step of postToEdit['steps']) {
      //     postSteps.push(new FormGroup({
      //       'instruction': new FormControl(step.instruction)
      //     }))
      //   }
      // }
    }
  
    this.postForm = new FormGroup({
      'name': new FormControl(postName, Validators.required),
      'description': new FormControl(postDescription),
      'ingredients': postIngredients,
      'steps': postSteps,
      'UserID':new FormControl('1'),
      'image': new FormControl(null) // Add this line
    });
  }
  

  onSubmit() {
    // if (this.editMode) {
    //   this.postService.editPost(this.id, this.postForm.value);
    // } else {
    //   this.postService.addPost(this.postForm.value);
    // }
    // this.onCancel();
    this.submitPost();
  }

  getIngredients() {
    return (this.postForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (this.postForm.get('ingredients') as FormArray).push(
      new FormGroup({
        'ingredientID': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, Validators.required)
      })
    );
  }

  getSteps() {
    return (this.postForm.get('steps') as FormArray).controls;
  }

  onAddStep() {
    (this.postForm.get('steps') as FormArray).push(
      new FormGroup({
        'instruction': new FormControl(null, Validators.required)
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    (this.postForm.get('ingredients') as FormArray).removeAt(index);
  }

  onDeleteStep(index: number) {
    (this.postForm.get('steps') as FormArray).removeAt(index);
  }
  // Method to handle file input change event
  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      this.postForm.patchValue({
        image: file
      });
    }
  }
  
  submitPost() {
    if (this.postForm) {
      const formData = new FormData();
  
      // Append the image to the form data
      const imageControl = this.postForm.get('image');
      if (imageControl) {
        formData.append('img', imageControl.value);
      }
  
      // Convert the rest of the form controls to a JSON string
      const postDtoJson = JSON.stringify(this.postForm.value);
  
      // Send a POST request to the backend
      this.http.post('https://localhost:7216/api/posts/Create?postDtoJson=' + postDtoJson, formData).subscribe(response => {
        // Handle the response here
        console.log(response);
      }, error => {
        // Handle the error here
        console.error(error);
      });
    }
  }
  
  
  
  
  


}
