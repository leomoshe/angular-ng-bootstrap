import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerPopup } from './datepicker-popup';

import { registerLocaleData } from "@angular/common";
import localeHe from "@angular/common/locales/he";
import localHeExtra from "@angular/common/locales/extra/he";

registerLocaleData(localeHe, "he", localHeExtra);

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [NgbdDatepickerPopup],
  exports: [NgbdDatepickerPopup],
  bootstrap: [NgbdDatepickerPopup],
  providers: [{ provide: LOCALE_ID, useValue: "he"}]
})
export class NgbdDatepickerPopupModule {}
