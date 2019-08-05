import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {



  constructor(
    private _http:HttpClient
  ) { }


  async getData(){

    try{
      return await this._http.get("src/data.json").toPromise();
    }
    catch (error) {
      let response = {
        'status': false,
        'message': 'Error al ejecutar petición',
        'code': error.status
      };
      return response;
    }
    
  }

  async getData2(){

    try{
      return await this._http.get("src/data2.json").toPromise();
    }
    catch (error) {
      let response = {
        'status': false,
        'message': 'Error al ejecutar petición',
        'code': error.status
      };
      return response;
    }

  }

}
