# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.27)
# Database: cgxhotpot
# Generation Time: 2013-07-04 15:59:19 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table auth_group
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_group`;

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table auth_group_permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_group_permissions`;

CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_bda51c3c` (`group_id`),
  KEY `auth_group_permissions_1e014c8f` (`permission_id`),
  CONSTRAINT `group_id_refs_id_3cea63fe` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `permission_id_refs_id_a7792de1` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table auth_permission
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_permission`;

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  KEY `auth_permission_e4470c6e` (`content_type_id`),
  CONSTRAINT `content_type_id_refs_id_728de91f` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`)
VALUES
	(1,'Can add permission',1,'add_permission'),
	(2,'Can change permission',1,'change_permission'),
	(3,'Can delete permission',1,'delete_permission'),
	(4,'Can add group',2,'add_group'),
	(5,'Can change group',2,'change_group'),
	(6,'Can delete group',2,'delete_group'),
	(7,'Can add user',3,'add_user'),
	(8,'Can change user',3,'change_user'),
	(9,'Can delete user',3,'delete_user'),
	(10,'Can add content type',4,'add_contenttype'),
	(11,'Can change content type',4,'change_contenttype'),
	(12,'Can delete content type',4,'delete_contenttype'),
	(13,'Can add session',5,'add_session'),
	(14,'Can change session',5,'change_session'),
	(15,'Can delete session',5,'delete_session'),
	(16,'Can add site',6,'add_site'),
	(17,'Can change site',6,'change_site'),
	(18,'Can delete site',6,'delete_site'),
	(19,'Can add news',7,'add_news'),
	(20,'Can change news',7,'change_news'),
	(21,'Can delete news',7,'delete_news'),
	(22,'Can add log entry',8,'add_logentry'),
	(23,'Can change log entry',8,'change_logentry'),
	(24,'Can delete log entry',8,'delete_logentry');

/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table auth_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_user`;

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(75) NOT NULL,
  `password` varchar(128) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `last_login` datetime NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;

INSERT INTO `auth_user` (`id`, `username`, `first_name`, `last_name`, `email`, `password`, `is_staff`, `is_active`, `is_superuser`, `last_login`, `date_joined`)
VALUES
	(1,'cgxhotpot','','','cgxhotpot@gmail.com','pbkdf2_sha256$10000$o16iNNKAgSaR$xFvyFaFsE7msB+bdI5QT4A0qBDJBSHHDwX7LjICQttg=',1,1,1,'2013-07-04 07:59:59','2013-07-04 02:14:46');

/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table auth_user_groups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_user_groups`;

CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `auth_user_groups_fbfc09f1` (`user_id`),
  KEY `auth_user_groups_bda51c3c` (`group_id`),
  CONSTRAINT `group_id_refs_id_f0ee9890` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `user_id_refs_id_831107f1` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table auth_user_user_permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_user_user_permissions`;

CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `auth_user_user_permissions_fbfc09f1` (`user_id`),
  KEY `auth_user_user_permissions_1e014c8f` (`permission_id`),
  CONSTRAINT `permission_id_refs_id_67e79cb` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `user_id_refs_id_f2045483` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table django_admin_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `django_admin_log`;

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_fbfc09f1` (`user_id`),
  KEY `django_admin_log_e4470c6e` (`content_type_id`),
  CONSTRAINT `content_type_id_refs_id_288599e6` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `user_id_refs_id_c8665aa` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;

INSERT INTO `django_admin_log` (`id`, `action_time`, `user_id`, `content_type_id`, `object_id`, `object_repr`, `action_flag`, `change_message`)
VALUES
	(1,'2013-07-04 02:56:58',1,7,'1','串根香火锅',1,''),
	(2,'2013-07-04 03:03:12',1,7,'1','串根香火锅',2,'No fields changed.'),
	(3,'2013-07-04 03:09:05',1,7,'1','串根香火锅',2,'Changed news_date.'),
	(4,'2013-07-04 03:19:14',1,7,'2','串根香~~~~',1,''),
	(5,'2013-07-04 03:19:28',1,7,'3','很香',1,''),
	(6,'2013-07-04 03:19:41',1,7,'4','香的不得了啊   ',1,''),
	(7,'2013-07-04 03:19:47',1,7,'5','撒旦发生',1,''),
	(8,'2013-07-04 03:19:56',1,7,'6','富翁翻墙俄方',1,''),
	(9,'2013-07-04 04:59:32',1,7,'1','串根香火锅',1,''),
	(10,'2013-07-04 04:59:44',1,7,'1','串根香火锅',2,'No fields changed.'),
	(11,'2013-07-04 07:26:56',1,7,'2','质检总局：美国猪肉检出瘦肉精被全部撤销',1,''),
	(12,'2013-07-04 07:30:40',1,7,'3','李克强谈食品安全问题 称治乱用重典',1,''),
	(13,'2013-07-04 07:31:01',1,7,'4','质检总局:今年将对乳制品等进行质量监督检验检疫',1,''),
	(14,'2013-07-04 07:31:25',1,7,'5','餐饮业持续高速发展 信息渠道将迎来变革',1,''),
	(15,'2013-07-04 08:00:18',1,7,'6','测试一下而已',1,'');

/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table django_content_type
# ------------------------------------------------------------

DROP TABLE IF EXISTS `django_content_type`;

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_label` (`app_label`,`model`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;

INSERT INTO `django_content_type` (`id`, `name`, `app_label`, `model`)
VALUES
	(1,'permission','auth','permission'),
	(2,'group','auth','group'),
	(3,'user','auth','user'),
	(4,'content type','contenttypes','contenttype'),
	(5,'session','sessions','session'),
	(6,'site','sites','site'),
	(7,'news','news','news'),
	(8,'log entry','admin','logentry');

/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table django_session
# ------------------------------------------------------------

DROP TABLE IF EXISTS `django_session`;

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_c25c2c28` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`)
VALUES
	('0849bdf4ffd0336cd92974ae647ec0da','ZWExNmZhOTdhOWM5ZDZjNzljOGU5OTViYjcxYmJmYzMxZjg2NTBhYTqAAn1xAShVEl9hdXRoX3Vz\nZXJfYmFja2VuZHECVSlkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZHED\nVQ1fYXV0aF91c2VyX2lkcQSKAQF1Lg==\n','2013-07-18 03:04:15'),
	('90dc01204c4adb0aaef314f677192211','ZWExNmZhOTdhOWM5ZDZjNzljOGU5OTViYjcxYmJmYzMxZjg2NTBhYTqAAn1xAShVEl9hdXRoX3Vz\nZXJfYmFja2VuZHECVSlkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZHED\nVQ1fYXV0aF91c2VyX2lkcQSKAQF1Lg==\n','2013-07-18 02:59:09'),
	('efb2018dee3c5add89c35412eab73eb5','ZWExNmZhOTdhOWM5ZDZjNzljOGU5OTViYjcxYmJmYzMxZjg2NTBhYTqAAn1xAShVEl9hdXRoX3Vz\nZXJfYmFja2VuZHECVSlkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZHED\nVQ1fYXV0aF91c2VyX2lkcQSKAQF1Lg==\n','2013-07-18 07:59:59');

