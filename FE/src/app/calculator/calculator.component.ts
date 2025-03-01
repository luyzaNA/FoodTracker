import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {
  calculateBMI,
  calculateIdealWeight,
  calculateNCB,
  calculateNCT, calculateNormalWeightRange,
  calculateWaterIntake
} from "../../services/calculateNCT";
import {FormsModule} from "@angular/forms";
import {UserInfo, UserInfoI} from "../../shared/userInfoI";
import {Result, ResultI} from "../../shared/resultsI";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatSelect,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  user: UserInfoI = new UserInfo();
  result: ResultI = new Result();

  constructor(private router: Router) {}

  calculate() {
    const waterIntake = calculateWaterIntake(this.user.weight);
    const bmr = calculateNCB(this.user.weight, this.user.height, this.user.age, this.user.gender);
    const nct = calculateNCT(bmr, this.user.activityLevel);
    const bmi = calculateBMI(this.user.weight, this.user.height);
    const idealWeight = calculateIdealWeight(this.user.gender, this.user.height);
    const normalWeightRange = calculateNormalWeightRange(this.user.height);

    this.result = {
      waterIntake,
      bmr,
      nct,
      bmi,
      idealWeight,
      normalWeightRange
    };
    this.router.navigate(['/results'], {
      state: { result: this.result }
    });
  }

}
