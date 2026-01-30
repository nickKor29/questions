import Accordion from '@/shared/ui/accordion/Accordion';
import QuestionHeading from './QuestionHeading';
import QuestionContent from './QuestionContent';
function QuestionItem({ title, shortAnswer }: { title: string; shortAnswer: string }) {
  return (
    <Accordion
      heading={<QuestionHeading title={title} />}
      content={<QuestionContent content={shortAnswer} />}
    />
  );
}

export default QuestionItem;
