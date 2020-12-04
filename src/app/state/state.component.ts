import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  public data;
  @Output() public state_name = new EventEmitter();
  @Output() public state_data = new EventEmitter();

  constructor(private covid:HttpClient) { 
    let url:string = "https://api.covid19india.org/state_district_wise.json";
    this.covid.get(url).subscribe((resData:JSON)=>{
      this.data = resData;
  });
}
  ngOnInit(): void {
  }

  public send_state(dname,ddata){
    this.state_name.emit(dname);
    this.state_data.emit(ddata);
  }

  }    