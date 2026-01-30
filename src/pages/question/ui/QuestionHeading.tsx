import styles from './QuestionHeading.module.css';

type Props = {
  title: string;
};

function QuestionHeading({ title }: Props) {
  return <h2 className={styles.header}>{title}</h2>;
}

export default QuestionHeading;
