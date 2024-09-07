import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { SubstractionQuestionComponent } from '../substraction-question/substraction-question.component';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.page.html',
  styleUrls: ['./substraction.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SubstractionQuestionComponent]
})
export class SubstractionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
