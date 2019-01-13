import { NgModule } from '@angular/core';

import { RestaurantManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RestaurantManagementSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RestaurantManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RestaurantManagementSharedCommonModule {}
