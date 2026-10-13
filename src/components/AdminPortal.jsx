import React, { useState, useRef } from 'react';
import { useConference } from '../context/ConferenceContext';
import { processImageFile } from '../utils/imageUpload';
import {
  Users,
  Award,
  FileText,
  Calendar,
  Upload,
  Trash2,
  Plus,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Download,
  RotateCcw,
  Sparkles,
  Phone,
  Mail,
  Camera,
  Link as LinkIcon,
  Video,
} from 'lucide-react';

export default function AdminPortal({ onBackToSite }) {
  const {
    data,
    updateLeader,
    addChiefPatron,
    editChiefPatron,
    deleteChiefPatron,
    addFaculty,
    editFaculty,
    deleteFaculty,
    updateBrochure,
    updateRegistrationLink,
    updateVideoLink,
    updateDates,
    resetToDefaults,
    exportDataJson,
  } = useConference();

  const [activeTab, setActiveTab] = useState('leadership'); // 'leadership' | 'chiefPatrons' | 'faculty' | 'brochure' | 'dates'
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Helper for leadership photo upload
  const handleLeadershipPhotoUpload = async (roleKey, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await processImageFile(file);
      updateLeader(roleKey, { image: dataUrl });
      showToast(`Updated photo for ${roleKey}`);
    } catch (err) {
      alert(err.message || 'Error processing image');
    }
  };

  // Helper for chief patron photo upload
  const handleChiefPatronPhotoUpload = async (index, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await processImageFile(file);
      editChiefPatron(index, { image: dataUrl });
      showToast(`Photo updated for Chief Patron #${index + 1}`);
    } catch (err) {
      alert(err.message || 'Error processing image');
    }
  };

  // Helper for faculty photo upload
  const handleFacultyPhotoUpload = async (index, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await processImageFile(file);
      editFaculty(index, { image: dataUrl });
      showToast(`Photo updated for faculty member #${index + 1}`);
    } catch (err) {
      alert(err.message || 'Error processing image');
    }
  };

  // Helper for brochure upload
  const handleBrochureFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      updateBrochure(ev.target.result);
      showToast('Brochure file uploaded and updated!');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-[#fdfdf7] text-[#000000] font-sans antialiased pb-24">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#000000] text-[#fdfdf7] px-5 py-3 rounded-[12px] shadow-samara-md text-sm font-medium flex items-center gap-2.5 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-[#ffffff]/95 backdrop-blur-md border-b border-black/[0.08] shadow-subtle">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToSite}
              className="p-2 rounded-[12px] bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Site</span>
            </button>

            <div className="flex items-center gap-3">
              <img
                src="/mit-logo-circle.png"
                alt="MIT Crest"
                className="w-9 h-9 object-contain shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base font-medium tracking-tight text-[#000000] leading-none">
                    RTECE 2026 Admin Portal
                  </h1>
                  <span className="text-[10px] font-mono uppercase bg-[#0096f7]/10 text-[#0096f7] px-2 py-0.5 rounded-[12px] font-semibold">
                    Live Sync
                  </span>
                </div>
                <p className="text-[11px] text-[#666666] mt-0.5">
                  Content Management • Photos, Brochure &amp; Committee
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={exportDataJson}
              className="px-3.5 py-2 rounded-[12px] bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] text-xs font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              title="Download backup JSON"
            >
              <Download className="w-3.5 h-3.5 text-[#0096f7]" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm('Reset all changes back to the original brochure defaults?')) {
                  resetToDefaults();
                  showToast('Reset to original brochure defaults');
                }
              }}
              className="px-3 py-2 rounded-[12px] bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer border border-rose-200"
              title="Reset all fields"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            <button
              onClick={onBackToSite}
              className="px-4 py-2 rounded-[12px] bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-xs font-medium transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-subtle"
            >
              <span>View Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1280px] mx-auto px-6 pt-8">
        
        {/* Navigation Tabs (Samara Pill style) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-black/[0.04] rounded-[18px] border border-black/[0.08] mb-8">
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-4 py-2.5 rounded-[12px] text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'leadership'
                ? 'bg-[#000000] text-[#fdfdf7] shadow-subtle'
                : 'text-[#666666] hover:text-[#000000]'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Patron &amp; Leadership</span>
          </button>

          <button
            onClick={() => setActiveTab('chiefPatrons')}
            className={`px-4 py-2.5 rounded-[12px] text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'chiefPatrons'
                ? 'bg-[#000000] text-[#fdfdf7] shadow-subtle'
                : 'text-[#666666] hover:text-[#000000]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Chief Patrons ({data.chiefPatrons?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('faculty')}
            className={`px-4 py-2.5 rounded-[12px] text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'faculty'
                ? 'bg-[#000000] text-[#fdfdf7] shadow-subtle'
                : 'text-[#666666] hover:text-[#000000]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Faculty &amp; Technical Team ({data.technicalTeam?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('brochure')}
            className={`px-4 py-2.5 rounded-[12px] text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'brochure'
                ? 'bg-[#000000] text-[#fdfdf7] shadow-subtle'
                : 'text-[#666666] hover:text-[#000000]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Brochure &amp; Links</span>
          </button>

          <button
            onClick={() => setActiveTab('dates')}
            className={`px-4 py-2.5 rounded-[12px] text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'dates'
                ? 'bg-[#000000] text-[#fdfdf7] shadow-subtle'
                : 'text-[#666666] hover:text-[#000000]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Dates &amp; Deadlines</span>
          </button>
        </div>

        {/* TAB 1: LEADERSHIP (Patron, Convener, Coordinator) */}
        {activeTab === 'leadership' && (
          <div className="space-y-8">
            <div className="border-b border-black/[0.08] pb-4">
              <h2 className="text-2xl font-regola-light text-[#000000]">
                Conference Leadership
              </h2>
              <p className="text-xs text-[#666666] mt-1">
                Upload portrait photos, edit titles, and contact information for the Principal, Convener (HOD), and Coordinator.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* PATRON CARD */}
              <LeadershipEditorCard
                roleTitle="Patron"
                roleKey="patron"
                leader={data.patron}
                onUpdate={(fields) => {
                  updateLeader('patron', fields);
                  showToast('Patron updated');
                }}
                onPhotoUpload={(e) => handleLeadershipPhotoUpload('patron', e)}
              />

              {/* CONVENER CARD */}
              <LeadershipEditorCard
                roleTitle="Convener"
                roleKey="convener"
                leader={data.convener}
                onUpdate={(fields) => {
                  updateLeader('convener', fields);
                  showToast('Convener updated');
                }}
                onPhotoUpload={(e) => handleLeadershipPhotoUpload('convener', e)}
              />

              {/* COORDINATOR CARD */}
              <LeadershipEditorCard
                roleTitle="Coordinator"
                roleKey="coordinator"
                leader={data.coordinator}
                onUpdate={(fields) => {
                  updateLeader('coordinator', fields);
                  showToast('Coordinator updated');
                }}
                onPhotoUpload={(e) => handleLeadershipPhotoUpload('coordinator', e)}
                showContact={true}
              />

            </div>
          </div>
        )}

        {/* TAB 2: CHIEF PATRONS */}
        {activeTab === 'chiefPatrons' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.08] pb-4">
              <div>
                <h2 className="text-2xl font-regola-light text-[#000000]">
                  Chief Patrons Directory
                </h2>
                <p className="text-xs text-[#666666] mt-1">
                  Upload portrait photos and edit roles for MET Mysuru trustees and dignitaries.
                </p>
              </div>

              <button
                onClick={() => {
                  addChiefPatron({
                    name: 'New Chief Patron',
                    role: 'Trustee, MET Mysuru',
                    image: '',
                  });
                  showToast('Added new Chief Patron');
                }}
                className="px-4 py-2.5 rounded-[12px] bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-xs font-medium transition-all inline-flex items-center gap-2 cursor-pointer shadow-subtle shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add Chief Patron</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.chiefPatrons?.map((patron, idx) => (
                <div
                  key={idx}
                  className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Photo + Preview */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black/10 bg-[#f5f2de] shrink-0 shadow-subtle">
                        {patron.image ? (
                          <img
                            src={patron.image}
                            alt={patron.name}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-mono font-medium text-sm text-[#000000]">
                            {patron.name?.slice(0, 2).toUpperCase() || 'CP'}
                          </div>
                        )}
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] bg-black/[0.04] hover:bg-black/[0.08] text-xs font-medium text-[#000000] cursor-pointer transition-colors border border-black/10">
                          <Camera className="w-3.5 h-3.5 text-[#0096f7]" />
                          <span>{patron.image ? 'Change Photo' : 'Upload Photo'}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleChiefPatronPhotoUpload(idx, e)}
                          />
                        </label>

                        {patron.image && (
                          <button
                            onClick={() => {
                              editChiefPatron(idx, { image: '' });
                              showToast('Photo removed');
                            }}
                            className="block text-[11px] text-rose-600 hover:underline"
                          >
                            Remove Photo
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Name Input */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        value={patron.name || ''}
                        onChange={(e) => editChiefPatron(idx, { name: e.target.value })}
                        className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                      />
                    </div>

                    {/* Role / Designation Input */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        Designation / Role
                      </label>
                      <input
                        type="text"
                        value={patron.role || ''}
                        onChange={(e) => editChiefPatron(idx, { role: e.target.value })}
                        className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#666666]">
                      Chief Patron #{idx + 1}
                    </span>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete ${patron.name}?`)) {
                          deleteChiefPatron(idx);
                          showToast('Chief Patron removed');
                        }
                      }}
                      className="text-xs text-rose-600 hover:text-rose-800 p-1 rounded inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FACULTY / TECHNICAL TEAM */}
        {activeTab === 'faculty' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.08] pb-4">
              <div>
                <h2 className="text-2xl font-regola-light text-[#000000]">
                  Faculty &amp; Technical Committee
                </h2>
                <p className="text-xs text-[#666666] mt-1">
                  Upload portrait photos and edit designations, phone numbers, and emails for department faculty members.
                </p>
              </div>

              <button
                onClick={() => {
                  addFaculty({
                    name: 'Faculty Name',
                    designation: 'Assistant Professor',
                    phone: '',
                    email: '',
                    image: '',
                  });
                  showToast('Added new faculty member');
                }}
                className="px-4 py-2.5 rounded-[12px] bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-xs font-medium transition-all inline-flex items-center gap-2 cursor-pointer shadow-subtle shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add Faculty Member</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.technicalTeam?.map((faculty, idx) => (
                <div
                  key={idx}
                  className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    
                    {/* Photo + Preview */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black/10 bg-[#f5f2de] shrink-0 shadow-subtle">
                        {faculty.image ? (
                          <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-mono font-medium text-sm text-[#000000]">
                            {faculty.name?.slice(0, 2).toUpperCase() || 'FA'}
                          </div>
                        )}
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] bg-black/[0.04] hover:bg-black/[0.08] text-xs font-medium text-[#000000] cursor-pointer transition-colors border border-black/10">
                          <Camera className="w-3.5 h-3.5 text-[#0096f7]" />
                          <span>{faculty.image ? 'Change Photo' : 'Upload Photo'}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFacultyPhotoUpload(idx, e)}
                          />
                        </label>

                        {faculty.image && (
                          <button
                            onClick={() => {
                              editFaculty(idx, { image: '' });
                              showToast('Photo removed');
                            }}
                            className="block text-[11px] text-rose-600 hover:underline"
                          >
                            Remove Photo
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        Faculty Name
                      </label>
                      <input
                        type="text"
                        value={faculty.name || ''}
                        onChange={(e) => editFaculty(idx, { name: e.target.value })}
                        className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-2.5 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                      />
                    </div>

                    {/* Designation */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        Designation
                      </label>
                      <input
                        type="text"
                        value={faculty.designation || ''}
                        onChange={(e) => editFaculty(idx, { designation: e.target.value })}
                        className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-2.5 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                      />
                    </div>

                    {/* Phone (Optional) */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="text"
                        value={faculty.phone || ''}
                        placeholder="e.g. 9480839641"
                        onChange={(e) => editFaculty(idx, { phone: e.target.value })}
                        className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-2.5 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                      />
                    </div>

                    {/* Email (Optional) */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={faculty.email || ''}
                        placeholder="e.g. rajeshn_ece@mitmysore.in"
                        onChange={(e) => editFaculty(idx, { email: e.target.value })}
                        className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-2.5 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                      />
                    </div>

                  </div>

                  <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#666666]">
                      Faculty #{idx + 1}
                    </span>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete ${faculty.name}?`)) {
                          deleteFaculty(idx);
                          showToast('Faculty member removed');
                        }
                      }}
                      className="text-xs text-rose-600 hover:text-rose-800 p-1 rounded inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BROCHURE & LINKS */}
        {activeTab === 'brochure' && (
          <div className="max-w-4xl space-y-8">
            <div className="border-b border-black/[0.08] pb-4">
              <h2 className="text-2xl font-regola-light text-[#000000]">
                Brochure &amp; External Portals
              </h2>
              <p className="text-xs text-[#666666] mt-1">
                Upload new conference brochure documents, update the Google Form submission link, and HOD YouTube video address.
              </p>
            </div>

            {/* Brochure File Upload Card */}
            <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-7 shadow-subtle space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-[#000000] tracking-tight">
                    Conference Brochure (PDF / Image)
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5">
                    Current brochure path: <span className="font-mono text-[#0096f7]">{data.brochureUrl}</span>
                  </p>
                </div>

                <a
                  href={data.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-[12px] bg-black/[0.04] hover:bg-black/[0.08] text-xs font-medium text-[#000000] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Upload Dropzone */}
              <div className="border-2 border-dashed border-black/15 rounded-[14px] p-6 text-center hover:border-[#0096f7] transition-colors bg-[#fdfdf7]">
                <Upload className="w-8 h-8 text-[#0096f7] mx-auto mb-2" />
                <div className="text-sm font-medium text-[#000000]">
                  Click to Upload New Brochure File
                </div>
                <div className="text-xs text-[#666666] mt-1">
                  Supports PDF or high-resolution brochure images (.jpg, .png)
                </div>
                <label className="mt-4 inline-block px-4 py-2 rounded-[12px] bg-[#0096f7] text-white text-xs font-medium cursor-pointer shadow-subtle">
                  <span>Select File</span>
                  <input
                    type="file"
                    accept=".pdf,image/*"
                    className="hidden"
                    onChange={handleBrochureFileUpload}
                  />
                </label>
              </div>

              {/* Custom Brochure URL Input */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1.5">
                  Or enter direct URL / path
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={data.brochureUrl || ''}
                    onChange={(e) => updateBrochure(e.target.value)}
                    placeholder="/brochure.jpg or https://..."
                    className="flex-1 bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                  />
                  <button
                    onClick={() => showToast('Brochure link updated')}
                    className="px-4 py-3 rounded-[12px] bg-black/[0.04] hover:bg-black/[0.08] text-xs font-medium text-[#000000]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Google Form Link Card */}
            <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-7 shadow-subtle space-y-4">
              <div>
                <h3 className="text-lg font-medium text-[#000000] tracking-tight">
                  Official Registration Google Form Link
                </h3>
                <p className="text-xs text-[#666666] mt-0.5">
                  Used by all "Register Now", "Submit Paper", and QR code links across the site.
                </p>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1.5">
                  Google Form URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={data.registration?.formUrl || ''}
                    onChange={(e) => updateRegistrationLink(e.target.value)}
                    className="flex-1 bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                  />
                  <button
                    onClick={() => showToast('Registration link updated')}
                    className="px-4 py-3 rounded-[12px] bg-[#0096f7] text-white text-xs font-medium shadow-subtle"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* YouTube HOD Video Link Card */}
            <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-7 shadow-subtle space-y-4">
              <div>
                <h3 className="text-lg font-medium text-[#000000] tracking-tight">
                  HOD Video Address Link
                </h3>
                <p className="text-xs text-[#666666] mt-0.5">
                  Autoplaying video embed in the Vision &amp; Mission section.
                </p>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1.5">
                  YouTube Video URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={data.youtubeUrl || ''}
                    onChange={(e) => updateVideoLink(e.target.value)}
                    className="flex-1 bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
                  />
                  <button
                    onClick={() => showToast('Video link updated')}
                    className="px-4 py-3 rounded-[12px] bg-[#0096f7] text-white text-xs font-medium shadow-subtle"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: DATES & DEADLINES */}
        {activeTab === 'dates' && (
          <div className="max-w-4xl space-y-8">
            <div className="border-b border-black/[0.08] pb-4">
              <h2 className="text-2xl font-regola-light text-[#000000]">
                Important Dates &amp; Deadlines
              </h2>
              <p className="text-xs text-[#666666] mt-1">
                Update key milestones shown on the timeline, countdown timer, and marquee banner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Submission Opens */}
              <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle space-y-3">
                <span className="text-xs font-mono uppercase text-[#0096f7] font-semibold">Stage 01</span>
                <h3 className="text-base font-medium text-[#000000]">Submission Opens</h3>
                <input
                  type="text"
                  value={data.dates?.submissionOpens?.date || ''}
                  onChange={(e) =>
                    updateDates({
                      submissionOpens: { ...data.dates?.submissionOpens, date: e.target.value },
                    })
                  }
                  className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-sm"
                />
              </div>

              {/* Submission Deadline */}
              <div className="bg-[#ffffff] border border-[#ff4000]/30 rounded-[18px] p-6 shadow-subtle space-y-3 ring-1 ring-[#ff4000]/10">
                <span className="text-xs font-mono uppercase text-[#ff4000] font-semibold">Final Deadline (Cutoff)</span>
                <h3 className="text-base font-medium text-[#000000]">Last Date for Paper Submission</h3>
                <input
                  type="text"
                  value={data.dates?.lastSubmission?.date || ''}
                  onChange={(e) =>
                    updateDates({
                      lastSubmission: { ...data.dates?.lastSubmission, date: e.target.value },
                    })
                  }
                  className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-sm font-medium"
                />
              </div>

              {/* Acceptance Date */}
              <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle space-y-3">
                <span className="text-xs font-mono uppercase text-[#0096f7] font-semibold">Stage 03</span>
                <h3 className="text-base font-medium text-[#000000]">Acceptance Notification</h3>
                <input
                  type="text"
                  value={data.dates?.acceptance?.date || ''}
                  onChange={(e) =>
                    updateDates({
                      acceptance: { ...data.dates?.acceptance, date: e.target.value },
                    })
                  }
                  className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-sm"
                />
              </div>

              {/* Conference Date */}
              <div className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle space-y-3">
                <span className="text-xs font-mono uppercase text-[#0096f7] font-semibold">Main Event</span>
                <h3 className="text-base font-medium text-[#000000]">Conference Date</h3>
                <input
                  type="text"
                  value={data.dates?.conference?.date || ''}
                  onChange={(e) =>
                    updateDates({
                      conference: { ...data.dates?.conference, date: e.target.value },
                    })
                  }
                  className="w-full bg-[#fdfdf7] border border-black/10 rounded-[12px] p-3 text-sm font-medium"
                />
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}

/**
 * Reusable Card for Editing Leadership (Patron, Convener, Coordinator)
 */
function LeadershipEditorCard({ roleTitle, roleKey, leader, onUpdate, onPhotoUpload, showContact = false }) {
  return (
    <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle space-y-5 flex flex-col justify-between">
      <div className="space-y-4">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-[12px] bg-black/[0.04] text-[#000000] font-medium">
            {roleTitle}
          </span>
          <span className="text-[11px] font-mono text-[#0096f7]">RTECE 2026</span>
        </div>

        {/* Photo Upload & Avatar Preview */}
        <div className="flex items-center gap-4 pt-1">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-black/10 bg-[#f5f2de] shrink-0 shadow-subtle">
            {leader?.image ? (
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono font-medium text-base text-[#000000]">
                {leader?.name?.slice(0, 2).toUpperCase() || 'LD'}
              </div>
            )}
          </div>

          <div className="space-y-1.5 flex-1">
            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] bg-black/[0.04] hover:bg-black/[0.08] text-xs font-medium text-[#000000] cursor-pointer transition-colors border border-black/10">
              <Camera className="w-3.5 h-3.5 text-[#0096f7]" />
              <span>{leader?.image ? 'Change Photo' : 'Upload Photo'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onPhotoUpload}
              />
            </label>

            {leader?.image && (
              <button
                type="button"
                onClick={() => onUpdate({ image: '' })}
                className="block text-[11px] text-rose-600 hover:underline"
              >
                Remove Photo
              </button>
            )}
          </div>
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
            Full Name &amp; Title
          </label>
          <input
            type="text"
            value={leader?.name || ''}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none"
          />
        </div>

        {/* Designation Input */}
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
            Designation / Role
          </label>
          <textarea
            rows={2}
            value={leader?.role || ''}
            onChange={(e) => onUpdate({ role: e.target.value })}
            className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-3 text-xs sm:text-sm text-[#000000] focus:border-[#0096f7] focus:outline-none resize-none"
          />
        </div>

        {/* Contact info (for Coordinator or Convener) */}
        {showContact && (
          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={leader?.phone || ''}
                onChange={(e) => onUpdate({ phone: e.target.value })}
                className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-2.5 text-xs text-[#000000] focus:border-[#0096f7] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={leader?.email || ''}
                onChange={(e) => onUpdate({ email: e.target.value })}
                className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-2.5 text-xs text-[#000000] focus:border-[#0096f7] focus:outline-none"
              />
            </div>
          </div>
        )}

      </div>

      <div className="pt-3 border-t border-black/[0.06] text-[11px] font-mono text-[#666666] flex items-center justify-between">
        <span>Live Sync Active</span>
        <span className="text-emerald-600 font-medium">✓ Auto-saved</span>
      </div>
    </div>
  );
}
