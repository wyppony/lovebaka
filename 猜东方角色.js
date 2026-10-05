/* ===== 猜东方角色 · 游戏逻辑 ===== */
const CHARACTERS = [{"name": "博丽灵梦", "year": 1997, "work": "东方灵异传", "hair": "黑色/棕色", "enemy": "是 四面", "self": "是", "race": "人类"}, {"name": "雾雨魔理沙", "year": 1997, "work": "东方封魔录", "hair": "金色", "enemy": "是 四面", "self": "是", "race": "人类"}, {"name": "蕾米莉亚·斯卡蕾特", "year": 2002, "work": "东方红魔乡", "hair": "蓝色", "enemy": "是 六面", "self": "是", "race": "吸血鬼"}, {"name": "小恶魔", "year": 2002, "work": "东方红魔乡", "hair": "红色", "enemy": "是 四面", "self": "否", "race": "恶魔"}, {"name": "大妖精", "year": 2002, "work": "东方红魔乡", "hair": "绿色", "enemy": "是 二面", "self": "否", "race": "妖精"}, {"name": "琪露诺", "year": 2002, "work": "东方红魔乡", "hair": "蓝色", "enemy": "是 二面", "self": "是", "race": "妖精"}, {"name": "帕秋莉·诺蕾姬", "year": 2002, "work": "东方红魔乡", "hair": "紫色", "enemy": "是 四面", "self": "是", "race": "魔法使"}, {"name": "露米娅", "year": 2002, "work": "东方红魔乡", "hair": "金色", "enemy": "是 一面", "self": "否", "race": "妖怪"}, {"name": "红美铃", "year": 2002, "work": "东方红魔乡", "hair": "红色", "enemy": "是 三面", "self": "是", "race": "妖怪"}, {"name": "十六夜咲夜", "year": 2002, "work": "东方红魔乡", "hair": "白色/银色/灰色", "enemy": "是 五面", "self": "是", "race": "人类"}, {"name": "芙兰朵露·斯卡蕾特", "year": 2002, "work": "东方红魔乡", "hair": "金色", "enemy": "是 EX/PH面", "self": "是", "race": "吸血鬼"}, {"name": "蕾蒂·霍瓦特洛克", "year": 2003, "work": "东方妖妖梦", "hair": "白色/蓝色", "enemy": "是 一面", "self": "否", "race": "妖怪"}, {"name": "梅露兰·普莉兹姆利巴", "year": 2003, "work": "东方妖妖梦", "hair": "白色/蓝色", "enemy": "是 四面", "self": "是", "race": "妖怪/骚灵"}, {"name": "橙", "year": 2003, "work": "东方妖妖梦", "hair": "棕色", "enemy": "是 二面", "self": "否", "race": "妖怪"}, {"name": "莉莉霍瓦特", "year": 2003, "work": "东方妖妖梦", "hair": "金色", "enemy": "是 三面/四面", "self": "否", "race": "妖精"}, {"name": "魂魄妖梦", "year": 2003, "work": "东方妖妖梦", "hair": "白色/银色", "enemy": "是 五面", "self": "是", "race": "半人半灵"}, {"name": "八云蓝", "year": 2003, "work": "东方妖妖梦", "hair": "金色", "enemy": "是 EX/PH面", "self": "是", "race": "妖怪/妖兽"}, {"name": "露娜萨·普莉兹姆利巴", "year": 2003, "work": "东方妖妖梦", "hair": "金色", "enemy": "是 四面", "self": "是", "race": "妖怪/骚灵"}, {"name": "莉莉卡·普莉兹姆利巴", "year": 2003, "work": "东方妖妖梦", "hair": "棕色", "enemy": "是 四面", "self": "是", "race": "妖怪/骚灵"}, {"name": "爱丽丝·玛格特洛依德", "year": 2003, "work": "东方妖妖梦", "hair": "金色", "enemy": "是 三面", "self": "是", "race": "妖怪/魔法使"}, {"name": "西行寺幽幽子", "year": 2003, "work": "东方妖妖梦", "hair": "粉色", "enemy": "是 六面", "self": "是", "race": "亡灵"}, {"name": "八云紫", "year": 2003, "work": "东方妖妖梦", "hair": "金色", "enemy": "是 EX/PH面", "self": "是", "race": "妖怪"}, {"name": "米斯蒂娅·萝蕾拉", "year": 2004, "work": "东方永夜抄", "hair": "粉色", "enemy": "是 二面", "self": "是", "race": "妖怪"}, {"name": "蓬莱山辉夜", "year": 2004, "work": "东方永夜抄", "hair": "黑色", "enemy": "是 六面", "self": "否", "race": "月人"}, {"name": "铃仙·优昙华院·因幡", "year": 2004, "work": "东方永夜抄", "hair": "紫色", "enemy": "是 五面", "self": "是", "race": "月兔"}, {"name": "莉格露·奈特巴格", "year": 2004, "work": "东方永夜抄", "hair": "绿色", "enemy": "是 一面", "self": "否", "race": "妖怪"}, {"name": "八意永琳", "year": 2004, "work": "东方永夜抄", "hair": "白色/银色", "enemy": "是 六面", "self": "否", "race": "月人"}, {"name": "上白泽慧音", "year": 2004, "work": "东方永夜抄", "hair": "白色/蓝色/绿色", "enemy": "是 三面/EX/PH面", "self": "否", "race": "半人/半白泽"}, {"name": "因幡天为", "year": 2004, "work": "东方永夜抄", "hair": "黑色", "enemy": "是 五面", "self": "是", "race": "妖怪/妖怪兔"}, {"name": "藤原妹红", "year": 2004, "work": "东方永夜抄", "hair": "白色", "enemy": "是 EX/PH面", "self": "是", "race": "人类"}, {"name": "梅蒂欣·梅兰可莉", "year": 2005, "work": "东方花映塚", "hair": "金色", "enemy": "不是", "self": "是", "race": "人偶"}, {"name": "四季映姬·夜摩仙那度", "year": 2005, "work": "东方花映塚", "hair": "绿色", "enemy": "不是", "self": "是", "race": "阎魔"}, {"name": "风见幽香", "year": 2005, "work": "东方花映塚", "hair": "绿色", "enemy": "不是", "self": "是", "race": "妖怪"}, {"name": "小野塚小町", "year": 2005, "work": "东方花映塚", "hair": "红色", "enemy": "不是", "self": "是", "race": "死神"}, {"name": "河城荷取", "year": 2007, "work": "东方风神录", "hair": "蓝色", "enemy": "是 三面", "self": "是", "race": "河童"}, {"name": "东风谷早苗", "year": 2007, "work": "东方风神录", "hair": "绿色", "enemy": "是 五面/EX/PH面", "self": "是", "race": "人类"}, {"name": "秋静叶", "year": 2007, "work": "东方风神录", "hair": "金色", "enemy": "是 一面", "self": "否", "race": "神明"}, {"name": "洩矢诹访子", "year": 2007, "work": "东方风神录", "hair": "金色", "enemy": "是 EX/PH面", "self": "是", "race": "神明"}, {"name": "键山雏", "year": 2007, "work": "东方风神录", "hair": "绿色", "enemy": "是 二面", "self": "否", "race": "神明"}, {"name": "秋穰子", "year": 2007, "work": "东方风神录", "hair": "金色", "enemy": "是 一面", "self": "否", "race": "神明"}, {"name": "八坂神奈子", "year": 2007, "work": "东方风神录", "hair": "蓝色/紫色", "enemy": "是 六面/EX/PH面", "self": "是", "race": "神明"}, {"name": "犬走椛", "year": 2007, "work": "东方风神录", "hair": "白色", "enemy": "是 四面", "self": "否", "race": "天狗/白狼天狗"}, {"name": "火焰猫燐", "year": 2008, "work": "东方地灵殿", "hair": "红色", "enemy": "是 四面/五面/六面", "self": "是", "race": "妖怪/火车"}, {"name": "水桥帕露西", "year": 2008, "work": "东方地灵殿", "hair": "金色", "enemy": "是 二面", "self": "否", "race": "妖怪"}, {"name": "古明地觉", "year": 2008, "work": "东方地灵殿", "hair": "粉色", "enemy": "是 四面", "self": "否", "race": "妖怪/觉"}, {"name": "琪斯美", "year": 2008, "work": "东方地灵殿", "hair": "绿色", "enemy": "是 一面", "self": "否", "race": "妖怪"}, {"name": "星熊勇仪", "year": 2008, "work": "东方地灵殿", "hair": "金色", "enemy": "是 三面", "self": "否", "race": "鬼"}, {"name": "灵乌路空", "year": 2008, "work": "东方地灵殿", "hair": "黑色", "enemy": "是 六面", "self": "是", "race": "地狱鸦"}, {"name": "黑谷山女", "year": 2008, "work": "东方地灵殿", "hair": "金色", "enemy": "是 一面", "self": "否", "race": "妖怪/土蜘蛛"}, {"name": "古明地恋", "year": 2008, "work": "东方地灵殿", "hair": "绿色", "enemy": "是 EX/PH面", "self": "是", "race": "妖怪/觉"}, {"name": "娜兹玲", "year": 2009, "work": "东方星莲船", "hair": "灰色", "enemy": "是 一面/五面", "self": "是", "race": "妖怪/妖怪鼠"}, {"name": "圣白莲", "year": 2009, "work": "东方星莲船", "hair": "紫色/金色", "enemy": "是 六面", "self": "是", "race": "魔法使"}, {"name": "封兽鵺", "year": 2009, "work": "东方星莲船", "hair": "黑色", "enemy": "是 EX/PH面", "self": "否", "race": "妖怪"}, {"name": "村纱水蜜", "year": 2009, "work": "东方星莲船", "hair": "黑色", "enemy": "是 四面", "self": "是", "race": "幽灵"}, {"name": "多多良小伞", "year": 2009, "work": "东方星莲船", "hair": "蓝色", "enemy": "是 二面/三面/EX/PH面", "self": "否", "race": "付葬神/伞妖"}, {"name": "云居一轮", "year": 2009, "work": "东方星莲船", "hair": "蓝色", "enemy": "是 三面", "self": "是", "race": "妖怪"}, {"name": "寅丸星", "year": 2009, "work": "东方星莲船", "hair": "金色/黑色", "enemy": "是 五面", "self": "否", "race": "妖怪"}, {"name": "霍青娥", "year": 2011, "work": "东方神灵庙", "hair": "蓝色", "enemy": "是 四面", "self": "否", "race": "邪仙"}, {"name": "物部布都", "year": 2011, "work": "东方神灵庙", "hair": "灰色", "enemy": "是 五面", "self": "是", "race": "人类/尸解仙"}, {"name": "幽谷响子", "year": 2011, "work": "东方神灵庙", "hair": "蓝色", "enemy": "是 二面", "self": "否", "race": "妖怪"}, {"name": "苏我屠自古", "year": 2011, "work": "东方神灵庙", "hair": "绿色", "enemy": "是 五面", "self": "否", "race": "亡灵"}, {"name": "宫古芳香", "year": 2011, "work": "东方神灵庙", "hair": "紫色", "enemy": "是 三面", "self": "否", "race": "僵尸"}, {"name": "二岩猯藏", "year": 2011, "work": "东方神灵庙", "hair": "棕色", "enemy": "是 EX/PH面", "self": "是", "race": "妖怪/妖怪狸"}, {"name": "丰聪耳神子", "year": 2011, "work": "东方神灵庙", "hair": "金色", "enemy": "是 六面", "self": "是", "race": "圣人"}, {"name": "今泉影狼", "year": 2013, "work": "东方辉针城", "hair": "棕色", "enemy": "是 三面", "self": "否", "race": "妖怪/狼女"}, {"name": "九十九弁弁", "year": 2013, "work": "东方辉针城", "hair": "紫色", "enemy": "是 四面/EX/PH面", "self": "否", "race": "付葬神"}, {"name": "堀川雷鼓", "year": 2013, "work": "东方辉针城", "hair": "红色", "enemy": "是 EX/PH面", "self": "否", "race": "付葬神"}, {"name": "若鹭姬", "year": 2013, "work": "东方辉针城", "hair": "蓝色", "enemy": "是 一面", "self": "否", "race": "妖怪/人鱼"}, {"name": "鬼人正邪", "year": 2013, "work": "东方辉针城", "hair": "黑色/红色/白色", "enemy": "是 五面", "self": "是", "race": "天邪鬼"}, {"name": "九十九八桥", "year": 2013, "work": "东方辉针城", "hair": "棕色", "enemy": "是 四面/EX/PH面", "self": "否", "race": "付葬神"}, {"name": "赤蛮奇", "year": 2013, "work": "东方辉针城", "hair": "红色", "enemy": "是 二面", "self": "否", "race": "妖怪/飞头蛮"}, {"name": "少名针妙丸", "year": 2013, "work": "东方辉针城", "hair": "紫色", "enemy": "是 六面", "self": "是", "race": "小人"}, {"name": "清兰", "year": 2015, "work": "东方绀珠传", "hair": "蓝色", "enemy": "是 一面", "self": "是", "race": "月兔"}, {"name": "哆来咪·苏伊特", "year": 2015, "work": "东方绀珠传", "hair": "蓝色", "enemy": "是 三面/EX/PH面", "self": "是", "race": "妖怪/貘"}, {"name": "铃瑚", "year": 2015, "work": "东方绀珠传", "hair": "金色", "enemy": "是 二面", "self": "否", "race": "月兔"}, {"name": "赫卡提亚·拉碧斯拉祖利", "year": 2015, "work": "东方绀珠传", "hair": "红色/蓝色/金色", "enemy": "是 EX/PH面", "self": "否", "race": "神明"}, {"name": "克劳恩皮丝", "year": 2015, "work": "东方绀珠传", "hair": "金色", "enemy": "是 五面", "self": "否", "race": "妖精"}, {"name": "稀神探女", "year": 2015, "work": "东方绀珠传", "hair": "白色/银色", "enemy": "是 四面", "self": "否", "race": "月人"}, {"name": "纯狐", "year": 2015, "work": "东方绀珠传", "hair": "金色", "enemy": "是 六面/EX/PH面", "self": "否", "race": "神灵"}, {"name": "矢田寺成美", "year": 2017, "work": "东方天空璋", "hair": "黑色", "enemy": "是 四面", "self": "否", "race": "魔法使"}, {"name": "坂田合欢", "year": 2017, "work": "东方天空璋", "hair": "白色", "enemy": "是 二面", "self": "否", "race": "山姥"}, {"name": "丁礼田舞", "year": 2017, "work": "东方天空璋", "hair": "绿色", "enemy": "是 五面/EX/PH面", "self": "否", "race": "人类/？"}, {"name": "高丽野阿吽", "year": 2017, "work": "东方天空璋", "hair": "绿色", "enemy": "是 三面", "self": "是", "race": "妖怪"}, {"name": "尔子田里乃", "year": 2017, "work": "东方天空璋", "hair": "棕色", "enemy": "是 五面/EX/PH面", "self": "否", "race": "人类/？"}, {"name": "爱塔妮缇拉尔瓦", "year": 2017, "work": "东方天空璋", "hair": "蓝色", "enemy": "是 一面", "self": "否", "race": "妖精"}, {"name": "摩多罗隐岐奈", "year": 2017, "work": "东方天空璋", "hair": "金色", "enemy": "是 六面/EX/PH面", "self": "否", "race": "神明/秘神"}, {"name": "庭渡久侘歌", "year": 2019, "work": "东方鬼形兽", "hair": "金色", "enemy": "是 三面/EX/PH面", "self": "否", "race": "神明"}, {"name": "埴安神袿姬", "year": 2019, "work": "东方鬼形兽", "hair": "蓝色", "enemy": "是 六面", "self": "否", "race": "神明"}, {"name": "吉吊八千慧", "year": 2019, "work": "东方鬼形兽", "hair": "金色", "enemy": "是 四面", "self": "是", "race": "妖怪"}, {"name": "戎璎花", "year": 2019, "work": "东方鬼形兽", "hair": "白色/粉色", "enemy": "是 一面", "self": "否", "race": "水子之灵"}, {"name": "牛崎润美", "year": 2019, "work": "东方鬼形兽", "hair": "黑色/白色", "enemy": "是 二面", "self": "否", "race": "妖怪/牛鬼"}, {"name": "骊驹早鬼", "year": 2019, "work": "东方鬼形兽", "hair": "黑色", "enemy": "是 EX/PH面", "self": "是", "race": "妖怪"}, {"name": "杖刀偶磨弓", "year": 2019, "work": "东方鬼形兽", "hair": "金色", "enemy": "是 五面", "self": "否", "race": "埴轮"}, {"name": "驹草山如", "year": 2021, "work": "东方虹龙洞", "hair": "紫色", "enemy": "是 三面", "self": "否", "race": "妖怪/山女郎"}, {"name": "菅牧典", "year": 2021, "work": "东方虹龙洞", "hair": "金色", "enemy": "是 五面/六面/EX/PH面", "self": "是", "race": "妖怪/管狐"}, {"name": "姬虫百百世", "year": 2021, "work": "东方虹龙洞", "hair": "灰色", "enemy": "是 EX/PH面", "self": "否", "race": "妖怪/大蜈蚣"}, {"name": "饭纲丸龙", "year": 2021, "work": "东方虹龙洞", "hair": "蓝色/黑色", "enemy": "是 五面", "self": "否", "race": "天狗/大天狗"}, {"name": "山城高岭", "year": 2021, "work": "东方虹龙洞", "hair": "绿色", "enemy": "是 二面", "self": "否", "race": "山童"}, {"name": "玉造魅须丸", "year": 2021, "work": "东方虹龙洞", "hair": "金色", "enemy": "是 四面", "self": "否", "race": "神明"}, {"name": "天弓千亦", "year": 2021, "work": "东方虹龙洞", "hair": "紫色", "enemy": "是 六面", "self": "否", "race": "神明"}, {"name": "豪德寺三花", "year": 2021, "work": "东方虹龙洞", "hair": "白色/金色", "enemy": "是 一面", "self": "否", "race": "妖怪/招财猫"}, {"name": "孙美天", "year": 2023, "work": "东方兽王园", "hair": "棕色", "enemy": "不是", "self": "是", "race": "妖怪"}, {"name": "豫母都日狭美", "year": 2023, "work": "东方兽王园", "hair": "紫色", "enemy": "不是", "self": "是", "race": "妖怪/黄泉丑女"}, {"name": "天火人血枪", "year": 2023, "work": "东方兽王园", "hair": "紫色", "enemy": "不是", "self": "是", "race": "妖怪"}, {"name": "三头慧之子", "year": 2023, "work": "东方兽王园", "hair": "紫色/白色", "enemy": "不是", "self": "是", "race": "妖怪"}, {"name": "日白残无", "year": 2023, "work": "东方兽王园", "hair": "黑色", "enemy": "不是", "self": "是", "race": "鬼/人鬼"}, {"name": "斯塔萨菲雅", "year": 2005, "work": "东方三月精", "hair": "黑色", "enemy": "不是", "self": "否", "race": "妖精"}, {"name": "露娜切露德", "year": 2005, "work": "东方三月精", "hair": "金色", "enemy": "不是", "self": "否", "race": "妖精"}, {"name": "桑尼米尔克", "year": 2005, "work": "东方三月精", "hair": "橙色", "enemy": "不是", "self": "否", "race": "妖精"}, {"name": "绵月丰姬", "year": 2007, "work": "东方儚月抄", "hair": "金色", "enemy": "是 五面", "self": "否", "race": "月人"}, {"name": "绵月依姬", "year": 2007, "work": "东方儚月抄", "hair": "紫色", "enemy": "不是", "self": "否", "race": "月人"}, {"name": "Reisen", "year": 2007, "work": "东方儚月抄", "hair": "蓝色", "enemy": "不是", "self": "否", "race": "月兔"}, {"name": "茨木华扇", "year": 2011, "work": "东方茨歌仙", "hair": "粉色", "enemy": "不是", "self": "是", "race": "鬼/仙人"}, {"name": "本居小铃", "year": 2012, "work": "东方铃奈庵", "hair": "金色", "enemy": "不是", "self": "否", "race": "人类"}, {"name": "奥野田美宵", "year": 2019, "work": "东方醉蝶华", "hair": "粉色", "enemy": "不是", "self": "否", "race": "座敷童子"}, {"name": "宫出口瑞灵", "year": 2019, "work": "东方智灵奇传", "hair": "蓝色", "enemy": "不是", "self": "否", "race": "怨灵"}, {"name": "稗田阿求", "year": 2006, "work": "东方求闻史纪", "hair": "紫色", "enemy": "不是", "self": "否", "race": "人类"}, {"name": "伊吹萃香", "year": 2004, "work": "东方萃梦想", "hair": "棕色", "enemy": "不是", "self": "是", "race": "鬼"}, {"name": "永江衣玖", "year": 2008, "work": "东方绯想天", "hair": "紫色", "enemy": "不是", "self": "是", "race": "妖怪"}, {"name": "比那名居天子", "year": 2008, "work": "东方绯想天", "hair": "蓝色", "enemy": "不是", "self": "是", "race": "天人"}, {"name": "秦心", "year": 2013, "work": "东方心绮楼", "hair": "粉色", "enemy": "不是", "self": "是", "race": "面气灵"}, {"name": "宇佐见堇子", "year": 2015, "work": "东方深秘录", "hair": "棕色", "enemy": "不是", "self": "是", "race": "人类"}, {"name": "依神紫苑", "year": 2017, "work": "东方凭依华", "hair": "蓝色", "enemy": "不是", "self": "是", "race": "疾病神"}, {"name": "依神女苑", "year": 2017, "work": "东方凭依华", "hair": "棕色", "enemy": "不是", "self": "是", "race": "疾病神"}, {"name": "饕餮尤魔", "year": 2021, "work": "东方刚欲异闻", "hair": "白色", "enemy": "不是", "self": "是", "race": "妖怪"}, {"name": "玛艾露贝莉·赫恩", "year": 2003, "work": "莲台野夜行", "hair": "金色", "enemy": "不是", "self": "否", "race": "人类"}, {"name": "宇佐见莲子", "year": 2003, "work": "莲台野夜行", "hair": "棕色", "enemy": "不是", "self": "否", "race": "人类"}, {"name": "无名的读书妖怪", "year": 2004, "work": "东方香霖堂", "hair": "紫色/白色", "enemy": "不是", "self": "否", "race": "妖怪"}, {"name": "森近霖之助", "year": 2004, "work": "东方香霖堂", "hair": "白色", "enemy": "不是", "self": "否", "race": "人类"}, {"name": "射命丸文", "year": 2005, "work": "东方文花帖", "hair": "黑色", "enemy": "是 四面", "self": "是", "race": "天狗/鸦天狗"}, {"name": "姬海棠果", "year": 2010, "work": "东方文花帖DS", "hair": "棕色", "enemy": "不是", "self": "是", "race": "天狗/鸦天狗"}];

