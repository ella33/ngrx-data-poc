import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data';
import { UserEntityDataService } from '@core/user-data.service';

@NgModule({
  providers: [
    UserEntityDataService,
  ]
})
export class EntityStoreModule {
  constructor(userEntityDataService: UserEntityDataService, entityDataService: EntityDataService) {
    entityDataService.registerServices({
      User: userEntityDataService,
    });
  }
}
