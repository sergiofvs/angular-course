import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

import { DirectivesComponent } from './components/directives/directives.component';
import { EventsComponent } from './components/events/events.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponentComponent,
  },
  {
    path: 'parent-data',
    component: ParentDataComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'animals',
    component: AnimalListComponent,
  },
  {
    path: 'animals/:id',
    component: AnimalDetailComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'two-way-binding',
    component: TwoWayBindingComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
