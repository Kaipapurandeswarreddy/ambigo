import React, { useState } from 'react';

// Using the webhook URL provided by the maintainer
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwszu9sfrV95IMDkWvpj-4g9FraWzbrkwhPUzUI2QJxEj02oy-M212pepIweuhUws7e/exec";

const QuickQueryForm: React.FC<{ formClassName?: string, inputClassName?: string, buttonClassName?: string }> = ({ 
  formClassName = "hoscontact-form",
  inputClassName = "hosform-input",
  buttonClassName = "hossubmit-button"
}) => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Organization: '',
    Message: '',
    bot_field: '' // Honeypot for spam protection
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const timestamp = new Date().toLocaleString();
      const body = `Name=${encodeURIComponent(formData.Name)}&Email=${encodeURIComponent(formData.Email)}&Organization=${encodeURIComponent(formData.Organization)}&Message=${encodeURIComponent(formData.Message)}&bot_field=${encodeURIComponent(formData.bot_field)}&TimeStamp=${encodeURIComponent(timestamp)}`;
      
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
        mode: 'no-cors'
      });
      
      setStatus('success');
      setFormData({ Name: '', Email: '', Organization: '', Message: '', bot_field: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <h3 style={{ color: 'green', marginBottom: '10px' }}>Success!</h3>
        <p>Your query has been submitted successfully. We will get back to you soon.</p>
        <button onClick={() => setStatus('idle')} style={{ marginTop: '20px', color: '#ff7a2f', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Submit another query</button>
      </div>
    );
  }

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      {/* Honeypot field - Hidden from users, traps spam bots */}
      <input type="text" name="bot_field" value={formData.bot_field} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      
      <div className="enterform-group" style={{ marginBottom: formClassName === 'hoscontact-form' ? '0' : '15px' }}>
        <input type="text" name="Organization" placeholder="Organization Name" required className={inputClassName} value={formData.Organization} onChange={handleChange} />
      </div>
      <div className="enterform-group" style={{ marginBottom: formClassName === 'hoscontact-form' ? '0' : '15px' }}>
        <input type="email" name="Email" placeholder="Company Email" required className={inputClassName} value={formData.Email} onChange={handleChange} />
      </div>
      <div className="enterform-group" style={{ marginBottom: formClassName === 'hoscontact-form' ? '0' : '15px' }}>
        <input type="text" name="Name" placeholder="Contact Name / Number" required className={inputClassName} value={formData.Name} onChange={handleChange} />
      </div>
      <div className="enterform-group" style={{ marginBottom: formClassName === 'hoscontact-form' ? '0' : '15px' }}>
        <textarea name="Message" placeholder="Message" required className={`${inputClassName} message-input`} value={formData.Message} onChange={handleChange}></textarea>
      </div>
      
      <button type="submit" className={buttonClassName} disabled={status === 'loading'}>
        {status === 'loading' ? 'SUBMITTING...' : 'SUBMIT YOUR QUERY'}
      </button>
      
      {status === 'error' && <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>Failed to submit. Please try again.</p>}
    </form>
  );
};

export default QuickQueryForm;
