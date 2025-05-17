
const { orderModel, salesModel, totalRevenueModel, revenueModel, profitReportSchemaModel, financialSchemaModel, visitsModel } = require('../model/homeModel');

exports.getOrder = async () => {
  try {
    return await orderModel.find()
  } catch (err) {
    console.log(err);
  }
}

exports.getSales = async () => {
  try {
    return await salesModel.find()
  } catch (err) {
    console.log(err);
  }
}

exports.getTotalRevenue = async () => {
  try {
    return await totalRevenueModel.find()
  } catch (err) {
    console.log(err);
  }
}

exports.getRevenue = async () => {
  try {
    return await revenueModel.find()
  } catch (err) {
    console.log(err);
  }
}

exports.getProfitReport = async () => {
  try {
    return await profitReportSchemaModel.find()
  } catch (err) {
    console.log(err);
  }
}

exports.getFinancial = async () => {
  try {
    return await financialSchemaModel.find()
  } catch (err) {
    console.log(err);
  }
}

exports.getVisits = async () => {
  try {
    return await visitsModel.find()
  } catch (err) {
    console.log(err);
  }
}