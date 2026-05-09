import styles from '../../JobDetails.module.css';

export default function ItmoContent() {
  return (
    <div className={styles.contentContainer}>
      <h3>Research & Architecture</h3>
      <p>We designed a secure messenger...</p>
      
      <h4>Published Papers</h4>
      <ul>
        <li><a href="#">Security protocol design (PDF)</a></li>
        <li><a href="#">Architecture overview (IEEE)</a></li>
      </ul>
    </div>
  );
}