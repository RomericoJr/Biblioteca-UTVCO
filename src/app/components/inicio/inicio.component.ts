import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/laravel/auth.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  name: any = this._toolS.getNameUser();
  constructor(
    private _autsS: AuthService,
    private _toolS: ToolsService
  ) { }

  ngOnInit() {
  }

  getInfoProfile(){
    this._autsS.userDetail().subscribe({
      next: (data) => {
        this.name = data.name;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
