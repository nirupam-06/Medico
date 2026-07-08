// src/pages/LandingPage.js
//
// Standalone landing page for Medico.
// NOTE: This file is not imported/wired into App.js — add a route for it
// yourself if you want it live, e.g.:
//   <Route path="/landing" element={<LandingPage />} />
//
// Only existing dependencies are used (react, react-router-dom) and only
// global CSS classes that already exist in src/styles.css / src/App.css
// (.container, .navbar, .data-list-container, .data-item, .submit-button)
// are reused. No new packages, no edits to existing files.

import React from 'react';
import { Link } from 'react-router-dom';

// Features inferred directly from existing backend routes/controllers:
// - patientRoutes.js      -> Patient Management (add / view / update / delete by UID)
// - prescriptionRoutes.js -> Prescription Management (create / view / update / delete by UID)
// - reportRoutes.js       -> Medical Reports (upload, view, download, delete PDF/image reports)
// - healthRoutes.js       -> Health Records (blood group, sugar, BP, infections, diseases by UID)
// - authRoutes.js         -> Role-based auth (admin register/login, patient loginUser)
// - patientRoutes.js verify-uid -> Patient UID verification portal
const features = [
  {
    title: 'Patient Management',
    description:
      'Register new patients and keep their profile details up to date, all indexed by a unique patient UID.',
  },
  {
    title: 'Prescription Tracking',
    description:
      'Create, update, and review medication, dosage, and instructions for every patient prescription.',
  },
  {
    title: 'Medical Reports',
    description:
      'Upload, organize, and download patient reports (PDF, JPG, PNG) with secure file storage.',
  },
  {
    title: 'Health Records',
    description:
      'Log and update vital health data such as blood group, sugar levels, blood pressure, and known conditions.',
  },
  {
    title: 'Role-Based Access',
    description:
      'Separate, token-secured experiences for healthcare providers (admins) and patients (users).',
  },
  {
    title: 'Patient UID Verification',
    description:
      'Patients verify their identity with a UID before viewing their own prescriptions, reports, and records.',
  },
];

const LandingPage = () => {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      {/* Hero */}
      <section
        style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: '#2c3e50',
          color: '#fff',
          borderRadius: 8,
          marginBottom: 40,
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: 12, color: '#fff' }}>Medico</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 640, margin: '0 auto' }}>
          A comprehensive medical management system connecting healthcare providers and
          patients through secure, shared access to records, prescriptions, and reports.
        </p>
      </section>

      {/* Features */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ textAlign: 'center' }}>Features</h2>
        <div className="data-list-container">
          {features.map((feature) => (
            <div className="data-item" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center' }}>
        <h2>Get Started</h2>
        <p style={{ marginBottom: 20 }}>
          Log in to your existing account, or register as a healthcare provider.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          {/* Existing route defined in App.js: <Route path="/login" .../> */}
          <Link to="/login">
            <button className="submit-button">Login</button>
          </Link>
          {/* Existing route defined in App.js: <Route path="/register" .../> */}
          <Link to="/register">
            <button className="submit-button">Register</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
