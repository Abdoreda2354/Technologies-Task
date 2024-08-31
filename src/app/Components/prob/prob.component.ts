import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prob',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.scss'
})
export class ProbComponent {
  @Output() dataEmitter = new EventEmitter<string>();
  @Output() propEmitter = new EventEmitter<{ briefDescription: string, expressiveDescription: string, Design: string }>();
  @ViewChild('normalExit') normalExit!:ElementRef
  @ViewChild('redExit') redExit!:ElementRef
  @ViewChild('backhover') backhover!:ElementRef
  constructor(private _Router:Router){}
  briefDescription:string="";
  expressiveDescription:string="";
  firstSection:boolean=true;
  secondSection:boolean=false;


  writeDescription:FormGroup=new FormGroup({
    briefDescription: new FormControl('',Validators.required),
    expressiveDescription: new FormControl('',Validators.required)
  })
  houseDesign:FormGroup=new FormGroup({
    Design: new FormControl('',Validators.required),
  })

  sendData(){
console.log(this.writeDescription.value);
this.firstSection=false
this.secondSection=true
  }

  sendHouseDesign(){

this.propEmitter.emit({ briefDescription:this.writeDescription.value.briefDescription, expressiveDescription:this.writeDescription.value.expressiveDescription, Design:this.houseDesign.value.Design})
this.dataEmitter.emit('submtion');

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
  this.dataEmitter.emit('selection');
}
backsec2(){
  this.firstSection=true
  this.secondSection=false
}
}
