import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-validation',
  templateUrl: './dynamic-form-validation.component.html',
  styleUrls: ['./dynamic-form-validation.component.scss']
})
export class DynamicFormValidationComponent implements OnInit {
  dynamicForm: FormGroup;
  product = {
    label: 'Galaxy S10',
    characteristics: [
      {
        serial: '7895478854854',
        color: 'black',
        category: 'It'
      },
      {
        serial: '5214756245247',
        color: 'white',
        category: 'It'
      }
    ]
  };

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      label: new FormControl('', [Validators.required]),
      charecteristics: this.fb.array([this.getCharecteristicGroup])
    });
  }

  save(): void{
    console.log(this.dynamicForm.value)
  }

  newRow(): void{
    (this.dynamicForm.get('charecteristics') as FormArray).push(this.getCharecteristicGroup);
  }

  remove(index: number): void{
    const characteristics: FormArray = (this.dynamicForm.get('charecteristics') as FormArray);
    if(characteristics.length > 1)
    characteristics.removeAt(index);
  }

  get getCharecteristicGroup(): FormGroup{
    return this.fb.group({
      serial: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

}
