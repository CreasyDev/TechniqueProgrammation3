import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MiniForfaitComponent } from './component/mini-forfait/mini-forfait.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ForfaitCompletComponent } from './component/forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './component/etoiles/etoiles.component';
import { FormulaireGestionForfaitComponent } from './component/formulaire-gestion-forfait/formulaire-gestion-forfait.component';
import { FormulaireRechercheComponent } from './component/formulaire-recherche/formulaire-recherche.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatButtonModule } from  '@angular/material/button';
import { RouterModule} from '@angular/router';
import { ForfaitsService } from './services/forfaits.service';
import { ForfaitDetailComponent } from './forfait-detail/forfait-detail.component';
import { ApoposComponent } from './apopos/apopos.component';
import { AdministrationComponent } from './administration/administration.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { CommonModule } from '@angular/common';
import { DialogBoxEditComponent } from './dialog-box-edit/dialog-box-edit.component';
import { FormsModule } from '@angular/forms';
import { DialogBoxAjouterComponent } from './dialog-box-ajouter/dialog-box-ajouter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogBoxGraphicComponent } from './dialog-box-graphic/dialog-box-graphic.component';
import { ChartsModule } from 'ng2-charts';
import { AproposComponent } from './component/apropos/apropos.component';

const notifierConfig: NotifierOptions = {
  position: {
      horizontal: {
          position: "right",
          distance: 12
      },
      vertical: {
          position: "top",
          distance: 12,
          gap: 10
      }
  },
  theme: "material",
  behaviour: {
      autoHide: 1000,
      onClick: false,
      onMouseover: "pauseAutoHide",
      showDismissButton: true,
      stacking: 4
  },
  animations: {
      enabled: true,
      show: {
          preset: "slide",
          speed: 300,
          easing: "ease"
      },
      hide: {
          preset: "fade",
          speed: 300,
          easing: "ease",
          offset: 50
      },
      shift: {
          speed: 300,
          easing: "ease"
      },
      overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    FormulaireGestionForfaitComponent,
    FormulaireRechercheComponent,
    DashboardComponent,
    ForfaitDetailComponent,
    ApoposComponent,
    AdministrationComponent,
    DialogBoxEditComponent,
    DialogBoxAjouterComponent,
    DialogBoxGraphicComponent,
    AproposComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, NotifierModule.withConfig(notifierConfig), FormsModule, MatFormFieldModule, MatPaginatorModule, ChartsModule,
    
    RouterModule.forRoot([
      {
         path: '',
         component: DashboardComponent
      },
      {
         path: 'forfait-detail-mexique',
         component: ForfaitDetailComponent,
         data:{
          name:'mexique'
         }
      },
      {
        path: 'forfait-detail-cuba',
        component: ForfaitDetailComponent,
        data:{
         name:'cuba'
        }
      },
      {
        path: 'apropos',
        component: AproposComponent
     },
     {
       path: 'administration',
       component: AdministrationComponent
    }
   ])
  ],
  providers: [ForfaitsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
