import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurclientsComponent } from './ourclients/ourclients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ChatComponent } from './chat/chat.component';
const routes: Routes = [
  {
    path: 'our-clients',
    component: OurclientsComponent,
  },
  {
    path: 'add-client',
    component: AddClientComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
