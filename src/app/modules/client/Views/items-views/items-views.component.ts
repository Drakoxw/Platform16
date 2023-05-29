import { Component, OnInit, inject } from '@angular/core';
import { ItemsModel } from '@interfaces/models';
import { Store } from '@ngrx/store';
import { loadItem } from '@state/actions/items.action';
import { AppState, selectListItems, selectLoadingItems } from '@state/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-views',
  templateUrl: './items-views.component.html'
})
export class ItemsViewsComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();
  items$: Observable<readonly ItemsModel[]> = new Observable();

  private store = inject(Store<AppState>)

  constructor() {
    this.loading$ = this.store.select(selectLoadingItems)
    this.items$ = this.store.select(selectListItems)
  }

  ngOnInit(): void {
    this.store.dispatch(loadItem())
  }

}
