import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
})
export class AnimalDetailComponent implements OnInit {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  ngOnInit(): void {}

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
