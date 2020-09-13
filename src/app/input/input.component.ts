import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() onElementAdd: EventEmitter<string> = new EventEmitter<string>();
  value = '';

  constructor() {}

  ngOnInit(): void {}

  add(value: string): void {
    if (value.trim() !== '') {
      this.onElementAdd.emit(value);
      this.clear();
    }
  }

  clear() {
    this.value = '';
  }
}
