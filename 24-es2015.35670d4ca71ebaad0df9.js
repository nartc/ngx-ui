(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{ix1n:function(t,n,c){"use strict";c.r(n),c.d(n,"TipPageModule",function(){return x});var e=c("ofXK"),s=c("8lIJ"),i=c("alW4"),o=c("tyNb"),p=c("fXoL"),a=c("LMvA");function b(t,n){if(1&t){const t=p.Tb();p.Sb(0,"ngx-tip",7),p.Zb("close",function(){return p.vc(t),p.dc().showTip=!1}),p.Ic(1),p.Rb()}if(2&t){const t=p.dc();p.jc("isCloseable",!0),p.zb(1),p.Kc("\n        ",t.text,"\n      ")}}var r=function(t){return t.Success="success",t.Error="error",t.Notice="notice",t}({});const u=[{path:"",component:(()=>{class t{constructor(){this.TipStatus=r,this.text="Validate and submit the form to the left to view the method\u2019s response.",this.showTip=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p.Gb({type:t,selectors:[["app-tip-page"]],decls:38,vars:11,consts:[[1,"inputs-section"],[1,"style-header"],["sectionTitle","Styles",1,"shadow"],[1,"tip-example"],[3,"status"],["sectionTitle","Closeable",1,"shadow"],[3,"isCloseable","close",4,"ngIf"],[3,"isCloseable","close"]],template:function(t,n){1&t&&(p.Sb(0,"div",0),p.Ic(1," \n  "),p.Sb(2,"h3",1),p.Ic(3,"Tip"),p.Rb(),p.Ic(4,"\n\n  "),p.Sb(5,"ngx-section",2),p.Ic(6,"\n    "),p.Sb(7,"div",3),p.Ic(8,"\n      "),p.Sb(9,"ngx-tip",4),p.Ic(10),p.Rb(),p.Ic(11,"\n      "),p.Sb(12,"ngx-tip",4),p.Ic(13),p.Rb(),p.Ic(14,"\n      "),p.Sb(15,"ngx-tip",4),p.Ic(16),p.Rb(),p.Ic(17,"\n    "),p.Rb(),p.Ic(18,"\n    "),p.Sb(19,"app-prism"),p.Ic(20,"\n"),p.Ic(21),p.Ic(22,"\n    "),p.Rb(),p.Ic(23,"\n  "),p.Rb(),p.Ic(24,"\n\n  "),p.Sb(25,"ngx-section",5),p.Ic(26,"\n    "),p.Sb(27,"div",3),p.Ic(28,"\n      "),p.Gc(29,b,2,2,"ngx-tip",6),p.Ic(30,"\n    "),p.Rb(),p.Ic(31,"\n    "),p.Sb(32,"app-prism"),p.Ic(33,"\n"),p.Ic(34),p.Ic(35,"\n    "),p.Rb(),p.Ic(36,"\n  "),p.Rb(),p.Ic(37,"\n"),p.Rb()),2&t&&(p.zb(9),p.jc("status",n.TipStatus.Success),p.zb(1),p.Kc("\n        ",n.text,"\n      "),p.zb(2),p.jc("status",n.TipStatus.Error),p.zb(1),p.Kc("\n        ",n.text,"\n      "),p.zb(2),p.jc("status",n.TipStatus.Notice),p.zb(1),p.Kc("\n        ",n.text,"\n      "),p.zb(5),p.Mc('<ngx-tip [status]="TipStatus.Success">\n  ',n.text,'\n</ngx-tip>\n<ngx-tip [status]="TipStatus.Error">\n  ',n.text,'\n</ngx-tip>\n<ngx-tip [status]="TipStatus.Notice">\n  ',n.text,"\n</ngx-tip>"),p.zb(8),p.jc("ngIf",n.showTip),p.zb(5),p.Kc('<ngx-tip *ngIf="showTip" [isCloseable]="true" (close)="showTip = false">\n  ',n.text,"\n</ngx-tip>"))},directives:[s.Db,s.bc,a.a,e.m],styles:[".tip-example{margin-bottom:20px}.tip-example .ngx-tip .tip-container{margin-bottom:10px}"],encapsulation:2,changeDetection:0}),t})()}];let l=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(n){return new(n||t)},imports:[[o.g.forChild(u)],o.g]}),t})(),x=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(n){return new(n||t)},imports:[[e.c,i.a,s.Fb,s.cc,l]]}),t})()}}]);