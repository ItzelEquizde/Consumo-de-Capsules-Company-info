import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-5A';
  data: any[] = [];
  dataa: any[] = [];
  dataaa: any[] = [];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v4/rockets').subscribe((data: any) => {
      this.data = data;
    })
    this.http.get('https://api.spacexdata.com/v4/capsules').subscribe((dataa: any) => {
      this.dataa = dataa;
    })
    this.http.get('https://api.spacexdata.com/v4/company').subscribe((dataaa: any) => {
      this.dataaa = dataaa;
    })
  };
}
