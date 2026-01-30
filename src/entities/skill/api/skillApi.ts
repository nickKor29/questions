import { baseApi } from '@/shared/api/baseApi';
import type { SkillApiResponce, SkillApiResult } from '../model/skillTypes';

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillApiResult, null>({
      query: () => ({
        url: `skills`,
      }),
      transformResponse: (response: SkillApiResponce) => ({
        skills: response.data,
        page: response.page,
        limit: response.limit,
        total: response.total,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery } = skillApi;
