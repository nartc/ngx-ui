(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{Qhu6:function(n,e,i){"use strict";i.r(e),i.d(e,"SliderPageModule",function(){return u});var l=i("ofXK"),t=i("3Pt+"),r=i("8lIJ"),c=i("alW4"),s=i("tyNb"),d=i("fXoL"),a=i("LMvA");const o=[{path:"",component:(()=>{class n{constructor(){this.sliderValue=85,this.sliderValues="45,85"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=d.Fb({type:n,selectors:[["app-slider-page"]],decls:133,vars:84,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],[3,"ngModel","step","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","tickStep","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","filled","min","max","ngModelChange","change"],[3,"ngModel","step","orientation","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","tickStep","orientation","filled","min","max","ngModelChange","change"],[3,"ngModel","step","filled","min","orientation","max","ngModelChange","change"],[3,"ngModel","step","showTicks","filled","orientation","min","max","ngModelChange","change"],[3,"ngModel","multiple","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","orientation","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","disabled","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","disabled","orientation","step","filled","min","max","ngModelChange","change"]],template:function(n,e){1&n&&(d.Rb(0,"h3",0),d.Gc(1,"Slider"),d.Qb(),d.Gc(2,"\n\n"),d.Rb(3,"ngx-section",1),d.Gc(4,"\n  "),d.Rb(5,"ngx-slider",2),d.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent1=n}),d.Gc(6,"\n  "),d.Qb(),d.Gc(7,"\n\n  "),d.Rb(8,"app-prism"),d.Gc(9,"\n"),d.Gc(10,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),d.Gc(11,"\n  "),d.Qb(),d.Gc(12,"\n\n  "),d.Mb(13,"br"),d.Gc(14,"\n\n  "),d.Rb(15,"ngx-slider",3),d.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent2=n}),d.Gc(16,"\n  "),d.Qb(),d.Gc(17,"\n\n  "),d.Rb(18,"app-prism"),d.Gc(19,"\n"),d.Gc(20,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [showTicks]="true"\n  [tickStep]="25"\n  [filled]="true"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent2 = $event">\n</ngx-slider>'),d.Gc(21,"\n  "),d.Qb(),d.Gc(22,"\n\n  "),d.Mb(23,"br"),d.Gc(24,"\n\n  "),d.Rb(25,"ngx-slider",2),d.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent3=n}),d.Gc(26,"\n  "),d.Qb(),d.Gc(27,"\n\n  "),d.Rb(28,"app-prism"),d.Gc(29,"\n"),d.Gc(30,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent3 = $event">\n</ngx-slider>'),d.Gc(31,"\n  "),d.Qb(),d.Gc(32,"\n\n  "),d.Mb(33,"br"),d.Gc(34,"\n\n  "),d.Rb(35,"ngx-slider",4),d.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent4=n}),d.Gc(36,"\n  "),d.Qb(),d.Gc(37,"\n\n  "),d.Rb(38,"app-prism"),d.Gc(39,"\n"),d.Gc(40,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [showTicks]="true"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent4 = $event">\n</ngx-slider>'),d.Gc(41,"\n  "),d.Qb(),d.Gc(42,"\n"),d.Qb(),d.Gc(43,"\n\n"),d.Rb(44,"ngx-section",1),d.Gc(45,"\n  "),d.Rb(46,"ngx-slider",5),d.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent5=n}),d.Gc(47,"\n  "),d.Qb(),d.Gc(48,"\n\n  "),d.Rb(49,"app-prism"),d.Gc(50,"\n"),d.Gc(51,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="true"\n  [orientation]="\'vertical\'"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),d.Gc(52,"\n  "),d.Qb(),d.Gc(53,"\n\n  "),d.Mb(54,"br"),d.Gc(55,"\n\n  "),d.Rb(56,"ngx-slider",6),d.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent6=n}),d.Gc(57,"\n  "),d.Qb(),d.Gc(58,"\n\n  "),d.Rb(59,"app-prism"),d.Gc(60,"\n"),d.Gc(61,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [orientation]="\'vertical\'"\n  [showTicks]="true"\n  [tickStep]="25"\n  [filled]="true"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent6 = $event">\n</ngx-slider>'),d.Gc(62,"\n  "),d.Qb(),d.Gc(63,"\n\n  "),d.Mb(64,"br"),d.Gc(65,"\n\n  "),d.Rb(66,"ngx-slider",7),d.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent7=n}),d.Gc(67,"\n  "),d.Qb(),d.Gc(68,"\n\n  "),d.Rb(69,"app-prism"),d.Gc(70,"\n"),d.Gc(71,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="false"\n  [orientation]="\'vertical\'"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent7 = $event">\n</ngx-slider>'),d.Gc(72,"\n  "),d.Qb(),d.Gc(73,"\n\n  "),d.Mb(74,"br"),d.Gc(75,"\n\n  "),d.Rb(76,"ngx-slider",8),d.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent8=n}),d.Gc(77,"\n  "),d.Qb(),d.Gc(78,"\n\n  "),d.Rb(79,"app-prism"),d.Gc(80,"\n"),d.Gc(81,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [showTicks]="true"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent8 = $event">\n</ngx-slider>'),d.Gc(82,"\n  "),d.Qb(),d.Gc(83,"\n\n"),d.Qb(),d.Gc(84,"\n\n"),d.Rb(85,"ngx-section",1),d.Gc(86,"\n  "),d.Rb(87,"ngx-slider",9),d.Yb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent1=n}),d.Gc(88,"\n  "),d.Qb(),d.Gc(89,"\n\n  "),d.Rb(90,"app-prism"),d.Gc(91,"\n"),d.Gc(92,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [multiple]="true"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),d.Gc(93,"\n  "),d.Qb(),d.Gc(94,"\n\n  "),d.Mb(95,"br"),d.Gc(96,"\n\n  "),d.Rb(97,"ngx-slider",10),d.Yb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent5=n}),d.Gc(98,"\n  "),d.Qb(),d.Gc(99,"\n\n  "),d.Rb(100,"p"),d.Gc(101),d.Qb(),d.Gc(102,"\n\n  "),d.Rb(103,"app-prism"),d.Gc(104,"\n"),d.Gc(105,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [multiple]="true"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),d.Gc(106,"\n  "),d.Qb(),d.Gc(107,"\n\n"),d.Qb(),d.Gc(108,"\n\n"),d.Rb(109,"ngx-section",1),d.Gc(110,"\n  "),d.Rb(111,"ngx-slider",11),d.Yb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent1=n}),d.Gc(112,"\n  "),d.Qb(),d.Gc(113,"\n\n  "),d.Rb(114,"app-prism"),d.Gc(115,"\n"),d.Gc(116,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [disabled]="true"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),d.Gc(117,"\n  "),d.Qb(),d.Gc(118,"\n\n  "),d.Mb(119,"br"),d.Gc(120,"\n\n  "),d.Rb(121,"ngx-slider",12),d.Yb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent5=n}),d.Gc(122,"\n  "),d.Qb(),d.Gc(123,"\n\n  "),d.Rb(124,"p"),d.Gc(125),d.Qb(),d.Gc(126,"\n\n  "),d.Rb(127,"app-prism"),d.Gc(128,"\n"),d.Gc(129,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [disabled]="true"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),d.Gc(130,"\n  "),d.Qb(),d.Gc(131,"\n\n"),d.Qb(),d.Gc(132,"\n")),2&n&&(d.yb(3),d.ic("sectionTitle","Horizontal"),d.yb(2),d.ic("ngModel",e.sliderValue)("step",5)("filled",!0)("min",10)("max",200),d.yb(10),d.ic("ngModel",e.sliderValue)("step",5)("showTicks",!0)("tickStep",25)("filled",!0)("min",0)("max",100),d.yb(10),d.ic("ngModel",e.sliderValue)("step",5)("filled",!1)("min",0)("max",100),d.yb(10),d.ic("ngModel",e.sliderValue)("step",5)("showTicks",!0)("filled",!1)("min",0)("max",100),d.yb(9),d.ic("sectionTitle","Vertical"),d.yb(2),d.ic("ngModel",e.sliderValue)("step",5)("orientation","vertical")("filled",!0)("min",10)("max",200),d.yb(10),d.ic("ngModel",e.sliderValue)("step",5)("showTicks",!0)("tickStep",25)("orientation","vertical")("filled",!0)("min",0)("max",100),d.yb(10),d.ic("ngModel",e.sliderValue)("step",5)("filled",!1)("min",0)("orientation","vertical")("max",100),d.yb(10),d.ic("ngModel",e.sliderValue)("step",5)("showTicks",!0)("filled",!1)("orientation","vertical")("min",0)("max",100),d.yb(9),d.ic("sectionTitle","Range"),d.yb(2),d.ic("ngModel",e.sliderValues)("multiple",!0)("step",5)("filled",!0)("min",10)("max",200),d.yb(10),d.ic("ngModel",e.sliderValues)("multiple",!0)("orientation","vertical")("step",5)("filled",!0)("min",10)("max",200),d.yb(4),d.Ic("Slider Values: ",e.sliderValues,""),d.yb(8),d.ic("sectionTitle","Disabled"),d.yb(2),d.ic("ngModel",e.sliderValues)("multiple",!0)("disabled",!0)("step",5)("filled",!0)("min",10)("max",200),d.yb(10),d.ic("ngModel",e.sliderValues)("multiple",!0)("disabled",!0)("orientation","vertical")("step",5)("filled",!0)("min",10)("max",200),d.yb(4),d.Ic("Slider Values: ",e.sliderValues,""))},directives:[r.wb,r.Eb,t.i,t.l,a.a],encapsulation:2,changeDetection:0}),n})()}];let g=(()=>{class n{}return n.\u0275mod=d.Jb({type:n}),n.\u0275inj=d.Ib({factory:function(e){return new(e||n)},imports:[[s.g.forChild(o)],s.g]}),n})(),u=(()=>{class n{}return n.\u0275mod=d.Jb({type:n}),n.\u0275inj=d.Ib({factory:function(e){return new(e||n)},imports:[[l.c,t.d,c.a,r.yb,r.Fb,g]]}),n})()}}]);