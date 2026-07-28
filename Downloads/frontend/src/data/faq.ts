// frontend/src/data/faq.ts

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "Do you work remotely?",
    answer:
      "Yes. We work with businesses all across Australia through secure, cloud-based systems.",
  },
  {
    category: "General",
    question: "Which software do you use?",
    answer: "We work with Xero, MYOB and QuickBooks, and can set up and train your team on any of them.",
  },
  {
    category: "Bookkeeping",
    question: "Can you help if my books are behind?",
    answer: "Yes. We can help organise and update your bookkeeping records, however far behind they are.",
  },
  {
    category: "Business Setup",
    question: "Can you help me start a business?",
    answer:
      "Yes. We can assist with business planning, software setup, and administrative support to get you started on the right track.",
  },
];
