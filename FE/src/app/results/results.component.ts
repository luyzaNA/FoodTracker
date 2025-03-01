import {Component, OnInit} from '@angular/core';
import {ResultI} from "../../shared/resultsI";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  result!: ResultI;

    ngOnInit() {
      const state = window.history.state;
      if (state && state['result']) {
        this.result = state['result'];
      }
  }
}
