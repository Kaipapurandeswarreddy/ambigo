import React, { useState } from 'react';

const EmergencyStaffForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    qualifications: '',
    bot_field: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const webhookUrl = "https://script.google.com/macros/s/AKfycbyb194qKx2gG22xQ9s61z4l_yq0Z8p8J8L-T7A4lA6qF-q2mNnU2E7A4A/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const timestamp = new Date().toLocaleString();
      const body = `Name=${encodeURIComponent(formData.fullName)}&Email=${encodeURIComponent(formData.email)}&Phone=${encodeURIComponent(formData.phone)}&Experience=${encodeURIComponent(formData.experience)}&Certifications=${encodeURIComponent(formData.qualifications)}&bot_field=${encodeURIComponent(formData.bot_field)}&TimeStamp=${encodeURIComponent(timestamp)}`;
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
        mode: 'no-cors'
      });
      
      setSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', experience: '', qualifications: '', bot_field: '' });
      alert("Application Submitted Successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ marginTop: '80px' }}></div>
      <div className="app-container">
        <div className="form-wrapper">
          <div className="form-card">
            <h2 className="form-title">Emergency Staff Application</h2>
            
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p>Submitting Application...</p>
              </div>
            ) : success ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ color: 'green', marginBottom: '10px' }}>Success!</h3>
                <p>Your application has been received.</p>
                <button onClick={() => setSuccess(false)} style={{ marginTop: '20px', color: '#ff7a2f', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Submit another</button>
              </div>
            ) : (
              <form className="form-container" onSubmit={handleSubmit}>
                <input type="text" name="bot_field" value={formData.bot_field} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <input className="form-input" type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name" />
                <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" />
                <input className="form-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" />
                <textarea className="form-input" name="experience" value={formData.experience} onChange={handleChange} required placeholder="Previous Experience" rows={3}></textarea>
                <input className="form-input" type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} required placeholder="Qualifications & Certifications" />
                
                <button className="form-submit" type="submit">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyStaffForm;
