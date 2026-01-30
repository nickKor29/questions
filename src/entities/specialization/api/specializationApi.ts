import { baseApi } from '@/shared/api/baseApi';
import type {
  SpecializationApiResponce,
  SpecializationApiResult,
} from '../model/specializationTypes';

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationApiResult, null>({
      query: () => ({
        url: `specializations`,
      }),
      transformResponse: (response: SpecializationApiResponce) => ({
        specializations: response.data,
        page: response.page,
        limit: response.limit,
        total: response.total,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecializationsQuery } = specializationApi;
