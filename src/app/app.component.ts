import { Component } from '@angular/core';
import { Model,TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model=new Model();
  IsDisplay=false;
  GetName()
  {
    return this.model.user;
  }
  GetItems()
  {
    if(this.IsDisplay)
    {
      return this.model.items;
    }
    return this.model.items.filter(item=>!item.Action);
  }
  addItem(value:string){
    if(value!="")
    {
      this.model.items.push(new TodoItem(value,false));
    }
  }
}
