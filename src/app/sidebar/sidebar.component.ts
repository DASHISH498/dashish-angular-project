import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  /* SIDEBAR MENU LIST */
  menuList = [
    {name: 'HOME'},
    {name: 'ABOUT'},
    {name: 'SERVICES'},
    {name: 'EXPERIENCE'},
    {name: 'WORKS'},
    {name: 'YOUTUBE'},
    {name: 'CONTACT'}
  ]

  /* DISPLAY CURRENT YEAR IN SIDEBAR */
  currentYear : number = new Date().getFullYear();

}
