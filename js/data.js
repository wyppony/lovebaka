/* =====================================================================
 * 爱⑨之家 · 站点数据 (data.js)
 * 集中管理：轮播图配置、随机音乐库、随机琪露诺图库、站点纪念日、
 *           全站导航、更新日志、统计信息
 * 说明：这些数据都会在首页被引用，可按需增改。
 * ===================================================================== */

/* ---------- 轮播图配置（可链接） ----------
 * img  : 图片路径（相对主页，放站点仓库根目录）
 * title: 底部标题
 * sub  : 副标题
 * link : 点击整张轮播图跳转的链接
 * 想增删/更换轮播图，直接改这个数组即可。 */
const CAROUSEL_SLIDES = [
    { img: "97.jpg",        title: "欢迎来到爱⑨之家",   sub: "东方project · 琪露诺粉丝站", link: "关于琪露诺.html" },
    { img: "qln2.jpg",     title: "入教测试 · ⑨分证明厨力", sub: "东方⑨教 等你入教", link: "https://wyppony.github.io/lovebaka/rjcs.html" },
    { img: "qln4.jpg",       title: "琪露诺美图 · 画廊", sub: "大量⑨图等你收藏", link: "https://wyppony.github.io/touhouphotos/cirno.html" },
    { img: "qln3.png",         title: "多媒体留存器",      sub: "图片 · 音乐 · 视频 一网打尽", link: "https://wyppony.github.io/touhouphotos/" },
    { img: "qln.jpg",         title: "收藏的二创视频",    sub: "精彩二创 一键直达", link: "https://wyppony.github.io/touhouvideos/" }
];
/* 轮播自动播放间隔（毫秒） */
const CAROUSEL_INTERVAL = 5000;

/* ---------- 随机琪露诺图库 ---------- */
const kirinoImgLib = [
            "https://wyppony.github.io/touhouphotos/A.png",
            "https://wyppony.github.io/touhouphotos/B.jpg",
            "https://wyppony.github.io/touhouphotos/E.jpg",
            "https://wyppony.github.io/touhouphotos/N.jpg",
            "https://wyppony.github.io/touhouphotos/O.jpg",
            "https://wyppony.github.io/touhouphotos/P.jpg",
            "https://wyppony.github.io/touhouphotos/R.jpg",
            "https://wyppony.github.io/touhouphotos/S.jpg",
            "https://wyppony.github.io/touhouphotos/U.jpg",
            "https://wyppony.github.io/touhouphotos/X.jpg",
            "https://wyppony.github.io/touhouphotos/Y.jpg",
            "https://wyppony.github.io/touhouphotos/Z.jpg",
            "https://wyppony.github.io/touhouphotos/1.jpg",
            "https://wyppony.github.io/touhouphotos/2.jpg",
            "https://wyppony.github.io/touhouphotos/3.jpg",
            "https://wyppony.github.io/touhouphotos/4.png",
            "https://wyppony.github.io/touhouphotos/6.jpg",
            "https://wyppony.github.io/touhouphotos/7.jpg",
            "https://wyppony.github.io/touhouphotos/8.jpg",
            "https://wyppony.github.io/touhouphotos/9.jpg",
            "https://wyppony.github.io/touhouphotos/10.jpg",
            "https://wyppony.github.io/touhouphotos/13.jpg",
            "https://wyppony.github.io/touhouphotos/14.jpg",
            "https://wyppony.github.io/touhouphotos/16.jpg",
            "https://wyppony.github.io/touhouphotos/18.jpg",
            "https://wyppony.github.io/touhouphotos/19.jpg",
            "https://wyppony.github.io/touhouphotos/20.jpg"
];

