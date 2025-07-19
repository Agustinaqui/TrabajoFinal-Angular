import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndAboutComponent } from './ind-about/ind-about.component';
import { IndProductosComponent } from './ind-productos/ind-productos.component';

//ruteo de la app
const routes: Routes = [
  { path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  { path: 'productos',
    component: IndProductosComponent
  },
  { path: 'about',
    component: IndAboutComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
