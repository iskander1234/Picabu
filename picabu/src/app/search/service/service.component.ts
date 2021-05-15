import { Component, OnInit } from '@angular/core';
import {NewServiceService} from '../new-service.service/new-services.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent{
  userName: string = "";
  response: any;

  constructor(private http: HttpClient) {

  }

  search(){
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })

    //toddmotto
    //angular

  }
}
