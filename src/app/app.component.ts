import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Course';

  user_name = 'John Doe';
  user_data = {
    email: 'johnd@email.com',
    role: 'User'
  }
}
