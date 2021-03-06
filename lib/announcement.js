"use strict";

const moment = require("moment-timezone");

const config = require("./config");

exports.getAnnouncement = (context, date) => {

  const datestr = moment(date).tz(config.timezone).format("M月D日");

  return (
`本日${datestr}22時からのお題は
「${context.characterFree === true ? "キャラ自由" : context.themes.join("・")}」${context.wordTheme ? `で「${context.wordTheme}」` : ""}です。
${context.wordTheme ? "（テーマお題は任意参加）\n" : ""}#ごちうさ版深夜の真剣お絵描き60分一本勝負`
  );

};

exports.getStartAnnouncement = context =>
`開始の時間です。タグを付けてご参加ください。
お題は「${context.characterFree === true ? "キャラ自由" : context.themes.join("・")}」${context.wordTheme ? `で「${context.wordTheme}」` : ""}です。
（開始時刻は目安です）
#ごちうさ版深夜の真剣お絵描き60分一本勝負`;

exports.getFinishAnnouncement = () =>
`終了の時間となりました。皆様お疲れ様でした！
タグ付けされたイラストはこちらより確認できます。
→ http://lov.ragg.me/`;
