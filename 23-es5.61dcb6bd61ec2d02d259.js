!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var b=0;b<t.length;b++){var e=t[b];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{HDvl:function(b,e,a){"use strict";a.r(e),a.d(e,"TabsPageModule",function(){return k});var c=a("ofXK"),i=a("3Pt+"),l=a("8lIJ"),o=a("alW4"),s=a("tyNb"),r=a("fXoL");function d(n,t){1&n&&r.Gc(0,"time")}function g(n,t){1&n&&r.Gc(0,"times")}var u,G={},T=((u=function(){function b(){n(this,b)}var e,a,c;return e=b,(a=[{key:"ngOnInit",value:function(){this.count=G[this.id]||0,console.log(this.id,"counter instances: ",this.count++),G[this.id]=this.count}}])&&t(e.prototype,a),c&&t(e,c),b}()).\u0275fac=function(n){return new(n||u)},u.\u0275cmp=r.Fb({type:u,selectors:[["counter"]],inputs:{id:"id"},decls:11,vars:2,consts:[[3,"ngPlural"],["ngPluralCase","=1"],["ngPluralCase","other"]],template:function(n,t){1&n&&(r.Gc(0,"\n    "),r.Rb(1,"h2"),r.Gc(2),r.Rb(3,"span",0),r.Gc(4,"\n        "),r.Ec(5,d,1,0,"ng-template",1),r.Gc(6,"\n        "),r.Ec(7,g,1,0,"ng-template",2),r.Gc(8,"\n      "),r.Qb(),r.Gc(9,"\n    "),r.Qb(),r.Gc(10,"\n  ")),2&n&&(r.yb(2),r.Ic("\n      ngOnInit ran\n      ",t.count,"\n      "),r.yb(1),r.ic("ngPlural",t.count))},directives:[c.n,c.o],encapsulation:2}),u),h=a("LMvA");function x(n,t){1&n&&(r.Rb(0,"div"),r.Gc(1,"\n        Wrap the content in an element with an *ngxIfTabActive directive to only initialize when the tab is active.\n        "),r.Mb(2,"br"),r.Gc(3,"This content is rendered each time the tab is activated.\n        "),r.Mb(4,"counter",30),r.Gc(5,"\n      "),r.Qb())}function p(n,t){1&n&&(r.Gc(0,"\n        This is equivelent to Tab 2.\n        "),r.Mb(1,"br"),r.Gc(2,"This content is rendered each time the tab is activated.\n        "),r.Mb(3,"counter",31),r.Gc(4,"\n      "))}function f(n,t){1&n&&(r.Rb(0,"div"),r.Gc(1,"\n        This portion is rendered each time the tab is activated.\n        "),r.Mb(2,"counter",32),r.Gc(3,"\n      "),r.Qb())}function v(n,t){if(1&n&&(r.Rb(0,"ngx-tab",33),r.Gc(1),r.Qb()),2&n){var b=t.$implicit;r.ic("label","Tab "+b)("active",1===b),r.yb(1),r.Ic("\n      ","Tab "+b,"\n    ")}}function m(n,t){1&n&&(r.Gc(0," "),r.Mb(1,"ngx-icon",34),r.Gc(2," Tab 1 "))}function y(n,t){1&n&&(r.Gc(0," "),r.Mb(1,"ngx-icon",35),r.Gc(2," Tab 2 "))}function R(n,t){1&n&&(r.Gc(0," "),r.Mb(1,"ngx-icon",36),r.Gc(2," Tab 3 "))}var Q,w,I,C=[{path:"",component:(Q=function t(){n(this,t),this.tabList=[1,2,3],this.tab3Disabled=!0},Q.\u0275fac=function(n){return new(n||Q)},Q.\u0275cmp=r.Fb({type:Q,selectors:[["app-tabs-page"]],decls:127,vars:16,consts:[[1,"style-header"],["sectionTitle","Basic Tabs",1,"shadow"],["label","Tab 1"],["id","tab1"],["label","Tab 2"],[4,"ngxIfTabActive"],["label","Tab 3"],["ngxIfTabActive",""],["label","Tab 4",3,"active"],["thisTab",""],["id","tab4a"],[4,"ngIf"],["sectionTitle","Tab Controls",1,"shadow"],["tabs",""],[3,"label"],["tab1",""],["tab2",""],[3,"label","disabled"],["tab3",""],["tab4",""],[1,"btn","btn-bordered",3,"disabled","click"],[1,"btn","btn-primary",3,"disabled","click"],["label","Disable Tab 3",3,"ngModel","ngModelChange"],["sectionTitle","ngFor Tabs",1,"shadow"],[3,"click"],[3,"label","active",4,"ngFor","ngForOf"],["sectionTitle","Custom Label Tabs",1,"shadow"],["tabLabel1",""],["tabLabel2",""],["tabLabel3",""],["id","tab2"],["id","tab3"],["id","tab4b"],[3,"label","active"],["fontIcon","hand"],["fontIcon","user-groups"],["fontIcon","plane"]],template:function(n,t){if(1&n){var b=r.Sb();r.Rb(0,"h3",0),r.Gc(1,"Tabs"),r.Qb(),r.Gc(2,"\n\n"),r.Rb(3,"ngx-section",1),r.Gc(4,"\n  "),r.Rb(5,"ngx-tabs"),r.Gc(6,"\n    "),r.Rb(7,"ngx-tab",2),r.Gc(8,"\n      This content is rendered once, when the ngx-tabs component is initialized.\n      "),r.Mb(9,"counter",3),r.Gc(10,"\n    "),r.Qb(),r.Gc(11,"\n    "),r.Rb(12,"ngx-tab",4),r.Gc(13,"\n      "),r.Ec(14,x,6,0,"div",5),r.Gc(15,"\n    "),r.Qb(),r.Gc(16,"\n    "),r.Rb(17,"ngx-tab",6),r.Gc(18,"\n      "),r.Ec(19,p,5,0,"ng-template",7),r.Gc(20,"\n    "),r.Qb(),r.Gc(21,"\n    "),r.Rb(22,"ngx-tab",8,9),r.Gc(24,"\n      An *ngIf can be used to control selectivly certain content.\n      "),r.Mb(25,"br"),r.Gc(26,"This portion is rendered once, when the ngx-tabs component is initialized.\n      "),r.Mb(27,"counter",10),r.Gc(28,"\n      "),r.Ec(29,f,4,0,"div",11),r.Gc(30,"\n    "),r.Qb(),r.Gc(31,"\n  "),r.Qb(),r.Gc(32,"\n\n  "),r.Rb(33,"app-prism"),r.Gc(34,"\n"),r.Gc(35,'<ngx-tabs>\n  <ngx-tab label="Tab 1">\n    This content is rendered once, when the ngx-tabs component is initialized.\n    <counter id="tab1"></counter>\n  </ngx-tab>\n  <ngx-tab label="Tab 2">\n    <div *ngxIfTabActive>\n      Wrap the content in an element with an *ngxIfTabActive directive to only initialize when the tab is active.\n      <br />This content is rendered each time the tab is activated.\n      <counter id="tab2"></counter>\n    </div>\n  </ngx-tab>\n  <ngx-tab label="Tab 3">\n    <ng-template ngxIfTabActive>\n      This is equivelent to Tab 2.\n      <br />This content is rendered each time the tab is activated.\n      <counter id="tab3"></counter>\n    </ng-template>\n  </ngx-tab>\n  <ngx-tab label="Tab 4" [active]="false" #thisTab>\n    An *ngIf can be used to control selectivly certain content.\n    <br />This portion is rendered once, when the ngx-tabs component is initialized.\n    <counter id="tab4a"></counter>\n    <div *ngIf="thisTab?.active">\n      This portion is rendered each time the tab is activated.\n      <counter id="tab4b"></counter>\n    </div>\n  </ngx-tab>\n</ngx-tabs>'),r.Gc(36,"\n  "),r.Qb(),r.Gc(37,"\n"),r.Qb(),r.Gc(38,"\n\n"),r.Rb(39,"ngx-section",12),r.Gc(40,"\n  "),r.Rb(41,"ngx-tabs",null,13),r.Gc(43,"\n    "),r.Rb(44,"ngx-tab",14,15),r.Gc(46,"\n      Tab 1 Content\n    "),r.Qb(),r.Gc(47,"\n    "),r.Rb(48,"ngx-tab",14,16),r.Gc(50,"\n      Tab 2 Content\n    "),r.Qb(),r.Gc(51,"\n    "),r.Rb(52,"ngx-tab",17,18),r.Gc(54,"\n      Tab 3 Content, Disabled\n    "),r.Qb(),r.Gc(55,"\n    "),r.Rb(56,"ngx-tab",14,19),r.Gc(58,"\n      Tab 4 Content\n    "),r.Qb(),r.Gc(59,"\n  "),r.Qb(),r.Gc(60,"\n  "),r.Rb(61,"button",20),r.Yb("click",function(){return r.uc(b),r.rc(42).prev()}),r.Gc(62,"Prev"),r.Qb(),r.Gc(63,"\n  "),r.Rb(64,"button",20),r.Yb("click",function(){return r.uc(b),r.rc(42).next()}),r.Gc(65,"Next"),r.Qb(),r.Gc(66,"\n  "),r.Rb(67,"button",21),r.Yb("click",function(){r.uc(b);var n=r.rc(57);return r.rc(42).tabClicked(n)}),r.Gc(68,"Select Tab 4"),r.Qb(),r.Gc(69,"\n  "),r.Rb(70,"ngx-toggle",22),r.Yb("ngModelChange",function(n){return t.tab3Disabled=n}),r.Gc(71," "),r.Qb(),r.Gc(72,"\n\n  "),r.Rb(73,"app-prism"),r.Gc(74,"\n"),r.Gc(75,'<ngx-tabs #tabs>\n  <ngx-tab #tab1 [label]="\'Tab 1\'">\n    Tab 1 Content\n  </ngx-tab>\n  <ngx-tab #tab2 [label]="\'Tab 2\'">\n    Tab 2 Content\n  </ngx-tab>\n  <ngx-tab #tab3 [label]="\'Tab 3\'" [disabled]="tab3Disabled">\n    Tab 3 Content, Disabled\n  </ngx-tab>\n  <ngx-tab #tab4 [label]="\'Tab 4\'">\n    Tab 4 Content\n  </ngx-tab>\n</ngx-tabs>\n<button class="btn btn-bordered" (click)="tabs.prev()" [disabled]="tab1.active">Prev</button>\n<button class="btn btn-bordered" (click)="tabs.next()" [disabled]="tab4.active">Next</button>\n<button class="btn btn-primary" (click)="tabs.tabClicked(tab4)" [disabled]="tab4.active">Select Tab 4</button>\n<ngx-toggle [(ngModel)]="tab3Disabled" label="Disable Tab 3"> </ngx-toggle>'),r.Gc(76,"\n  "),r.Qb(),r.Gc(77,"\n"),r.Qb(),r.Gc(78,"\n\n"),r.Rb(79,"ngx-section",23),r.Gc(80,"\n  "),r.Rb(81,"button",24),r.Yb("click",function(){return t.tabList.push(t.tabList.length+1)}),r.Gc(82,"Add Tab"),r.Qb(),r.Gc(83,"\n  "),r.Rb(84,"ngx-tabs"),r.Gc(85,"\n    "),r.Ec(86,v,2,3,"ngx-tab",25),r.Gc(87,"\n  "),r.Qb(),r.Gc(88,"\n\n  "),r.Rb(89,"app-prism"),r.Gc(90,"\n"),r.Gc(91,'<ngx-tabs>\n  <ngx-tab *ngFor="let i of tabList" [label]="\'Tab \' + i" [active]="i === 1">\n    { { \'Tab \' + i } }\n  </ngx-tab>\n</ngx-tabs>'),r.Gc(92,"\n  "),r.Qb(),r.Gc(93,"\n"),r.Qb(),r.Gc(94,"\n\n"),r.Rb(95,"ngx-section",26),r.Gc(96,"\n  "),r.Rb(97,"ngx-tabs"),r.Gc(98,"\n    "),r.Rb(99,"ngx-tab",14,15),r.Gc(101,"\n      Tab 1 custom label\n    "),r.Qb(),r.Gc(102,"\n    "),r.Rb(103,"ngx-tab",14,16),r.Gc(105,"\n      Tab 2 custom label\n    "),r.Qb(),r.Gc(106,"\n    "),r.Rb(107,"ngx-tab",17,18),r.Gc(109,"\n      Tab 3 custom label, Disabled\n    "),r.Qb(),r.Gc(110,"\n  "),r.Qb(),r.Gc(111,"\n\n  "),r.Rb(112,"app-prism"),r.Gc(113,"\n"),r.Gc(114,'<ngx-tabs>\n  <ngx-tab #tab1 [label]="tabLabel1">\n    Tab 1 custom label\n  </ngx-tab>\n  <ngx-tab #tab2 [label]="tabLabel2">\n    Tab 2 custom label\n  </ngx-tab>\n  <ngx-tab #tab3 [label]="tabLabel3" [disabled]="true">\n    Tab 3 custom label, Disabled\n  </ngx-tab>\n</ngx-tabs>'),r.Gc(115,"\n  "),r.Qb(),r.Gc(116,"\n\n  "),r.Ec(117,m,3,0,"ng-template",null,27,r.Fc),r.Gc(119,"\n  "),r.Ec(120,y,3,0,"ng-template",null,28,r.Fc),r.Gc(122,"\n  "),r.Ec(123,R,3,0,"ng-template",null,29,r.Fc),r.Gc(125,"\n"),r.Qb(),r.Gc(126,"\n")}if(2&n){var e=r.rc(23),a=r.rc(45),c=r.rc(57),i=r.rc(118),l=r.rc(121),o=r.rc(124);r.yb(22),r.ic("active",!1),r.yb(7),r.ic("ngIf",null==e?null:e.active),r.yb(15),r.ic("label","Tab 1"),r.yb(4),r.ic("label","Tab 2"),r.yb(4),r.ic("label","Tab 3")("disabled",t.tab3Disabled),r.yb(4),r.ic("label","Tab 4"),r.yb(5),r.ic("disabled",a.active),r.yb(3),r.ic("disabled",c.active),r.yb(3),r.ic("disabled",c.active),r.yb(3),r.ic("ngModel",t.tab3Disabled),r.yb(16),r.ic("ngForOf",t.tabList),r.yb(13),r.ic("label",i),r.yb(4),r.ic("label",l),r.yb(4),r.ic("label",o)("disabled",!0)}},directives:[l.yb,l.Sb,l.Rb,T,l.K,c.m,h.a,l.Yb,i.i,i.l,c.l],encapsulation:2,changeDetection:0}),Q)}],M=((I=function t(){n(this,t)}).\u0275mod=r.Jb({type:I}),I.\u0275inj=r.Ib({factory:function(n){return new(n||I)},imports:[[s.g.forChild(C)],s.g]}),I),k=((w=function t(){n(this,t)}).\u0275mod=r.Jb({type:w}),w.\u0275inj=r.Ib({factory:function(n){return new(n||w)},imports:[[c.c,i.d,o.a,l.Ab,l.Tb,l.Zb,M]]}),w)}}])}();