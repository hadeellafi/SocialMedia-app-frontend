import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";

const appRoutes: Routes = [
    {path:"",component:AppComponent,pathMatch:'full'},
    {path:"profile/{id}",component:ProfileComponent}

     ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
