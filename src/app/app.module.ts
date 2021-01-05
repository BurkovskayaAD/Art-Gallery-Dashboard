import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {TableTemplateComponent} from './components/template-table/table-template.component';
import {ArtistsDashboardComponent} from './components/dashboard-artists/artists-dashboard.component';
import {MainDashboardComponent} from './components/dashboard-main/main-dashboard.component';
import {IntroductionTemplateComponent} from './components/template-introduction/introduction-template.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ExhibitionsDashboardComponent} from './components/dashboard-exhibitions/exhibitions-dashboard.component';
import {PaintingsDashboardComponent} from './components/dashboard-paintings/paintings-dashboard.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormNewArtistComponent} from './components/add-artist-form/form-new-artist.component';
import {FormNewExhibitionComponent} from './components/add-exhibition-form/form-new-exhibition.component';
import {FormNewPaintingComponent} from './components/add-painting-form/form-new-painting.component';
import {AddArtistPageComponent} from './components/add-artist-page/add-artist-page.component';
import {AddExhibitionPageComponent} from './components/add-exhibition-page/add-exhibition-page.component';
import {AddPaintingPageComponent} from './components/add-painting-page/add-painting-page.component';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import {EditArtistFormComponent} from './components/edit-artist-form/edit-artist-form.component';
import {EditArtistPageComponent} from './components/edit-artist-page/edit-artist-page.component';
import {EditExhibitionFormComponent} from './components/edit-exhibition-form/edit-exhibition-form.component';
import {EditExhibitionPageComponent} from './components/edit-exhibition-page/edit-exhibition-page.component';
import {EditPaintingFormComponent} from './components/edit-painting-form/edit-painting-form.component';
import {EditPaintingPageComponent} from './components/edit-painting-page/edit-painting-page.component';

const appRoutes: Routes = [
  {path: '', component: MainDashboardComponent},
  {path: 'artist', component: ArtistsDashboardComponent},
  {path: 'exhibition', component: ExhibitionsDashboardComponent},
  {path: 'painting', component: PaintingsDashboardComponent},
  {path: 'artist/new', component: AddArtistPageComponent},
  {path: 'exhibition/new', component: AddExhibitionPageComponent},
  {path: 'painting/new', component: AddPaintingPageComponent},
  {path: 'artist/:id', component: EditArtistPageComponent},
  {path: 'exhibition/:id', component: EditExhibitionPageComponent},
  {path: 'painting/:id', component: EditPaintingPageComponent},
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
    AddPaintingPageComponent,
    EditArtistFormComponent,
    EditArtistPageComponent,
    EditExhibitionFormComponent,
    EditExhibitionPageComponent,
    EditPaintingFormComponent,
    EditPaintingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxDatatableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
