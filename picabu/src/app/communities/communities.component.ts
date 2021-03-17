import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
})
export class CommunitiesComponent {
    title : string = 'Все сообщества';

  communitiess : Array<any> = [
    {fileName : 'https://cs7.pikabu.ru/images/community/2708/1564735954248754509.png', communitiesName : 'Фабрика Мемов', descriptions : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {fileName : 'https://cs13.pikabu.ru/images/community/1360/1605016081289356325.png', communitiesName : 'Специфический юмор', descriptions : 'Contrary to popular belief, Lorem Ipsum is not simply random text.'},
    {fileName : 'https://cs14.pikabu.ru/images/community/544/1613311861254992080.png', communitiesName : 'Наука | Научпоп', descriptions : 'There are many variations of passages of Lorem Ipsum available.'},
  ];
}
