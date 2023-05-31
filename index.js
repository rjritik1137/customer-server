const express = require("express");
const cors = require('cors')
const app = express();
const customers = require('./processed.json')
app.use(
    cors({
        origin: "*"
    })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/user", (req, res) => {
  const query = req.query;
  const dataSetLength = customers.length
  const {page = 1, pageSize = 30} = query
  const start =Math.min(pageSize * page, dataSetLength)
  const end = Math.min(dataSetLength-1, pageSize * (page + 1))
  const data = []
  for(let i=start;i<=end;i++) {
    const customer = customers[i]
    const {name, location, picture} = customer
    const {street: {number, name: _name}, city, state, country, postcode} = location
    data[i-start] = {
        id: customers[i].id,
        name: `${name.title} ${name.first} ${name.last}`,
        title: name.title,
        address: `${number} ${_name}, ${city}, ${state}, ${country}, ${postcode}`,
        pictures: Object.values(picture)
    }
  }
  res.send(data)
});


app.listen(3000, ()=>{
    console.log("server started on port 3000")
});