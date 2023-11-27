/* 
Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
Необходимо написать функцию, которая бы удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`] 

1. фильтрация массива на подходящие значения filteringSuitableValues
2. исключить неподходящий формат даты suitableDateFormat
3. выбрать неподходящий формат даты и перевести в подходящий notSuitableDateFormat
4. соеденить два массива с датами result
*/

const arr = [
  "10-02-2022",
  "16-08-2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "48/14/2022",
  "05/05/2000",
];

function filterDates(arr) {
  const filteringSuitableValues = arr.filter((str) => {
    const parts = str.split(/[-/]/);
    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);

    if (
      isNaN(day) ||
      isNaN(month) ||
      isNaN(year) ||
      day === 0 ||
      day > 31 ||
      month === 0 ||
      month > 12
    ) {
      return false;
    }

    const dates = new Array(day, month, year);

    return dates;
  });

  const suitableDateFormat = filteringSuitableValues
  .filter((item) => !item.includes("/"));

  const notSuitableDateFormat = filteringSuitableValues
    .filter((item) => item.includes("/"))
    .map((str) => {
      const parts = str.split("/");
      const day = parts[1];
      const month = parts[0];
      const year = parts[2];
      return `${day}-${month}-${year}`;
    });

  const result = suitableDateFormat.concat(notSuitableDateFormat);

  return result.sort();
}

const result = filterDates(arr);

console.log(result);
