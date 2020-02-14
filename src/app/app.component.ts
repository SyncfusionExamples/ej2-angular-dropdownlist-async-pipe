import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Query  } from '@syncfusion/ej2-data';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej2-angular-dropdownlist-async-pipe';

  public data: Observable<any>;

  constructor(private http: HttpClient) { 

   }
  ngOnInit() {
    this.getData();
  }
  public query: Query = new Query().select(['CustomerID']);
  public remoteFields: Object = { value: 'CustomerID'}
  public getData() {
        this.data=this.http.get<{[key: string]:object;}[]>('https://services.odata.org/V4/Northwind/Northwind.svc/Customers').pipe(
        map(data=> {
          return (<any>data).value;
        })
      );
  }
 
}
