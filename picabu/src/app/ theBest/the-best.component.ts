import {Component, OnInit} from '@angular/core';
import {NewServiceService} from '../search/new-service.service/new-services.services';

@Component({
  selector: 'app-the-best',
  templateUrl: './the-best.component.html',
})
export class TheBestComponent implements OnInit{

  public users: any;

  // tslint:disable-next-line:variable-name
  constructor(private _newService: NewServiceService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.users = this._newService.getAll();
  }
}
