import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
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
