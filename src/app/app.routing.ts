import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { QuizComponent } from './components/quiz.component';
import { PageNotFoundComponent  } from './components/not-found.component';
import { ScoreComponent  } from './components/score.component';
import { HomeComponent  } from './components/home.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent ,pathMatch: 'full' },
  { path: 'score', component: ScoreComponent },
  { path: ':id', component: QuizComponent },
];
<<<<<<< HEAD

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
=======
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
>>>>>>> 868ad9f8617c18c155d2c3c91e176ff593503bc7
