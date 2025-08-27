# Automação de Testes - Calculadora do Windows

## 📌 Descrição
Este projeto demonstra a automação da **Calculadora do Windows** utilizando **TestComplete** com **JavaScript**.  
As operações testadas são: adição, subtração, multiplicação e divisão (números fixos: 7 e 5).

---

## 🚀 Como executar

1. Abra o projeto no **TestComplete**.
2. Certifique-se de que a Calculadora do Windows está registrada em **TestedApps**.
3. Execute os testes a partir do arquivo `scripts/CalculatorTests.js`.
4. Opcionalmente, rode os cenários BDD definidos em `docs/Calculadora.feature`.

---

## 📂 Estrutura do Projeto
```
scripts/              # Scripts JS para automação
  ├── CalculatorPage.js
  ├── CalculatorTests.js
docs/                 # Documentação em Gherkin
  └── Calculadora.feature
IA_DOCUMENTACAO.md    # Registro do uso de IA
README.md             # Este arquivo
```

---

## ✅ Tecnologias utilizadas
- TestComplete (JavaScript)
- BDD / Gherkin
- Object Spy + Name Mapping
