import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy{


  constructor(){}

  save=false

  ngOnDestroy(): void {
if(!this.save){
  alert("save data")
}
  }

}
