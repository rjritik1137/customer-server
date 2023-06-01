const customers = require("../processed.json");
const pageSize = 30;
const customerListHandler = (req, res) => {
  const query = req.query;
  console.log(query);
  const dataSetLength = customers.length;
  const { page } = query;
  let pageNumber = parseInt(page | "0");
  if (isNaN(pageNumber)) {
    pageNumber = 0;
  }
  const start = Math.min(pageSize * pageNumber, dataSetLength - 1);
  const end = Math.min(dataSetLength - 1, pageSize * (pageNumber + 1));
  const data = [];

  for (let i = start; i < end; i++) {
    const customer = customers[i];
    const { name, location, picture } = customer;
    const {
      street: { number, name: _name },
      city,
      state,
      country,
      postcode,
    } = location;
    data[i - start] = {
      id: customers[i].id,
      name: `${name.title} ${name.first} ${name.last}`,
      title: name.title,
      address: `${number} ${_name}, ${city}, ${state}, ${country}, ${postcode}`,
      pictures: Object.values(picture),
    };
  }
  res.send(data);
};

module.exports = {
  customerListHandler,
};
