import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
myStatus:string;
long:number;
lat:number;

  constructor(private storage:Storage, private flashlight:Flashlight,
    private geolocation:Geolocation) {}

  ionViewWillEnter(){

  }

  locationMethod(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  lightMethod(){
    this.flashlight.toggle();
  }
  
  ngOnInit(){
    this.storage.get("status").then(
      (data)=>{
        this.myStatus = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  }
}
