import type { Specialization } from '@/entities/specialization/model/specializationTypes';
import type { BaseApiResponce } from '@/shared/model/baseApiType';

export type Skill = {
  createdAt: string;
  createdBy: string | null;
  description: string;
  id: number;
  imageSrc: string | null;
  title: string;
  updatedAt: string;
  specializations: Specialization[];
};

export type SkillApiResult = {
  skills: Skill[];
  page: number;
  limit: number;
  total: number;
};

export type SkillApiResponce = BaseApiResponce<Skill>;
