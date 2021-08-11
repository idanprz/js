import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './view/categories/all/all.component';
import { SnacksComponent } from './view/categories/snacks/snacks.component';
import { DrinksComponent } from './view/categories/drinks/drinks.component';
import { CleaningComponent } from './view/categories/cleaning/cleaning.component';

const routes: Routes = [
    {path:'', component:AllComponent},
    {path:'all', component:AllComponent},
    {path:'snacks', component:SnacksComponent},
    {path:'drinks', component:DrinksComponent},
    {path:'cleaning', component:CleaningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
