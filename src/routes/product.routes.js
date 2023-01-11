import { Router } from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'


const router = Router();

router.get('/producto', getProducts);
router.post('/producto', createProduct);
router.put('/producto', updateProduct);
router.delete('/producto', deleteProduct);

export default router