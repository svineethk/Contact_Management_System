import { getDB } from '../index.js';

export const getAllContacts = async (req, res) => {
    try {
        const db = getDB(); 

        const { name, email } = req.query;
        
        let query = 'SELECT * FROM contacts WHERE 1=1'; 
        const queryParams = [];

        if (name) {
            query += ' AND name LIKE ?';
            queryParams.push(`%${name}%`);
        }

        if (email) {
            query += ' AND email LIKE ?';
            queryParams.push(`%${email}%`);
        }

        const rows = await db.all(query, queryParams);
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


export const createContact = async (req,res) => {
    const {name, email,phone_number,address} = req.body

    try {
        const db = getDB(); 
        const result = await db.run(
            `INSERT INTO contacts (name,email,phone_number,address) VALUES (?, ?, ?, ?)`,
            [name,email,phone_number,address]   
        );
        res.status(201).json({
            id: result.lastID,
            name,
            email,
            phone_number,
            address,
            createdAt : new Date().toLocaleString(),

        })
    } catch(error) {
        res.status(400).json({message : 'Failed to create contact' , error : error.message})
    }
}


export const updateContact = async (req,res) => {
    const {id} = req.params
    const {name,email,phone_number,address} = req.body

    try {
        const db = getDB(); 
        const result = await db.run(
            `UPDATE contacts SET name = ?, email = ?, phone_number = ?, address = ? WHERE id = ?`,
            [name, email,phone_number,address,id]
        )
        if (result.changes === 0){
            return res.status(404).json({message : "Contacts not found"})
        }
        return res.status(200).json({message : "Contact Updated Successfully"})
    } catch(error){
        res.status(400).json({message : 'Failed to update contact', error : error.message})
    }
}

export const deleteContact = async (req,res) => {
    const {id} = req.params

    try {
        const db = getDB(); 
        const result = await db.run(`DELETE FROM CONTACTS WHERE id = ?`, [id])   
        if (result.changes === 0){
            return res.status(404).json({message : "Contact not found"})
        }   
        return res.status(200).json({message : 'Contact deleted successfully'})
    }catch(error){
        res.status(400).json({message : 'Failed to delete contact', error : error.message})
    }
}


export const getContactsById = async (req,res) => {
    const {id} = req.params

    try{
        const db = getDB(); 
        const row = await db.get(`SELECT * FROM CONTACTS WHERE id = ?`, [id])
        if(!row){
            return res.status(404).json({message : "Contact not found"});
        }
        return res.status(200).json(row)
    } catch(error){
        return res.status(500).json({message : "Internal Server Error"})
    }
}