import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Addon } from '../addon';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-editaddon',
  templateUrl: './editaddon.component.html',
  styleUrls: ['./editaddon.component.css']
})
export class EditaddonComponent implements OnInit {
  public addon!: Addon[];
  dataSource!: MatTableDataSource<any>;
  public editAddon!: Addon;
  editAddonData!:FormGroup;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,
    private router: Router,private api:AdminService) { }

  ngOnInit(): void {
    this.editAddonData=this.formBuilder.group({
      
      addonName:[''],
      imageUrl:[''],
      addonPrice:[''],
       });
    this.getAddon();

  }
  public getAddon():void{
    const id=parseInt(this.route.snapshot.params['id'],10);
    this.api.getAddonData(id)
    .subscribe({
      next:(response:Addon)=>{
        console.log(response);
        this.editAddon=response;
        this.editAddonData.setValue(response);
        //this.editPlanData.patchValue({planOffers:"Amazon"});
        this.dataSource=new MatTableDataSource(this.addon);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
        
      },
      error:()=>{
        alert("Error while fetching records")
      }
    });
  }
  public OnUpdateAddon(): void{
    const id=parseInt(this.route.snapshot.params['id'],10);
    this.api.updateAddon(id,this.editAddonData.value)
    .subscribe({
      next:(response:Addon)=>{
        console.log(response);
      
      },
      error:()=>{
        alert("Error while adding records")
      }
    });


  }

}
