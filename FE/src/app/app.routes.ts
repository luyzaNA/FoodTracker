import { Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {ResultsComponent} from "./results/results.component";
import {FirstPageComponent} from "./first-page/first-page.component";
import {AddFoodComponent} from "./add-food/add-food.component";

export const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'add-food', component: AddFoodComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
