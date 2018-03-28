import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-addforum',
  templateUrl: './addforum.component.html',
  styleUrls: ['./addforum.component.scss']
})
export class AddforumComponent implements OnInit {
  path:string;
  newest=[];
  len:number;
  title:string;
  resp=true;
  star=true;
  description:string;
  comm=[];
  tags=[];
  res=[];
  r=[];
  response:string;
  c=true;
  b=true;
  liked=true;
  constructor(public location: Location) {


  }

  ngOnInit() {
    console.log(this.location.path())
    this.path=this.location.path();
    this.path=this.path.slice(1);
    console.log(this.path)
    this.res=[
      {
        "Idc":"1",
        "CommentContent":"Read doc ",
        "Like":false,
        "Dislike":true,
        "Responses":[
          {
            "Rid":"1",
            "Rcontent":"Thank you ",
            "Uid":"jfjshoj"
          }
        ],
        "Uid":"qhsjfkjf"
      }
    ];
    this.r=this.res[0].Responses;
    console.log(this.res);
    this.newest =
        [
          { "ID": "3",
            "title":"How to use MegaCor ? ",
            "content": "I'm trying to use  megacor and getting a lot of difficulties",
            "tags": ["Megacor"],
            "date":"07/03/2018 10:26",
            "uid":3,
            "Comments":[
              {
                "Idc":"1",
                "CommentContent":"Read doc ",
                "Like":false,
                "Dislike":true,
                "Responses":[
                  {
                    "Rid":"1",
                    "Rcontent":"Thank you ",
                    "Uid":"jfjshoj"
                  }
                ],
                "Uid":"qhsjfkjf"
              }
            ]
          },
          { "ID": "2",
            "title":"What is MegaCommon?",
            "content": "I'm trying to use megacommon could someone provide me with some documentation?",
            "tags": ["MegaCommon"],
            "date":"07/03/2018 10:20",
            "uid":2,
            "Comments":[
              {
                "Idc":"2",
                "CommentContent":"visit this link ",
                "Like":false,
                "Dislike":false,
                "Responses":[
                  {
                    "Rid":"2",
                    "Rcontent":"Thanks ",
                    "Uid":"jgfsdkjh"
                  }
                ],
                "Uid":"qhkjgjjb"
              }
            ]
          },
        ];
    this.len=this.newest.length;
    for(var i = 0;i< this.len;i++) {
      console.log(this.newest[i].ID);
      if (this.path==this.newest[i].ID){
        this.title=this.newest[i].title;
        this.description=this.newest[i].content;
        this.tags=this.newest[i].tags;
        this.comm=this.newest[i].Comments;

      }

    }


  }

  click(){

    this.c=!this.c;
  }
  clickd(){
    this.b=!this.b;
  }
  like(){

   this.resp= false;

  }
  favourite(){

   this.star= !this.star;

  }
  respond(){
if(this.response!=null){


    console.log(this.response);

    let q={
      "ID": "6",
      "Rcontent": this.response,
      "Uid":"jgfsdkjh"

    }
    console.log(q);
    this.r.push(q);
    this.resp=true;
  }else{

  alert("Please write an answer!");
}
}

}