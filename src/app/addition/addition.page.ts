import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MathQuestionComponent } from '../math-question/math-question.component';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.page.html',
  styleUrls: ['./addition.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MathQuestionComponent]
})
export class AdditionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
