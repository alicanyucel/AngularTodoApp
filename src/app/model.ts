export class Model{
    user;
    items;
    constructor()
    {
        this.user="alican";
        this.items=[
            new TodoItem("spor",false),
            new TodoItem("sinema",false),
            new TodoItem("muzik",true),
          ];
    }
}

export class TodoItem{
    Description;
    Action;
    constructor(Description:string,Action:boolean)
    {
        this.Description=Description;
        this.Action=Action;
    }
}