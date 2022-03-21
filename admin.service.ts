import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Addon } from './addon';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  public getAddons(): Observable<Addon[]> {
    return this.http.get<Addon[]>(``);
  }
  public deleteAddon(addonId: number): Observable<void> {
    return this.http.delete<void>(``);
  }
  public getAddonData(addonId:number): Observable<Addon>{
    return this.http.get<Addon>(``+addonId);

  }
  public addAddon(plan: Addon): Observable<Addon> {
    return this.http.post<Addon>(``, plan);
  }
  updateAddon(addonId:number,addon:Addon): Observable<Addon>{
    return this.http.put<Addon>(``+addonId,addon);
  }


}
