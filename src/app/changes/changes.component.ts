import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges,  } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterViewInit,AfterViewChecked {

  name:string="";

  @Input() myinput:any;

  constructor(){}

  ngOnInit(): void {
console.log('ng on init run');
  }

  ngAfterContentInit(): void {
    console.log('run ng after init')
  }

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}

ngDoCheck(): void {
console.log('ng do check');
}

ngAfterViewInit(): void {
console.log('view init call');
}

ngAfterViewChecked(): void {
console.log('view checked call');
}



}
