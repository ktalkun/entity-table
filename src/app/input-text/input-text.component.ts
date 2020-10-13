import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }

}
