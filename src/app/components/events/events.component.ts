import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  show: boolean = true;
  show_text: string = 'Hide';

  constructor() {}

  ngOnInit(): void {}

  showContent(): void {
    this.show = !this.show;
    this.show_text = this.show ? 'Hide' : 'Show';
  }
}
