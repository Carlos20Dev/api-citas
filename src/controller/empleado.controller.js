import { getConnection, sql } from "../database";

export const getMedico = async (req, res) => {
    try {
        const result = await getConnection()
        const query = await result.request().query("SELECT * FROM medico")
        console.log(query)
        res.json(result.recorset)
    } catch (err) {
        console.log(err)
    }
}

export const getMedicoById = async (req,res) => {
    const {id} = req.params;
    
    const pool = await getConnection();

    const result = await pool
    .request()
    .input('Id', id)
    .query("SELECT * FROM medico WHERE id_medico = @Id");
    console.log(result)
    res.send(result.recordset[0]);
}

export const crearMedico = async (req,res) => {
    const {id_medico ,nombre, apellido, telefono, dni, fecha_nac, email, id_espec} = req.body;


    if(nombre == null || apellido == null || email == null || telefono == null || dni == null || fecha_nac == null || id_espec == null) {
        return res.status(400).send('Todos los campos son obligatorios');

    }

    try {
        const pool = await getConnection();
        
        await pool.request()
        .input('Id_medico', sql.Int, id_medico)
        .input('Nombre', sql.VarChar, nombre)
        .input('Apellido', sql.VarChar, apellido)
        .input('Telefono', sql.Char, telefono)
        .input('Dni', sql.Char, dni)
        .input('Fecha_nac', sql.Date, fecha_nac)
        .input('Email', sql.VarChar, email)
        .input('Id_espec', sql.Int, id_espec)
        .query("INSERT INTO medico (id_medico ,nombre, apellido, telefono, dni, fecha_nac, email, id_espec) VALUES (@Id_medico, @Nombre, @Apellido, @Telefono, @Dni, @Fecha_nac, @Email, @Id_espec)")
        console.log(id_medico ,nombre, apellido, telefono, dni, fecha_nac, email, id_espec) 
        res.json({id_medico ,nombre, apellido, telefono, dni, fecha_nac, email, id_espec})
    } catch (error) {
        console.log(error)
        res.status(500);
    }
}

// Eliminar un medico
export const eliminarMedico = async (req, res) => {
    const { id } = req.params;
    try {
        await sql.query`DELETE FROM medico WHERE id_medico = ${id}`;
        res.json({ message: 'Medico eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar medico', details: error.message });
    }
};