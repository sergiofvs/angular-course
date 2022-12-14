import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  font_size: number = 2;
  font_family: string = 'serif';
  color: string = 'var(--color-primary)';

  paragraph: string = 'paragraph';
  introduction: Array<string> = [this.paragraph, 'foreword'];

  @Input() name: string = '';
  show_content: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
