import React from 'react';

const Profile = () => {
  return (
    <>
        <section className="subpage-hero">
            <div className="container">
                <h1>My Profile</h1>
                <p className="subtitle">Education, Skills & Career Journey</p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="bio-section">
                    <div className="bio-card">
                        <h3><i className="fas fa-user-graduate"></i> About Me</h3>
                        <div className="bio-text">
                            <p>I am a B.Tech Computer Science and Engineering student at Amrita Vishwa Vidyapeetham with a strong interest in front-end development, full-stack engineering, and cloud technologies.</p>
                            <p>I enjoy building clean, user-focused solutions and exploring modern tools that help me grow both technically and creatively.</p>
                        </div>
                    </div>
                    
                    <div className="bio-card">
                        <h3><i className="fas fa-bullseye"></i> Career Objective</h3>
                        <div className="bio-text">
                            <p>To continuously learn, innovate, and grow into a versatile engineer capable of delivering impactful, high-quality solutions.</p>
                            <p>I aim to contribute meaningfully to real-world projects while strengthening my expertise in web development and cloud computing.</p>
                        </div>
                    </div>
                </div>

                <div className="section-header">
                    <h2>Education</h2>
                </div>

                <div className="education-grid">
                    <div className="edu-card featured">
                        <div className="edu-header">
                            <div className="edu-icon featured-icon">
                                <i className="fas fa-university"></i>
                            </div>
                            <div className="edu-content">
                                <h3>B.Tech Computer Science & Engineering</h3>
                                <p className="edu-meta">Amrita Vishwa Vidyapeetham</p>
                                <span className="edu-duration">2023 – 2027 | CGPA: 7.97</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-header">
                    <h2>Technical Skills</h2>
                </div>
                
                <div className="skills-container">
                    <div className="skill-category-card">
                        <div className="skill-category-header">
                            <i className="fas fa-code"></i>
                            <h3>Programming Languages</h3>
                        </div>
                        <div className="skill-items-grid">
                            <div className="skill-item">
                                <i className="fab fa-cuttlefish"></i>
                                <span>C/C++</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-java"></i>
                                <span>Java</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-python"></i>
                                <span>Python</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-js"></i>
                                <span>JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-html5"></i>
                                <span>HTML5</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-css3-alt"></i>
                                <span>CSS3</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <span>SQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <div className="skill-category-header">
                            <i className="fas fa-cubes"></i>
                            <h3>Frameworks & Libraries</h3>
                        </div>
                        <div className="skill-items-grid">
                            <div className="skill-item">
                                <i className="fas fa-window-maximize"></i>
                                <span>Tkinter</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-calculator"></i>
                                <span>NumPy</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-table"></i>
                                <span>Pandas</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-chart-line"></i>
                                <span>Matplotlib</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <div className="skill-category-header">
                            <i className="fas fa-database"></i>
                            <h3>Databases</h3>
                        </div>
                        <div className="skill-items-grid">
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <span>MySQL</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <span>PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <div className="skill-category-header">
                            <i className="fas fa-tools"></i>
                            <h3>Tools & Technologies</h3>
                        </div>
                        <div className="skill-items-grid">
                            <div className="skill-item">
                                <i className="fab fa-git-alt"></i>
                                <span>Git</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-linux"></i>
                                <span>Linux CLI</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-code"></i>
                                <span>VS Code</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-book"></i>
                                <span>Jupyter</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-aws"></i>
                                <span>AWS Fundamentals</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-header">
                    <h2>Soft Skills</h2>
                </div>
                
                <div className="soft-skills-container">
                    <div className="soft-skills-grid">
                        <div className="soft-skill-item">Problem-solving</div>
                        <div className="soft-skill-item">Time Management</div>
                        <div className="soft-skill-item">Critical Thinking</div>
                        <div className="soft-skill-item">Initiative</div>
                        <div className="soft-skill-item">Creativity</div>
                        <div className="soft-skill-item">Adaptability</div>
                        <div className="soft-skill-item">Collaboration</div>
                        <div className="soft-skill-item">Communication</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Profile;
