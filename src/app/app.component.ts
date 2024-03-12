//main class with properties and methods, references stylesheet amd html, app-root is the directive that navigates the DOM, we will put all our components into app.component.html

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular-world-map';
}
