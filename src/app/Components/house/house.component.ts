import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreStepComponent } from '../pre-step/pre-step.component';
import { CommonModule } from '@angular/common';
import { ProbComponent } from '../prob/prob.component';
import { SelectionComponent } from '../selection/selection.component';
import { SubmissionComponent } from '../submission/submission.component';
@Component({
  selector: 'app-house',
  standalone: true,
  imports: [RouterOutlet,PreStepComponent,CommonModule,ProbComponent,SelectionComponent,SubmissionComponent],
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
})
export class HouseComponent {
  dataFromChildren:object[]=[]
   activeComponent:string="prestep"
  Routing(data: string) {
    this.activeComponent=data    
  }
  dataFromPrestep(data: object) {
   this.dataFromChildren.push(data)      
  }
  dataFromSelection(data: object) {
    this.dataFromChildren.push(data)
  }
  dataFromProp(data: object) {
    this.dataFromChildren.push(data)
  }

  displayData(data:string){
    console.log(data + this.dataFromChildren);
    

  }

}
