import { useGetSkillsQuery } from '@/entities/skill/api/skillApi';
import { useGetSpecializationsQuery } from '@/entities/specialization/api/specializationApi';
import styles from './Filters.module.css';
function Filters() {
  const { data: skills } = useGetSkillsQuery(null);
  // console.log(skills);
  const { data: specializations } = useGetSpecializationsQuery(null);
  console.log(specializations);
  return (
    <div className={styles.container}>
      <input type="text" />
      <h4>Специализация</h4>
      <div className={styles.specializationsBlock}>
        <button className={styles.specialization}>React</button>
        <button className={styles.specialization}>Figma</button>
        <button className={styles.specialization}>JavaScript</button>
        <button className={styles.specialization}>React</button>
        <button className={styles.specialization}>Figma</button>
        <button className={styles.specialization}>JavaScript</button>
        <button className={styles.specialization}>React</button>
        <button className={styles.specialization}>Figma</button>
        <button className={styles.specialization}>JavaScript</button>
        <button className={styles.specialization}>React</button>
        <button className={styles.specialization}>Figma</button>
        <button className={styles.specialization}>JavaScript</button>
        <button className={styles.specialization}>React</button>
        <button className={styles.specialization}>Figma</button>
        <button className={styles.specialization}>JavaScript</button>
      </div>
    </div>
  );
}

export default Filters;
