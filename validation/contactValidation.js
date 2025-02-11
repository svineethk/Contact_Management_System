import Joi from 'joi';

export const contactValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  phone_number: Joi.string().min(10).max(15).required(),
  address: Joi.string().max(255).optional(),
});