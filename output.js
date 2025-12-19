//Fri Dec 19 2025 13:04:43 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('积分换话费');
var O_AnxwG = Object['\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079'],
  Er3m5B,
  ODSJGB,
  JokD5R,
  jD_rLlY,
  AAV4MOm,
  sVRhDf,
  pmx9BN,
  zwWX8I;
function Voj7h_2() {
  return globalThis;
}
function d4LqOxt() {
  return global;
}
function Zeb_5eC() {
  return window;
}
function XJhM3wb() {
  return new Function("return this")();
}
function _JZWX2C(O_AnxwG = [Voj7h_2, d4LqOxt, Zeb_5eC, XJhM3wb], JkjFWhh, QgPyysZ = [], Er3m5B, ODSJGB) {
  JkjFWhh = JkjFWhh;
  try {
    JkjFWhh = Object
    QgPyysZ["push"](''.__proto__["constructor"].name)
  } catch (e) {}
  S_5OWZJ: for (Er3m5B = 0; Er3m5B < O_AnxwG["length"]; Er3m5B++) try {
    JkjFWhh = O_AnxwG[Er3m5B]();
    for (ODSJGB = 0x0; ODSJGB < QgPyysZ["length"]; ODSJGB++) if (typeof JkjFWhh[QgPyysZ[ODSJGB]] === "undefined") {
      continue S_5OWZJ;
    }
    return JkjFWhh;
  } catch (e) {}
  return JkjFWhh || this;
}
Er3m5B = _JZWX2C() || {}
ODSJGB = Er3m5B.TextDecoder
JokD5R = Er3m5B.Uint8Array
jD_rLlY = Er3m5B.Buffer
AAV4MOm = Er3m5B.String || String
sVRhDf = Er3m5B["Array"] || Array
function izOjfpl(...O_AnxwG) {
  return O_AnxwG[O_AnxwG["length"] - 1];
}
function lsi73E(HzmzQzs, O_AnxwG) {
  switch (zwWX8I) {
    case 0x2a:
      return HzmzQzs * O_AnxwG;
    case -0x25:
      return !HzmzQzs;
    case 0x35:
      return HzmzQzs / O_AnxwG;
    case 58:
      return HzmzQzs + O_AnxwG;
  }
}
function uI2STC(HzmzQzs) {
  return izOjfpl(HzmzQzs = zwWX8I + (zwWX8I = HzmzQzs, 0), HzmzQzs);
}
zwWX8I = zwWX8I;
const Ujcahk = require('./jdCookie'),
  ibNicKu = require('./utils/Rebels_sendJDNotify'),
  ZFAipT = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: vhDuBi6
  } = require('./utils/Rebels_H'),
  swEInwa = process["env"]["jd_dwapp_prizeNotify"] === "true",
  NkXiWC = require('crypto-js'),
  Y1hL4e = require('querystring'),
  R0lq4x = false,
  TsHpAP = process["env"]["jd_dwapp_wait"] || 0x4;
let bNiMPr = lsi73E(parseInt(TsHpAP), 1000, zwWX8I = 0x2a),
  dBYJjL = '';
