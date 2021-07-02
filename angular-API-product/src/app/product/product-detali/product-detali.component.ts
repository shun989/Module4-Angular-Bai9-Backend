import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-product-detali',
  templateUrl: './product-detali.component.html',
  styleUrls: ['./product-detali.component.css']
})
export class ProductDetaliComponent implements OnInit {

  // @Input()product?: Product;
  product: Product | undefined;

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

}
