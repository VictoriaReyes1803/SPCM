import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { ChecklistKraussMaffeiComponent } from './Forms/Krauss-maffeiMC6/checklist-krauss-maffei/checklist-krauss-maffei.component';

import { CommonModule } from '@angular/common';
@NgModule({
    imports: [BrowserModule,
    SidebarModule,
    ChecklistKraussMaffeiComponent,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    CommonModule
    ],
    declarations: [],
    bootstrap: []
    })
export class AppModule {}