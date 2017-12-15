import { CategoriaService } from './services/categoria.service';
import { ProdutoService } from './services/produto.service';
import { HomeComponent } from './views/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';


// App views
import {
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


import 'hammerjs';
import { ConsultaApiService } from './services/consulta-api.service';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ProdutoComponent } from './views/produto/produto.component';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        CategoriaComponent,
        ProdutoComponent
    ],
    imports: [
        // Angular modules
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,

        //Material modules
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSelectModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatMenuModule,
        MatTabsModule,
        MatListModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatDialogModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatGridListModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDwAJ3ffl_fqmhpvAwOH1oo-nTq_zMsG-0'
        }),
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        ConsultaApiService,
        ProdutoService,
        CategoriaService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
