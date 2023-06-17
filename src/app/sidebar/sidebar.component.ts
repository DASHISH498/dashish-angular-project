import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  visible:boolean = true
  /* SIDEBAR MENU LIST */
  menuList = [
    {name: 'HOME', icnName: 'home', redirectURL: 'https://dashishsoni.in/#home'},
    {name: 'ABOUT', icnName: 'account_circle', redirectURL: 'https://dashishsoni.in/#about'},
    {name: 'SERVICES', icnName: 'business_center', redirectURL: 'https://dashishsoni.in/#services'},
    {name: 'SKIILS', icnName: 'storage', redirectURL: 'https://dashishsoni.in/#skills'},
    {name: 'EXPERIENCE', icnName: 'school', redirectURL: 'https://dashishsoni.in/#experience'},
    {name: 'PROJECTS', icnName: 'group_work', redirectURL: 'https://dashishsoni.in/#projects'},
    // {name: 'GITHUB', icnName: 'memory', redirectURL: 'https://dashishsoni.in/#github'},
    {name: 'CONTACT', icnName: 'contacts', redirectURL: 'https://dashishsoni.in/#contact'}
  ]

  /* DISPLAY CURRENT YEAR IN SIDEBAR */
  currentYear : number = new Date().getFullYear();
}
