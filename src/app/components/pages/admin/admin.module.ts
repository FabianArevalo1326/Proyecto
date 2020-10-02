import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {AdminComponent} from './admin.component';

import {LayoutModule} from '../../shared/layout/layout.module';
import {AdminPageRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminPageRoutingModule,
    LayoutModule,
  ],
  declarations: [AdminComponent],
  exports: []
})
export class AdminPageModule {}
