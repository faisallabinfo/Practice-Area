import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraphlog',
  templateUrl: './paragraphlog.component.html',
  styleUrls: ['./paragraphlog.component.css']
})
export class ParagraphlogComponent {
  buttonText:string="Hide";
  btnStatus=true;
  logData:string[]=[];
  addLog() {
    this.logData.push(new Date().toString());
  }

  changeStatus() {

    this.btnStatus=!this.btnStatus;
    this.buttonText==="Show"?this.buttonText="Hide":this.buttonText="Show";
    this.addLog();
  }

  
}
