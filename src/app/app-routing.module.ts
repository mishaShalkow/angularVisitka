import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {MajorScreenComponent} from './major-screen/major-screen.component'

const routes: Routes = [{path: '', component: MajorScreenComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
