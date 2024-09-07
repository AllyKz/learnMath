import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ArcComponent } from '../arc/arc.component';
// import { AdditionPage } from '../addition/addition.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.page.html',
  styleUrls: ['./start-quiz.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ArcComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartQuizPage implements OnInit {

  constructor(private router: Router) { }

  goToNextPage() {
    this.router.navigate(['/content']);
  }

  ngOnInit() {
  }

}
