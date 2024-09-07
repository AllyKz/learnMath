import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiplication-question',
  templateUrl: './multiplication-question.component.html',
  styleUrls: ['./multiplication-question.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class MultiplicationQuestionComponent  implements OnInit {

  question: string;
  correctAnswer: number;
  userAnswer: number | null;
  resultMessage: string;
  resultColor: string;
  questionCount: number;
  correctAnsCount: number;

  constructor(private router: Router) { 
    this.question = ''; //initialize question
    this.correctAnswer = 0; //initialize correctAnswer
    this.userAnswer = null; //initialize userAnswer
    this.resultMessage = ''; //initialize resultMessage
    this.resultColor = ''; //initialize resultColor
    this.questionCount = 0; //initialize the questionCount 
    this.correctAnsCount = 0; //initialize the correctAnsCount
  }

  ngOnInit() {
    this.generateQuestion();
  }

  generateQuestion() {

    if(this.questionCount>=5)
    {
        this.router.navigate(['/congratulations'], {queryParams: {correctAnswers: this.correctAnsCount, totalQuestion: 5}});
    }

    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 60) + 1;

    this.question = `${num1} x ${num2}`;
    this.correctAnswer = num1 * num2;
    this.resultMessage = '';
    this.resultColor = '';
    this.userAnswer = null;
    console.log('pertama:%d', this.userAnswer);
  
  }

  checkAnswer() {
    console.log('kedua:%d', this.userAnswer);
    if(this.userAnswer === this.correctAnswer) {
      this.correctAnsCount++;
      this.resultMessage = 'Correct!';
      this.resultColor = 'success';
    } else {
      this.resultMessage = `Incorrect. The correct answer is ${this.correctAnswer}.`
      this.resultColor = 'danger';
    }

    this.questionCount++;
    setTimeout(() => this.generateQuestion(), 2000);
  }
}
