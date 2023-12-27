import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { BioEditComponent } from "./profile/bio/bio-edit/bio-edit.component";
import { PostEditComponent } from "./posts/post-edit/post-edit.component";

const appRoutes: Routes = [
    {path:"",component:AppComponent,pathMatch:'full'},
    {path:"auth",component:AuthComponent},
    {path:"profile/:id",component:ProfileComponent},
    {path:"profile/:id/edit",component:BioEditComponent},
    {path:"post/edit",component:PostEditComponent}

]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
