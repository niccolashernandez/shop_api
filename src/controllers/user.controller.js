import { pool } from '../db.js'

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Sommething goes wrong"
        })
    }
}

export const getUser = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Sommething goes wrong"
        })
    }
}

export const createUser = async (req, res) => {
    try {
        const { identificacion, nombre, correo } = req.body;
        const [rows] = await pool.query('INSERT INTO usuario(identificacion, nombre, correo) VALUES (?,?,?)', [identificacion, nombre, correo])
        res.send({
            id: rows.insertId,
            identificacion,
            nombre,
            correo
        })
    } catch (error) {
        return res.status(500).json({
            message: "Sommething goes wrong"
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { identificacion, nombre, correo } = req.body;
        const [result] = await pool.query('UPDATE usuario SET identificacion = IFNULL(?, identificacion), nombre = IFNULL(?, nombre), correo = IFNULL(?, correo) WHERE id = ?', [identificacion, nombre, correo, id])


        if (result.affectedRows == 0) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Sommething goes wrong"
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM usuario WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "User not fount"
            })
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Sommething goes wrong"
        })
    }
}