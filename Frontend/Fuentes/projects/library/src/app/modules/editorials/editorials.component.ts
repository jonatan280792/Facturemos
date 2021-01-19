import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { LibraryService } from '@app/library/services/library-services';
import { ModalService } from '@common/modal/modal.service';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from '@services/session-service';

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.html',
})
export class PageEditorialsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public dataSource: MatTableDataSource<any>;
  public lengthData: number;
  public editorials: any;
  expandedElement: any | null;
  columnsToDisplay;
  showEdit: boolean;
  isEditEditorials: boolean;
  dataElement: any;

  constructor(
    private libraryService: LibraryService,
    private modalService: ModalService,
    private snackBarService: SnackBarService,
    private sessionService: SessionService,
    private translate: TranslateService
  ) { 
    this.translate.setDefaultLang(this.sessionService.getSessionLanguage());
  }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    this.libraryService.getEditorials().subscribe(responseEditorials => {
      this.columnsToDisplay = ['id', 'name', 'campus', 'status', 'actions'];
      this.editorials = responseEditorials;
      this.dataSource = new MatTableDataSource(this.editorials);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.pageSize = 5;
        this.dataSource.paginator.length = this.editorials.lenght;
        this.dataSource.sort = this.sort;
        this.lengthData = this.editorials.length;
        // this.existData = (this.lengthData > 0);
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  processAction(id, data?) {
    this.dataElement = data;
    this.showEdit = false;
    

    setTimeout(() => {
      this.showEdit = true;
      this.modalService.open(id);
    });
  }

  deleteElement(element: any) {
    this.libraryService.deleteEditorials(element).subscribe(response => {
      if (response.transaction === 1) {
        this.initValues();
      };
      this.snackBarService.showSnackBar(response.message, 'Cerrar', 3000);
    }); 
  }

  returnElement(event) {
    this.initValues();
  }
}