/* ---------- 随机东方原曲库 ---------- */
const musicLib = [
            { name: "露米娅-妖魔夜行", url: "https://wyppony.github.io/touhoumusic/%E5%A6%96%E9%AD%94%E5%A4%9C%E8%A1%8C.mp3" },
            { name: "红魔乡-Lunate Elf", url: "https://wyppony.github.io/touhoumusic/Lunate%20Elf.mp3" },
            { name: "琪露诺-活泼的纯情小姑娘", url: "https://wyppony.github.io/touhoumusic/%E6%B4%BB%E6%B3%BC%E7%9A%84%E7%BA%AF%E6%83%85%E5%B0%8F%E5%A7%91%E5%A8%98.mp3" },
            { name: "红魔乡-上海红茶馆", url: "https://wyppony.github.io/touhoumusic/%E4%B8%8A%E6%B5%B7%E7%BA%A2%E8%8C%B6%E9%A6%86.mp3" },
            { name: "蕾米莉亚-献给已逝王女的七重奏", url: "https://wyppony.github.io/touhoumusic/%E7%8C%AE%E7%BB%99%E5%B7%B2%E9%80%9D%E7%8E%8B%E5%A5%B3%E7%9A%84%E4%B8%83%E9%87%8D%E5%A5%8F.mp3" },
            { name: "红魔乡-魔法少女的百年祭", url: "https://wyppony.github.io/touhoumusic/%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E7%9A%84%E7%99%BE%E5%B9%B4%E7%A5%AD.mp3" },
            { name: "芙兰朵露-U.N.owen就是她吗", url: "https://wyppony.github.io/touhoumusic/U.N.owen%E5%B0%B1%E6%98%AF%E5%A5%B9%E5%90%97.mp3" },
            { name: "妖妖梦-远野幻想物语", url: "https://wyppony.github.io/touhoumusic/%E8%BF%9C%E9%87%8E%E5%B9%BB%E6%83%B3%E7%89%A9%E8%AF%AD.mp3" },
            { name: "西行寺幽幽子-幽雅地绽放吧，墨染的樱花", url: "https://wyppony.github.io/touhoumusic/%E5%B9%BD%E9%9B%85%E5%9C%B0%E7%BB%BD%E6%94%BE%E5%90%A7%EF%BC%8C%E5%A2%A8%E6%9F%93%E7%9A%84%E6%A8%B1%E8%8A%B1.mp3" },
            { name: "妖妖梦-妖妖跋扈", url: "https://wyppony.github.io/touhoumusic/%E5%A6%96%E5%A6%96%E8%B7%8B%E6%89%88.mp3" },
            { name: "八云蓝-少女幻葬", url: "https://wyppony.github.io/touhoumusic/%E5%B0%91%E5%A5%B3%E5%B9%BB%E8%91%AC.mp3" },
            { name: "莉格露·奈特巴格-蠢蠢的秋月", url: "https://wyppony.github.io/touhoumusic/%E8%A0%A2%E8%A0%A2%E7%9A%84%E7%A7%8B%E6%9C%88.mp3" },
            { name: "永夜抄-令人怀念的东方之血", url: "https://wyppony.github.io/touhoumusic/%E4%BB%A4%E4%BA%BA%E6%80%80%E5%BF%B5%E7%9A%84%E4%B8%9C%E6%96%B9%E4%B9%8B%E8%A1%80.mp3" },
            { name: "博丽灵梦-少女绮想曲", url: "https://wyppony.github.io/touhoumusic/%E5%B0%91%E5%A5%B3%E7%BB%AE%E6%83%B3%E6%9B%B2.mp3" },
            { name: "雾雨魔理沙-恋色Master spark", url: "https://wyppony.github.io/touhoumusic/%E6%81%8B%E8%89%B2Master%20spark.mp3" },
            { name: "铃仙·优昙华院·因幡-狂气之瞳", url: "https://wyppony.github.io/touhoumusic/%E7%8B%82%E6%B0%94%E4%B9%8B%E7%9E%B3.mp3" },
            { name: "永夜抄-旅人1969", url: "https://wyppony.github.io/touhoumusic/%E6%97%85%E4%BA%BA1969.mp3" },
            { name: "八意永琳-千年幻想乡", url: "https://wyppony.github.io/touhoumusic/%E5%8D%83%E5%B9%B4%E5%B9%BB%E6%83%B3%E4%B9%A1.mp3" },
            { name: "蓬莱山辉夜-竹取飞翔", url: "https://wyppony.github.io/touhoumusic/%E7%AB%B9%E5%8F%96%E9%A3%9E%E7%BF%94.mp3" },
            { name: "萃梦想-砕月", url: "https://wyppony.github.io/touhoumusic/%E7%A0%95%E6%9C%88.mp3" },
            { name: "十六夜咲夜-花朵盛开之夜", url: "https://wyppony.github.io/touhoumusic/%E8%8A%B1%E6%9C%B5%E7%9B%9B%E5%BC%80%E4%B9%8B%E5%A4%9C.mp3" },
            { name: "秋穰子-会受稻田姬的斥责啦", url: "https://wyppony.github.io/touhoumusic/%E4%BC%9A%E5%8F%97%E7%A8%BB%E7%94%B0%E5%A7%AC%E7%9A%84%E6%96%A5%E8%B4%A3%E5%95%A6.mp3" },
            { name: "风神录-厄神降临之路", url: "https://wyppony.github.io/touhoumusic/%E5%8E%84%E7%A5%9E%E9%99%8D%E4%B8%B4%E4%B9%8B%E8%B7%AF.mp3" },
            { name: "风神录-众神眷恋的幻想乡", url: "https://wyppony.github.io/touhoumusic/%E4%BC%97%E7%A5%9E%E7%9C%B7%E6%81%8B%E7%9A%84%E5%B9%BB%E6%83%B3%E4%B9%A1.mp3" },
            { name: "东风谷早苗-信仰只是为了虚幻之人", url: "https://wyppony.github.io/touhoumusic/%E4%BF%A1%E4%BB%B0%E5%8F%AA%E6%98%AF%E4%B8%BA%E4%BA%86%E8%99%9A%E5%B9%BB%E4%B9%8B%E4%BA%BA.mp3" },
            { name: "八坂神奈子-神圣庄严的古战场", url: "https://wyppony.github.io/touhoumusic/%E7%A5%9E%E5%9C%A3%E5%BA%84%E4%B8%A5%E7%9A%84%E5%8F%A4%E6%88%98%E5%9C%BA.mp3" },
            { name: "风神录-明日之盛，昨日之俗", url: "https://wyppony.github.io/touhoumusic/%E6%98%8E%E6%97%A5%E4%B9%8B%E7%9B%9B%EF%BC%8C%E6%98%A8%E6%97%A5%E4%B9%8B%E4%BF%97.mp3" },
            { name: "洩矢诹访子-土著神的信仰", url: "https://wyppony.github.io/touhoumusic/%E5%9C%9F%E8%91%97%E7%A5%9E%E7%9A%84%E4%BF%A1%E4%BB%B0.mp3" },
            { name: "地灵殿-昏暗的风穴", url: "https://wyppony.github.io/touhoumusic/%E6%98%8F%E6%9A%97%E7%9A%84%E9%A3%8E%E7%A9%B4.mp3" },
            { name: "地灵殿-漫游旧地狱街道", url: "https://wyppony.github.io/touhoumusic/%E6%BC%AB%E6%B8%B8%E6%97%A7%E5%9C%B0%E7%8B%B1%E8%A1%97%E9%81%93.mp3" },
            { name: "古明地觉-少女觉~3rd eye", url: "https://wyppony.github.io/touhoumusic/%E5%B0%91%E5%A5%B3%E8%A7%89.mp3" },
            { name: "地灵殿-废狱摇篮曲", url: "https://wyppony.github.io/touhoumusic/%E5%BA%9F%E7%8B%B1%E6%91%87%E7%AF%AE%E6%9B%B2.mp3" },
            { name: "火焰猫燐-尸体旅行", url: "https://wyppony.github.io/touhoumusic/%E5%B0%B8%E4%BD%93%E6%97%85%E8%A1%8C.mp3" },
            { name: "灵乌路空-灵知的太阳信仰", url: "https://wyppony.github.io/touhoumusic/%E7%81%B5%E7%9F%A5%E7%9A%84%E5%A4%AA%E9%98%B3%E4%BF%A1%E4%BB%B0.mp3" },
            { name: "古明地恋-哈德曼的妖怪少女", url: "https://wyppony.github.io/touhoumusic/%E5%93%88%E5%BE%B7%E6%9B%BC%E7%9A%84%E5%A6%96%E6%80%AA%E5%B0%91%E5%A5%B3.mp3" },
            { name: "绯想天-东方绯想天", url: "https://wyppony.github.io/touhoumusic/%E4%B8%9C%E6%96%B9%E7%BB%AF%E6%83%B3%E5%A4%A9.mp3" },
            { name: "绯想天-冷吟闲醉", url: "https://wyppony.github.io/touhoumusic/%E5%86%B7%E5%90%9F%E9%97%B2%E9%86%89.mp3" },
            { name: "比那名居天子-有顶天变", url: "https://wyppony.github.io/touhoumusic/%E6%9C%89%E9%A1%B6%E5%A4%A9%E5%8F%98.mp3" },
            { name: "星莲船-春之港湾", url: "https://wyppony.github.io/touhoumusic/%E6%98%A5%E4%B9%8B%E6%B8%AF%E6%B9%BE.mp3" },
            { name: "圣白莲-感情的摩天楼", url: "https://wyppony.github.io/touhoumusic/%E6%84%9F%E6%83%85%E7%9A%84%E6%91%A9%E5%A4%A9%E6%A5%BC.mp3" },
            { name: "神灵庙-欲望加速", url: "https://wyppony.github.io/touhoumusic/%E6%AC%B2%E6%9C%9B%E5%8A%A0%E9%80%9F.mp3" },
            { name: "少名针妙丸-辉光之针的小人族", url: "https://wyppony.github.io/touhoumusic/%E8%BE%89%E5%85%89%E4%B9%8B%E9%92%88%E7%9A%84%E5%B0%8F%E4%BA%BA%E6%97%8F.mp3" },
            { name: "绀珠传-宇宙巫女现身", url: "https://wyppony.github.io/touhoumusic/%E5%AE%87%E5%AE%99%E5%B7%AB%E5%A5%B3%E7%8E%B0%E8%BA%AB.mp3" },
            { name: "绀珠传-忘不了，那曾依藉的绿意", url: "https://wyppony.github.io/touhoumusic/%E5%BF%98%E4%B8%8D%E4%BA%86%EF%BC%8C%E9%82%A3%E6%9B%BE%E4%BE%9D%E8%97%89%E7%9A%84%E7%BB%BF%E6%84%8F.mp3" },
            { name: "清兰-兔已着陆", url: "https://wyppony.github.io/touhoumusic/%E5%85%94%E5%B7%B2%E7%9D%80%E9%99%86.mp3" },
            { name: "绀珠传-飞翔于宇宙的不可思议巫女", url: "https://wyppony.github.io/touhoumusic/%E9%A3%9E%E7%BF%94%E4%BA%8E%E5%AE%87%E5%AE%99%E7%9A%84%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AE%AE%E5%B7%AB%E5%A5%B3.mp3" },
            { name: "克劳恩皮丝-星条旗的小丑", url: "https://wyppony.github.io/touhoumusic/%E6%98%9F%E6%9D%A1%E6%97%97%E7%9A%84%E5%B0%8F%E4%B8%91.mp3" },
            { name: "绀珠传-故乡之星，倒映之海", url: "https://wyppony.github.io/touhoumusic/%E6%95%85%E4%B9%A1%E4%B9%8B%E6%98%9F%EF%BC%8C%E5%80%92%E6%98%A0%E4%B9%8B%E6%B5%B7.mp3" },
            { name: "纯狐-心之所在", url: "https://wyppony.github.io/touhoumusic/%E5%BF%83%E4%B9%8B%E6%89%80%E5%9C%A8.mp3" },
            { name: "爱塔妮缇拉尔瓦-仲夏的妖精梦", url: "https://wyppony.github.io/touhoumusic/%E7%9C%9F%E5%A4%8F%E7%9A%84%E5%A6%96%E7%B2%BE%E6%A2%A6.mp3" },
            { name: "天空璋-秘神摩多罗", url: "https://wyppony.github.io/touhoumusic/%E7%A7%98%E7%A5%9E%E6%91%A9%E5%A4%9A%E7%BD%97.mp3" },
            { name: "埴安神袿姬-寄世界于偶像", url: "https://wyppony.github.io/touhoumusic/%E5%AF%84%E4%B8%96%E7%95%8C%E4%BA%8E%E5%81%B6%E5%83%8F.mp3" },
            { name: "豪德寺三花-大吉猫咪", url: "https://wyppony.github.io/touhoumusic/%E5%A4%A7%E5%90%89%E7%8C%AB%E5%92%AA.mp3" },
            { name: "虹龙洞-日渐荒废的工业遗址", url: "https://wyppony.github.io/touhoumusic/%E6%97%A5%E6%B8%90%E8%8D%92%E5%BA%9F%E7%9A%84%E5%B7%A5%E4%B8%9A%E9%81%97%E5%9D%80.mp3" },
            { name: "虹龙洞-渴盼已久的逢魔之时", url: "https://wyppony.github.io/touhoumusic/%E6%B8%B4%E7%9B%BC%E5%B7%B2%E4%B9%85%E7%9A%84%E9%80%A2%E9%AD%94%E4%B9%8B%E6%97%B6.mp3" },
            { name: "天弓千亦-熙攘市场今何在", url: "https://wyppony.github.io/touhoumusic/%E7%86%99%E6%94%98%E5%B8%82%E5%9C%BA%E4%BB%8A%E4%BD%95%E5%9C%A8.mp3" },
            { name: "博丽灵梦-世界万物皆可爱", url: "https://wyppony.github.io/touhoumusic/%E4%B8%96%E7%95%8C%E4%B8%87%E7%89%A9%E7%9A%86%E5%8F%AF%E7%88%B1.mp3" },
            { name: "日白残无-越轨者们的无碍光", url: "https://wyppony.github.io/touhoumusic/%E8%B6%8A%E8%BD%A8%E8%80%85%E4%BB%AC%E7%9A%84%E6%97%A0%E7%A2%8D%E5%85%89.mp3" },
            { name: "爱塔妮缇拉尔瓦-仲夏的妖精梦", url: "https://wyppony.github.io/touhoumusic/%E7%9C%9F%E5%A4%8F%E7%9A%84%E5%A6%96%E7%B2%BE%E6%A2%A6.mp3" }
];

