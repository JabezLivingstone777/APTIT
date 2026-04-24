import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    datePosted: true,
    specialism: true,
    jobType: true,
    experience: true,
    offeredSalary: true,
    gender: true,
    qualification: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const jobs = [
    {
      id: 1,
      title: 'Full Stack Web Developer',
      location: 'Levittown, NY',
      technology: 'Java',
      type: 'Remote',
      postedTime: '1M ago'
    },
    {
      id: 2,
      title: 'Sr. Bigdata Developer',
      location: 'Temple Terrace, FL',
      technology: 'Bigdata',
      type: 'Hybrid Remote',
      postedTime: '1M ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <div className="relative bg-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-gray-300">Explore exciting career opportunities at APTITPS</p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Software Developer"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Find Job
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-3/12 w-full space-y-4">
            {/* Date Posted */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button
                onClick={() => toggleSection('datePosted')}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold text-lg text-slate-900">Date Posted</h3>
                {expandedSections.datePosted ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {expandedSections.datePosted && (
                <div className="space-y-3">
                  {['Last hour', 'Last 24 hour', 'Last 7 days', 'Last 14 days', 'Last 30 days'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Specialism */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button
                onClick={() => toggleSection('specialism')}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold text-lg text-slate-900">Specialism</h3>
                {expandedSections.specialism ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {expandedSections.specialism && (
                <div className="space-y-3">
                  {['IT Contractor', 'Charity & Voluntary', 'Digital & Creative', 'Estate Agency', 'Graduate'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Job Type */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button
                onClick={() => toggleSection('jobType')}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold text-lg text-slate-900">Job Type</h3>
                {expandedSections.jobType ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {expandedSections.jobType && (
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" defaultChecked />
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                      <span className="text-gray-700">Full Time</span>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-yellow-500 rounded-sm"></span>
                      <span className="text-gray-700">Part-Time</span>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-sm"></span>
                      <span className="text-gray-700">Freelance</span>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-red-500 rounded-sm"></span>
                      <span className="text-gray-700">Temporary</span>
                    </div>
                  </label>
                </div>
              )}
            </div>

            {/* Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button
                onClick={() => toggleSection('experience')}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold text-lg text-slate-900">Experience</h3>
                {expandedSections.experience ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {expandedSections.experience && (
                <div className="space-y-3">
                  {['Fresher', 'Less than 1 year', '2 Year', '3 Year', '4 Year'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Offered Salary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button
                onClick={() => toggleSection('offeredSalary')}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold text-lg text-slate-900">Offered Salary</h3>
                {expandedSections.offeredSalary ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {expandedSections.offeredSalary && (
                <div className="space-y-3">
                  {['10k - 20k', '20k - 30k', '30k - 40k', '40k - 50k', '50k - 60k'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Gender */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button
                onClick={() => toggleSection('gender')}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold text-lg text-slate-900">Gender</h3>
                {expandedSections.gender ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {expandedSections.gender && (
                <div className="space-y-3">
                  {['Male', 'Female'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Qualification */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button
                onClick={() => toggleSection('qualification')}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold text-lg text-slate-900">Qualification</h3>
                {expandedSections.qualification ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {expandedSections.qualification && (
                <div className="space-y-3">
                  {['Matriculation', 'Intermediate'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Job Listings */}
          <main className="lg:w-8/12 w-full">
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-slate-900 mb-3">{job.title}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.technology}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${job.type === 'Remote' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Apply Job
                      </button>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{job.postedTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CareersPage;