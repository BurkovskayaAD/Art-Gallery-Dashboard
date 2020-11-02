import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TableTemplateComponent } from './components/table-template/table-template.component';
import { ArtistsDashboardComponent } from './components/artists-dashboard/artists-dashboard.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { IntroductionTemplateComponent } from './components/introduction-template/introduction-template.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExhibitionsDashboardComponent } from './components/exhibitions-dashboard/exhibitions-dashboard.component';
import { PaintingsDashboardComponent } from './components/paintings-dashboard/paintings-dashboard.component';


const appRoutes: Routes = [
  {path: 'dashboard', component: MainDashboardComponent},
  {path: 'dashboard/artists', component: ArtistsDashboardComponent},
  {path: 'dashboard/exhibitions', component: ExhibitionsDashboardComponent},
  {path: 'dashboard/paintings', component: PaintingsDashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TableTemplateComponent,
    ArtistsDashboardComponent,
    MainDashboardComponent,
    IntroductionTemplateComponent,
    ExhibitionsDashboardComponent,
    PaintingsDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
