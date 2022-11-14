import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-namegame-card',
  templateUrl: './namegame-card-container.component.html',
  styleUrls: ['./namegame-card-container.component.sass']
})
export class NamegameCardContainerComponent implements OnInit {
  @Input() rotateLeft = false;
  @Input() rotateRight = false;

  constructor() { }

  ngOnInit(): void {
  }

}
