!function(){function n(n,c){if(!(n instanceof c))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{R76X:function(c,b,e){"use strict";e.r(b),e.d(b,"LayoutPageModule",function(){return s});var G,i,o,d=e("ofXK"),l=e("3Pt+"),t=e("8lIJ"),x=e("tyNb"),v=e("fXoL"),g=[{path:"",component:(G=function c(){n(this,c),this.containerClass="ngx-flex--wrap",this.toggleChk=!1},G.\u0275fac=function(n){return new(n||G)},G.\u0275cmp=v.Fb({type:G,selectors:[["app-layout-page"]],decls:814,vars:3,consts:[[1,"style-header"],["name","toggle1","label","Fixed",3,"ngModel","ngModelChange"],[1,"ngx-flex--row"],[1,"box"],[1,"ngx-flex--col-4"],[1,"ngx-flex--col-3"],[1,"ngx-flex--col-1"],[1,"ngx-flex--col-2"],[1,"ngx-flex--col-6"],[1,"ngx-flex--col-5"],[1,"ngx-flex--col-7"],[1,"ngx-flex--col-8"],[1,"ngx-flex--col-12"],[1,"box","medium"],[1,"ngx-flex--col-auto"],[1,"ngx-flex--col-12","ngx-flex--col-sm-3","ngx-flex--col-md-2","ngx-flex--col-lg-1"],[1,"ngx-flex--col-6","ngx-flex--col-sm-6","ngx-flex--col-md-8","ngx-flex--col-lg-10"],[1,"ngx-flex--col-6","ngx-flex--col-sm-3","ngx-flex--col-md-2","ngx-flex--col-lg-1"],[1,"ngx-flex--col-12","ngx-flex--col-sm-9","ngx-flex--col-md-10","ngx-flex--col-lg-11"],[1,"ngx-flex--col-10","ngx-flex--col-sm-6","ngx-flex--col-md-8","ngx-flex--col-lg-10"],[1,"ngx-flex--col-2","ngx-flex--col-sm-6","ngx-flex--col-md-4","ngx-flex--col-lg-2"],[1,"ngx-flex--col-11"],[1,"ngx-flex--col-10"],[1,"ngx-flex--col-9"],[1,"ngx-flex--col-1","ngx-flex--col-offset-11"],[1,"ngx-flex--col-2","ngx-flex--col-offset-10"],[1,"ngx-flex--col-3","ngx-flex--col-offset-9"],[1,"ngx-flex--col-4","ngx-flex--col-offset-8"],[1,"ngx-flex--col-5","ngx-flex--col-offset-7"],[1,"ngx-flex--col-6","ngx-flex--col-offset-6"],[1,"ngx-flex--col-7","ngx-flex--col-offset-5"],[1,"ngx-flex--col-8","ngx-flex--col-offset-4"],[1,"ngx-flex--col-9","ngx-flex--col-offset-3"],[1,"ngx-flex--col-10","ngx-flex--col-offset-2"],[1,"ngx-flex--col-11","ngx-flex--col-offset-1"],[1,"ngx-flex--row","start"],[1,"ngx-flex--row","center"],[1,"ngx-flex--row","end"],[1,"ngx-flex--row","baseline"],[1,"box",2,"min-height","0","line-height","12px"],[1,"ngx-flex--row","top"],[1,"box","large"],[1,"ngx-flex--row","middle"],[1,"ngx-flex--row","bottom"],[1,"ngx-flex--row","around"],[1,"ngx-flex--row","between"],[1,"ngx-flex--row","gutless"],[1,"gutless"],[1,"first"],[1,"last"],[1,"ngx-flex--row","reverse"],[1,"ngx-flex--row","app-columns-24-wide-gutter"],[1,"ngx-flex--col","ngx-flex--col-1"],[1,"ngx-flex--col","ngx-flex--col-2"],[1,"ngx-flex--col","ngx-flex--col-3"],[1,"ngx-flex--col","ngx-flex--col-6"],[1,"ngx-flex--col","ngx-flex--col-12"],[1,"ngx-flex--row","app-columns-10"],[1,"ngx-flex--col-10","ngx-flex--col-md-2"]],template:function(n,c){if(1&n){v.Rb(0,"h3",0),v.Gc(1,"Layout: Flex"),v.Qb(),v.Gc(2,"\n\nngx-ui's layout system is a set of CSS classes implemeting flex-box with resonable defaults. This system uses three main\nclasses: "),v.Rb(3,"code"),v.Gc(4,".ngx-flex--wrap"),v.Qb(),v.Gc(5,", "),v.Rb(6,"code"),v.Gc(7,".ngx-flex--col"),v.Qb(),v.Gc(8,", and "),v.Rb(9,"code"),v.Gc(10,".ngx-flex--row"),v.Qb(),v.Gc(11," as well as modifiers\nas demonstrated below. Of these three classes only "),v.Rb(12,"code"),v.Gc(13,".ngx-flex--row"),v.Qb(),v.Gc(14," is needed for simple flex-box layouts.\nContainers are optional wrappers that contain "),v.Rb(15,"code"),v.Gc(16,"ngx-flex--row"),v.Qb(),v.Gc(17,"s. Use the toggle below to see each container\nlayout.\n\n"),v.Rb(18,"ul"),v.Gc(19,"\n  "),v.Rb(20,"li"),v.Rb(21,"code"),v.Gc(22,".ngx-flex--wrap"),v.Qb(),v.Gc(23,", "),v.Rb(24,"code"),v.Gc(25,".ngx-flex--wrap-fluid"),v.Qb(),v.Gc(26," is width: 100% at all breakpoints"),v.Qb(),v.Gc(27,"\n  "),v.Rb(28,"li"),v.Rb(29,"code"),v.Gc(30,".ngx-flex--wrap-fixed"),v.Qb(),v.Gc(31," sets a max-width at each responsive breakpoint"),v.Qb(),v.Gc(32,"\n"),v.Qb(),v.Gc(33,"\n\n"),v.Rb(34,"ngx-toggle",1),v.Yb("ngModelChange",function(n){return c.toggleChk=n}),v.Gc(35," "),v.Qb(),v.Gc(36,"\n\n"),v.Rb(37,"div"),v.Gc(38,"\n  "),v.Rb(39,"section"),v.Gc(40,"\n    "),v.Rb(41,"h2"),v.Gc(42,"Simple"),v.Qb(),v.Gc(43,"\n\n    "),v.Rb(44,"p"),v.Gc(45,"\n      By default children of a "),v.Rb(46,"code"),v.Gc(47,"ngx-flex--row"),v.Qb(),v.Gc(48," are autosized. Add any number of child elements to a\n      "),v.Rb(49,"code"),v.Gc(50,"ngx-flex--row"),v.Qb(),v.Gc(51,". The "),v.Rb(52,"code"),v.Gc(53,"ngx-flex--col"),v.Qb(),v.Gc(54," class is optional for auto sized columns.\n    "),v.Qb(),v.Gc(55,"\n\n    "),v.Rb(56,"div",2),v.Gc(57,"\n      "),v.Rb(58,"div"),v.Gc(59,"\n        "),v.Mb(60,"div",3),v.Gc(61,"\n      "),v.Qb(),v.Gc(62,"\n      "),v.Rb(63,"div"),v.Gc(64,"\n        "),v.Mb(65,"div",3),v.Gc(66,"\n      "),v.Qb(),v.Gc(67,"\n    "),v.Qb(),v.Gc(68,"\n    "),v.Rb(69,"div",2),v.Gc(70,"\n      "),v.Rb(71,"div"),v.Gc(72,"\n        "),v.Mb(73,"div",3),v.Gc(74,"\n      "),v.Qb(),v.Gc(75,"\n      "),v.Rb(76,"div"),v.Gc(77,"\n        "),v.Mb(78,"div",3),v.Gc(79,"\n      "),v.Qb(),v.Gc(80,"\n      "),v.Rb(81,"div"),v.Gc(82,"\n        "),v.Mb(83,"div",3),v.Gc(84,"\n      "),v.Qb(),v.Gc(85,"\n    "),v.Qb(),v.Gc(86,"\n    "),v.Rb(87,"div",2),v.Gc(88,"\n      "),v.Rb(89,"div"),v.Gc(90,"\n        "),v.Mb(91,"div",3),v.Gc(92,"\n      "),v.Qb(),v.Gc(93,"\n      "),v.Rb(94,"div"),v.Gc(95,"\n        "),v.Mb(96,"div",3),v.Gc(97,"\n      "),v.Qb(),v.Gc(98,"\n      "),v.Rb(99,"div"),v.Gc(100,"\n        "),v.Mb(101,"div",3),v.Gc(102,"\n      "),v.Qb(),v.Gc(103,"\n      "),v.Rb(104,"div"),v.Gc(105,"\n        "),v.Mb(106,"div",3),v.Gc(107,"\n      "),v.Qb(),v.Gc(108,"\n    "),v.Qb(),v.Gc(109,"\n  "),v.Qb(),v.Gc(110,"\n\n  "),v.Rb(111,"section"),v.Gc(112,"\n    "),v.Rb(113,"h2"),v.Gc(114,"Sizes"),v.Qb(),v.Gc(115,"\n\n    "),v.Rb(116,"p"),v.Gc(117,"\n      Column class numeric modifiers "),v.Rb(118,"code"),v.Gc(119,"--col-*"),v.Qb(),v.Gc(120," (e.g. "),v.Rb(121,"code"),v.Gc(122,"col-4"),v.Qb(),v.Gc(123,") indicate the number of columns you\u2019d\n      like to use out of the possible 12 per row (by default). If you want three equal-width columns across, you can use\n      "),v.Rb(124,"code"),v.Gc(125,".ngx-flex--col-4"),v.Qb(),v.Gc(126,"; "),v.Rb(127,"code"),v.Gc(128,".ngx-flex--col-3"),v.Qb(),v.Gc(129," gives four columns.\n    "),v.Qb(),v.Gc(130,"\n\n    "),v.Rb(131,"p"),v.Gc(132,"Default grid of 12 columns"),v.Qb(),v.Gc(133,"\n    "),v.Rb(134,"div",2),v.Gc(135,"\n      "),v.Rb(136,"div",4),v.Gc(137,"\n        "),v.Mb(138,"div",3),v.Gc(139,"\n      "),v.Qb(),v.Gc(140,"\n      "),v.Rb(141,"div",4),v.Gc(142,"\n        "),v.Mb(143,"div",3),v.Gc(144,"\n      "),v.Qb(),v.Gc(145,"\n      "),v.Rb(146,"div",4),v.Gc(147,"\n        "),v.Mb(148,"div",3),v.Gc(149,"\n      "),v.Qb(),v.Gc(150,"\n      "),v.Rb(151,"div",5),v.Gc(152,"\n        "),v.Mb(153,"div",3),v.Gc(154,"\n      "),v.Qb(),v.Gc(155,"\n      "),v.Rb(156,"div",5),v.Gc(157,"\n        "),v.Mb(158,"div",3),v.Gc(159,"\n      "),v.Qb(),v.Gc(160,"\n      "),v.Rb(161,"div",5),v.Gc(162,"\n        "),v.Mb(163,"div",3),v.Gc(164,"\n      "),v.Qb(),v.Gc(165,"\n      "),v.Rb(166,"div",5),v.Gc(167,"\n        "),v.Mb(168,"div",3),v.Gc(169,"\n      "),v.Qb(),v.Gc(170,"\n      "),v.Rb(171,"div",6),v.Gc(172,"\n        "),v.Mb(173,"div",3),v.Gc(174,"\n      "),v.Qb(),v.Gc(175,"\n      "),v.Rb(176,"div",7),v.Gc(177,"\n        "),v.Mb(178,"div",3),v.Gc(179,"\n      "),v.Qb(),v.Gc(180,"\n      "),v.Rb(181,"div",5),v.Gc(182,"\n        "),v.Mb(183,"div",3),v.Gc(184,"\n      "),v.Qb(),v.Gc(185,"\n      "),v.Rb(186,"div",8),v.Gc(187,"\n        "),v.Mb(188,"div",3),v.Gc(189,"\n      "),v.Qb(),v.Gc(190,"\n      "),v.Rb(191,"div",9),v.Gc(192,"\n        "),v.Mb(193,"div",3),v.Gc(194,"\n      "),v.Qb(),v.Gc(195,"\n      "),v.Rb(196,"div",10),v.Gc(197,"\n        "),v.Mb(198,"div",3),v.Gc(199,"\n      "),v.Qb(),v.Gc(200,"\n      "),v.Rb(201,"div",11),v.Gc(202,"\n        "),v.Mb(203,"div",3),v.Gc(204,"\n      "),v.Qb(),v.Gc(205,"\n      "),v.Rb(206,"div",4),v.Gc(207,"\n        "),v.Mb(208,"div",3),v.Gc(209,"\n      "),v.Qb(),v.Gc(210,"\n      "),v.Rb(211,"div",12),v.Gc(212,"\n        "),v.Mb(213,"div",3),v.Gc(214,"\n      "),v.Qb(),v.Gc(215,"\n    "),v.Qb(),v.Gc(216,"\n\n    "),v.Rb(217,"p"),v.Gc(218,"You don't need to size each column."),v.Qb(),v.Gc(219,"\n\n    "),v.Rb(220,"div",2),v.Gc(221,"\n      "),v.Rb(222,"div"),v.Gc(223,"\n        "),v.Mb(224,"div",3),v.Gc(225,"\n      "),v.Qb(),v.Gc(226,"\n      "),v.Rb(227,"div",8),v.Gc(228,"\n        "),v.Mb(229,"div",3),v.Gc(230,"\n      "),v.Qb(),v.Gc(231,"\n      "),v.Rb(232,"div"),v.Gc(233,"\n        "),v.Mb(234,"div",3),v.Gc(235,"\n      "),v.Qb(),v.Gc(236,"\n    "),v.Qb(),v.Gc(237,"\n\n    "),v.Rb(238,"p"),v.Gc(239,"Use "),v.Rb(240,"code"),v.Gc(241,"--col-auto"),v.Qb(),v.Gc(242," to size a column to its content."),v.Qb(),v.Gc(243,"\n\n    "),v.Rb(244,"div",2),v.Gc(245,"\n      "),v.Rb(246,"div"),v.Gc(247,"\n        "),v.Mb(248,"div",13),v.Gc(249,"\n      "),v.Qb(),v.Gc(250,"\n      "),v.Rb(251,"div",14),v.Gc(252,"\n        "),v.Rb(253,"div",13),v.Gc(254,"Some content"),v.Qb(),v.Gc(255,"\n      "),v.Qb(),v.Gc(256,"\n      "),v.Rb(257,"div"),v.Gc(258,"\n        "),v.Mb(259,"div",13),v.Gc(260,"\n      "),v.Qb(),v.Gc(261,"\n    "),v.Qb(),v.Gc(262,"\n  "),v.Qb(),v.Gc(263,"\n\n  "),v.Rb(264,"section"),v.Gc(265,"\n    "),v.Rb(266,"h2"),v.Gc(267,"Responsive"),v.Qb(),v.Gc(268,"\n\n    "),v.Rb(269,"p"),v.Gc(270,"\n      To make the grid responsive, there are five grid breakpoint modfiers "),v.Rb(271,"code"),v.Gc(272,"--col-*-*"),v.Qb(),v.Gc(273," (e.g.\n      "),v.Rb(274,"code"),v.Gc(275,"--col-sm-4"),v.Qb(),v.Gc(276,"), one for each responsive breakpoint: "),v.Rb(277,"code"),v.Gc(278,"xs"),v.Qb(),v.Gc(279,", "),v.Rb(280,"code"),v.Gc(281,"sm"),v.Qb(),v.Gc(282,", "),v.Rb(283,"code"),v.Gc(284,"md"),v.Qb(),v.Gc(285,",\n      "),v.Rb(286,"code"),v.Gc(287,"lg"),v.Qb(),v.Gc(288,", and "),v.Rb(289,"code"),v.Gc(290,"xl"),v.Qb(),v.Gc(291,". Note that "),v.Rb(292,"code"),v.Gc(293,"xs"),v.Qb(),v.Gc(294," is the default and optional.\n    "),v.Qb(),v.Gc(295,"\n\n    "),v.Rb(296,"div",2),v.Gc(297,"\n      "),v.Rb(298,"div",15),v.Gc(299,"\n        "),v.Mb(300,"div",3),v.Gc(301,"\n      "),v.Qb(),v.Gc(302,"\n      "),v.Rb(303,"div",16),v.Gc(304,"\n        "),v.Mb(305,"div",3),v.Gc(306,"\n      "),v.Qb(),v.Gc(307,"\n      "),v.Rb(308,"div",17),v.Gc(309,"\n        "),v.Mb(310,"div",3),v.Gc(311,"\n      "),v.Qb(),v.Gc(312,"\n      "),v.Rb(313,"div",15),v.Gc(314,"\n        "),v.Mb(315,"div",3),v.Gc(316,"\n      "),v.Qb(),v.Gc(317,"\n      "),v.Rb(318,"div",18),v.Gc(319,"\n        "),v.Mb(320,"div",3),v.Gc(321,"\n      "),v.Qb(),v.Gc(322,"\n      "),v.Rb(323,"div",19),v.Gc(324,"\n        "),v.Mb(325,"div",3),v.Gc(326,"\n      "),v.Qb(),v.Gc(327,"\n      "),v.Rb(328,"div",20),v.Gc(329,"\n        "),v.Mb(330,"div",3),v.Gc(331,"\n      "),v.Qb(),v.Gc(332,"\n    "),v.Qb(),v.Gc(333,"\n  "),v.Qb(),v.Gc(334,"\n\n  "),v.Rb(335,"section"),v.Gc(336,"\n    "),v.Rb(337,"h2"),v.Gc(338,"Fluid"),v.Qb(),v.Gc(339,"\n\n    "),v.Rb(340,"p"),v.Gc(341,"Widths allow fluid resizing of columns and rows."),v.Qb(),v.Gc(342,"\n\n    "),v.Rb(343,"div",2),v.Gc(344,"\n      "),v.Rb(345,"div",12),v.Gc(346,"\n        "),v.Mb(347,"div",3),v.Gc(348,"\n      "),v.Qb(),v.Gc(349,"\n      "),v.Rb(350,"div",6),v.Gc(351,"\n        "),v.Mb(352,"div",3),v.Gc(353,"\n      "),v.Qb(),v.Gc(354,"\n      "),v.Rb(355,"div",21),v.Gc(356,"\n        "),v.Mb(357,"div",3),v.Gc(358,"\n      "),v.Qb(),v.Gc(359,"\n      "),v.Rb(360,"div",7),v.Gc(361,"\n        "),v.Mb(362,"div",3),v.Gc(363,"\n      "),v.Qb(),v.Gc(364,"\n      "),v.Rb(365,"div",22),v.Gc(366,"\n        "),v.Mb(367,"div",3),v.Gc(368,"\n      "),v.Qb(),v.Gc(369,"\n      "),v.Rb(370,"div",5),v.Gc(371,"\n        "),v.Mb(372,"div",3),v.Gc(373,"\n      "),v.Qb(),v.Gc(374,"\n      "),v.Rb(375,"div",23),v.Gc(376,"\n        "),v.Mb(377,"div",3),v.Gc(378,"\n      "),v.Qb(),v.Gc(379,"\n      "),v.Rb(380,"div",4),v.Gc(381,"\n        "),v.Mb(382,"div",3),v.Gc(383,"\n      "),v.Qb(),v.Gc(384,"\n      "),v.Rb(385,"div",11),v.Gc(386,"\n        "),v.Mb(387,"div",3),v.Gc(388,"\n      "),v.Qb(),v.Gc(389,"\n      "),v.Rb(390,"div",9),v.Gc(391,"\n        "),v.Mb(392,"div",3),v.Gc(393,"\n      "),v.Qb(),v.Gc(394,"\n      "),v.Rb(395,"div",10),v.Gc(396,"\n        "),v.Mb(397,"div",3),v.Gc(398,"\n      "),v.Qb(),v.Gc(399,"\n      "),v.Rb(400,"div",8),v.Gc(401,"\n        "),v.Mb(402,"div",3),v.Gc(403,"\n      "),v.Qb(),v.Gc(404,"\n      "),v.Rb(405,"div",8),v.Gc(406,"\n        "),v.Mb(407,"div",3),v.Gc(408,"\n      "),v.Qb(),v.Gc(409,"\n    "),v.Qb(),v.Gc(410,"\n  "),v.Qb(),v.Gc(411,"\n\n  "),v.Rb(412,"section"),v.Gc(413,"\n    "),v.Rb(414,"h2"),v.Gc(415,"Offsets"),v.Qb(),v.Gc(416,"\n\n    "),v.Rb(417,"p"),v.Gc(418,"Offset a column"),v.Qb(),v.Gc(419,"\n\n    "),v.Rb(420,"div",2),v.Gc(421,"\n      "),v.Rb(422,"div",24),v.Gc(423,"\n        "),v.Mb(424,"div",3),v.Gc(425,"\n      "),v.Qb(),v.Gc(426,"\n\n      "),v.Rb(427,"div",25),v.Gc(428,"\n        "),v.Mb(429,"div",3),v.Gc(430,"\n      "),v.Qb(),v.Gc(431,"\n\n      "),v.Rb(432,"div",26),v.Gc(433,"\n        "),v.Mb(434,"div",3),v.Gc(435,"\n      "),v.Qb(),v.Gc(436,"\n\n      "),v.Rb(437,"div",27),v.Gc(438,"\n        "),v.Mb(439,"div",3),v.Gc(440,"\n      "),v.Qb(),v.Gc(441,"\n\n      "),v.Rb(442,"div",28),v.Gc(443,"\n        "),v.Mb(444,"div",3),v.Gc(445,"\n      "),v.Qb(),v.Gc(446,"\n\n      "),v.Rb(447,"div",29),v.Gc(448,"\n        "),v.Mb(449,"div",3),v.Gc(450,"\n      "),v.Qb(),v.Gc(451,"\n\n      "),v.Rb(452,"div",30),v.Gc(453,"\n        "),v.Mb(454,"div",3),v.Gc(455,"\n      "),v.Qb(),v.Gc(456,"\n\n      "),v.Rb(457,"div",31),v.Gc(458,"\n        "),v.Mb(459,"div",3),v.Gc(460,"\n      "),v.Qb(),v.Gc(461,"\n\n      "),v.Rb(462,"div",32),v.Gc(463,"\n        "),v.Mb(464,"div",3),v.Gc(465,"\n      "),v.Qb(),v.Gc(466,"\n\n      "),v.Rb(467,"div",33),v.Gc(468,"\n        "),v.Mb(469,"div",3),v.Gc(470,"\n      "),v.Qb(),v.Gc(471,"\n\n      "),v.Rb(472,"div",34),v.Gc(473,"\n        "),v.Mb(474,"div",3),v.Gc(475,"\n      "),v.Qb(),v.Gc(476,"\n    "),v.Qb(),v.Gc(477,"\n  "),v.Qb(),v.Gc(478,"\n\n  "),v.Rb(479,"section"),v.Gc(480,"\n    "),v.Rb(481,"h2"),v.Gc(482,"Alignment"),v.Qb(),v.Gc(483,"\n\n    "),v.Rb(484,"p"),v.Gc(485,"Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column"),v.Qb(),v.Gc(486,"\n\n    "),v.Rb(487,"div",35),v.Gc(488,"\n      "),v.Rb(489,"div",8),v.Gc(490,"\n        "),v.Mb(491,"div",3),v.Gc(492,"\n      "),v.Qb(),v.Gc(493,"\n    "),v.Qb(),v.Gc(494,"\n\n    "),v.Rb(495,"div",36),v.Gc(496,"\n      "),v.Rb(497,"div",8),v.Gc(498,"\n        "),v.Mb(499,"div",3),v.Gc(500,"\n      "),v.Qb(),v.Gc(501,"\n    "),v.Qb(),v.Gc(502,"\n\n    "),v.Rb(503,"div",37),v.Gc(504,"\n      "),v.Rb(505,"div",8),v.Gc(506,"\n        "),v.Mb(507,"div",3),v.Gc(508,"\n      "),v.Qb(),v.Gc(509,"\n    "),v.Qb(),v.Gc(510,"\n\n    "),v.Rb(511,"div",38),v.Gc(512,"\n      "),v.Rb(513,"div"),v.Gc(514,"\n        "),v.Rb(515,"div",3),v.Rb(516,"h1"),v.Gc(517,"Content"),v.Qb(),v.Qb(),v.Gc(518,"\n      "),v.Qb(),v.Gc(519,"\n      "),v.Rb(520,"div"),v.Gc(521,"\n        "),v.Rb(522,"div",3),v.Gc(523,"Content"),v.Qb(),v.Gc(524,"\n      "),v.Qb(),v.Gc(525,"\n      "),v.Rb(526,"div"),v.Gc(527,"\n        "),v.Rb(528,"div",39),v.Rb(529,"small"),v.Gc(530,"Content"),v.Qb(),v.Qb(),v.Gc(531,"\n      "),v.Qb(),v.Gc(532,"\n    "),v.Qb(),v.Gc(533,"\n\n    "),v.Rb(534,"div",40),v.Gc(535,"\n      "),v.Rb(536,"div"),v.Gc(537,"\n        "),v.Mb(538,"div",41),v.Gc(539,"\n      "),v.Qb(),v.Gc(540,"\n      "),v.Rb(541,"div"),v.Gc(542,"\n        "),v.Mb(543,"div",13),v.Gc(544,"\n      "),v.Qb(),v.Gc(545,"\n      "),v.Rb(546,"div"),v.Gc(547,"\n        "),v.Mb(548,"div",3),v.Gc(549,"\n      "),v.Qb(),v.Gc(550,"\n    "),v.Qb(),v.Gc(551,"\n\n    "),v.Rb(552,"div",42),v.Gc(553,"\n      "),v.Rb(554,"div"),v.Gc(555,"\n        "),v.Mb(556,"div",41),v.Gc(557,"\n      "),v.Qb(),v.Gc(558,"\n      "),v.Rb(559,"div"),v.Gc(560,"\n        "),v.Mb(561,"div",13),v.Gc(562,"\n      "),v.Qb(),v.Gc(563,"\n      "),v.Rb(564,"div"),v.Gc(565,"\n        "),v.Mb(566,"div",3),v.Gc(567,"\n      "),v.Qb(),v.Gc(568,"\n    "),v.Qb(),v.Gc(569,"\n\n    "),v.Rb(570,"div",43),v.Gc(571,"\n      "),v.Rb(572,"div"),v.Gc(573,"\n        "),v.Mb(574,"div",41),v.Gc(575,"\n      "),v.Qb(),v.Gc(576,"\n      "),v.Rb(577,"div"),v.Gc(578,"\n        "),v.Mb(579,"div",13),v.Gc(580,"\n      "),v.Qb(),v.Gc(581,"\n      "),v.Rb(582,"div"),v.Gc(583,"\n        "),v.Mb(584,"div",3),v.Gc(585,"\n      "),v.Qb(),v.Gc(586,"\n    "),v.Qb(),v.Gc(587,"\n  "),v.Qb(),v.Gc(588,"\n\n  "),v.Rb(589,"section"),v.Gc(590,"\n    "),v.Rb(591,"h2"),v.Gc(592,"Distribution"),v.Qb(),v.Gc(593,"\n\n    "),v.Rb(594,"p"),v.Gc(595,"Add classes to distribute the contents of a row or column."),v.Qb(),v.Gc(596,"\n\n    "),v.Rb(597,"div",44),v.Gc(598,"\n      "),v.Rb(599,"div",7),v.Gc(600,"\n        "),v.Mb(601,"div",3),v.Gc(602,"\n      "),v.Qb(),v.Gc(603,"\n      "),v.Rb(604,"div",7),v.Gc(605,"\n        "),v.Mb(606,"div",3),v.Gc(607,"\n      "),v.Qb(),v.Gc(608,"\n      "),v.Rb(609,"div",7),v.Gc(610,"\n        "),v.Mb(611,"div",3),v.Gc(612,"\n      "),v.Qb(),v.Gc(613,"\n    "),v.Qb(),v.Gc(614,"\n\n    "),v.Rb(615,"div",45),v.Gc(616,"\n      "),v.Rb(617,"div",7),v.Gc(618,"\n        "),v.Mb(619,"div",3),v.Gc(620,"\n      "),v.Qb(),v.Gc(621,"\n      "),v.Rb(622,"div",7),v.Gc(623,"\n        "),v.Mb(624,"div",3),v.Gc(625,"\n      "),v.Qb(),v.Gc(626,"\n      "),v.Rb(627,"div",7),v.Gc(628,"\n        "),v.Mb(629,"div",3),v.Gc(630,"\n      "),v.Qb(),v.Gc(631,"\n    "),v.Qb(),v.Gc(632,"\n  "),v.Qb(),v.Gc(633,"\n\n  "),v.Rb(634,"section"),v.Gc(635,"\n    "),v.Rb(636,"h2"),v.Gc(637,"Gut"),v.Qb();v.Gc(638,"\n\n    "),v.Rb(639,"p"),v.Gc(640,"Add "),v.Rb(641,"code"),v.Gc(642,"gutless"),v.Qb(),v.Gc(643," to remove gutters for a row or column."),v.Qb(),v.Gc(644,"\n\n    "),v.Rb(645,"div",46),v.Gc(646,"\n      "),v.Rb(647,"div"),v.Gc(648,"\n        "),v.Mb(649,"div",3),v.Gc(650,"\n      "),v.Qb(),v.Gc(651,"\n      "),v.Rb(652,"div"),v.Gc(653,"\n        "),v.Mb(654,"div",3),v.Gc(655,"\n      "),v.Qb(),v.Gc(656,"\n      "),v.Rb(657,"div"),v.Gc(658,"\n        "),v.Mb(659,"div",3),v.Gc(660,"\n      "),v.Qb(),v.Gc(661,"\n    "),v.Qb(),v.Gc(662,"\n\n    "),v.Rb(663,"div",2),v.Gc(664,"\n      "),v.Rb(665,"div"),v.Gc(666,"\n        "),v.Mb(667,"div",3),v.Gc(668,"\n      "),v.Qb(),v.Gc(669,"\n      "),v.Rb(670,"div",47),v.Gc(671,"\n        "),v.Mb(672,"div",3),v.Gc(673,"\n      "),v.Qb(),v.Gc(674,"\n      "),v.Rb(675,"div"),v.Gc(676,"\n        "),v.Mb(677,"div",3),v.Gc(678,"\n      "),v.Qb(),v.Gc(679,"\n    "),v.Qb(),v.Gc(680,"\n  "),v.Qb(),v.Gc(681,"\n\n  "),v.Rb(682,"section"),v.Gc(683,"\n    "),v.Rb(684,"h2"),v.Gc(685,"Reordering"),v.Qb(),v.Gc(686,"\n\n    "),v.Rb(687,"p"),v.Gc(688,"Add classes to reorder columns."),v.Qb(),v.Gc(689,"\n\n    "),v.Rb(690,"div",2),v.Gc(691,"\n      "),v.Rb(692,"div"),v.Gc(693,"\n        "),v.Mb(694,"div",3),v.Gc(695,"\n      "),v.Qb(),v.Gc(696,"\n      "),v.Rb(697,"div"),v.Gc(698,"\n        "),v.Mb(699,"div",3),v.Gc(700,"\n      "),v.Qb(),v.Gc(701,"\n      "),v.Rb(702,"div",48),v.Gc(703,"\n        "),v.Mb(704,"div",3),v.Gc(705,"\n      "),v.Qb(),v.Gc(706,"\n    "),v.Qb(),v.Gc(707,"\n\n    "),v.Rb(708,"div",2),v.Gc(709,"\n      "),v.Rb(710,"div",49),v.Gc(711,"\n        "),v.Mb(712,"div",3),v.Gc(713,"\n      "),v.Qb(),v.Gc(714,"\n      "),v.Rb(715,"div"),v.Gc(716,"\n        "),v.Mb(717,"div",3),v.Gc(718,"\n      "),v.Qb(),v.Gc(719,"\n      "),v.Rb(720,"div"),v.Gc(721,"\n        "),v.Mb(722,"div",3),v.Gc(723,"\n      "),v.Qb(),v.Gc(724,"\n    "),v.Qb(),v.Gc(725,"\n\n    "),v.Rb(726,"div",50),v.Gc(727,"\n      "),v.Rb(728,"div"),v.Gc(729,"\n        "),v.Rb(730,"div",3),v.Gc(731,"1"),v.Qb(),v.Gc(732,"\n      "),v.Qb(),v.Gc(733,"\n      "),v.Rb(734,"div"),v.Gc(735,"\n        "),v.Rb(736,"div",3),v.Gc(737,"2"),v.Qb(),v.Gc(738,"\n      "),v.Qb(),v.Gc(739,"\n      "),v.Rb(740,"div"),v.Gc(741,"\n        "),v.Rb(742,"div",3),v.Gc(743,"3"),v.Qb(),v.Gc(744,"\n      "),v.Qb(),v.Gc(745,"\n    "),v.Qb(),v.Gc(746,"\n  "),v.Qb(),v.Gc(747,"\n\n  "),v.Rb(748,"section"),v.Gc(749,"\n    "),v.Rb(750,"h2"),v.Gc(751,"CSS Variables"),v.Qb(),v.Gc(752,"\n\n    "),v.Rb(753,"p"),v.Gc(754,"CSS variables can be used to override styles"),v.Qb(),v.Gc(755,"\n\n    "),v.Rb(756,"div",51),v.Gc(757,"\n      "),v.Rb(758,"div",52),v.Gc(759,"\n        "),v.Mb(760,"div",3),v.Gc(761,"\n      "),v.Qb(),v.Gc(762,"\n      "),v.Rb(763,"div",53),v.Gc(764,"\n        "),v.Mb(765,"div",3),v.Gc(766,"\n      "),v.Qb(),v.Gc(767,"\n      "),v.Rb(768,"div",54),v.Gc(769,"\n        "),v.Mb(770,"div",3),v.Gc(771,"\n      "),v.Qb(),v.Gc(772,"\n      "),v.Rb(773,"div",55),v.Gc(774,"\n        "),v.Mb(775,"div",3),v.Gc(776,"\n      "),v.Qb(),v.Gc(777,"\n      "),v.Rb(778,"div",56),v.Gc(779,"\n        "),v.Mb(780,"div",3),v.Gc(781,"\n      "),v.Qb(),v.Gc(782,"\n    "),v.Qb(),v.Gc(783,"\n\n    "),v.Rb(784,"div",57),v.Gc(785,"\n      "),v.Rb(786,"div",58),v.Gc(787,"\n        "),v.Mb(788,"div",41),v.Gc(789,"\n      "),v.Qb(),v.Gc(790,"\n      "),v.Rb(791,"div",58),v.Gc(792,"\n        "),v.Mb(793,"div",41),v.Gc(794,"\n      "),v.Qb(),v.Gc(795,"\n      "),v.Rb(796,"div",58),v.Gc(797,"\n        "),v.Mb(798,"div",41),v.Gc(799,"\n      "),v.Qb(),v.Gc(800,"\n      "),v.Rb(801,"div",58),v.Gc(802,"\n        "),v.Mb(803,"div",41),v.Gc(804,"\n      "),v.Qb(),v.Gc(805,"\n      "),v.Rb(806,"div",58),v.Gc(807,"\n        "),v.Mb(808,"div",41),v.Gc(809,"\n      "),v.Qb(),v.Gc(810,"\n    "),v.Qb(),v.Gc(811,"\n  "),v.Qb(),v.Gc(812,"\n"),v.Qb(),v.Gc(813,"\n")}2&n&&(v.yb(34),v.ic("ngModel",c.toggleChk),v.yb(3),v.Ab(c.toggleChk?"ngx-flex--wrap-fixed":"ngx-flex--wrap"))},directives:[t.Yb,l.i,l.l],styles:["section[_ngcontent-%COMP%]{margin:40px 0}code[_ngcontent-%COMP%]{display:inline;padding:.2em .4em;margin:0;font-size:85%;background-color:#212631;border-radius:3px}.ngx-flex--wrap[_ngcontent-%COMP%], .ngx-flex--wrap-fixed[_ngcontent-%COMP%], .ngx-flex--wrap-fluid[_ngcontent-%COMP%]{margin:40px 0;border:1px solid #2b3240;position:relative}.ngx-flex--wrap-fixed[_ngcontent-%COMP%]:before, .ngx-flex--wrap-fluid[_ngcontent-%COMP%]:before, .ngx-flex--wrap[_ngcontent-%COMP%]:before{content:attr(class);font-size:16px;font-weight:700;position:absolute;top:-20px}.ngx-flex--row[_ngcontent-%COMP%]{background-color:rgba(29,222,182,.1);margin-top:20px;position:relative;box-sizing:border-box}.ngx-flex--row[_ngcontent-%COMP%]:before{content:attr(class);font-size:12px;position:absolute;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:calc(100% - 4px);text-align:left;top:-14px;left:10px}.ngx-flex--row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{background-color:rgba(34,190,251,.15);position:relative;border:1px solid rgba(34,190,251,.06);box-sizing:border-box}.ngx-flex--row[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:before{content:attr(class);font-size:10px;position:absolute;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:left;top:10px;width:calc(100% - 15px);left:10px;padding:0 5px;border-radius:3px}.ngx-flex--row[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:hover:before{font-size:12px;background-color:#1c2029;overflow:visible;z-index:1000;width:auto}.box[_ngcontent-%COMP%]{margin:5px 0;padding:0 5px;background:#1483ff;border-radius:5px;overflow:hidden;text-align:center;color:#000;font-size:10px;font-weight:700;min-height:30px;line-height:30px;vertical-align:middle}.box.medium[_ngcontent-%COMP%]{height:4rem;line-height:65px}.box.large[_ngcontent-%COMP%]{height:8rem}.app-columns-24-wide-gutter[_ngcontent-%COMP%], .app-columns-24-wide-gutter[_ngcontent-%COMP%]   .ngx-flex--col[_ngcontent-%COMP%], .app-columns-24-wide-gutter[_ngcontent-%COMP%]   .ngx-flex--row[_ngcontent-%COMP%]{--columns:24;--column-width:calc(100% / var(--columns));--gutter-width:2rem;--gutter-compensation:calc((var(--gutter-width) * 0.5) * -1);--half-gutter-width:calc((var(--gutter-width) * 0.5))}.app-columns-10[_ngcontent-%COMP%], .app-columns-10[_ngcontent-%COMP%]   .ngx-flex--row[_ngcontent-%COMP%], .app-columns-10[_ngcontent-%COMP%]   .ngx-flex--row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{--columns:10;--column-width:calc(100% / var(--columns))}"]}),G)}],f=((o=function c(){n(this,c)}).\u0275mod=v.Jb({type:o}),o.\u0275inj=v.Ib({factory:function(n){return new(n||o)},imports:[[x.g.forChild(g)],x.g]}),o),s=((i=function c(){n(this,c)}).\u0275mod=v.Jb({type:i}),i.\u0275inj=v.Ib({factory:function(n){return new(n||i)},imports:[[d.c,l.d,t.Zb,f]]}),i)}}])}();