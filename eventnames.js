$event_sally_tag_names = {
// id: tagname.
// http://*/kcs2/img/common/common_event.png?version=5.5.1.0
// http://*/kcs2/img/common/common_event.json?version=5.5.1.0
// jsonのcommon_event_番号並びと、札ID番号並びは一致している.
// 下記コードにて番号並び順に画像切り取り座標を抜き出し、その位置描かれている札名を列記する.
// v = {}; for (i in common_event.frames) { v[i] = common_event.frames[i].frame; }; console.table(v)
// 夏イベント2022: 後段作戦【大規模反攻上陸！トーチ作戦！】
//1: '前路掃討部隊',
//2: '遠征偵察部隊',
//3: '遠征艦隊先遣隊',
//4: '地中海連合艦隊',
//5: 'トーチ作戦英軍部隊',
//6: 'トーチ作戦派遣部隊',
//7: '中央任務部隊',
//8: '東方任務部隊',
//9: '西方先遣部隊',
//10: '西方任務決戦部隊', // 並び順が1:'前路掃討部隊'の次だが、おそらく札IDは最後の10だと予想する.
9999: null
};

