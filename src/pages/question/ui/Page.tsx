import { useFetchQuestionsQuery } from '@/entities/question/api/questionApi';
import Pagination from '@/shared/ui/pagination/Pagination';
import { useUrlParam } from '@/shared/ui/pagination/useUrlParams';
import Filters from '@/widgets/filter/ui/Filters';
import styles from './Page.module.css';
import QuestionItem from './QuestionItem';

function Page() {
  const { value: currentPage, setValue: setCurrentPage } = useUrlParam<number>({
    paramName: 'page',
    defaultValue: 1,
    scrollToTop: true,
  });
  const { data, error, isLoading } = useFetchQuestionsQuery({
    page: currentPage,
    limit: 10,
  });
  console.log(data);
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error loading questions</p>;

  const totalPages = Math.ceil((data?.total || 0) / 10);

  return (
    <div className={styles.container}>
      <div className={styles.questions}>
        <h1>Вопросы React, JavaScript</h1>
        <ul>
          {data?.data?.map((question) => (
            <QuestionItem
              key={question.id}
              title={question.title}
              shortAnswer={question.shortAnswer}
            />
          ))}
        </ul>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
      <Filters />
    </div>
  );
}

export default Page;
