import { Component, OnInit, isDevMode } from '@angular/core';
import { Demo } from 'src/app/interfaces/demo';
import { Demo2 } from 'src/app/interfaces/demo2';
import { DemoService } from 'src/app/services/demo.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  //styleUrls: ['./demo.component.css']

  public d1: Array<Demo>;
  public d2: Array<Demo2>;

  public current: any;

  constructor(
    private _demo: DemoService,

  ) { }

  ngOnInit() {

    this.getInfoFromDemo();
    this.getInfoFromDemo2();

    this.current = "styles1.css";


      //require("style-loader!./../../../assets/css/styles1.css");
      //var asd = require("style-loader!./../../../assets/css/"+this.current)

      //require("style-loader!./../../../"+this.current);

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

  public async updateStyle(fileName: string){

    
    require("style-loader!./../../../assets/css/"+fileName);
    console.log(fileName);

    //console.log(document.styleSheets)

  }



}
