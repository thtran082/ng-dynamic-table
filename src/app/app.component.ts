import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-localization';

  rows = [
    { id: 1, name: 'test 1', date: Date.now()},
    { id: 2, name: 'test 2', date: Date.now()},
    { id: 3, name: 'test 3', date: Date.now()},
    { id: 4, name: 'test 4', date: Date.now()},
    { id: 5, name: 'test 5', date: Date.now()},
    { id: 6, name: 'test 6', date: Date.now()},
  ]
}
