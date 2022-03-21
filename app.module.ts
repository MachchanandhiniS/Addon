import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddonComponent } from './addon/addon.component';
import { AddaddonComponent } from './addaddon/addaddon.component';
import { EditaddonComponent } from './editaddon/editaddon.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  
];


@NgModule({
  declarations: [
    AppComponent,
    AddonComponent,
    AddaddonComponent,
    EditaddonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormBuilder,
    MatToolbarModule,
    MatDialog,
    MatPaginator,
    MatSort,
    MatTableDataSource,
    FormGroup,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
