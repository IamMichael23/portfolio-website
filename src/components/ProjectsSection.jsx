import AnimatedSectionTitle from './AnimatedSectionTitle';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 0,
      title: 'Comparative RAG System: GraphRAG vs LightRAG',
      tech: 'GraphRAG · LightRAG · Neo4j · AWS',
      date: 'Feb 2026',
      description: 'A head-to-head evaluation of two graph-based RAG architectures across legal and medical datasets on AWS, finding LightRAG delivers 3–5× faster indexing and 50–70% lower cost at comparable answer quality.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6"/>
        </svg>
      )
    },
    {
      id: 1,
      title: 'CRM Integration Platform',
      tech: 'Python',
      date: 'Nov 2025',
      description: 'An automated pipeline that syncs 10,000+ contacts between two CRM systems, eliminating 25+ hours of manual data entry weekly and cutting operational costs by 75%.',
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
      description: 'A production-grade AI system where multiple specialized agents collaborate to answer complex questions, achieving a faithfulness score of 0.95 and boosting answer correctness from 0.60 to 0.95.',
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
      description: 'A regression model that predicts student grades from 12 demographic and behavioral factors, reaching 95–97% accuracy with an R² of 0.92.',
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
      description: 'A neural network that composes original piano melodies, built with a team of four and rated 6.78/10 by over 50 independent evaluators.',
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
      description: 'An ensemble model combining a deep neural network with Item Response Theory to predict student outcomes, improving accuracy from 68% to 88% on a 500+ student dataset.',
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
