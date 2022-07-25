import Joi from 'joi';

export const createTaskSchema = Joi.object({
    "title": Joi.string().required(),
    "description": Joi.string().required(),
    "status": Joi.string().required(),
    "delivery_date": Joi.date().required(),
    "comments": Joi.string(),
    "responsible": Joi.string(),
    "tags": Joi.array(),
})