import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {

  constructor(private s1:CustService) { }

  ngOnInit(): void {
  }
insertcustdata(insertform:{value:any;})
{
    return this.s1.insertservice(insertform.value).subscribe();
}
}
