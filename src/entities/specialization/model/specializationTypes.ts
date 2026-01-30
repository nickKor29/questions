import type { BaseApiResponce } from '@/shared/model/baseApiType';

export type Specialization = {
  createdAt: string;
  description: string;
  id: number;
  imageSrc: string | null;
  title: string;
  updatedAt: string;
};
export type SpecializationApiResult = {
  specializations: Specialization[];
  page: number;
  limit: number;
  total: number;
};
export type SpecializationApiResponce = BaseApiResponce<Specialization>;
