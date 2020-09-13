import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() itemList: Item[];
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  deleteElem(id_: string) {
    this.onDelete.emit(id_);
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
