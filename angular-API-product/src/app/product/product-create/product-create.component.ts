import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  products: Product[] = [];
  formAddProduct: FormGroup | undefined;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formAddProduct = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('(^[1-9])+([0-9]{10})')]]
    })
  }
  saveProduct(data: any) {
    this.products.push(data);
  }
  submit() {
    this.submitted = true;
    // @ts-ignore
    let data = this.formAddProduct.value;
    this.saveProduct(data);
    // @ts-ignore
    this.formAddProduct.reset();
  }

  get name() {
    // @ts-ignore
    return this.formAddProduct.get('name');
  }

  get description() {
    // @ts-ignore
    return this.formAddProduct.get('description');
  }

  get price() {
    // @ts-ignore
    return this.formAddProduct.get('price');
  }


}
