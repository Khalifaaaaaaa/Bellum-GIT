export type MockCredit = {
  value: string;
  label: string;
  note: string;
};

export type DashboardAction = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export type QuizOption = {
  label: "A" | "B" | "C" | "D";
  text: string;
};

export type QuizQuestion = {
  id: string;
  title: string;
  track: "Pre-Med / Basic Sciences" | "Medical School / Clinical Medicine";
  conceptTag: string;
  difficulty: string;
  stem: string;
  options: QuizOption[];
  correctAnswer: "A" | "B" | "C" | "D";
  correctAnswerText: string;
  correctExplanation: string;
  trapExplanation: string;
  reviewPrompt: string;
  qaStatus: string;
};

export const heroStats = [
  {
    value: "4",
    label: "choices per MCQ for cleaner validation and stronger distractors"
  },
  {
    value: "2",
    label: "starting tracks: Pre-Med Basic Sciences and Clinical Medicine"
  },
  {
    value: "0",
    label: "real AI calls in Phase 1; seeded content only"
  },
  {
    value: "1",
    label: "future free-trial Standard Quiz with strict limits"
  }
];

export const mockCredits: MockCredit[] = [
  {
    value: "1",
    label: "Free Trial Standard Quiz",
    note: "Future real trial credit. Mock only in Phase 1."
  },
  {
    value: "30",
    label: "Daily Studio Standard Quizzes",
    note: "Future $10 plan teaser with backend-enforced caps."
  },
  {
    value: "10",
    label: "Power Academic Deep Exam Credits",
    note: "Future $20 plan separation to protect margins."
  }
];

export const dashboardActions: DashboardAction[] = [
  {
    eyebrow: "Start here",
    title: "Generate Quiz",
    description:
      "Open the upload and quiz setup shell. PDF validation and simulated processing are intentionally saved for Phase 3.",
    href: "/generate",
    cta: "Open generator"
  },
  {
    eyebrow: "Seeded route",
    title: "Demo Quiz",
    description:
      "Preview the Bellum question style with mock pre-med and clinical medicine items.",
    href: "/demo-quiz",
    cta: "View questions"
  },
  {
    eyebrow: "Review loop",
    title: "Mistake Log",
    description:
      "See how missed concepts and trap patterns will later become targeted review prompts.",
    href: "/mistake-log",
    cta: "Open mistake log"
  },
  {
    eyebrow: "Locked premium",
    title: "Deep Exam Leaderboard",
    description:
      "Preview the ranked Deep Exam surface without enabling leaderboard scoring too early.",
    href: "/leaderboard",
    cta: "Preview locked board"
  }
];

