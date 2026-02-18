import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import Typography from '@mui/material/Typography';
import './RoadMapTimeline.css';

export default function RoadMapTimeline() {
  return (
    <Timeline position="alternate" className="roadmap-timeline">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          className="timeline-date-text"
        >
          2020 – 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="timeline-connector" />
          <TimelineDot className="timeline-dot">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className="timeline-connector" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            Honours BSc in Mathematics & Computer Science
          </Typography>
          <Typography className="timeline-description">
            University of Toronto – Built foundation in ML, deep learning, computer vision, and data analysis.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          className="timeline-date-text"
        >
          2022 – 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="timeline-connector" />
          <TimelineDot className="timeline-dot timeline-dot-primary">
            <StorefrontIcon />
          </TimelineDot>
          <TimelineConnector className="timeline-connector" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            AI Developer — Dumpling Collectables
          </Typography>
          <Typography className="timeline-description">
            Built a computer vision grading system (90% accuracy, 98% faster) and an n8n automation pipeline for market tracking, driving a 200% ROI increase through data-driven inventory decisions.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          className="timeline-date-text"
        >
          Feb – Jul 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="timeline-connector" />
          <TimelineDot className="timeline-dot timeline-dot-secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector className="timeline-connector" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            AI Data Analyst — Golf Town
          </Typography>
          <Typography className="timeline-description">
            Deployed a RAG chatbot with LangChain and a vector database, cutting product discovery time by 98% and tripling service capacity for in-store consultations.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          className="timeline-date-text"
        >
          2025 – 2026
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="timeline-connector" />
          <TimelineDot className="timeline-dot timeline-dot-accent">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className="timeline-connector" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            Master of Data Analytics (AI) — Western University
          </Typography>
          <Typography className="timeline-description">
            Specializing in AI with a 4.0 GPA, covering reinforcement learning, deep learning, computer vision, and NLP. Expected graduation August 2026.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          className="timeline-date-text"
        >
          Sep 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="timeline-connector" />
          <TimelineDot className="timeline-dot timeline-dot-primary">
            <VerifiedIcon />
          </TimelineDot>
          <TimelineConnector className="timeline-connector" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            Microsoft Certified: Azure Fundamentals (AZ-900)
          </Typography>
          <Typography className="timeline-description">
            Certified in core Azure cloud concepts, services, security, and pricing fundamentals.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          className="timeline-date-text"
        >
          2026 and Beyond
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="timeline-connector" />
          <TimelineDot className="timeline-dot timeline-dot-future">
            <EmojiEventsIcon />
          </TimelineDot>
          <TimelineConnector className="timeline-connector-fade" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            Future Vision
          </Typography>
          <Typography className="timeline-description">
            Join innovative teams building cutting-edge AI and data-driven solutions. Apply experience to solve meaningful, high-impact problems while continuing to learn and contribute to projects that bridge theory with real-world practice.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
