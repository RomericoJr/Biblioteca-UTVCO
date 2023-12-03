import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor( ) { }

  error(msn:string) {
    Swal.fire({
      title: msn,
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    })
  }

  success(msn:string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: msn,
      showConfirmButton: false,
      timer: 1500
    })
  }

  confirm(msn:string, btnOp:string){
    return Swal.fire({
      title: msn,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: btnOp
    })
  }

  loading(msn:string){
    Swal.fire({
      title: msn,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    });
  }


  fireToast(msn:string, icon:string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: msn
      })
  }

  fireConfirm(msn:string, text:string, btnOp:string){
    return Swal.fire({
      title: msn,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

      confirmButtonText: btnOp
    })
  }

}
