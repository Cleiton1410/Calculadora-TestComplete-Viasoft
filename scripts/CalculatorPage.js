// Page Object para a Calculadora do Windows
function CalculatorPage() {
  this.calc = Sys.Process("Calculator");

  // Botões principais
  this.btn7   = Aliases.Calculator.Window("Button", "7");
  this.btn5   = Aliases.Calculator.Window("Button", "5");
  this.btnAdd = Aliases.Calculator.Window("Button", "Mais");
  this.btnSub = Aliases.Calculator.Window("Button", "Menos");
  this.btnMul = Aliases.Calculator.Window("Button", "Multiplicar por");
  this.btnDiv = Aliases.Calculator.Window("Button", "Dividir por");
  this.btnEq  = Aliases.Calculator.Window("Button", "Igual a");
  this.result = Aliases.Calculator.Window("Text", "", 1);
}

CalculatorPage.prototype.press7   = function() { this.btn7.Click(); }
CalculatorPage.prototype.press5   = function() { this.btn5.Click(); }
CalculatorPage.prototype.pressAdd = function() { this.btnAdd.Click(); }
CalculatorPage.prototype.pressSub = function() { this.btnSub.Click(); }
CalculatorPage.prototype.pressMul = function() { this.btnMul.Click(); }
CalculatorPage.prototype.pressDiv = function() { this.btnDiv.Click(); }
CalculatorPage.prototype.pressEq  = function() { this.btnEq.Click(); }
CalculatorPage.prototype.getResult = function() { return this.result.wText; }

module.exports = CalculatorPage;
