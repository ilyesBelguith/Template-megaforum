import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  public FAQs= [];

  constructor() { }

  ngOnInit() {
    this.FAQs =
        [
          { "ID": "1",
            "title":"How to use MegaCor and MegaCommon??",
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
  }

}
