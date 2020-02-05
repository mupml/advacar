import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private toggleElem: ElementRef) { }

  ngOnInit() {
    let toggleElement = this.toggleElem.nativeElement.querySelectorAll('.toggle');
  } 

  
  status: boolean = false;
  toggleClicked(){
    this.status = !this.status;
  }

}
