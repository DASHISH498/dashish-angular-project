import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuList = [
    {name: 'HOME'},{name: 'ABOUT'},{name: 'SKILLS'},{name: 'SERVICES'},{name: 'PORTFOLIO'},{name: 'YOUTUBE'},{name: 'CONTACT'}
  ]
}