export const sampleQuestions: QuizQuestion[] = [
  {
    id: "clinical-rv-infarct",
    title: "Inferior MI with right ventricular involvement",
    track: "Medical School / Clinical Medicine",
    conceptTag: "Cardiology · MI localization",
    difficulty: "Exam-style hard",
    stem:
      "A 64-year-old patient develops crushing substernal chest pain. ECG shows ST elevations in leads II, III, and aVF. Blood pressure is 86/58 mmHg, jugular venous pressure is elevated, and the lungs are clear. Which finding best supports the suspected associated complication?",
    options: [
      {
        label: "A",
        text: "Diffuse pulmonary crackles from acute left-sided failure"
      },
      {
        label: "B",
        text: "Hypotension that worsens after nitrate administration"
      },
      {
        label: "C",
        text: "Wide pulse pressure with early diastolic murmur"
      },
      {
        label: "D",
        text: "Pleuritic chest pain relieved by leaning forward"
      }
    ],
    correctAnswer: "B",
    correctAnswerText: "Hypotension that worsens after nitrate administration",
    correctExplanation:
      "Inferior MI can involve the right ventricle. Right ventricular infarction is preload-dependent, so nitrates can worsen hypotension by reducing venous return.",
    trapExplanation:
      "The tempting mistake is treating all MI-related hypotension as left-sided pump failure. Clear lungs plus elevated JVP points away from pulmonary edema and toward right ventricular involvement.",
    reviewPrompt:
      "Review inferior MI localization, right ventricular infarction, preload dependence, and nitrate caution.",
    qaStatus: "Seeded QA"
  },
  {
    id: "premed-enzyme-kinetics",
    title: "Competitive inhibition and Km shift",
    track: "Pre-Med / Basic Sciences",
    conceptTag: "Biochemistry · Enzyme kinetics",
    difficulty: "Application",
    stem:
      "A researcher adds a reversible inhibitor to an enzyme reaction. The reaction reaches the same maximum velocity as before, but only after a much higher substrate concentration is added. Which kinetic change best explains this observation?",
    options: [
      {
        label: "A",
        text: "Decreased Km with unchanged Vmax"
      },
      {
        label: "B",
        text: "Increased Km with unchanged Vmax"
      },
      {
        label: "C",
        text: "Unchanged Km with decreased Vmax"
      },
      {
        label: "D",
        text: "Increased Km with decreased Vmax"
      }
    ],
    correctAnswer: "B",
    correctAnswerText: "Increased Km with unchanged Vmax",
    correctExplanation:
      "Competitive inhibitors can be overcome by increasing substrate concentration, so Vmax is unchanged. More substrate is required to reach half-maximal velocity, so apparent Km increases.",
    trapExplanation:
      "The trap is confusing competitive inhibition with noncompetitive inhibition. Noncompetitive inhibition lowers Vmax, while competitive inhibition mainly shifts apparent Km.",
    reviewPrompt:
      "Review how competitive, noncompetitive, and uncompetitive inhibitors affect Km and Vmax.",
    qaStatus: "Seeded QA"
  },
  {
    id: "clinical-micro-drug-trap",
    title: "Atypical pneumonia mechanism trap",
    track: "Medical School / Clinical Medicine",
    conceptTag: "Microbiology · Treatment reasoning",
    difficulty: "Clinical application",
    stem:
      "A college student has a persistent dry cough, low-grade fever, and patchy interstitial infiltrates. The organism lacks a cell wall. Which treatment mechanism is most appropriate?",
    options: [
      {
        label: "A",
        text: "Inhibition of peptidoglycan cross-linking"
      },
      {
        label: "B",
        text: "Disruption of ergosterol synthesis"
      },
      {
        label: "C",
        text: "Inhibition of protein synthesis at the ribosome"
      },
      {
        label: "D",
        text: "Inhibition of viral neuraminidase"
      }
    ],
    correctAnswer: "C",
    correctAnswerText: "Inhibition of protein synthesis at the ribosome",
    correctExplanation:
      "Mycoplasma pneumoniae lacks a cell wall, making beta-lactams ineffective. Macrolides or doxycycline target protein synthesis.",
    trapExplanation:
      "The trap is reflexively choosing a cell-wall agent for pneumonia. The phrase lacks a cell wall is the clue that rules out peptidoglycan-targeting therapy.",
    reviewPrompt:
      "Review atypical pneumonia organisms, Mycoplasma features, and antibiotic mechanism matching.",
    qaStatus: "Seeded QA"
  }
];

export const mistakeLogPreview = [
  {
    track: "Clinical Medicine",
    concept: "MI localization vs complication",
    summary:
      "Missed questions suggest confusion between left-sided pulmonary edema and right ventricular preload-dependent shock.",
    missed: 2
  },
  {
    track: "Basic Sciences",
    concept: "Km and Vmax interpretation",
    summary:
      "Pattern suggests mixing up competitive and noncompetitive enzyme inhibition.",
    missed: 1
  },
  {
    track: "Microbiology",
    concept: "Organism structure → drug mechanism",
    summary:
      "Trap pattern shows antibiotic choices are being made by disease name rather than organism feature.",
    missed: 1
  }
];

export const leaderboardPreview = [
  {
    rank: 1,
    name: "Aster",
    region: "Southeast Asia",
    points: 984
  },
  {
    rank: 2,
    name: "Blue Atlas",
    region: "Middle East",
    points: 941
  },
  {
    rank: 3,
    name: "MedForge",
    region: "Global",
    points: 918
  },
  {
    rank: 4,
    name: "CardioClerk",
    region: "North America",
    points: 887
  }
];