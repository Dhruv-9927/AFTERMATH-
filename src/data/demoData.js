// Comprehensive demo data for all AFTERMATH features

export const DEMO_USER = {
  name: 'Rahul Sharma',
  age: 28,
  city: 'Bangalore',
  income: 85000,
  monthlyIncome: 85000,
  expenses: 55000,
  monthlyExpenses: 55000,
  emergencyFund: 200000,
  termInsurance: false,
  healthInsurance: 'employer only',
  mutualFunds: 50000,
  investments: 50000,
  fd: 0,
  stocks: 0,
  gold: 0,
  debt: 300000,
  debtAmount: 300000,
  emi: 10300,
  savingsAccount: 120000,
  jobTitle: 'Software Engineer',
  companyType: 'Product',
  yearsExperience: 5,
};

export const DEMO_HEALTH_SCORE = {
  score: 72,
  dimensions: [
    { name: 'Emergency Fund', score: 55, max: 100, desc: 'Covers 3.6 months — needs 6 months minimum' },
    { name: 'Insurance', score: 30, max: 100, desc: 'No term insurance, only employer health coverage' },
    { name: 'Debt Health', score: 65, max: 100, desc: '₹3L personal loan at 12%, EMI ₹10,300' },
    { name: 'Investment Rate', score: 75, max: 100, desc: 'Saving 35% of income — solid but can optimize' },
    { name: 'Tax Efficiency', score: 40, max: 100, desc: 'Not utilizing 80C/80D fully' },
    { name: 'Retirement Readiness', score: 60, max: 100, desc: 'SIP ₹50K/mo, need ₹5Cr for FIRE at 45' },
  ],
  actions: [
    { title: 'Open a PPF Account', desc: 'Start ₹500/mo in PPF for tax-free 80C savings', priority: 'high' },
    { title: 'Buy ₹1Cr Term Insurance', desc: 'Premium ~₹700/mo at age 28 — protect your family', priority: 'critical' },
    { title: 'Increase SIP by ₹5K', desc: 'Take it from ₹50K to ₹55K — adds ₹42L over 20 years', priority: 'medium' },
  ],
};

export const DEMO_PERSONALITY = {
  type: 'Balanced Builder',
  emoji: '🏗️',
  description: 'You are methodical and disciplined. You save consistently but sometimes miss aggressive wealth-building opportunities.',
  strengths: ['Consistent saver', 'Low debt tolerance', 'Emergency fund conscious'],
  weaknesses: ['Under-invested in equity', 'Missing tax optimizations', 'No insurance safety net'],
};

// Couples Mode demo
export const DEMO_COUPLES = {
  partner1: { name: 'Rahul', income: '85000', investments: '25000', sec80c: '50000', hra: 'paying' },
  partner2: { name: 'Priya', income: '65000', investments: '15000', sec80c: '30000', hra: 'none' },
};

// Budget Roast demo
export const DEMO_BUDGET = {
  foodDelivery: 8000,
  shopping: 6000,
  subscriptions: 2500,
  travel: 5000,
  groceries: 7000,
  fuel: 3000,
  entertainment: 4000,
  others: 5000,
};

// Salary Coach demo
export const DEMO_SALARY = {
  currentSalary: 85000,
  jobTitle: 'Software Engineer',
  companyType: 'Product Startup',
  city: 'Bangalore',
  experience: 5,
};

// Fear Index demo
export const DEMO_FEAR = {
  answers: [3, 4, 2, 5, 3, 4, 2, 3, 4, 2],
  profile: 'The Cautious Planner',
};

// Regret Engine demo  
export const DEMO_REGRET = {
  income: 75000,
  selectedScenario: 'no_sip',
};

// Time Machine demo
export const DEMO_TIME_MACHINE = {
  year: 2015,
  investment: 10000,
};

// Crore Challenge demo
export const DEMO_CRORE = {
  currentAge: 28,
  monthlySIP: 25000,
  existingCorpus: 200000,
};

// Passive Income demo
export const DEMO_PASSIVE = {
  monthlyExpenses: 55000,
  fdCorpus: 500000,
  rentalIncome: 0,
  dividendCorpus: 200000,
  sipCorpus: 600000,
};

// Real Estate vs SIP demo
export const DEMO_RE_VS_SIP = {
  propertyPrice: 5000000,
  downPayment: 1000000,
  loanRate: 8.5,
  sipAmount: 30000,
  sipReturn: 12,
  years: 20,
};

// Generational Wealth demo
export const DEMO_GENERATIONAL = {
  currentAge: 28,
  monthlySIP: 25000,
  childStartAge: 30,
};

// Inflation Monster demo
export const DEMO_INFLATION = {
  savingsAmount: 500000,
  inflationRate: 6.5,
};

// Full demo state for AppContext
export function loadFullDemoState(dispatch) {
  dispatch({ type: 'SET_USER_DATA', payload: DEMO_USER });
  dispatch({ type: 'SET_HEALTH_SCORE', payload: DEMO_HEALTH_SCORE });
  dispatch({ type: 'SET_PERSONALITY', payload: DEMO_PERSONALITY });
  dispatch({ type: 'COMPLETE_ONBOARDING' });
  dispatch({ type: 'SET_DEMO_DATA', payload: {
    couples: DEMO_COUPLES,
    budget: DEMO_BUDGET,
    salary: DEMO_SALARY,
    fear: DEMO_FEAR,
    regret: DEMO_REGRET,
    timeMachine: DEMO_TIME_MACHINE,
    crore: DEMO_CRORE,
    passive: DEMO_PASSIVE,
    reVsSip: DEMO_RE_VS_SIP,
    generational: DEMO_GENERATIONAL,
    inflation: DEMO_INFLATION,
  }});
}
