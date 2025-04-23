import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {Food, FoodI} from "../../shared/FoodI";
import {FoodService} from "../../services/food.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FoodService],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css'
})
export class AddFoodComponent {
  food: FoodI = new Food();

  constructor(private foodService: FoodService) {}

  addFood() {
    this.foodService.addFood(this.food).subscribe(response => {
      console.log('Food added successfully:', response);
      alert("Successfully added");

    }, error => {
      console.error('Error adding food:', error);
    });
  }
}
