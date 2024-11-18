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