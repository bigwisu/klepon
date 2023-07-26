import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'klepon-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent {
  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;

  onBurgerClicked() {
    this.hamburger.nativeElement.classList.toggle('hambuger-active');
    this.navMenu.nativeElement.classList.toggle('hidden');
  }

  title = 'Klepon';

}
