import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert-success',
  templateUrl: './insert-success.component.html',
  styleUrl: './insert-success.component.css'
})
export class InsertSuccessComponent implements OnInit{

  inventoryID!: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.inventoryID=params['id'];
      // console.log(params['id']);
    })
  }

}
