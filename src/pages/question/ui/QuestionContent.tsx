import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/atom-one-dark.min.css';
import styles from './QuestionContent.module.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

type Props = {
  content: string;
};

function QuestionContent({ content }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.querySelectorAll('pre code').forEach((block) => {
      const codeElement = block as HTMLElement;

      codeElement.className = codeElement.className
        .split(' ')
        .filter((cls) => !cls.startsWith('hljs') && !cls.startsWith('language-'))
        .join(' ');

      codeElement.removeAttribute('data-highlighted');

      const text = codeElement.textContent || '';
      codeElement.textContent = text;

      hljs.highlightElement(codeElement);
    });
  }, []);

  return (
    <div
      ref={contentRef}
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default QuestionContent;
