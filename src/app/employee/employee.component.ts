import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name?: string;
  surname?: string;
  email?: string;
  address?: Address;
  books?: string[];
  editMode? = false;

  constructor() {
  }

  ngOnInit(): void {
    this.name = 'Stephen';
    this.surname = "King";
    this.address = {
      street: 'Solna',
      houseNo: '21',
      flatNo: '22',
      postalCode: '20-950 ',
      city: 'Portland'
    };
    this.email = 's.king@book.pl';
    this.books = ['To','Zielona mila', 'Później'];
  }

  addBook(item): void {
    item.length <1 ? alert("Nie można dodać pustego zbioru!") : this.books.push(item);
  }


  deleteBook(item): void {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i] === item) {
        this.books.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

}

interface Address {
  street: string;
  houseNo: string;
  flatNo: string;
  postalCode: string;
  city: string;
}
