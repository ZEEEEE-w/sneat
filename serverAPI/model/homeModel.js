const mongoose = require('mongoose');
const { data } = require('react-router-dom');

// create order schema
const orderSchema = new mongoose.Schema({
  data: {
    type: [Number],
    required: true,
  }
})

// create sales schema
const salesSchema = new mongoose.Schema({
  data: {
    type: [Number],
    required: true,
  }
})
// create total revenue schema
const totalRevenueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: [Number],
    required: true,
  }
})
// create revenue schema
const revenueSchema = new mongoose.Schema({
  data: {
    type: [Number],
    required: true,
  }
})
//create profit report schema
const profitReportSchema = new mongoose.Schema({
  name: String,
  data: [Number],
})
//create financial schema
const financialSchema = new mongoose.Schema({
  name: String,
  data: [Number],
})

//create visits schema
const visitsSchema = new mongoose.Schema({
  name: String,
  visits: String,
  percent: String,
  catagory: String,
})

const orderModel = mongoose.model('orderdatas', orderSchema);
const salesModel = mongoose.model('salesdatas', salesSchema);
const totalRevenueModel = mongoose.model('totalRevenuedatas', totalRevenueSchema);
const revenueModel = mongoose.model('revenuedatas', revenueSchema)
const profitReportSchemaModel = mongoose.model('profitreportdatas', profitReportSchema)
const financialSchemaModel = mongoose.model('financialdatas', financialSchema)
const visitsModel = mongoose.model('visitsdatas', visitsSchema)

module.exports = {
  orderModel,
  salesModel,
  totalRevenueModel,
  revenueModel,
  profitReportSchemaModel,
  financialSchemaModel,
  visitsModel,
};