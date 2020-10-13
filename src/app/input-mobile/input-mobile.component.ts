import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-mobile',
  templateUrl: './input-mobile.component.html',
  styleUrls: ['./input-mobile.component.css']
})
export class InputMobileComponent implements OnInit {
  @Input() inputModel: string;
  @Input() inputPlaceholder: string;
  @Input() inputPattern: string;
  @Output() inputModelChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
