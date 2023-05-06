import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiencebox = [
    {
      icnName: 'school',
      company_name: 'Aditadv Tech Private Limited',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
      summary : 'I have working as a front end developer. I am working on HTML CSS Bootstrap, JavaScript, AngularJS & Figma',
      year: '2021 - Present'
    },
    {
      icnName: 'school',
      company_name: 'Red Symbol Technologies Pvt. Ltd.',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
      summary : 'I have worked as a Web Graphic Designer. I am worked on HTML, CSS, Bootstrap, JavaScript & Photoshop',
      year: 'June - 2020 – January - 2021'
    },
    {
      icnName: 'school',
      company_name: 'Vaibhav Global Limited',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
      summary : 'I have worked as a Web Graphic Designer. I am worked on HTML, CSS & Mostly worked on Photoshop for design banner and EPG for Official Website.',
      year: 'August - 2019 – January - 2020'
    },
    {
      icnName: 'school',
      company_name: 'Aunico India',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
      summary : 'I have worked as a Web Graphic Designer. I am worked on HTML, CSS, Bootstrap & Photoshop',
      year: 'November - 2018 – May - 2019'
    }
  ]


  /* RESPONSBILITY */
  responsbilities = [
    {
      data: 'Working on AngularJS UI Development.'
    },
  ]
}
