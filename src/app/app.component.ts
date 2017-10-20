import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: `<ng2-smart-table [settings]="settings"></ng2-smart-table>`
})
export class AppComponent {
  //title = 'app';
  settings = {
    columns: {
      id: {
        title: 'Kode'
      },
      name: {
        title: 'Nama'
      },
      year: {
        title: 'Angkatan'
      },
      major:{
        title:'Jurusan'
      },
      address:{
        title:'alamat'
      },
      email: {
        title: 'Email'
      },
      phone: {
        title:'telp.'
      }
    }
  };
}
