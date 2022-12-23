import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OurclientsComponent } from './ourclients/ourclients.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [AppComponent, OurclientsComponent, SidebarComponent, AddClientComponent, ChatComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
