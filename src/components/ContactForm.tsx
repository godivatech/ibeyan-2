
import { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const inquiryTypes = [
  { value: 'bulk', label: 'Bulk Order Inquiry' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'general', label: 'General Question' },
];

const ContactForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    email: '',
    company: '',
    message: '',
    product: '',
    quantity: '',
    phoneNumber: '',
  });
  const [loading, setLoading] = useState(false);

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goToStep2 = () => {
    if (!formData.inquiryType) {
      toast.error('Please select an inquiry type');
      return;
    }
    setFormStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({
        inquiryType: '',
        name: '',
        email: '',
        company: '',
        message: '',
        product: '',
        quantity: '',
        phoneNumber: '',
      });
      setFormStep(1);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

      <form onSubmit={handleSubmit}>
        {formStep === 1 && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Select Inquiry Purpose</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inquiryTypes.map((type) => (
                  <div
                    key={type.value}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      formData.inquiryType === type.value
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setFormData((prev) => ({ ...prev, inquiryType: type.value }))}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          formData.inquiryType === type.value
                            ? 'border-purple-600'
                            : 'border-gray-300'
                        }`}
                      >
                        {formData.inquiryType === type.value && (
                          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                        )}
                      </div>
                      <span className="ml-3 font-medium">{type.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={goToStep2}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
              >
                Continue <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {formStep === 2 && (
          <div className="space-y-5 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={updateFormData}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={updateFormData}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2 font-medium">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={updateFormData}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={updateFormData}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            {formData.inquiryType === 'bulk' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="product" className="block text-gray-700 mb-2 font-medium">
                    Product of Interest *
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={updateFormData}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select a product</option>
                    <option value="turmeric">Turmeric Powder</option>
                    <option value="pepper">Black Pepper</option>
                    <option value="honey">Wild Honey</option>
                    <option value="coffee">Coffee Beans</option>
                    <option value="annatto">Annatto Seeds</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-gray-700 mb-2 font-medium">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={updateFormData}
                    placeholder="e.g., 100kg, 5 tons, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={updateFormData}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setFormStep(1)}
                className="sm:w-1/4 bg-gray-100 text-gray-800 py-3 px-6 rounded-md font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="sm:w-3/4 bg-purple-600 text-white py-3 px-6 rounded-md font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
