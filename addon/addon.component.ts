import { Component, OnInit ,Input,ViewChild} from '@angular/core';
import { Addon } from '../addon';
import { AddaddonComponent } from '../addaddon/addaddon.component';
import { AdminService } from '../admin.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private api:AdminService,private route:ActivatedRoute) { }
  addon!: Addon[];
  addondata!: Addon;
  displayedColumns: string[] = ['addonName', 'imageUrl', 'addonPrice','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void {
    this.getAddon();
  }

  filterData() {
    const filterValue = "addons";
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

public getAddon():void{
      this.api.getAddons()
      .subscribe({
        next:(response:Addon[])=>{
          this.addon=response;
          this.dataSource=new MatTableDataSource(response);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
          /*const filterValue = "Amazon";
          this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
        }*/
          
        },
        error:()=>{
          alert("Error while fetching records")
        }
      });
    }


    deleteAddon(id:number){
      this.api.deleteAddon(id)
      .subscribe({
        next:(res)=>{
          alert("Plan deleted successfully");
          this.getAddon();
        },
        error:()=>{
          alert("error on deleting");
        }
      });
  
    }

     }


