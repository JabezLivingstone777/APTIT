import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "APTIT  provided qualified candidates to support our business and are always willing to go the extra mile in making sure that our staffing needs are met. I highly recommend APTIT  to other engineering firms looking to increase their talent and ability to successfully complete projects on time.",
      author: "Chris Almond",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      text: "APTIT  got amazing staff. The team took the time to not only understand my skillsets and experience, but also my career goals and what I was looking for in a position. I highly recommend them to anyone.",
      author: "Robert R",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      text: "We ramped a fast-paced, very complex program and with APTIT , were able to not only meet but exceed customer expectations. We appreciate their hard work and we continue to lean on them for support.",
      author: "Matt D",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">What Our Happy Clients Say</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 mb-12">
            Focus is having the unwavering attention to complete what you set out to do.
          </p>

          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors mr-8"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>

              <div className="w-20 h-20 rounded-full overflow-hidden mx-8">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors ml-8"
              >
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Large Quote Mark */}
            <div className="text-gray-300 text-8xl font-serif mb-4">"</div>

            <cite className="text-slate-900 font-semibold text-xl">
              {testimonials[currentTestimonial].author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;