/* ---------- 站点纪念日（主页月历标注） ----------
 * 结构：{ "M-D": { name: "节日名", desc: "说明" } }
 * 可自行增改。 */
const MEMORIAL_DAYS = {
    "7-14":  { name: "🏠 建站纪念日", desc: "2025年7月14日建立本站" },
    "7-12":  { name: "📜 V1.0预览版日", desc: "2025年7月12日制作预览版" },
    "9-9":   { name: "❄️ 琪露诺日", desc: "最强⑨的专属节日" }
};

/* ---------- 全站导航（侧边菜单） ---------- */
const NAV_LINKS = [
    { label: "关于本网站的使用说明", url: "sysm.html" },
    { label: "关于⑨教", url: "https://wyppony.github.io/lovebaka/9jiao.html" },
    { label: "关于pony社", url: "https://wyppony.github.io/lovebaka/pony-anime-club.html" },
    { label: "琪露诺计算器", url: "https://wyppony.github.io/lovebaka/cirno-calculator.html" },
    { label: "琪露诺旋转器", url: "琪露诺旋转器/琪露诺旋转器2.html" },
    { label: "Fumo拆拆乐", url: "琪露诺旋转器/fumo拆拆乐.html" },
    { label: "琪露诺语音助手", url: "琪露诺语音助手/琪露诺语音助手.html" },
    { label: "寒境少女绘幻想", url: "寒境少女绘幻想.html" },
    { label: "东方认知测试", url: "question.html" },
    { label: "游戏室", url: "https://wyppony.github.io/lovebaka/game.html" },
    { label: "多媒体留存器", url: "https://wyppony.github.io/touhouphotos/" },
    { label: "工具箱", url: "https://wyppony.github.io/lovebaka/tool-box.html" },
    { label: "随机有趣的网页", url: "随机有趣的网页.html" },
    { label: "东方符卡查询器", url: "符卡查询器2.html" },
    { label: "东方符卡查询器", url: "符卡查询器2.html" },
    { label: "东方本命角色测试", url: "http://readalittle.net/sort/" },
    { label: "东方原曲认知链接", url: "https://quiz.touhou.page/" },
    { label: "莉莉云东方下载链接", url: "https://cloud.lilywhite.cc/" },
    { label: "糯米诺诺弹幕视频网站", url: "https://www.nuomill.com/" },
    { label: "支持作者", url: "支持作者.html" }
];

