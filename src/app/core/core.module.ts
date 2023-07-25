import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HttpClientModule} from "@angular/common/http"
import {NgSelectComponent, NgSelectModule} from "@ng-select/ng-select"
import {FormsModule} from "@angular/forms"

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        NgSelectModule,
        FormsModule
    ],
    exports: [NgSelectComponent]
})
export class CoreModule {
}
