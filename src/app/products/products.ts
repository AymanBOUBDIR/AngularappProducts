import {Component, OnInit} from '@angular/core';
import {Product} from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit{
  products :any;
  constructor( private productService:Product) {

  }
  ngOnInit() {
     this.getAllproducts();
  }
getAllproducts(){
    this.products=this.productService.getProducts().subscribe({
      next: (rep: any) => {
        this.products = rep;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('done');
      }
    });
}
  handelDelete(product: any) {
    let v =confirm("are you sure you want to delete this product")
    if(v){
         this.productService.deleteProduct(product).subscribe({
           next: (rep: any) => {
             console.log(rep);
             this.getAllproducts()
           },
           error: (err: any) => {
             console.log(err);
           }
         });
          this.getAllproducts()
    }
  }
}
