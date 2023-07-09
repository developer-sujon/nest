import { JobType } from '../constants/jobs.constants';

export interface Job {
  companyName: string;
  title: string;
  email: string;
  type: JobType;
  experience: number;
  salary: number;
  tags: string[];
  isActive: boolean;
  refId: string;
  id: number;
}
