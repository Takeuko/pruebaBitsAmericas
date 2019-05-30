import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toastr: ToastrService){
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Probando notificación', 'Notificación', {
      timeOut: 5000
    });
    this.toastr.error('Probando mensaje de error', 'Mensaje de error', {
      timeOut: 5000
    });
  }

  generarNotificacion(){
    this.showSuccess();
  }
}
