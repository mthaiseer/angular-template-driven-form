import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent  {

  log(x){
    console.log(x.value);
  }

  submitMe(f){
    console.log(f.value.comment);
  }


}
