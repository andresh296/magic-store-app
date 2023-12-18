import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value: string) {
    this.onValue.emit(value);
  }
}
