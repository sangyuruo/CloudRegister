import { ModuleWithProviders } from '@angular/core';
import { Http } from '@angular/http';
import { JhiMissingTranslationHandler, TranslatePartialLoader } from './src/language';
import { ModuleConfig } from './src/config';
import { ConfigService } from './src/config.service';
export * from './src/pipe';
export * from './src/directive';
export * from './src/service';
export * from './src/component';
export * from './src/language';
export * from './src/interceptor';
export declare function translatePartialLoader(http: Http): TranslatePartialLoader;
export declare function missingTranslationHandler(configService: ConfigService): JhiMissingTranslationHandler;
export declare class NgJhipsterModule {
    static forRoot(moduleConfig: ModuleConfig): ModuleWithProviders;
}
