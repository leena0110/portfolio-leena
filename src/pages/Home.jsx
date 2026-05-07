import React from 'react';

const Home = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hello, my name is</div>
            <h1 className="hero-name">Leena</h1>
            <div className="hero-role-container">
              <div className="fade-role">
                <span>Front-End Developer</span>
                <span>Full-Stack Builder</span>
                <span>Cloud & AI Explorer</span>
              </div>
            </div>
            <p className="hero-description">
              Creating intuitive UI experiences and designing efficient, scalable full-stack systems.
              Experienced with modern web technologies and foundational AWS cloud services.
              Currently pursuing a B.Tech in Computer Science and Engineering.
            </p>
          </div>
          
          <div className="hero-image">
            <div className="profile-container">
              <div className="profile-image">
                <img src="/assets/profile-placeholder.png" alt="Leena Sri K" loading="lazy" />
              </div>
              <div className="profile-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
