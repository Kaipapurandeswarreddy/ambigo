import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    name: "Karamthoti Sai Kumar Naik",
    role: "Founder & CEO",
    bio: "A self-made enterpreneur who grew from small local ventures to building Ambigo, diven by a mission to transform healthcare access.",
    image: "/Sai.jpg",
    categories: ["Founder", "Leadership"],
    linkedin: "https://www.linkedin.com/in/karamthotisaikumarnaik",
    twitter: "#",
    email: "#"
  },
  {
    name: "Y V Vivek",
    role: "Senior Software Engineer at Capgemini",
    bio: "Leads App Development & Enhancements for Ambigo with 2+ Years of Excellence",
    image: "/Vivek.png",
    categories: ["Development"],
    linkedin: "https://www.linkedin.com/in/y-v-vivek-30181621a",
    twitter: "#",
    email: "#"
  },
  {
    name: "G Avineshwar",
    role: "Software Enginner at Hashedin By Deloitte",
    bio: "Designs, deploy & Maintains company Websites with 1 Year of Excellence",
    image: "/avinesh.JPG",
    categories: ["Development"],
    linkedin: "https://www.linkedin.com/in/avineshwarg",
    twitter: "#",
    email: "#"
  },
  {
    name: "Vara Prasad Reddy",
    role: "Advisor",
    bio: "Senior Software Developer, TCS | 6+ years Experince| Based in sweden",
    image: "/Prasad.jpg",
    categories: ["Advisory", "Development"],
    linkedin: "#",
    twitter: "#",
    email: "#"
  },
  {
    name: "Dr.C.Chandra Mouli",
    role: "Advisor",
    bio: "16+ Years of Professional Experience in Research, Innovation & Product Development Deeptech",
    image: "/chandramouli.jpg",
    categories: ["Advisory", "Leadership"],
    linkedin: "#",
    twitter: "#",
    email: "#"
  },
  {
    name: "Dr.M.Himaja Reddy, BDS",
    role: "Advisor",
    bio: "CEO & Managing Director, Mahadeva Dental Care | Skilled Dental Practioner with 2+ years of Clinical Expertise",
    image: "himaja.JPG",
    categories: ["Advisory", "Leadership"],
    linkedin: "#",
    twitter: "#",
    email: "#"
  }
];

const categories = [
  "All", 
  "Leadership", 
  "Development", 
  "Finance", 
  "Advisory", 
  "Design", 
  "Marketing", 
  "Founder"
];

const Ourteam = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filteredTeam = activeFilter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.categories.includes(activeFilter));

  return (
    <>
      <div style={{ marginTop: '80px' }}></div>
      <div className="team-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Our Team</h1>
            <p>Meet the talented individuals driving our mission forward</p>
          </div>
        </div>
        
        <div className="team-container">
          <div className="filter-buttons flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={activeFilter === cat ? "active" : ""}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {filteredTeam.length > 0 ? (
            <div className="team-grid">
              {filteredTeam.map((member, idx) => (
                <div className="team-card" key={idx}>
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={member.image} alt={member.name} />
                      <h3>{member.name}</h3>
                      <p className="role">{member.role}</p>
                      <p className="bio">{member.bio}</p>
                    </div>
                    <div className="card-back">
                      <h3>{member.name}</h3>
                      <p className="role">{member.role}</p>
                      <p className="bio">{member.bio}</p>
                      <div className="social-links">
                        <a href={member.linkedin} aria-label="LinkedIn">
                          <i className="social-icon">in</i>
                        </a>
                        <a href={member.twitter} aria-label="Twitter">
                          <i className="social-icon">X</i>
                        </a>
                        <a href={member.email} aria-label="Email">
                          <i className="social-icon">@</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500 font-medium">
              No team members found in the "{activeFilter}" category.
            </div>
          )}
        </div>
        
        <div className="join-team-section">
          <h2>Join Our Team</h2>
          <p>We're always looking for talented individuals to join our mission</p>
          <button className="cta-button" onClick={() => navigate('/careers')}>View Open Positions</button>
        </div>
      </div>
    </>
  );
};

export default Ourteam;
