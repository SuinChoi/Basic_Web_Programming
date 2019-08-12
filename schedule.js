
var today = new Date();
var date = new Date();

function buildCalendar(){
  var doMonth = new Date(today.getFullYear(),today.getMonth(),1);
  var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
  var tbCalendar = document.getElementById("calendar");
  var tbCalendarYM = document.getElementById("tbCalendarYM");
  tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";
  while (tbCalendar.rows.length > 2) {
    tbCalendar.deleteRow(tbCalendar.rows.length-1);
  }
  var row = null;
  row = tbCalendar.insertRow();
  var cnt = 0;
  for (i=0; i<doMonth.getDay(); i++) {
    cell = row.insertCell();
    cnt = cnt + 1;
  }
  for (i=1; i<=lastDate.getDate(); i++) {
    cell = row.insertCell();
    cell.innerHTML = i;
    cnt = cnt + 1;
    if (i === 5){
      cell.innerHTML = "<font color=#30539F>" + i +"<br/>C++ draft 제출"
      }
    if (i === 6){
      cell.innerHTML = "<font color=red>" + i +"<br/>현충일"
      }
    if (i === 7){
      cell.innerHTML = "<font color=#30539F>" + i +"<br/>자료구조 기말" + "<br/>유닉스 퀴즈"
      }
    if (i === 8){
      cell.innerHTML = "<font color=#30539F>" + i +"<br/>야구 직관"
      }
    if (i === 11){
      cell.innerHTML = "<font color=#30539F>" + i +"<br/>글로벌 기후변화 기말"
      }
    if (i === 14){
      cell.innerHTML = "<font color=#30539F>" + i +"<br/>유닉스 기말"
      }
    if (i === 13){
      cell.innerHTML = "<font color=red>" + i +"<br/>선거"
      }
    if (i === 15){
      cell.innerHTML = "<font color=#30539F>" + i +"<br/>웹프기 기말"
      }
    if (i === 20){
      cell.innerHTML = "<font color=#30539F>" + i +"<br/>이산수학 기말"
      }

    if (cnt % 7 == 1) {
      cell.innerHTML = "<font color=#F79DC2>" + i
      }
    if (cnt%7 == 0){
      cell.innerHTML = "<font color=skyblue>" + i
      if (i === 30){
        cell.innerHTML = "<font color=#30539F>" + i +"<br/>생일"
        }
      row = calendar.insertRow();
      }
    if (today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth()&& i == date.getDate()){
      cell.bgColor = "#FAF58C";
      }
    }
}
