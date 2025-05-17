
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sneat')

mongoose.connection.once('open', () => {
  console.log('database connected');
  let addSchema = new mongoose.Schema({
    name: String,
    visits: String,
    percent: String,
    catagory: String,
  })
  let addModel = mongoose.model('visitsDatas', addSchema)

  addModel.insertMany([
    { name: 'Chrome', visits: '8.92k', percent: '84.91', catagory: 'browser' },
    { name: 'Safari', visits: '1.29k', percent: '69.03', catagory: 'browser' },
    { name: 'Firefox', visits: '328', percent: '43.26', catagory: 'browser' },
    { name: 'Edge', visits: '142', percent: '39.99', catagory: 'browser' },
    { name: 'Opera', visits: '85', percent: '22.12', catagory: 'browser' },
    { name: 'Brave', visits: '36', percent: '21.06', catagory: 'browser' },
    { name: 'Windows', visits: '475.26k', percent: '61.5', catagory: 'os' },
    { name: 'Mac', visits: '89.12k', percent: '45.67', catagory: 'os' },
    { name: 'Ubuntu', visits: '38.68k', percent: '45.12', catagory: 'os' },
    { name: 'Linux', visits: '30.27k', percent: '35.03', catagory: 'os' },
    { name: 'Chrome', visits: '8.34k', percent: '23.25', catagory: 'os' },
    { name: 'Cent', visits: '2.25k', percent: '2.76', catagory: 'os' },
    { name: 'USA', visits: '87.24k', percent: '98.12', catagory: 'country' },
    { name: 'Brazil', visits: '42.69k', percent: '88.23', catagory: 'country' },
    { name: 'India', visits: '12.58k', percent: '53.82', catagory: 'country' },
    { name: 'Australia', visits: '4.13k', percent: '32.72', catagory: 'country' },
    { name: 'China', visits: '2.21k', percent: '27.11', catagory: 'country' },
    { name: 'France', visits: '1.56k', percent: '26.59', catagory: 'country' },
  ], (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  })
})

mongoose.connection.on('error', () => {
  console.log('db connection error');
})