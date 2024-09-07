import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AdditionPage } from './addition/addition.page';
import { StartQuizPage } from './start-quiz/start-quiz.page';

export const routes: Routes = [
   // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    // redirectTo: 'home',
    // pathMatch: 'full',
    component: StartQuizPage
  },
    {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'math',
    loadComponent: () => import('./math-question/math-question.component').then((m) => m.MathQuestionComponent),
  },
  {
    path: 'subQuestion',
    loadComponent: () => import('./substraction-question/substraction-question.component').then((m) => m.SubstractionQuestionComponent),
  },
  {
    path: 'multiplicationQuestion',
    loadComponent: () => import('./multiplication-question/multiplication-question.component').then((m) => m.MultiplicationQuestionComponent),
  },
  {
    path: 'divQuestion',
    loadComponent: () => import('./division-question/division-question.component').then((m) => m.DivisionQuestionComponent),
  },
  {
    path: 'testing1',
    loadComponent: () => import('./testing1/testing1.page').then( m => m.Testing1Page)
  },
  {
    path: 'home-proj',
    loadComponent: () => import('./home-proj/home-proj.page').then( m => m.HomeProjPage)
  },
  {
    path: 'start-quiz',
    loadComponent: () => import('./start-quiz/start-quiz.page').then( m => m.StartQuizPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'addition',
    loadComponent: () => import('./addition/addition.page').then( m => m.AdditionPage)
  },
  {
    path: 'content',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'congratulations',
    loadComponent: () => import('./congratulations/congratulations.page').then( m => m.CongratulationsPage)
  },
  {
    path: 'substraction',
    loadComponent: () => import('./substraction/substraction.page').then( m => m.SubstractionPage)
  },
  {
    path: 'multiplication',
    loadComponent: () => import('./multiplication/multiplication.page').then( m => m.MultiplicationPage)
  },
  {
    path: 'division',
    loadComponent: () => import('./division/division.page').then( m => m.DivisionPage)
  },
  // {
  //   path: 'addition',
  //   component: AdditionPage
  // },
 
 
];
