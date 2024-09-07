import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContentPage implements OnInit {

  constructor(private router: Router) { }

  additionPage() {
    this.router.navigate(['/addition']);
  }

  substractionPage() {
    this.router.navigate(['/substraction']);
  }

  multiplicationPage() {
    this.router.navigate(['/multiplication']);
  }

  divisionPage() {
    this.router.navigate(['/division']);
  }

  ngOnInit() {
  }

}
