import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

export type TipoDeNotificacion = 'porDefecto'|'personalizada';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  public seleccion:TipoDeNotificacion = "porDefecto";

  public mensajePersonalizado = {info:'', error:''};
  constructor(
    private toastr: ToastrService
  ) { }

  porDefecto(){
    this.toastr.success('Notificacion por defecto', 'Notificación', {
      timeOut: 3000
    });
    this.toastr.error('Notificacion por defecto', 'Mensaje de error', {
      timeOut: 3000
    });
  }

  personalizada(mensaje){
    this.toastr.success(mensaje.info, 'Notificación personalizada', {
      timeOut: 3000
    });
    this.toastr.error(mensaje.error, 'Notificación personalizada', {
      timeOut: 3000
    });
  }

  mostrar(){
    if(this.seleccion == 'porDefecto')
      this.porDefecto();

    if(this.seleccion == 'personalizada'){
      this.personalizada(this.mensajePersonalizado);
    }
  }

  borrarMensaje(){
    this.mensajePersonalizado.info = '';
    this.mensajePersonalizado.error = '';
  }
}

