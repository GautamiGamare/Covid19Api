import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dist',
  templateUrl: './dist.component.html',
  styleUrls: ['./dist.component.css']
})
export class DistComponent implements OnInit {
@Input() public sname;
@Input() public sdata;

@Output() public cname = new EventEmitter();
@Output() public detail = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
public sendDetail(name,val){
  this.cname.emit(name);
  this.detail.emit(val);
  console.log(name);
  console.log(val);
}
}
