import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/animal';
import { ListService } from 'src/app/services/list.service';

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

  animals: Array<Animal> = [];
  animal_details: string = '';

  new_animal: Animal = {
    name: 'Felix',
    type: 'Cat',
    age: 1,
  };

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animal_details = `Pet ${animal.name} is ${animal.age} years old.`;
  }

  removeAnimal(animal: Animal) {
    if (typeof animal.id === 'number') {
      const animal_name = animal.name;
      this.listService
        .remove(animal.id)
        .subscribe(() => alert(`🔵 ${animal_name} removed!`));
    }
    this.getAnimals();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  addAnimal(): void {
    this.listService
      .post(this.new_animal)
      .subscribe((animal) => alert(`🟢 ${animal.name} added!`));
    this.getAnimals();
  }
}
