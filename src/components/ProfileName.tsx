import styles from '../styles/Profile.module.css';

const ProfileName = () => {
  return (
    <a href='/'>
      <h1 className={`${styles.profileName} heading-two`}>myPortfolio</h1>
    </a>
  );
};

export default ProfileName;
