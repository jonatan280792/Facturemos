import {
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FacturacionService } from '@services/facturacion-services';
import { CustomIconService } from '@common/custom-icons/custom-icon.service';
import { MessageDialogService } from '@common/message-dialog/message-dialog.service';

@Component({
  selector: "app-sales",
  templateUrl: "./sales.html",
})
export class SalesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cliente', 'producto', 'fecha_compra', 'valor', 'actions'];
  dataSource: any;
  public ventas: any;
  public editSale: boolean;
  public createSale: boolean;
  public elementEdit: any;
  constructor(
    private customIconService: CustomIconService,
    private facturacionService: FacturacionService,
    private messageDialog: MessageDialogService,
  ) {
    this.customIconService.init();
  }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    this.facturacionService.getVentas().subscribe(responseVentas => {
      this.ventas = responseVentas;
      this.dataSource = this.ventas;
    }, error => {
      this.ventas = [];
    });
  }


  editSales(element) {
    this.elementEdit = element;
    this.createSale = false;
    this.editSale = true;
  }

  updateVenta($event) {
    const dataUpdate = $event;
    this.facturacionService.updateVenta(dataUpdate).subscribe(responseUpdate =>{
      if (responseUpdate.transaccion === 1) {
        this.initValues();
        this.messageDialog.showSuccess('', responseUpdate.Mensaje, 3000);
        this.editSale = false;
      } else {
        this.messageDialog.showError('', responseUpdate.Mensaje, 3000);
        this.editSale = true;
      }
    }, error => {
      this.editSale = true;
    });
  }

  createSales(element) {    
    this.elementEdit = element;
    this.editSale = false;
    this.createSale = true;
  }

  createVenta($event) {
    const dataUpdate = $event;
    this.facturacionService.setVentas(dataUpdate).subscribe(responseCreate =>{
      if (responseCreate.transaccion === 1) {
        this.initValues();
        this.messageDialog.showSuccess('', responseCreate.Mensaje, 3000);
        this.createSale = false;
      } else {
        this.messageDialog.showError('', responseCreate.Mensaje, 3000);
        this.createSale = true;
      }
    }, error => {
      this.createSale = true;
    });
  }

  deleteVenta(element) {
    const data = {
      id_venta: element.id
    };

    this.facturacionService.deleteVenta(data).subscribe(responseDelete => {
      if (responseDelete.transaccion === 1) {
        this.initValues();
        this.messageDialog.showSuccess('', responseDelete.Mensaje, 3000);        
      } else {
        this.messageDialog.showError('', responseDelete.Mensaje, 3000);        
      }
    }, error => {

    })
  }
}
