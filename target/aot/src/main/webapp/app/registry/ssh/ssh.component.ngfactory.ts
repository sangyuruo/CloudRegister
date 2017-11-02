/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../../../../../src/main/webapp/app/registry/ssh/ssh.component';
import * as import2 from '@angular/common';
import * as import3 from '@ng-bootstrap/ng-bootstrap/collapse/collapse';
import * as import4 from '../../../../../../../../src/main/webapp/app/registry/ssh/ssh.service';
const styles_JhiSSHComponent:any[] = ([] as any[]);
export const RenderType_JhiSSHComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_JhiSSHComponent,
  data: {}
}
);
function View_JhiSSHComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'fa fa-arrow-circle-down'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[' show more\n            ']))
  ]
  ,(null as any),(null as any));
}
function View_JhiSSHComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'fa fa-arrow-circle-up'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[' show less\n            ']))
  ]
  ,(null as any),(null as any));
}
export function View_JhiSSHComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),97,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['SSH Public Key'])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        This is the SSH public key stored in this server\'s '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'code',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['~/.ssh/id_rsa.pub'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        This key should be used to grant access for this server to the Git repository which holds the Spring Cloud Configuration files.\n    '])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Your SSH public key'])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'pre',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'hr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',[[
        'class',
        'text-center pad'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'a',[[
        'class',
        'btn btn-default'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.JhiSSHComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>(co.showMore = !co.showMore)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiSSHComponent_1)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiSSHComponent_2)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n	'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),62,'div',([] as any[]),[
      [
        2,
        'collapse',
        (null as any)
      ]
      ,
      [
        2,
        'show',
        (null as any)
      ]
      ,
      [
        1,
        'aria-expanded',
        0
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any))),
      import0.ɵdid(8192,(null as any),0,import3.NgbCollapse,([] as any[]),{collapsed: [
        0,
        'collapsed'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'fa fa-info-circle'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[' Using SSH with Docker'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            Here are detailed instruction when using the JHipster Registry Docker image, available at\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',[
      [
        'href',
        'https://hub.docker.com/r/jhipster/jhipster-registry/'
      ]
      ,
      [
        'target',
        '_blank'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['jhipster/jhipster-registry/'])),
    (l()(),import0.ɵted((null as any),['.\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),36,'ul',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Log in inside the container: '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'code',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['docker exec -it <containerIdOrName> sh'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Generate an SSH key: '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'code',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['ssh-keygen'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Copy the public key in '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'code',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['/root/.ssh/id_rsa.pub'])),
    (l()(),import0.ɵted((null as any),[' to the remote Git repository you want to access\n                (in Github, go to your settings/SSH keys)'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),14,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Test inside your container that the SSH connection is working:\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),11,'ul',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Log in to your Git provider using your ssh key: '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'code',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['ssh -T git@github.com'])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['When asked to to add the Git repository host to the list of known hosts, reply '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'b',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['yes'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Restart the registry without removing the container, it should be able to read a Git repo secured by SSH'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        In order not to lose our setup every time you recreate or update the container, you can mount the\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'code',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['/root/.ssh/'])),
    (l()(),import0.ɵted((null as any),[' folder to a Docker volume.\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['To setup your own git repo, edit the GIT_URI environment variable passed to your container, for example using Docker Compose:'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'pre',[[
        'class',
        'code-block'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['    version: \'2\'\n      services:\n        jhipster-registry:\n          container_name: jhipster-registry\n          image: jhipster/jhipster-registry\n      volumes:\n        - ./ssh/:/root/.ssh/\n      environment:\n        - SPRING_PROFILES_ACTIVE=prod\n        - GIT_URI=git@github.com:jhipster/jhipster-registry.git\n        - GIT_SEARCH_PATHS=central-config\n      ports:\n        - 8761:8761\n        '])),
    (l()(),import0.ɵted((null as any),['\n	'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import1.JhiSSHComponent = v.component;
    const currVal_1:any = co.showMore;
    ck(v,27,0,currVal_1);
    const currVal_2:boolean = !co.showMore;
    ck(v,30,0,currVal_2);
    const currVal_6:any = co.showMore;
    ck(v,35,0,currVal_6);
  },(ck,v) => {
    var co:import1.JhiSSHComponent = v.component;
    const currVal_0:any = co.data;
    ck(v,18,0,currVal_0);
    const currVal_3:any = true;
    const currVal_4:boolean = !import0.ɵnov(v,35).collapsed;
    const currVal_5:boolean = !import0.ɵnov(v,35).collapsed;
    ck(v,34,0,currVal_3,currVal_4,currVal_5);
  });
}
function View_JhiSSHComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'jhi-applications',([] as any[]),(null as any),(null as any),(null as any),View_JhiSSHComponent_0,RenderType_JhiSSHComponent)),
    import0.ɵdid(57344,(null as any),0,import1.JhiSSHComponent,[import4.JhiSSHService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const JhiSSHComponentNgFactory:import0.ComponentFactory<import1.JhiSSHComponent> = import0.ɵccf('jhi-applications',import1.JhiSSHComponent,View_JhiSSHComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvc3NoL3NzaC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvc2FuZ2p1bi93b3JrL2NvZGUvSFhDbG91ZC9IWENsb3VkUmVnaXN0ZXIvc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9zc2gvc3NoLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvc3NoL3NzaC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3NhbmdqdW4vd29yay9jb2RlL0hYQ2xvdWQvSFhDbG91ZFJlZ2lzdGVyL3NyYy9tYWluL3dlYmFwcC9hcHAvcmVnaXN0cnkvc3NoL3NzaC5jb21wb25lbnQudHMuSmhpU1NIQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdj5cbiAgICA8aDI+U1NIIFB1YmxpYyBLZXk8L2gyPlxuXG4gICAgPHA+XG4gICAgICAgIFRoaXMgaXMgdGhlIFNTSCBwdWJsaWMga2V5IHN0b3JlZCBpbiB0aGlzIHNlcnZlcidzIDxjb2RlPiYjMTI2Oy8uc3NoL2lkX3JzYS5wdWI8L2NvZGU+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgICBUaGlzIGtleSBzaG91bGQgYmUgdXNlZCB0byBncmFudCBhY2Nlc3MgZm9yIHRoaXMgc2VydmVyIHRvIHRoZSBHaXQgcmVwb3NpdG9yeSB3aGljaCBob2xkcyB0aGUgU3ByaW5nIENsb3VkIENvbmZpZ3VyYXRpb24gZmlsZXMuXG4gICAgPC9wPlxuXG4gICAgPGgzPllvdXIgU1NIIHB1YmxpYyBrZXk8L2gzPlxuXG4gICAgPHByZT57e2RhdGF9fTwvcHJlPlxuICAgIDxocj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcGFkXCIgPlxuICAgICAgICA8YSAoY2xpY2spPVwic2hvd01vcmUgPSAhc2hvd01vcmVcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93TW9yZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctY2lyY2xlLWRvd25cIj48L3NwYW4+Jm5ic3A7c2hvdyBtb3JlXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXNob3dNb3JlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hcnJvdy1jaXJjbGUtdXBcIj48L3NwYW4+Jm5ic3A7c2hvdyBsZXNzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj5cblx0PGRpdiBbbmdiQ29sbGFwc2VdPVwic2hvd01vcmVcIj5cbiAgICAgICAgPGgzPjxzcGFuIGNsYXNzPVwiZmEgZmEtaW5mby1jaXJjbGVcIj48L3NwYW4+IFVzaW5nIFNTSCB3aXRoIERvY2tlcjwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgSGVyZSBhcmUgZGV0YWlsZWQgaW5zdHJ1Y3Rpb24gd2hlbiB1c2luZyB0aGUgSkhpcHN0ZXIgUmVnaXN0cnkgRG9ja2VyIGltYWdlLCBhdmFpbGFibGUgYXRcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2h1Yi5kb2NrZXIuY29tL3IvamhpcHN0ZXIvamhpcHN0ZXItcmVnaXN0cnkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+amhpcHN0ZXIvamhpcHN0ZXItcmVnaXN0cnkvPC9hPi5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5Mb2cgaW4gaW5zaWRlIHRoZSBjb250YWluZXI6IDxjb2RlPmRvY2tlciBleGVjIC1pdCAmbHQ7Y29udGFpbmVySWRPck5hbWUmZ3Q7IHNoPC9jb2RlPjwvbGk+XG4gICAgICAgICAgICA8bGk+R2VuZXJhdGUgYW4gU1NIIGtleTogPGNvZGU+c3NoLWtleWdlbjwvY29kZT48L2xpPlxuICAgICAgICAgICAgPGxpPkNvcHkgdGhlIHB1YmxpYyBrZXkgaW4gPGNvZGU+L3Jvb3QvLnNzaC9pZF9yc2EucHViPC9jb2RlPiB0byB0aGUgcmVtb3RlIEdpdCByZXBvc2l0b3J5IHlvdSB3YW50IHRvIGFjY2Vzc1xuICAgICAgICAgICAgICAgIChpbiBHaXRodWIsIGdvIHRvIHlvdXIgc2V0dGluZ3MvU1NIIGtleXMpPC9saT5cbiAgICAgICAgICAgIDxsaT5UZXN0IGluc2lkZSB5b3VyIGNvbnRhaW5lciB0aGF0IHRoZSBTU0ggY29ubmVjdGlvbiBpcyB3b3JraW5nOlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkxvZyBpbiB0byB5b3VyIEdpdCBwcm92aWRlciB1c2luZyB5b3VyIHNzaCBrZXk6IDxjb2RlPnNzaCAtVCBnaXRAZ2l0aHViLmNvbTwvY29kZT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+V2hlbiBhc2tlZCB0byB0byBhZGQgdGhlIEdpdCByZXBvc2l0b3J5IGhvc3QgdG8gdGhlIGxpc3Qgb2Yga25vd24gaG9zdHMsIHJlcGx5IDxiPnllczwvYj48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlJlc3RhcnQgdGhlIHJlZ2lzdHJ5IHdpdGhvdXQgcmVtb3ZpbmcgdGhlIGNvbnRhaW5lciwgaXQgc2hvdWxkIGJlIGFibGUgdG8gcmVhZCBhIEdpdCByZXBvIHNlY3VyZWQgYnkgU1NIPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8cD5cbiAgICAgICAgSW4gb3JkZXIgbm90IHRvIGxvc2Ugb3VyIHNldHVwIGV2ZXJ5IHRpbWUgeW91IHJlY3JlYXRlIG9yIHVwZGF0ZSB0aGUgY29udGFpbmVyLCB5b3UgY2FuIG1vdW50IHRoZVxuICAgICAgICA8Y29kZT4vcm9vdC8uc3NoLzwvY29kZT4gZm9sZGVyIHRvIGEgRG9ja2VyIHZvbHVtZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlRvIHNldHVwIHlvdXIgb3duIGdpdCByZXBvLCBlZGl0IHRoZSBHSVRfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIHBhc3NlZCB0byB5b3VyIGNvbnRhaW5lciwgZm9yIGV4YW1wbGUgdXNpbmcgRG9ja2VyIENvbXBvc2U6PC9wPlxuICAgICAgICA8cHJlIGNsYXNzPVwiY29kZS1ibG9ja1wiPlxuICAgIHZlcnNpb246ICcyJ1xuICAgICAgc2VydmljZXM6XG4gICAgICAgIGpoaXBzdGVyLXJlZ2lzdHJ5OlxuICAgICAgICAgIGNvbnRhaW5lcl9uYW1lOiBqaGlwc3Rlci1yZWdpc3RyeVxuICAgICAgICAgIGltYWdlOiBqaGlwc3Rlci9qaGlwc3Rlci1yZWdpc3RyeVxuICAgICAgdm9sdW1lczpcbiAgICAgICAgLSAuL3NzaC86L3Jvb3QvLnNzaC9cbiAgICAgIGVudmlyb25tZW50OlxuICAgICAgICAtIFNQUklOR19QUk9GSUxFU19BQ1RJVkU9cHJvZFxuICAgICAgICAtIEdJVF9VUkk9Z2l0QGdpdGh1Yi5jb206amhpcHN0ZXIvamhpcHN0ZXItcmVnaXN0cnkuZ2l0XG4gICAgICAgIC0gR0lUX1NFQVJDSF9QQVRIUz1jZW50cmFsLWNvbmZpZ1xuICAgICAgcG9ydHM6XG4gICAgICAgIC0gODc2MTo4NzYxXG4gICAgICAgIDwvcHJlPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIiwiPGpoaS1hcHBsaWNhdGlvbnM+PC9qaGktYXBwbGljYXRpb25zPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNnQlk7SUFBdUI7TUFDbkI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2Qzs7Ozs7O0lBRXJEO0lBQXdCO01BQ2hCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkM7Ozs7OztJQXBCM0Q7SUFBSztJQUNEO0lBQUk7SUFBbUI7SUFFdkI7SUFBRztJQUNvRDtJQUFNO0lBQTZCO0lBQ3RGO0lBQ0o7SUFBRztJQUVDO0lBRUo7SUFBSTtJQUF3QjtJQUU1QjtJQUFLO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBYztJQUNuQjtJQUFJO01BQ0o7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QjtNQUMxQjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUc7UUFBQTtRQUFBO01BQUE7TUFBSDtJQUFBO0lBQTBEO0lBQ3REO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFTztJQUNYO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFVztJQUNQO0lBQ0Y7SUFDVDtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QjtJQUN2QjtNQUFJO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUM7SUFBMkI7SUFDdEU7SUFBRztJQUVDO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUErRTtJQUErQjtJQUM5RztJQUVKO0lBQUk7SUFDQTtJQUFJO0lBQTZCO0lBQU07SUFBd0Q7SUFDL0Y7SUFBSTtJQUFxQjtJQUFNO0lBQXNCO0lBQ3JEO0lBQUk7SUFBdUI7SUFBTTtJQUE0QjtJQUNYO0lBQ2xEO0lBQUk7SUFDQTtJQUFJO0lBQ0E7SUFBSTtJQUFnRDtJQUFNO0lBQWlDO0lBQzNGO0lBQUk7SUFBK0U7SUFBRztJQUFZO0lBQ2pHO0lBQ0o7SUFDTDtJQUFJO0lBQTZHO0lBQ2hIO0lBRUw7SUFBRztJQUVIO0lBQU07SUFBa0I7SUFDcEI7SUFFSjtJQUFHO0lBQWlJO01BQ3BJO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFjbEI7SUFDUDtJQUNEOzs7O0lBbkRZO0lBQU4sVUFBTSxTQUFOO0lBR0U7SUFBTixVQUFNLFNBQU47SUFLRjtJQUFMLFVBQUssU0FBTDs7O0lBWlE7SUFBQTtJQVlSO0lBQUE7SUFBQTtJQUFBLFVBQUEsNkJBQUE7Ozs7O0lDeEJEO2dCQUFBOzs7SUFBQTs7OyJ9
