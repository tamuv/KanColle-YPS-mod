$event_sally_tag_names = {
// id: tagname.
// http://*/kcs2/img/common/common_event.png?version=5.4.0.0
// http://*/kcs2/img/common/common_event.json?version=5.4.0.0
// jsonのcommon_event_番号並びと、札ID番号並びは一致している.
// 下記コードにて番号並び順に画像切り取り座標を抜き出し、その位置描かれている札名を列記する.
// v = {}; for (i in common_event.frames) { v[i] = common_event.frames[i].frame; }; console.table(v)
// 春イベント2022: 前段作戦【激闘！R方面作戦】
1: 'R方面防備部隊',
2: '進出第一陣',
3: '進出第二陣',
4: '機動部隊',
5: '方面護衛隊',
// 春イベント2022: 後段作戦【血戦！異聞坊ノ岬沖海戦】
6: '呉防備戦隊',
7: '第二艦隊',
8: '機動部隊別働隊',
9: '佐世保配備艦隊',
10: '連合救援艦隊', // この札のみcommon_event_番号並びと一致しない.
9999: null
};

