import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface GetNotifiedModalProps {
  serviceName: string | null;
  onClose: () => void;
}

const GetNotifiedModal: React.FC<GetNotifiedModalProps> = ({ serviceName, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bot_field: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const webhookUrl = "https://script.google.com/macros/s/AKfycbxrLa-oQNhMjmu0tdlb6Ud0y04EH-ddVjk2gfi9cWhKHHuqPIUSBR7W0Xef8pz3YTLgFQ/exec";

  React.useEffect(() => {
    if (!serviceName) {
      setSuccess(false);
      setFormData({ fullName: '', email: '', phone: '', bot_field: '' });
    }
  }, [serviceName]);

  if (!serviceName) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const timestamp = new Date().toLocaleString();
      const body = `Name=${encodeURIComponent(formData.fullName)}&Email=${encodeURIComponent(formData.email)}&Phone=${encodeURIComponent(formData.phone)}&Type=${encodeURIComponent("Get Notified: " + serviceName)}&bot_field=${encodeURIComponent(formData.bot_field)}&TimeStamp=${encodeURIComponent(timestamp)}`;
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
        mode: 'no-cors'
      });
      
      setSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', bot_field: '' });
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <div className="bg-white rounded-[2rem] w-full max-w-md p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Get Notified</h2>
        <p className="text-slate-500 mb-6 font-medium">
          Leave your details and we'll notify you as soon as <strong>{serviceName}</strong> launches.
        </p>

        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
            <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            <p className="text-slate-600 font-medium">Submitting...</p>
          </div>
        ) : success ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
            <p className="text-slate-600 mb-6">We'll notify you as soon as possible.</p>
            <button 
              onClick={onClose}
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="bot_field" value={formData.bot_field} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
            
            <div>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                required 
                placeholder="Full Name" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="Email Address" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
              />
            </div>
            <div>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="Phone Number" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors mt-4"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? ReactDOM.createPortal(modalContent, document.body) : modalContent;
};

export default GetNotifiedModal;
