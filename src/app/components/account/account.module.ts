import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
  ],
})
export class AccountModule {}
