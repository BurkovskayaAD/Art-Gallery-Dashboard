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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormNewArtistComponent } from './components/form-new-artist/form-new-artist.component';
import { FormNewExhibitionComponent } from './components/form-new-exhibition/form-new-exhibition.component';
import { FormNewPaintingComponent } from './components/form-new-painting/form-new-painting.component';
import { AddArtistPageComponent } from './components/add-artist-page/add-artist-page.component';
import { AddExhibitionPageComponent } from './components/add-exhibition-page/add-exhibition-page.component';
import { AddPaintingPageComponent } from './components/add-painting-page/add-painting-page.component';


const appRoutes: Routes = [
  {path: '', component: MainDashboardComponent},
  {path: 'artists', component: ArtistsDashboardComponent},
  {path: 'exhibitions', component: ExhibitionsDashboardComponent},
  {path: 'paintings', component: PaintingsDashboardComponent},
  {path: 'artists/newArtists', component: AddArtistPageComponent},
  {path: 'exhibitions/newExhibition', component: AddExhibitionPageComponent},
  {path: 'paintings/newPainting', component: AddPaintingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TableTemplateComponent,
    ArtistsDashboardComponent,
    MainDashboardComponent,
    IntroductionTemplateComponent,
    ExhibitionsDashboardComponent,
    PaintingsDashboardComponent,
    SidebarComponent,
    FormNewArtistComponent,
    FormNewExhibitionComponent,
    FormNewPaintingComponent,
    AddArtistPageComponent,
    AddExhibitionPageComponent,
    AddPaintingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxDatatableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
