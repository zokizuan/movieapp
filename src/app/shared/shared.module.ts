import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


const modules = [
  MatToolbarModule,
  MatCardModule
]
  
@NgModule({
  declarations: [],
  imports: [...modules,
    CommonModule
  ],
  exports: [
    ...modules,
    
  ]
})
export class SharedModule { }
