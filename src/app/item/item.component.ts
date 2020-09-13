import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() receivedItem: Item;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  checked = false;

  constructor() {}

  ngOnInit(): void {
    this.checked  = this.receivedItem.checked;
  }

  delete() {
    this.onDelete.emit(this.receivedItem.id);
  }
}
