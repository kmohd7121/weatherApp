import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { 
    console.log("Heloo kalam");
  }

  getData(type:any){
    // let url="https://api.openweathermap.org/data/2.5/weather?q="+type+"&appid=be99189ffaa858f8459f99ef1c099f85";
    let url= "http://api.weatherstack.com/current?access_key=c0f30548d5082603dc60200ba4eea19a&query="+type;
    return this.http.get(url).pipe(map((res:any)=>res));
  }

  getlocation(latitude:any,longitude:any){
    let url= `http://api.weatherstack.com/current?access_key=c0f30548d5082603dc60200ba4eea19a&query=${latitude},${longitude}`;
    return this.http.get(url).pipe(map((res:any)=>res));

  }
  getTimely(type:any){
    let url="https://api.openweathermap.org/data/2.5/forecast?q="+type+"&appid=904f4892e202e4b9e33580d6b6f2cd52";
    return this.http.get(url).pipe(map((res:any)=>res));
  }

}
