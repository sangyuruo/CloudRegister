/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../shared/routes/route-selector.component.ngfactory';
import * as import3 from '../../../../../../../../src/main/webapp/app/shared/routes/route-selector.component';
import * as import4 from '../../../../../../../../src/main/webapp/app/shared/routes/routes.service';
import * as import5 from '../../../../../../../../src/main/webapp/app/shared/refresh/refresh.service';
import * as import6 from '../../../../../../../../src/main/webapp/app/admin/health/health.component';
import * as import7 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as import8 from '../../../../../../../../src/main/webapp/app/admin/health/health.service';
const styles_JhiHealthCheckComponent:any[] = ([] as any[]);
export const RenderType_JhiHealthCheckComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_JhiHealthCheckComponent,
  data: {}
}
);
function View_JhiHealthCheckComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',[[
        'class',
        'hand'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.showHealth(v.parent.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'fa fa-eye'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        ']))
  ]
  ,(null as any),(null as any));
}
function View_JhiHealthCheckComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),19,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'text-capitalize'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),[
      ' ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'td',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'span',[[
        'class',
        'badge badge-pill font-weight-normal'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),[
      '\n                            ',
      '\n                        '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'td',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiHealthCheckComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n                ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_2:any = 'badge badge-pill font-weight-normal';
    const currVal_3:any = co.getBadgeClass(v.context.$implicit.status);
    ck(v,10,0,currVal_2,currVal_3);
    const currVal_5:any = (v.context.$implicit.details || v.context.$implicit.error);
    ck(v,17,0,currVal_5);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.baseName(v.context.$implicit.name);
    ck(v,4,0,currVal_0);
    const currVal_1:any = co.subSystemName(v.context.$implicit.name);
    ck(v,5,0,currVal_1);
    const currVal_4:any = v.context.$implicit.status;
    ck(v,11,0,currVal_4);
  });
}
export function View_JhiHealthCheckComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),34,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Health Checks'])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'jhi-route-selector',([] as any[]),(null as any),(null as any),(null as any),import2.View_JhiRouteSelectorComponent_0,import2.RenderType_JhiRouteSelectorComponent)),
    import0.ɵdid(122880,(null as any),0,import3.JhiRouteSelectorComponent,[
      import4.JhiRoutesService,
      import5.JhiRefreshService
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),25,'div',[[
        'class',
        'table-responsive'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),22,'table',[
      [
        'class',
        'table table-striped'
      ]
      ,
      [
        'id',
        'healthCheck'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),13,'thead',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Service Name'])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Status'])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Details'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiHealthCheckComponent_1)),
    import0.ɵdid(401408,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import6.JhiHealthCheckComponent = v.component;
    ck(v,6,0);
    const currVal_0:any = co.healthData;
    ck(v,30,0,currVal_0);
  },(null as any));
}
function View_JhiHealthCheckComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'jhi-health',([] as any[]),(null as any),(null as any),(null as any),View_JhiHealthCheckComponent_0,RenderType_JhiHealthCheckComponent)),
    import0.ɵdid(122880,(null as any),0,import6.JhiHealthCheckComponent,[
      import7.NgbModal,
      import8.JhiHealthService,
      import4.JhiRoutesService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const JhiHealthCheckComponentNgFactory:import0.ComponentFactory<import6.JhiHealthCheckComponent> = import0.ɵccf('jhi-health',import6.JhiHealthCheckComponent,View_JhiHealthCheckComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvc2FuZ2p1bi93b3JrL2NvZGUvSFhDbG91ZC9IWENsb3VkUmVnaXN0ZXIvc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQudHMuSmhpSGVhbHRoQ2hlY2tDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2PlxuICAgIDxoMj5IZWFsdGggQ2hlY2tzPC9oMj5cblxuICAgIDxqaGktcm91dGUtc2VsZWN0b3I+PC9qaGktcm91dGUtc2VsZWN0b3I+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICA8dGFibGUgaWQ9XCJoZWFsdGhDaGVja1wiIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlNlcnZpY2UgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5EZXRhaWxzPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGhlYWx0aCBvZiBoZWFsdGhEYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZVwiPnt7IGJhc2VOYW1lKGhlYWx0aC5uYW1lKSB9fTwvc3Bhbj4ge3tzdWJTeXN0ZW1OYW1lKGhlYWx0aC5uYW1lKX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcGlsbCBmb250LXdlaWdodC1ub3JtYWxcIiBbbmdDbGFzc109XCJnZXRCYWRnZUNsYXNzKGhlYWx0aC5zdGF0dXMpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3toZWFsdGguc3RhdHVzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaGFuZFwiIChjbGljayk9XCJzaG93SGVhbHRoKGhlYWx0aClcIiAqbmdJZj1cImhlYWx0aC5kZXRhaWxzIHx8IGhlYWx0aC5lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iLCI8amhpLWhlYWx0aD48L2poaS1oZWFsdGg+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN1QndCO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBZ0I7UUFBQTtRQUFBO01BQUE7TUFBaEI7SUFBQTtJQUFvRjtNQUNoRjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCOzs7Ozs7SUFUckM7SUFBc0M7SUFDbEM7TUFBSTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThCO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBa0M7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFvQztNQUN4RztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO01BQ3BCO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBMkY7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUVwRjtJQUNOO01BQ0w7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUNwQjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRUk7SUFDSDs7OztJQVJLO0lBQTRDO0lBQWxELFVBQU0sVUFBNEMsU0FBbEQ7SUFLNkM7SUFBN0MsVUFBNkMsU0FBN0M7OztJQVA4QjtJQUFBO0lBQWtDO0lBQUE7SUFFMkI7SUFBQTs7Ozs7SUFsQm5IO0lBQUs7SUFDRDtJQUFJO0lBQWtCO0lBRXRCO2dCQUFBOzs7SUFBQTtLQUFBO0lBQXlDO01BRXpDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEI7SUFDMUI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQW9EO0lBQ2hEO0lBQU87SUFDSDtJQUFJO0lBQ0E7SUFBSTtJQUFpQjtNQUNyQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQVc7TUFDbkM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUFZO0lBQ25DO0lBQ0Q7SUFDUjtJQUFPO0lBQ0g7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFZSztJQUNEO0lBQ0o7SUFDTjtJQUNKOzs7O0lBNUJGO0lBWWdCO0lBQUosVUFBSSxTQUFKOzs7OztJQ2ZoQjtnQkFBQTs7OztJQUFBO0tBQUE7OztJQUFBOzs7In0=
