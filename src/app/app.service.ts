import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private socket;
  constructor() {
    this.socket = socketIo(environment.SOCKET_SERVER);
  }
  public update_table_row(data): void {
    this.socket.emit('update_table_row', data);
  }

  public remove_table_row(id): void {
    this.socket.emit('remove_table_row', id);
  }

  public update_table(): void {
    this.socket.emit('update_table');
  }

  public onTableInit(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('init_table', (data) => observer.next(data));
    });
  }
}
