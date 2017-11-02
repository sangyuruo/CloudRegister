import { FilterPipe, KeysPipe, OrderByPipe, TruncateCharactersPipe } from './pipe';
import { MaxbytesValidatorDirective, MinbytesValidatorDirective, JhiSortDirective, JhiSortByDirective } from './directive';
import { JhiItemCountComponent } from './component';
import { DataUtils, DateUtils, EventManager, ParseLinks, PaginationUtil, Base64 } from './service';
export declare const JHI_PIPES: (typeof TruncateCharactersPipe | typeof OrderByPipe | typeof FilterPipe | typeof KeysPipe)[];
export declare const JHI_DIRECTIVES: (typeof MaxbytesValidatorDirective | typeof MinbytesValidatorDirective | typeof JhiSortDirective | typeof JhiSortByDirective)[];
export declare const JHI_COMPONENTS: typeof JhiItemCountComponent[];
export declare const JHI_SERVICES: (typeof PaginationUtil | typeof ParseLinks | typeof DataUtils | typeof DateUtils | typeof EventManager | typeof Base64)[];
