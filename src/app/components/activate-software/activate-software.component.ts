import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';

@Component({
  selector: 'app-activate-software',
  templateUrl: './activate-software.component.html',
  styleUrls: ['./activate-software.component.css']
})
export class ActivateSoftwareComponent {

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sweet: SweetAlertService,

  ) { }

  titleText = 'Activar Software';
  titleBtn = 'Activar';

  formActivateSoftware: FormGroup = this.fb.group({
    key: [''],
  })

  activate(){
    console.log(this.formActivateSoftware.value);
    // this.sweet.loading('Activando software');
    // this.route.navigate(['admin/function']);
  }
}