/* ---------- 工具 ---------- */
const $ = id => document.getElementById(id);
const faceVal = {一面:1,二面:2,三面:3,四面:4,五面:5,六面:6};
function parseFaces(s){
  if(!s || s.indexOf('是')!==0) return [];
  return s.replace('是','').split('/').map(t=>t.trim()).filter(Boolean);
}
function fnum(t){ return faceVal[t]!==undefined ? faceVal[t] : (t==='EX/PH面' ? 'EX' : null); }
function zhChars(s){ return Array.from(new Set((s||'').match(/[\u4e00-\u9fff]/g)||[])); }

/* ---------- 单元格判定 ---------- */
// cls: ok=正确(绿) / near=接近(黄) / no=不符(白)
function cell(cls,text){ return {cls,text}; }
function yearCell(gy,sy){
  if(gy===sy) return cell('ok',''+gy);
  return cell('no', ''+gy+(gy<sy?'↑':'↓'));   // 猜得比答案早→↑(考虑更晚)；比答案晚→↓(考虑更早)
}
function workCell(g,s){ return cell(g===s?'ok':'no', g); }
function hairCell(g,s){
  const gs=(g||'').split('/').map(x=>x.trim()), ss=(s||'').split('/').map(x=>x.trim());
  return cell(gs.some(x=>ss.includes(x))?'ok':'no', g);
}
function enemyCell(g,s){
  const gf=parseFaces(g), sf=parseFaces(s);
  const gIs=gf.length>0, sIs=sf.length>0;
  if(!gIs && !sIs) return cell('ok','不是');
  if(gIs && sIs){
    const eq = gf.length===sf.length && gf.every(t=>sf.includes(t));
    if(eq) return cell('ok', g);
    // 只要任意一面与答案面数相同或相差 ±1 → 整格填黄（不标注具体面数，避免泄露答案）
    const anyMatch = gf.some(t=>{
      if(sf.includes(t)) return true;
      const n=fnum(t);
      if(typeof n==='number') return sf.some(st=>{const m=fnum(st); return typeof m==='number' && Math.abs(m-n)<=1;});
      return false;
    });
    return cell(anyMatch?'near':'no', g);
  }
  return cell('no', g||'不是');
}
function selfCell(g,s){ return cell(g===s?'ok':'no', g||'否'); }
function raceCell(g,s){
  if(g===s) return cell('ok',g);
  const gc=zhChars(g), sc=zhChars(s);
  return cell(gc.some(c=>sc.includes(c))?'near':'no', g);
}

