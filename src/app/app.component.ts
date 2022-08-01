import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'Angular Course';

  user_name = 'John Doe';
  user_data = {
    email: 'johnd@email.com',
    role: 'User',
  };

  titles: Array<string> = [
    'Angular Course',
    'Learning Angular',
    'Studying Angular',
    'Getting started with Angular',
    'Angular for dummies',
  ];
  used_titles: Array<string> = [];

  generateAppTitle(): string {
    let random_title;

    if (this.used_titles.length === this.titles.length) {
      this.used_titles.length = 0;
    }

    do {
      random_title =
        this.titles[Math.floor(Math.random() * this.titles.length)];
    } while (this.used_titles.indexOf(random_title) !== -1);

    this.used_titles.push(random_title);

    return random_title;
  }

  onChangeAppTitle(): void {
    this.title = this.generateAppTitle();
  }

  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
