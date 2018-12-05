import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { environment} from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public table_data;
  public env_data = environment.BACK_API;
  constructor(
    private serviceApp: AppService,
  ) {

  }
  ngOnInit() {
    this.serviceApp.update_table();
    this.serviceApp.onTableInit().subscribe(data => this.table_data = data);
  }

  edit_row(event) {
    this.serviceApp.update_table_row(event.data);
  }
  remove_row(row, index) {
    this.serviceApp.remove_table_row(row['id']);
    this.table_data.splice(index, 1);
  }

}
