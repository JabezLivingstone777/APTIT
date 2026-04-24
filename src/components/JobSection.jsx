import React, { memo } from 'react';
import { Link } from "react-router-dom";

const JobSection = memo(() => {
  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <main className="w-full max-w-4xl">
            <div className="text-center">

              <h3 className="text-orange-500 text-lg font-semibold mb-4">
                Post OR Get a job
              </h3>

              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Looking for Post OR Get a job? We have end-to-end solutions that can keep up with your criteria.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-colors">
                  <Link to="/careers">
                    post a job
                  </Link>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-md font-semibold transition-colors">
                  <Link to="/careers">
                    Browse Jobs
                  </Link>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
});

JobSection.displayName = "JobSection";

export default JobSection;