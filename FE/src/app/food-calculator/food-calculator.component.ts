import { Component, OnInit } from '@angular/core';
import { FoodService } from "../../services/food.service";
import { FoodI } from "../../shared/FoodI";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-food-calculator',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [FoodService],
  templateUrl: './food-calculator.component.html',
  styleUrls: ['./food-calculator.component.css']
})
export class FoodCalculatorComponent implements OnInit {
  foods: FoodI[] = [];
  searchTerm: string = '';
  filteredFoods: FoodI[] = [];
  selectedFoods: FoodI[] = [];
  displayedColumns: string[] = ['name', 'weight', 'calories', 'proteins', 'carbohydrates', 'fats', 'fiber', 'actions'];
  calculatedfoods: FoodI[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe({
      next: (data) => {
        this.foods = data;
        this.filteredFoods = this.foods;
        this.calculatedfoods = this.foods;
      },
    });
  }

  onSearchChange() {
    this.filteredFoods = this.foods.filter(food =>
      food.name.toLowerCase().startsWith(this.searchTerm.toLowerCase())
    );
  }

  onSelectionChange(event: any) {
    event.source.selectedOptions.selected.forEach((option: any) => {
      const food: FoodI = option.value;
      this.addFoodToTable(food);
    });
  }

  addFoodToTable(food: FoodI) {
    if (!this.selectedFoods.some(f => f.name === food.name)) {
      this.selectedFoods = [...this.selectedFoods, { ...food }];
      this.searchTerm = '';
    }
  }

  removeFoodFromTable(food: FoodI) {
    this.selectedFoods = this.selectedFoods.filter(f => f.name !== food.name);
  }

  onWeightChange(food: FoodI) {
    const originalWeight = 100;
    const dbFood = this.foods.find(dbFood => food.name === dbFood.name);
    const scaleFactor = food.weight / originalWeight;

    if (!dbFood) {
      return;
    }
    food.calories = Math.round(dbFood.calories * scaleFactor);
    food.proteins = Math.round(dbFood.proteins * scaleFactor);
    food.carbohydrates = Math.round(dbFood.carbohydrates * scaleFactor);
    food.fats = Math.round(dbFood.fats * scaleFactor);
    food.fiber = Math.round(dbFood.fiber * scaleFactor);
  }

  getTotal(property: keyof FoodI): number {
    return this.selectedFoods.reduce((sum, food) => sum + (food[property] as number || 0), 0);
  }
}
