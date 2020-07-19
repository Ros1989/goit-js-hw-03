/* Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств. */

const objects = [
  {},
  { name: "Mango", age: 2 },
  { mail: "poly@mail.com", isOnline: true, score: 500 },
];
const countProps = function (objs) {
  for (const obj of objs) {
    let length = Object.keys(obj).length;
    console.log(obj, ` has "${length}" propety(es)`);
  }
  return objs;
};

console.log(countProps(objects));
