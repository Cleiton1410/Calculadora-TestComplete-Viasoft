var CalculatorPage = require("CalculatorPage");

function testAddition() {
  var calc = new CalculatorPage();
  calc.press7();
  calc.pressAdd();
  calc.press5();
  calc.pressEq();
  var result = calc.getResult();
  Log.Message("Resultado exibido: " + result);
  aqObject.CheckProperty(result, "toString()", cmpEqual, "12");
}

function testSubtraction() {
  var calc = new CalculatorPage();
  calc.press7();
  calc.pressSub();
  calc.press5();
  calc.pressEq();
  var result = calc.getResult();
  Log.Message("Resultado exibido: " + result);
  aqObject.CheckProperty(result, "toString()", cmpEqual, "2");
}

function testMultiplication() {
  var calc = new CalculatorPage();
  calc.press7();
  calc.pressMul();
  calc.press5();
  calc.pressEq();
  var result = calc.getResult();
  Log.Message("Resultado exibido: " + result);
  aqObject.CheckProperty(result, "toString()", cmpEqual, "35");
}

function testDivision() {
  var calc = new CalculatorPage();
  calc.press7();
  calc.pressDiv();
  calc.press5();
  calc.pressEq();
  var result = calc.getResult();
  Log.Message("Resultado exibido: " + result);
  aqObject.CheckProperty(result, "toString()", cmpEqual, "1,4");
}
