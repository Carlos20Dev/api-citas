import { getConnection, sql } from "../database";

export const getEspecialidad = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM especialidad")
        console.log(result);
        res.json(result.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const getEspecialidadById = async (req, res) => {
    const { id_espec } = req.params

    const pool = await getConnection()

    const result = await pool
        .request()
        .input('Id', id_espec)
        .query("SELECT * FROM especialidad WHERE id_espec = @Id")
    console.log(result)
    res.json(result.recordset[0])
}

export const crearEspecialidad = async (req,res) => {
    const { nombre } = req.body;

    if(nombre == null) {
        return res.status(400).send('Todos los campos son obligatorios');
    }
 
    try {
        const pool = await getConnection();
        
        await pool.request()
        .input('Nombre', sql.VarChar, nombre)
        .query("INSERT INTO especialidad (nombre) VALUES (@Nombre)")
        console.log(estado)
        res.json({estado})
    } catch (error) {
        console.log(error)
        res.status(500);
    }
}