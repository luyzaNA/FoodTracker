export interface UserInfoI {
  name: string;
  age: number;
  weight: number; //in kg
  height: number; // in cm
  gender: 'male' | 'female';
  activityLevel: number;
}

export class UserInfo implements UserInfo{
  name!: string;
  age!: number;
  weight!: number;
  height!: number;
  gender!: 'male' | 'female';
  activityLevel!: number;
}
