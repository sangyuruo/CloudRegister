/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './refresh-selector.component.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import * as import4 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as import5 from '../../../../../../../../src/main/webapp/app/shared/refresh/refresh-selector.component';
import * as import6 from '../../../../../../../../src/main/webapp/app/shared/refresh/refresh.service';
const styles_JhiRefreshSelectorComponent:any[] = [import0.styles];
export const RenderType_JhiRefreshSelectorComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_JhiRefreshSelectorComponent,
  data: {}
}
);
function View_JhiRefreshSelectorComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.parent.context.$implicit;
    ck(v,1,0,currVal_0);
  });
}
function View_JhiRefreshSelectorComponent_3(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[(l()(),import1.ɵted((null as any),['disabled']))],(null as any),(null as any));
}
function View_JhiRefreshSelectorComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),7,'button',[[
        'class',
        'dropdown-item'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.setActiveRefreshTime(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
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
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiRefreshSelectorComponent_2)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
    ,{
      ngIf: [
        0,
        'ngIf'
      ]
      ,
      ngIfElse: [
        1,
        'ngIfElse'
      ]

    }
    ,(null as any)),
    (l()(),import1.ɵted((null as any),['\n                '])),
      (l()(),import1.ɵand(0,[[
        'disabledTemplate',
        2
      ]
    ],(null as any),0,(null as any),View_JhiRefreshSelectorComponent_3)),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = 'dropdown-item';
    const currVal_1:any = co.stateTime(v.context.$implicit);
    ck(v,3,0,currVal_0,currVal_1);
    const currVal_2:any = (v.context.$implicit > 0);
    const currVal_3:any = import1.ɵnov(v,8);
    ck(v,6,0,currVal_2,currVal_3);
  },(null as any));
}
export function View_JhiRefreshSelectorComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),25,'div',[
      [
        'class',
        'dropdown'
      ]
      ,
      [
        'ngbDropdown',
        ''
      ]

    ]
    ,[
      [
        2,
        'dropdown',
        (null as any)
      ]
      ,
      [
        2,
        'dropup',
        (null as any)
      ]
      ,
      [
        2,
        'show',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'keyup.esc'
      ]
      ,
      [
        'document',
        'click'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('keyup.esc' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,1).closeFromOutsideEsc()) !== false);
        ad = (pd_0 && ad);
      }
      if (('document:click' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,1).closeFromOutsideClick($event)) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import3.NgbDropdown,[import4.NgbDropdownConfig],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),5,'button',[
      [
        'aria-haspopup',
        'true'
      ]
      ,
      [
        'class',
        'btn btn-outline-primary times dropdown-toggle'
      ]
      ,
      [
        'id',
        'refreshMenu'
      ]
      ,
      [
        'ngbDropdownToggle',
        ''
      ]

    ]
      ,[[
        1,
        'aria-expanded',
        0
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,5).toggleOpen()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
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
    import1.ɵdid(8192,(null as any),0,import3.NgbDropdownToggle,[
      import3.NgbDropdown,
      import1.ElementRef
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n          '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'times-text'
      ]
      ],[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),14,'div',[
      [
        'aria-expanded',
        'true'
      ]
      ,
      [
        'aria-labelledby',
        'refreshMenu'
      ]
      ,
      [
        'class',
        'dropdown-menu'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'dropdown-header'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Refresh times (in seconds)'])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiRefreshSelectorComponent_1)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'div',[[
        'class',
        'dropdown-divider'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'button',[[
        'class',
        'dropdown-item manual-refresh'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import5.JhiRefreshSelectorComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.manualRefresh()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            Refresh now  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'fa fa-refresh'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import5.JhiRefreshSelectorComponent = v.component;
    const currVal_4:any = 'btn btn-outline-primary times';
    const currVal_5:any = co.classTime();
    ck(v,4,0,currVal_4,currVal_5);
    const currVal_7:any = co.refreshTimes;
    ck(v,16,0,currVal_7);
  },(ck,v) => {
    var co:import5.JhiRefreshSelectorComponent = v.component;
    const currVal_0:boolean = !import1.ɵnov(v,1).up;
    const currVal_1:any = import1.ɵnov(v,1).up;
    const currVal_2:any = import1.ɵnov(v,1).isOpen();
    ck(v,0,0,currVal_0,currVal_1,currVal_2);
    const currVal_3:any = import1.ɵnov(v,5).dropdown.isOpen();
    ck(v,3,0,currVal_3);
    const currVal_6:any = co.getActiveRefreshTime();
    ck(v,7,0,currVal_6);
  });
}
function View_JhiRefreshSelectorComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'jhi-refresh-selector',([] as any[]),(null as any),(null as any),(null as any),View_JhiRefreshSelectorComponent_0,RenderType_JhiRefreshSelectorComponent)),
    import1.ɵdid(122880,(null as any),0,import5.JhiRefreshSelectorComponent,[import6.JhiRefreshService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const JhiRefreshSelectorComponentNgFactory:import1.ComponentFactory<import5.JhiRefreshSelectorComponent> = import1.ɵccf('jhi-refresh-selector',import5.JhiRefreshSelectorComponent,View_JhiRefreshSelectorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3JlZnJlc2gvcmVmcmVzaC1zZWxlY3Rvci5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvc2FuZ2p1bi93b3JrL2NvZGUvSFhDbG91ZC9IWENsb3VkUmVnaXN0ZXIvc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvcmVmcmVzaC9yZWZyZXNoLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3JlZnJlc2gvcmVmcmVzaC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3JlZnJlc2gvcmVmcmVzaC1zZWxlY3Rvci5jb21wb25lbnQudHMuSmhpUmVmcmVzaFNlbGVjdG9yQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImRyb3Bkb3duXCIgbmdiRHJvcGRvd24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHRpbWVzXCIgW25nQ2xhc3NdPVwiY2xhc3NUaW1lKClcIiBpZD1cInJlZnJlc2hNZW51XCIgbmdiRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICZuYnNwOyA8c3BhbiBjbGFzcz1cInRpbWVzLXRleHRcIiBbaW5uZXJIVE1MXT1cImdldEFjdGl2ZVJlZnJlc2hUaW1lKClcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZWZyZXNoTWVudVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24taGVhZGVyXCI+UmVmcmVzaCB0aW1lcyAoaW4gc2Vjb25kcyk8L3NwYW4+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHRpbWUgb2YgcmVmcmVzaFRpbWVzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJzZXRBY3RpdmVSZWZyZXNoVGltZSh0aW1lKTtcIiBbbmdDbGFzc109XCJzdGF0ZVRpbWUodGltZSlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRpbWUgPiAwOyBlbHNlIGRpc2FibGVkVGVtcGxhdGVcIj57e3RpbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Rpc2FibGVkVGVtcGxhdGU+ZGlzYWJsZWQ8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24taXRlbSBtYW51YWwtcmVmcmVzaFwiIChjbGljayk9XCJtYW51YWxSZWZyZXNoKClcIj5cbiAgICAgICAgICAgIFJlZnJlc2ggbm93ICZuYnNwOzxzcGFuIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiIsIjxqaGktcmVmcmVzaC1zZWxlY3Rvcj48L2poaS1yZWZyZXNoLXNlbGVjdG9yPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1FnQjtJQUE4QztNQUFBO01BQUE7SUFBQTtJQUFBOzs7SUFBQTtJQUFBOzs7O3lCQUNmOzs7O0lBSHZDO0lBQXVDO01BQ25DO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBOEI7UUFBQTtRQUFBO01BQUE7TUFBOUI7SUFBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUFnRztJQUM1RjtnQkFBQTs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBNkQ7TUFDN0Q7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxRDtJQUNoRDs7OztJQUhEO0lBQTREO0lBQXBFLFNBQVEsVUFBNEQsU0FBcEU7SUFDVTtJQUFBO0lBQU4sU0FBTSxtQkFBTjs7Ozs7SUFSaEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBO0lBQWtDO0lBQzlCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBOzs7SUFBQTtLQUFBO0lBQXlHO01BQzlGO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXFFO0lBQ3ZFO0lBQ1Q7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQThFO01BQzFFO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEI7SUFBaUM7SUFDL0Q7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFLTTtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBb0M7TUFDcEM7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUE2QztRQUFBO1FBQUE7TUFBQTtNQUE3QztJQUFBO0lBQXVFO01BQ2pEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBbUM7SUFDaEQ7SUFDUDtJQUNKOzs7O0lBaEJNO0lBQXNDO0lBQTlDLFNBQVEsVUFBc0MsU0FBOUM7SUFLUztJQUFMLFVBQUssU0FBTDs7O0lBTlI7SUFBQTtJQUFBO0lBQUEsU0FBQSw2QkFBQTtJQUNJO0lBQUEsU0FBQSxTQUFBO0lBQ29DO0lBQXpCLFNBQXlCLFNBQXpCOzs7OztJQ0ZmO2dCQUFBOzs7SUFBQTs7OyJ9
