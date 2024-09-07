import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { create } from 'canvas-confetti';

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

// export class MathQuestion {
//   constructor() {
//     question: string;
//   correctAnswer: number;
//   userAnswer: number;
//   resultMessage: string;
//   resultColor: string;
//   }
// }

export class MathQuestionComponent  implements OnInit {

  question: string;
  correctAnswer: number;
  userAnswer: number | null;
  resultMessage: string;
  resultColor: string;
  questionCount: number;
  correctAnsCount: number;
  confetti: any;

  constructor(private router: Router) {
    this.question = ''; //initialize question
    this.correctAnswer = 0; //initialize correctAnswer
    this.userAnswer = null; //initialize userAnswer
    this.resultMessage = ''; //initialize resultMessage
    this.resultColor = ''; //initialize resultColor
    this.questionCount = 0; //initialize the questionCount 
    this.correctAnsCount = 0; //initialize the correctAnsCount
    // this.confetti = create();
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

    // for(let i=0; i<5; i++){
    //   const num1 = Math.floor(Math.random() * 20) + 1;
    //   const num2 = Math.floor(Math.random() * 60) + 1;
    //   this.question = `${num1} + ${num2}`;
    //   this.correctAnswer = num1 + num2;
    //   this.resultMessage = '';
    //   this.resultColor = '';
    //   this.userAnswer = null;
    // }

    this.question = `${num1} + ${num2}`;
    this.correctAnswer = num1 + num2;
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
      // this.triggerConfetti();
    } else {
      this.resultMessage = `Incorrect. The correct answer is ${this.correctAnswer}.`
      this.resultColor = 'danger';
    }

    this.questionCount++;
    setTimeout(() => this.generateQuestion(), 2000);

    // triggerConfetti() {
    //   this.confetti({
    //     particleCount: 100;
    //   })
    // }
  }

  

}
