import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller.js'


const router = Router();

router.get('/USUARIO', getUsers);
router.get('/usuario/:id', getUser);
router.post('/usuario', createUser);
router.patch('/usuario/:id', updateUser);
router.delete('/usuario/:id', deleteUser);

export default router