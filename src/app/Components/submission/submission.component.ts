import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})
export class SubmissionComponent {
  @Output() dataEmitter = new EventEmitter<string>();
  @Output() DoneEmitter = new EventEmitter<string>();
  @ViewChild('normalExit') normalExit!:ElementRef
  @ViewChild('redExit') redExit!:ElementRef
  @ViewChild('backhover') backhover!:ElementRef
  firstSection:boolean=true;
  secondSection:boolean=false;
  progressValue: number = 0;
  intervalId: any;

  ngOnInit() {
    this.startProgress();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  startProgress() {
    this.intervalId = setInterval(() => {
      
      if (this.progressValue < 100) {

        this.progressValue += 1; 
        
      } else {
        clearInterval(this.intervalId); 
        this.onProgressComplete()
      }
    }, 70); 

  }

  onProgressComplete() {
    this.firstSection = false;
    this.secondSection = true;
    this.DoneEmitter.emit("Done")
  }
  navgiate(){
    this.dataEmitter.emit('prestep');
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
    this.dataEmitter.emit('prop');
  }
  backsec2(){
    this.firstSection = true;
    this.secondSection = false;
  }
  
}
