import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { QuizComponent } from './components/quiz.component';
import { PageNotFoundComponent  } from './components/not-found.component';


const appRoutes: Routes = [
  { path: '', component: QuizComponent },
  { path: ':id', component: QuizComponent },
  { path: 'score', component: QuizComponent },
  { path: '**', component: PageNotFoundComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);