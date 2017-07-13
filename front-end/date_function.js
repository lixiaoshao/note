//每天 00:59:59 定时刷新
function newDate(){
    var date = new Date();
    var h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        totalMs;
    totalMs = ((24-h)*3600+(59-m)*60+(59-s))*1000;
    //totalMs += Date.parse(new Date())/1000;
    return totalMs;
}