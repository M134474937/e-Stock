import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, FormBuilder, ReactiveFormsModule, FormGroup} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import { AppComponent } from './app.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListScategorieComponent } from './scategorie/list-scategorie/list-scategorie.component';
import { AddScategorieComponent } from './scategorie/add-scategorie/add-scategorie.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import {HttpClientModule} from "@angular/common/http";

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientComponent,
    ListCategorieComponent,
    AddCategorieComponent,
    ListScategorieComponent,
    AddScategorieComponent,
    AddArticleComponent,
    ListArticleComponent,
    ListFournisseurComponent,
    AddFournisseurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
