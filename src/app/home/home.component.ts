import { Component, OnInit,Input } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
import {users} from '../api/users';
import { httpService } from '../HttpService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ httpService]
})
export class HomeComponent implements OnInit {
    public title: string;
    public t:any;
    public titre:string;
    public tags: string;
    public description: string;
    public c=true;
    public questions= [];
    public newest= [];
    public user:users;
    public user2:users;
    public selectedquestion:any;
  constructor(private router:Router,public location: Location, public httpservice: httpService) { }

  ngOnInit() {

      this.user = {
          ID: 1,
          Name: "Ilyes belguith",
          email:"ilyes.belguith@supcom.tn",
          picture:"https://www.wikihow.com/images/f/ff/Draw-a-Cute-Cartoon-Person-Step-14.jpg",
          password:"ilyes"
      };
      this.user2 = {
          ID: 1,
          Name: "Rihab gharbi",
          email:"Rihab.gharbi@gmail.com",
          picture:"https://s-media-cache-ak0.pinimg.com/originals/99/b0/09/99b0093051705a1a4249d7df6d6ffff5.jpg",
          password:"rihab"
      };

      this.questions =
           [
              { "ID": "1",
                  "title":"How to use MegaCor and MegaCommon",
                  "content": "I'm trying to use megacommon and megacor and getting a lot of difficulties",
                  "tags": ["Megacor" , "MegaCommon"],
                  "date":"05/01/2018 17:12",
                  "uid":1
              },
               { "ID": "2",
                   "title":"What is MegaCommon?",
                   "content": "I'm trying to use megacommon could someone provide me with some documentation?",
                   "tags": ["MegaCommon"],
                   "date":"07/03/2018 10:20",
                   "uid":2
               },
          ];
      this.newest =
          [
              { "ID": "3",
                  "title":"How to use MegaCor ",
                  "content": "I'm trying to use  megacor and getting a lot of difficulties",
                  "tags": ["Megacor"],
                  "date":"07/03/2018 10:26",
                  "uid":3
              },
              { "ID": "2",
                  "title":"What is MegaCommon?",
                  "content": "I'm trying to use megacommon could someone provide me with some documentation?",
                  "tags": ["MegaCommon"],
                  "date":"07/03/2018 10:20",
                  "uid":2
              },
          ];

      this.getquestions();

      this.getquest(3);

    }
    gettitle(){
        console.log(this.t.q_title);
        this.titre=this.t.q_title;
        console.log(this.titre);

    }

    getquestions() {
        this.httpservice.getquestions().subscribe(
                data => console.log(data.json())
        )
    }
    getquest(i) {
        this.httpservice.getquestion(i).subscribe(
                data => this.t=data.json()

        )
    }

    onselectnewest(b) {
        this.selectedquestion = b;
        console.log(this.newest[b]);
        this.router.navigate(['/'+this.newest[b].ID])
    }
    onselectfrequent(b) {
        this.selectedquestion = b;
        console.log(this.questions[b]);
    }
  ask(){
      console.log(this.title);
      console.log(this.description);

      let q={
          "ID": "4",
          "title":this.title,
          "content": this.description,
          "tags": [this.tags],
          "date":"05/01/2018 17:12",
          "uid":1

      }
      console.log(q);
    this.newest.push(q);
   }
    getquestion(i){
        console.log(this.questions[i]);
    }
    click(){
        this.c=!this.c;
    }
    navigatetosearch(){
        this.router.navigate(['/search']);
    }
}
