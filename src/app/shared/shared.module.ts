import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


const modules = [
  MatToolbarModule,
  MatCardModule,
  MatGridListModule
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
