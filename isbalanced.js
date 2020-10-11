let str = '5*(4-2)';

if (isBalanced(str)) {
  alert('Все верно!')
} else {
  alert('Скобки неверно расставлены!')
}

function isBalanced(str) {
  // приведем переменную str к типу string
  str = String(str);
  // пара открывающих-закрывающих скобок
  let hooks = "()";
  // стек открытых скобок
  let stack = [];
  // перебираем всю строку посимвольно
  for (let i = 0; i < str.length; ++i) {
    // текущий символ
    let char = str[i];
    // ищем символ в скобках
    let ind = hooks.indexOf(char);
    // если скобка найдена
    if (ind >= 0) {
      // проверяем, какая это скобка
      if (1 == ind) {
        // если  это закрывающая скобка, проверяем стек
        // если стек пуст - выходим из функции с результатом 'false'
        if (!stack.length) return false;
        // извлекаем последнюю открытую скобку из стека
        stack.pop();
      } else {
        // открывающую скобку помещаем в стек
        stack.push(char);
      }
    } else {
      continue;
    }
  }
  // если после обхода всей строки стек пуст - выходим из функции с результатом 'true'
  return !stack.length;
}