/* ---------- 行构建 ---------- */
function buildRow(gc, sc){
  return {
    name: cell(gc.name===sc.name?'ok':'no', gc.name),
    year: yearCell(gc.year, sc.year),
    work: workCell(gc.work, sc.work),
    hair: hairCell(gc.hair, sc.hair),
    enemy: enemyCell(gc.enemy, sc.enemy),
    self: selfCell(gc.self, sc.self),
    race: raceCell(gc.race, sc.race),
    correct: gc.name===sc.name
  };
}

/* ---------- 渲染 ---------- */
function td(text,cls){ const e=document.createElement('td'); e.className='cell-'+cls; e.textContent=text; return e; }
function renderRow(row){
  const tb=$('tableBody');
  const tr=document.createElement('tr');
  if(row.correct) tr.className='correct-row';
  tr.appendChild(td(row.name.text, row.name.cls));
  tr.appendChild(td(row.year.text, row.year.cls));
  tr.appendChild(td(row.work.text, row.work.cls));
  tr.appendChild(td(row.hair.text, row.hair.cls));
  // 敌人面数列：整格按判定填色，不标注具体面数
  tr.appendChild(td(row.enemy.text, row.enemy.cls));
  tr.appendChild(td(row.self.text, row.self.cls));
  tr.appendChild(td(row.race.text, row.race.cls));
  tb.appendChild(tr);
}

