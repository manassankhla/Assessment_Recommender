
export interface Assessment {
  id: string;
  name: string;
  url: string;
  remoteTestingSupport: boolean;
  adaptiveSupport: boolean;
  duration: string;
  testType: string;
  description: string;
  keywords: string[];
}

export const assessments: Assessment[] = [
  {
    id: "1",
    name: "SHL Verify Cognitive Ability Test",
    url: "https://www.shl.com/solutions/products/product-catalog/verify-cognitive-ability-tests/",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "15-30 minutes",
    testType: "Cognitive Ability",
    description: "Measures critical reasoning through verbal, numerical and inductive tests",
    keywords: ["reasoning", "cognitive", "problem-solving", "analytical", "intelligence", "logic", "critical thinking"]
  },
  {
    id: "2",
    name: "SHL Verify Personality Questionnaire",
    url: "https://www.shl.com/solutions/products/product-catalog/verify-personality-questionnaire/",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "25-35 minutes",
    testType: "Personality",
    description: "Assesses workplace behaviors and preferences through personality testing",
    keywords: ["personality", "behaviors", "traits", "workplace fit", "team dynamics", "strengths", "work style"]
  },
  {
    id: "3",
    name: "SHL Coding Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/coding-assessments/",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "30-60 minutes",
    testType: "Technical Skills",
    description: "Evaluates coding abilities in multiple programming languages",
    keywords: ["coding", "programming", "software", "development", "technical", "engineering", "computer science"]
  },
  {
    id: "4",
    name: "SHL Situational Judgment Test",
    url: "https://www.shl.com/solutions/products/product-catalog/situational-judgement-test/",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "20-30 minutes",
    testType: "Judgment",
    description: "Assesses judgment and decision-making in workplace scenarios",
    keywords: ["judgment", "decision-making", "scenarios", "workplace", "situational", "problem-solving", "critical thinking"]
  },
  {
    id: "5",
    name: "SHL Sales Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/sales-assessments/",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "35-45 minutes",
    testType: "Role-specific",
    description: "Evaluates sales abilities, motivation and potential",
    keywords: ["sales", "business development", "account management", "negotiation", "customer", "persuasion", "revenue"]
  },
  {
    id: "6",
    name: "SHL Leadership Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/leadership-assessments/",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "40-60 minutes",
    testType: "Leadership",
    description: "Identifies leadership potential and capabilities across different levels",
    keywords: ["leadership", "management", "executive", "strategic", "people management", "vision", "direction"]
  },
  {
    id: "7",
    name: "SHL Workplace English Test",
    url: "https://www.shl.com/solutions/products/product-catalog/workplace-english-test/",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "30-40 minutes",
    testType: "Language Proficiency",
    description: "Measures English language proficiency in workplace contexts",
    keywords: ["english", "language", "communication", "writing", "reading", "comprehension", "international"]
  },
  {
    id: "8",
    name: "SHL Behavioral Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/behavioral-assessments/",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "20-30 minutes",
    testType: "Behavioral",
    description: "Predicts job performance based on past behavioral patterns",
    keywords: ["behavior", "performance", "workplace", "habits", "patterns", "consistency", "predictors"]
  },
  {
    id: "9",
    name: "SHL Microsoft Office Test",
    url: "https://www.shl.com/solutions/products/product-catalog/microsoft-office-skills-tests/",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "15-25 minutes",
    testType: "Technical Skills",
    description: "Assesses proficiency in Microsoft Office applications",
    keywords: ["microsoft", "office", "excel", "word", "powerpoint", "technical", "computer skills", "software"]
  },
  {
    id: "10",
    name: "SHL Remote Work Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/remote-work-assessment/",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "25-35 minutes",
    testType: "Work Style",
    description: "Evaluates capability and suitability for remote working environments",
    keywords: ["remote", "work from home", "virtual", "distributed teams", "autonomous", "self-motivated", "digital"]
  },
  {
    id: "11",
    name: "SHL Customer Service Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/customer-service-assessment/",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "30-40 minutes",
    testType: "Role-specific",
    description: "Measures customer service skills and aptitude",
    keywords: ["customer service", "support", "client", "service desk", "helpdesk", "communication", "problem resolution"]
  },
  {
    id: "12",
    name: "SHL Numerical Reasoning Test",
    url: "https://www.shl.com/solutions/products/product-catalog/numerical-reasoning-test/",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "20-30 minutes",
    testType: "Cognitive Ability",
    description: "Assesses ability to analyze and interpret numerical data",
    keywords: ["numerical", "numbers", "data", "analytics", "mathematics", "statistics", "quantitative"]
  },
  {
    id: "13",
    name: "SHL Verbal Reasoning Test",
    url: "https://www.shl.com/solutions/products/product-catalog/verbal-reasoning-test/",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "20-30 minutes",
    testType: "Cognitive Ability",
    description: "Measures verbal comprehension and critical reasoning skills",
    keywords: ["verbal", "language", "comprehension", "critical", "reasoning", "writing", "reading"]
  },
  {
    id: "14",
    name: "SHL Mechanical Comprehension Test",
    url: "https://www.shl.com/solutions/products/product-catalog/mechanical-comprehension-test/",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "25-35 minutes",
    testType: "Technical Skills",
    description: "Assesses understanding of mechanical concepts and principles",
    keywords: ["mechanical", "engineering", "technical", "machinery", "physics", "practical", "manufacturing"]
  },
  {
    id: "15",
    name: "SHL Inductive Reasoning Test",
    url: "https://www.shl.com/solutions/products/product-catalog/inductive-reasoning-test/",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "15-25 minutes",
    testType: "Cognitive Ability",
    description: "Evaluates logical thinking and pattern recognition abilities",
    keywords: ["inductive", "logical", "patterns", "abstract", "problem-solving", "sequences", "analytics"]
  }
];
