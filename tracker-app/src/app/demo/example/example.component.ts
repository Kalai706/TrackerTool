import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Query, ViewChildren, QueryList, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent  {

  name: string ="weleeeee";

  @Input()child: string;

  constructor() { }

  // @ViewChildren('welcomeref') welcome : QueryList<ElementRef>;

  // ngOnInit() {
  // }

  // ngAfterViewInit(){
  //   console.log("After view init");
  //   this.welcome.forEach(item=> {
  //     console.log(item);
  //     item.nativeElement.innerHTML="wwww";
  //   });
  //   console.log(this.welcome);
  //   //this.welcome.forEanativeElement.innerHTML = "wwww";
  //   console.log("sdsd");
  // }
  }
