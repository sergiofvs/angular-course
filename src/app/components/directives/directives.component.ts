import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/animal';

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
  animals: Array<Animal> = [
    { name: 'Nina', type: this.animal_types[0], age: 15 },
    { name: 'Gatuno', type: this.animal_types[1], age: 3 },
    { name: 'Bob', type: this.animal_types[0], age: 5 },
    { name: 'Fred', type: this.animal_types[2], age: 6 },
  ];
  new_animal: Animal = {
    name: 'Felix',
    type: this.animal_types[1],
    age: 1,
  };
  animal_details: string = '';

  constructor() {}

  ngOnInit(): void {
    this.animals.push(this.new_animal);
  }

  showAge(animal: Animal) {
    this.animal_details = `Pet ${animal.name} is ${animal.age} years old.`;
  }
}
