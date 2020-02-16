import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SaleItemComponent } from './sale-item/sale-item.component';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  // { path: 'forgot', component: CardComponent },
];

@NgModule({
  declarations: [CardComponent, DashboardComponent, SaleItemComponent],
  entryComponents: [SaleItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, 
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
