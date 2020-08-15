exports.handler = async (event) => {
  let { num1, num2 } = JSON.stringify(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ num1, num2, result: num1 + num2 }),
  }
};
