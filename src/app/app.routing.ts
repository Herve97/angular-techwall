import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cvTech/cv/cv.component";
import { ColorComponent } from "./color/color.component";
import { RouterSimulatorComponent } from "./router-simulator/router-simulator.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { ErrorComponent } from "./cvTech/error/error.component";
import { LoginComponent } from "./login/login.component";
import { UpdateCvComponent } from "./cvTech/update-cv/update-cv.component";

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    // component: CvComponent,
    children: [
      { path: '', component: CvComponent },
      { path: 'updateCv/:id', component: UpdateCvComponent },
      { path: 'add', component: AddCvComponent },
      { path: ':id', component: DetailComponent },
    ],
  },
  // { path: 'cv', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CvComponent },
  { path: 'color/:default', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
  // {path: 'rsimulator', component: RouterSimulatorComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
