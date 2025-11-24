import AnimatedSectionTitle from './AnimatedSectionTitle';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'CRM Integration Platform',
      tech: 'Python',
      date: 'Nov 2025',
      description: 'Production-grade REST API middleware synchronizing contacts between Fibery and HubSpot CRM platforms. Features intelligent Smart Merge algorithm for field-level comparison and selective updates, with automated ETL workflows handling data transformation, name parsing, field mapping, and validation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Hybrid Multi-Agent RAG Framework',
      tech: 'LangGraph + LlamaIndex',
      date: 'Sep 2025',
      description: 'Enterprise-ready multi-agent system combining LangGraph orchestration with LlamaIndex RAG capabilities. Optimized retrieval pipeline using dimensional embedding tuning, hybrid BM25+dense retrieval, and advanced prompt engineering. Includes stateful conversation system with contextual memory and hierarchical knowledge sharing across agents.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Student Performance Predictor',
      tech: 'R',
      date: 'Jun 2024',
      description: 'Statistical machine learning system built in R for predicting student academic performance. Implements multiple regression models, feature engineering pipelines, and cross-validation techniques. Uses statistical analysis to identify key performance indicators and educational risk factors while handling missing data and class imbalance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Piano Melody Generator',
      tech: 'PyTorch',
      date: 'Dec 2023',
      description: 'AI-powered music generation system using PyTorch. Led a 4-person development team to build a 2-layer LSTM architecture trained on MIDI files to create original piano melodies. Project included comprehensive user evaluation framework and collaborative development workflows.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Hybrid ML Predictive Model',
      tech: 'PyTorch',
      date: 'Aug 2023',
      description: 'Advanced predictive modeling framework combining traditional statistical methods with deep learning neural networks. Integrates classical machine learning techniques with modern deep learning architectures to leverage both interpretability and representation learning capabilities. Features ensemble methods and custom loss functions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <AnimatedSectionTitle text="Projects" animationType="bounce" />
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <div className="project-card-icon">{project.icon}</div>
                <div className="project-card-meta">
                  <span className="project-card-tech">{project.tech}</span>
                  <span className="project-card-date">{project.date}</span>
                </div>
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
