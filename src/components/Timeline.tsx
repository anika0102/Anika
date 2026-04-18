import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        {/* Fancy section heading */}
        <h1 className="section-heading">Experience</h1>

        <VerticalTimeline>


          {/* ----- EXPERIENCE 1 ----- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2026 - Los Angeles, USA"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Machine Learning Engineer Intern at iMogul.AI 
             
            </h3>

            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
            
              <li>Building an intelligent screenplay retrieval engine that eliminates manual tagging and understands semantic meaning.</li> 
                <li>The system ingests 15K–25K word scripts, chunks them intelligently, and ranks results using a hybrid approach (semantic + emotional alignment).</li>
              
          </VerticalTimelineElement>


          {/* ----- EXPERIENCE 2 ----- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - Los Angeles, USA"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Database Research Assistant <br />
              <small>(in collaboration with eBay)</small> <br />
            </h3>

            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}

           <li>Optimized large-scale graph queries across 2M+ edges in a distributed system</li>
           <li>Designed an airport network model, benchmarked storage backends like In-Memory, BerkeleyDB, FoundationDB, and improved query traversal efficiency by 25%.</li>
          </VerticalTimelineElement>

          {/* ----- EXPERIENCE 3 ----- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 to 2024 - Hyderabad, India"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Consultant, HighRadius</h3>

            {/* <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4> */}

          <li>Owned the complete lifecycle of a critical financial workflow from requirements gathering to production. </li>
          <li>Engineered business rules in Python and MySQL that automated invoice creation on a SaaS platform, cutting manual work by 95%</li>
          <li> Deployed and maintained backend services on AWS using EC2, RDS, S3 while coordinating cross-functional teams globally.</li>
          </VerticalTimelineElement>

          {/* -------------------------------------------------- */}
          {/* Your older internship blocks remain commented OUT */}
          {/* -------------------------------------------------- */}

          {/*
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          */}

          {/*
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">T</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement>
          */}

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
