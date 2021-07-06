import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeeDashboardModel} from "./employee-dashboard.model";
import {ApiService} from "../shared/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  formValue !: FormGroup;
  employeeModelObj: EmployeeDashboardModel = new EmployeeDashboardModel();
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formBuilder: FormBuilder,
              private api: ApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      salary: [''],
    })
    this.getEmployeeData();
  }

  clickAddEmployee() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.phone = this.formValue.value.phone;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj).subscribe(res => {
        console.log(res);
        alert("Employee Added Success!");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getEmployeeData();
      },
      error => {
        alert("Something Went Wrong!");
      })
  }

  getEmployeeData() {
    this.api.getEmployee().subscribe(res => {
      this.employeeData = res;
    })
  }

  deleteEmployee(item: any) {
    if (confirm('Are you sure?')){
      this.employeeData = this.employeeData.filter((i: any) => i !== item);
      this.api.deleteEmployee(item.id).subscribe(res =>{
        this.getEmployeeData();
      })
    }
  }

  onEdit(item: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id = item.id;
    this.formValue.controls['firstName'].setValue(item.firstName);
    this.formValue.controls['lastName'].setValue(item.lastName);
    this.formValue.controls['email'].setValue(item.email);
    this.formValue.controls['phone'].setValue(item.phone);
    this.formValue.controls['salary'].setValue(item.salary);
  }

 updateEmployeeDetails() {
   this.employeeModelObj.firstName = this.formValue.value.firstName;
   this.employeeModelObj.lastName = this.formValue.value.lastName;
   this.employeeModelObj.email = this.formValue.value.email;
   this.employeeModelObj.phone = this.formValue.value.phone;
   this.employeeModelObj.salary = this.formValue.value.salary;

   this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
     .subscribe(res=>{
       alert("Update Successfully!");
         let ref = document.getElementById('cancel')
         ref?.click();
         this.formValue.reset();
         this.getEmployeeData();
       })
 }
  // deleteEmployee(index: number): void {
  //   if (confirm('Are you sure?')) {
  //     this.employeeData.deleteEmployee(index, 1);
  //     this.employeeData._updateChangeSubscription();
  //   }
  // }
}
