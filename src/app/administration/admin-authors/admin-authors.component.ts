import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.scss']
})
export class AdminAuthorsComponent implements OnInit {

  formAuthor:FormGroup;
  constructor(private fb:FormBuilder) {
    this.formAuthor=fb.group(
    {
      fName:['',[Validators.required]],
      lName:['',[Validators.required]],
      dateBirth:['',[Validators.required]],
      image:['',[Validators.required]]

    });

  }

  ngOnInit(): void {
  }


  addAuthor()
  {

  }

  get firstName()
  {
    return this.formAuthor.get('fName');
  }

  get lastName()
  {
    return this.formAuthor.get('lName');
  }

  get dateBirth()
  {
    return this.formAuthor.get('dateBirth');
  }

}
