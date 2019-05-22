import { Routes, RouterModule } from "@angular/router";

import { FormDdComponent } from 'app/form-dd/form-dd.component';
import { DisplayComponent } from 'app/display/display.component';

const APP_ROUTES : Routes = [
    {path:'disply', component:DisplayComponent },
    {path:'', component: FormDdComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);