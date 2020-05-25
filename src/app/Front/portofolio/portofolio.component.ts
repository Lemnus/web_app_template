import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  public items = [1,2,3,4,5];

  showControls:boolean;

  constructor() {}

  ngOnInit(): void {
  }

 next(){
    var num:number = 0; 
    var i:number; 
    var temp:number=this.items[0];
    for(i = num;i<5;i++) {
      this.items[i]=this.items[i+1];
    }
    this.items[4]=temp;
  }

  prev(){
    var i:number; 
    for(i=1;i<5;i++){
      this.next();
    }
  }
}
