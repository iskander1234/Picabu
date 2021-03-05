import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {
  fullName : string = 'Iskander Dosgali';
  createData : Date = new Date();
  @Input() contentItem!: {title: string, description: string};
}
