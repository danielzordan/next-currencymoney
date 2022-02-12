async function finance(request, response) {
  const financeResponse = await fetch("https://api.hgbrasil.com/finance?key=f8db8105");
  const formatResponse = await financeResponse.json();

  response.json({
    finances: formatResponse,
  });
}

export default finance;