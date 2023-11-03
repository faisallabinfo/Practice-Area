import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  //serverId:number=10;
  //serverStatus:string="Offline";
  // serverId:number[] = [1,2,3,4,5,6,7,8,9];
  // serverName:string[] = [
  //   "Alpha",
  //   "Beta",
  //   "Gamma",
  //   "Delta",
  //   "Epsilon",
  //   "Zeta",
  //   "Eta",
  //   "Theta",
  //   "Iota"
  // ];
  btnStatus=false;

  //Server creation message
  serverStatus="Server not exist!";
  getButtonStatus() {
    return this.btnStatus;
  }
  constructor() {
    setTimeout(()=>{
      this.btnStatus=true;
    },2000)
  }
  createServer() {
    alert("Created!");
    this.serverStatus="Server Created!";
  }

  getData(event:Event) {
    this.serverStatus=(<HTMLInputElement>event.target).value;
  }

}
