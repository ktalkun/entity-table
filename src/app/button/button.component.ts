import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() isDisabled: boolean;
  @Output('click') buttonClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}
