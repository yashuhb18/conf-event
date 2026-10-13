import React, { createContext, useContext, useState, useEffect } from 'react';
import { conferenceData as defaultConferenceData } from '../data/conference';

const STORAGE_KEY = 'rtece_2026_conference_data_v1';

const ConferenceContext = createContext(null);

export function ConferenceProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all required top-level keys exist
        return {
          ...defaultConferenceData,
          ...parsed,
          institution: { ...defaultConferenceData.institution, ...(parsed.institution || {}) },
          department: { ...defaultConferenceData.department, ...(parsed.department || {}) },
          dates: { ...defaultConferenceData.dates, ...(parsed.dates || {}) },
          registration: { ...defaultConferenceData.registration, ...(parsed.registration || {}) },
          publication: { ...defaultConferenceData.publication, ...(parsed.publication || {}) },
          patron: { ...defaultConferenceData.patron, ...(parsed.patron || {}) },
          convener: { ...defaultConferenceData.convener, ...(parsed.convener || {}) },
          coordinator: { ...defaultConferenceData.coordinator, ...(parsed.coordinator || {}) },
          chiefPatrons: parsed.chiefPatrons || defaultConferenceData.chiefPatrons,
          technicalTeam: parsed.technicalTeam || defaultConferenceData.technicalTeam,
          brochureUrl: parsed.brochureUrl || '/brochure.jpg',
          youtubeUrl: parsed.youtubeUrl || 'https://www.youtube.com/watch?v=ZQVUc8iubWM&t=132s',
        };
      }
    } catch (e) {
      console.error('Error loading conference data from localStorage:', e);
    }
    return {
      ...defaultConferenceData,
      brochureUrl: '/brochure.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ZQVUc8iubWM&t=132s',
    };
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving conference data to localStorage:', e);
    }
  }, [data]);

  // Update top-level field or section
  const updateField = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  // Update Patron, Convener, or Coordinator
  const updateLeader = (roleKey, updatedData) => {
    setData((prev) => ({
      ...prev,
      [roleKey]: {
        ...(prev[roleKey] || {}),
        ...updatedData,
      },
    }));
  };

  // Chief Patrons Management
  const updateChiefPatrons = (newList) => {
    setData((prev) => ({ ...prev, chiefPatrons: newList }));
  };

  const addChiefPatron = (newPatron) => {
    setData((prev) => ({
      ...prev,
      chiefPatrons: [...(prev.chiefPatrons || []), newPatron],
    }));
  };

  const editChiefPatron = (index, updatedPatron) => {
    setData((prev) => {
      const list = [...(prev.chiefPatrons || [])];
      list[index] = { ...list[index], ...updatedPatron };
      return { ...prev, chiefPatrons: list };
    });
  };

  const deleteChiefPatron = (index) => {
    setData((prev) => {
      const list = [...(prev.chiefPatrons || [])];
      list.splice(index, 1);
      return { ...prev, chiefPatrons: list };
    });
  };

  // Faculty / Technical Team Management
  const updateTechnicalTeam = (newList) => {
    setData((prev) => ({ ...prev, technicalTeam: newList }));
  };

  const addFaculty = (newFaculty) => {
    setData((prev) => ({
      ...prev,
      technicalTeam: [...(prev.technicalTeam || []), newFaculty],
    }));
  };

  const editFaculty = (index, updatedFaculty) => {
    setData((prev) => {
      const list = [...(prev.technicalTeam || [])];
      list[index] = { ...list[index], ...updatedFaculty };
      return { ...prev, technicalTeam: list };
    });
  };

  const deleteFaculty = (index) => {
    setData((prev) => {
      const list = [...(prev.technicalTeam || [])];
      list.splice(index, 1);
      return { ...prev, technicalTeam: list };
    });
  };

  // Brochure & Links Management
  const updateBrochure = (url) => {
    setData((prev) => ({ ...prev, brochureUrl: url }));
  };

  const updateRegistrationLink = (formUrl) => {
    setData((prev) => ({
      ...prev,
      registration: {
        ...(prev.registration || {}),
        formUrl,
      },
    }));
  };

  const updateVideoLink = (youtubeUrl) => {
    setData((prev) => ({ ...prev, youtubeUrl }));
  };

  const updateDates = (datesObj) => {
    setData((prev) => ({
      ...prev,
      dates: {
        ...(prev.dates || {}),
        ...datesObj,
      },
    }));
  };

  // Reset to original defaults
  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
    setData({
      ...defaultConferenceData,
      brochureUrl: '/brochure.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ZQVUc8iubWM&t=132s',
    });
  };

  // Export as JSON
  const exportDataJson = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `rtece-2026-data-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <ConferenceContext.Provider
      value={{
        data,
        updateField,
        updateLeader,
        updateChiefPatrons,
        addChiefPatron,
        editChiefPatron,
        deleteChiefPatron,
        updateTechnicalTeam,
        addFaculty,
        editFaculty,
        deleteFaculty,
        updateBrochure,
        updateRegistrationLink,
        updateVideoLink,
        updateDates,
        resetToDefaults,
        exportDataJson,
      }}
    >
      {children}
    </ConferenceContext.Provider>
  );
}

export function useConference() {
  const context = useContext(ConferenceContext);
  if (!context) {
    throw new Error('useConference must be used within a ConferenceProvider');
  }
  return context;
}
