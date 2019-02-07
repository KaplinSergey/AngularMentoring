import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const StringGenerator = new InjectionToken<string>('StringGenerator');

export function GeneratorServiceNFactory(lenght: number) {
  return function(generator: GeneratorService): string {
    return generator.getRandomString(lenght);
  };
}
