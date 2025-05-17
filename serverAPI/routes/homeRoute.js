// order data route

const express = require('express');
const { getOrder,getSales,getTotalRevenue,getRevenue,getProfitReport,getFinancial,getVisits } = require('../controllers/homeController');
const router = express.Router();

router.get('/getOrder', async (req,res)=>{
  console.log('get order data suuccess');
  const orderResult = await getOrder();
  res.send(orderResult); 
})

router.get('/getSales', async(req,res)=>{
  console.log('get sales data success');
  const salesResult = await getSales();
  res.send(salesResult);
})

router.get('/getTotalRevenue', async(req,res)=>{
  console.log('get total revenue data success');
  const totalRevenueResult = await getTotalRevenue();
  res.send(totalRevenueResult);
})

router.get('/getRevenue', async(req, res)=>{
  console.log('get revenue data success');
  const revenueResult = await getRevenue()
  res.send(revenueResult)
})

router.get('/getProfitReport', async(req,res)=>{
  console.log('get profit report data success');
  const profitReportResult = await getProfitReport();
  res.send(profitReportResult)
})

router.get('/getFinancial', async(req,res)=>{
  console.log('get financial data success');
  const getFinancialResult = await getFinancial();
  res.send(getFinancialResult)
})

router.get('/getVisits', async(req,res)=>{
  console.log('get vistis data success');
  const getVisitsResult = await getVisits();
  res.send(getVisitsResult)
})

module.exports = router;