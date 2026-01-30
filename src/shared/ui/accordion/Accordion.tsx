import { useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.css';
import { Icon } from '../icon/Icon';
import { CSSTransition } from 'react-transition-group';
import type { AccordionProps } from './types';
import clsx from 'clsx';

function Accordion({ content, heading, className, isActive }: AccordionProps) {
  const [isOpen, setIsopen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!nodeRef.current) return;

    nodeRef.current.style.setProperty('--content-height', `${nodeRef.current.scrollHeight}px`);
  }, [isOpen]);
  const handleOpen = () => setIsopen((open) => !open);
  return (
    <div className={clsx(isOpen && styles.accordionActive)}>
      <div className={styles.accordioHeading} onClick={handleOpen}>
        {heading}
        <Icon width={24} height={24} type="arrow" className={styles.accordionIcon} />
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enter: styles.accordionWrapperEnter,
          enterActive: styles.accordionWrapperEnterActive,
          exit: styles.accordionWrapperExit,
          exitActive: styles.accordionWrapperExitActive,
        }}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <div className={styles.accordionContent}>{content}</div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Accordion;
