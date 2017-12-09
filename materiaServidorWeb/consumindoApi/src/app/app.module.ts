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

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent
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

        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        ConsultaApiService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