/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table django_site
# ------------------------------------------------------------

DROP TABLE IF EXISTS `django_site`;

CREATE TABLE `django_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `django_site` WRITE;
/*!40000 ALTER TABLE `django_site` DISABLE KEYS */;

INSERT INTO `django_site` (`id`, `domain`, `name`)
VALUES
	(1,'example.com','example.com');

/*!40000 ALTER TABLE `django_site` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table news_news
# ------------------------------------------------------------

DROP TABLE IF EXISTS `news_news`;

CREATE TABLE `news_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_title` varchar(64) NOT NULL,
  `news_date` date NOT NULL,
  `news_image` varchar(100) NOT NULL,
  `news_content` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `news_news` WRITE;
/*!40000 ALTER TABLE `news_news` DISABLE KEYS */;

INSERT INTO `news_news` (`id`, `news_title`, `news_date`, `news_image`, `news_content`)
VALUES
	(1,'串根香火锅','2013-07-04','src/images/osx_hero_2x.jpg','串根香！香香香！'),
	(2,'质检总局：美国猪肉检出瘦肉精被全部撤销','2013-07-04','','国家质检总局网站公布了2011年12月份进境不合格食品、化妆品信息，马来西亚产的即食燕窝由于未提供所需证书被销毁，美国出口的冻猪鼻被检出了瘦肉精被全部退货。不合格信息中，雀巢水北美公司榜上有名，该公司生产的箭头饮用水由于亚硝酸盐超标也被销毁处理。\r\n \r\n记者从此次公布的进境不合格食品、化妆品信息名单中看到，备受市民瞩目的不合格燕窝重回此名单，马来西亚一真纯燕有限公司生产的两批共7.5公斤浓缩即食燕窝在广东入境时，由于没有提供所需证书，被当地检验检疫部门查处并销毁。\r\n \r\n美国FarmLand Foods公司生产的近23.5吨冻猪鼻则是在广东入境时被检出了莱克多巴胺（俗称瘦肉精），由于国家明令禁止使用该物质，所以这批货物被全部退货。\r\n \r\n在这份不合格名单中，记者还看到了雀巢、统一等知名企业榜上有名。记者了解到，此次公布的进口不合格食品、化妆品都已依法做退货、销毁或改作他用处理，未在国内市场销售。'),
	(3,'李克强谈食品安全问题 称治乱用重典','2013-07-04','','据新华社电 中共中央政治局常委、国务院副总理、国务院食品安全委员会主任李克强昨天主持召开国务院食品安全委员会第四次全体会议并讲话。他强调，要把解决影响人民群众食品安全的突出问题同构建长效机制更好地结合起来，把综合整治攻坚战持久战引向深入。\r\n \r\n中共中央政治局委员、国务院副总理、国务院食品安全委员会副主任回良玉出席会议并指出，要切实提高食品安全治理整顿行动的针对性和实效性，进一步强化责任落实、制度建设和基层基础工作。中共中央政治局委员、国务院副总理、国务院食品安全委员会副主任王岐山出席会议并指出，要深刻把握食品安全工作的复杂性和长期性，抓住主要矛盾，着力解决突出问题。\r\n \r\n会议听取了国务院食品安全办和国务院食品安全委员会成员单位的汇报和发言，审议了《2012年食品安全重点工作安排》。会议强调，做好今年食品安全保障工作，一是依法深入开展综合治理。治乱需用重典，要坚持严字当头，针对重点品种、重点场所和薄弱环节，加大综合治理力度，保持严厉打击食品安全违法犯罪高压态势。二是着力建立健全长效机制。要进一步完善食品安全法律法规体系、标准体系和技术支撑体系，切实增加投入，完善政策措施，狠抓基础工作和规范建设。三是进一步落实企业主体责任。加强诚信体系建设，强化社会监督，推动企业改进食品安全管理。四是全面加强政府监管。建立健全食品安全监管综合协调机制，促进各部门、各环节监管措施有效衔接，形成监管合力，堵塞监管漏洞，增强食品安全工作的系统性，提高综合监管水平。'),
	(4,'质检总局:今年将对乳制品等进行质量监督检验检疫','2013-07-04','','新华网北京1月5日电国家质检总局局长支树平5日表示，质检部门将选择一两个高风险食品行业，提高准入门槛，严格准入条件，坚决淘汰一批不符合要求的企业。\r\n \r\n支树平在当天召开的全国质量监督检验检疫工作会议上表示，质检部门将把质量问题多、人民群众反映强烈的产品和进出口商品作为重点，对乳制品、酒类、肉制品、食品添加剂、有机产品等开展全国性综合治理。\r\n \r\n据介绍，2011年，全国质检系统严格实施准入制度、严格生产企业监管、严格监督抽查和检验检疫，全年吊销注销食品和工业产品企业生产许可证1.5万张，依法吊销注销乳制品企业生产许可证426家，淘汰了40.4%的乳制品企业，撤销了3万余张3C证书，注销、撤销478家进口废物原料国内收货人注册登记资格。\r\n \r\n支树平说，2012年，质检系统对监督抽查、执法检查、口岸查验中发现的质量问题，将依法责令企业整改，督促企业落实三包、召回等规定，问题严重的要停产整顿；对不能持续满足准入备案条件、整改达不到要求的企业，坚决依法注销、吊销许可证。\r\n \r\n同时，对质量问题较多的产品生产集聚区，质检部门将组织开展区域集中整治，坚持“打、治、建”相结合，打击严重质量违法行为，治理一般质量问题，规范区域产业健康发展。'),
	(5,'餐饮业持续高速发展 信息渠道将迎来变革','2013-07-04','','目前我国餐饮业的发展势头持续强劲，在餐饮行业高速发展的同时，中国餐饮业已经步入行业洗牌期，必须交流新思想、探索新模式，迅速由传统的“粗放式、模糊式、经验式经营”向“精细化、流程化、连锁规模化经营”转型。\r\n \r\n未来的餐饮业将是一场不见硝烟的战争。信息时代，媒体营销已日渐成为企业品牌传播的利器，媒介就是企业的品牌秀场。\r\n \r\n在这样的背景下，以有效营销为目的，以更加科学的控制为手段，以综合主体管理为过程的餐饮渠道整合营销就显得迫切和必要。它不仅体现在对新渠道、新市场的开发，更重要的是对餐饮营销的整合，对所拥有市场的一种挤占。\r\n \r\n餐饮供应链刮“健康风”客商热捧放心原料\r\n来源：中国烹饪网\r\n\r\n10月22日，在第六届中国苏州美食节上，首次亮相的餐饮服务业供应链对接洽谈展示，让人眼前一亮。两天时间内市民纷至沓来，领略餐饮食品供应链最新时尚，餐饮酒店等客商争相前来洽谈对接。\r\n \r\n健康营养的餐饮新理念，成为这次美食节供应链对接洽谈展示最大的亮点。在此次供应链对接洽谈展示中，粮油、蔬菜等各种放心原料，成为客商追捧的热点。现场进行对接洽谈351场次，签订供销合同37份，在线销售协议1份，向对接洽谈客户发放企业\r\n和产品资料2000多份。\r\n \r\n2011年中国餐饮博览会 尽展无限商机\r\n来源：中国烹饪网\r\n\r\n10月18日，2011年中国餐饮博览会拉开帷幕，440个展位开始接待海内外的餐饮业客商，不同地区的名特小吃也在博览会期间集体亮相，让春城人民和海内外游客大饱口福。此次博览会和美食节分为云南绿色食品展，节能减排设备展，美食之乡名店巡展。为现代餐饮业的发展创造了更加有力的商机。\r\n \r\n中华厨艺绝活绝技表演团也在活动期间带来了九十米一根萝卜丝、豆腐雕刻、大刀面、百米一根面、空手切土豆丝穿针、蒙眼快速剪刀面等节目，让市民大饱眼福。'),
	(6,'测试一下而已','2013-07-23','','撒旦发生地方烧多翻');

/*!40000 ALTER TABLE `news_news` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
