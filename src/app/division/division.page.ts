import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DivisionQuestionComponent } from '../division-question/division-question.component';

@Component({
  selector: 'app-division',
  templateUrl: './division.page.html',
  styleUrls: ['./division.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, DivisionQuestionComponent]
})
export class DivisionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
