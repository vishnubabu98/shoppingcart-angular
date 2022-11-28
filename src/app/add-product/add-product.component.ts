import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  Producttitle=""
  image=""
  Description=""
  Rate=""
  Sellername=""
  Quantity=""

  readValue=()=>
  {
    let data:any=
    {
        "roducttitle":this.Producttitle,
        "image":this.image,
        "Description":this.Description,
        "Rate":this.Rate,
        "Sellername":this.Sellername,
        "Quantity":this.Quantity
    }
    console.log(data)
  }


}
