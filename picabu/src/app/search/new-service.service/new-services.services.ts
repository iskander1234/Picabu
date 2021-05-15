export class NewServiceService{
    private users = [
      {name: 'John'},
      {name: 'Bob'},
      {name: 'Alice'},
    ];

    constructor() {}

    public getAll(){
      return this.users;
    }
}
