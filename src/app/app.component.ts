import { Component, OnInit } from '@angular/core';
import { Item } from './item/item';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  itemList: Item[];

  ngOnInit(): void {
    this.itemList = [
      { id: uuid(), name: 'Acheter de la pizza', checked: true },
      { id: uuid(), name: 'Regarde MisterMV', checked: false },
      { id: uuid(), name: "Boire de l'eau", checked: true },
      { id: uuid(), name: 'Sauver le monde', checked: false },
      { id: uuid(), name: 'Chèque de loyer', checked: false },
    ];
  }

  addItem(value: string) {
    this.itemList.push({ id: uuid(), name: value, checked: false });
  }

  deleteElem(id_: string) {
    this.itemList = this.itemList.filter((item) => item.id !== id_);
  }
}
