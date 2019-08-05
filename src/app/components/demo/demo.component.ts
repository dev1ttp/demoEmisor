import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/interfaces/demo';
import { Demo2 } from 'src/app/interfaces/demo2';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public d1: Array<Demo>;
  public d2: Array<Demo2>;

  constructor(
    private _demo: DemoService
  ) { }

  ngOnInit() {

    this.getInfoFromDemo();
    this.getInfoFromDemo2();
  }


  public async getInfoFromDemo(){

    let response = await this._demo.getData();
    this.d1 = response['data'];
    console.log(this.d1);
  }

  public async getInfoFromDemo2(){

    let response = await this._demo.getData2();
    this.d2 = response['data'];
    console.log(this.d2);
  }

}
