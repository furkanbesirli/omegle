"use client"
import React, { useEffect, useState } from 'react'

const Faqs = () => {
  interface IFaqItem {
    _id: string;
    question: string;
    answer: string;
    blogId?: string;
  }

  const [faqs, setFaqs] = useState<IFaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      const res = await fetch('/api/faqs');
      const data = await res.json();
      const filteredFaqs = data.filter((faq: IFaqItem) => !faq.blogId);
      setFaqs(filteredFaqs);
    };

    fetchFaqs();
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };



  return (
      
    

    <div className="mt-12">
      
      <div>
        {faqs.map((item) => (
          <div key={item._id} className="py-2">
            <button
            title='Title'
              className="flex items-center justify-between w-full py-2 px-4 text-left bg-white rounded-t-lg shadow-lg focus:outline-none focus:ring focus:ring-black"
              onClick={() => toggleFaq(item._id)}
            >
              <span className="text-xl font-semibold">{item.question}</span>
              <svg
                className="w-6 h-6 text-black transform transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: openIndex === item._id ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path
                  d="M5 15l7-7 7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openIndex === item._id && (
              <div className="flex items-center justify-between w-full py-2 px-4 text-left font-bold rounded-b-lg shadow-lg bg-gray-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;