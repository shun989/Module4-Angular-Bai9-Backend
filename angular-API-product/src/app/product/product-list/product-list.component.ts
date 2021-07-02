import {Component, OnInit, ViewChild} from '@angular/core';
import {PRODUCT} from "../../mock-product";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchText: any;
  displayedColumns: any[] = ['id', 'name', 'description', 'price'];
  products: Product[] = [];

  constructor(private productService: ProductService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  // onSelect(product: Product):void {
  //   this.selectedProduct = product;
  // }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  deleteProduct(index: number): void {
    if (confirm('Are you sure?')) {
      this.products.splice(index, 1);
      this.toastr.success('Delete success!', 'Success!');
    }
  }

}
