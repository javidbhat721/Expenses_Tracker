import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {IndexComponent} from './index/index.component';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {EditExpenseComponent} from './edit-expense/edit-expense.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import {NgxSpinnerComponent} from 'ngx-spinner';

@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    AddExpenseComponent,
    EditExpenseComponent,
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DashboardRoutingModule,
    NgxSpinnerComponent
  ]
})
export class DashboardModule {}
