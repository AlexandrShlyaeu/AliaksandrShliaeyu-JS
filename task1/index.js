"use strict"
// “1" + 2 + 0 ;  ответ 120 (2 и 0 приведутся к строке)
// “1" - 1 + 2;    ответ 2 ("1" приведется к числовому)
// true + false; ответ 1 (true = 1 false = 0)
// 10 / “5";  ответ 2 ("5" приведется к числовому)
// "2" * "3"; ответ 6 ("2 и 3" приведется к числовому)
// 4 + 5 + "px"; ответ 9px ("4 и 5" сложатся и конкотенируются со строкой)
// "$" + 4 + 5; ответ $45 ("4" и "5" конкотенируются со строкой)
// "42" - 2; ответ 40 ("42" приведется к числовому)
// "4px" - 2;  ответ NaN ("4px" при приведению к числовому выдаст NaN)
// 7 / 0; ответ infinity ("42" приведется к числовому)
// "  -9\n" + 5;  ответ -9 5 ("5" конкотенируются со строкой и преведется на след строку)
// "  -9\n" - 5;  ответ -14 ("-9" приведется к числовому)
// 5 && 2; ответ 2 (при обоих true выводится последнее)
// 2 && 5;  ответ 5 (при обоих true выводится последнее)
// 5 || 0;   ответ 5 (выводтся первое true)
// 0 || 5;  ответ 5 (выводтся первое true)
// null + 1;   ответ 1 (выводтся первое true)
// undefined + 1; ответ NaN ("undefined" при приведению к числовому выдаст NaN)
// null == "\n0\n";  false
// +null == +"\n0\n"; true (приведутся к числовым)
