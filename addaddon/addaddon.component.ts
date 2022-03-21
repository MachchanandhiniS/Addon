import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Addon } from '../addon';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-addaddon',
  templateUrl: './addaddon.component.html',
  styleUrls: ['./addaddon.component.css']
})
export class AddaddonComponent implements OnInit {
  addonDetails !: FormGroup;

  actionBtn : string ="Save";
  public addon!: Addon[];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private formBuilder:FormBuilder,private api:AdminService) { }

  ngOnInit(): void {
    this.addonDetails = this.formBuilder.group({
      id:[''],
      addonName:['',Validators.required],
      imageUrl:['',Validators.required],
      addonPrice:['',Validators.required],
      
    });
    

    this.getAddon();
  }

  public getAddon():void{
    this.api.getAddons()
    .subscribe({
      next:(response:Addon[])=>{
        this.addon=response;
        this.dataSource=new MatTableDataSource(response);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
        
      },
      error:()=>{
        alert("Error while fetching records")
      }
    });
  }

  public OnAddPlan(addForm: NgForm): void{
    this.api.addAddon(addForm.value)
    .subscribe({
      next:(response:Addon)=>{
        console.log(response);
        this.getAddon();
        alert("Plan saved successfully");
        addForm.reset();
        
      },
      error:()=>{
        alert("Error while adding records")
      }
    });

}
}
