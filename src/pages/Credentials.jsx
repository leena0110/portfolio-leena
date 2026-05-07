import React from 'react';
import { Link } from 'react-router-dom';

const Credentials = () => {
  return (
    <>
        <section className="subpage-hero">
            <div className="container">
                <h1>Credentials & Certifications</h1>
                <p className="subtitle">Professional achievements, certifications, and training programs that validate my expertise and continuous learning journey</p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="certificates-grid">
                    <div className="certificate-card">
                        <div className="cert-icon">
                            <i className="fab fa-aws"></i>
                        </div>
                        <div className="cert-content">
                            <h3>AWS Certified Solutions Architect – Training Program</h3>
                            <div className="cert-meta">
                                <span className="cert-issuer">Aptron</span>
                                <span className="cert-date">2025</span>
                            </div>
                            <p className="cert-description">
                                Comprehensive training program covering AWS cloud infrastructure, architecture design, and best practices for scalable solutions. Mastered core AWS services, security concepts, and cost optimization strategies to design robust cloud architectures.
                            </p>
                        </div>
                        <div className="cert-footer">
                            <a href="/assets/certificates/aws-cert.pdf" target="_blank" rel="noopener noreferrer" className="btn-cert btn-cert-primary">
                                <i className="fas fa-external-link-alt"></i> View Certificate
                            </a>
                        </div>
                    </div>
                    
                    <div className="certificate-card">
                        <div className="cert-icon">
                            <i className="fas fa-brain"></i>
                        </div>
                        <div className="cert-content">
                            <h3>Elevate – Data & AI Excellence Program</h3>
                            <div className="cert-meta">
                                <span className="cert-issuer">Jozuna Skillful Academy</span>
                                <span className="cert-date">2025</span>
                            </div>
                            <p className="cert-description">
                                Advanced program focusing on data science, machine learning, and AI implementation with hands-on projects and industry case studies. Covered data preprocessing, model training, neural networks, and real-world AI applications with Python.
                            </p>
                        </div>
                        <div className="cert-footer">
                            <a href="/assets/certificates/elevate-cert.pdf" target="_blank" rel="noopener noreferrer" className="btn-cert btn-cert-primary">
                                <i className="fas fa-external-link-alt"></i> View Certificate
                            </a>
                        </div>
                    </div>
                </div>



                <div className="coming-soon">
                    <h3>More Achievements in Progress</h3>
                    <p>I'm continuously expanding my knowledge and skills through ongoing learning. Currently preparing for additional certifications in cloud computing and data engineering to further enhance my technical expertise.</p>
                    <Link to="/profile" className="btn-cert btn-cert-primary">
                        <i className="fas fa-user-graduate"></i> View My Full Profile
                    </Link>
                </div>
            </div>
        </section>
    </>
  );
};

export default Credentials;
