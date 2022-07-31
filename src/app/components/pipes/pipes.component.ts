import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  text: string = 'SOME TEXT';
  today: Date = new Date();
  money: number = 275.9875;

  constructor() {}

  ngOnInit(): void {}
}
