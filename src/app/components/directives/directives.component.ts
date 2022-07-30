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

  animal_types: Array<string> = ['Dog', 'Cat', 'Horse'];
  animals: Array<any> = [
    { name: 'Nina', type: this.animal_types[0] },
    { name: 'Gatuno', type: this.animal_types[1] },
    { name: 'Bob', type: this.animal_types[0] },
    { name: 'Fred', type: this.animal_types[2] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
