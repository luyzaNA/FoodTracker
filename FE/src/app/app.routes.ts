import { Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {ResultsComponent} from "./results/results.component";
import {FirstPageComponent} from "./first-page/first-page.component";
import {AddFoodComponent} from "./add-food/add-food.component";
import {FoodCalculatorComponent} from "./food-calculator/food-calculator.component";

export const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'calories-calculator', component: CalculatorComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'add-food', component: AddFoodComponent },
  { path: 'food-calculator', component: FoodCalculatorComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
