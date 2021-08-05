import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchText:string;
  showOnlyInStock:boolean;
  items=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]

  constructor() { 
    this.searchText="";
    this.showOnlyInStock=false;
  }

  ngOnInit(): void {
    
  }

  getItems(){
    return this.items.filter(item => 
      ((this.searchText && this.searchText.length > 0 && item.name.indexOf(this.searchText) != -1) || !this.searchText)
           && ((this.showOnlyInStock && item.stocked) || !this.showOnlyInStock)
          )
  
  }
   
  getCategories() {
    var categories = this.getItems().map(item => item.category);
    var uniqueCategories = categories.filter((c, i, a) => a.indexOf(c) === i);
    return uniqueCategories;
  }
  
  getProductsInCategories(category:string){
    return this.getItems().filter(item => item.category == category);
  }
  
  getColor(category:string){
   switch(category){
    case 'Sporting Goods': 
    case 'Electronics': return 'cyan';
    default: return 'white'
   }
  }

}
