import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MathQuestionComponent } from '../math-question/math-question.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.page.html',
  styleUrls: ['./congratulations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MathQuestionComponent]
})
export class CongratulationsPage implements OnInit {

  correctAnswers: number = 0;
  totalQuestion: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  goToNextPage() {
    this.router.navigate(['/start-quiz']);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.correctAnswers = +params['correctAnswers'] || 0;
      this.totalQuestion = +params['totalQuestion'] || 0;

      });
  }

}
