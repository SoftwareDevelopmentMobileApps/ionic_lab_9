import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  myStatus:string;

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  onSave(){
    console.log(this.myStatus);
    this.storage.set("status", this.myStatus);

  }
}
