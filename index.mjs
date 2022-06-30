import assert from 'assert';
const date = new Date('2022-06-30 00:00'); // node -p 'new Date("2022-06-30 00:00")'
// 2022-06-30T03:00:00.000Z

const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/;
// regex.exec(date.toISOString());
// const [full, year, month, day] = regex.exec(date.toISOString());

// const actual = `${day}/${month}/${year}`;
// const expected = '30/06/2021';
// assert.equal(actual, expected);
// console.log({ actual });

// criando variavéis somente no contexto usando as {}
{
  const [full, year, month, day] = regex.exec(date.toISOString());
  const actual = `${day}/${month}/${year}`;
  const expected = '30/06/2022';
  assert.equal(actual, expected);
}

// toLocaleDateString()
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
// {
//   console.log(date.toLocaleDateString('pt-br', options));
//   date.toLocaleDateString('pt-br', options);
//     const actual = `${day}/${month}/${year}`;
//     const expected = '30/06/2022';
//     assert.equal(actual, expected);
// }
{
  const actual = date.toLocaleDateString('pt-br', options);
  const expected = '30 de junho de 2022';
  assert.equal(actual, expected);
}

{
  const actual = date.toLocaleDateString('pt-br', {
    ...options,
    month: 'numeric'
  });
  const expected = '30/06/2022';
  //   console.log({ actual });
  assert.equal(actual, expected);
}

// Intl
// {
//   const actual = new Intl.DateTimeFormat('pt-br').format(date);
//   const expected = '30/06/2022';
//   console.log({ actual });
//   assert.equal(actual, expected);
// }

// {
//   const actual = new Intl.DateTimeFormat('pt-br', {
//     dateStyle: 'full',
//     timeStyle: 'long'
//   }).format(date);
//   const expected = '30/06/2022';
//   console.log({ actual });
//   assert.equal(actual, expected);
// }

{
  const actual = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
    timeStyle: 'long'
  }).format(date);
  const expected = 'quinta-feira, 30 de junho de 2022 00:00:00 BRT';
  // console.log({ actual });
  assert.equal(actual, expected);
}
