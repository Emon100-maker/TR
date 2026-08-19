import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  User, 
  FileText, 
  GraduationCap, 
  Link as LinkIcon, 
  Image as ImageIcon,
  Mail,
  MapPin,
  Sparkles,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PortfolioData, EducationItem } from '../types';
import { defaultPortfolioData } from '../data/defaultPortfolio';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset
}) => {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<'profile' | 'education' | 'links'>('profile');
  const [savedToast, setSavedToast] = useState(false);

  if (!isOpen) return null;

  const handleEducationChange = (index: number, field: keyof EducationItem, value: any) => {
    const updatedEdu = [...formData.education];
    updatedEdu[index] = {
      ...updatedEdu[index],
      [field]: value
    };
    setFormData({ ...formData, education: updatedEdu });
  };

  const handleSave = () => {
    onSave(formData);
    setSavedToast(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSavedToast(false);
      onClose();
    }, 800);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all details back to default values?')) {
      setFormData(defaultPortfolioData);
      onReset();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Customize Portfolio & Links</h3>
              <p className="text-xs text-slate-500">
                Update your Photo URL, CV PDF link, GPA values, and institutions.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-5 gap-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 cursor-pointer transition-colors ${
              activeTab === 'profile' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Photo</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 cursor-pointer transition-colors ${
              activeTab === 'education' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education (SSC, HSC, BSC)</span>
          </button>

          <button
            onClick={() => setActiveTab('links')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 cursor-pointer transition-colors ${
              activeTab === 'links' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>CV PDF & Social Links</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh] bg-white space-y-6">
          
          {/* TAB 1: Profile & Photo */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Profile Image URL */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Profile Picture Image Link (URL)</span>
                  <span className="text-blue-600 text-[11px] font-normal">Direct image URL (.jpg/.png/unsplash)</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="url"
                    value={formData.profilePicUrl}
                    onChange={(e) => setFormData({ ...formData, profilePicUrl: e.target.value })}
                    placeholder="https://..."
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 font-mono"
                  />
                  <img
                    src={formData.profilePicUrl}
                    alt="Preview"
                    className="w-10 h-10 rounded-xl object-cover border border-slate-200 flex-shrink-0 shadow-2xs"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  About Me / Career Bio
                </label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 resize-none leading-relaxed"
                />
              </div>

              {/* Career Objective */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Career Objective
                </label>
                <textarea
                  rows={3}
                  value={formData.careerObjective}
                  onChange={(e) => setFormData({ ...formData, careerObjective: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 resize-none leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Education Qualifications (SSC, HSC, BSC) */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <p className="text-xs text-slate-500">
                Update degree titles, GPA scores, institution names, and passing years for SSC, HSC, and B.Sc:
              </p>

              {formData.education.map((edu, index) => (
                <div key={edu.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase font-mono">
                      {edu.level} Education Record
                    </span>
                    <span className="text-xs text-slate-400">ID: {edu.id}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Degree Title</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Institution Name</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">GPA / CGPA Achieved</label>
                      <input
                        type="text"
                        value={edu.gpa}
                        onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                        placeholder="e.g. 5.00 or 3.85"
                        className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-green-700 font-bold focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Passing Year / Duration</label>
                      <input
                        type="text"
                        value={edu.year}
                        onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                        placeholder="e.g. 2020 - 2024"
                        className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: CV PDF Link & Socials */}
          {activeTab === 'links' && (
            <div className="space-y-4">
              {/* CV PDF Link Input */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <label className="block text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Resume / CV PDF URL</span>
                </label>
                <p className="text-xs text-slate-500">
                  Paste the Google Drive, GitHub, or direct link where your PDF is hosted. The "View & Download CV" buttons will use this link.
                </p>
                <input
                  type="url"
                  value={formData.cvPdfUrl}
                  onChange={(e) => setFormData({ ...formData, cvPdfUrl: e.target.value })}
                  placeholder="https://drive.google.com/file/d/..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm font-mono focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.socials.email}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      socials: { ...formData.socials, email: e.target.value } 
                    })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.socials.phone || ''}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      socials: { ...formData.socials, phone: e.target.value } 
                    })}
                    placeholder="+88001912170767"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm font-mono focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">GitHub Profile Link</label>
                  <input
                    type="url"
                    value={formData.socials.github}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      socials: { ...formData.socials, github: e.target.value } 
                    })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">LinkedIn Profile Link</label>
                  <input
                    type="url"
                    value={formData.socials.linkedin}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      socials: { ...formData.socials, linkedin: e.target.value } 
                    })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.socials.location}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      socials: { ...formData.socials, location: e.target.value } 
                    })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handleResetDefaults}
            className="px-3.5 py-2 rounded-full text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 cursor-pointer shadow-2xs"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors"
            >
              {savedToast ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedToast ? 'Saved!' : 'Save Changes'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
