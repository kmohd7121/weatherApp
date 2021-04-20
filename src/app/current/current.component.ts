import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
data:any;
text:any;
x:any;
option:any;
value:any;
localStorage:any;
latitude:any;
longitude:any;
loc:any;
forecast:any;
forecasting:Array<any>=[];
  constructor(private weather:WeatherService) { }
  findData(type:any){
      this.weather.getData(type).subscribe(data => {
        console.log(data);
        this.data=data;
      })
      this.weather.getlocation(this.latitude,this.longitude).subscribe(loc => {
        console.log(loc)
        this.loc=loc
      })
  }
  myFunction(city:any) {
    this.x = document.getElementById("myselect");
    var option = document.createElement("option");
    option.text = city;
    this.x.add(option);
  }
  removefunc(city:any){
    this.x = document.getElementById("myselect")
    this.x.remove(this.x.city)
  }
  Saveitem(value:any){
    //let localStorage:Storage;
    localStorage.setItem("city",value)
  }

  
  ngOnInit(): void {
    this.Getlocation()
  }
  
  Getlocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        this.latitude=position.coords.latitude
        this.longitude=position.coords.longitude
      })
    }
  }

  forecastWeather(type:any){
    console.log(type)
    this.weather.getTimely(type).subscribe(forecast=>{
      console.log(forecast)
      this.forecast=forecast
      for(let i=0;i<this.forecast.list.length;i++){
        if(i%8==0){
          console.log(this.forecast.list[i])
          this.forecasting.push(this.forecast.list[i])
        }
      }
    })
  }


}
