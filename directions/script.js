function f() {
    var select;
    let now=new Date();
    let day = 1000 * 3600 * 24;
    let data;
    select= document.getElementById("selectID");
    for (var i=0; i<13;i++){
        now.setTime(now.getTime() + day);
        let days=now.getDate();
        let month=now.getMonth()+1;
        let weak='ВОСКПЕСЕНЬЕ,ПОНЕДЕЛЬНИК,ВТОРНИК,СРЕДА,ЧЕТВЕРГ,ПЯТНИЦА,СУББОТА'.split(',');
        if(days<10){
            days= "0"+days;
        }
        if(month<10){
            month="0"+month;
        }
        data=days + "." + month + " " + weak[now.getDay()];
        select.innerHTML+= '<option value="' + (now.getDay()) + '">' + data  + '</option>';
    }


}