/* ---------- 游戏状态 ---------- */
const state = { secret:null, guesses:[] };

function setMsg(type, html){ $('msg').innerHTML='<div class="msg '+type+'">'+html+'</div>'; }

function startGame(){
  state.secret = CHARACTERS[Math.floor(Math.random()*CHARACTERS.length)];
  state.guesses = [];
  $('tableBody').innerHTML='';
  $('guessCount').textContent='';
  $('answerBox').innerHTML='';
  $('guessInput').value='';
  $('guessInput').disabled=false;
  $('guessBtn').disabled=false;
  $('revealBtn').disabled=false;
  $('startBtn').disabled=true;
  setMsg('info','我选好了，请用户来猜！');
  $('guessInput').focus();
}

function submitGuess(){
  if(!state.secret){ setMsg('warn','请先点击「开始猜」'); return; }
  const name=$('guessInput').value.trim();
  if(!name){ setMsg('warn','请输入或选择一个角色名'); return; }
  const ch=CHARACTERS.find(c=>c.name===name);
  if(!ch){ setMsg('warn','角色表中没有「'+name+'」，请从下拉列表选择'); return; }
  const row=buildRow(ch, state.secret);
  state.guesses.push(row);
  renderRow(row);
  $('guessCount').textContent='已猜 '+state.guesses.length+' 次';
  if(row.correct){
    setMsg('ok','猜对了，就是'+ch.name+'！');
    $('guessInput').disabled=true; $('guessBtn').disabled=true; $('revealBtn').disabled=true; $('startBtn').disabled=false;
  } else {
    setMsg('bad','猜错了，再试试');
    $('guessInput').value=''; $('guessInput').focus();
  }
}