/* ---------- 八大板块 ---------- */
const BOXES = [
    { img: "1.jpg",    title: "关于琪露诺", sub: "认识最强⑨", url: "关于琪露诺.html" },
    { img: "2.jpg",    title: "画廊",       sub: "琪露诺美图", url: "https://wyppony.github.io/touhouphotos/cirno.html" },
    { img: "4.png",    title: "音乐",       sub: "东方原曲室", url: "https://wyppony.github.io/touhoumusic/" },
    { img: "3.jpg",    title: "二创视频",   sub: "收藏的快乐", url: "https://wyppony.github.io/touhouvideos/" },
    { img: "head4.jpg",title: "入教测试",   sub: "⑨分即厨力", url: "https://wyppony.github.io/lovebaka/rjcs.html" },
    { img: "head5.jpg",title: "抽幻存神签", sub: "今日运势",   url: "https://wyppony.github.io/touhouphotos/hcsq.html" },
    { img: "head6.jpg",title: "东方下载器", sub: "资源下载",   url: "https://wyppony.github.io/lovebaka/download.html" },
    { img: "head7.jpg",title: "论坛与维基", sub: "爱⑨之家Wiki（需翻墙）", url: "https://lovebaka.fandom.com/zh/wiki/爱⑨之家-琪露诺_Wiki" }
];

