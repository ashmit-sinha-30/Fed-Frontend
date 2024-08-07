import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { TbUserEdit } from 'react-icons/tb';
import { SlCalender } from 'react-icons/sl';
import { SiReacthookform } from 'react-icons/si';
import AuthContext from '../../../context/AuthContext';
import styles from './styles/Sidebar.module.scss';

import defaultImg from '../../../assets/images/defaultImg.jpg';
import camera from "../../../assets/images/camera.svg"

const Sidebar = ({ activepage, handleChange }) => {
  const [designation, setDesignation] = useState("");
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModal,setOpen]=useState(false);

  useEffect(() => {
    const access = authCtx.user.access;
    if (access === "ADMIN") {
      setDesignation("Admin");
    } else if (access === "ALUMNI") {
      setDesignation("Alumni");
    } else if (access === "USER") {
      setDesignation("User");
    } else {
      setDesignation("Member");
    }
  }, [authCtx.user.access]);

  const handleLogout = () => {
    navigate('/Login');
    authCtx.logout(); 
  };

  const handleName = () => {
    const maxLength = 15;
    const name = authCtx.user.name || ''; 
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
  };

  const renderAdminMenu = () => (
    <>
     <div
  onClick={() => handleChange('Event')}
  style={{
    background: activepage === 'Event' ? 'var(--primary)' : 'transparent',
    WebkitBackgroundClip: activepage === 'Event' ? 'text' : 'initial',
    backgroundClip: activepage === 'Event' ? 'text' : 'initial',
    color: activepage === 'Event' ? 'transparent' : 'inherit'
  }}
>
<SlCalender 
      size={17} 
      style={{ 
        color: activepage === 'Event' ? '#FF8A00' : 'white' 
      }} 
    /> Event
</div>

      <div
        onClick={() => handleChange('Form')}
        style={{ background: activepage === 'Form' ? 'var(--primary)' : 'transparent',
          WebkitBackgroundClip: activepage === 'Form' ? 'text' : 'initial',
          backgroundClip: activepage === 'Form' ? 'text' : 'initial',
          color: activepage === 'Form' ? 'transparent' : 'inherit' }}
      >
        <SiReacthookform
        size={17} 
        style={{ 
        color: activepage === 'Form' ? '#FF8A00' : 'white' 
      }}  /> Form
      </div>
      <div
        onClick={() => handleChange('Members')}
        style={{ background: activepage === 'Members' ? 'var(--primary)' : 'transparent',
          WebkitBackgroundClip: activepage === 'Members' ? 'text' : 'initial',
          backgroundClip: activepage === 'Members' ? 'text' : 'initial',
          color: activepage === 'Members' ? 'transparent' : 'inherit' }}
      >
        <TbUserEdit 
        size={17} 
        style={{ 
        color: activepage === 'Members' ? '#FF8A00' : 'white' 
      }} /> Members
      </div>
    </>
  );

  return (
    <>
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <a href='/profile'>
        <div style={{width:"auto",position:"relative"}}>
          <img
            src={authCtx.user.pic || defaultImg}
            alt="Profile"
            className={styles.profilePhoto}
          />
          <div style={{position:"absolute" ,bottom:"5px",right:"5px",}}><img onClick={handleChange}  src={camera}></img></div>
          </div>
        </a>
        <div className={styles.profileInfo}>
          <p className={styles.name}>{handleName()}</p>
          <p className={styles.role}>{designation}</p>
        </div>
      </div>
      <div className={styles.menu}>
        {designation === "Admin" && renderAdminMenu()}
        {designation !== "Admin" && (
          <div
            onClick={() => handleChange('Event')}
            style={{ color: activepage === 'Event' ? '#FF8A00' : 'white' }}
          >
            <SlCalender size={17} /> Event
          </div>
        )}
        <div
          onClick={handleLogout}
          style={{ color: activepage === 'Logout' ? '#FF8A00' : 'white' }}
        >
          <MdLogout size={17} /> Logout
        </div>
      </div>
      <div className={styles.divider} />
    </div>
    </>
  );
};

export default Sidebar;
