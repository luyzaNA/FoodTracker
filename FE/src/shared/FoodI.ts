export interface FoodI {
  name: string;
  calories: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
  fiber: number;
  weight: number;
}

export class Food implements FoodI{
  name!: string;
  calories!: number;
  proteins!: number;
  carbohydrates!: number;
  fats!: number;
  fiber!: number;
  weight!: number;
}
