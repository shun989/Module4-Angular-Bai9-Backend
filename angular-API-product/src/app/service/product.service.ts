import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {PRODUCT} from "../mock-product";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';  // URL to web api
   httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCT);
  }
  getProduct(id: number): Observable<Product> {
    const product = PRODUCT.find(p => p.id === id)!;
    return of(product);
  }


  /* GET products whose name contains search term */
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Product[]>('searchProducts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateProduct(product: Product) {

  }

  addProduct(product: any) {

  }

  deleteProduct(id: number) {

  }
}
/** GET products from the server */
// getProducts(): Observable<Product[]> {
//   return this.http.get<Product[]>(this.productsUrl)
//     .pipe(
//       tap(_ => this.log('fetched products')),
//       catchError(this.handleError<Product[]>('getProducts', []))
//     );
// }

/** GET hero by id. Return `undefined` when id not found */
// getProductNo404<Data>(id: number): Observable<Product> {
//   const url = `${this.productsUrl}/?id=${id}`;
//   return this.http.get<Product[]>(url)
//     .pipe(
//       map(products => products[0]), // returns a {0|1} element array
//       tap(h => {
//         const outcome = h ? `fetched` : `did not find`;
//         this.log(`${outcome} product id=${id}`);
//       }),
//       catchError(this.handleError<Product>(`getProduct id=${id}`))
//     );
// }

/** GET hero by id. Will 404 if id not found */
// getProduct(id: number): Observable<Product> {
//   const url = `${this.productsUrl}/${id}`;
//   return this.http.get<Product>(url).pipe(
//     tap(_ => this.log(`fetched hero id=${id}`)),
//     catchError(this.handleError<Product>(`getProduct id=${id}`))
//   );
// }

/** POST: add a new hero to the server */
// addProduct(product: Product): Observable<Product> {
//   // @ts-ignore
//   return this.http.post<Product>(this.productsUrl, product, this.httpOptions).pipe(
//     tap((newProduct: Product) => this.log(`added product w/ id=${newProduct.id}`)),
//     catchError(this.handleError<Product>('addProduct'))
//   );
// }

/** DELETE: delete the hero from the server */
// deleteProduct(id: number): Observable<Product> {
//   const url = `${this.productsUrl}/${id}`;
//
//   // @ts-ignore
//   return this.http.delete<Product>(url, this.httpOptions).pipe(
//     tap(_ => this.log(`deleted product id=${id}`)),
//     catchError(this.handleError<Product>('deleteProduct'))
//   );
// }

/** PUT: update the hero on the server */
// updateProduct(product: Product): Observable<any> {
//   return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
//     tap(_ => this.log(`updated product id=${product.id}`)),
//     catchError(this.handleError<any>('updateProduct'))
//   );
// }
