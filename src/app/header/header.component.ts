import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // isSidebarActive = false;
  // toggleSidebar() {
  //   this.isSidebarActive = !this.isSidebarActive;
  // }
  isClosed = false;

  hamburger_cross() {
    this.isClosed = !this.isClosed;
  }
  
}
