import {
  Component,
  Input,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { FacturacionService } from '@services/facturacion-services';

@Component({
  selector: "app-edit-sales",
  templateUrl: "./edit-sales.html",
})

export class EditSalesComponent implements OnInit {
  @Output() sendData = new EventEmitter<any>();
  @Input() dataSale: any;
  public sale: any;
  public lstClientes: any;
  public lstProductos: any;
  public formEdit: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private facturacionService: FacturacionService
  ) {}

  ngOnInit() {
    this.sale = this.dataSale;
    this.initValues();
    this.initForm();

    this.formEdit.controls['cliente'].setValue(this.sale.id_cliente);
    this.formEdit.controls['producto'].setValue(this.sale.id_producto);
    this.formEdit.controls['valor'].setValue(this.sale.valor);
  }

  initValues() {
    this.facturacionService.getClientes().subscribe(responseClientes => {
      this.lstClientes = responseClientes;
    }, error => {
      this.lstClientes = [];
    });

    this.facturacionService.getProductos().subscribe(responseProductos => {
      this.lstProductos = responseProductos;
    }, error => {
      this.lstProductos = [];
    });
  }

  initForm() {
    this.formEdit = this.fb.group({
      cliente: [null, Validators.required],
      producto: [null, Validators.required],
      valor: new FormControl(0, [Validators.required, Validators.min(1000)])
    });
  }

  updateSale(form) {
    this.sale.id_cliente = form.cliente;
    this.sale.id_producto = form.producto;
    this.sale.valor = form.valor;

    this.sendData.emit(this.sale);
  }
}
