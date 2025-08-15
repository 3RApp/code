const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
const {GigaChat} = require('gigachat');
const { Agent } = require('node:https');
const { clear } = require('node:console');

const httpsAgent = new Agent({
  rejectUnauthorized: false, // Отключает проверку корневого сертификата
  // Читайте ниже как можно включить проверку сертификата Мин. Цифры
});

const client = new GigaChat({
    accessToken: "eyJjdHkiOiJqd3QiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.BM_-ptIXELXFmYJXeKrwHoCPVTTW-uxnZr5sXcF8l1RRonTlwEtcjfLvxrHNK4Kvjz2W-_sjwtE4GdI3HNcuBpjQNevpB3oiKJBahLFpVpOc87xgazo8B64bXrES_TkqKFmohs8pXG8x-YKvOc8rcDPqbKVnCSodoqnNAKLN5Hkhi8FA_6H1Kb9lVnvagk-2PKlaoE7mxdUBwsklVq7KaaOJ6sg5mKaB7Bb1orlfAYk3FyO4vvCQ-PWwPW48Rt_T3VK8YdGOaTjJ-S1j7pfN6_sms3lTVOkn6jeKnGjRVP5HRT_yJuQ_GY0c3aN88YMs3AIWUu8f6ah42Agmvvy3iA.oCxITDi8KGrTY70AW9kFqw.OUyGLm1nQRnwj79MwF157I7gw_BOyqVhdeaVlfjTXtMUAtoUI7v1qYuSEUKpJcAsEgFep9VG1a6RMdaVhZcw5dGGOTKD3XqtIHXHykoBfHdmsFxQWts24JFqhko8yPJET3NzHarfn7HYdu3TGltwlee59S42CFrrlTppWxX12jSj5y-7_aw8Hw81sCHY6Rp6MBmNNeOXR9nBorxIRDniif2FPkEOzRU6kJuF3knIxAvxOm2ZzmZ7J33Bc7BHXR_D5uPyYNn1OUSlXAXfwJzVDTYPJMmQQLewaOB06vODO0TWZQAGRGGAikhYhvYIIcp3iU7_pEKFiwz_4L7P_4-fA97Kk89jtY6Ys4DFqPReCq1f_UWEn-MT3lyDVqhFr2HTChlHLTKV1BYRp2xQbkcGtFzpSW3f_iZZt2MIi8k_qcz0j3Ar0Cwnt43OIuM9PjdRGiP8uRfyXdG6fhV2lmVYNYrljHEQVV8I73jdTln4PYKIJMzakuf6KTk3egSlkn0ANTF4pAAHZAjTTqER8Ip_IvPu9bhassD0pDsVWdBGRZ7X5rTAuLzB1QLjgy-ElUVHh_d8RZE0RpVXHA-ErKrDFX2K6clvPZn3VmJcfbAsplSyalRPmvaSR5qpHoTkT2QpVbRpi7FmpiNujAe4KHUvs6a1xY4bO6zJ2V-wZZZI1G6BHPkebewjUz9YFK8xoB-a9pK6Fm3qPjY_ZJGvngC65zrnVV0i2H5uL0K2kaDEnjM.j8LDHyhvtv-0I-oDbbzIrLKrY52aL926BgInl_ZOvFE",
    model: "GigaChat-Pro",
    timeout: 10000,
    httpsAgent: httpsAgent,
});

// client
//   .chat({
//     messages: [{ role: 'user', content: 'Вот JSON: ' }],
//   })
//   .then((resp) => {
//     console.log(resp.choices[0]?.message.content);
//   });

fs.readFile(path.join(cwd, "./goods.json"), "utf-8", (err, goodsString) => {
    if (err){
        console.error(err.message);
        
    } else {

        const goodsJSON = JSON.parse(goodsString);
        const goodsKeys = Object.keys(goodsJSON);
        const result = {};

        let index = 0

        try {
            const intervalId = setInterval(() => {
                
                const vendor = goodsJSON[goodsKeys[index]];

                if (vendor) {
                    const { vendorTitle, humanSubcategoryTitle } = vendor;

                    index++;

                    client
                        .chat({
                            messages: [{ role: 'user', content: `Есть имя производителя: ${vendorTitle} и описание категории: ${humanSubcategoryTitle}. Сгенерируй название товара title для этого производителя, описание description, цену price (числом) и urlUniqueKey (является написанием товара латинскими буквами и вместо пробелов нижнее подчеркивание) в формате JSON.` }],
                        })
                        .then((resp) => {

                            const json = resp.choices[0]?.message.content.replace("```", "").replace("```", "").replace("json", "").trim();

                            result[goodsKeys[index]] = {
                                ...goodsJSON[goodsKeys[index]],
                                ...JSON.parse(json),
                                index
                            };

                            console.log(result[goodsKeys[index]]);

                        }).catch((error) => {

                            console.error("Ошибка Promise catch");

                            fs.writeFile(path.join(cwd, "./test_gigachat_goods2.json"), JSON.stringify(result), (err) => {
                                if (err) {
                                    console.error(err.message);
                                    
                                } else {
                                    console.error("Success");
                                }
                            });
                        });

                } else {
                    clearInterval(intervalId);
                }
            }, 1100);

        } catch(err) {
            console.error("Ошибка в try/catch", err.message);

        } finally {
            fs.writeFile(path.join(cwd, "./test_gigachat_goods.json"), JSON.stringify(result), (err) => {
                if (err) {
                    console.error(err.message);
                    
                } else {
                    console.error("Success");
                }
            });
        }
    }
});
