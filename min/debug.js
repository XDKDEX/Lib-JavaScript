/*
// var GetScrollRsate = {
//     /**
//     *
//     * @param {"Id"|"Class"|"Global"} Type
//     * @param {Name} Name
//     * @return {number}
//     */
//     "top": function (Type, Name) {
//         if (Type == "Id") {
//             doc = document.getElementById(Name);
//         } else if (Type == "Class") {
//             doc = document.getElementsByClassName(Name);
//         } else if (Type == "Global") {
//             doc = document.documentElement;
//         } else {
//             return null;
//         }
//         return (doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100);
//     },
//     "left": function () {
//     }

// };
// GetScrollRsate.top()


// var Request = {
//     "Get": function (url) {
//         var Request = new XMLHttpRequest();
//         Request.open("GET", url,false);
//         Request.send(null);
//         Request.onreadystatechange = function(Type){
//             if (Request.readyState == 4 & Request.readyState == 200) {
//                 return Request.responseText;
//             }
//         }
//     }
// }*/
/*
var test = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
      reject('foo');
    }, 300);
});*/
var Time = {
    /**
     * @param {"执行的函数带引号"} Function
     * @param {"间隔时间(秒)"} Seconds
     * @param {"次数"} Count
    */
    "count": (Function, Seconds, Count) => {
        var Interval = setInterval(() => {
            new Function(Function)();
            console.log(Count);
            if (1 == Count) {
                clearInterval(Interval);
            }
            Count--;
        }, (Seconds * 1000));
    },
    "Now": ()=>{
        return new Date().getTime();
    }
}