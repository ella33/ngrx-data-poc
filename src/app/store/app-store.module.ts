import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { PluralHttpUrlGenerator } from '@app/core/config';
import { entityConfig } from './entity-metadata';
import { EntityStoreModule } from './entity-store.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    EntityStoreModule,
  ],
  providers: [
    { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator },
  ],
})
export class AppStoreModule {}
