import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "ArchMind: Codebase Intelligence",
      category: "fullstack",
      description: "VS Code extension that visualizes architecture as interactive dependency graphs. Built with a microservices backend for automated code parsing, impact analysis, and PageRank importance scoring.",
      tech: ["TypeScript", "React", "Go", "Rust", "Python", "Neo4j"],
      badge: "Featured",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&h=400&fit=crop&auto=format",
      github: "https://github.com/leena0110",
      icon: "fa-project-diagram"
    },
    {
      id: 2,
      title: "Unified Retail Management Suite",
      category: "fullstack",
      description: "Professional business solution to automate high-volume retail operations. Features GST-compliant billing, intelligent inventory control, WhatsApp receipt distribution, and cloud-based financial tracking.",
      tech: ["React.js", "Tailwind CSS", "FastAPI", "MongoDB Atlas", "PWA"],
      badge: "Enterprise Solution",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop&auto=format",
      github: "https://github.com/leena0110/Unified-Billing-Portal",
      icon: "fa-file-invoice-dollar"
    },
    {
      id: 3,
      title: "Dynamic Cache System",
      category: "datastructures",
      description: "A menu-driven Python application implementing LRU and LFU cache eviction policies using Doubly Linked Lists and HashMaps. Features O(1) operations and real-time performance metrics.",
      tech: ["Python", "Data Structures", "Algorithms", "OOP"],
      badge: "Performance Optimized",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
      github: "https://github.com/leena0110/dynamic-cache-system",
      icon: "fa-bolt"
    },
    {
      id: 4,
      title: "NLP Proofreading Pipeline",
      category: "ai",
      description: "A two-phase NLP pipeline implementing text correction with synthetic noise generation and transformer models (FLAN-T5). Features comprehensive evaluation metrics.",
      tech: ["Python", "NLP", "Transformers", "Machine Learning"],
      badge: "AI Powered",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&auto=format",
      github: "https://github.com/leena0110/proofread_eval_pipeline",
      icon: "fa-spell-check"
    },
    {
      id: 5,
      title: "Edge Computing Load Balancer",
      category: "edge",
      description: "YAFS-based digital twin simulation of Optimised Load Balancing (OLB) algorithm for healthcare networks. Implements latency analysis across fog nodes.",
      tech: ["Python", "YAFS", "Edge Computing", "Simulation"],
      badge: "YAFS Simulation",
      image: "/assets/812.jpg",
      github: "https://github.com/leena0110/edge-computing-load-balancer",
      icon: "fa-microchip"
    },
    {
      id: 6,
      title: "Proximity Access Alarm System",
      category: "embedded",
      description: "STM32F4-based security system detecting unauthorized approach using ultrasonic sensors. Features multi-stage alerting and real-time distance monitoring.",
      tech: ["Embedded C", "STM32"],
      badge: "Embedded System",
      image: "/assets/proximity-alarm.jpeg",
      github: "https://github.com/leena0110/proximity-access-alarm",
      icon: "fa-shield-alt"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
        <section className="subpage-hero">
            <div className="container">
                <h1>My Projects</h1>
                <p className="subtitle">A curated selection of engineering projects showcasing experience in full-stack development, cloud fundamentals, and business automation.</p>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="filter-tabs">
                    {[
                      { id: 'all', label: 'All Projects', icon: 'fa-layer-group' },
                      { id: 'fullstack', label: 'Full-Stack & Web', icon: 'fa-globe' },
                      { id: 'datastructures', label: 'Data Structures', icon: 'fa-code' },
                      { id: 'ai', label: 'AI/ML', icon: 'fa-robot' },
                      { id: 'edge', label: 'Edge Computing', icon: 'fa-network-wired' },
                      { id: 'embedded', label: 'Embedded Systems', icon: 'fa-microchip' }
                    ].map(tab => (
                      <div 
                        key={tab.id}
                        className={`filter-tab ${activeFilter === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(tab.id)}
                      >
                        <i className={`fas ${tab.icon}`}></i>
                        <span>{tab.label}</span>
                      </div>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                      <div key={project.id} className="project-card">
                          <div className="project-image">
                              <img src={project.image} alt={project.title} loading="lazy" />
                              <div className="project-badge">{project.badge}</div>
                          </div>
                          <div className="project-content">
                              <h3 className="project-title">
                                  <i className={`fas ${project.icon}`}></i>
                                  <span>{project.title}</span>
                              </h3>
                              <p className="project-description">{project.description}</p>
                              <div className="project-tech">
                                  {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                              </div>
                              <div className="project-footer">
                                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                      <i className="fab fa-github"></i> View Source
                                  </a>
                              </div>
                          </div>
                      </div>
                    ))}
                </div>

                <div className="view-more">
                    <h3>More Projects Coming Soon!</h3>
                    <p>I'm constantly working on new projects and expanding my skills. Stay tuned for more exciting work in cloud computing, full-stack development, and AI applications.</p>
                    <Link to="/profile" className="btn btn-outline">
                        <i className="fas fa-user-check"></i> View My Profile
                    </Link>
                </div>
            </div>
        </section>
    </>
  );
};

export default Work;
