import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CleaningComponent } from './view/categories/cleaning/cleaning.component';

const routes: Routes = [
    // {path:'', component:AllComponent},
    // {path:'all', component:AllComponent},
    // {path:'snacks', component:SnacksComponent},
    // {path:'drinks', component:DrinksComponent},
    // {path:'cleaning', component:CleaningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
