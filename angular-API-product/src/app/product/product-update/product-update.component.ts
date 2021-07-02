import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product?: Product;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   if (this.product) {
  //     this.productService.updateProduct(this.product)
  //       .subscribe(() => this.goBack());
  //   }
  // }
}
