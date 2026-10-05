/* =====================================================================
 * 爱⑨之家 - 东方角色符卡库 & 作品抽取库 (characters.js)
 * 数据来源：原主页 index.html 内嵌数据，原样迁移
 * 说明：如需增加角色，按下方格式在 touhouRoleLib 对象中追加即可
 * ===================================================================== */
/* eslint-disable */
const touhouRoleLib = {
    <!-- 主角 -->
            博丽灵梦: { 
                firstAppear: "东方灵异传(1996)",
                music: "少女绮想曲",
                wiki: "https://thbwiki.cc/博丽灵梦",
                sign: "https://wyppony.github.io/touhouphotos/128.东方幻存神签（博丽灵梦）.png",
                qImg: "东方/博丽灵梦.png",
                cards: [
            { name: "梦符「二重结界」", pos: "东方永夜抄四面，难度N" },
            { name: "梦境「二重大结界」", pos: "东方永夜抄四面，难度L" },
            { name: "灵符「梦想封印　散」", pos: "东方永夜抄四面，难度N" },
            { name: "散灵「梦想封印　寂」", pos: "东方永夜抄四面，难度L" },
            { name: "梦符「封魔阵」", pos: "东方永夜抄四面，难度N" },
            { name: "神技「八方龙杀阵」", pos: "东方永夜抄四面，难度L" },
            { name: "灵符「梦想封印　集」", pos: "东方永夜抄四面，难度N" },
            { name: "回灵「梦想封印　侘」", pos: "东方永夜抄四面，难度L" },
            { name: "境界「二重弹幕结界」", pos: "东方永夜抄四面，难度N" },
            { name: "大结界「博丽弹幕结界」", pos: "东方永夜抄四面，难度L" },
            { name: "神灵「梦想封印　瞬」", pos: "东方永夜抄四面，难度L" },
            { name: "「梦想天生」", pos: "东方永夜抄四面，难度LW" }
                ]
            },
            雾雨魔理沙: {
                firstAppear: "东方封魔录(1997)",
                music: "恋色Master Spark",
                wiki: "https://thbwiki.cc/雾雨魔理沙",
                sign: "https://wyppony.github.io/touhouphotos/127.东方幻存神签（雾雨魔理沙）.png",
                qImg: "东方/雾雨魔理沙.png",
                cards: [
            { name: "魔炮「Final Master Spark」（超究极火花）", pos: "东方永夜抄四面，难度L" },
            { name: "魔符「Milky Way」（银河）", pos: "东方永夜抄四面，难度N" },
            { name: "魔空「Asteroid Belt」（小行星带）", pos: "东方永夜抄四面，难度L" },
            { name: "魔符「Stardust Reverie」（星尘幻想）", pos: "东方永夜抄四面，难度N" },
            { name: "黑魔「Event Horizon」（黑洞边缘）", pos: "东方永夜抄四面，难度L" },
            { name: "恋符「Non-Directional Laser」（非定向光线）", pos: "东方永夜抄四面，难度N" },
            { name: "恋风「Starlight Typhoon」（星光台风）", pos: "东方永夜抄四面，难度L" },
            { name: "恋符「Master Spark」（极限火花）", pos: "东方永夜抄四面，难度N" },
            { name: "恋心「Double Spark」（二重火花）", pos: "东方永夜抄四面，难度L" },
            { name: "光符「Earth Light Ray」（地球光）", pos: "东方永夜抄四面，难度N" },
            { name: "光击「Shoot the Moon」（射月）", pos: "东方永夜抄四面，难度L" },
            { name: "魔炮「Final Spark」（究极火花）", pos: "东方永夜抄四面，难度H" },
            { name: "「Blazing Star」（彗星）", pos: "东方永夜抄四面，难度LW" }
                ]
            },
    <!-- 东方红魔乡 -->
            露米娅: {
                firstAppear: "东方红魔乡(2002)",
                music: "妖魔夜行",
                wiki: "https://thbwiki.cc/露米娅",
                sign: "https://wyppony.github.io/touhouphotos/1.东方幻存神签（露米娅）.png",
                qImg: "东方/露米娅.png",
                cards: [
                    { name: "月符「Moonlight Ray」(月光)", pos: "红魔乡一面,H/L" },
                    { name: "夜符「Night Bird」(夜雀)", pos: "红魔乡一面,E/N/H/L" },
                    { name: "暗符「Demarcation」(境界线)", pos: "红魔乡一面,E/N/H/L" }
                ]
            },
            大妖精: {
                firstAppear: "东方红魔乡(2002)",
                music: "Lunate Elf",
                wiki: "https://thbwiki.cc/大妖精",
                sign: "https://wyppony.github.io/touhouphotos/2.东方幻存神签（大妖精）.png",
                qImg: "东方/大妖精.png",
                cards: [
                    { name: "无", pos: "Null" },
                ]
            },
            琪露诺: {
                firstAppear: "东方红魔乡(2002)",
                music: "活泼的纯情小姑娘",
                wiki: "https://thbwiki.cc/琪露诺",
                sign: "https://wyppony.github.io/touhouphotos/3.东方幻存神签（琪露诺）.png",
                qImg: "东方/琪露诺.png",
                cards: [
                    { name: "冰符「Icicle Fall」（冰瀑）", pos: "东方红魔乡二面，难度N" },
                    { name: "雹符「Hailstorm」（冰雹暴风）", pos: "东方红魔乡二面，难度L" },
                    { name: "冻符「Perfect Freeze」（完美冻结）", pos: "东方红魔乡二面，难度L" },
                    { name: "雪符「Diamond Blizzard」（钻石风暴）", pos: "东方红魔乡二面，难度L" },
                    { name: "霜符「Frost Columns」（冰袭方阵）", pos: "东方妖妖梦一面，难度L" },
                    { name: "冰符「Ultimate Blizzard」", pos: "辉针城,L" }
                ]
            },
    红美铃: {
        firstAppear: "东方红魔乡(2002)",
        music: "明治十七年的上海爱丽丝",
        wiki: "https://thbwiki.cc/红美铃",
        sign: "https://wyppony.github.io/touhouphotos/4.东方幻存神签（红美铃）.png",
        qImg: "东方/红美铃.png",
        cards: [
            { name: "华符「芳华绚烂」", pos: "东方红魔乡三面，难度N" },
            { name: "华符「Selaginella 9」（卷柏9）", pos: "东方红魔乡三面，难度L" },
            { name: "虹符「彩虹的风铃」", pos: "东方红魔乡三面，难度L" },
            { name: "幻符「华想梦葛」", pos: "东方红魔乡三面，难度L" },
            { name: "彩符「彩雨」", pos: "东方红魔乡三面，难度N" },
            { name: "彩符「彩光乱舞」", pos: "东方红魔乡三面，难度L" },
            { name: "彩符「极彩台风」", pos: "东方红魔乡三面，难度L" }
        ]
    },
            小恶魔: {
                firstAppear: "东方红魔乡(2002)",
                music: "伏瓦鲁魔法图书馆",
                wiki: "https://thbwiki.cc/小恶魔",
                sign: "https://wyppony.github.io/touhouphotos/5.东方幻存神签（小恶魔）.png",
                qImg: "东方/小恶魔.png",
                cards: [
                    { name: "无", pos: "Null" },
                ]
            },
    帕秋莉诺蕾姬: {
        firstAppear: "东方红魔乡(2002)",
        music: "Locked Girl　～ 少女密室",
        wiki: "https://thbwiki.cc/帕秋莉·诺蕾姬",
        sign: "https://wyppony.github.io/touhouphotos/6.东方幻存神签（帕秋莉·诺蕾姬）.png",
        qImg: "东方/帕秋莉诺蕾姬.png",
        cards: [
            { name: "火符「Agni Radiance」（火神的光辉）", pos: "东方红魔乡四面，难度L" },
            { name: "水符「Bury in Lake」（湖葬）", pos: "东方红魔乡四面，难度L" },
            { name: "木符「Green Storm」（翠绿风暴）", pos: "东方红魔乡四面，难度L" },
            { name: "土符「Trilithon Shake」（三石塔的振动）", pos: "东方红魔乡四面，难度L" },
            { name: "金符「Silver Dragon」（银龙）", pos: "东方红魔乡四面，难度L" },
            { name: "火&土符「Lava Cromlech」（环状熔岩带）", pos: "东方红魔乡四面，难度L" },
            { name: "木&火符「Forest Blaze」（森林大火）", pos: "东方红魔乡四面，难度L" },
            { name: "水&木符「Water Elf」（水精灵）", pos: "东方红魔乡四面，难度L" },
            { name: "金&水符「Mercury Poison」（水银之毒）", pos: "东方红魔乡四面，难度L" },
            { name: "土&金符「Emerald Megalith」（翡翠巨石）", pos: "东方红魔乡四面，难度L" },
            { name: "月符「Silent Selene」（沉静的月神）", pos: "东方红魔乡四面，难度EX" },
            { name: "日符「Royal Flare」（皇家圣焰）", pos: "东方红魔乡四面，难度EX" },
            { name: "火水木金土符「贤者之石」", pos: "东方红魔乡四面，难度EX" }
        ]
    },
    十六夜咲夜: {
        firstAppear: "东方红魔乡(2002)",
        music: "月时计～ Luna Dial",
        wiki: "https://thbwiki.cc/十六夜咲夜",
        sign: "https://wyppony.github.io/touhouphotos/7.东方幻存神签（十六夜咲夜）.png",
        qImg: "东方/十六夜咲夜.png",
        cards: [
            { name: "奇术「Misdirection」（误导）", pos: "东方红魔乡五面，难度N" },
            { name: "奇术「幻惑Misdirection」（幻惑误导）", pos: "东方红魔乡五面，难度L" },
            { name: "幻在「Clock Corpse」（钟表的残骸）", pos: "东方红魔乡五面，难度N" },
            { name: "幻幽「Jack the Ludo Bile」（迷幻的杰克）", pos: "东方红魔乡五面，难度L" },
            { name: "幻象「Luna Clock」（月神之钟）", pos: "东方红魔乡五面，难度N" },
            { name: "幻世「The World」（世界）", pos: "东方红魔乡五面，难度L" },
            { name: "女仆秘技「操弄玩偶」", pos: "东方红魔乡五面，难度N" },
            { name: "女仆秘技「杀人玩偶」", pos: "东方红魔乡五面，难度L" },
            { name: "奇术「Eternal Meek」（永恒的温柔）", pos: "东方红魔乡五面，难度L" }
        ]
    },
    蕾米莉亚斯卡蕾特: {
        firstAppear: "东方红魔乡(2002)",
        music: "献给已逝公主的七重奏",
        wiki: "https://thbwiki.cc/蕾米莉亚·斯卡蕾特",
        sign: "https://wyppony.github.io/touhouphotos/8.东方幻存神签（蕾米莉亚·斯卡蕾特）.png",
        qImg: "东方/蕾米莉亚斯卡蕾特.png",
        cards: [
            { name: "天罚「Star of David」（大卫之星）", pos: "东方红魔乡六面，难度N" },
            { name: "神罚「年幼的恶魔之王」", pos: "东方红魔乡六面，难度L" },
            { name: "冥符「红色的冥界」", pos: "东方红魔乡六面，难度N" },
            { name: "狱符「千根针的针山」", pos: "东方红魔乡六面，难度L" },
            { name: "诅咒「弗拉德·特佩斯的诅咒」", pos: "东方红魔乡六面，难度N" },
            { name: "神术「吸血鬼幻想」", pos: "东方红魔乡六面，难度L" },
            { name: "红符「Scarlet Shoot」（绯红之击）", pos: "东方红魔乡六面，难度N" },
            { name: "红符「Scarlet Meister」（绯红之主）", pos: "东方红魔乡六面，难度L" },
            { name: "「Red Magic」（红魔法）", pos: "东方红魔乡六面，难度N" },
            { name: "「红色的幻想乡」", pos: "东方红魔乡六面，难度L" }
        ]
    },
    芙兰朵露斯卡蕾特: {
        firstAppear: "东方红魔乡(2002)",
        music: "U.N. Owen就是她吗？",
        wiki: "https://thbwiki.cc/芙兰朵露·斯卡蕾特",
        sign: "https://wyppony.github.io/touhouphotos/9.东方幻存神签（芙兰朵露·斯卡蕾特）.png",
        qImg: "东方/芙兰朵露斯卡蕾特.png",
        cards: [
            { name: "禁忌「Cranberry Trap」（红莓陷阱）", pos: "东方红魔乡EX面，难度EX" },
            { name: "禁忌「Laevatein」（莱瓦汀）", pos: "东方红魔乡EX面，难度EX" },
            { name: "禁忌「Four of a Kind」（四重存在）", pos: "东方红魔乡EX面，难度EX" },
            { name: "禁忌「Kagome Kagome」（笼中鸟）", pos: "东方红魔乡EX面，难度EX" },
            { name: "禁忌「恋之迷宫」", pos: "东方红魔乡EX面，难度EX" },
            { name: "禁弹「Starbow Break」（星弧破碎）", pos: "东方红魔乡EX面，难度EX" },
            { name: "禁弹「Catadioptric」（折反射）", pos: "东方红魔乡EX面，难度EX" },
            { name: "禁弹「刻着过去的钟表」", pos: "东方红魔乡EX面，难度EX" },
            { name: "秘弹「之后就一个人都没有了吗？」", pos: "东方红魔乡EX面，难度EX" },
            { name: "QED「495年的波纹」", pos: "东方红魔乡EX面，难度EX" }
        ]
    },
            冴月麟: {
                firstAppear: "东方红魔乡(2002)",
                music: "无",
                wiki: "https://thbwiki.cc/冴月麟",
                sign: "#",
                qImg: "东方/冴月麟.png",
                cards: [
                    { name: "无", pos: "Null" }
                ]
            },
    <!-- 东方妖妖梦 -->
    蕾蒂·霍瓦特洛克: {
        firstAppear: "东方妖妖梦(2003)",
        music: "Crystallize Silver",
        wiki: "https://thbwiki.cc/蕾蒂·霍瓦特洛克",
        sign: "https://wyppony.github.io/touhouphotos/10.东方幻存神签（蕾蒂·霍瓦特洛克）.png",
        qImg: "东方/蕾蒂霍瓦特洛克.png",
        cards: [
            { name: "寒符「Lingering Cold」（延长的冬日）", pos: "东方妖妖梦一面，难度L" },
            { name: "冬符「Flower Wither Away」（花之凋零）", pos: "东方妖妖梦一面，难度N" },
            { name: "白符「Undulation Ray」（波状光）", pos: "东方妖妖梦一面，难度H" },
            { name: "怪符「Table Turning」（桌灵转）", pos: "东方妖妖梦一面，难度L" }
        ]
    },
    橙: {
        firstAppear: "东方妖妖梦(2003)",
        music: "凋叶棕",
        wiki: "https://thbwiki.cc/橙",
        sign: "https://wyppony.github.io/touhouphotos/11.东方幻存神签（橙）.png",
        qImg: "东方/橙.png",
        cards: [
            { name: "仙符「凤凰卵」", pos: "东方妖妖梦二面，难度N" },
            { name: "仙符「凤凰展翅」", pos: "东方妖妖梦二面，难度L" },
            { name: "式符「飞翔晴明」", pos: "东方妖妖梦二面，难度N" },
            { name: "阴阳「道满晴明」", pos: "东方妖妖梦二面，难度H" },
            { name: "阴阳「晴明大纹」", pos: "东方妖妖梦二面，难度L" },
            { name: "天符「天仙鸣动」", pos: "东方妖妖梦二面，难度N" },
            { name: "翔符「飞翔韦驮天」", pos: "东方妖妖梦二面，难度H" },
            { name: "童符「护法天童乱舞」", pos: "东方妖妖梦二面，难度L" },
            { name: "仙符「尸解永远」", pos: "东方妖妖梦二面，难度N" },
            { name: "鬼符「鬼门金神」", pos: "东方妖妖梦二面，难度H" },
            { name: "方符「奇门遁甲」", pos: "东方妖妖梦二面，难度L" },
            { name: "鬼符「青鬼赤鬼」", pos: "东方妖妖梦二面，难度EX" },
            { name: "鬼神「飞翔毘沙门天」", pos: "东方妖妖梦二面，难度EX" }
        ]
    },
    爱丽丝·玛格特洛依德: {
        firstAppear: "东方妖妖梦(2003)",
        music: "人偶裁判　～ 玩弄人形的少女",
        wiki: "https://thbwiki.cc/爱丽丝·玛格特洛依德",
        sign: "https://wyppony.github.io/touhouphotos/12.东方幻存神签（爱丽丝·玛格特洛依德）.png",
        qImg: "东方/爱丽丝玛格特洛伊德.png",
        cards: [
            { name: "操符「少女文乐」", pos: "东方妖妖梦三面，难度L" },
            { name: "苍符「博爱的法兰西人偶」", pos: "东方妖妖梦三面，难度H" },
            { name: "苍符「博爱的奥尔良人偶」", pos: "东方妖妖梦三面，难度L" },
            { name: "红符「红发的荷兰人偶」", pos: "东方妖妖梦三面，难度N" },
            { name: "白符「白垩的俄罗斯人偶」", pos: "东方妖妖梦三面，难度L" },
            { name: "暗符「雾之伦敦人偶」", pos: "东方妖妖梦三面，难度N" },
            { name: "回符「轮回的西藏人偶」", pos: "东方妖妖梦三面，难度H" },
            { name: "雅符「春之京都人偶」", pos: "东方妖妖梦三面，难度L" },
            { name: "诅咒「魔彩光的上海人偶」", pos: "东方妖妖梦三面，难度H" },
            { name: "诅咒「上吊的蓬莱人偶」", pos: "东方妖妖梦三面，难度L" }
        ]
    },
            莉莉霍瓦特: {
                firstAppear: "东方妖妖梦(2003)",
                music: "天空的花都",
                wiki: "https://thbwiki.cc/莉莉白",
                sign: "https://wyppony.github.io/touhouphotos/13.东方幻存神签（莉莉霍瓦特）.png",
                qImg: "东方/莉莉白.png",
                cards: [
                    { name: "春符「Surprise Spring」（惊喜之春）", pos: "东方天空璋三面，难度H/L" }
                ]
            },
    露娜萨·普莉兹姆利巴: {
        firstAppear: "东方妖妖梦(2003)",
        music: "幽灵乐团　～ Phantom Ensemble",
        wiki: "https://thbwiki.cc/露娜萨·普莉兹姆利巴",
        sign: "https://wyppony.github.io/touhouphotos/14.东方幻存神签（露娜萨·普莉兹姆利巴）.png",
        qImg: "东方/露娜萨.png",
        cards: [
            { name: "骚符「Phantom Dinning」（幽灵絮语）", pos: "东方妖妖梦四面，难度N" },
            { name: "骚符「Live Poltergeist」（活着的骚灵）", pos: "东方妖妖梦四面，难度L" },
            { name: "合葬「Prism Concerto」（棱镜协奏曲）", pos: "东方妖妖梦四面，难度N" },
            { name: "骚葬「Stygian Riverside」（冥河边缘）", pos: "东方妖妖梦四面，难度L" },
            { name: "大合葬「灵车大协奏曲」", pos: "东方妖妖梦四面，难度N" },
            { name: "大合葬「灵车大协奏曲改」", pos: "东方妖妖梦四面，难度H" },
            { name: "大合葬「灵车大协奏曲怪」", pos: "东方妖妖梦四面，难度L" }
        ]
    },
    梅露兰·普莉兹姆利巴: {
        firstAppear: "东方妖妖梦(2003)",
        music: "幽灵乐团　～ Phantom Ensemble",
        wiki: "https://thbwiki.cc/梅露兰·普莉兹姆利巴",
        sign: "https://wyppony.github.io/touhouphotos/15.东方幻存神签（梅露兰·普莉兹姆利巴）.png",
        qImg: "东方/梅露兰.png",
        cards: [
            { name: "骚符「Phantom Dinning」（幽灵絮语）", pos: "东方妖妖梦四面，难度N" },
            { name: "骚符「Live Poltergeist」（活着的骚灵）", pos: "东方妖妖梦四面，难度L" },
            { name: "合葬「Prism Concerto」（棱镜协奏曲）", pos: "东方妖妖梦四面，难度N" },
            { name: "骚葬「Stygian Riverside」（冥河边缘）", pos: "东方妖妖梦四面，难度L" },
            { name: "大合葬「灵车大协奏曲」", pos: "东方妖妖梦四面，难度N" },
            { name: "大合葬「灵车大协奏曲改」", pos: "东方妖妖梦四面，难度H" },
            { name: "大合葬「灵车大协奏曲怪」", pos: "东方妖妖梦四面，难度L" }
        ]
    },
    莉莉卡·普莉兹姆利巴: {
        firstAppear: "东方妖妖梦(2003)",
        music: "幽灵乐团　～ Phantom Ensemble",
        wiki: "https://thbwiki.cc/莉莉卡·普莉兹姆利巴",
        sign: "https://wyppony.github.io/touhouphotos/16.东方幻存神签（莉莉卡·普莉兹姆利巴）.png",
        qImg: "东方/莉莉卡.png",
        cards: [
            { name: "骚符「Phantom Dinning」（幽灵絮语）", pos: "东方妖妖梦四面，难度N" },
            { name: "骚符「Live Poltergeist」（活着的骚灵）", pos: "东方妖妖梦四面，难度L" },
            { name: "合葬「Prism Concerto」（棱镜协奏曲）", pos: "东方妖妖梦四面，难度N" },
            { name: "骚葬「Stygian Riverside」（冥河边缘）", pos: "东方妖妖梦四面，难度L" },
            { name: "大合葬「灵车大协奏曲」", pos: "东方妖妖梦四面，难度N" },
            { name: "大合葬「灵车大协奏曲改」", pos: "东方妖妖梦四面，难度H" },
            { name: "大合葬「灵车大协奏曲怪」", pos: "东方妖妖梦四面，难度L" }
        ]
    },
    蕾拉·普利兹母利巴: {
        firstAppear: "东方妖妖梦(2003)",
        music: "无",
        wiki: "https://thbwiki.cc/蕾拉·普莉兹母利巴",
        sign: "#",
        qImg: "东方/蕾拉普利兹母利巴.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    魂魄妖梦: {
        firstAppear: "东方妖妖梦(2003)",
        music: "广有射怪鸟事 ～ Till When?",
        wiki: "https://thbwiki.cc/魂魄妖梦",
        sign: "https://wyppony.github.io/touhouphotos/17.东方幻存神签（魂魄妖梦）.png",
        qImg: "东方/魂魄妖梦.png",
        cards: [
            { name: "幽鬼剑「妖童饿鬼之断食」", pos: "东方妖妖梦五面，难度N" },
            { name: "饿鬼剑「饿鬼道草纸」", pos: "东方妖妖梦五面，难度H" },
            { name: "饿王剑「饿鬼十王的报应」", pos: "东方妖妖梦五面，难度L" },
            { name: "狱界剑「二百由旬之一闪」", pos: "东方妖妖梦五面，难度N" },
            { name: "狱炎剑「业风闪影阵」", pos: "东方妖妖梦五面，难度H" },
            { name: "狱神剑「业风神闪斩」", pos: "东方妖妖梦五面，难度L" },
            { name: "畜趣剑「无为无策之冥罚」", pos: "东方妖妖梦五面，难度N" },
            { name: "修罗剑「现世妄执」", pos: "东方妖妖梦五面，难度L" },
            { name: "人界剑「悟入幻想」", pos: "东方妖妖梦五面，难度N" },
            { name: "人世剑「大悟显晦」", pos: "东方妖妖梦五面，难度H" },
            { name: "人神剑「俗谛常住」", pos: "东方妖妖梦五面，难度L" },
            { name: "天上剑「天人之五衰」", pos: "东方妖妖梦五面，难度N" },
            { name: "天界剑「七魄忌讳」", pos: "东方妖妖梦五面，难度H" },
            { name: "天神剑「三魂七魄」", pos: "东方妖妖梦五面，难度L" },
            { name: "六道剑「一念无量劫」", pos: "东方妖妖梦五面，难度L" }
        ]
    },
            魂魄妖忌: {
                firstAppear: "东方妖妖梦(2003)",
                music: "无",
                wiki: "https://thbwiki.cc/魂魄妖忌",
                sign: "#",
                qImg: "东方/魂魄妖忌.png",
                cards: [
                    { name: "无", pos: "Null" }
                ]
            },
    西行寺幽幽子: {
        firstAppear: "东方妖妖梦(2003)",
        music: "幽雅地绽放吧，墨染的樱花　～ Border of Life",
        wiki: "https://thbwiki.cc/西行寺幽幽子",
        sign: "https://wyppony.github.io/touhouphotos/18.东方幻存神签（西行寺幽幽子）.png",
        qImg: "东方/西行寺幽幽子.png",
        cards: [
            { name: "亡乡「亡我乡 -彷徨的灵魂-」", pos: "东方妖妖梦六面，难度E" },
            { name: "亡乡「亡我乡 -宿罪-」", pos: "东方妖妖梦六面，难度N" },
            { name: "亡乡「亡我乡 -无道之路-」", pos: "东方妖妖梦六面，难度H" },
            { name: "亡乡「亡我乡 -自尽-」", pos: "东方妖妖梦六面，难度L" },
            { name: "亡舞「生者必灭之理 -眩惑-」", pos: "东方妖妖梦六面，难度E" },
            { name: "亡舞「生者必灭之理 -死蝶-」", pos: "东方妖妖梦六面，难度N" },
            { name: "亡舞「生者必灭之理 -毒蛾-」", pos: "东方妖妖梦六面，难度H" },
            { name: "亡舞「生者必灭之理 -魔境-」", pos: "东方妖妖梦六面，难度L" },
            { name: "华灵「Ghost Butterfly」（亡灵蝶）", pos: "东方妖妖梦六面，难度E" },
            { name: "华灵「Swallowtail Butterfly」（燕尾蝶）", pos: "东方妖妖梦六面，难度N" },
            { name: "华灵「Deep-Rooted Butterfly」（执念蝶）", pos: "东方妖妖梦六面，难度H" },
            { name: "华灵「Butterfly Delusion」（蝶妄想）", pos: "东方妖妖梦六面，难度L" },
            { name: "幽曲「埋骨于弘川 -伪灵-」", pos: "东方妖妖梦六面，难度E" },
            { name: "幽曲「埋骨于弘川 -亡灵-」", pos: "东方妖妖梦六面，难度N" },
            { name: "幽曲「埋骨于弘川 -幻灵-」", pos: "东方妖妖梦六面，难度H" },
            { name: "幽曲「埋骨于弘川 -神灵-」", pos: "东方妖妖梦六面，难度L" },
            { name: "樱符「完全墨染的樱花 -封印-」", pos: "东方妖妖梦六面，难度E" },
            { name: "樱符「完全墨染的樱花 -亡我-」", pos: "东方妖妖梦六面，难度N" },
            { name: "樱符「完全墨染的樱花 -春眠-」", pos: "东方妖妖梦六面，难度H" },
            { name: "樱符「完全墨染的樱花 -开花-」", pos: "东方妖妖梦六面，难度L" },
            { name: "「反魂蝶 -一分咲-」", pos: "东方妖妖梦六面，难度E" },
            { name: "「反魂蝶 -三分咲-」", pos: "东方妖妖梦六面，难度N" },
            { name: "「反魂蝶 -五分咲-」", pos: "东方妖妖梦六面，难度H" },
            { name: "「反魂蝶 -八分咲-」", pos: "东方妖妖梦六面，难度L" },
            { name: "符牒「死蝶之舞」", pos: "神灵庙,N" },
            { name: "符牒「死蝶之舞 - 樱花 -」", pos: "神灵庙,L" },
            { name: "幽蝶「Ghost Spot」（幽魂聚地）", pos: "神灵庙,N" },
            { name: "幽蝶「Ghost Spot - 樱花 -」（幽魂聚地 - 樱花 -）", pos: "神灵庙,L" },
            { name: "冥符「常夜樱」", pos: "神灵庙,L" },
            { name: "樱符「西行樱吹雪」", pos: "神灵庙,L" },
            { name: "樱符「樱吹雪地狱」", pos: "神灵庙,OD" }
        ]
    },
    八云蓝: {
        firstAppear: "东方妖妖梦(2003)",
        music: "少女幻葬 ～ Necro-Fantasy",
        wiki: "https://thbwiki.cc/八云蓝",
        sign: "https://wyppony.github.io/touhouphotos/19.东方幻存神签（八云蓝）.png",
        qImg: "东方/八云蓝.png",
        cards: [
            { name: "式神「仙狐思念」", pos: "东方妖妖梦EX面，难度EX" },
            { name: "式神「十二神将之宴」", pos: "东方妖妖梦EX面，难度EX" },
            { name: "式辉「狐狸妖怪激光」", pos: "东方妖妖梦EX面，难度EX" },
            { name: "式辉「迷人的四面楚歌」", pos: "东方妖妖梦EX面，难度EX" },
            { name: "式辉「天狐公主 -Illusion-」", pos: "东方妖妖梦EX面，难度EX" },
            { name: "式弹「Ultimate Buddhist」（最后的佛徒）", pos: "东方妖妖梦EX面，难度EX" },
            { name: "式弹「Unilateral Contact」（片面接触）", pos: "东方妖妖梦EX面，难度EX" },
            { name: "式神「橙」", pos: "东方妖妖梦EX面，难度EX" },
            { name: "「狐狗狸先生的契约」", pos: "东方妖妖梦EX面，难度EX" },
            { name: "幻神「饭纲权现降临」", pos: "东方妖妖梦EX面，难度EX" },
            { name: "式神「前鬼后鬼的守护」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "式神「凭依荼吉尼天」", pos: "东方妖妖梦PH面，难度PH" }
        ]
    },
    八云紫: { 
        firstAppear: "东方妖妖梦(2003)",
        music: "Necro-Fantasia",
        wiki: "https://thbwiki.cc/八云紫",
        sign: "https://wyppony.github.io/touhouphotos/20.东方幻存神签（八云紫）.png",
        qImg: "东方/八云紫.png",
        cards: [
            { name: "结界「梦境与现实的诅咒」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "结界「动与静的均衡」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "结界「光明与黑暗的网目」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "罔两「直球与曲球的梦乡」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "罔两「八云紫的神隐」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "罔两「栖息于禅寺的妖蝶」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "魍魉「二重黑死蝶」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "式神「八云蓝」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "「人类与妖怪的境界」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "结界「生与死的境界」", pos: "东方妖妖梦PH面，难度PH" },
            { name: "紫奥义「弹幕结界」", pos: "东方妖妖梦PH面，难度PH" }
        ]
    },
    <!-- 东方永夜抄 -->
            先代巫女: {
                firstAppear: "东方永夜抄(2004)",
                music: "无",
                wiki: "https://thbwiki.cc/先代巫女",
                sign: "#",
                qImg: "东方/先代巫女.png",
                cards: [
                    { name: "无", pos: "Null" }
                ]
            },
    莉格露·奈特巴格: {
        firstAppear: "东方永夜抄(2004)",
        music: "蠢动的秋月 ～ Mooned Insect",
        wiki: "https://thbwiki.cc/莉格露·奈特巴格",
        sign: "https://wyppony.github.io/touhouphotos/22.东方幻存神签（莉格露·奈特巴格）.png",
        qImg: "东方/莉格露.png",
        cards: [
            { name: "萤符「地上的流星」", pos: "东方永夜抄一面，难度H" },
            { name: "萤符「地上的彗星」", pos: "东方永夜抄一面，难度L" },
            { name: "灯符「Firefly Phenomenon」（萤光现象）", pos: "东方永夜抄一面，难度L" },
            { name: "蠢符「Little Bug」（小虫）", pos: "东方永夜抄一面，难度E" },
            { name: "蠢符「Little Bug Storm」（小虫风暴）", pos: "东方永夜抄一面，难度N" },
            { name: "蠢符「Night Bug Storm」（夜虫风暴）", pos: "东方永夜抄一面，难度H" },
            { name: "蠢符「Night Bug Tornado」（夜虫龙卷）", pos: "东方永夜抄一面，难度L" },
            { name: "隐虫「永夜蛰居」", pos: "东方永夜抄一面，难度L" },
            { name: "「不合时令的蝶雨」", pos: "东方永夜抄一面，难度LW" }
        ]
    },
    米斯蒂娅·萝蕾拉: {
        firstAppear: "东方永夜抄(2004)",
        music: "已经只能听见歌声了",
        wiki: "https://thbwiki.cc/米斯蒂娅·萝蕾拉",
        sign: "https://wyppony.github.io/touhouphotos/23.东方幻存神签（米斯蒂娅·萝蕾拉）.png",
        qImg: "东方/米斯蒂娅.png",
        cards: [
            { name: "声符「枭的夜鸣声」", pos: "东方永夜抄二面，难度N" },
            { name: "声符「木菟的咆哮」", pos: "东方永夜抄二面，难度L" },
            { name: "蛾符「天蛾的蛊道」", pos: "东方永夜抄二面，难度N" },
            { name: "毒符「毒蛾的鳞粉」", pos: "东方永夜抄二面，难度H" },
            { name: "猛毒「毒蛾的黑暗演舞」", pos: "东方永夜抄二面，难度L" },
            { name: "鹰符「Ill-Starred Dive」（祸延疾冲）", pos: "东方永夜抄二面，难度L" },
            { name: "夜盲「夜雀之歌」", pos: "东方永夜抄二面，难度L" },
            { name: "夜雀「午夜中的合唱指挥」", pos: "东方永夜抄二面，难度L" },
            { name: "「Blind Night-Bird」（失明的夜雀）", pos: "东方永夜抄二面，难度LW" }
        ]
    },
    上白泽慧音: {
        firstAppear: "东方永夜抄(2004)",
        music: "Plain Asia",
        wiki: "https://thbwiki.cc/上白泽慧音",
        sign: "https://wyppony.github.io/touhouphotos/24.东方幻存神签（上白泽慧音）.png",
        qImg: "东方/上白泽慧音.png",
        cards: [
            { name: "产灵「First Pyramid」（最初的金字塔）", pos: "东方永夜抄三面，难度L" },
            { name: "始符「Ephemerality 137」（短命的137）", pos: "东方永夜抄三面，难度L" },
            { name: "野符「武烈的危机」", pos: "东方永夜抄三面，难度E" },
            { name: "野符「将门的危机」", pos: "东方永夜抄三面，难度N" },
            { name: "野符「义满的危机」", pos: "东方永夜抄三面，难度H" },
            { name: "野符「GHQ的危机」", pos: "东方永夜抄三面，难度L" },
            { name: "国符「三种神器　剑」", pos: "东方永夜抄三面，难度E" },
            { name: "国符「三种神器　玉」", pos: "东方永夜抄三面，难度N" },
            { name: "国符「三种神器　镜」", pos: "东方永夜抄三面，难度H" },
            { name: "国体「三种神器　乡」", pos: "东方永夜抄三面，难度L" },
            { name: "终符「幻想天皇」", pos: "东方永夜抄三面，难度N" },
            { name: "虚史「幻想乡传说」", pos: "东方永夜抄三面，难度L" },
            { name: "未来「高天原」", pos: "东方永夜抄三面，难度L" },
            { name: "「日出国之天子」", pos: "东方永夜抄三面，难度LW" }
        ]
    },
    因幡帝: { 
        firstAppear: "东方永夜抄(2004)",
        music: "宇佐大人的白旗(花映塚）",
        wiki: "https://thbwiki.cc/因幡帝",
        sign: "https://wyppony.github.io/touhouphotos/25.东方幻存神签（因幡天为）.png",
        qImg: "东方/因幡帝.png",
        cards: [
            { name: "「Ancient Duper」", pos: "东方永夜抄LastWord，难度LW" }
        ]
    },
    铃仙·优昙华院·因幡: {
        firstAppear: "东方永夜抄(2004)",
        music: "狂气之瞳　～ Invisible Full Moon",
        wiki: "https://thbwiki.cc/铃仙·优昙华院·因幡",
        sign: "https://wyppony.github.io/touhouphotos/26.东方幻存神签（铃仙·优昙华院·因幡）.png",
        qImg: "东方/铃仙.png",
        cards: [
            { name: "波符「赤眼催眠(Mind Shaker)」（心灵颤动）", pos: "东方永夜抄四面，难度N" },
            { name: "幻波「赤眼催眠(Mind Blowing)」（心灵风暴）", pos: "东方永夜抄四面，难度L" },
            { name: "狂符「幻视调律(Visionary Tuning)」（幻视调律）", pos: "东方永夜抄四面，难度N" },
            { name: "狂视「狂视调律(Illusion Seeker)」（幻觉追迹者）", pos: "东方永夜抄四面，难度L" },
            { name: "懒符「生神停止(Idling Wave)」（惰性之波）", pos: "东方永夜抄四面，难度N" },
            { name: "懒惰「生神停止(Mind Stopper)」（心灵制止）", pos: "东方永夜抄四面，难度L" },
            { name: "散符「真实之月(Invisible Full Moon)」（隐形满月）", pos: "东方永夜抄四面，难度L" },
            { name: "月眼「月兔远程催眠术(Tele-Mesmerism)」（远程催眠）", pos: "东方永夜抄四面，难度L" },
            { name: "「幻胧月睨(Lunatic Red Eyes)」（疯狂红眼）", pos: "东方永夜抄四面，难度LW" }
        ]
    },
    八意永琳: {
        firstAppear: "东方永夜抄(2004)",
        music: "千年幻想乡　～ History of the Moon",
        wiki: "https://thbwiki.cc/八意永琳",
        sign: "https://wyppony.github.io/touhouphotos/27.东方幻存神签（八意永琳）.png",
        qImg: "东方/八意永琳.png",
        cards: [
            { name: "天丸「壶中的天地」", pos: "东方永夜抄五面，难度L" },
            { name: "觉神「神代的记忆」", pos: "东方永夜抄五面，难度N" },
            { name: "神符「天人的族谱」", pos: "东方永夜抄五面，难度L" },
            { name: "苏活「生命游戏 -Life Game-」", pos: "东方永夜抄五面，难度N" },
            { name: "苏生「Rising Game」", pos: "东方永夜抄五面，难度L" },
            { name: "操神「Omoikane Device」（思兼装置）", pos: "东方永夜抄五面，难度N" },
            { name: "神脑「Omoikane Brain」（思兼的头脑）", pos: "东方永夜抄五面，难度L" },
            { name: "天咒「Apollo 13」（阿波罗13）", pos: "东方永夜抄五面，难度L" },
            { name: "秘术「天文密葬法」", pos: "东方永夜抄五面，难度L" },
            { name: "禁药「蓬莱之药」", pos: "东方永夜抄五面，难度L" },
            { name: "药符「壶中的大银河」", pos: "东方永夜抄五面，难度L" },
            { name: "「天网蛛网捕蝶之法」", pos: "东方永夜抄五面，难度LW" }
        ]
    },
    蓬莱山辉夜: {
        firstAppear: "东方永夜抄(2004)",
        music: "竹取飞翔 ～ Lunatic Princess",
        wiki: "https://thbwiki.cc/蓬莱山辉夜",
        sign: "https://wyppony.github.io/touhouphotos/28.东方幻存神签（蓬莱山辉夜）.png",
        qImg: "东方/蓬莱山辉夜.png",
        cards: [
            { name: "难题「龙颈之玉　-五色的弹丸-」", pos: "东方永夜抄六面，难度N" },
            { name: "神宝「Brilliant Dragon Bullet」（耀眼的龙玉）", pos: "东方永夜抄六面，难度L" },
            { name: "难题「佛御石之钵　-不碎的意志-」", pos: "东方永夜抄六面，难度N" },
            { name: "神宝「Buddhist Diamond」（佛体的金刚石）", pos: "东方永夜抄六面，难度L" },
            { name: "难题「火鼠的皮衣　-不焦躁的内心-」", pos: "东方永夜抄六面，难度N" },
            { name: "神宝「Salamander Shield」（火蜥蜴之盾）", pos: "东方永夜抄六面，难度L" },
            { name: "难题「燕的子安贝　-永命线-」", pos: "东方永夜抄六面，难度N" },
            { name: "神宝「Life Spring Infinity」（无限的生命之泉）", pos: "东方永夜抄六面，难度L" },
            { name: "难题「蓬莱的弹枝　-七色的弹幕-」", pos: "东方永夜抄六面，难度N" },
            { name: "神宝「蓬莱的玉枝　-梦色之乡-」", pos: "东方永夜抄六面，难度L" },
            { name: "「永夜归返　-初月-」", pos: "东方永夜抄六面，难度E" },
            { name: "「永夜归返　-新月-」", pos: "东方永夜抄六面，难度N" },
            { name: "「永夜归返　-上弦月-」", pos: "东方永夜抄六面，难度H" },
            { name: "「永夜归返　-待宵-」", pos: "东方永夜抄六面，难度L" },
            { name: "「永夜归返　-子之刻-」", pos: "东方永夜抄六面，难度E" },
            { name: "「永夜归返　-子时二刻-」", pos: "东方永夜抄六面，难度N" },
            { name: "「永夜归返　-子时三刻-」", pos: "东方永夜抄六面，难度H" },
            { name: "「永夜归返　-子时四刻-」", pos: "东方永夜抄六面，难度L" },
            { name: "「永夜归返　-丑之刻-」", pos: "东方永夜抄六面，难度E" },
            { name: "「永夜归返　-丑时二刻-」", pos: "东方永夜抄六面，难度N" },
            { name: "「永夜归返　-丑时三刻-」", pos: "东方永夜抄六面，难度H" },
            { name: "「永夜归返　-丑时四刻-」", pos: "东方永夜抄六面，难度L" },
            { name: "「永夜归返　-寅之刻-」", pos: "东方永夜抄六面，难度E" },
            { name: "「永夜归返　-寅时二刻-」", pos: "东方永夜抄六面，难度N" },
            { name: "「永夜归返　-寅时三刻-」", pos: "东方永夜抄六面，难度H" },
            { name: "「永夜归返　-寅时四刻-」", pos: "东方永夜抄六面，难度L" },
            { name: "「永夜归返　-朝霭-」", pos: "东方永夜抄六面，难度E" },
            { name: "「永夜归返　-拂晓-」", pos: "东方永夜抄六面，难度N" },
            { name: "「永夜归返　-破晓明星-」", pos: "东方永夜抄六面，难度H" },
            { name: "「永夜归返　-世间开明-」", pos: "东方永夜抄六面，难度L" },
            { name: "「蓬莱的树海」", pos: "东方永夜抄六面，难度LW" }
        ]
    },
    "上白泽慧音(白泽)": {
    firstAppear: "东方永夜抄 (2004)",
    music: "Extend Ash　～ 蓬莱人",
    wiki: "https://thbwiki.cc/上白泽慧音",
    sign: "https://wyppony.github.io/touhouphotos/29.东方幻存神签（上白泽慧音（白泽））.png",
    qImg: "东方/上白泽慧音2.png",
    cards: [
        { name: "旧史「旧秘境史 -古代史-」", pos: "东方永夜抄 EX面，难度 EX" },
        { name: "转世「一条归桥」", pos: "东方永夜抄 EX面，难度 EX" },
        { name: "新史「新幻想史 -现代史-」", pos: "东方永夜抄 EX面，难度 EX" },
        { name: "「无何有的浄化」", pos: "东方永夜抄 EX面，难度 LW" }
           ]
    },
    藤原妹红: {
        firstAppear: "东方永夜抄(2004)",
        music: "飘上月球，不死之烟",
        wiki: "https://thbwiki.cc/藤原妹红",
        sign: "https://wyppony.github.io/touhouphotos/30.东方幻存神签（藤原妹红）.png",
        qImg: "东方/藤原妹红.png",
        cards: [
            { name: "时效「月岩笠的诅咒」", pos: "东方永夜抄EX面，难度EX" },
            { name: "不死「火鸟　-凤翼天翔-」", pos: "东方永夜抄EX面，难度EX" },
            { name: "藤原「灭罪寺院伤」", pos: "东方永夜抄EX面，难度EX" },
            { name: "不死「徐福时空」", pos: "东方永夜抄EX面，难度EX" },
            { name: "灭罪「正直者之死」", pos: "东方永夜抄EX面，难度EX" },
            { name: "虚人「无」", pos: "东方永夜抄EX面，难度EX" },
            { name: "不灭「不死鸟之尾」", pos: "东方永夜抄EX面，难度EX" },
            { name: "蓬莱「凯风快晴　-Fujiyama Volcano-」", pos: "东方永夜抄EX面，难度EX" },
            { name: "「Possessed by Phoenix」（不死鸟附体）", pos: "东方永夜抄EX面，难度EX" },
            { name: "「蓬莱人形」", pos: "东方永夜抄EX面，难度EX" },
            { name: "「Imperishable Shooting」（不朽的弹幕）", pos: "东方永夜抄EX面，难度EX" },
            { name: "「不死鸟重生」", pos: "东方永夜抄EX面，难度LW" }
        ]
    },
    风见幽香: {
        firstAppear: "东方花映塚(2005)",
        music: "今昔幻想乡　～ Flower Land",
        wiki: "https://thbwiki.cc/风见幽香",
        sign: "https://wyppony.github.io/touhouphotos/32.东方幻存神签（风见幽香）.png",
        qImg: "东方/风见幽香.png",
        cards: [
            { name: "花符「幻想乡的开花」", pos: "东方花映塚" },
            { name: "幻想「花鸟风月，啸风弄月」", pos: "东方花映塚" }
        ]
    },
    梅蒂欣·梅兰可莉: {
        firstAppear: "东方花映塚(2005)",
        music: "剧毒身体　～ Forsaken Doll",
        wiki: "https://thbwiki.cc/梅蒂欣·梅兰可莉",
        sign: "https://wyppony.github.io/touhouphotos/31.东方幻存神签（梅蒂欣·梅兰可莉）.png",
        qImg: "东方/梅蒂欣.png",
        cards: [
            { name: "毒符「神经之毒」", pos: "东方花映塚" },
            { name: "毒符「忧郁之毒」", pos: "东方花映塚" }
        ]
    },
    小野冢小町: {
        firstAppear: "东方花映塚(2005)",
        music: "彼岸归航　～ Riverside View",
        wiki: "https://thbwiki.cc/小野冢小町",
        sign: "https://wyppony.github.io/touhouphotos/34.东方幻存神签（小野冢小町）.png",
        qImg: "东方/小野冢小町.png",
        cards: [
            { name: "投钱「隔夜钱」", pos: "东方花映塚" },
            { name: "舟符「Higan Reteur」(彼岸归航)", pos: "东方花映塚" }
        ]
    },
    四季映姬·亚玛萨那度: {
        firstAppear: "东方花映塚(2005)",
        music: "第六十年的东方审判　～ Fate of Sixty Years",
        wiki: "https://thbwiki.cc/四季映姬·夜摩仙那度",
        sign: "https://wyppony.github.io/touhouphotos/35.东方幻存神签（四季映姬·夜魔仙那度）.png",
        qImg: "东方/四季映姬亚玛萨那度.png",
        cards: [
            { name: "审符「彷徨的大罪」", pos: "东方花映塚" },
            { name: "审判「Last Judgement」(最终审判)", pos: "东方花映塚" }
        ]
    },
        秋静叶: {
        firstAppear: "东方风神录(2007)",
        music: "会受稻田姬的斥责啦",
        wiki: "https://thbwiki.cc/秋静叶",
        sign: "https://wyppony.github.io/touhouphotos/36.东方幻存神签（秋静叶）.png",
        qImg: "东方/秋静叶.png",
        cards: [
            { name: "叶符「纷乱的落叶」", pos: "东方风神录一面，难度L" }
        ]
    },
    秋穰子: {
        firstAppear: "东方风神录(2007)",
        music: "会受稻田姬的斥责啦",
        wiki: "https://thbwiki.cc/秋穰子",
        sign: "https://wyppony.github.io/touhouphotos/37.东方幻存神签（秋穰子）.png",
        qImg: "东方/秋穰子.png",
        cards: [
            { name: "秋符「Autumn Sky」（秋季的天空）", pos: "东方风神录一面，难度N" },
            { name: "秋符「无常秋日与少女的心」", pos: "东方风神录一面，难度L" },
            { name: "丰符「Otoshi Harvester」（大年收获者）", pos: "东方风神录一面，难度N" },
            { name: "丰收「谷物神的允诺」", pos: "东方风神录一面，难度L" }
        ]
    },
    键山雏: {
        firstAppear: "东方风神录(2007)",
        music: "命运的阴暗面",
        wiki: "https://thbwiki.cc/键山雏",
        sign: "https://wyppony.github.io/touhouphotos/38.东方幻存神签（键山雏）.png",
        qImg: "东方/键山雏.png",
        cards: [
            { name: "厄符「Bad Fortune」（厄运）", pos: "东方风神录二面，难度N" },
            { name: "厄符「厄神大人的生理节律」", pos: "东方风神录二面，难度L" },
            { name: "疵符「Broken Amulet」（破裂的护符）", pos: "东方风神录二面，难度N" },
            { name: "疵痕「损坏的护符」", pos: "东方风神录二面，难度L" },
            { name: "恶灵「Misfortune's Wheel」（厄运之轮）", pos: "东方风神录二面，难度N" },
            { name: "悲运「大钟婆之火」", pos: "东方风神录二面，难度L" },
            { name: "创符「Pain Flow」（痛苦之流）", pos: "东方风神录二面，难度N" },
            { name: "创符「流放人偶」", pos: "东方风神录二面，难度L" }
        ]
    },
    河城荷取: {
        firstAppear: "东方风神录(2007)",
        music: "芥川龙之介的河童　～ Candid Friend",
        wiki: "https://thbwiki.cc/河城荷取",
        sign: "https://wyppony.github.io/touhouphotos/39.东方幻存神签（河城荷取）.png",
        qImg: "东方/河城荷取.png",
        cards: [
            { name: "光学「Optical Camouflage」（光学迷彩）", pos: "东方风神录三面，难度N" },
            { name: "光学「Hydro-Camouflage」（水迷彩）", pos: "东方风神录三面，难度L" },
            { name: "洪水「Ooze Flooding」（泥浆泛滥）", pos: "东方风神录三面，难度N" },
            { name: "洪水「Diluvial Mare」（冲积梦魇）", pos: "东方风神录三面，难度H" },
            { name: "漂溺「粼粼水底之心伤」", pos: "东方风神录三面，难度L" },
            { name: "水符「河童之河口浪潮」", pos: "东方风神录三面，难度N" },
            { name: "水符「河童之山洪暴发」", pos: "东方风神录三面，难度H" },
            { name: "水符「河童之幻想大瀑布」", pos: "东方风神录三面，难度L" },
            { name: "河童「妖怪黄瓜」", pos: "东方风神录三面，难度N" },
            { name: "河童「延展手臂」", pos: "东方风神录三面，难度H" },
            { name: "河童「Spin the Cephalic Plate」（回转顶板）", pos: "东方风神录三面，难度L" }
        ]
    },
    犬走椛: {
        firstAppear: "东方风神录(2007)",
        music: "Fall of Fall　～ 秋意渐浓之瀑",
        wiki: "https://thbwiki.cc/犬走椛",
        sign: "https://wyppony.github.io/touhouphotos/40.东方幻存神签（犬走椛）.png",
        qImg: "东方/犬走椛.png",
        cards: [
            { name: "狗符「Rabies Bite」（狂犬断噬）", pos: "东方文花帖第4关，难度未定" },
            { name: "山窝「Expellees' Canaan」（遭放逐者的约定之地）", pos: "东方文花帖第4关，难度未定" }
        ]
    },
    射命丸文: {
        firstAppear: "东方文花帖(2005)",
        music: "妖怪之山　～ Mysterious Mountain",
        wiki: "https://thbwiki.cc/射命丸文",
        sign: "https://wyppony.github.io/touhouphotos/33.东方幻存神签（射命丸文）.png",
        qImg: "东方/射命丸文.png",
        cards: [
            { name: "岐符「天之八衢」", pos: "东方风神录四面，难度N" },
            { name: "岐符「猿田彦神之岔路」", pos: "东方风神录四面，难度L" },
            { name: "风神「风神木叶隐身术」", pos: "东方风神录四面，难度N" },
            { name: "风神「天狗颪」", pos: "东方风神录四面，难度H" },
            { name: "风神「二百十日」", pos: "东方风神录四面，难度L" },
            { name: "「幻想风靡」", pos: "东方风神录四面，难度H" },
            { name: "「无双风神」", pos: "东方风神录四面，难度L" },
            { name: "塞符「山神渡御」", pos: "东方风神录四面，难度N" },
            { name: "塞符「天孙降临」", pos: "东方风神录四面，难度H" },
            { name: "塞符「天上天下的照国」", pos: "东方风神录四面，难度L" }
        ]
    },
    东风谷早苗: {
        firstAppear: "东方风神录(2007)",
        music: "信仰是为了虚幻之人",
        wiki: "https://thbwiki.cc/东风谷早苗",
        sign: "https://wyppony.github.io/touhouphotos/41.东方幻存神签（东风谷早苗）.png",
        qImg: "东方/东风谷早苗.png",
        cards: [
            { name: "秘术「Gray Thaumaturgy」（灰色奇术）", pos: "东方风神录五面，难度N" },
            { name: "秘术「遗忘之祭仪」", pos: "东方风神录五面，难度H" },
            { name: "秘术「一脉单传之弹幕」", pos: "东方风神录五面，难度L" },
            { name: "奇迹「白昼的客星」", pos: "东方风神录五面，难度N" },
            { name: "奇迹「客星璀璨之夜」", pos: "东方风神录五面，难度H" },
            { name: "奇迹「客星辉煌之夜」", pos: "东方风神录五面，难度L" },
            { name: "开海「海水分开之日」", pos: "东方风神录五面，难度N" },
            { name: "开海「摩西之奇迹」", pos: "东方风神录五面，难度L" },
            { name: "准备「呼唤神风的星之仪式」", pos: "东方风神录五面，难度N" },
            { name: "准备「Summon Takeminakata」（召请建御名方神）", pos: "东方风神录五面，难度L" },
            { name: "奇迹「神之风」", pos: "东方风神录五面，难度N" },
            { name: "大奇迹「八坂之神风」", pos: "东方风神录五面，难度L" },
            { name: "秘法「九字切」", pos: "地灵殿EX面,EX" },
            { name: "奇迹「神秘果」", pos: "地灵殿EX面,EX" },
            { name: "神德「五谷丰穰米之浴」", pos: "地灵殿EX面,EX" }
        ]
    },
    八坂神奈子: {
        firstAppear: "东方风神录(2007)",
        music: "神圣庄严的古战场　～ Suwa Foughten Field",
        wiki: "https://thbwiki.cc/八坂神奈子",
        sign: "https://wyppony.github.io/touhouphotos/42.东方幻存神签（八坂神奈子）.png",
        qImg: "东方/八坂神奈子.png",
        cards: [
            { name: "神祭「Expanded Onbashira」（扩展御柱）", pos: "东方风神录六面，难度N" },
            { name: "奇祭「目处梃子乱舞」", pos: "东方风神录六面，难度L" },
            { name: "筒粥「神之粥」", pos: "东方风神录六面，难度N" },
            { name: "忘谷「Unremembered Crop」（遗忘之谷）", pos: "东方风神录六面，难度H" },
            { name: "神谷「Divining Crop」（神灵之谷）", pos: "东方风神录六面，难度L" },
            { name: "贽符「御射山御狩神事」", pos: "东方风神录六面，难度N" },
            { name: "神秘「葛井之清水」", pos: "东方风神录六面，难度H" },
            { name: "神秘「Yamato Torus」（大和环面）", pos: "东方风神录六面，难度L" },
            { name: "天流「天水奇迹」", pos: "东方风神录六面，难度N" },
            { name: "天龙「雨之源泉」", pos: "东方风神录六面，难度L" },
            { name: "「Mountain of Faith」（信仰之山）", pos: "东方风神录六面，难度N" },
            { name: "「风神之神德」", pos: "东方风神录六面，难度L" },
            { name: "神符「如水眼之美丽源泉」", pos: "东方风神录EX面，难度EX" },
            { name: "神符「结于杉木之古缘」", pos: "东方风神录EX面，难度EX" },
            { name: "神符「神所踏足之御神渡」", pos: "东方风神录EX面，难度EX" }
        ]
    },
    洩矢诹访子: {
        firstAppear: "东方风神录(2007)",
        music: "Native Faith",
        wiki: "https://thbwiki.cc/洩矢诹访子",
        sign: "https://wyppony.github.io/touhouphotos/43.东方幻存神签（洩矢诹访子）.png",
        qImg: "东方/洩矢诹访子.png",
        cards: [
            { name: "开宴「二拜二拍一拜」", pos: "东方风神录EX面，难度EX" },
            { name: "土著神「手长足长大人」", pos: "东方风神录EX面，难度EX" },
            { name: "神具「洩矢的铁轮」", pos: "东方风神录EX面，难度EX" },
            { name: "源符「厌川的翡翠」", pos: "东方风神录EX面，难度EX" },
            { name: "蛙狩「蛙以口鸣，方致蛇祸」", pos: "东方风神录EX面，难度EX" },
            { name: "土著神「七石七木」", pos: "东方风神录EX面，难度EX" },
            { name: "土著神「小小青蛙不输风雨」", pos: "东方风神录EX面，难度EX" },
            { name: "土著神「宝永四年的赤蛙」", pos: "东方风神录EX面，难度EX" },
            { name: "「诹访大战 ～ 土著神话 vs 中央神话」", pos: "东方风神录EX面，难度EX" },
            { name: "祟符「洩矢大人」", pos: "东方风神录EX面，难度EX" }
        ]
    },
    琪斯美: {
        firstAppear: "东方地灵殿(2008)",
        music: "昏暗的风穴",
        wiki: "https://thbwiki.cc/琪斯美",
        sign: "https://wyppony.github.io/touhouphotos/46.东方幻存神签（琪斯美）.png",
        qImg: "东方/琪斯美.png",
        cards: [
            { name: "怪奇「钓瓶落之怪」", pos: "地灵殿一面道中,L" }
        ]
    },
    黑谷山女: {
        firstAppear: "东方地灵殿(2008)",
        music: "被封印的妖怪　～ Lost Place",
        wiki: "https://thbwiki.cc/黑谷山女",
        sign: "https://wyppony.github.io/touhouphotos/47.东方幻存神签（黑谷山女）.png",
        qImg: "东方/黑谷山女.png",
        cards: [
            { name: "罠符「捕捉之网」", pos: "地灵殿一面,N" },
            { name: "蜘蛛「石窟的蜘蛛巢」", pos: "地灵殿一面,N" },
            { name: "瘴符「瘴气充溢」", pos: "地灵殿一面,L" },
            { name: "瘴气「原因不明的热病」", pos: "地灵殿一面,L" }
        ]
    },
    水桥帕露西: {
        firstAppear: "东方地灵殿(2008)",
        music: "绿眼的嫉妒",
        wiki: "https://thbwiki.cc/水桥帕露西",
        sign: "https://wyppony.github.io/touhouphotos/48.东方幻存神签（水桥帕露西）.png",
        qImg: "东方/水桥帕露西.png",
        cards: [
            { name: "妬符「绿眼怪兽」", pos: "地灵殿二面,N" },
            { name: "嫉妒「看不见的绿眼怪兽」", pos: "地灵殿二面,L" },
            { name: "开花爷爷「对华丽的仁者之嫉妒」", pos: "地灵殿二面,N" },
            { name: "开花爷爷「小白的灰烬」", pos: "地灵殿二面,L" },
            { name: "剪舌麻雀「对谦虚的富者之记恨」", pos: "地灵殿二面,N" },
            { name: "剪舌麻雀「大葛笼与小葛笼」", pos: "地灵殿二面,L" },
            { name: "恨符「丑时参拜」", pos: "地灵殿二面,N" },
            { name: "恨符「丑时参拜第七日」", pos: "地灵殿二面,L" }
        ]
    },
    星熊勇仪: {
        firstAppear: "东方地灵殿(2008)",
        music: "大江山的花之酒宴",
        wiki: "https://thbwiki.cc/星熊勇仪",
        sign: "https://wyppony.github.io/touhouphotos/49.东方幻存神签（星熊勇仪）.png",
        qImg: "东方/星熊勇仪.png",
        cards: [
            { name: "鬼符「怪力乱神」", pos: "地灵殿三面,L" },
            { name: "怪轮「地狱之苦轮」", pos: "地灵殿三面,N" },
            { name: "枷符「罪人不释之枷」", pos: "地灵殿三面,L" },
            { name: "力业「大江山岚」", pos: "地灵殿三面,N" },
            { name: "力业「大江山颪」", pos: "地灵殿三面,L" },
            { name: "四天王奥义「三步必杀」", pos: "地灵殿三面,L" }
        ]
    },
    古明地觉: {
        firstAppear: "东方地灵殿(2008)",
        music: "少女觉　～ 3rd eye",
        wiki: "https://thbwiki.cc/古明地觉",
        sign: "https://wyppony.github.io/touhouphotos/50.东方幻存神签（古明地觉）.png",
        qImg: "东方/古明地觉.png",
        cards: [
            { name: "回忆「恐怖的回忆」", pos: "地灵殿四面,N" },
            { name: "回忆「恐怖催眠术」", pos: "地灵殿四面,L" }
        ]
    },
    火焰猫燐: {
        firstAppear: "东方地灵殿(2008)",
        music: "尸体旅行　～ Be of good cheer!",
        wiki: "https://thbwiki.cc/火焰猫燐",
        sign: "https://wyppony.github.io/touhouphotos/51.东方幻存神签（火焰猫燐）.png",
        qImg: "东方/火焰猫燐.png",
        cards: [
            { name: "猫符「Cat's Walk」", pos: "地灵殿五面,N" },
            { name: "猫符「怨灵猫乱步」", pos: "地灵殿五面,L" },
            { name: "咒精「僵尸妖精」", pos: "地灵殿五面,N" },
            { name: "咒精「怨灵凭依妖精」", pos: "地灵殿五面,L" },
            { name: "恨灵「脾脏蛀食者」", pos: "地灵殿五面,N" },
            { name: "尸灵「食人怨灵」", pos: "地灵殿五面,L" },
            { name: "赎罪「旧地狱的针山」", pos: "地灵殿五面,N" },
            { name: "赎罪「古时之针与痛楚的怨灵」", pos: "地灵殿五面,L" },
            { name: "「死灰复燃」", pos: "地灵殿五面,N" },
            { name: "「小恶灵复活」", pos: "地灵殿五面,L" },
            { name: "妖怪「火焰的车轮」", pos: "地灵殿五面,L" }
        ]
    },
    灵乌路空: {
        firstAppear: "东方地灵殿(2008)",
        music: "灵知的太阳信仰　～ Nuclear Fusion",
        wiki: "https://thbwiki.cc/灵乌路空",
        sign: "https://wyppony.github.io/touhouphotos/52.东方幻存神签（灵乌路空）.png",
        qImg: "东方/灵乌路空.png",
        cards: [
            { name: "核热「核聚变」", pos: "地灵殿六面,N" },
            { name: "核热「核功率骤增」", pos: "地灵殿六面,H" },
            { name: "核热「核反应失控」", pos: "地灵殿六面,L" },
            { name: "爆符「百万耀斑」", pos: "地灵殿六面,N" },
            { name: "爆符「十亿耀斑」", pos: "地灵殿六面,H" },
            { name: "爆符「千兆耀斑」", pos: "地灵殿六面,L" },
            { name: "焰星「恒星」", pos: "地灵殿六面,N" },
            { name: "焰星「行星公转」", pos: "地灵殿六面,H" },
            { name: "焰星「十凶星」", pos: "地灵殿六面,L" },
            { name: "「地狱极乐熔毁」", pos: "地灵殿六面,N" },
            { name: "「地狱的托卡马克装置」", pos: "地灵殿六面,L" },
            { name: "「地狱的人造太阳」", pos: "地灵殿六面,N" },
            { name: "「地底太阳」", pos: "地灵殿六面,L" }
        ]
    },
    古明地恋: {
        firstAppear: "东方地灵殿(2008)",
        music: "哈德曼的妖怪少女",
        wiki: "https://thbwiki.cc/古明地恋",
        sign: "https://wyppony.github.io/touhouphotos/53.东方幻存神签（古明地恋）.png",
        qImg: "东方/古明地恋.png",
        cards: [
            { name: "表象「列祖列宗入梦来」", pos: "地灵殿EX面,EX" },
            { name: "表象「弹幕偏执症」", pos: "地灵殿EX面,EX" },
            { name: "本能「本我的解放」", pos: "地灵殿EX面,EX" },
            { name: "抑制「超我」", pos: "地灵殿EX面,EX" },
            { name: "反应「妖怪测谎机」", pos: "地灵殿EX面,EX" },
            { name: "无意识「弹幕的墨迹测验」", pos: "地灵殿EX面,EX" },
            { name: "复燃「恋爱的埋火」", pos: "地灵殿EX面,EX" },
            { name: "深层「无意识的基因」", pos: "地灵殿EX面,EX" },
            { name: "「被厌恶者的哲学」", pos: "地灵殿EX面,EX" },
            { name: "「地底蔷薇」", pos: "地灵殿EX面,EX" }
        ]
    },
    娜兹玲: {
        firstAppear: "东方星莲船(2009)",
        music: "小小的贤将",
        wiki: "https://thbwiki.cc/娜兹玲",
        sign: "https://wyppony.github.io/touhouphotos/54.东方幻存神签（娜兹玲）.png",
        qImg: "东方/娜兹玲.png",
        cards: [
            { name: "棒符「忙碌探知棒」", pos: "星莲船一面,L" },
            { name: "搜符「稀有金属探测器」", pos: "星莲船一面,N" },
            { name: "搜符「黄金探测器」", pos: "星莲船一面,L" },
            { name: "视符「娜兹玲灵摆」", pos: "星莲船一面,N" },
            { name: "视符「高感度娜兹玲灵摆」", pos: "星莲船一面,H" },
            { name: "守符「灵摆防御」", pos: "星莲船一面,L" },
            { name: "宝塔「最优良的宝物」", pos: "星莲船一面,L" }
        ]
    },
    多多良小伞: {
        firstAppear: "东方星莲船(2009)",
        music: "请注意万年备用伞",
        wiki: "https://thbwiki.cc/多多良小伞",
        sign: "https://wyppony.github.io/touhouphotos/55.东方幻存神签（多多良小伞）.png",
        qImg: "东方/多多良小伞.png",
        cards: [
            { name: "大轮「唐伞光晕」", pos: "星莲船二面,N" },
            { name: "大轮「你好，被遗忘的世界」", pos: "星莲船二面,L" },
            { name: "伞符「雨伞的星之交响」", pos: "星莲船二面,N" },
            { name: "伞符「雨伞的星之追忆」", pos: "星莲船二面,L" },
            { name: "雨符「雨夜怪谈」", pos: "星莲船二面,N" },
            { name: "雨伞「超防水干爽伞妖」", pos: "星莲船二面,L" },
            { name: "化符「遗忘之伞的夜行列车」", pos: "星莲船二面,N" },
            { name: "化铁「备用伞特急夜晚狂欢号」", pos: "星莲船二面,L" },
            { name: "伞符「大颗的泪雨」", pos: "星莲船二面,EX" },
            { name: "惊雨「台风骤雨」", pos: "星莲船二面,EX" },
            { name: "光晕「唐伞惊吓闪光」", pos: "星莲船二面,EX" },
            { name: "虹符「Umbrella Cyclone」（雨伞风暴）", pos: "神灵庙,L" }
        ]
    },
    云居一轮: {
        firstAppear: "东方星莲船(2009)",
        music: "守旧老爹与前卫少女",
        wiki: "https://thbwiki.cc/云居一轮",
        sign: "https://wyppony.github.io/touhouphotos/56.东方幻存神签（云居一轮&云山）.png",
        qImg: "东方/云居一轮.png",
        cards: [
            { name: "铁拳「问答无用妖怪拳」", pos: "星莲船三面,N" },
            { name: "神拳「凌云地狱冲」", pos: "星莲船三面,H" },
            { name: "神拳「天海地狱冲」", pos: "星莲船三面,L" },
            { name: "拳符「天网沙袋」", pos: "星莲船三面,N" },
            { name: "连打「云界海妖来袭」", pos: "星莲船三面,H" },
            { name: "连打「帝王海妖来袭」", pos: "星莲船三面,L" },
            { name: "拳打「重拳碎击」", pos: "星莲船三面,N" },
            { name: "溃灭「天上天下连续勾拳」", pos: "星莲船三面,L" },
            { name: "大喝「守旧尊老之怒眼」", pos: "星莲船三面,N" },
            { name: "忿怒「天变巨眼焚身」", pos: "星莲船三面,H" },
            { name: "忿怒「空前绝后巨眼焚身」", pos: "星莲船三面,L" }
        ]
    },
    村纱水蜜: {
        firstAppear: "东方星莲船(2009)",
        music: "Captain Murasa",
        wiki: "https://thbwiki.cc/村纱水蜜",
        sign: "https://wyppony.github.io/touhouphotos/57.东方幻存神签（村纱水蜜）.png",
        qImg: "东方/村纱水蜜.png",
        cards: [
            { name: "倾覆「同路人之锚」", pos: "星莲船四面,N" },
            { name: "倾覆「沉没之锚」", pos: "星莲船四面,H" },
            { name: "倾覆「击沉之锚」", pos: "星莲船四面,L" },
            { name: "溺符「深海漩涡」", pos: "星莲船四面,N" },
            { name: "溺符「沉底漩涡」", pos: "星莲船四面,L" },
            { name: "港符「幽灵船之泊」", pos: "星莲船四面,N" },
            { name: "港符「幽灵船之港」", pos: "星莲船四面,H" },
            { name: "港符「幽灵船永久停泊」", pos: "星莲船四面,L" },
            { name: "幽灵「使船沉没的幽灵」", pos: "星莲船四面,N" },
            { name: "幽灵「悄然袭来的长勺」", pos: "星莲船四面,L" }
        ]
    },
    寅丸星: {
        firstAppear: "东方星莲船(2009)",
        music: "虎纹的毘沙门天",
        wiki: "https://thbwiki.cc/寅丸星",
        sign: "https://wyppony.github.io/touhouphotos/58.东方幻存神签（寅丸星）.png",
        qImg: "东方/寅丸星.png",
        cards: [
            { name: "宝塔「闪亮财宝」", pos: "星莲船五面,N" },
            { name: "宝塔「闪亮宝枪」", pos: "星莲船五面,L" },
            { name: "光符「绝对正义」", pos: "星莲船五面,N" },
            { name: "光符「正义之威光」", pos: "星莲船五面,L" },
            { name: "法力「至宝之独钴杵」", pos: "星莲船五面,N" },
            { name: "法灯「无瑕佛法之独钴杵」", pos: "星莲船五面,L" },
            { name: "光符「净化之魔」", pos: "星莲船五面,H" },
            { name: "「完全净化」", pos: "星莲船五面,L" }
        ]
    },
    圣白莲: {
        firstAppear: "东方星莲船(2009)",
        music: "感情的摩天楼　～ Cosmic Mind",
        wiki: "https://thbwiki.cc/圣白莲",
        sign: "https://wyppony.github.io/touhouphotos/59.东方幻存神签（圣白莲）.png",
        qImg: "东方/圣白莲.png",
        cards: [
            { name: "魔法「紫云之兆」", pos: "星莲船六面,N" },
            { name: "吉兆「紫色云路」", pos: "星莲船六面,H" },
            { name: "吉兆「极乐的紫色云路」", pos: "星莲船六面,L" },
            { name: "魔法「魔界蝶之妖香」", pos: "星莲船六面,N" },
            { name: "魔法「魔法之蝶」", pos: "星莲船六面,L" },
            { name: "光魔「星辰之涡」", pos: "星莲船六面,N" },
            { name: "光魔「魔法银河系」", pos: "星莲船六面,L" },
            { name: "大魔法「魔神复诵」", pos: "星莲船六面,L" },
            { name: "「圣尼公之大空卷轴」", pos: "星莲船六面,H" },
            { name: "超人「圣白莲」", pos: "星莲船六面,L" },
            { name: "飞钵「幻想的飞行」", pos: "星莲船六面,N" },
            { name: "飞钵「传说的飞空圆盘」", pos: "星莲船六面,L" }
        ]
    },
    命莲: {
        firstAppear: "东方星莲船(2009)",
        music: "无",
        wiki: "https://thbwiki.cc/命莲",
        sign: "#",
        qImg: "东方/命莲.png",
        cards: [
            { name: "无", pos: "无" }
        ]
    },
    封兽鵺: {
        firstAppear: "东方星莲船(2009)",
        music: "平安时代的外星人",
        wiki: "https://thbwiki.cc/封兽鵺",
        sign: "https://wyppony.github.io/touhouphotos/60.东方幻存神签（封兽鵺）.png",
        qImg: "东方/封兽鵺.png",
        cards: [
            { name: "妖云「平安时代的黑云」", pos: "星莲船EX面,EX" },
            { name: "真相不明「愤怒的红色UFO袭来」", pos: "星莲船EX面,EX" },
            { name: "鵺符「鵺的蛇行表演」", pos: "星莲船EX面,EX" },
            { name: "真相不明「哀愁的蓝色UFO袭来」", pos: "星莲船EX面,EX" },
            { name: "鵺符「弹幕奇美拉」", pos: "星莲船EX面,EX" },
            { name: "真相不明「忠义的绿色UFO袭来」", pos: "星莲船EX面,EX" },
            { name: "鵺符「真相不明的黑暗」", pos: "星莲船EX面,EX" },
            { name: "真相不明「恐怖的虹色UFO袭来」", pos: "星莲船EX面,EX" },
            { name: "「平安京的恶梦」", pos: "星莲船EX面,EX" },
            { name: "恨弓「源三位赖政之弓」", pos: "星莲船EX面,EX" },
            { name: "未知「轨道不明的鬼火」", pos: "神灵庙,EX" },
            { name: "未知「姿态不明的空鱼」", pos: "神灵庙,EX" },
            { name: "未知「原理不明的妖怪玉」", pos: "神灵庙,EX" }
        ]
    },
    幽谷响子: {
        firstAppear: "东方神灵庙(2011)",
        music: "寺门前的妖怪小姑娘",
        wiki: "https://thbwiki.cc/幽谷响子",
        sign: "https://wyppony.github.io/touhouphotos/65.东方幻存神签（幽谷响子）.png",
        qImg: "东方/幽谷响子.png",
        cards: [
            { name: "响符「Mountain Echo」（山谷回声）", pos: "神灵庙二面,N" },
            { name: "响符「Mountain Echo Scramble」（混乱的山谷回声）", pos: "神灵庙二面,L" },
            { name: "响符「Power Resonance」（强力共振）", pos: "神灵庙二面,L" },
            { name: "山彦「Long-Range Echo」（远距离回声）", pos: "神灵庙二面,N" },
            { name: "山彦「Amplify Echo」（扩大回声）", pos: "神灵庙二面,L" },
            { name: "大声「Charged Cry」（激动的呼喊）", pos: "神灵庙二面,N" },
            { name: "大声「Charged Yahoo」（激动Yahoo）", pos: "神灵庙二面,L" },
            { name: "山彦「山彦的本领发挥回音」", pos: "神灵庙二面,OD" }
        ]
    },
    宫古芳香: {
        firstAppear: "东方神灵庙(2011)",
        music: "Rigid Paradise",
        wiki: "https://thbwiki.cc/宫古芳香",
        sign: "https://wyppony.github.io/touhouphotos/66.东方幻存神签（宫古芳香）.png",
        qImg: "东方/宫古芳香.png",
        cards: [
            { name: "回复「Heal by Desire」（借由欲望的恢复）", pos: "神灵庙三面,L" },
            { name: "毒爪「Poison Raze」（剧毒抹消）", pos: "神灵庙三面,N" },
            { name: "毒爪「Poison Murder」（剧毒杀害）", pos: "神灵庙三面,L" },
            { name: "欲符「赚钱欲灵招来」", pos: "神灵庙三面,N" },
            { name: "欲灵「Score Desire Eater」（贪分欲吞噬者）", pos: "神灵庙三面,L" },
            { name: "毒爪「不死杀人鬼」", pos: "神灵庙三面,OD" }
        ]
    },
    霍青娥: {
        firstAppear: "东方神灵庙(2011)",
        music: "古老的元神",
        wiki: "https://thbwiki.cc/霍青娥",
        sign: "https://wyppony.github.io/touhouphotos/67.东方幻存神签（霍青娥）.png",
        qImg: "东方/霍青娥.png",
        cards: [
            { name: "邪符「养小鬼」", pos: "神灵庙四面,N" },
            { name: "邪符「孤魂野鬼」", pos: "神灵庙四面,L" },
            { name: "入魔「走火入魔」", pos: "神灵庙四面,L" },
            { name: "降灵「死人童乩」", pos: "神灵庙四面,N" },
            { name: "通灵「通灵芳香」", pos: "神灵庙四面,L" },
            { name: "道符「道胎动」", pos: "神灵庙四面,L" },
            { name: "道符「TAO胎动 ～道～」", pos: "神灵庙四面,OD" }
        ]
    },
    苏我屠自古: {
        firstAppear: "东方神灵庙(2011)",
        music: "梦殿大祀庙",
        wiki: "https://thbwiki.cc/苏我屠自古",
        sign: "https://wyppony.github.io/touhouphotos/68.东方幻存神签（苏我屠自古）.png",
        qImg: "东方/苏我屠自古.png",
        cards: [
            { name: "雷矢「Gagouji Cyclone」（元兴寺的旋风）", pos: "神灵庙五面道中,N" },
            { name: "雷矢「Gagouji Tornado」（元兴寺的龙卷）", pos: "神灵庙五面道中,L" },
            { name: "怨灵「入鹿之雷」", pos: "神灵庙五面道中,OD" }
        ]
    },
    物部布都: {
        firstAppear: "东方神灵庙(2011)",
        music: "大神神话传",
        wiki: "https://thbwiki.cc/物部布都",
        sign: "https://wyppony.github.io/touhouphotos/69.东方幻存神签（物部布都）.png",
        qImg: "东方/物部布都.png",
        cards: [
            { name: "天符「雨之磐舟」", pos: "神灵庙五面,N" },
            { name: "天符「天之磐舟哟，向天飞升吧」", pos: "神灵庙五面,L" },
            { name: "投皿「物部氏的八十平瓮」", pos: "神灵庙五面,L" },
            { name: "炎符「废佛之炎风」", pos: "神灵庙五面,N" },
            { name: "炎符「火烧樱井寺」", pos: "神灵庙五面,L" },
            { name: "圣童女「大物忌正餐」", pos: "神灵庙五面,L" },
            { name: "圣童女「太阳神的贡品」", pos: "神灵庙五面,OD" }
        ]
    },
    丰聪耳神子: {
        firstAppear: "东方神灵庙(2011)",
        music: "圣德传说　～ True Administrator",
        wiki: "https://thbwiki.cc/丰聪耳神子",
        sign: "https://wyppony.github.io/touhouphotos/70.东方幻存神签（丰聪耳神子）.png",
        qImg: "东方/丰聪耳神子.png",
        cards: [
            { name: "名誉「十二阶之色彩」", pos: "神灵庙六面,N" },
            { name: "名誉「十二阶之冠位」", pos: "神灵庙六面,L" },
            { name: "仙符「日出之处的道士」", pos: "神灵庙六面,N" },
            { name: "仙符「日出之处的天子」", pos: "神灵庙六面,L" },
            { name: "召唤「豪族乱舞」", pos: "神灵庙六面,L" },
            { name: "秘宝「斑鸠寺的天球仪」", pos: "神灵庙六面,N" },
            { name: "秘宝「圣德太子的欧帕兹」", pos: "神灵庙六面,L" },
            { name: "光符「救世观音的佛光」", pos: "神灵庙六面,N" },
            { name: "光符「Guse Flash」（救世之光）", pos: "神灵庙六面,L" },
            { name: "眼光「十七条的光芒」", pos: "神灵庙六面,N" },
            { name: "神光「无忤为宗」", pos: "神灵庙六面,L" },
            { name: "「星辰降落的神灵庙」", pos: "神灵庙六面,N" },
            { name: "「新生的神灵」", pos: "神灵庙六面,L" },
            { name: "「神灵大宇宙」", pos: "神灵庙六面,OD" }
        ]
    },
    二岩猯藏: {
        firstAppear: "东方神灵庙(2011)",
        music: "佐渡的二岩",
        wiki: "https://thbwiki.cc/二岩猯藏",
        sign: "https://wyppony.github.io/touhouphotos/71.东方幻存神签（二岩猯藏）.png",
        qImg: "东方/二岩猯藏.png",
        cards: [
            { name: "一回胜负「灵长类弹幕变化」", pos: "神灵庙,EX" },
            { name: "二回胜负「肉食类弹幕变化」", pos: "神灵庙,EX" },
            { name: "三回胜负「羽鸟类弹幕变化」", pos: "神灵庙,EX" },
            { name: "四回胜负「两栖类弹幕变化」", pos: "神灵庙,EX" },
            { name: "五回胜负「鸟兽戏画」", pos: "神灵庙,EX" },
            { name: "六回胜负「狸猫的变身学校」", pos: "神灵庙,EX" },
            { name: "七回胜负「野生的离岛」", pos: "神灵庙,EX" },
            { name: "变化「魔奴化巫女的伪退治」", pos: "神灵庙,EX" },
            { name: "「猯藏化弹幕十变化」", pos: "神灵庙,EX" },
            { name: "貉符「满月下的腹鼓舞」", pos: "神灵庙,EX" },
            { name: "「Wild Carpet」（野生地毯）", pos: "神灵庙,OD" }
        ]
    },
    若鹭姬: {
        firstAppear: "东方辉针城(2013)",
        music: "秘境的人鱼",
        wiki: "https://thbwiki.cc/若鹭姬",
        sign: "https://wyppony.github.io/touhouphotos/73.东方幻存神签（若鹭姬）.png",
        qImg: "东方/若鹭姬.png",
        cards: [
            { name: "水符「Tail Fin Slap」（尾鳍拍击）", pos: "辉针城一面,L" },
            { name: "鳞符「Scale Wave」（鳞之波）", pos: "辉针城一面,N" },
            { name: "鳞符「逆鳞的惊涛」", pos: "辉针城一面,H" },
            { name: "鳞符「逆鳞的大惊涛」", pos: "辉针城一面,L" }
        ]
    },
    赤蛮奇: {
        firstAppear: "东方辉针城(2013)",
        music: "柳树下的杜拉罕",
        wiki: "https://thbwiki.cc/赤蛮奇",
        sign: "https://wyppony.github.io/touhouphotos/74.东方幻存神签（赤蛮奇）.png",
        qImg: "东方/赤蛮奇.png",
        cards: [
            { name: "飞符「Flying Head」（飞行之头）", pos: "辉针城二面,L" },
            { name: "首符「Close-Eye Shot」（闭目射击）", pos: "辉针城二面,N" },
            { name: "首符「辘轳首飞来」", pos: "辉针城二面,L" },
            { name: "飞头「Multiplicative Head」（倍增之头）", pos: "辉针城二面,N" },
            { name: "飞头「Seventh Head」（第七个头）", pos: "辉针城二面,H" },
            { name: "飞头「Ninth Head」（第九个头）", pos: "辉针城二面,L" },
            { name: "飞头「Dullahan Night」（杜拉罕之夜）", pos: "辉针城二面,L" }
        ]
    },
    今泉影狼: {
        firstAppear: "东方辉针城(2013)",
        music: "孤独的狼人",
        wiki: "https://thbwiki.cc/今泉影狼",
        sign: "https://wyppony.github.io/touhouphotos/75.东方幻存神签（今泉影狼）.png",
        qImg: "东方/今泉影狼.png",
        cards: [
            { name: "牙符「月下的犬齿」", pos: "辉针城三面,L" },
            { name: "变身「Triangle Fang」（三角齿）", pos: "辉针城三面,N" },
            { name: "变身「Star Fang」（星形齿）", pos: "辉针城三面,L" },
            { name: "咆哮「Strange Roar」（陌生的咆哮）", pos: "辉针城三面,N" },
            { name: "咆哮「满月的远吠」", pos: "辉针城三面,L" },
            { name: "狼符「Star Ring Pounce」（星环猛扑）", pos: "辉针城三面,N" },
            { name: "天狼「High-Speed Pounce」（高速猛扑）", pos: "辉针城三面,L" }
        ]
    },
    九十九弁弁: {
        firstAppear: "东方辉针城(2013)",
        music: "幻想净琉璃",
        wiki: "https://thbwiki.cc/九十九弁弁",
        sign: "https://wyppony.github.io/touhouphotos/76.东方幻存神签（九十九弁弁）.png",
        qImg: "东方/九十九弁弁.png",
        cards: [
            { name: "平曲「祇园精舍的钟声」", pos: "辉针城四面,L" },
            { name: "怨灵「无耳芳一」", pos: "辉针城四面,N" },
            { name: "怨灵「平家的大怨灵」", pos: "辉针城四面,L" },
            { name: "乐符「邪恶的五线谱」", pos: "辉针城四面,N" },
            { name: "乐符「凶恶的五线谱」", pos: "辉针城四面,H" },
            { name: "乐符「Double Score」（双重乐谱）", pos: "辉针城四面,L" },
            { name: "弦乐「风暴的合奏」", pos: "辉针城EX面,EX" },
            { name: "弦乐「净琉璃世界」", pos: "辉针城EX面,EX" }
        ]
    },
    九十九八桥: {
        firstAppear: "东方辉针城(2013)",
        music: "幻想净琉璃",
        wiki: "https://thbwiki.cc/九十九八桥",
        sign: "https://wyppony.github.io/touhouphotos/77.东方幻存神签（九十九八桥）.png",
        qImg: "东方/九十九八桥.png",
        cards: [
            { name: "琴符「诸行无常的琴声」", pos: "辉针城四面,L" },
            { name: "响符「平安的残响」", pos: "辉针城四面,N" },
            { name: "响符「Echo Chamber」（回音之庭）", pos: "辉针城四面,L" },
            { name: "筝曲「下克上送筝曲」", pos: "辉针城四面,N" },
            { name: "筝曲「下克上安魂曲」", pos: "辉针城四面,L" },
            { name: "弦乐「风暴的合奏」", pos: "辉针城EX面,EX" },
            { name: "弦乐「净琉璃世界」", pos: "辉针城EX面,EX" }
        ]
    },
    鬼人正邪: {
        firstAppear: "东方辉针城(2013)",
        music: "Reverse Ideology",
        wiki: "https://thbwiki.cc/鬼人正邪",
        sign: "https://wyppony.github.io/touhouphotos/78.东方幻存神签（鬼人正邪）.png",
        qImg: "东方/鬼人正邪.png",
        cards: [
            { name: "欺符「逆针击」", pos: "辉针城五面,L" },
            { name: "逆符「镜之国的弹幕」", pos: "辉针城五面,N" },
            { name: "逆符「Evil in the Mirror」（镜中的邪恶）", pos: "辉针城五面,L" },
            { name: "逆符「天地有用」", pos: "辉针城五面,N" },
            { name: "逆符「天下翻覆」", pos: "辉针城五面,L" },
            { name: "逆弓「天壤梦弓」", pos: "辉针城五面,N" },
            { name: "逆弓「天壤梦弓的诏敕」", pos: "辉针城五面,L" },
            { name: "逆转「Reverse Hierarchy」（阶级反转）", pos: "辉针城五面,N" },
            { name: "逆转「Change Air Brave」（变革空勇士）", pos: "辉针城五面,L" }
        ]
    },
    少名针妙丸: {
        firstAppear: "东方辉针城(2013)",
        music: "辉光之针的小人族　～ Little Princess",
        wiki: "https://thbwiki.cc/少名针妙丸",
        sign: "https://wyppony.github.io/touhouphotos/79.东方幻存神签（少名针妙丸）.png",
        qImg: "东方/少名针妙丸.png",
        cards: [
            { name: "小弹「小人的道路」", pos: "辉针城六面,N" },
            { name: "小弹「小人的荆棘路」", pos: "辉针城六面,L" },
            { name: "小槌「变大吧」", pos: "辉针城六面,N" },
            { name: "小槌「变得更大吧」", pos: "辉针城六面,L" },
            { name: "妖剑「辉针剑」", pos: "辉针城六面,L" },
            { name: "小槌「你给我变大吧」", pos: "辉针城六面,L" },
            { name: "「进击的小人」", pos: "辉针城六面,N" },
            { name: "「Wall of Issun」（一寸之壁）", pos: "辉针城六面,L" },
            { name: "「Hop-o'-My-Thumb Seven」（七个小拇指）", pos: "辉针城六面,N" },
            { name: "「七个一寸法师」", pos: "辉针城六面,L" }
        ]
    },
    堀川雷鼓: {
        firstAppear: "东方辉针城(2013)",
        music: "原初的节拍　～ Pristine Beat",
        wiki: "https://thbwiki.cc/堀川雷鼓",
        sign: "https://wyppony.github.io/touhouphotos/80.东方幻存神签（堀川雷鼓）.png",
        qImg: "东方/堀川雷鼓.png",
        cards: [
            { name: "一鼓「暴乱宫太鼓」", pos: "辉针城,EX" },
            { name: "二鼓「怨灵绫鼓」", pos: "辉针城,EX" },
            { name: "三鼓「午夜零时的三振」", pos: "辉针城,EX" },
            { name: "死鼓「Land Percuss」（轻敲大地）", pos: "辉针城,EX" },
            { name: "五鼓「雷电拨浪鼓」", pos: "辉针城,EX" },
            { name: "六鼓「Alternate Sticking」（交替打击法）", pos: "辉针城,EX" },
            { name: "七鼓「高速和太鼓火箭」", pos: "辉针城,EX" },
            { name: "八鼓「雷神之怒」", pos: "辉针城,EX" },
            { name: "「Blue Lady Show」（蓝色佳人的演出）", pos: "辉针城,EX" },
            { name: "「Pristine beat」（原初的节拍）", pos: "辉针城,EX" }
        ]
    },
    清兰: {
        firstAppear: "东方绀珠传(2015)",
        music: "兔已着陆",
        wiki: "https://thbwiki.cc/清兰",
        sign: "https://wyppony.github.io/touhouphotos/83.东方幻存神签（清兰）.png",
        qImg: "东方/清兰.png",
        cards: [
            { name: "凶弹「Speed Strike」（高速撞击）", pos: "绀珠传一面,L" },
            { name: "弹符「Eagle Shooting」（鹰在射击）", pos: "绀珠传一面,H" },
            { name: "弹符「鹰已击中」", pos: "绀珠传一面,L" },
            { name: "铳符「Lunatic Gun」（月狂之枪）", pos: "绀珠传一面,L" }
        ]
    },
    铃瑚: {
        firstAppear: "东方绀珠传(2015)",
        music: "九月的南瓜",
        wiki: "https://thbwiki.cc/铃瑚",
        sign: "https://wyppony.github.io/touhouphotos/84.东方幻存神签（铃瑚）.png",
        qImg: "东方/铃瑚.png",
        cards: [
            { name: "兔符「Strawberry Dango」（草莓团子）", pos: "绀珠传二面,N" },
            { name: "兔符「Berry Berry Dango」（浆果浆果团子）", pos: "绀珠传二面,L" },
            { name: "兔符「Dango Influence」（团子影响力）", pos: "绀珠传二面,L" },
            { name: "赏月「September Fullmoon」（九月的满月）", pos: "绀珠传二面,H" },
            { name: "赏月酒「Lunatic September」（月狂的九月）", pos: "绀珠传二面,L" }
        ]
    },
    哆来咪苏伊特: {
        firstAppear: "东方绀珠传(2015)",
        music: "永远的春梦",
        wiki: "https://thbwiki.cc/哆来咪苏伊特",
        sign: "https://wyppony.github.io/touhouphotos/85.东方幻存神签（哆来咪·苏伊特）.png",
        qImg: "东方/哆来咪苏伊特.png",
        cards: [
            { name: "梦符「绯红色的噩梦」", pos: "绀珠传三面,N" },
            { name: "梦符「绯红色的压迫噩梦」", pos: "绀珠传三面,L" },
            { name: "梦符「蔚蓝色的愁梦」", pos: "绀珠传三面,N" },
            { name: "梦符「蔚蓝色的愁三重梦」", pos: "绀珠传三面,H" },
            { name: "梦符「愁永远之梦」", pos: "绀珠传三面,L" },
            { name: "梦符「刈安色的迷梦」", pos: "绀珠传三面,N" },
            { name: "梦符「刈安色的错综迷梦」", pos: "绀珠传三面,L" },
            { name: "梦符「Dream Catcher」（捕梦网）", pos: "绀珠传三面,N" },
            { name: "梦符「苍蓝色的Dream Catcher」（苍蓝色的捕梦网）", pos: "绀珠传三面,H" },
            { name: "梦符「梦我梦中」", pos: "绀珠传三面,L" },
            { name: "月符「绀色的狂梦」", pos: "绀珠传三面,L" },
            { name: "蝴蝶「Butterfly Supplantation」（取而代之的蝴蝶）", pos: "绀珠传,EX" },
            { name: "超特急「Dream Express」（梦幻快车）", pos: "绀珠传,EX" },
            { name: "爬梦「Creeping Bullet」（爬行的子弹）", pos: "绀珠传,EX" }
        ]
    },
    稀神探女: {
        firstAppear: "东方绀珠传(2015)",
        music: "逆转的命运之轮",
        wiki: "https://thbwiki.cc/稀神探女",
        sign: "https://wyppony.github.io/touhouphotos/86.东方幻存神签（稀神探女）.png",
        qImg: "东方/稀神探女.png",
        cards: [
            { name: "玉符「乌合之咒」", pos: "绀珠传四面,N" },
            { name: "玉符「乌合的逆咒」", pos: "绀珠传四面,H" },
            { name: "玉符「乌合的二重咒」", pos: "绀珠传四面,L" },
            { name: "玉符「秽身探知型水雷」", pos: "绀珠传四面,N" },
            { name: "玉符「秽身探知型水雷 改」", pos: "绀珠传四面,L" },
            { name: "玉符「众神的弹冠」", pos: "绀珠传四面,N" },
            { name: "玉符「众神的光辉弹冠」", pos: "绀珠传四面,L" },
            { name: "「孤翼的白鹭」", pos: "绀珠传四面,L" }
        ]
    },
    克劳恩皮丝: {
        firstAppear: "东方绀珠传(2015)",
        music: "星条旗的小丑",
        wiki: "https://thbwiki.cc/克劳恩皮丝",
        sign: "https://wyppony.github.io/touhouphotos/87.东方幻存神签（克劳恩皮丝）.png",
        qImg: "东方/克劳恩皮丝.png",
        cards: [
            { name: "狱符「Hell Eclipse」（地狱月食）", pos: "绀珠传五面,N" },
            { name: "狱符「地狱之蚀」", pos: "绀珠传五面,L" },
            { name: "狱符「Flash and Stripe」（闪光与条纹）", pos: "绀珠传五面,N" },
            { name: "狱符「Star and Stripe」（星与条纹）", pos: "绀珠传五面,L" },
            { name: "狱炎「Graze Inferno」（擦弹地狱火）", pos: "绀珠传五面,H" },
            { name: "狱炎「擦弹的狱意」", pos: "绀珠传五面,L" },
            { name: "地狱「Striped Abyss」（条纹状的深渊）", pos: "绀珠传五面,L" },
            { name: "「Fake Apollo」（伪阿波罗）", pos: "绀珠传五面,N" },
            { name: "「阿波罗捏造说」", pos: "绀珠传五面,L" }
        ]
    },
    纯狐: {
        firstAppear: "东方绀珠传(2015)",
        music: "Pure Furies　～ 心之所在",
        wiki: "https://thbwiki.cc/纯狐",
        sign: "https://wyppony.github.io/touhouphotos/88.东方幻存神签（纯狐）.png",
        qImg: "东方/纯狐.png",
        cards: [
            { name: "「掌上的纯光」", pos: "绀珠传六面,L" },
            { name: "「杀意的百合」", pos: "绀珠传六面,L" },
            { name: "「原始的神灵界」", pos: "绀珠传六面,N" },
            { name: "「现代的神灵界」", pos: "绀珠传六面,L" },
            { name: "「战栗的寒冷之星」", pos: "绀珠传六面,L" },
            { name: "「纯粹的狂气」", pos: "绀珠传六面,L" },
            { name: "「溢出的瑕秽」", pos: "绀珠传六面,H" },
            { name: "「地上秽的纯化」", pos: "绀珠传六面,L" },
            { name: "纯符「Purely Bullet Hell」（单纯的子弹地狱）", pos: "绀珠传六面,N" },
            { name: "纯符「纯粹的弹幕地狱」", pos: "绀珠传六面,L" },
            { name: "「用于逼死瓮中鼠的单纯弹幕」", pos: "绀珠传,EX" },
            { name: "「用于杀人的纯粹弹幕」", pos: "绀珠传,EX" },
            { name: "「最初与最后的无名弹幕」", pos: "绀珠传,EX" }
        ]
    },
    赫卡提亚·拉碧斯拉祖利: {
        firstAppear: "东方绀珠传(2015)",
        music: "Pandemonic Planet",
        wiki: "https://thbwiki.cc/赫卡提亚·拉碧斯拉祖利",
        sign: "https://wyppony.github.io/touhouphotos/89.东方幻存神签（赫卡提亚·拉碧斯拉祖利）.png",
        qImg: "东方/赫卡提亚拉碧斯拉祖利.png",
        cards: [
            { name: "异界「逢魔之刻」", pos: "绀珠传,EX" },
            { name: "地球「邪秽在身」", pos: "绀珠传,EX" },
            { name: "月「阿波罗反射镜」", pos: "绀珠传,EX" },
            { name: "异界「地狱的非理想弹幕」", pos: "绀珠传,EX" },
            { name: "地球「落向地狱的雨」", pos: "绀珠传,EX" },
            { name: "月「Lunatic Impact」（月狂冲击）", pos: "绀珠传,EX" },
            { name: "「Trinitarian Rhapsody」（三位一体论狂想曲）", pos: "绀珠传,EX" },
            { name: "「最初与最后的无名弹幕」", pos: "绀珠传,EX" }
        ]
    },
    爱塔妮缇拉尔瓦: {
        firstAppear: "东方天空璋(2017)",
        music: "仲夏的妖精梦",
        wiki: "https://thbwiki.cc/爱塔妮缇拉尔瓦",
        sign: "https://wyppony.github.io/touhouphotos/92.东方幻存神签（爱塔妮缇拉尔瓦）.png",
        qImg: "东方/爱塔妮缇拉尔瓦.png",
        cards: [
            { name: "蝶符「Minute Scales」（细碎鳞粉）", pos: "天空璋一面,N" },
            { name: "蝶符「凤蝶的鳞粉」", pos: "天空璋一面,L" },
            { name: "蝶符「Fluttering Summer」（扑翅之夏）", pos: "天空璋一面,N" },
            { name: "蝶符「盛夏振翅」", pos: "天空璋一面,L" }
        ]
    },
    坂田合欢: {
        firstAppear: "东方天空璋(2017)",
        music: "深山的遭遇",
        wiki: "https://thbwiki.cc/坂田合欢",
        sign: "https://wyppony.github.io/touhouphotos/93.东方幻存神签（坂田合欢）.png",
        qImg: "东方/坂田合欢.png",
        cards: [
            { name: "雨符「被囚禁的秋雨」", pos: "天空璋二面,N" },
            { name: "雨符「被诅咒的豪雨」", pos: "天空璋二面,L" },
            { name: "刃符「山姥的菜刀研磨」", pos: "天空璋二面,N" },
            { name: "刃符「山姥的鬼菜刀研磨」", pos: "天空璋二面,L" },
            { name: "尽符「Mountain Murder」（深山谋杀）", pos: "天空璋二面,N" },
            { name: "尽符「Bloody Mountain Murder」（血腥的深山谋杀）", pos: "天空璋二面,L" }
        ]
    },
    高丽野阿吽: {
        firstAppear: "东方天空璋(2017)",
        music: "成对的神兽",
        wiki: "https://thbwiki.cc/高丽野阿吽",
        sign: "https://wyppony.github.io/touhouphotos/94.东方幻存神签（高丽野阿吽）.png",
        qImg: "东方/高丽野阿吽.png",
        cards: [
            { name: "犬符「野犬的散步」", pos: "天空璋三面,N" },
            { name: "狗符「山狗的散步」", pos: "天空璋三面,L" },
            { name: "陀螺「狛犬旋转」", pos: "天空璋三面,H" },
            { name: "陀螺「Curl Up and Die」（蜷缩死去）", pos: "天空璋三面,L" },
            { name: "狛符「单人式阿吽的呼吸」", pos: "天空璋三面,L" }
        ]
    },
    矢田寺成美: {
        firstAppear: "东方天空璋(2017)",
        music: "魔法的笠地藏",
        wiki: "https://thbwiki.cc/矢田寺成美",
        sign: "https://wyppony.github.io/touhouphotos/95.东方幻存神签（矢田寺成美）.png",
        qImg: "东方/矢田寺成美.png",
        cards: [
            { name: "魔符「Instant Bodhi」（顷刻菩提）", pos: "天空璋四面,N" },
            { name: "魔符「即席菩提」", pos: "天空璋四面,L" },
            { name: "魔符「Bullet Golem」（弹丸魔像）", pos: "天空璋四面,N" },
            { name: "魔符「作宠物的巨大弹生命体」", pos: "天空璋四面,L" },
            { name: "地藏「Criminal Salvation」（罪业救赎）", pos: "天空璋四面,N" },
            { name: "地藏「业火救济」", pos: "天空璋四面,L" }
        ]
    },
    尔子田里乃: {
        firstAppear: "东方天空璋(2017)",
        music: "Crazy Back Dancers",
        wiki: "https://thbwiki.cc/尔子田里乃",
        sign: "https://wyppony.github.io/touhouphotos/97.东方幻存神签（尔子田里乃）.png",
        qImg: "东方/尔子田里乃.png",
        cards: [
            { name: "茗荷「Forget Your Name」（忘却你的名字）", pos: "天空璋五面,L" },
            { name: "冥加「Behind You」（在你背后）", pos: "天空璋五面,L" },
            { name: "舞符「Behind Festival」（背后之祭）", pos: "天空璋五面,L" },
            { name: "狂舞「天狗怖吓」", pos: "天空璋五面,N" },
            { name: "狂舞「狂乱天狗怖吓」", pos: "天空璋五面,L" },
            { name: "鼓舞「Powerful Cheers」（强力助威）", pos: "天空璋,EX" },
            { name: "狂舞「Crazy Back Dance」（疯狂的背景舞）", pos: "天空璋,EX" },
            { name: "弹舞「双目台风」", pos: "天空璋,EX" }
        ]
    },
    丁礼田舞: {
        firstAppear: "东方天空璋(2017)",
        music: "Crazy Back Dancers",
        wiki: "https://thbwiki.cc/丁礼田舞",
        sign: "https://wyppony.github.io/touhouphotos/96.东方幻存神签（丁礼田舞）.png",
        qImg: "东方/丁礼田舞.png",
        cards: [
            { name: "竹符「Bamboo Spear Dance」（竹矛之舞）", pos: "天空璋五面,N" },
            { name: "竹符「Bamboo Crazy Dance」（竹之狂舞）", pos: "天空璋五面,L" },
            { name: "笹符「Tanabata Star Festival」（七夕星祭）", pos: "天空璋五面,L" },
            { name: "舞符「Behind Festival」（背后之祭）", pos: "天空璋五面,L" },
            { name: "狂舞「天狗怖吓」", pos: "天空璋五面,N" },
            { name: "狂舞「狂乱天狗怖吓」", pos: "天空璋五面,L" },
            { name: "鼓舞「Powerful Cheers」（强力助威）", pos: "天空璋,EX" },
            { name: "狂舞「Crazy Back Dance」（疯狂的背景舞）", pos: "天空璋,EX" },
            { name: "弹舞「双目台风」", pos: "天空璋,EX" }
        ]
    },
    摩多罗隐岐奈: {
        firstAppear: "东方天空璋(2017)",
        music: "被秘匿的四个季节(六面)&秘神摩多罗　～ Hidden Star in All Seasons.(EX面)",
        wiki: "https://thbwiki.cc/摩多罗隐岐奈",
        sign: "https://wyppony.github.io/touhouphotos/98.东方幻存神签（摩多罗隐岐奈）.png",
        qImg: "东方/摩多罗隐岐奈.png",
        cards: [
            { name: "后符「秘神的后光」", pos: "天空璋六面,H" },
            { name: "后符「绝对秘神的后光」", pos: "天空璋六面,L" },
            { name: "里夏「Scorch by Hot Summer」（暑夏炙烤）", pos: "天空璋六面,N" },
            { name: "里夏「异常酷暑之焦土」", pos: "天空璋六面,L" },
            { name: "里秋「Die of Famine」（死于饥荒）", pos: "天空璋六面,N" },
            { name: "里秋「异常枯死之饿鬼」", pos: "天空璋六面,L" },
            { name: "里冬「Black Snowman」（黑色雪人）", pos: "天空璋六面,N" },
            { name: "里冬「异常降雪之雪人」", pos: "天空璋六面,L" },
            { name: "里春「April Wizard」（四月巫师）", pos: "天空璋六面,N" },
            { name: "里春「异常落花之魔术使」", pos: "天空璋六面,L" },
            { name: "「里·Breezy Cherry Blossom」（里·风吹樱花）", pos: "天空璋六面,L" },
            { name: "「里·Perfect Summer Ice」（里·完美夏冰）", pos: "天空璋六面,L" },
            { name: "「里·Crazy Fall Wind」（里·疯狂秋风）", pos: "天空璋六面,L" },
            { name: "「里·Extreme Winter」（里·极端寒冬）", pos: "天空璋六面,L" },
            { name: "秘仪「Reverse Invoker」（逆向呼神者）", pos: "天空璋,EX" },
            { name: "秘仪「背叛的后方射击」", pos: "天空璋,EX" },
            { name: "秘仪「弹幕的玉茧」", pos: "天空璋,EX" },
            { name: "秘仪「秽那之火」", pos: "天空璋,EX" },
            { name: "秘仪「后户的狂言」", pos: "天空璋,EX" },
            { name: "秘仪「Matarah Dukkha」（摩多罗苦谛）", pos: "天空璋,EX" },
            { name: "秘仪「七星之剑」", pos: "天空璋,EX" },
            { name: "秘仪「无纽带的艺人」", pos: "天空璋,EX" },
            { name: "「背面的暗黑猿乐」", pos: "天空璋,EX" },
            { name: "「Anarchy Bullet Hell」（无秩序弹幕地狱）", pos: "天空璋,EX" }
        ]
    },
    戎璎花: {
        firstAppear: "东方鬼形兽(2019)",
        music: "Jelly Stone",
        wiki: "https://thbwiki.cc/戎璎花",
        sign: "https://wyppony.github.io/touhouphotos/99.东方幻存神签（戎璎花）.png",
        qImg: "东方/戎璎花.png",
        cards: [
            { name: "石符「Stone Woods」（石林）", pos: "鬼形兽一面,N" },
            { name: "石符「Stone Conifer」（石头针叶树）", pos: "鬼形兽一面,L" },
            { name: "石符「Children's Limbo」（孩子们的灵薄狱）", pos: "鬼形兽一面,N" },
            { name: "石符「Adult Children's Limbo」（大孩子们的灵薄狱）", pos: "鬼形兽一面,L" }
        ]
    },
    牛崎润美: {
        firstAppear: "东方鬼形兽(2019)",
        music: "石之婴儿与水中牛",
        wiki: "https://thbwiki.cc/牛崎润美",
        sign: "https://wyppony.github.io/touhouphotos/100.东方幻存神签（牛崎润美）.png",
        qImg: "东方/牛崎润美.png",
        cards: [
            { name: "石符「Stone Baby」（石之婴儿）", pos: "鬼形兽二面,N" },
            { name: "石符「Heavy Stone Baby」（沉重的石之婴儿）", pos: "鬼形兽二面,L" },
            { name: "溺符「三途的沦溺」", pos: "鬼形兽二面,L" },
            { name: "鬼符「Demon Siege」（魔鬼围城）", pos: "鬼形兽二面,N" },
            { name: "鬼符「Hungry Demon Siege」（饿鬼围城）", pos: "鬼形兽二面,L" }
        ]
    },
    庭渡久侘歌: {
        firstAppear: "东方鬼形兽(2019)",
        music: "Seraphic Chicken",
        wiki: "https://thbwiki.cc/庭渡久侘歌",
        sign: "https://wyppony.github.io/touhouphotos/101.东方幻存神签（庭渡久侘歌）.png",
        qImg: "东方/庭渡久侘歌.png",
        cards: [
            { name: "水符「分水的试练」", pos: "鬼形兽三面,N" },
            { name: "水符「分水的上级试炼」", pos: "鬼形兽三面,H" },
            { name: "水符「分水的顶级试炼」", pos: "鬼形兽三面,L" },
            { name: "光符「瞭望的试练」", pos: "鬼形兽三面,N" },
            { name: "光符「瞭望的上级试炼」", pos: "鬼形兽三面,H" },
            { name: "光符「瞭望的顶级试炼」", pos: "鬼形兽三面,L" },
            { name: "鬼符「鬼渡的试练」", pos: "鬼形兽三面,N" },
            { name: "鬼符「鬼渡的上级试炼」", pos: "鬼形兽三面,H" },
            { name: "鬼符「鬼渡的狱级试炼」", pos: "鬼形兽三面,L" },
            { name: "血战「血之分水岭」", pos: "鬼形兽,EX" },
            { name: "血战「狱界视线」", pos: "鬼形兽,EX" },
            { name: "血战「全灵鬼渡」", pos: "鬼形兽,EX" }
        ]
    },
    吉吊八千慧: {
        firstAppear: "东方鬼形兽(2019)",
        music: "Tortoise Dragon　～ 幸运与不幸",
        wiki: "https://thbwiki.cc/吉吊八千慧",
        sign: "https://wyppony.github.io/touhouphotos/102.东方幻存神签（吉吊八千慧）.png",
        qImg: "东方/吉吊八千慧.png",
        cards: [
            { name: "龟符「龟甲地狱」", pos: "鬼形兽四面,L" },
            { name: "鬼符「邪道之畜生」", pos: "鬼形兽四面,N" },
            { name: "鬼符「邪道之狗畜生」", pos: "鬼形兽四面,H" },
            { name: "鬼符「邪道之鬼畜生」", pos: "鬼形兽四面,L" },
            { name: "龙符「龙纹弹」", pos: "鬼形兽四面,L" }
        ]
    },
    杖刀偶磨弓: {
        firstAppear: "东方鬼形兽(2019)",
        music: "陶瓷的杖刀人",
        wiki: "https://thbwiki.cc/杖刀偶磨弓",
        sign: "https://wyppony.github.io/touhouphotos/103.东方幻存神签（杖刀偶磨弓）.png",
        qImg: "东方/杖刀偶磨弓.png",
        cards: [
            { name: "埴轮「弓兵埴轮」", pos: "鬼形兽五面,N" },
            { name: "埴轮「熟练弓兵埴轮」", pos: "鬼形兽五面,L" },
            { name: "埴轮「剑士埴轮」", pos: "鬼形兽五面,N" },
            { name: "埴轮「熟练剑士埴轮」", pos: "鬼形兽五面,L" },
            { name: "埴轮「骑马兵埴轮」", pos: "鬼形兽五面,N" },
            { name: "埴轮「熟练骑马兵埴轮」", pos: "鬼形兽五面,L" },
            { name: "埴轮「空洞的无尽兵团」", pos: "鬼形兽五面,N" },
            { name: "埴轮「不败的无尽兵团」", pos: "鬼形兽五面,L" }
        ]
    },
    埴安神袿姬: {
        firstAppear: "东方鬼形兽(2019)",
        music: "寄世界于偶像　～ Idoratrize World",
        wiki: "https://thbwiki.cc/埴安神袿姬",
        sign: "https://wyppony.github.io/touhouphotos/104.东方幻存神签（埴安神袿姬）.png",
        qImg: "东方/埴安神袿姬.png",
        cards: [
            { name: "方形「方形造形术」", pos: "鬼形兽六面,N" },
            { name: "方形「Square Creature」（方形造物）", pos: "鬼形兽六面,L" },
            { name: "圆形「正圆造形术」", pos: "鬼形兽六面,N" },
            { name: "圆形「Circle Creature」（圆形造物）", pos: "鬼形兽六面,L" },
            { name: "线形「线形造形术」", pos: "鬼形兽六面,N" },
            { name: "线形「Linear Creature」（线形造物）", pos: "鬼形兽六面,L" },
            { name: "埴轮「偶像人马造形术」", pos: "鬼形兽六面,N" },
            { name: "埴轮「Idol Creature」（偶像造物）", pos: "鬼形兽六面,L" },
            { name: "「鬼形造形术」", pos: "鬼形兽六面,L" },
            { name: "「Geometric Creature」（几何造物）", pos: "鬼形兽六面,L" },
            { name: "「Idola Diabolus」（造形恶魔）", pos: "鬼形兽六面,L" }
        ]
    },
    骊驹早鬼: {
        firstAppear: "东方鬼形兽(2019)",
        music: "圣德太子的天马　～ Dark Pegasus",
        wiki: "https://thbwiki.cc/骊驹早鬼",
        sign: "https://wyppony.github.io/touhouphotos/105.东方幻存神签（骊驹早鬼）.png",
        qImg: "东方/骊驹早鬼.png",
        cards: [
            { name: "劲疾技「Thrilling Shot」（惊险射击）", pos: "鬼形兽,EX" },
            { name: "劲疾技「Lightning Neigh」（闪电嘶鸣）", pos: "鬼形兽,EX" },
            { name: "劲疾技「Dense Cloud」（浓云）", pos: "鬼形兽,EX" },
            { name: "劲疾技「Beast Epidemicity」（兽性感染）", pos: "鬼形兽,EX" },
            { name: "劲疾技「Triangle Chase」（三角追击）", pos: "鬼形兽,EX" },
            { name: "劲疾技「黑色天马流星弹」", pos: "鬼形兽,EX" },
            { name: "劲疾技「Muscle Explosion」（肌肉爆破）", pos: "鬼形兽,EX" },
            { name: "「Follow Me, Unafraid」（莫慌跟上我）", pos: "鬼形兽,EX" },
            { name: "「鬼形的乌合之众」", pos: "鬼形兽,EX" },
            { name: "「鬼畜生之所为」", pos: "鬼形兽,EX" }
        ]
    },
    豪德寺三花: {
        firstAppear: "东方虹龙洞(2021)",
        music: "大吉猫咪",
        wiki: "https://thbwiki.cc/豪德寺三花",
        sign: "https://wyppony.github.io/touhouphotos/107.东方幻存神签（豪德寺三花）.png",
        qImg: "东方/豪德寺三花.png",
        cards: [
            { name: "招符「弹幕万来」", pos: "虹龙洞一面,L" },
            { name: "招符「弹灾招福」", pos: "虹龙洞一面,L" }
        ]
    },
    山城高岭: {
        firstAppear: "东方虹龙洞(2021)",
        music: "Banditry Technology",
        wiki: "https://thbwiki.cc/山城高岭",
        sign: "https://wyppony.github.io/touhouphotos/108.东方幻存神签（山城高岭）.png",
        qImg: "东方/山城高岭.png",
        cards: [
            { name: "森符「木隐的技术」", pos: "虹龙洞二面,N" },
            { name: "森符「极·木隐的技术」", pos: "虹龙洞二面,H" },
            { name: "森符「真·木隐的技术」", pos: "虹龙洞二面,L" },
            { name: "森符「最深的森域」", pos: "虹龙洞二面,N" },
            { name: "森符「极·最深的森域」", pos: "虹龙洞二面,H" },
            { name: "森符「真·最深的森域」", pos: "虹龙洞二面,L" },
            { name: "叶技「Green Spiral」（绿色螺旋）", pos: "虹龙洞二面,N" },
            { name: "叶技「Green Cyclone」（绿色旋风）", pos: "虹龙洞二面,H" },
            { name: "叶技「Green Tornado」（绿色龙卷）", pos: "虹龙洞二面,L" }
        ]
    },
    驹草山如: {
        firstAppear: "东方虹龙洞(2021)",
        music: "Smoking Dragon",
        wiki: "https://thbwiki.cc/驹草山如",
        sign: "https://wyppony.github.io/touhouphotos/109.东方幻存神签（驹草山如）.png",
        qImg: "东方/驹草山如.png",
        cards: [
            { name: "山符「惊天的云间草」", pos: "虹龙洞三面,N" },
            { name: "山怪「惊愕的云间草」", pos: "虹龙洞三面,L" },
            { name: "山符「妖光闪闪的薄雪草」", pos: "虹龙洞三面,N" },
            { name: "山怪「妖魔喧嚣的薄雪草」", pos: "虹龙洞三面,L" },
            { name: "山花「杀戮的驹草」", pos: "虹龙洞三面,N" },
            { name: "山花「杀戮的山之女王」", pos: "虹龙洞三面,L" }
        ]
    },
    玉造魅须丸: {
        firstAppear: "东方虹龙洞(2021)",
        music: "神代矿石",
        wiki: "https://thbwiki.cc/玉造魅须丸",
        sign: "https://wyppony.github.io/touhouphotos/110.东方幻存神签（玉造魅须丸）.png",
        qImg: "东方/玉造魅须丸.png",
        cards: [
            { name: "玉符「虹龙阴阳玉」", pos: "虹龙洞四面,H" },
            { name: "玉符「阴阳神玉」", pos: "虹龙洞四面,L" },
            { name: "玉将「Queen of Yin Yang Sphere」（阴阳玉女王）", pos: "虹龙洞四面,N" },
            { name: "女王珠「彩虹门的另一侧」", pos: "虹龙洞四面,L" },
            { name: "「阴阳窒息」", pos: "虹龙洞四面,L" }
        ]
    },
    菅牧典: {
        firstAppear: "东方虹龙洞(2021)",
        music: "渴盼已久的逢魔之刻",
        wiki: "https://thbwiki.cc/菅牧典",
        sign: "https://wyppony.github.io/touhouphotos/111.东方幻存神签（菅牧典）.png",
        qImg: "东方/菅牧典.png",
        cards: [
            { name: "狐符「Fox Winder」（狐之绞盘）", pos: "虹龙洞,EX" },
            { name: "管狐「Cylinder Fox」（圆管之狐）", pos: "虹龙洞,EX" },
            { name: "星狐「天狐龙星之舞」", pos: "虹龙洞,EX" }
        ]
    },
    饭纲丸龙: {
        firstAppear: "东方虹龙洞(2021)",
        music: "天魔之山漫天星",
        wiki: "https://thbwiki.cc/饭纲丸龙",
        sign: "https://wyppony.github.io/touhouphotos/112.东方幻存神签（饭纲丸龙）.png",
        qImg: "东方/饭纲丸龙.png",
        cards: [
            { name: "祸星「星火燎原之舞」", pos: "虹龙洞五面,N" },
            { name: "祸星「星火燎原乱舞」", pos: "虹龙洞五面,L" },
            { name: "星风「虹彩陆离之舞」", pos: "虹龙洞五面,N" },
            { name: "星风「虹彩陆离乱舞」", pos: "虹龙洞五面,L" },
            { name: "光马「天马行空之舞」", pos: "虹龙洞五面,N" },
            { name: "光马「天马行空乱舞」", pos: "虹龙洞五面,L" },
            { name: "虹光「光风霁月」", pos: "虹龙洞五面,L" }
        ]
    },
    天弓千亦: {
        firstAppear: "东方虹龙洞(2021)",
        music: "熙攘市场今何在　～ Immemorial Marketeers",
        wiki: "https://thbwiki.cc/天弓千亦",
        sign: "https://wyppony.github.io/touhouphotos/113.东方幻存神签（天弓千亦）.png",
        qImg: "东方/天弓千亦.png",
        cards: [
            { name: "「向无主的贡品」", pos: "虹龙洞六面,L" },
            { name: "「弹幕收集狂的妄执」", pos: "虹龙洞六面,L" },
            { name: "「Bullet Market」（弹幕市场）", pos: "虹龙洞六面,N" },
            { name: "「高密度弹幕市场」", pos: "虹龙洞六面,H" },
            { name: "「弹幕自由市场」", pos: "虹龙洞六面,L" },
            { name: "「虹人环」", pos: "虹龙洞六面,L" },
            { name: "「Bullet Dominion」（弹幕领土）", pos: "虹龙洞六面,N" },
            { name: "「暴虐的弹幕领土」", pos: "虹龙洞六面,H" },
            { name: "「无道的弹幕领土」", pos: "虹龙洞六面,L" },
            { name: "「弹幕的庇护所」", pos: "虹龙洞六面,L" }
        ]
    },
    姬虫百百世: {
        firstAppear: "东方虹龙洞(2021)",
        music: "灭杀龙王的公主",
        wiki: "https://thbwiki.cc/姬虫百百世",
        sign: "https://wyppony.github.io/touhouphotos/114.东方幻存神签（姬虫百百世）.png",
        qImg: "东方/姬虫百百世.png",
        cards: [
            { name: "蛊毒「Cannibalistic Insect」（食人昆虫）", pos: "虹龙洞,EX" },
            { name: "蛊毒「Cave Swarmer」（洞穴蜂群）", pos: "虹龙洞,EX" },
            { name: "蛊毒「Sky Pendra」（飞天蜈蚣）", pos: "虹龙洞,EX" },
            { name: "采掘「不断累积的矿山废石」", pos: "虹龙洞,EX" },
            { name: "采掘「Mine Blast」（矿山爆破）", pos: "虹龙洞,EX" },
            { name: "采掘「妖怪们的盾构法」", pos: "虹龙洞,EX" },
            { name: "大蜈蚣「Snake Eater」（噬蛇者）", pos: "虹龙洞,EX" },
            { name: "大蜈蚣「Dragon Eater」（噬龙者）", pos: "虹龙洞,EX" },
            { name: "「蛊毒的美食家」", pos: "虹龙洞,EX" },
            { name: "「虫姬殿下的闪耀忙乱的日常」", pos: "虹龙洞,EX" }
        ]
    },
    孙美天: {
        firstAppear: "东方兽王园(2023)",
        music: "Tiny Shangri-La",
        wiki: "https://thbwiki.cc/孙美天",
        sign: "https://wyppony.github.io/touhouphotos/115.东方幻存神签（孙美天）.png",
        qImg: "东方/孙美天.png",
        cards: [
            { name: "猿击「Monkey Magic」（仙猴神通）", pos: "兽王园,自机符卡" }
        ]
    },
    三头慧之子: {
        firstAppear: "东方兽王园(2023)",
        music: "勇敢又慵懒的妖兽",
        wiki: "https://thbwiki.cc/三头慧之子",
        sign: "https://wyppony.github.io/touhouphotos/116.东方幻存神签（三头慧之子）.png",
        qImg: "东方/三头慧之子.png",
        cards: [
            { name: "三头「Cerberus Fire」（刻耳柏洛斯之火）", pos: "兽王园,自机符卡" }
        ]
    },
    天火人血枪: {
        firstAppear: "东方兽王园(2023)",
        music: "吸血怪兽卓柏卡布拉",
        wiki: "https://thbwiki.cc/天火人血枪",
        sign: "https://wyppony.github.io/touhouphotos/117.东方幻存神签（天火人血枪）.png",
        qImg: "东方/天火人血枪.png",
        cards: [
            { name: "咒血「Cursed Devil」（被诅咒的恶魔）", pos: "兽王园,自机符卡" }
        ]
    },
    豫母都日狭美: {
        firstAppear: "东方兽王园(2023)",
        music: "不回首的黄泉路",
        wiki: "https://thbwiki.cc/豫母都日狭美",
        sign: "https://wyppony.github.io/touhouphotos/118.东方幻存神签（豫母都日狭美）.png",
        qImg: "东方/豫母都日狭美.png",
        cards: [
            { name: "执行者「越狱跟踪狂」", pos: "兽王园,自机符卡" }
        ]
    },
    日白残无: {
        firstAppear: "东方兽王园(2023)",
        music: "越轨者们的无碍光　～ Kingdom of Nothingness.",
        wiki: "https://thbwiki.cc/孙美天",
        sign: "https://wyppony.github.io/touhouphotos/119.东方幻存神签（日白残无）.png",
        qImg: "东方/日白残无.png",
        cards: [
            { name: "「纯灵弹」", pos: "兽王园,自机符卡" },
            { name: "「无心纯灵弹」", pos: "兽王园,故事模式专有符卡" },
            { name: "「亡羊的王国」", pos: "兽王园,故事模式专有符卡" }
        ]
    },
    伊吹萃香: {
        firstAppear: "东方萃梦想(2004)",
        music: "御伽之国的鬼岛　～ Missing Power",
        wiki: "https://thbwiki.cc/伊吹萃香",
        sign: "https://wyppony.github.io/touhouphotos/21.东方幻存神签（伊吹萃香）.png",
        qImg: "东方/伊吹萃香.png",
        cards: [
            { name: "萃符「户隐山之投」", pos: "非想天则,无难度标注" },
            { name: "醉神「鬼缚之术」", pos: "非想天则,无难度标注" },
            { name: "鬼符「Missing Power」（遗失的力量）", pos: "非想天则,无难度标注" },
            { name: "萃鬼「天手力男之投」", pos: "非想天则,无难度标注" },
            { name: "醉梦「施饿鬼缚之术」", pos: "非想天则,无难度标注" },
            { name: "鬼神「Missing Purple Power」（遗失的高贵之力）", pos: "非想天则,无难度标注" },
            { name: "雾符「云集雾散」", pos: "非想天则,无难度标注" },
            { name: "鬼火「超高密度磷祸术」", pos: "非想天则,无难度标注" },
            { name: "鬼符「大江山悉皆杀」", pos: "非想天则,无难度标注" },
            { name: "四天王奥义「三步坏废」", pos: "非想天则,无难度标注" }
        ]
    },
    茨木华扇: {
        firstAppear: "东方茨歌仙(2010)",
        music: "华狭间的战场",
        wiki: "https://thbwiki.cc/茨木华扇",
        sign: "https://wyppony.github.io/touhouphotos/81.东方幻存神签（茨木华扇）.png",
        qImg: "东方/茨木华扇.png",
        cards: [
            { name: "包符「假肢变形」", pos: "凭依华,无难度标注" },
            { name: "龙符「Dragon's Growl」（巨龙之啸）", pos: "凭依华,无难度标注" },
            { name: "鹰符「Hawk Beacon」（飞鹰信标）", pos: "凭依华,无难度标注" },
            { name: "＊猿之手啊！捏碎敌人！＊", pos: "凭依华,无难度标注" }
        ]
    },
    比那名居天子: {
        firstAppear: "东方绯想天(2007)",
        music: "有顶天変 ～ Wonderful Heaven",
        wiki: "https://thbwiki.cc/比那名居天子",
        sign: "https://wyppony.github.io/touhouphotos/45.东方幻存神签（比那名居天子）.png",
        qImg: "东方/比那名居天子.png",
        cards: [
            { name: "地符「不让土壤之剑」", pos: "非想天则,无难度标注" },
            { name: "非想「非想非非想之剑」", pos: "非想天则,无难度标注" },
            { name: "天符「天道是非之剑」", pos: "非想天则,无难度标注" },
            { name: "剑技「气焰万丈之剑」", pos: "非想天则,无难度标注" },
            { name: "天气「绯想天促」", pos: "非想天则,无难度标注" },
            { name: "气符「天启气象之剑」", pos: "非想天则,无难度标注" },
            { name: "气符「无念无想的境界」", pos: "非想天则,无难度标注" },
            { name: "地震「先忧后乐之剑」", pos: "非想天则,无难度标注" },
            { name: "要石「天地开辟之挤压」", pos: "非想天则,无难度标注" },
            { name: "「全人类的绯想天」", pos: "非想天则,无难度标注" },
            { name: "要石「要石浮游炮」", pos: "凭依华,无难度标注" },
            { name: "地符「一击震乾坤」", pos: "凭依华,无难度标注" },
            { name: "桃符「固若金汤的仙桃」", pos: "凭依华,无难度标注" },
            { name: "＊大气圈尽在吾之手中＊", pos: "凭依华,无难度标注" }
        ]
    },
    永江衣玖: {
        firstAppear: "东方绯想天(2007)",
        music: "黑海中的绯红　～ Legendary Fish",
        wiki: "https://thbwiki.cc/永江衣玖",
        sign: "https://wyppony.github.io/touhouphotos/44.东方幻存神签（永江衣玖）.png",
        qImg: "东方/永江衣玖.png",
        cards: [
            { name: "电符「雷鼓弹」", pos: "非想天则,无难度标注" },
            { name: "鱼符「龙鱼电钻」", pos: "非想天则,无难度标注" },
            { name: "雷符「电气的龙宫」", pos: "非想天则,无难度标注" },
            { name: "光星「光龙之叹息」", pos: "非想天则,无难度标注" },
            { name: "雷鱼「雷云鱼游泳弹」", pos: "非想天则,无难度标注" },
            { name: "羽衣「羽衣若空」", pos: "非想天则,无难度标注" },
            { name: "棘符「雷云棘鱼」", pos: "非想天则,无难度标注" },
            { name: "龙鱼「龙宫使的游泳弹」", pos: "非想天则,无难度标注" },
            { name: "羽衣「羽衣若时」", pos: "非想天则,无难度标注" },
            { name: "珠符「五爪龙之珠」", pos: "非想天则,无难度标注" }
        ]
    },
    宇佐见堇子: {
        firstAppear: "东方深秘录(2015)",
        music: "Last Occultism　～ 现世的秘术师",
        wiki: "https://thbwiki.cc/宇佐见堇子",
        sign: "https://wyppony.github.io/touhouphotos/82.东方幻存神签（宇佐见堇子）.png",
        qImg: "东方/宇佐见堇子.png",
        cards: [
            { name: "枪符「3D Printer Gun」（3D打印枪）", pos: "凭依华,无难度标注" },
            { name: "念力「Psychokinesis APP」", pos: "凭依华,无难度标注" },
            { name: "念力「Telekinesis 通信塔」", pos: "凭依华,无难度标注" },
            { name: "＊幻视吧！目睹异世界的狂气＊", pos: "凭依华,无难度标注" }
        ]
    },
    秦心: {
        firstAppear: "东方心绮楼(2013)",
        music: "亡失的情感",
        wiki: "https://thbwiki.cc/秦心",
        sign: "https://wyppony.github.io/touhouphotos/72.东方幻存神签（秦心）.png",
        qImg: "东方/秦心.png",
        cards: [
            { name: "怒面「愤怒的忌狼之面」", pos: "凭依华,无难度标注" },
            { name: "凭依「喜怒哀乐附体」", pos: "凭依华,无难度标注" },
            { name: "忧面「杞人忧地」", pos: "凭依华,无难度标注" },
            { name: "「假面丧心舞 暗黑能乐」", pos: "心绮楼,无难度标注" },
            { name: "＊就算这样，我也漂亮吧？＊", pos: "凭依华,无难度标注" }
        ]
    },
    依神女苑: {
        firstAppear: "东方凭依华(2017)",
        music: "今宵是飘逸的利己主义者～ Egoistic Flowers.",
        wiki: "https://thbwiki.cc/依神女苑",
        sign: "https://wyppony.github.io/touhouphotos/90.东方幻存神签（依神女苑）.png",
        qImg: "东方/依神女苑.png",
        cards: [
            { name: "凭依剥夺「Slave Robber」（下仆掠夺者）", pos: "凭依华,无难度标注" },
            { name: "贫符「超贫穷玉」", pos: "凭依华,无难度标注" },
            { name: "「Queen of Bubble」（泡沫女王）", pos: "凭依华,无难度标注" },
            { name: "「80年代的勒索者」", pos: "凭依华,无难度标注" }
        ]
    },
    依神紫苑: {
        firstAppear: "东方凭依华(2017)",
        music: "今宵是飘逸的利己主义者～ Egoistic Flowers.",
        wiki: "https://thbwiki.cc/依神紫苑",
        sign: "https://wyppony.github.io/touhouphotos/91.东方幻存神签（依神紫苑）.png",
        qImg: "东方/依神紫苑.png",
        cards: [
            { name: "不幸「欢迎来到极端贫困的世界」", pos: "凭依华,无难度标注" },
            { name: "财祸「Pluck Pigeon」（雁过拔毛）", pos: "凭依华,无难度标注" },
            { name: "凭依交换「Absolute Loser」（绝对输家）", pos: "凭依华,无难度标注" },
            { name: "贫符「Mischance Scatter」（厄运播撒）", pos: "凭依华,无难度标注" },
            { name: "「最凶最恶的极贫不幸神」", pos: "凭依华,无难度标注" }
        ]
    },
    姬海棠果: {
        firstAppear: "东方文花帖DS(2010)",
        music: "无",
        wiki: "https://thbwiki.cc/姬海棠果",
        sign: "https://wyppony.github.io/touhouphotos/61.东方幻存神签（姬海棠果）.png",
        qImg: "东方/姬海棠果.png",
        cards: [
            { name: "采访「姬海棠果的采访练习」", pos: "文花帖DS,无难度标注" },
            { name: "连拍「Rapid Shot」（连续拍照）", pos: "文花帖DS,无难度标注" },
            { name: "远视「天狗念写法」", pos: "文花帖DS,无难度标注" },
            { name: "写真「Full Panorama Shot」（全景拍照）", pos: "弹幕天邪鬼,无难度标注" },
            { name: "写真「足不出户的狗仔队」", pos: "弹幕天邪鬼,无难度标注" }
        ]
    },
    宇佐见莲子: {
        firstAppear: "莲台野夜行(2003)",
        music: "少女秘封俱乐部&月之妖鸟、化猫之幻",
        wiki: "https://thbwiki.cc/宇佐见莲子",
        sign: "#",
        qImg: "东方/宇佐见莲子.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    玛艾露贝莉·赫恩: {
        firstAppear: "莲台野夜行(2003)",
        music: "魔术师梅莉",
        wiki: "https://thbwiki.cc/玛艾露贝莉·赫恩",
        sign: "#",
        qImg: "东方/梅莉.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    奥野田美宵: {
        firstAppear: "东方醉蝶华(2019)",
        music: "无",
        wiki: "https://thbwiki.cc/奥野田美宵",
        sign: "https://wyppony.github.io/touhouphotos/123.东方幻存神签（奥野田美宵）.png",
        qImg: "东方/奥野田美宵.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    蓬莱人形封面角色: {
        firstAppear: "蓬莱人形(2002)",
        music: "无",
        wiki: "https://thbwiki.cc/蓬莱人形#封面角色",
        sign: "#",
        qImg: "东方/夹克子.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    本居小铃: {
        firstAppear: "东方茨歌仙(2010)",
        music: "无",
        wiki: "https://thbwiki.cc/本居小铃",
        sign: "https://wyppony.github.io/touhouphotos/122.东方幻存神签（本居小铃）.png",
        qImg: "东方/本居小铃.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    稗田阿求: {
        firstAppear: "幺乐团的历史1(2006)",
        music: "无",
        wiki: "https://thbwiki.cc/稗田阿求",
        sign: "https://wyppony.github.io/touhouphotos/126.东方幻存神签（稗田阿求）.png",
        qImg: "东方/稗田阿求.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    绵月丰姬: {
        firstAppear: "东方儚月抄(2007)",
        music: "绵月的符卡　～ 神海战(锦上京)",
        wiki: "https://thbwiki.cc/绵月丰姬",
        sign: "https://wyppony.github.io/touhouphotos/120.东方幻存神签（绵月丰姬）.png",
        qImg: "东方/绵月丰姬.png",
        cards: [
            { name: "宝珠「潮盈珠」", pos: "锦上京五面,N" },
            { name: "灾祸「山洪」", pos: "锦上京五面,N" },
            { name: "灾祸「漫长的山洪」", pos: "锦上京五面,H" },
            { name: "灾祸「无尽的山洪」", pos: "锦上京五面,L" },
            { name: "宝珠「潮干珠」", pos: "锦上京五面,H" },
            { name: "「Moon Dragon」（月龙）", pos: "锦上京五面,L" }
        ]
    },
    绵月依姬: {
        firstAppear: "东方儚月抄(2007)",
        music: "绵月的符卡　～ Lunatic Blue(儚月抄随书附赠曲目)",
        wiki: "https://thbwiki.cc/绵月依姬",
        sign: "https://wyppony.github.io/touhouphotos/121.东方幻存神签（绵月依姬）.png",
        qImg: "东方/绵月依姬.png",
        cards: [
            { name: "「火雷神」", pos: "书籍符卡" },
            { name: "「金山彦命」", pos: "书籍符卡" },
            { name: "「天津瓮星」", pos: "书籍符卡" },
            { name: "「石凝姥命」", pos: "书籍符卡" },
            { name: "「天宇受卖命」", pos: "书籍符卡" },
            { name: "「天照大御神」", pos: "书籍符卡" },
            { name: "「伊豆能卖」", pos: "书籍符卡" }
        ]
    },
    "铃仙二号（泠仙）": {
        firstAppear: "东方儚月抄(2007)",
        music: "无",
        wiki: "https://thbwiki.cc/reisen",
        sign: "#",
        qImg: "东方/reisen.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    桑尼米尔克: {
        firstAppear: "东方三月精E(2005)",
        music: "妖精大战争　～ Fairy Wars",
        wiki: "https://thbwiki.cc/桑尼米尔克",
        sign: "https://wyppony.github.io/touhouphotos/62.东方幻存神签（桑尼米尔克）.png",
        qImg: "东方/桑尼米尔克.png",
        cards: [
            { name: "光符「Bright Night」（白夜）", pos: "无难度标注" },
            { name: "光符「Rutile Flection」（金红石折射）", pos: "无难度标注" },
            { name: "日热「Ice Dissolver」（寒冰熔解器）", pos: "无难度标注" },
            { name: "空符「Elfin Canopy」（苍穹中的精灵）", pos: "无难度标注" },
            { name: "协力技「Fairy Overdrive」（妖精大暴走）	", pos: "无难度标注" },
            { name: "「Three Fairies」（三月精）", pos: "无难度标注" },
            { name: "光符「Triple Meteor」（三重陨石）", pos: "无难度标注" }
        ]
    },
    露娜切露德: {
        firstAppear: "东方三月精E(2005)",
        music: "妖精大战争　～ Fairy Wars",
        wiki: "https://thbwiki.cc/露娜切露德",
        sign: "https://wyppony.github.io/touhouphotos/63.东方幻存神签（露娜切露德）.png",
        qImg: "东方/露娜切云德.png",
        cards: [
            { name: "光符「Bright Night」（白夜）", pos: "无难度标注" },
            { name: "光符「Rutile Flection」（金红石折射）", pos: "无难度标注" },
            { name: "日热「Ice Dissolver」（寒冰熔解器）", pos: "无难度标注" },
            { name: "空符「Elfin Canopy」（苍穹中的精灵）", pos: "无难度标注" },
            { name: "协力技「Fairy Overdrive」（妖精大暴走）	", pos: "无难度标注" },
            { name: "「Three Fairies」（三月精）", pos: "无难度标注" },
            { name: "光符「Triple Meteor」（三重陨石）", pos: "无难度标注" }
        ]
    },
    斯塔萨菲雅: {
        firstAppear: "东方三月精E(2005)",
        music: "妖精大战争　～ Fairy Wars",
        wiki: "https://thbwiki.cc/斯塔萨菲雅",
        sign: "https://wyppony.github.io/touhouphotos/64.东方幻存神签（斯塔萨菲雅）.png",
        qImg: "东方/斯塔萨菲雅.png",
        cards: [
            { name: "光符「Bright Night」（白夜）", pos: "无难度标注" },
            { name: "光符「Rutile Flection」（金红石折射）", pos: "无难度标注" },
            { name: "日热「Ice Dissolver」（寒冰熔解器）", pos: "无难度标注" },
            { name: "空符「Elfin Canopy」（苍穹中的精灵）", pos: "无难度标注" },
            { name: "协力技「Fairy Overdrive」（妖精大暴走）	", pos: "无难度标注" },
            { name: "「Three Fairies」（三月精）", pos: "无难度标注" },
            { name: "光符「Triple Meteor」（三重陨石）", pos: "无难度标注" }
        ]
    },
    森近霖之助: {
        firstAppear: "东方香霖堂(2004)",
        music: "无",
        wiki: "https://thbwiki.cc/森近霖之助",
        sign: "https://wyppony.github.io/touhouphotos/125.东方幻存神签（森近霖之助）.png",
        qImg: "东方/森近霖之助.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    "无名的读书妖怪(朱鹭子)": {
        firstAppear: "东方香霖堂(2004)",
        music: "无",
        wiki: "https://thbwiki.cc/无名的读书妖怪",
        sign: "#",
        qImg: "东方/朱鹭子.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    宫出口瑞灵: {
        firstAppear: "东方智灵奇传(2019)",
        music: "无",
        wiki: "https://thbwiki.cc/宫出口瑞灵",
        sign: "#",
        qImg: "东方/宫出口瑞灵.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    冈崎梦美: {
        firstAppear: "东方梦时空(1997)",
        music: "Strawberry Crisis!!",
        wiki: "https://thbwiki.cc/冈崎梦美",
        sign: "#",
        qImg: "东方/冈崎梦美.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    非想天则: {
        firstAppear: "东方非想天则(2009)",
        music: "无",
        wiki: "https://thbwiki.cc/非想天则",
        sign: "#",
        qImg: "东方/非想天则.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    易者: {
        firstAppear: "东方铃奈庵(2012)",
        music: "无",
        wiki: "https://thbwiki.cc/易者",
        sign: "#",
        qImg: "东方/易者.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    魅魔: {
        firstAppear: "东方灵异传(1996)",
        music: "天使传说",
        wiki: "https://thbwiki.cc/魅魔",
        sign: "#",
        qImg: "东方/魅魔.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    雪: {
        firstAppear: "东方怪绮谈(1998)",
        music: "禁忌的魔法　～ Forbidden Magic",
        wiki: "https://thbwiki.cc/雪",
        sign: "#",
        qImg: "东方/雪.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    舞: {
        firstAppear: "东方怪绮谈(1998)",
        music: "禁忌的魔法　～ Forbidden Magic",
        wiki: "https://thbwiki.cc/舞",
        sign: "#",
        qImg: "东方/舞.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    神绮: {
        firstAppear: "东方怪绮谈(1998)",
        music: "神话幻想　～ Infinite Being",
        wiki: "https://thbwiki.cc/神绮",
        sign: "#",
        qImg: "东方/神绮.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    留琴: {
        firstAppear: "东方梦时空(1997)",
        music: "无",
        wiki: "https://thbwiki.cc/留琴",
        sign: "#",
        qImg: "东方/留琴.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    卡娜·安娜贝拉尔: {
        firstAppear: "东方梦时空(1997)",
        music: "梦消失　～ Lost Dream",
        wiki: "https://thbwiki.cc/卡娜·安娜贝拉尔",
        sign: "#",
        qImg: "东方/卡娜安娜贝拉尔.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    },
    北白河千百合: {
        firstAppear: "东方梦时空(1997)",
        music: "Sailor of Time",
        wiki: "https://thbwiki.cc/北白河千百合",
        sign: "#",
        qImg: "东方/北白河千百合.png",
        cards: [
            { name: "无", pos: "Null" }
        ]
    }
};


const touhouWorkLib = [
            "东方红魔乡 博丽灵梦 Easy 快去试试吧！",
            "东方红魔乡 博丽灵梦 Normal 快去试试吧！",
            "东方红魔乡 博丽灵梦 Hard 快去试试吧！",
            "东方红魔乡 博丽灵梦 Lunatic 快去试试吧！",
            "东方红魔乡 雾雨魔理沙 Easy 快去试试吧！",
            "东方红魔乡 雾雨魔理沙 Normal 快去试试吧！",
            "东方红魔乡 雾雨魔理沙 Hard 快去试试吧！",
            "东方红魔乡 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方风神录 博丽灵梦 Easy 快去试试吧！",
            "东方风神录 博丽灵梦 Normal 快去试试吧！",
            "东方风神录 博丽灵梦 Hard 快去试试吧！",
            "东方风神录 博丽灵梦 Lunatic 快去试试吧！",
            "东方风神录 雾雨魔理沙 Easy 快去试试吧！",
            "东方风神录 雾雨魔理沙 Normal 快去试试吧！",
            "东方风神录 雾雨魔理沙 Hard 快去试试吧！",
            "东方风神录 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方地灵殿 博丽灵梦 Easy 快去试试吧！",
            "东方地灵殿 博丽灵梦 Normal 快去试试吧！",
            "东方地灵殿 博丽灵梦 Hard 快去试试吧！",
            "东方地灵殿 博丽灵梦 Lunatic 快去试试吧！",
            "东方地灵殿 雾雨魔理沙 Easy 快去试试吧！",
            "东方地灵殿 雾雨魔理沙 Normal 快去试试吧！",
            "东方地灵殿 雾雨魔理沙 Hard 快去试试吧！",
            "东方地灵殿 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方锦上京 博丽灵梦 Easy 快去试试吧！",
            "东方锦上京 博丽灵梦 Normal 快去试试吧！",
            "东方锦上京 博丽灵梦 Hard 快去试试吧！",
            "东方锦上京 博丽灵梦 Lunatic 快去试试吧！",
            "东方锦上京 雾雨魔理沙 Easy 快去试试吧！",
            "东方锦上京 雾雨魔理沙 Normal 快去试试吧！",
            "东方锦上京 雾雨魔理沙 Hard 快去试试吧！",
            "东方锦上京 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方星莲船 博丽灵梦 Easy 快去试试吧！",
            "东方星莲船 博丽灵梦 Normal 快去试试吧！",
            "东方星莲船 博丽灵梦 Hard 快去试试吧！",
            "东方星莲船 博丽灵梦 Lunatic 快去试试吧！",
            "东方星莲船 雾雨魔理沙 Easy 快去试试吧！",
            "东方星莲船 雾雨魔理沙 Normal 快去试试吧！",
            "东方星莲船 雾雨魔理沙 Hard 快去试试吧！",
            "东方星莲船 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方星莲船 东风谷早苗 Easy 快去试试吧！",
            "东方星莲船 东风谷早苗 Normal 快去试试吧！",
            "东方星莲船 东风谷早苗 Hard 快去试试吧！",
            "东方星莲船 东风谷早苗 Lunatic 快去试试吧！",
            "东方神灵庙 博丽灵梦 Easy 快去试试吧！",
            "东方神灵庙 博丽灵梦 Normal 快去试试吧！",
            "东方神灵庙 博丽灵梦 Hard 快去试试吧！",
            "东方神灵庙 博丽灵梦 Lunatic 快去试试吧！",
            "东方神灵庙 雾雨魔理沙 Easy 快去试试吧！",
            "东方神灵庙 雾雨魔理沙 Normal 快去试试吧！",
            "东方神灵庙 雾雨魔理沙 Hard 快去试试吧！",
            "东方神灵庙 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方神灵庙 东风谷早苗 Easy 快去试试吧！",
            "东方神灵庙 东风谷早苗 Normal 快去试试吧！",
            "东方神灵庙 东风谷早苗 Hard 快去试试吧！",
            "东方神灵庙 东风谷早苗 Lunatic 快去试试吧！",
            "东方妖妖梦 博丽灵梦 Easy 快去试试吧！",
            "东方妖妖梦 博丽灵梦 Normal 快去试试吧！",
            "东方妖妖梦 博丽灵梦 Hard 快去试试吧！",
            "东方妖妖梦 博丽灵梦 Lunatic 快去试试吧！",
            "东方妖妖梦 雾雨魔理沙 Easy 快去试试吧！",
            "东方妖妖梦 雾雨魔理沙 Normal 快去试试吧！",
            "东方妖妖梦 雾雨魔理沙 Hard 快去试试吧！",
            "东方妖妖梦 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方妖妖梦 十六夜咲夜 Easy 快去试试吧！",
            "东方妖妖梦 十六夜咲夜 Normal 快去试试吧！",
            "东方妖妖梦 十六夜咲夜 Hard 快去试试吧！",
            "东方妖妖梦 十六夜咲夜 Lunatic 快去试试吧！",
            "东方辉针城 博丽灵梦 Easy 快去试试吧！",
            "东方辉针城 博丽灵梦 Normal 快去试试吧！",
            "东方辉针城 博丽灵梦 Hard 快去试试吧！",
            "东方辉针城 博丽灵梦 Lunatic 快去试试吧！",
            "东方辉针城 雾雨魔理沙 Easy 快去试试吧！",
            "东方辉针城 雾雨魔理沙 Normal 快去试试吧！",
            "东方辉针城 雾雨魔理沙 Hard 快去试试吧！",
            "东方辉针城 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方辉针城 十六夜咲夜 Easy 快去试试吧！",
            "东方辉针城 十六夜咲夜 Normal 快去试试吧！",
            "东方辉针城 十六夜咲夜 Hard 快去试试吧！",
            "东方辉针城 十六夜咲夜 Lunatic 快去试试吧！",
            "东方绀珠传 博丽灵梦 Easy 快去试试吧！",
            "东方绀珠传 博丽灵梦 Normal 快去试试吧！",
            "东方绀珠传 博丽灵梦 Hard 快去试试吧！",
            "东方绀珠传 博丽灵梦 Lunatic 快去试试吧！",
            "东方绀珠传 雾雨魔理沙 Easy 快去试试吧！",
            "东方绀珠传 雾雨魔理沙 Normal 快去试试吧！",
            "东方绀珠传 雾雨魔理沙 Hard 快去试试吧！",
            "东方绀珠传 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方绀珠传 东风谷早苗 Easy 快去试试吧！",
            "东方绀珠传 东风谷早苗 Normal 快去试试吧！",
            "东方绀珠传 东风谷早苗 Hard 快去试试吧！",
            "东方绀珠传 东风谷早苗 Lunatic 快去试试吧！",
            "东方绀珠传 铃仙·优昙华院·因幡 Easy 快去试试吧！",
            "东方绀珠传 铃仙·优昙华院·因幡 Normal 快去试试吧！",
            "东方绀珠传 铃仙·优昙华院·因幡 Hard 快去试试吧！",
            "东方绀珠传 铃仙·优昙华院·因幡 Lunatic 快去试试吧！",
            "东方天空璋 博丽灵梦 Easy 快去试试吧！",
            "东方天空璋 博丽灵梦 Normal 快去试试吧！",
            "东方天空璋 博丽灵梦 Hard 快去试试吧！",
            "东方天空璋 博丽灵梦 Lunatic 快去试试吧！",
            "东方天空璋 雾雨魔理沙 Easy 快去试试吧！",
            "东方天空璋 雾雨魔理沙 Normal 快去试试吧！",
            "东方天空璋 雾雨魔理沙 Hard 快去试试吧！",
            "东方天空璋 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方天空璋 琪露诺 Easy 快去试试吧！",
            "东方天空璋 琪露诺 Normal 快去试试吧！",
            "东方天空璋 琪露诺 Hard 快去试试吧！",
            "东方天空璋 琪露诺 Lunatic 快去试试吧！",
            "东方天空璋 射命丸文 Easy 快去试试吧！",
            "东方天空璋 射命丸文 Normal 快去试试吧！",
            "东方天空璋 射命丸文 Hard 快去试试吧！",
            "东方天空璋 射命丸文 Lunatic 快去试试吧！",
            "东方鬼形兽 博丽灵梦 Easy 快去试试吧！",
            "东方鬼形兽 博丽灵梦 Normal 快去试试吧！",
            "东方鬼形兽 博丽灵梦 Hard 快去试试吧！",
            "东方鬼形兽 博丽灵梦 Lunatic 快去试试吧！",
            "东方鬼形兽 雾雨魔理沙 Easy 快去试试吧！",
            "东方鬼形兽 雾雨魔理沙 Normal 快去试试吧！",
            "东方鬼形兽 雾雨魔理沙 Hard 快去试试吧！",
            "东方鬼形兽 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方鬼形兽 魂魄妖梦 Easy 快去试试吧！",
            "东方鬼形兽 魂魄妖梦 Normal 快去试试吧！",
            "东方鬼形兽 魂魄妖梦 Hard 快去试试吧！",
            "东方鬼形兽 魂魄妖梦 Lunatic 快去试试吧！",
            "东方虹龙洞 博丽灵梦 Easy 快去试试吧！",
            "东方虹龙洞 博丽灵梦 Normal 快去试试吧！",
            "东方虹龙洞 博丽灵梦 Hard 快去试试吧！",
            "东方虹龙洞 博丽灵梦 Lunatic 快去试试吧！",
            "东方虹龙洞 雾雨魔理沙 Easy 快去试试吧！",
            "东方虹龙洞 雾雨魔理沙 Normal 快去试试吧！",
            "东方虹龙洞 雾雨魔理沙 Hard 快去试试吧！",
            "东方虹龙洞 雾雨魔理沙 Lunatic 快去试试吧！",
            "东方虹龙洞 东风谷早苗 Easy 快去试试吧！",
            "东方虹龙洞 东风谷早苗 Normal 快去试试吧！",
            "东方虹龙洞 东风谷早苗 Hard 快去试试吧！",
            "东方虹龙洞 东风谷早苗 Lunatic 快去试试吧！",
            "东方虹龙洞 十六夜咲夜 Easy 快去试试吧！",
            "东方虹龙洞 十六夜咲夜 Normal 快去试试吧！",
            "东方虹龙洞 十六夜咲夜 Hard 快去试试吧！",
            "东方虹龙洞 十六夜咲夜 Lunatic 快去试试吧！",
            "东方永夜抄 幻想的结界组 Easy 快去试试吧！",
            "东方永夜抄 幻想的结界组 Normal 快去试试吧！",
            "东方永夜抄 幻想的结界组 Hard 快去试试吧！",
            "东方永夜抄 幻想的结界组 Lunatic 快去试试吧！",
            "东方永夜抄 禁咒的咏唱组 Easy 快去试试吧！",
            "东方永夜抄 禁咒的咏唱组 Normal 快去试试吧！",
            "东方永夜抄 禁咒的咏唱组 Hard 快去试试吧！",
            "东方永夜抄 禁咒的咏唱组 Lunatic 快去试试吧！",
            "东方永夜抄 梦幻的红魔组 Easy 快去试试吧！",
            "东方永夜抄 梦幻的红魔组 Normal 快去试试吧！",
            "东方永夜抄 梦幻的红魔组 Hard 快去试试吧！",
            "东方永夜抄 梦幻的红魔组 Lunatic 快去试试吧！",
            "东方永夜抄 幽冥的居民组 Easy 快去试试吧！",
            "东方永夜抄 幽冥的居民组 Normal 快去试试吧！",
            "东方永夜抄 幽冥的居民组 Hard 快去试试吧！",
            "东方永夜抄 幽冥的居民组 Lunatic 快去试试吧！"
        ];

/* 挂载到 window（const 不会自动挂到 window，供各脚本安全引用） */
window.touhouRoleLib = touhouRoleLib;
window.touhouWorkLib = touhouWorkLib;
//（注：内容由AI生成）
