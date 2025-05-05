import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css',
  standalone: false
})
export class AddExpenseComponent implements OnInit {
  expenseForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      expense: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  onSubmit(): void {
    if (this.expenseForm.invalid) {
      this.showValidationErrors();
      return;
    }

    const data = this.expenseForm.value;
    console.log('Expense Data:', data);
    // Submit logic here
  }

  private showValidationErrors(): void {
    const controls = this.expenseForm.controls;

    if (controls['expense'].hasError('required')) {
      this.toastr.error('Expense name is required', 'Validation Error');
    }

    if (controls['amount'].hasError('required')) {
      this.toastr.error('Amount is required', 'Validation Error');
    } else if (controls['amount'].hasError('pattern')) {
      this.toastr.error('Amount must be a valid number', 'Validation Error');
    }
  }

}
