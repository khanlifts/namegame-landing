import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namegame-main-page',
  templateUrl: './namegame-main-page.component.html',
  styleUrls: ['./namegame-main-page.component.sass']
})
export class NamegameMainPageComponent implements OnInit {
  private scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    this.scrollToTop();
  }
}
