import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectlist = [
    {
      id: 1,
      projectimage: 'okhlama',
      projectname: 'Okchiller',
      projectdescription: 'This website is created on Wordpress using Divi Elementor',
      redirectURL: 'https://www.okchiller.com/'
    },
    {
      id: 2,
      projectimage: 'targetpoint',
      projectname: 'Target Point Defence Academy',
      projectdescription: 'This website is created on HTML, CSS & JavaScript',
      redirectURL: 'https://targetpointdefence.com/'
    },
    {
      id: 3,
      projectimage: 'lauren-interiors',
      projectname: 'Lauren Interiors',
      projectdescription: 'This website is created on Shopify.',
      redirectURL: 'https://www.lauren-interiors.com/'
    }
  ]
}
