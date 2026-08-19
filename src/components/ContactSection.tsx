import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Sparkles,
  FileText,
  UserCheck,
  Building2,
  GraduationCap
} from 'lucide-react';
import { PortfolioData } from '../types';

interface ContactSectionProps {
  data: PortfolioData;
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data, onOpenCvModal }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch & Academic References
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2">
            Feel free to reach out for academic collaboration, instructional opportunities, research projects, or technical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Academic References */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-3.5">
                {/* Email */}
                <a
                  href={`mailto:${data.socials.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{data.socials.email}</div>
                  </div>
                </a>

                {/* Phone */}
                {data.socials.phone && (
                  <a
                    href={`tel:${data.socials.phone}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-green-600 group-hover:scale-105 transition-transform shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Phone Number</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono group-hover:text-blue-600 transition-colors">{data.socials.phone}</div>
                    </div>
                  </a>
                )}

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-rose-500 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">{data.socials.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={onOpenCvModal}
                  className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  title="View CV (PDF)"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>CV</span>
                </button>
              </div>
            </div>

            {/* Academic References Card from CV */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span>Academic References</span>
              </div>

              <div className="space-y-3">
                {data.references.map((ref) => (
                  <div key={ref.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900">{ref.name}</h4>
                      <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                        {ref.designation}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">{ref.department}</div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-slate-400" />
                      <span>{ref.institution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Have an academic proposal, educational query, or technical question? Leave a message below.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center space-y-2 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto" />
                  <h4 className="text-base font-bold text-green-900">Thank you for reaching out!</h4>
                  <p className="text-xs text-green-700 max-w-md mx-auto">
                    Your message has been formatted. Tanveer Rahman Emon will get back to you shortly at your specified email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Dr. / Prof. / Engr. John Doe"
                        value={formState.name}
                        onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="you@institution.edu"
                        value={formState.email}
                        onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Academic Inquiry / Research Collaboration / Coursework"
                      value={formState.subject}
                      onChange={e => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      value={formState.message}
                      onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
