import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageDialogService {
  constructor(private message: ToastrService) {}

  returnTime(timeOut: number) {
    if (timeOut) {
      return timeOut;
    } else {
      return 500;
    }
  }

  showSuccess(title: string, messageComponent?: string, timeOut?: number) {
    this.message.success(title, messageComponent, {
      progressBar: true,
      timeOut: this.returnTime(timeOut),
    });
  }

  showInfo(title: string, messageComponent?: string, timeOut?: number) {
    this.message.info(title, messageComponent, {
      closeButton: true,
      positionClass: 'toast-top-full-width',
      timeOut: this.returnTime(timeOut),
      // progressBar: true
    });
  }

  showWarn(title: string, messageComponent?: string, timeOut?: number) {
    this.message.warning(title, messageComponent, {
      closeButton: true,
      positionClass: 'toast-top-full-width',
      timeOut: this.returnTime(timeOut),
      // progressBar: true
    });
  }

  showError(title: string, messageComponent?: string, timeOut?: number) {
    this.message.error(title, messageComponent, {
      timeOut: this.returnTime(timeOut),
      // progressBar: true
    });
  }
}
