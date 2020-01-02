function doGet(request){
  
  return HtmlService.createTemplateFromFile("Index").evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/1ykn43-IQIJsHo1irRPwqXrWZmfmdtu6z-TZabdIS9Nk/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("data");
  
  ws.appendRow([formObject.course_name,
                formObject.quiz_no
                
                
               ]);
  

}
  
function getArr(percentages){
   var url = "https://docs.google.com/spreadsheets/d/1ykn43-IQIJsHo1irRPwqXrWZmfmdtu6z-TZabdIS9Nk/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("data");
  var percentageList = new Array(percentages);
    ws.getRange("C").setValue(percentageList);
   
  
}
