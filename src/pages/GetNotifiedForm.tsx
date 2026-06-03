import React, { useState } from 'react';

const GetNotifiedForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bot_field: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const webhookUrl = "https://script.google.com/macros/s/AKfycbxrLa-oQNhMjmu0tdlb6Ud0y04EH-ddVjk2gfi9cWhKHHuqPIUSBR7W0Xef8pz3YTLgFQ/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const timestamp = new Date().toLocaleString();
      const body = `Name=${encodeURIComponent(formData.fullName)}&Email=${encodeURIComponent(formData.email)}&Phone=${encodeURIComponent(formData.phone)}&Type=${encodeURIComponent("Get Notified")}&bot_field=${encodeURIComponent(formData.bot_field)}&TimeStamp=${encodeURIComponent(timestamp)}`;
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
        mode: 'no-cors'
      });
      
      setSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', bot_field: '' });
      alert("Submitted Successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again.");
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
            <h2 className="form-title">Get Notified</h2>
            <p style={{ textAlign: 'center', marginBottom: '20px', color: '#64748b' }}>
              Enter your details below and we will notify you when this service is available in your area.
            </p>
            
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p>Submitting...</p>
              </div>
            ) : success ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ color: 'green', marginBottom: '10px' }}>Success!</h3>
                <p>We'll notify you as soon as possible.</p>
                <button onClick={() => setSuccess(false)} style={{ marginTop: '20px', color: '#ff7a2f', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Submit another</button>
              </div>
            ) : (
              <form className="form-container" onSubmit={handleSubmit}>
                <input type="text" name="bot_field" value={formData.bot_field} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <input className="form-input" type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name" />
                <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" />
                <input className="form-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" />
                
                <button className="form-submit" type="submit">Submit Details</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetNotifiedForm;
