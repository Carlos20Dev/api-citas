import { getConnection, sql } from "../database";

export const getHorario = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM horario")
        console.log(result);
        res.json(result.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const getHorarioById = async (req, res) => {
    const { id_horario } = req.params

    const pool = await getConnection()

    const result = await pool
        .request()
        .input('Id', id_horario)
        .query("SELECT * FROM horario WHERE id_horario = @Id")
    console.log(result)
    res.json(result.recordset[0])
}

export const getHorarioByMedico = async (req, res) => {
    const { id_medico } = req.params

    const pool = await getConnection()

    const result = await pool
        .request()
        .input('Id', id_medico)
        .query("SELECT h.id_horario, h.fecha, h.hora_inicio, h.hora_fin, rt.num_pacientes FROM reg_turno rt JOIN horario h ON rt.id_horario = h.id_horario WHERE rt.id_medico = @Id")
    console.log(result)
    res.json(result.recordset)
}

