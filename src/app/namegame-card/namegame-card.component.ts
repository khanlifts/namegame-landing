import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-namegame-card',
  templateUrl: './namegame-card.component.html',
  styleUrls: ['./namegame-card.component.sass']
})
export class NamegameCardComponent implements OnInit {
  @Input() rotateLeft = false;
  @Input() rotateRight = false;

  constructor() { }

  ngOnInit(): void {
  }

}
