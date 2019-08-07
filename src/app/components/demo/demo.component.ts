import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/interfaces/demo';
import { Demo2 } from 'src/app/interfaces/demo2';
import { DemoService } from 'src/app/services/demo.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public d1: Array<Demo>;
  public d2: Array<Demo2>;

  public current: any;

  constructor(
    private _demo: DemoService,

  ) { }

  ngOnInit() {

    this.getCSSFromDemo();
    this.getJSFromDemo2();

    //this.current = "styles1.css";
    //require("style-loader!./../../../assets/css/styles1.css");
    //var asd = require("style-loader!./../../../assets/css/"+this.current)
    //console.log(document.styleSheets)
    //require("style-loader!./../../../"+this.current);

  }


  public async getCSSFromDemo() {

    let response = await this._demo.getData();
    this.d1 = response['data'];
    console.log(this.d1);
  }

  public async getJSFromDemo2() {

    let response = await this._demo.getData2();
    this.d2 = response['data'];
    console.log(this.d2);
  }

  public async loadStyle(fileName: string) {

    let head = document.getElementsByTagName('head')[0];
    //head.removeChild();

    /* console.log(document.getElementsByTagName('head')[0].childNodes[14].remove);
    console.log(document.getElementsByTagName('head')[0].childNodes); */
    

    //let childLenght = document.getElementsByTagName('head')[0].childNodes.length;
    //let childRemove = document.getElementsByTagName('head')[0].getElementsByTagName('script')[childLenght-1];

    document.getElementsByTagName('head')[0].parentNode;

    




    //console.log(document.getElementsByTagName('head')[0].childNodes[childLenght - 1]);

    

    /*     $(document).ready(function(){
    
          $("link[href='styles1.css']").remove();
    
        }); */

    //document.styleSheets[document.styleSheets.length - 1].disabled = true;

    //location.reload(true);

    require("style-loader!./../../../assets/css/" + fileName);

    //location.reload(true);

    console.log(fileName);

    console.log(document.styleSheets)

  }



}
