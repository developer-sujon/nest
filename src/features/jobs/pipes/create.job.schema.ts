import * as Joi from 'joi';
import { JobType } from '../constants/jobs.constants';

console.log(Object.keys(JobType));

export const createJobSchema = Joi.object({
  companyName: Joi.string().required(),
  title: Joi.string().required(),
  email: Joi.string().email().required(),
  type: Joi.string().valid(...Object.keys(JobType)),
  experience: Joi.number().required(),
  salary: Joi.number().required(),
  tags: Joi.array().items(Joi.string()).min(0),
  isActive: Joi.boolean(),
});
