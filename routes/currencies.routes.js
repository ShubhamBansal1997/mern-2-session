const {getCurrencies, getCurrenciesWithSymbol} = require("../controllers/currencies.controller");
const router = require("express").Router()

router.get('/', getCurrencies)
router.get('/:symbol', getCurrenciesWithSymbol)

module.exports = router
// http://ip:8080/currencies