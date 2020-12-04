import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

@Input() public cname;
@Input() public cdata;
  constructor() { }

  ngOnInit(): void {
  }

}
