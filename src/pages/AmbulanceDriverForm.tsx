import React, { useState } from 'react';

const AmbulanceDriverForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    license: '',
    experience: '',
    bot_field: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const webhookUrl = "https://script.google.com/macros/s/AKfycbwvtXKBFfitj4bJ7jkyRYX4uMzUPPfq3UJtZM3TDnPETlj11g3aZwkQvm6mTyAaSQ/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.license.trim() || !formData.experience.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    
    try {
      setLoading(true);
      const timestamp = new Date().toLocaleString();
      const body = `Name=${encodeURIComponent(formData.name)}&MobileNumber=${encodeURIComponent(formData.mobile)}&License=${encodeURIComponent(formData.license)}&Experience=${encodeURIComponent(formData.experience)}&bot_field=${encodeURIComponent(formData.bot_field)}&TimeStamp=${encodeURIComponent(timestamp)}`;
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
        mode: 'no-cors' // To avoid CORS errors when posting to Google Scripts from browser
      });
      
      setSuccess(true);
      setFormData({ name: '', mobile: '', license: '', experience: '', bot_field: '' });
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
            <h2 className="form-title">Ambulance Driver Application</h2>
            
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
                <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
                <input className="form-input" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Mobile Number" />
                <input className="form-input" type="text" name="license" value={formData.license} onChange={handleChange} required placeholder="Driver's License No." />
                <input className="form-input" type="text" name="experience" value={formData.experience} onChange={handleChange} required placeholder="Experience (Years)" />
                
                <button className="form-submit" type="submit">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AmbulanceDriverForm;
