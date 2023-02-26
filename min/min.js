const ScrollRsate = {
    /**
    * @param {"Id"|"Class"|"Global"} Type
    * @param {Name} Name
    * @return {number}
    */
    "top": (Type, Name) => { if (Type == "Id") { doc = document.getElementById(Name); } else if (Type == "Class") { doc = document.getElementsByClassName(Name); } else if (Type == "Global") { doc = document.documentElement; } else { return null; } return (doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100); },
    "left": function () { }
};
const Time = {
    /**
    * @param {"执行的函数带引号"} Function
     * @param {"间隔时间(秒)"} Seconds
     * @param {"次数"} Count
    */
    "count": (Function, Seconds, Count) => { var Interval = setInterval(() => { new Function(Function)(); console.log(Count); if (1 == Count) { clearInterval(Interval); } Count--; }, (Seconds * 1000)); },
    "Now": () => {
        return new Date().getTime();
    },
    /**
    {func:"func",   函数
    interval:number}间隔
    */
    // "Repeat": (data) => {
    //     return setInterval(data.func, data.interval);
    // }
}




/**
@example ajax({type:'GET',url:'example.com',success:'console.log("successfully")'})
{type:"GET",
url:"example.com",
success:"console.log('successfully')"}
私有变量:
&responseText -- 来自服务器响应的文本
*/
const ajax = (data) => {
    var xmlhttp = ajaxSetting.Request();
    xmlhttp.open(data.type, data.url, false);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function (func, responseText) {
        if (ajaxSetting.Zip) {
            responseText = str.Zip(responseText);
        } func = func.replaceAll(/&responseText/g, responseText);
        return Function(func)();
    }(data.success, xmlhttp.responseText);
}
const ajaxSetting = {
    "Request": () => {
        return new XMLHttpRequest();
    }, "Zip": (BOOL) => {
        return BOOL;
    }
}
// setup
ajaxSetting.Request();
ajaxSetting.Zip(true);


const str = {
    "Zip": (str) => {
        let list = ["\r\n", "\n", "	", " "];
        for (let count = 0; list.length != count; count++) {
            str = str.replaceAll(list[count], "");
        }
        return str.replaceAll(/"/g, "'");
    },
    // "format": (str)=>{
    //     return str.replaceAll(/>/g,">\r\n");
    // }
}



