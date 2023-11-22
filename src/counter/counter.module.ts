import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CoutnerViewComponent } from "./coutner-view/coutner-view.component";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";



const router: Routes = [
    {path:'', component:CounterComponent},
]
@NgModule({
    imports:[CommonModule, RouterModule.forChild(router), StoreModule.forFeature('counterReduc', counterReducer)],
    declarations:[CounterComponent, CounterButtonsComponent, CoutnerViewComponent, CustomCounterComponent]
})
export class CounterModule{}