import express from 'express'
const router = express.Router()

import { nutritionInfoProduct, nutritionInfoBarcode } from '../controllers/nutrition.js'

router.post('/productName', nutritionInfoProduct)
router.post('/barcode', nutritionInfoBarcode)


export default router
