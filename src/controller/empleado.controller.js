import { getConnection, sql } from "../database";

export const getMedico = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM medico")
        console.log(result);
        res.json(result.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const getMedicoById = async (req,res) => {
    const {id_medico} = req.params;
    
    const pool = await getConnection();

    const result = await pool
    .request()
    .input('Id', id_medico)
    .query("SELECT * FROM medico WHERE id_medico = @Id");
    console.log(result)
    res.json(result.recordset[0]);
}

export const getMedicoByEspec = async (req, res) => {
    const { id_espec } = req.params;

    const pool = await getConnection()

    const result = await pool
    .request()
    .input('Id_espec', id_espec)
    .query("SELECT * FROM medico WHERE id_espec = @Id_espec")
    console.log(result)
    res.json(result.recordset)
}

export const crearMedico = async (req,res) => {
    const {nombre, apellido, telefono, dni, fecha_nac, email, id_espec} = req.body;

    if(nombre == null || apellido == null || telefono == null || dni == null || fecha_nac == null || email == null || id_espec == null) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    try {
        const pool = await getConnection();
        
        await pool.request()
        //.input('Id_medico', sql.Int, id_medico)
        .input('Nombre', sql.VarChar, nombre)
        .input('Apellido', sql.VarChar, apellido)
        .input('Telefono', sql.Char, telefono)
        .input('Dni', sql.Char, dni)
        .input('Fecha_nac', sql.Date, fecha_nac)
        .input('Email', sql.VarChar, email)
        .input('Id_espec', sql.Int, id_espec)
        .query("INSERT INTO medico (nombre, apellido, telefono, dni, fecha_nac, email, id_espec) VALUES (@Nombre, @Apellido, @Telefono, @Dni, @Fecha_nac, @Email, @Id_espec)")
        console.log(nombre, apellido, telefono, dni, fecha_nac, email, id_espec) 
        res.json({nombre, apellido, telefono, dni, fecha_nac, email, id_espec})
    } catch (error) {
        console.log(error)
        res.status(500);
    }
}

// Actualizar Medico
export const actualizarMedico = async (req, res) => {
    const { id_medico } = req.params

    const { nombre, apellido, telefono, dni, fecha_nac, email, id_espec } = req.body

    if (!nombre || !apellido || !telefono || !dni || !fecha_nac || !email || !id_espec ) {
        return res.status(400).json({ msg: 'Error, por favor llene todos los campos'})
    }

    try {
        const pool = await getConnection()
        await pool.request()
            .input('Id_medico', sql.Int, id_medico)
            .input('Nombre', sql.VarChar, nombre)
            .input('Apellido', sql.VarChar, apellido)
            .input('Telefono', sql.Char, telefono)
            .input('Dni', sql.Char, dni)
            .input('Fecha_nac', sql.Date, fecha_nac)
            .input('Email', sql.VarChar, email)
            .input('Id_espec', sql.Int, id_espec)
            .query("UPDATE medico SET nombre = @Nombre, apellido = @Apellido, telefono = @Telefono, dni = @Dni, fecha_nac = @Fecha_nac, email = @Email, id_espec = @Id_espec WHERE id_medico = @Id_medico")
            console.log(nombre, apellido, telefono, dni, fecha_nac, email, id_espec )
        res.json({ nombre, apellido, telefono, dni, fecha_nac, email, id_espec })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Error al actualizar el Médico'})
    }
}

// Eliminar un medico
export const eliminarMedico = async (req, res) => {
    const { id_medico } = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
           .input("Id", sql.Int, id_medico)
           .query("DELETE FROM medico WHERE id_medico = @Id")
        res.json({ msg: `El medico ${id_medico} ha sido eliminado` });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
}
