/* Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного
 * (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач". */

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const employee = Object.keys(employees);
  console.log(values);

  let biggestValue = 0;
  let bestEmployee;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > biggestValue) {
      biggestValue = values[i];
      bestEmployee = i;
    }
  }
  return `Best employee is "${employee[bestEmployee]}", his resalt is "${biggestValue}" tasks.`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
