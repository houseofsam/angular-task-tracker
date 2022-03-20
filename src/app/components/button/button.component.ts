import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // accept props
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter(); //1

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit(); //2
  }
}
