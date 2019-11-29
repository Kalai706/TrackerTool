import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, ChangeDetectorRef, ContentChild, AfterContentInit } from '@angular/core';
import { ExampleComponent } from './demo/example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  title = 'tracker-app';
  @ViewChildren(ExampleComponent) welcome : QueryList<any>;

  @ContentChild(ExampleComponent,{static:false}) welcomeentent: ExampleComponent;

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit(){
    console.log("After view init");
    console.log(this.welcome);
    //debugger;
    this.welcome.forEach(item=> {
      console.log(item);
      item.name="from parent";
      //item.nativeElement.innerHTML="wwww";
    });
    //debugger;
    //this.welcome.forEanativeElement.innerHTML = "wwww";
    console.log("sdsd");
    this.cdr.detectChanges();

  }

  ngAfterContentInit(){
    console.log("After content init");
    
  }
}
