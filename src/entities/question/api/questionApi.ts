// questionApi.ts
import { baseApi } from '@/shared/api/baseApi';
import type { Question } from '../model/questionTypes';
import type { BaseApiResponce } from '@/shared/model/baseApiType';

type FetchQuestionsParams = {
  page?: number;
  limit?: number;
};

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<BaseApiResponce<Question>, FetchQuestionsParams>({
      query: ({ page = 1, limit = 10 }) => ({
        url: 'questions/public-questions',
        params: { page, limit },
      }),
      providesTags: ['Questions'],
    }),
    fetchQuestionById: builder.query<BaseApiResponce<Question>, number>({
      query: (id) => `/questions/public-questions/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useFetchQuestionsQuery, useLazyFetchQuestionByIdQuery } = questionApi;
export default questionApi;
