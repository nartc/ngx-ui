(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{Qhu6:function(n,e,l){"use strict";l.r(e),l.d(e,"SliderPageModule",function(){return u});var i=l("ofXK"),t=l("3Pt+"),r=l("8lIJ"),c=l("alW4"),s=l("tyNb"),d=l("fXoL"),a=l("LMvA");const o=[{path:"",component:(()=>{class n{constructor(){this.sliderValue=85,this.sliderValues="45,85"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=d.Gb({type:n,selectors:[["app-slider-page"]],decls:133,vars:84,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],[3,"ngModel","step","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","tickStep","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","filled","min","max","ngModelChange","change"],[3,"ngModel","step","orientation","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","tickStep","orientation","filled","min","max","ngModelChange","change"],[3,"ngModel","step","filled","min","orientation","max","ngModelChange","change"],[3,"ngModel","step","showTicks","filled","orientation","min","max","ngModelChange","change"],[3,"ngModel","multiple","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","orientation","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","disabled","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","disabled","orientation","step","filled","min","max","ngModelChange","change"]],template:function(n,e){1&n&&(d.Sb(0,"h3",0),d.Ic(1,"Slider"),d.Rb(),d.Ic(2,"\n\n"),d.Sb(3,"ngx-section",1),d.Ic(4,"\n  "),d.Sb(5,"ngx-slider",2),d.Zb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent1=n}),d.Ic(6,"\n  "),d.Rb(),d.Ic(7,"\n\n  "),d.Sb(8,"app-prism"),d.Ic(9,"\n"),d.Ic(10,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),d.Ic(11,"\n  "),d.Rb(),d.Ic(12,"\n\n  "),d.Nb(13,"br"),d.Ic(14,"\n\n  "),d.Sb(15,"ngx-slider",3),d.Zb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent2=n}),d.Ic(16,"\n  "),d.Rb(),d.Ic(17,"\n\n  "),d.Sb(18,"app-prism"),d.Ic(19,"\n"),d.Ic(20,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [showTicks]="true"\n  [tickStep]="25"\n  [filled]="true"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent2 = $event">\n</ngx-slider>'),d.Ic(21,"\n  "),d.Rb(),d.Ic(22,"\n\n  "),d.Nb(23,"br"),d.Ic(24,"\n\n  "),d.Sb(25,"ngx-slider",2),d.Zb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent3=n}),d.Ic(26,"\n  "),d.Rb(),d.Ic(27,"\n\n  "),d.Sb(28,"app-prism"),d.Ic(29,"\n"),d.Ic(30,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent3 = $event">\n</ngx-slider>'),d.Ic(31,"\n  "),d.Rb(),d.Ic(32,"\n\n  "),d.Nb(33,"br"),d.Ic(34,"\n\n  "),d.Sb(35,"ngx-slider",4),d.Zb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent4=n}),d.Ic(36,"\n  "),d.Rb(),d.Ic(37,"\n\n  "),d.Sb(38,"app-prism"),d.Ic(39,"\n"),d.Ic(40,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [showTicks]="true"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent4 = $event">\n</ngx-slider>'),d.Ic(41,"\n  "),d.Rb(),d.Ic(42,"\n"),d.Rb(),d.Ic(43,"\n\n"),d.Sb(44,"ngx-section",1),d.Ic(45,"\n  "),d.Sb(46,"ngx-slider",5),d.Zb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent5=n}),d.Ic(47,"\n  "),d.Rb(),d.Ic(48,"\n\n  "),d.Sb(49,"app-prism"),d.Ic(50,"\n"),d.Ic(51,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="true"\n  [orientation]="\'vertical\'"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),d.Ic(52,"\n  "),d.Rb(),d.Ic(53,"\n\n  "),d.Nb(54,"br"),d.Ic(55,"\n\n  "),d.Sb(56,"ngx-slider",6),d.Zb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent6=n}),d.Ic(57,"\n  "),d.Rb(),d.Ic(58,"\n\n  "),d.Sb(59,"app-prism"),d.Ic(60,"\n"),d.Ic(61,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [orientation]="\'vertical\'"\n  [showTicks]="true"\n  [tickStep]="25"\n  [filled]="true"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent6 = $event">\n</ngx-slider>'),d.Ic(62,"\n  "),d.Rb(),d.Ic(63,"\n\n  "),d.Nb(64,"br"),d.Ic(65,"\n\n  "),d.Sb(66,"ngx-slider",7),d.Zb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent7=n}),d.Ic(67,"\n  "),d.Rb(),d.Ic(68,"\n\n  "),d.Sb(69,"app-prism"),d.Ic(70,"\n"),d.Ic(71,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="false"\n  [orientation]="\'vertical\'"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent7 = $event">\n</ngx-slider>'),d.Ic(72,"\n  "),d.Rb(),d.Ic(73,"\n\n  "),d.Nb(74,"br"),d.Ic(75,"\n\n  "),d.Sb(76,"ngx-slider",8),d.Zb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent8=n}),d.Ic(77,"\n  "),d.Rb(),d.Ic(78,"\n\n  "),d.Sb(79,"app-prism"),d.Ic(80,"\n"),d.Ic(81,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [showTicks]="true"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent8 = $event">\n</ngx-slider>'),d.Ic(82,"\n  "),d.Rb(),d.Ic(83,"\n\n"),d.Rb(),d.Ic(84,"\n\n"),d.Sb(85,"ngx-section",1),d.Ic(86,"\n  "),d.Sb(87,"ngx-slider",9),d.Zb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent1=n}),d.Ic(88,"\n  "),d.Rb(),d.Ic(89,"\n\n  "),d.Sb(90,"app-prism"),d.Ic(91,"\n"),d.Ic(92,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [multiple]="true"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),d.Ic(93,"\n  "),d.Rb(),d.Ic(94,"\n\n  "),d.Nb(95,"br"),d.Ic(96,"\n\n  "),d.Sb(97,"ngx-slider",10),d.Zb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent5=n}),d.Ic(98,"\n  "),d.Rb(),d.Ic(99,"\n\n  "),d.Sb(100,"p"),d.Ic(101),d.Rb(),d.Ic(102,"\n\n  "),d.Sb(103,"app-prism"),d.Ic(104,"\n"),d.Ic(105,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [multiple]="true"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),d.Ic(106,"\n  "),d.Rb(),d.Ic(107,"\n\n"),d.Rb(),d.Ic(108,"\n\n"),d.Sb(109,"ngx-section",1),d.Ic(110,"\n  "),d.Sb(111,"ngx-slider",11),d.Zb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent1=n}),d.Ic(112,"\n  "),d.Rb(),d.Ic(113,"\n\n  "),d.Sb(114,"app-prism"),d.Ic(115,"\n"),d.Ic(116,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [disabled]="true"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),d.Ic(117,"\n  "),d.Rb(),d.Ic(118,"\n\n  "),d.Nb(119,"br"),d.Ic(120,"\n\n  "),d.Sb(121,"ngx-slider",12),d.Zb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent5=n}),d.Ic(122,"\n  "),d.Rb(),d.Ic(123,"\n\n  "),d.Sb(124,"p"),d.Ic(125),d.Rb(),d.Ic(126,"\n\n  "),d.Sb(127,"app-prism"),d.Ic(128,"\n"),d.Ic(129,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [disabled]="true"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),d.Ic(130,"\n  "),d.Rb(),d.Ic(131,"\n\n"),d.Rb(),d.Ic(132,"\n")),2&n&&(d.zb(3),d.jc("sectionTitle","Horizontal"),d.zb(2),d.jc("ngModel",e.sliderValue)("step",5)("filled",!0)("min",10)("max",200),d.zb(10),d.jc("ngModel",e.sliderValue)("step",5)("showTicks",!0)("tickStep",25)("filled",!0)("min",0)("max",100),d.zb(10),d.jc("ngModel",e.sliderValue)("step",5)("filled",!1)("min",0)("max",100),d.zb(10),d.jc("ngModel",e.sliderValue)("step",5)("showTicks",!0)("filled",!1)("min",0)("max",100),d.zb(9),d.jc("sectionTitle","Vertical"),d.zb(2),d.jc("ngModel",e.sliderValue)("step",5)("orientation","vertical")("filled",!0)("min",10)("max",200),d.zb(10),d.jc("ngModel",e.sliderValue)("step",5)("showTicks",!0)("tickStep",25)("orientation","vertical")("filled",!0)("min",0)("max",100),d.zb(10),d.jc("ngModel",e.sliderValue)("step",5)("filled",!1)("min",0)("orientation","vertical")("max",100),d.zb(10),d.jc("ngModel",e.sliderValue)("step",5)("showTicks",!0)("filled",!1)("orientation","vertical")("min",0)("max",100),d.zb(9),d.jc("sectionTitle","Range"),d.zb(2),d.jc("ngModel",e.sliderValues)("multiple",!0)("step",5)("filled",!0)("min",10)("max",200),d.zb(10),d.jc("ngModel",e.sliderValues)("multiple",!0)("orientation","vertical")("step",5)("filled",!0)("min",10)("max",200),d.zb(4),d.Kc("Slider Values: ",e.sliderValues,""),d.zb(8),d.jc("sectionTitle","Disabled"),d.zb(2),d.jc("ngModel",e.sliderValues)("multiple",!0)("disabled",!0)("step",5)("filled",!0)("min",10)("max",200),d.zb(10),d.jc("ngModel",e.sliderValues)("multiple",!0)("disabled",!0)("orientation","vertical")("step",5)("filled",!0)("min",10)("max",200),d.zb(4),d.Kc("Slider Values: ",e.sliderValues,""))},directives:[r.Db,r.Lb,t.i,t.l,a.a],encapsulation:2,changeDetection:0}),n})()}];let g=(()=>{class n{}return n.\u0275mod=d.Kb({type:n}),n.\u0275inj=d.Jb({factory:function(e){return new(e||n)},imports:[[s.g.forChild(o)],s.g]}),n})(),u=(()=>{class n{}return n.\u0275mod=d.Kb({type:n}),n.\u0275inj=d.Jb({factory:function(e){return new(e||n)},imports:[[i.c,t.d,c.a,r.Fb,r.Mb,g]]}),n})()}}]);