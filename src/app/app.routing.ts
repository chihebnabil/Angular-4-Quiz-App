import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { QuizComponent } from './components/quiz.component';
import { PageNotFoundComponent  } from './components/not-found.component';
import { ScoreComponent  } from './components/score.component';
import { HomeComponent  } from './components/home.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent ,pathMatch: 'full' },
  { path: ':id', component: QuizComponent },
  { path: 'score', component: ScoreComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);