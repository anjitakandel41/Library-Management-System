// frontend/src/data/services.ts

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  fullDescription?: string;
  features: string[];
  benefits?: string[];
}

export const services: Service[] = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    slug: 'bookkeeping',
    description: 'Keeping your financial records accurate and organised.',
    icon: 'BookOpen',
    fullDescription: 'We provide comprehensive bookkeeping services to keep your financial records accurate, organised, and up-to-date. Our team ensures that every transaction is properly recorded, making tax time and business decisions easier.',
    features: [
      'Daily bookkeeping',
      'Bank reconciliations',
      'Accounts payable',
      'Accounts receivable',
      'Invoice processing',
      'Expense recording',
      'Financial data entry',
      'Bookkeeping clean-up',
      'Monthly bookkeeping',
      'End-of-year preparation'
    ],
    benefits: [
      'Accurate financial records',
      'Save time on paperwork',
      'Better business decisions',
      'Stress-free tax preparation'
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll Administration',
    slug: 'payroll',
    description: 'Helping you manage employee payroll efficiently.',
    icon: 'Users',
    fullDescription: 'Our payroll administration services ensure your employees are paid accurately and on time. We handle all the complex calculations, tax withholdings, and compliance requirements.',
    features: [
      'Payroll processing',
      'Payslip preparation',
      'Leave management',
      'Employee records',
      'Payroll reporting',
      'New employee setup'
    ],
    benefits: [
      'Accurate employee payments',
      'Compliance with regulations',
      'Time-saving automation',
      'Professional payslips'
    ],
  },
  {
    id: 'consulting',
    title: 'Business Consulting',
    slug: 'consulting',
    description: 'Helping businesses improve efficiency and profitability.',
    icon: 'TrendingUp',
    fullDescription: 'Our business consulting services help you identify opportunities for growth and efficiency. We work with you to develop strategies that improve your bottom line.',
    features: [
      'Business planning',
      'Budget preparation',
      'Cash flow management',
      'Business performance analysis',
      'Business strategy',
      'Process improvement'
    ],
    benefits: [
      'Improved profitability',
      'Clear business strategy',
      'Better cash flow management',
      'Operational efficiency'
    ],
  },
  {
    id: 'software',
    title: 'Software Support',
    slug: 'software',
    description: 'Specialising in cloud accounting software setup and training.',
    icon: 'Cloud',
    fullDescription: 'We specialise in setting up and training you on cloud accounting software like Xero, MYOB, and QuickBooks.',
    features: [
      'Xero setup',
      'MYOB setup',
      'QuickBooks setup',
      'Software migration',
      'Chart of accounts setup',
      'User training'
    ],
    benefits: [
      'Efficient software setup',
      'Proper Chart of Accounts',
      'Seamless data migration',
      'Confident software usage'
    ],
  },
  {
    id: 'admin-support',
    title: 'Admin Support',
    slug: 'admin-support',
    description: 'Helping businesses stay organised and efficient.',
    icon: 'FolderKanban',
    fullDescription: 'Our business administration support services help you stay organised and efficient. From document management to workflow support.',
    features: [
      'Document management',
      'Business administration',
      'Filing systems',
      'Record keeping',
      'Workflow support'
    ],
    benefits: [
      'Organised documentation',
      'Efficient workflows',
      'Better record keeping',
      'Compliance ready'
    ],
  },
  {
    id: 'cash-flow',
    title: 'Cash Flow Management',
    slug: 'cash-flow',
    description: 'Optimise your business cash flow for better financial health.',
    icon: 'DollarSign',
    fullDescription: 'Our cash flow management services help you maintain healthy cash flow to keep your business running smoothly.',
    features: [
      'Cash flow forecasting',
      'Cash flow analysis',
      'Payment terms optimisation',
      'Accounts receivable management',
      'Working capital management'
    ],
    benefits: [
      'Better cash flow visibility',
      'Reduced financial stress',
      'Informed decision making',
      'Improved liquidity'
    ],
  },
  {
    id: 'registration',
    title: 'Business Registration Support',
    slug: 'registration',
    description: 'ABN, TFN and business setup assistance for new ventures.',
    icon: 'FileText',
    fullDescription: 'Starting a business involves plenty of paperwork before you make a single sale. We handle the registration and setup steps so you can open your doors with everything in order.',
    features: [
      'Business registration support',
      'ABN application assistance',
      'TFN application assistance',
      'Business structure guidance',
      'Initial software and systems setup'
    ],
    benefits: [
      'A compliant start from day one',
      'Less paperwork to navigate alone',
      'Systems set up correctly the first time',
      'A clear next-steps plan'
    ],
  }
];