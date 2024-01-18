import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  rootItems = ['Apples', 'Bannas', 'Cherries'];

  onItemAdded(newItem: string) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