/* ---------- 公布答案 ---------- */
function revealAnswer(){
  if(!state.secret){ setMsg('warn','请先点击「开始猜」'); return; }
  const s=state.secret;
  $('answerBox').innerHTML = buildAnswerInfo(s);
  setMsg('info','公布正确答案：'+s.name);
  // 按猜对流程结束：表格消失，可重新开始猜
  $('tableBody').innerHTML='';
  $('guessCount').textContent='';
  $('guessInput').value='';
  $('guessInput').disabled=true; $('guessBtn').disabled=true; $('revealBtn').disabled=true;
  $('startBtn').disabled=false;
}
function buildAnswerInfo(s){
  const row=(k,v)=>'<div class="a-row"><span class="a-k">'+k+'</span><span class="a-v">'+v+'</span></div>';
  return '<div class="answer-info">'+
    '<div class="answer-name">'+s.name+'</div>'+
    '<div class="answer-grid">'+
      row('初登场年份', s.year)+
      row('初登场作品', s.work)+
      row('发色', s.hair)+
      row('是敌人吗', s.enemy)+
      row('是自机吗', s.self)+
      row('种族', s.race)+
    '</div></div>';
}

/* ---------- 初始化 ---------- */
function init(){
  const dl=$('charList');
  CHARACTERS.forEach(c=>{ const o=document.createElement('option'); o.value=c.name; dl.appendChild(o); });
  $('guessInput').addEventListener('keydown', e=>{ if(e.key==='Enter') submitGuess(); });
  $('startBtn').addEventListener('click', startGame);
  $('guessBtn').addEventListener('click', submitGuess);
  $('revealBtn').addEventListener('click', revealAnswer);
}
document.addEventListener('DOMContentLoaded', init);
//（注：内容由AI生成）
