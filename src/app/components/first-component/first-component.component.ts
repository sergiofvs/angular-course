import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Sergio';
  age: number = 28;
  job = 'Frontend Dev';
  location = {
    city: 'Barueri',
    state: 'São Paulo'
  };
  hobbies = ['Listening to music', 'Reading', 'Gaming'];

  constructor() { }

  ngOnInit(): void {
  }

}
