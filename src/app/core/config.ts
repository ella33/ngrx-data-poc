import { Injectable } from '@angular/core';
import {
  DefaultDataServiceConfig,
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  normalizeRoot,
  Pluralizer,
} from '@ngrx/data';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com/',
};

@Injectable()
export class PluralHttpUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(private myPluralizer: Pluralizer) {
    super(myPluralizer);
  }

  protected getResourceUrls(entityName: string, root: string): HttpResourceUrls {
    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (!resourceUrls) {
      const nRoot = normalizeRoot(root);
      const url = `${nRoot}/${this.myPluralizer.pluralize(
        entityName
      )}/`.toLowerCase();
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url,
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }
}
