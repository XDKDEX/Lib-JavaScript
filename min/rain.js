"use strict";

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
    if (data == "document") {
        docAddEvent(document.body);
        return document.body;
    } else {
        docAddEvent(document.getElementsByClassName(data)[mumber]);
        return document.getElementsByClassName(data)[mumber];
    }
};
const docAddEvent = (a)=>{
    a.click = (b)=>{a.addEventListener("click",b)};a.contextmenu = (b)=>{a.addEventListener("oncontextmenu",b)};a.dblclick = (b)=>{a.addEventListener("ondblclick",b)};a.mousedown = (b)=>{a.addEventListener("onmousedown",b)};a.mouseleave = (b)=>{a.addEventListener("onmouseleave",b)};a.mousemove = (b)=>{a.addEventListener("onmousemove",b)};a.mouseover = (b)=>{a.addEventListener("onmouseover",b)};a.mouseout = (b)=>{a.addEventListener("onmouseout",b)};a.mouseup = (b)=>{a.addEventListener("onmouseup",b)};a.keydown = (b)=>{a.addEventListener("onkeydown",b)};a.keypress = (b)=>{a.addEventListener("onkeypress",b)};a.keyup = (b)=>{a.addEventListener("onkeyup",b)};a.abort = (b)=>{a.addEventListener("onabort",b)};a.beforeunload = (b)=>{a.addEventListener("onbeforeunload",b)};a.error = (b)=>{a.addEventListener("onerror",b)};a.hashchange = (b)=>{a.addEventListener("onhashchange",b)};a.load = (b)=>{a.addEventListener("onload",b)};a.pagehide = (b)=>{a.addEventListener("onpagehide",b)};a.resize = (b)=>{a.addEventListener("onresize",b)};a.scroll = (b)=>{a.addEventListener("onscroll",b)};a.unload = (b)=>{a.addEventListener("onunload",b)};a.change = (b)=>{a.addEventListener("onchange",b)};a.focus = (b)=>{a.addEventListener("onfocus",b)};a.focusin = (b)=>{a.addEventListener("onfocusin",b)};a.focusout = (b)=>{a.addEventListener("onfocusout",b)};a.input = (b)=>{a.addEventListener("oninput",b)};a.reset = (b)=>{a.addEventListener("onreset",b)};a.search = (b)=>{a.addEventListener("onsearch",b)};a.select = (b)=>{a.addEventListener("onselect",b)};a.submit = (b)=>{a.addEventListener("onsubmit",b)};a.online = (b)=>{a.addEventListener("ononline",b)};
    a.offline = (b)=>{a.addEventListener("onoffline",b)};
    a.move = (b)=>{a.addEventListener("mousemove",b)};
    a.wheel = (b)=>{a.addEventListener("wheel",b)};
};
var test = (aaa)=>{
    console.log(!this.aaa);
}