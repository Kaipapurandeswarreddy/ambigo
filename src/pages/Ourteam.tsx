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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
          {/* Desktop Filter Buttons */}
          <div className="filter-buttons hidden md:flex flex-wrap justify-center gap-3">
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

          {/* Mobile Filter Dropdown */}
          <div className="md:hidden relative flex justify-center mb-8 px-4 w-full z-20">
            <div className="w-full max-w-xs relative">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-5 py-3 rounded-full bg-white border border-orange-200 text-orange-500 font-bold shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex justify-between items-center transition-all focus:outline-none cursor-pointer"
              >
                <span>{activeFilter}</span>
                <svg
                  className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              
              {isDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden overflow-y-auto max-h-[250px] z-50">
                  <div className="py-2">
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          setActiveFilter(cat);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 font-bold text-[14px] transition-colors cursor-pointer ${
                          activeFilter === cat 
                            ? 'bg-orange-50 text-orange-600' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-orange-500'
                        }`}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
