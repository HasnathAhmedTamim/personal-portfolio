import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    agree: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.topic) {
      newErrors.topic = 'Please select a topic';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (!formData.agree) {
      newErrors.agree = 'You must accept the terms';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        agree: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:px-12 px-4" id="contact">
      <div className="mb-20 text-center">
        <p className="text-xl text-primary font-semibold mb-5">Get In Touch</p>
        <h2 className="md:text-5xl text-4xl text-headingColor font-bold">
          Contact Me
        </h2>
        <p className="mt-5 text-body max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you! 
          Send me a message and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="md:w-2/3 mx-auto mb-20">
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Thank you for your message! I&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="firstName" className="text-base text-headingColor font-medium">
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`block border rounded-lg py-3 px-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="sm:w-1/2 w-full">
              <label htmlFor="lastName" className="text-base text-headingColor font-medium">
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`block border rounded-lg py-3 px-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="email" className="text-base text-headingColor font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`block border rounded-lg py-3 px-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="sm:w-1/2 w-full">
              <label htmlFor="phone" className="text-base text-headingColor font-medium">
                Phone number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`block border rounded-lg py-3 px-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="topic" className="text-base text-headingColor font-medium">
              Choose a topic *
            </label>
            <select
              name="topic"
              id="topic"
              value={formData.topic}
              onChange={handleInputChange}
              className={`block border rounded-lg py-3 px-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.topic ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a topic...</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Full Stack Project</option>
              <option value="consultation">Technical Consultation</option>
              <option value="collaboration">Collaboration Opportunity</option>
              <option value="other">Other</option>
            </select>
            {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic}</p>}
          </div>

          <div className="w-full">
            <label htmlFor="message" className="text-base text-headingColor font-medium">
              Message *
            </label>
            <textarea
              placeholder="Tell me about your project or how I can help you..."
              name="message"
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              className={`block border rounded-lg py-3 px-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-vertical ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              <p className="text-gray-500 text-sm ml-auto">{formData.message.length}/500</p>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                name="agree" 
                id="agree" 
                checked={formData.agree}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="agree" className="text-base text-headingColor">
                I agree to the terms and conditions and privacy policy *
              </label>
            </div>
            {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary px-12 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner size="small" color="white" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
