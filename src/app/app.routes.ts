// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GuestServicesComponent } from './features/guest-services/guest-services.component';
import { SafetyTipsComponent } from './features/safety-tips/safety-tips.component';
import { EvacuationProceduresComponent } from './features/evacuation-procedures/evacuation-procedures.component';
import { CheckInComponent } from './features/check-in/check-in.component';
import { CheckOutComponent } from './features/check-out/check-out.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guest-services', component: GuestServicesComponent },
  { path: 'safety-tips', component: SafetyTipsComponent },
  { path: 'evacuation-procedures', component: EvacuationProceduresComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'contact-us', component: ContactUsComponent },
];
