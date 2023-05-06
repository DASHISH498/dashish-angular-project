import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  /* SIDEBAR MENU LIST */
  menuList = [
    {name: 'HOME', icnName: 'home'},
    {name: 'ABOUT', icnName: 'account_circle'},
    {name: 'SERVICES', icnName: 'business_center'},
    {name: 'SKIILS', icnName: 'storage'},
    {name: 'EXPERIENCE', icnName: 'school'},
    {name: 'PROJECTS', icnName: 'group_work'},
    {name: 'GITHUB', icnName: 'memory'},
    {name: 'CONTACT', icnName: 'contacts'}
  ]

  /* DISPLAY CURRENT YEAR IN SIDEBAR */
  currentYear : number = new Date().getFullYear();

}
