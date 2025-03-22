export function calculateWaterIntake(weight: number): number {
  let waterIntake: number;
  waterIntake = weight * 30 - 5;

  return waterIntake;
}

export function calculateNCB(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  let bmr: number;

  if (gender === 'female') {
    bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
  } else {
    bmr = 66 + (13.75 * weight) + (5 * height) - (6.75 * age);
  }

  return bmr;
}

export function calculateNCT(bmr: number, activityLevel: number): number {
  return bmr * activityLevel;
}

export function calculateBMI(weight: number, height: number): number {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

export function calculateIdealWeight(gender: string, heightInCm: number): number {
  let idealWeight: number;

  if (gender.toLowerCase() === 'male') {
    idealWeight = 50 + 2.3 * (heightInCm - 152.4) / 2.54;
  } else if (gender.toLowerCase() === 'female') {
    idealWeight = 45.5 + 2.3 * (heightInCm - 152.4) / 2.54;
  } else {
    idealWeight = 0;
  }

  return idealWeight;
}

export function calculateNormalWeightRange(height: number): { min: number, max: number } {
  const heightInMeters = height / 100;
  const minWeight = 18.5 * (heightInMeters * heightInMeters);
  const maxWeight = 24.9 * (heightInMeters * heightInMeters);
  return { min: minWeight, max: maxWeight };
}
