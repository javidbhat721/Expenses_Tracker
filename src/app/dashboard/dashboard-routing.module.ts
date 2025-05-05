import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {IndexComponent} from './index/index.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {EditExpenseComponent} from './edit-expense/edit-expense.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },  // Redirect root to index
      { path: 'index', component: IndexComponent },
      { path: 'expenses-list', component: ExpenseListComponent },
      { path: 'add-expenses', component: AddExpenseComponent },
      { path: 'edit-expenses/:id', component: EditExpenseComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
