# Date对象
 
- Date() 方法可返回当天的日期和时间。

  ```JavaScript
  let data = new Date()
  console.log(data)
  // 输出结果 (笔记记于2017年3月17日)
  // Fri Mar 17 2017 16:13:41 GMT+0800 (中国标准时间)
  ```

- getDate() 方法可返回月份的某一天。

- getDay() 方法可返回表示星期的某一天的数字。

- getMonth() 方法可返回表示月份的数字。(1月从0开始)

- getFullYear() 方法可返回一个表示年份的 4 位数字。

- getTime() 方法可返回距 1970 年 1 月 1 日之间的毫秒数。

  ```JavaScript
  var d = new Date()
  console.log('日:' + d.getDate())
  console.log('月:' + ( d.getMonth() + 1 ))
  console.log('年:' + d.getFullYear())
  console.log('星期:' + d.getDay())
  console.log('time:' + d.getTime())
  // 输出结果 (笔记记于2017年3月17日)
  日:17
  月:3
  年:2017
  星期:5
  time:1489840239015
  ```

- parse() 方法可解析一个日期时间字符串，并返回 1970/1/1 午夜距离该日期时间的毫秒数。
