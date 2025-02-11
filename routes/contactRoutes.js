import express from 'express'
import {getAllContacts,getContactsById,createContact,updateContact,deleteContact} from '../controllers/contactController.js'
import { contactValidationSchema } from '../validation/contactValidation.js';

const router = express.Router()


const validateContact = (req,res,next) => {
    const {error} = contactValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }
    next()
}

router.get('/contacts', getAllContacts)
router.get('/contacts/:id',getContactsById)
router.post('/contacts',validateContact,createContact)
router.put('/contacts/:id', validateContact,updateContact)
router.delete('/contacts/:id', deleteContact)

export default router