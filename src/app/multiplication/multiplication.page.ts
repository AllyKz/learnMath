import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MultiplicationQuestionComponent } from '../multiplication-question/multiplication-question.component';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.page.html',
  styleUrls: ['./multiplication.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MultiplicationQuestionComponent]
})
export class MultiplicationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
