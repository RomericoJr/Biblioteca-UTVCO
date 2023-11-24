import { Component } from '@angular/core';
import { AuthService } from '../../service/laravel/auth.service';
import { SweetAlertService } from '../../service/firebase/sweet-alert.service';
import { ToolsService } from 'src/app/service/tools.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private _authS: AuthService,
    private _sweetS: SweetAlertService,
    private _toolS: ToolsService,
    private router: Router
  ) {
  }

  id_rol= this._toolS.getRol();


  logout(){
    this._sweetS.confirm('¿Estas seguro de cerrar sesión?', 'Aceptar').then((res: any) => {
      if (res.isConfirmed) {
        this._sweetS.success('Sesión cerrada');
        this._authS.logout().subscribe({
          next: (data: any) => {
            localStorage.clear();
            this.router.navigate(['/login']);
          },
          error: (error: any) => {
          }
        });
      }
    });
  }

}
