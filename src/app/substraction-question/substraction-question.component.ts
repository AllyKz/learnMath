import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // The click event on the button ensures the traditional method of form submission works too
import { Router } from '@angular/router';

@Component({
  selector: 'app-substraction-question',
  templateUrl: './substraction-question.component.html',
  styleUrls: ['./substraction-question.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SubstractionQuestionComponent  implements OnInit {

  num1: number;
  num2: number;
  question: string;
  correctAnswer: number;
  userAnswer: number | null;
  resultMessage: string;
  resultColor: string;
  questionCount: number;
  correctAnsCount: number;
  

  constructor(private router: Router) { 
    this.num1 = 0;
    this.num2 = 0;
    this.question = '';
    this.correctAnswer = 0;
    this.userAnswer = null;
    this.resultMessage = '';
    this.resultColor = '';
    this.questionCount = 0;
    this.correctAnsCount = 0;
    }

  ngOnInit() {
    this.generateQuestion();
  }

  generateQuestion() {
    
    if(this.questionCount>=5)
    {
      this.router.navigate(['/congratulations'], {queryParams: {correctAnswers: this.correctAnsCount, totalQuestion: 5}});
    }

    // while(this.num1<=this.num2)
    // {
    //   this.num1 = Math.floor(Math.random() * 20) + 1;
    //   this.num2 = Math.floor(Math.random() * 60) + 1;
    // }

    do
    {
      this.num1 = Math.floor(Math.random() * 20) + 1;
      this.num2 = Math.floor(Math.random() * 60) + 1;

    } while(this.num1<this.num2)

      console.log('first:%d', this.num1);
    this.question = `${this.num1} - ${this.num2}`;
    this.correctAnswer = this.num1 - this.num2;
    this.resultMessage = '';
    this.resultColor = '';
    this.userAnswer = null;
    console.log('pertama:%s', this.resultMessage);



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
