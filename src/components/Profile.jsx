import { useState } from 'react';
import styles from '../styles/Profile.module.css';
import Arrows from './Arrows';
import ProfileName from './ProfileName';

import profileImg from '/img/profile.webp';

const ProfileImg = () => {
  const [name, setName] = useState(false);
  const [clickMessage, setClickMessage] = useState(false);

  return (
    <div className={`${styles.profile} flex align-center`}>
      <div className={styles['img-container']}>
        {clickMessage && (
          <p
            onClick={() => setName(!name)}
            onMouseLeave={() => setClickMessage(false)}
            className={`${styles.message} flex align-center justify-center`}
          >
            Clique!
          </p>
        )}
        <img
          onMouseMove={() => setClickMessage(true)}
          width="60"
          height="60"
          src={profileImg}
          alt="Victor Seleimend"
        />
      </div>
      {name ? <ProfileName /> : <Arrows />}
    </div>
  );
};

export default ProfileImg;
