import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent {
  @Output() dataEmitter = new EventEmitter<string>();
  @Output() selectedplaceAndHouseEmitter = new EventEmitter<{ selectedplace: string, selectedhouse: string }>();
  @ViewChild('normalExit') normalExit!:ElementRef
  @ViewChild('redExit') redExit!:ElementRef
  @ViewChild('backhover') backhover!:ElementRef

  constructor(private _Router:Router){}
  placeTrue:boolean=true
  hoserTrue:boolean=false
  selectedplace:string=""
  selectedhouse:string=""
  selectplace(){
    this.placeTrue=false
    this.hoserTrue=true
    }
selecthouse(){
  this.selectedplaceAndHouseEmitter.emit({ selectedplace:this.selectedplace, selectedhouse:this.selectedhouse });

this.dataEmitter.emit('prop');
}

redexit(){
 console.log(this.redExit.nativeElement);
 
   this.normalExit.nativeElement.classList.add('d-none')
   this.redExit.nativeElement.classList.remove('d-none')
  

}
normalexit(){
  this.normalExit.nativeElement.classList.remove('d-none')
  this.redExit.nativeElement.classList.add('d-none')
}

disblayBox(){
this.backhover.nativeElement.classList.remove('d-none')
}

removeBox(){
this.backhover.nativeElement.classList.add('d-none')
}

backsec1(){
  this.dataEmitter.emit('prestep');
}
backsec2(){
  this.placeTrue=true
  this.hoserTrue=false
}
}
