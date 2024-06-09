import React from 'react';
import styles from './Styles/TeamPage.module.scss'; // Adjust the path to your styles
import teamMembers from '../../data/teamMembers.json'; // Import the JSON data

const TeamMember = ({ name, image, social, title }) => {
  return (
    <div className={styles['team-member']}>
      <div className={styles['team-member-inner']}>
        <div className={styles['team-member-front']}>
          <img src={image} alt={name} className={styles['team-member-img']} />
          <div className={styles['team-member-info']}>
            <h3 style={{ color: '#FF5C00' }}>{name}</h3>
          </div>
        </div>
        <div className={styles['team-member-back']}>
          <h3 style={{ color: '#fff' }}>{title}</h3>
          <div className={styles['social-links']}>
            {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {social.twitter && <a href={social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
            {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  return (
    <div className={styles['team-section']}>
      <h3>{title}</h3>
      <div className={styles['team-grid']}>
        {members.map((member, idx) => (
          <TeamMember
            key={idx}
            name={member.name}
            image={member.image}
            social={member.social}
          />
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const roles = ['Director', 'Technical', 'Creative', 'Marketing', 'Operations', 'Sponsorship & PR'];
  const teamByRole = roles.map(role => ({
    role,
    members: teamMembers.filter(member => member.role === role)
  }));

  return (
    <div>
      <h2>Meet Our <span>Team</span></h2>
      <div className={styles['circle']}></div>
      
      {teamByRole.filter(section => section.role === 'Director').map((section, index) => (
        <TeamSection
          key={index}
          members={section.members}
        />
      ))}
      
      {teamByRole.filter(section => section.role !== 'Director').map((section, index) => (
        <TeamSection
          key={index}
          title={
            <span>
              <span style={{ color: '#fff' }}>Team </span>{section.role}
            </span>
          }
          members={section.members}
        />
      ))}
      <div className={styles['circle2']}></div>
    </div>
  );
};

export default Team;
