import { useGetSkillsQuery } from '@/entities/skill/api/skillApi';
import { useGetSpecializationsQuery } from '@/entities/specialization/api/specializationApi';
import styles from './Filters.module.css';
import FilterButton from './FilterButton';
function Filters() {
  const { data: skills } = useGetSkillsQuery(null);
  console.log(skills);
  const { data: specializations } = useGetSpecializationsQuery(null);
  return (
    <div className={styles.container}>
      <input type="text" />
      <h4>Специализация</h4>
      <div className={styles.specializationsBlock}>
        {specializations?.specializations.map((s) => (
          <FilterButton>
            <button className={styles.specialization}>{s.title}</button>
          </FilterButton>
        ))}
      </div>
    </div>
  );
}

export default Filters;
