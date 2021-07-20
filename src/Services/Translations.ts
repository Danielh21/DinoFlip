var dk = require('./da.json')
var en = require('./en.json')


let currentLang : string = "dk"


function translate(key : string) : any {
    let word : any = "";
    if(currentLang === "dk") {
        word = dk[key];
    }
    else if (currentLang === "en") {
        word = en[key];
    }
    if(word == null || word.length === 0 ) {
        word = `MISSING[${key}]`;
    }
    return word;
}

function SetLang(lang : string) {
    currentLang  = lang;
}

export { translate, SetLang  }
