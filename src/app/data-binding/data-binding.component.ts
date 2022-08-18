import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name = "Interpolation binding"
  public topic = "Data binding"
  public value = ""
  public image = "/assets/Reakona.png"

  onClick() {
    console.log("Thank you for subscribing")
  }
}
