import { useState } from 'react';
import styles from '../styles/Profile.module.css';
import Arrows from './Arrows';
import ProfileName from './ProfileName';

import profileImg from '/img/profile.webp';

const ProfileImg = () => {
  const [name, setName] = useState(false);

  return (
    <div className={`${styles.profile} flex align-center`}>
      <img
        onClick={() => setName(!name)}
        width="60"
        height="60"
        src={profileImg}
        alt="Victor Seleimend"
      />
      {name ? <ProfileName /> : <Arrows />}
    </div>
  );
};

export default ProfileImg;
