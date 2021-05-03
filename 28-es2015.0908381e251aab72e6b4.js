(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{zVwD:function(n,t,e){"use strict";e.r(t),e.d(t,"AlertPageModule",function(){return p});var c=e("ofXK"),r=e("8lIJ"),o=e("alW4"),l=e("tyNb"),i=e("fXoL"),b=e("LMvA");const a=[{path:"",component:(()=>{class n{constructor(n){this.alertService=n,this.AlertStyles=r.b}onPromptClick(){const n=this.alertService.prompt({title:"Alert SOC",content:"What type of compromise?"});console.log("Prompt subject",n),n.subscribe({next:n=>console.log("Prompt next",n),error:n=>console.log("Prompt err",n),complete:()=>console.log("Complete")})}}return n.\u0275fac=function(t){return new(t||n)(i.Mb(r.a))},n.\u0275cmp=i.Gb({type:n,selectors:[["app-alert-page"]],decls:105,vars:3,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],["type","button",1,"btn",3,"click"],["label","Markup"],["label","TypeScript"],["language","js"]],template:function(n,t){1&n&&(i.Sb(0,"h3",0),i.Ic(1,"Alert/Confirm"),i.Rb(),i.Ic(2,"\n"),i.Sb(3,"ngx-section",1),i.Ic(4,"\n\n  "),i.Sb(5,"button",2),i.Zb("click",function(){return t.alertService.alert({title:"Alert SOC",content:"Intrusion Happened!!!"})}),i.Ic(6,"\n    Info\n  "),i.Rb(),i.Ic(7,"\n\n  "),i.Sb(8,"button",2),i.Zb("click",function(){return t.alertService.alert({title:"Alert SOC",style:t.AlertStyles.Danger})}),i.Ic(9,"\n    Danger\n  "),i.Rb(),i.Ic(10,"\n\n  "),i.Sb(11,"button",2),i.Zb("click",function(){return t.alertService.alert({title:"Alert SOC",style:t.AlertStyles.Warning,content:"Intrusion Happened!!!"})}),i.Ic(12,"\n    Warning\n  "),i.Rb(),i.Ic(13,"\n\n  "),i.Sb(14,"button",2),i.Zb("click",function(){return t.alertService.alert({title:"Rainbows!!!",cssClass:"rainbows"})}),i.Ic(15,"\n    Custom CSS\n  "),i.Rb(),i.Ic(16,"\n\n  "),i.Nb(17,"br"),i.Ic(18,"\n  "),i.Nb(19,"br"),i.Ic(20,"\n\n  "),i.Sb(21,"ngx-tabs"),i.Ic(22,"\n    "),i.Sb(23,"ngx-tab",3),i.Ic(24,"\n      "),i.Sb(25,"app-prism"),i.Ic(26,"\n"),i.Ic(27,'<button\n  type="button"\n  (click)="alertService.alert({ title: \'Alert SOC\', content: \'Intrusion Happened!!!\' })">\n  Info\n</button>\n\n<button\n  type="button"\n  (click)="alertService.alert({ title: \'Alert SOC\', style: AlertStyles.Danger })">\n  Danger\n</button>\n\n<button\n  type="button"\n  (click)="alertService.alert({ title: \'Alert SOC\', style: AlertStyles.Warning, content: \'Intrusion Happened!!!\' })">\n  Warning\n</button>\n\n<button type="button" class="btn"\n  (click)="alertService.alert({ title: \'Rainbows!!!\', cssClass: \'rainbows\' })">\n  Custom CSS\n</button>'),i.Ic(28,"\n      "),i.Rb(),i.Ic(29,"\n    "),i.Rb(),i.Ic(30,"\n    "),i.Sb(31,"ngx-tab",4),i.Ic(32,"\n      "),i.Sb(33,"app-prism",5),i.Ic(34,"\n"),i.Ic(35,"import { AlertService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  constructor(public alertService: AlertService) { }\n}"),i.Ic(36,"\n      "),i.Rb(),i.Ic(37,"\n    "),i.Rb(),i.Ic(38,"\n  "),i.Rb(),i.Ic(39,"\n\n"),i.Rb(),i.Ic(40,"\n\n"),i.Sb(41,"ngx-section",1),i.Ic(42,"\n\n  "),i.Sb(43,"button",2),i.Zb("click",function(){return t.alertService.confirm({title:"Alert SOC",content:"Intrusion Happened!!!"})}),i.Ic(44,"\n    Confirm\n  "),i.Rb(),i.Ic(45,"\n\n  "),i.Sb(46,"button",2),i.Zb("click",function(){return t.alertService.confirm({title:"Alert SOC",content:"Intrusion Happened!!!",longPress:!0})}),i.Ic(47,"\n    Confirm with Long Press\n  "),i.Rb(),i.Ic(48,"\n\n  "),i.Sb(49,"button",2),i.Zb("click",function(){return t.alertService.confirm({title:"Save your pending changes?",confirmButtonText:"Yes!",cancelButtonText:"Dismiss"})}),i.Ic(50,"\n    Custom actions text\n  "),i.Rb(),i.Ic(51,"\n\n  "),i.Nb(52,"br"),i.Ic(53,"\n  "),i.Nb(54,"br"),i.Ic(55,"\n\n  "),i.Sb(56,"ngx-tabs"),i.Ic(57,"\n    "),i.Sb(58,"ngx-tab",3),i.Ic(59,"\n      "),i.Sb(60,"app-prism"),i.Ic(61,"\n"),i.Ic(62,"<button\n  type=\"button\"\n  (click)=\"alertService.confirm({ title: 'Alert SOC', content: 'Intrusion Happened!!!' })\">\n  Confirm\n</button>\n\n<button\n  type=\"button\"\n  (click)=\"alertService.confirm({ title: 'Alert SOC', content: 'Intrusion Happened!!!',  longPress: true })\">\n  Confirm with Long Press\n</button>\n\n<button type=\"button\" class=\"btn\"\n  (click)=\"alertService.confirm({ title: 'Save your pending changes?', confirmButtonText: 'Yes!', cancelButtonText: 'Dismiss' })\">\n  Custom actions text\n</button>"),i.Ic(63,"\n      "),i.Rb(),i.Ic(64,"\n    "),i.Rb(),i.Ic(65,"\n    "),i.Sb(66,"ngx-tab",4),i.Ic(67,"\n      "),i.Sb(68,"app-prism",5),i.Ic(69,"\n"),i.Ic(70,"import { AlertService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  constructor(public alertService: AlertService) { }\n}"),i.Ic(71,"\n      "),i.Rb(),i.Ic(72,"\n    "),i.Rb(),i.Ic(73,"\n  "),i.Rb(),i.Ic(74,"\n\n"),i.Rb(),i.Ic(75,"\n\n"),i.Sb(76,"ngx-section",1),i.Ic(77,"\n\n  "),i.Sb(78,"button",2),i.Zb("click",function(){return t.onPromptClick()}),i.Ic(79,"\n    Prompt\n  "),i.Rb(),i.Ic(80,"\n\n  "),i.Nb(81,"br"),i.Ic(82,"\n  "),i.Nb(83,"br"),i.Ic(84,"\n\n  "),i.Sb(85,"ngx-tabs"),i.Ic(86,"\n    "),i.Sb(87,"ngx-tab",3),i.Ic(88,"\n      "),i.Sb(89,"app-prism"),i.Ic(90,"\n"),i.Ic(91,'<button\n  type="button"\n  (click)="onPromptClick()">\n  Prompt\n</button>'),i.Ic(92,"\n      "),i.Rb(),i.Ic(93,"\n    "),i.Rb(),i.Ic(94,"\n    "),i.Sb(95,"ngx-tab",4),i.Ic(96,"\n      "),i.Sb(97,"app-prism",5),i.Ic(98,"\n"),i.Ic(99,"import { AlertService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  constructor(public alertService: AlertService) { }\n\n  onPromptClick() {\n    const subject = this.alertService.prompt({\n      title: 'Alert SOC',\n      content: 'What type of compromise?'\n    });\n\n    console.log('Prompt subject', subject);\n\n    subject.subscribe({\n      next: (v) => console.log('Prompt next', v),\n      error: (err) => console.log('Prompt err', err),\n      complete: (v) => console.log('Complete', v)\n    });\n  }\n}"),i.Ic(100,"\n      "),i.Rb(),i.Ic(101,"\n    "),i.Rb(),i.Ic(102,"\n  "),i.Rb(),i.Ic(103,"\n"),i.Rb(),i.Ic(104,"\n")),2&n&&(i.zb(3),i.jc("sectionTitle","Alerts"),i.zb(38),i.jc("sectionTitle","Confirm"),i.zb(35),i.jc("sectionTitle","Prompt"))},directives:[r.Db,r.Xb,r.Wb,b.a],styles:[".ngx-alert-dialog.alert .ngx-dialog-content.rainbows .ngx-dialog-header,.ngx-alert-dialog.confirm .ngx-dialog-content.rainbows .ngx-dialog-header{background-image:linear-gradient(to top left,violet,indigo,#00f,green,#ff0,orange,red)}.ngx-alert-dialog.alert .ngx-dialog-content.rainbows .ngx-dialog-header h1,.ngx-alert-dialog.confirm .ngx-dialog-content.rainbows .ngx-dialog-header h1{color:#000}"],encapsulation:2,changeDetection:0}),n})()}];let s=(()=>{class n{}return n.\u0275mod=i.Kb({type:n}),n.\u0275inj=i.Jb({factory:function(t){return new(t||n)},imports:[[l.g.forChild(a)],l.g]}),n})(),p=(()=>{class n{}return n.\u0275mod=i.Kb({type:n}),n.\u0275inj=i.Jb({factory:function(t){return new(t||n)},imports:[[c.c,o.a,r.Fb,r.q,r.Yb,s]]}),n})()}}]);