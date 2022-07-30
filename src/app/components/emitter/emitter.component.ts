import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent implements OnInit {
  current_number: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber(): void {
    this.current_number = Math.floor(Math.random() * 100);
  }
}
