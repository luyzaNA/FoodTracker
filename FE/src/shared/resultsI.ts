export interface ResultI{
    waterIntake: number;
    bmr: number;
    nct: number;
    bmi: number;
    idealWeight: number;
    normalWeightRange: { min: number, max: number };
}

export class Result implements ResultI {
  waterIntake!: number;
  bmr!: number;
  nct!: number;
  bmi!: number;
  idealWeight!: number;
  normalWeightRange!: { min: number, max: number };
}
