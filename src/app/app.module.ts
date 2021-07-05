import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { ShareModule } from './share/share.module'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { CustomTreeComponent } from './pages/custom-tree/custom-tree.component';
import { CustomTreeItemComponent } from './pages/custom-tree/custom-tree-item/custom-tree-item.component';
import { CustomDraggableComponent } from './pages/custom-draggable/custom-draggable.component';
import { DraggableDirective } from './directive/draggable.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomTreeComponent,
    CustomTreeItemComponent,
    CustomDraggableComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    ShareModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