/* ---------- 更新日志 ---------- */
const UPDATE_LOG = [
    { date: "2026.09.26（V3.4）", text: "上线了函数图像生成器1.0" },
    { date: "2026.05.05（V3.1）", text: "更新了fumo抽取机，入教问答" },
    { date: "2026.05.01（V3.0）", text: "咱更新了很多NB的功能" },
    { date: "2025.09.16（V2.0）", text: "主页重大更新，新增琪露诺图片库、东方下载器等功能" }
];

/* ---------- 公告跑马灯内容 ---------- */
const TICKER = [
    "❄ 欢迎来到爱⑨之家 · 琪露诺粉丝站！",
    "📢 本站由驴德来一人制作维护，欢迎同好指正 BUG",
    "☡ 东方project 二次创作 · 仅供学习研究 · 侵权删",
    "✉ 加入我们？点击入教测试，9分即得资格！",
    "🌙 准确数据请以 thbwiki.cc 为准"
];

/* 将共享数据挂载到 window，供各脚本安全引用（const 不会自动挂到 window） */
window.CAROUSEL_SLIDES = CAROUSEL_SLIDES;
window.CAROUSEL_INTERVAL = CAROUSEL_INTERVAL;
window.kirinoImgLib = kirinoImgLib;
window.musicLib = musicLib;
window.MEMORIAL_DAYS = MEMORIAL_DAYS;
window.NAV_LINKS = NAV_LINKS;
window.BOXES = BOXES;
window.UPDATE_LOG = UPDATE_LOG;
window.TICKER = TICKER;
//（ ）
