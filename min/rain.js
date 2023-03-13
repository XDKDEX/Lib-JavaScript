/* RainDrops */"use strict";

const scrollRsate = (a) => {
    let doc;
    if (a == "document") {
        doc = document.documentElement;
    } else {
        doc = document.getElementsByClassName(a)[0];
    }
    return [(doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100), (doc.scrollLeft / (doc.scrollWidth - doc.clientLeft) * 100)];
};

/*const time = {
    
    * @param {"执行的函数带引号"} Function
     * @param {"间隔时间(秒)"} Seconds
     * @param {"次数"} Count
    
    "count": (Function, Seconds, Count) => { var Interval = setInterval(() => { new Function(Function)(); console.log(Count); if (1 == Count) { clearInterval(Interval); } Count--; }, (Seconds * 1000)); },
    "Now": () => {
        return new Date().getTime();
    }
}*/





const ajax = (data) => {
    var xmlhttp = ajaxSetting.Request();
    xmlhttp.open(data.type, data.url, false);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function (func, response) {
        if (ajaxSetting.Zip) {
            response = str.Zip(response);
        } func = func.replaceAll(/&response/g, response);
        return Function(func)();
    }(data.success, xmlhttp.response);
};
const ajaxSetting = {
    "Request": () => {
        return new XMLHttpRequest();
    }, "Zip": (BOOL) => {
        return BOOL;
    }
};
/* setup */
ajaxSetting.Request();
ajaxSetting.Zip(true);


/*const str = {
    "Zip": (str) => {
        let list = ["\r\n", "\n", "	", " "];
        for (let count = 0; list.length != count; count++) {
            str = str.replaceAll(list[count], "");
        }
        return str.replaceAll(/"/g, "'");
    },
    "format": (str)=>{
        return str.replaceAll(/>/g,">\r\n");
    }
}*/

const doc = (data, mumber) => {
    if (data == 'document') {
        docAddEvent(document.body);
        return document.body;
    } else {
        docAddEvent(document.getElementsByClassName(data)[mumber]);
        return document.getElementsByClassName(data)[mumber];
    }
}; 
// const eventList = ['click', 'dblclick', 'scroll'];
const docAddEvent = (a) => {
    a.click = (b) => { a.addEventListener('click', b); };
    a.dblclick = (b) => { a.addEventListener('dblclick', b); };
    a.scroll = (b) => { if (a.nodeName == 'BODY') { window.addEventListener('scroll', b); } else { a.addEventListener('scroll', b); }; };
};

var test = (aaa) => {
    console.log(!this.aaa);
}