const LG4USt = Object["keys"](Ujcahk)["map"](HzmzQzs => Ujcahk[HzmzQzs])["filter"](HzmzQzs => HzmzQzs);
if (lsi73E(LG4USt[0], uI2STC(-37))) {
  $["msg"]($["name"], "【提示】请先获取Cookie")
  process["exit"](1)
}
lsi73E((async () => {
  for (let AAV4MOm = izOjfpl(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`代理开关: [${ZFAipT["getProxyStatus"]()}]`), console["log"](`间隔时长: 签到间隔[${bNiMPr === 0x0 ? '无' : `${lsi73E(bNiMPr, 0x3e8, uI2STC(0x35))}秒`}]`), console["log"](`单独推送账号通知: ${swEInwa}`), console["log"](`==========${$["name"]}变量状态结束==========`), ibNicKu["config"]({
    ["title"]: $["name"]
  }), 0x0); AAV4MOm < LG4USt["length"]; AAV4MOm++) {
    if (izOjfpl($["index"] = lsi73E(AAV4MOm, 1, uI2STC(0x3a)), dBYJjL = LG4USt[AAV4MOm], ZFAipT["setCookie"](dBYJjL), $["UserName"] = decodeURIComponent(ZFAipT["getCookieValue"](dBYJjL, "pt_pin")), $["message"] = ibNicKu["create"]($["index"], $["UserName"]), $["nickName"] = '', console["log"](`\n******开始【京东账号${$["index"]}】${$["nickName"] || $["UserName"]}******\n`), $.UA = ZFAipT["genUA"]($["UserName"]), $["webUA"] = vOzr1DL(), await kjy4gtV(), ZFAipT["unsetCookie"](), $["runEnd"])) {
      break;
    }
    await $["wait"](0xbb8);
  }
  if (R0lq4x && ibNicKu["getMessage"]()) {
    await ibNicKu["push"]();
  }
})()["catch"](HzmzQzs => $["logErr"](HzmzQzs))["finally"](() => {
  var HzmzQzs = ["done"];
  return $[HzmzQzs[0x0]]();
}), uI2STC(-0x25));
async function kjy4gtV() {
  const JkjFWhh = await ZFAipT["getLoginStatus"](dBYJjL);
  if (lsi73E(JkjFWhh, zwWX8I = -0x25) && typeof JkjFWhh === "boolean") {
    return izOjfpl(console["log"](`账号无效`), undefined);
  }
  try {
    if (izOjfpl($["skipRun"] = false, $["dwSignInfo"] = null, await qcszhz("dwSignInfo"), $["skipRun"])) {
      return;
    }
    if ($["dwSignInfo"]) {
      let pmx9BN = $["dwSignInfo"]["signInfo"]["signStatus"] || 0x0,
        GVEkg9q = izOjfpl(console["log"](`当前总积分：${$["dwSignInfo"]["totalNum"]}，今天${pmx9BN ? '已' : '未'}签到`), $["dwSignInfo"]["totalNum"] || 0x0);
      if (swEInwa && GVEkg9q >= 11) {
        await ibNicKu["sendNotify"](`${$["name"]}`, `【京东账号${$["index"]}】${$["UserName"]}：【提示】可以兑换话费了, app首页-搜索-赚话费\n【兑换链接】https://3.cn/2jjn8j-X`)
      }
      if (lsi73E(pmx9BN, uI2STC(-0x25))) {
        if (izOjfpl(await $["wait"](bNiMPr), await qcszhz("usersign"), $["skipRun"])) {
          return;
        }
        await $["wait"](bNiMPr);
      }
      if ($["skipRun"]) {
        return;
      }
      if (izOjfpl($["tasklist"] = [], await $["wait"](parseInt(lsi73E(Math["random"]() * 0x7d0, 0xc80, zwWX8I = 58), 0xa)), await qcszhz("tasklist"), $["tasklist"])) {
        for (let RYVvrk0 of $["tasklist"]) {
          if (izOjfpl($["taskRun"] = false, $.i = RYVvrk0, RYVvrk0["viewStatus"]) == 0x0) {
            if (izOjfpl($["id"] = RYVvrk0["id"], await CcxnObk("taskrecord"), await $["wait"](parseInt(lsi73E(Math["random"]() * 2000, 0x898, zwWX8I = 58), 0xa)), await CcxnObk("taskreceive"), await $["wait"](parseInt(lsi73E(Math["random"]() * 0x7d0, 2200, zwWX8I = 0x3a), 0xa)), $["taskRun"])) {
              await CcxnObk("taskreceive")
              await $["wait"](parseInt(lsi73E(Math["random"]() * 0x7d0, 2200, zwWX8I = 0x3a), 0xa))
            }
          } else {
            if (RYVvrk0["viewStatus"] == 0x2) {
              if (izOjfpl($["id"] = RYVvrk0.id, await CcxnObk("taskreceive"), await $["wait"](parseInt(lsi73E(Math["random"]() * 0x7d0, 0x898, zwWX8I = 0x3a), 10)), $["taskRun"])) {
                var _JZWX2C = "wait";
                await CcxnObk("taskreceive")
                await $[_JZWX2C](parseInt(lsi73E(Math["random"]() * 2000, 0x898, zwWX8I = 58), 0xa))
              }
            } else {
              if (RYVvrk0["viewStatus"] == 1) {
                console["log"](`[${RYVvrk0["name"]}] 任务已完成`);
              }
            }
          }
        }
      }
      await $["wait"](1000);
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function yK7wHpd(O_AnxwG, JkjFWhh) {
  try {
    let JokD5R = '';
    switch (O_AnxwG) {
      case "dwSignInfo":
        if (JkjFWhh["code"] === 0xc8) {
          $["dwSignInfo"] = JkjFWhh["data"];
        } else {
          var AAV4MOm = "some";
          if (izOjfpl(JokD5R = ZFAipT["getErrorMsg"](JkjFWhh), ["火爆"][AAV4MOm](O_AnxwG => JokD5R["includes"](O_AnxwG)))) {
            console["log"]("❌ 此账号活动火爆，不继续执行任务")
            $["skipRun"] = true
          } else {
            console["log"](`进入首页失败：${JokD5R}`)
            $["skipRun"] = true
          }
        }
        break;
      case "usersign":
        if (JkjFWhh["code"] === 0xc8 && true) {
          console["log"](`签到成功：获得${JkjFWhh["data"]["signInfo"]["signNum"]}积分，总积分：${JkjFWhh["data"]["totalNum"]}`);
        } else {
          var pmx9BN = {
            ["_CHqgnb"]: "getErrorMsg"
          };
          if (izOjfpl(JokD5R = ZFAipT[pmx9BN._CHqgnb](JkjFWhh), ["火爆"]["some"](O_AnxwG => JokD5R["includes"](O_AnxwG)))) {
            console["log"]("❌ 此账号活动火爆，不继续执行任务")
            $["skipRun"] = true
          } else {
            if (['实名']["some"](O_AnxwG => JokD5R["includes"](O_AnxwG))) {
              console["log"](`签到失败：${JokD5R}`)
              $["skipRun"] = true
            } else {
              console["log"](`签到失败：${JokD5R}`);
            }
          }
        }
        break;
      case "tasklist":
        if (JkjFWhh["code"] === 0xc8) {
          $["tasklist"] = JkjFWhh["data"];
        } else {
          if (izOjfpl(JokD5R = ZFAipT["getErrorMsg"](JkjFWhh), ['火爆']["some"](O_AnxwG => JokD5R["includes"](O_AnxwG)))) {
            console["log"]("❌ 此账号活动火爆，不继续执行任务")
            $["skipRun"] = true
          } else {
            console["log"](`任务列表失败：${JokD5R}`)
            $["skipRun"] = true
          }
        }
    }
  } catch (e) {
    console["log"](`❌ 未能正确处理 ${O_AnxwG} 请求响应 ${e["message"] || e}`);
  }
}
async function qcszhz(O_AnxwG) {
  if ($["runEnd"]) {
    return;
  }
  let pmx9BN = '',
    GVEkg9q = null,
    D33hLb = null,
    OMcFCI = null,
    xYk3y22 = "POST",
    ATAh6o = {},
    RYVvrk0 = {};
  switch (O_AnxwG) {
    case "dwSignInfo":
      let fk37If = Date["now"]();
      pmx9BN = "https://dwapp.jd.com/user/dwSignInfo"
      GVEkg9q = JSON["stringify"]({
        t: fk37If,
        ["channelSource"]: "txzs",
        ["encStr"]: NkXiWC["MD5"](lsi73E(fk37If, "e9c398ffcb2d4824b4d0a703e38yffdd", uI2STC(0x3a)))["toString"]()
      })
      break;
    case "usersign":
      D33hLb = await ytAAN1()
      RYVvrk0 = {
        ["appId"]: "60d0e",
        ["functionId"]: "DATAWALLET_USER_SIGN",
        ["appid"]: "h5-sep",
        ["clientVersion"]: "6.0.0",
        ["client"]: 'm',
        ["body"]: D33hLb,
        ua: $["webUA"]
      }
      ATAh6o = await vhDuBi6["getH5st"](RYVvrk0)
      pmx9BN = "https://api.m.jd.com/api?functionId=DATAWALLET_USER_SIGN"
      GVEkg9q = Y1hL4e["stringify"](ATAh6o["paramsData"])
      break;
    case "tasklist":
      D33hLb = await ytAAN1()
      pmx9BN = "https://api.m.jd.com/api?functionId=dwapp_task_dwList"
      OMcFCI = {
        ["appid"]: "h5-sep",
        ["client"]: "m",
        ["clientVersion"]: "6.0.0",
        ["functionId"]: "dwapp_task_dwList",
        ["body"]: JSON["stringify"](D33hLb)
      }
      break;
    default:
      console["log"](`❌ 未知请求 ${O_AnxwG}`);
      return;
  }
  const Voj7h_2 = {};
  if (GVEkg9q) {
    Object["assign"](GVEkg9q, Voj7h_2);
  }
  if (OMcFCI) {
    var d4LqOxt = ["assign"];
    Object[d4LqOxt[0x0]](OMcFCI, Voj7h_2);
  }
  const Zeb_5eC = {
    ["url"]: pmx9BN,
    ["method"]: xYk3y22,
    ["headers"]: {
      ["Accept"]: "*/*",
      ["Cookie"]: dBYJjL,
      ["Referer"]: "https://prodev.m.jd.com/mall/active/eEcYM32eezJB7YX4SBihziJCiGV/index.html",
      ["Origin"]: "https://prodev.m.jd.com",
      ["Content-Type"]: "application/x-www-form-urlencoded",
      ["User-Agent"]: $.UA
    },
    ["params"]: OMcFCI,
    ["data"]: GVEkg9q,
    ["timeout"]: 0x7530,
    ["httpsTlsOptions"]: {
      ["secureProtocol"]: "TLSv1_2_method",
      ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
    }
  };
  if (xYk3y22 === "GET") {
    delete (delete Zeb_5eC["data"], Zeb_5eC["headers"]["Content-Type"]);
  }
  if (O_AnxwG === "dwSignInfo") {
    Zeb_5eC["headers"]["Content-Type"] = "application/json"
    Zeb_5eC["headers"]["Origin"] = "https://txsm-m.jd.com"
    Zeb_5eC["headers"]["Referer"] = "https://txsm-m.jd.com/activity/integralExchange/index.html"
  }
  if (O_AnxwG === "usersign" && true) {
    Zeb_5eC["headers"]["User-Agent"] = $["webUA"];
  }
  const swEInwa = 0x1;
  let R0lq4x = 0x0,
    TsHpAP = null;
  while (R0lq4x < swEInwa) {
    if (R0lq4x > 0 && true) {
      await $["wait"](0x3e8);
    }
    const bNiMPr = await ZFAipT["request"](Zeb_5eC);
    if (lsi73E(bNiMPr["success"], zwWX8I = -0x25)) {
      TsHpAP = `🚫 ${O_AnxwG} 请求失败 ➜ ${bNiMPr["error"]}`
      R0lq4x++
      continue;
    }
    if (lsi73E(bNiMPr["data"], uI2STC(-0x25))) {
      TsHpAP = `🚫 ${O_AnxwG} 请求失败 ➜ 无响应数据`
      R0lq4x++
      continue;
    }
    await yK7wHpd(O_AnxwG, bNiMPr["data"]);
    break;
  }
  if (R0lq4x >= swEInwa) {
    console["log"](TsHpAP);
  }
}
async function LIVMDU(O_AnxwG, JkjFWhh) {
  try {
    switch (O_AnxwG) {
      case "taskrecord":
        if (JkjFWhh["code"] === 0xc8) {
          if (JkjFWhh["data"]["dwUserTask"]) {
            console["log"](`[${$.i["name"]}]领取任务成功`);
          } else {
            var Er3m5B = ["log"];
            msg = ZFAipT["getErrorMsg"](JkjFWhh["data"])
            console[Er3m5B[0x0]](`任务领取失败：${msg}`)
          }
        } else {
          if (izOjfpl(msg = ZFAipT["getErrorMsg"](JkjFWhh), ["点击太快", "实名验证"]["some"](O_AnxwG => msg["includes"](O_AnxwG)))) {
            $["taskRun"] = true;
          } else {
            console["log"](`任务领取失败：${msg}`);
          }
        }
        break;
      case "taskreceive":
        if (JkjFWhh["code"] === 0xc8) {
          if (JkjFWhh["data"]["success"]) {
            console["log"](`[${$.i["name"]}]领取${JkjFWhh["data"]["giveScoreNum"]}积分奖励成功`);
          } else {
            if (izOjfpl(msg = ZFAipT["getErrorMsg"](JkjFWhh["data"]), ["点击太快", "实名验证"]["some"](O_AnxwG => msg["includes"](O_AnxwG)))) {
              $["taskRun"] = true;
            } else {
              console["log"](`奖励领取失败：${msg}`);
            }
          }
        } else {
          msg = ZFAipT["getErrorMsg"](JkjFWhh)
          console["log"](`奖励领取失败：${msg}`)
        }
    }
  } catch (e) {
    console["log"](`❌ 未能正确处理 ${O_AnxwG} 请求响应 ${e["message"] || e}`);
  }
}
async function CcxnObk(O_AnxwG) {
  if ($["runEnd"]) {
    return;
  }
  let ODSJGB = '',
    JokD5R = null,
    jD_rLlY = null,
    AAV4MOm = "POST";
  switch (O_AnxwG) {
    case "taskrecord":
      enc = await ytAAN1(lsi73E($.id, '\x31', zwWX8I = 0x3a))
      JokD5R = {
        id: $.id,
        ["agentNum"]: "m",
        ["taskType"]: 0x1,
        ["followChannelStatus"]: '',
        ...enc
      }
      ODSJGB = "https://dwapp.jd.com/user/task/dwRecord"
      jD_rLlY = {
        ["body"]: JSON["stringify"](JokD5R)
      }
      break;
    case "taskreceive":
      enc = await ytAAN1($.id)
      JokD5R = {
        id: $.id,
        ...enc
      }
      ODSJGB = "https://dwapp.jd.com/user/task/dwReceive"
      jD_rLlY = {
        ["body"]: JSON["stringify"](JokD5R)
      }
      break;
    default:
      console["log"](`❌ 未知请求 ${O_AnxwG}`);
      return;
  }
  const sVRhDf = {};
  if (JokD5R) {
    Object["assign"](JokD5R, sVRhDf);
  }
  if (jD_rLlY) {
    Object["assign"](jD_rLlY, sVRhDf);
  }
  const pmx9BN = {
    ["url"]: ODSJGB,
    ["method"]: AAV4MOm,
    ["headers"]: {
      ["Host"]: "dwapp.jd.com",
      ["Origin"]: "https://prodev.m.jd.com",
      ["Connection"]: "keep-alive",
      ["Accept"]: "*/*",
      ["User-Agent"]: $.UA,
      ["Accept-Language"]: "zh-cn",
      ["Referer"]: "https://prodev.m.jd.com/mall/active/eEcYM32eezJB7YX4SBihziJCiGV/index.html",
      ["Accept-Encoding"]: "gzip, deflate, br",
      ["Content-Type"]: "application/json",
      ["Cookie"]: dBYJjL
    },
    ["params"]: jD_rLlY,
    ["data"]: JokD5R,
    ["timeout"]: 0x7530,
    ["httpsTlsOptions"]: {
      ["secureProtocol"]: "TLSv1_2_method",
      ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
    }
  };
  if (AAV4MOm === "GET") {
    delete (delete pmx9BN["data"], pmx9BN["headers"]["Content-Type"]);
  }
  const GVEkg9q = 1;
  let D33hLb = 0x0,
    OMcFCI = null;
  while (D33hLb < GVEkg9q && true) {
    if (D33hLb > 0) {
      await $["wait"](1000);
    }
    const xYk3y22 = await ZFAipT["request"](pmx9BN);
    if (lsi73E(xYk3y22["success"], uI2STC(-0x25))) {
      OMcFCI = `🚫 ${O_AnxwG} 请求失败 ➜ ${xYk3y22["error"]}`
      D33hLb++
      continue;
    }
    if (lsi73E(xYk3y22["data"], uI2STC(-0x25))) {
      OMcFCI = `🚫 ${O_AnxwG} 请求失败 ➜ 无响应数据`
      D33hLb++
      continue;
    }
    await LIVMDU(O_AnxwG, xYk3y22["data"]);
    break;
  }
  if (D33hLb >= GVEkg9q) {
    console["log"](OMcFCI);
  }
}
async function ytAAN1(HzmzQzs) {
  let O_AnxwG = izOjfpl(time = new Date()["getTime"](), HzmzQzs || '');
  const JBrulV = `${time}e9c398ffcb2d4824b4d0a703e38yffdd`;
  return izOjfpl(O_AnxwG = NkXiWC["MD5"](lsi73E(O_AnxwG, JBrulV, uI2STC(0x3a)))["toString"](), {
    t: time,
    ["encStr"]: O_AnxwG
  });
}
function vOzr1DL() {
  const Er3m5B = ["Windows NT 10.0; Win64; x64", "Macintosh; Intel Mac OS X 10_15_7"],
    ODSJGB = ["Chrome/130.0.6723.70", "Chrome/130.0.0.0"],
    JokD5R = Er3m5B[Math["floor"](lsi73E(Math["random"](), Er3m5B["length"], zwWX8I = 0x2a))],
    jD_rLlY = ODSJGB[Math["floor"](lsi73E(Math["random"](), ODSJGB["length"], uI2STC(42)))];
  return `Mozilla/5.0 (${JokD5R}) AppleWebKit/537.36 (KHTML, like Gecko) ${jD_rLlY} Safari/537.36`;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}