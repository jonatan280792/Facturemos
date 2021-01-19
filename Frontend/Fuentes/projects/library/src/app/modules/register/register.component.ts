import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { animateExpanded } from '@common/library/animations/animations';
import { LibraryService } from '@app/library/services/library-services';
import { ModalService } from '@common/modal/modal.service';
import { SessionService } from '@services/session-service';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  animations: [animateExpanded],
  selector: 'app-register',
  templateUrl: './register.html',
})
export class PageRegisterComponent implements OnInit  {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public dataSource: MatTableDataSource<any>;
  public lengthData: number;
  public librarys: any;
  public lstEditorials: any; 
  expandedElement: any | null;
  columnsToDisplay;
  showEdit: boolean;
  isEditRegister: boolean;
  dataElement: any;
  language: string;
  
  constructor(
    private libraryService: LibraryService,
    private modalService: ModalService,
    private snackBarService: SnackBarService,
    private sessionService: SessionService,
    private translate: TranslateService
  ) {
    this.language = this.sessionService.getSessionLanguage();
    this.translate.setDefaultLang(this.language);
  }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    this.libraryService.getLibrarys().subscribe(responseLibrarys => {
      this.columnsToDisplay = ['id', 'isbn', 'editorial', 'title', 'n_pages', 'actions'];
      this.librarys = responseLibrarys;
      this.dataSource = new MatTableDataSource(this.librarys);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.pageSize = 5;
        this.dataSource.paginator.length = this.librarys.lenght;
        this.dataSource.sort = this.sort;
        this.lengthData = this.librarys.length;
        // this.existData = (this.lengthData > 0);
      });
    });

    this.libraryService.getEditorials().subscribe(responseLibrarys => {
      this.lstEditorials = responseLibrarys;
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
    this.libraryService.deleteLibrarys(element).subscribe(response => {
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
