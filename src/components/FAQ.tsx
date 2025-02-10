import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What makes Aurora different from other companies?',
    answer: 'Our unique approach combines cutting-edge technology with user-centric design, ensuring that every solution we create adds real value to our users\' lives.',
  },
  {
    question: 'How do you ensure data privacy and security?',
    answer: 'We implement state-of-the-art encryption and security measures, following industry best practices and compliance standards to protect user data.',
  },
  {
    question: 'Can I integrate Aurora services with my existing systems?',
    answer: 'Yes, our services are designed with integration in mind, featuring comprehensive APIs and documentation to ensure seamless connectivity.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: '24/7 technical support, dedicated account managers, and comprehensive documentation are available to all our enterprise clients.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="courier-prime-regular text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-900" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-900" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}