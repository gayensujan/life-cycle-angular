import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

tittle:string="this is property binding";
name='naga';

counter:number=0;

increment(){
  this.counter+=1
}
  constructor(){}

  ngOnInit(): void {

  }

}
