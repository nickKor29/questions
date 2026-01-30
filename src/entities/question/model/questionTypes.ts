import type { AuthorShort } from '@/shared/model/authorTypes';

export type Question = {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById: string;
  createdBy: AuthorShort;
  updatedBy: AuthorShort;
  questionSpecializations: {
    createdAt: string;
    description: string;
    id: number;
    imageSrc: string | null;
    title: string;
    updatedAt: string;
  }[];
  questionSkills: {
    createdAt: string;
    description: string;
    id: number;
    imageSrc: string;
    specializations: {
      createdAt: string;
      description: string;
      id: number;
      imageSrc: string | null;
      title: string;
      updatedAt: string;
    }[];
    title: string;
    updatedAt: string;
  }[];
};
