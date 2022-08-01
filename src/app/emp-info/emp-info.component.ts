import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {

  infoReceived1: string[] = [];

  infoReceived2: string[] = [];

  infoReceived3: string[] = [];


  getInfoFromService1() {

    this.infoReceived1 = this.rservice.getInfo1()

  }

  getInfoFromService2() {

    this.infoReceived2 = this.rservice.getInfo2()

  }

  getInfoFromService3() {

    this.infoReceived3 = this.rservice.getInfo3()

  }
  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

  updateInfo(frm: any) {
    this.rservice.addInfo({ info: frm.value.location })
  }

}
