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
  selector: "app-create-sales",
  templateUrl: "./create-sales.html",
})

export class CreateSalesComponent implements OnInit {
  @Output() sendData = new EventEmitter<any>();
  @Input() dataSale: any;
  public sale: any;
  public lstClientes: any;
  public lstProductos: any;
  public formCreate: FormGroup;

  constructor(
    private fb: FormBuilder,
    private facturacionService: FacturacionService
  ) {}

  ngOnInit() {
    this.sale = this.dataSale;

    this.initValues();
    this.initForm();
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
    this.formCreate = this.fb.group({
      cliente: [null, Validators.required],
      producto: [null, Validators.required],
      valor: new FormControl(0, [Validators.required, Validators.min(1000)])
    });
  }

  createSale(form) {
    this.sale.id_cliente = form.cliente;
    this.sale.id_producto = form.producto;
    this.sale.valor = form.valor;

    this.sendData.emit(this.sale);
  }
}