import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hit';

  child:any="sending data parent to child";

  myfun(val:any){
    this.child=val;
  }

counter=0;
  updatecounter(){
 this.counter+=1;
  }
}
