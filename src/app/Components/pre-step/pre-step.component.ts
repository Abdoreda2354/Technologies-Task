import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pre-step',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.scss'
})
export class PreStepComponent {
  @Output() dataEmitter = new EventEmitter<string>();
  @Output() selectCampaignBuildingEmitter = new EventEmitter<{ methodOfCreate: string, nameOfProject: string }>();

  selectedOption: string = '';
constructor(){}
  selectCampaignBuilding:FormGroup=new FormGroup({
    methodOfCreate:new FormControl(''),
    nameOfProject:new FormControl('',Validators.required)
  })



  start(){
    const methodOfCreate= this.selectCampaignBuilding.value.methodOfCreate
    const nameOfProject= this.selectCampaignBuilding.value.nameOfProject
    this.selectCampaignBuildingEmitter.emit({ methodOfCreate,nameOfProject });
    this.dataEmitter.emit('selection');
  }
}
