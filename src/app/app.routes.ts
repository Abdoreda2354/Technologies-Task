import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./Components/house/house.component').then((m)=>m.HouseComponent),children:[
        {path:'',redirectTo:'pre-step' ,pathMatch:'full'},
         {path:'pre-step',loadComponent:()=>import('./Components/pre-step/pre-step.component').then((m)=>m.PreStepComponent)},
         {path:'selection',loadComponent:()=>import('./Components/selection/selection.component').then((m)=>m.SelectionComponent)},
         {path:'Prop',loadComponent:()=>import('./Components/prob/prob.component').then((m)=>m.ProbComponent)},
        {path:'submision',loadComponent:()=>import('./Components/submission/submission.component').then((m)=>m.SubmissionComponent)},
    ]}
];
