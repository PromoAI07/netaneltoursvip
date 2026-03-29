import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
export function ConversionSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    destination: '',
    budget: '',
    dates: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/netaneltoursvip@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            destination: formData.destination,
            budget: formData.budget,
            dates: formData.dates,
            notes: formData.notes,
            _subject: `New VIP Trip Request from ${formData.name}`
          })
        }
      );
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          destination: '',
          budget: '',
          dates: '',
          notes: ''
        });
      } else {
        alert(
          'Something went wrong. Please try again or contact us via WhatsApp.'
        );
      }
    } catch (error) {
      alert(
        'Something went wrong. Please try again or contact us via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="plan-trip"
      className="relative py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      
      {/* Blurred beach background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
          'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px) brightness(0.55)',
          transform: 'scale(1.08)'
        }}
        aria-hidden="true" />
      
      {/* Dark gradient overlay for extra contrast */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
          'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.55) 100%)'
        }}
        aria-hidden="true" />
      

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Semi-transparent backdrop for heading text */}
          <div className="inline-block bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-6 mb-2 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white drop-shadow-lg">
              Plan Your Next Trip with me
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Tell me your dream destination and I will personaly create your
              perfect travel plan.
            </p>
          </div>
        </div>

        {isSuccess ?
        <div className="bg-white/10 border border-white/20 rounded-lg p-8 text-center animate-fade-in">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for contacting Netanel Tours VIP. One of our travel
              experts will contact you shortly via WhatsApp.
            </p>
            <button
            onClick={() => setIsSuccess(false)}
            className="text-white underline hover:text-gray-300">
            
              Send another request
            </button>
          </div> :

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-8 shadow-xl text-[#1f2933]">
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1">
                
                  Full Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none transition-shadow bg-gray-50"
                placeholder="John Doe" />
              
              </div>
              <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1">
                
                  Email Address
                </label>
                <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none transition-shadow bg-gray-50"
                placeholder="john@example.com" />
              
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                htmlFor="whatsapp"
                className="block text-sm font-medium text-gray-700 mb-1">
                
                  WhatsApp Number
                </label>
                <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none transition-shadow bg-gray-50"
                placeholder="+1 234 567 8900" />
              
              </div>
              <div>
                <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-1">
                
                  Estimated Budget
                </label>
                <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none transition-shadow bg-gray-50">
                
                  <option value="">Select a range</option>
                  <option value="$1k-3k">$1,000 - $3,000</option>
                  <option value="$3k-5k">$3,000 - $5,000</option>
                  <option value="$5k-10k">$5,000 - $10,000</option>
                  <option value="$10k+">$10,000+</option>
                  <option value="Luxury">Luxury / No Limit</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                htmlFor="destination"
                className="block text-sm font-medium text-gray-700 mb-1">
                
                  Preferred Destination
                </label>
                <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none transition-shadow bg-gray-50"
                placeholder="e.g. Thailand, Europe..." />
              
              </div>
              <div>
                <label
                htmlFor="dates"
                className="block text-sm font-medium text-gray-700 mb-1">
                
                  Travel Dates
                </label>
                <input
                type="text"
                id="dates"
                name="dates"
                value={formData.dates}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none transition-shadow bg-gray-50"
                placeholder="e.g. Summer 2026" />
              
              </div>
            </div>

            <div className="mb-8">
              <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-1">
              
                Additional Notes / Preferences
              </label>
              <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none transition-shadow bg-gray-50 resize-none"
              placeholder="Tell me about your dream trip...">
            </textarea>
            </div>

            <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4b5563] text-white font-bold py-4 rounded-md hover:bg-[#374151] transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
            
              {isSubmitting ?
            'Submitting...' :

            <>
                  Get My VIP Travel Plan <Send className="ml-2 h-5 w-5" />
                </>
            }
            </button>

            <p className="mt-4 text-xs text-center text-gray-400">
              By submitting this form, you agree to be contacted via WhatsApp or
              Email.
            </p>
          </form>
        }
      </div>
    </section>);

}