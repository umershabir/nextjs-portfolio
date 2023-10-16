import styles from "../styles/Home.module.scss";
import { experiences } from "@/helper/experiences";
// experiences
export default function Experiences() {
  return (
    <section className={styles.latest}>
      <div className={styles.heading}>
        <h3>Work Experiences</h3>
      </div>

      <ul className={styles.experienceContainer}>
        {experiences.map((job, indx) => (
          <li key={indx} className={styles.experienceItem}>
            <div className={styles.itemContainer}>
              <div className={styles.itemHeadings}>
                <span>
                  <h3>{job.title}</h3>
                  <p>
                    {job.companyName} · {job.jobType}
                  </p>
                </span>
                <p>
                  {job.dateOfJoining} - {job.dateOfLeaving}
                </p>
              </div>
              <ul className={styles.achievmentsContainer}>
                {job.achievments.map((achievement, indx) => (
                  <li key={indx} className={styles.achievmentItem}>
                    {achievement}
                  </li>
                ))}
              </ul>
              <ul className={styles.technologiesContainer}>
                <p>Technologies: </p>
                {job.technologies.map((tech, indx) => (
                  <li key={indx} className={styles.skillItem}>
                    {tech},
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
