!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6YZw":function(t,c,o){"use strict";o.r(c),o.d(c,"PlusMenuPageModule",function(){return h});var l,i,u,s=o("ofXK"),m=o("8lIJ"),a=o("alW4"),p=o("tyNb"),r=o("fXoL"),b=o("LMvA"),G=function(n,e){return[n,e]},g=function(n,e,t){return[n,e,t]},C=[{path:"",component:(l=function(){function t(){n(this,t),this.upload={title:"Upload a plugin",subtitle:"ctrl+alt+u",icon:"upload-outline-small"},this.uploadCustomColor={title:"Upload a plugin",subtitle:"ctrl+alt+u",icon:"upload-outline-small",color:"#CDD2DD"},this.create={title:"Create",subtitle:"ctrl+alt+n",icon:"add-circle-medium"},this.createCustomColor={title:"Create",subtitle:"ctrl+alt+n",icon:"add-circle-medium",color:"#01E1B9"},this.search={title:"Search",icon:"search"},this.searchCustomColor={title:"Search",subtitle:"ctrl+alt+f",icon:"search",color:"#E200B6"}}var c,o,l;return c=t,(o=[{key:"onClick",value:function(n){console.log(n)}}])&&e(c.prototype,o),l&&e(c,l),t}(),l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=r.Fb({type:l,selectors:[["app-plus-menu-page"]],decls:161,vars:54,consts:[[1,"style-header"],["sectionTitle","Plus Menu - Right - Two Items",1,"shadow"],[1,"container-right"],[1,"my-class",3,"items","clickItem"],["sectionTitle","Plus Menu - Right - Three Items",1,"shadow"],["menuColor","#CDD2DD","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Two Items",1,"shadow"],[1,"container-bottom"],["position","bottom","menuColor","#01E1B9","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Three Items",1,"shadow"],["position","bottom","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Top - Two Items",1,"shadow"],[1,"container-top"],["position","top","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Top - Three Items",1,"shadow"],["sectionTitle","Plus Menu - Right - Two Items Custom Color",1,"shadow"],["sectionTitle","Plus Menu - Right - Three Items Custom Color",1,"shadow"],["menuColor","#01E1B9","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Two Items Custom Color",1,"shadow"],["sectionTitle","Plus Menu - Bottom - Three Items Custom Colors",1,"shadow"],["sectionTitle","Plus Menu - Top - Two Items Custom Color",1,"shadow"],["sectionTitle","Plus Menu - Top - Three Items Custom Color",1,"shadow",2,"margin-bottom","300px"]],template:function(n,e){1&n&&(r.Rb(0,"h3",0),r.Gc(1,"Plus Menu"),r.Qb(),r.Gc(2,"\n"),r.Rb(3,"ngx-section",1),r.Gc(4,"\n  "),r.Rb(5,"div",2),r.Gc(6,"\n    "),r.Rb(7,"ngx-plus-menu",3),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(8,"\n  "),r.Qb(),r.Gc(9,"\n  "),r.Rb(10,"app-prism"),r.Gc(11,"\n    "),r.Gc(12,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(13,"\n  "),r.Qb(),r.Gc(14,"\n"),r.Qb(),r.Gc(15,"\n\n"),r.Rb(16,"ngx-section",4),r.Gc(17,"\n  "),r.Rb(18,"div",2),r.Gc(19,"\n    "),r.Rb(20,"ngx-plus-menu",5),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(21,"\n  "),r.Qb(),r.Gc(22,"\n  "),r.Rb(23,"app-prism"),r.Gc(24,"\n    "),r.Gc(25,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      menuColor="#CDD2DD"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(26,"\n  "),r.Qb(),r.Gc(27,"\n"),r.Qb(),r.Gc(28,"\n\n"),r.Rb(29,"ngx-section",6),r.Gc(30,"\n  "),r.Rb(31,"div",7),r.Gc(32,"\n    "),r.Rb(33,"ngx-plus-menu",8),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(34,"\n  "),r.Qb(),r.Gc(35,"\n  "),r.Rb(36,"app-prism"),r.Gc(37,"\n    "),r.Gc(38,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(39,"\n  "),r.Qb(),r.Gc(40,"\n"),r.Qb(),r.Gc(41,"\n\n"),r.Rb(42,"ngx-section",9),r.Gc(43,"\n  "),r.Rb(44,"div",7),r.Gc(45,"\n    "),r.Rb(46,"ngx-plus-menu",10),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(47,"\n  "),r.Qb(),r.Gc(48,"\n  "),r.Rb(49,"app-prism"),r.Gc(50,"\n    "),r.Gc(51,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(52,"\n  "),r.Qb(),r.Gc(53,"\n"),r.Qb(),r.Gc(54,"\n\n"),r.Rb(55,"ngx-section",11),r.Gc(56,"\n  "),r.Rb(57,"div",12),r.Gc(58,"\n    "),r.Rb(59,"ngx-plus-menu",13),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(60,"\n  "),r.Qb(),r.Gc(61,"\n  "),r.Rb(62,"app-prism"),r.Gc(63,"\n    "),r.Gc(64,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(65,"\n  "),r.Qb(),r.Gc(66,"\n"),r.Qb(),r.Gc(67,"\n\n"),r.Rb(68,"ngx-section",14),r.Gc(69,"\n  "),r.Rb(70,"div",12),r.Gc(71,"\n    "),r.Rb(72,"ngx-plus-menu",13),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(73,"\n  "),r.Qb(),r.Gc(74,"\n  "),r.Rb(75,"app-prism"),r.Gc(76,"\n    "),r.Gc(77,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(78,"\n  "),r.Qb(),r.Gc(79,"\n"),r.Qb(),r.Gc(80,"\n\n"),r.Rb(81,"h3"),r.Gc(82," Menu Items with Custom Colors "),r.Qb(),r.Gc(83,"\n\n"),r.Rb(84,"ngx-section",15),r.Gc(85,"\n  "),r.Rb(86,"div",2),r.Gc(87,"\n    "),r.Rb(88,"ngx-plus-menu",3),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(89,"\n  "),r.Qb(),r.Gc(90,"\n  "),r.Rb(91,"app-prism"),r.Gc(92,"\n    "),r.Gc(93,'\n    <ngx-plus-menu\n      [items]="[upload, createCustomColor]"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(94,"\n  "),r.Qb(),r.Gc(95,"\n"),r.Qb(),r.Gc(96,"\n\n"),r.Rb(97,"ngx-section",16),r.Gc(98,"\n  "),r.Rb(99,"div",2),r.Gc(100,"\n    "),r.Rb(101,"ngx-plus-menu",17),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(102,"\n  "),r.Qb(),r.Gc(103,"\n  "),r.Rb(104,"app-prism"),r.Gc(105,"\n    "),r.Gc(106,'\n    <ngx-plus-menu\n      [items]="[upload, create, searchCustomColor]"\n      menuColor="#01E1B9"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(107,"\n  "),r.Qb(),r.Gc(108,"\n"),r.Qb(),r.Gc(109,"\n\n"),r.Rb(110,"ngx-section",18),r.Gc(111,"\n  "),r.Rb(112,"div",7),r.Gc(113,"\n    "),r.Rb(114,"ngx-plus-menu",8),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(115,"\n  "),r.Qb(),r.Gc(116,"\n  "),r.Rb(117,"app-prism"),r.Gc(118,"\n    "),r.Gc(119,'\n    <ngx-plus-menu\n      [items]="[uploadCustomColor, create]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(120,"\n  "),r.Qb(),r.Gc(121,"\n"),r.Qb(),r.Gc(122,"\n\n"),r.Rb(123,"ngx-section",19),r.Gc(124,"\n  "),r.Rb(125,"div",7),r.Gc(126,"\n    "),r.Rb(127,"ngx-plus-menu",10),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(128,"\n  "),r.Qb(),r.Gc(129,"\n  "),r.Rb(130,"app-prism"),r.Gc(131,"\n    "),r.Gc(132,'\n    <ngx-plus-menu\n      [items]="[uploadCustomColor, create, searchCustomColor]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(133,"\n  "),r.Qb(),r.Gc(134,"\n"),r.Qb(),r.Gc(135,"\n\n"),r.Rb(136,"ngx-section",20),r.Gc(137,"\n  "),r.Rb(138,"div",12),r.Gc(139,"\n    "),r.Rb(140,"ngx-plus-menu",13),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(141,"\n  "),r.Qb(),r.Gc(142,"\n  "),r.Rb(143,"app-prism"),r.Gc(144,"\n    "),r.Gc(145,'\n    <ngx-plus-menu\n      [items]="[upload, createCustomColor]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(146,"\n  "),r.Qb(),r.Gc(147,"\n"),r.Qb(),r.Gc(148,"\n\n"),r.Rb(149,"ngx-section",21),r.Gc(150,"\n  "),r.Rb(151,"div",12),r.Gc(152,"\n    "),r.Rb(153,"ngx-plus-menu",13),r.Yb("clickItem",function(n){return e.onClick(n)}),r.Qb(),r.Gc(154,"\n  "),r.Qb(),r.Gc(155,"\n  "),r.Rb(156,"app-prism"),r.Gc(157,"\n    "),r.Gc(158,'\n    <ngx-plus-menu\n      [items]="[uploadCustomColor, createCustomColor, searchCustomColor]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Gc(159,"\n  "),r.Qb(),r.Gc(160,"\n"),r.Qb()),2&n&&(r.yb(7),r.ic("items",r.mc(12,G,e.upload,e.create)),r.yb(13),r.ic("items",r.nc(15,g,e.upload,e.create,e.search)),r.yb(13),r.ic("items",r.mc(19,G,e.upload,e.create)),r.yb(13),r.ic("items",r.nc(22,g,e.upload,e.create,e.search)),r.yb(13),r.ic("items",r.mc(26,G,e.upload,e.create)),r.yb(13),r.ic("items",r.nc(29,g,e.upload,e.create,e.search)),r.yb(16),r.ic("items",r.mc(33,G,e.upload,e.createCustomColor)),r.yb(13),r.ic("items",r.nc(36,g,e.upload,e.create,e.searchCustomColor)),r.yb(13),r.ic("items",r.mc(40,G,e.uploadCustomColor,e.create)),r.yb(13),r.ic("items",r.nc(43,g,e.uploadCustomColor,e.create,e.searchCustomColor)),r.yb(13),r.ic("items",r.mc(47,G,e.upload,e.createCustomColor)),r.yb(13),r.ic("items",r.nc(50,g,e.uploadCustomColor,e.createCustomColor,e.searchCustomColor)))},directives:[m.wb,m.lb,b.a],styles:["app-plus-menu-page .container-bottom,app-plus-menu-page .container-right,app-plus-menu-page .container-top{position:relative}app-plus-menu-page .container-bottom ngx-plus-menu,app-plus-menu-page .container-right ngx-plus-menu,app-plus-menu-page .container-top ngx-plus-menu{position:absolute}app-plus-menu-page app-prism{margin-top:30px;display:block}app-plus-menu-page .container-right ngx-plus-menu{top:-20px;right:0}app-plus-menu-page .container-bottom{display:flex;justify-content:center}app-plus-menu-page .container-bottom ngx-plus-menu{bottom:-10px}app-plus-menu-page .container-top{display:flex;justify-content:center}app-plus-menu-page .container-top ngx-plus-menu{top:-20px}"],encapsulation:2,changeDetection:0}),l)}],d=((u=function e(){n(this,e)}).\u0275mod=r.Jb({type:u}),u.\u0275inj=r.Ib({factory:function(n){return new(n||u)},imports:[[p.g.forChild(C)],p.g]}),u),h=((i=function e(){n(this,e)}).\u0275mod=r.Jb({type:i}),i.\u0275inj=r.Ib({factory:function(n){return new(n||i)},imports:[[s.c,a.a,m.yb,m.mb,d]]}),i)}}])}();