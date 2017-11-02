import { MissingTranslationHandler, MissingTranslationHandlerParams } from 'ng2-translate';
import { ConfigService } from '../config.service';
export declare class JhiMissingTranslationHandler implements MissingTranslationHandler {
    private configService;
    constructor(configService: ConfigService);
    handle(params: MissingTranslationHandlerParams): string;
}
