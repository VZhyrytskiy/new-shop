import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBook } from '../product/product.model';

@Injectable()
export class CartService {
  condition: boolean = true;
  private channel = new Subject<IBook>();
  public channel$ = this.channel.asObservable();

  publishData(data: any): any {
    return this.channel.next(data);
  }
  toggle() {
    return (this.condition = !this.condition);
  }
}
