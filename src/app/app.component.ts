import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid';
public state: boolean;

public sname : string;
public sdata : string;

public cname : string;
public cdata : string;

public showState(opt:string){
  this.state = false;
  if(opt == "state"){
    this.state = true;
  }
}
}
