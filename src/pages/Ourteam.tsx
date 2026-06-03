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
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-10 md:py-16 px-4 md:px-8 text-center rounded-[2rem] mb-4 md:mb-12 border border-orange-100/50 shadow-[0_8px_30px_rgba(249,115,22,0.08)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply blur-3xl"></div>
             <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3 md:mb-4 tracking-tight">
              Our <span className="text-orange-500">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Meet the talented individuals driving our mission forward
            </p>
          </div>
        </div>
        
        <div className="team-container">
          {/* Desktop Filter Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <div 
                key={cat}
                role="button"
                tabIndex={0}
                onClick={() => setActiveFilter(cat)}
                onKeyDown={(e) => { if(e.key==='Enter') setActiveFilter(cat); }}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm border cursor-pointer select-none flex items-center justify-center ${
                  activeFilter === cat 
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent shadow-[0_4px_12px_rgba(249,115,22,0.3)] transform -translate-y-0.5" 
                    : "bg-white text-slate-600 border-slate-200 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 hover:-translate-y-0.5"
                }`}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Mobile Filter Dropdown */}
          {/* Mobile Filter Dropdown */}
          <div className="hidden max-md:flex justify-center -mt-2 mb-6 px-4 w-full z-20">
            <div className="w-full max-w-[220px] !flex !flex-col gap-2 mx-auto">
              {/* Trigger */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full px-5 py-2.5 rounded-[1.25rem] border transition-all duration-300 focus:outline-none cursor-pointer shadow-sm active:scale-[0.98] !flex !flex-row !items-center !justify-between ${
                  isDropdownOpen 
                    ? "bg-white border-orange-300 shadow-[0_4px_15px_rgba(249,115,22,0.1)] text-orange-600" 
                    : "bg-white border-slate-200 text-slate-700 hover:border-orange-200 hover:bg-orange-50/40"
                }`}
              >
                <div className="!flex !flex-row !items-center gap-2 font-semibold text-[13px] tracking-wide">
                  <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span>{activeFilter}</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 shrink-0 ${isDropdownOpen ? 'rotate-180 text-orange-500' : 'text-slate-400'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              
              {isDropdownOpen && (
                <div className="relative w-full bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden animate-dropdown">
                  <style>{`
                    .animate-dropdown {
                      animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                      transform-origin: top;
                    }
                    @keyframes slideDown {
                      from { opacity: 0; transform: scaleY(0.9) translateY(-4px); max-height: 0; }
                      to { opacity: 1; transform: scaleY(1) translateY(0); max-height: 250px; }
                    }
                    .custom-scrollbar {
                      scrollbar-width: thin;
                      scrollbar-color: #fdba74 transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background-color: #fdba74;
                      border-radius: 10px;
                    }
                  `}</style>
                  <div className="py-1.5 px-1.5 overflow-y-auto custom-scrollbar" style={{ maxHeight: '200px' }}>
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          setActiveFilter(cat);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 my-0.5 font-medium text-[13px] rounded-xl transition-all cursor-pointer active:scale-[0.98] !flex !flex-row !items-center !justify-between ${
                          activeFilter === cat 
                            ? 'bg-orange-50 text-orange-600' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span className="truncate pr-2 text-left">{cat}</span>
                        {activeFilter === cat && (
                          <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
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
