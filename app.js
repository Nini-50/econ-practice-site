const practiceParts = [
  {
    id: "part-1",
    title: "Part I: Foundations of Economics",
    description: "Core models, scarcity, choice, and the logic of trade.",
    questions: [
      {
        id: "q1",
        topic: "Core Principles of Economics",
        type: "multiple-choice",
        prompt: "Which statement best reflects the core idea of economics?",
        options: [
          "Resources are unlimited, so markets mainly solve distribution problems.",
          "People make choices under scarcity, so every decision involves tradeoffs.",
          "Governments always allocate resources more efficiently than markets.",
          "Economic growth eliminates the need for choice."
        ],
        answer: 1,
        explanation: "Economics studies how people and societies allocate scarce resources. Scarcity forces choices, and choices create tradeoffs."
      },
      {
        id: "q2",
        topic: "Opportunity Cost and Economic Decision-Making",
        type: "short-answer",
        prompt: "A student can spend Saturday working for $90 or studying for an exam instead. If the student studies, what is the opportunity cost in dollars?",
        answers: ["90", "$90"],
        explanation: "The opportunity cost is the value of the next-best alternative forgone: the $90 the student could have earned."
      },
      {
        id: "q3",
        topic: "Absolute Advantage, Comparative Advantage, and Trade",
        type: "multiple-choice",
        prompt: "Country A can produce either 10 cars or 20 computers. Country B can produce either 6 cars or 18 computers. Who has the comparative advantage in cars?",
        options: [
          "Country A, because it can produce more cars absolutely.",
          "Country B, because its opportunity cost of producing a car is lower.",
          "Both countries have the same comparative advantage in cars.",
          "Neither country, because trade only depends on absolute advantage."
        ],
        answer: 1,
        explanation: "Country A gives up 2 computers per car, while Country B gives up 3 computers per car. The lower opportunity cost means Country A has comparative advantage in cars."
      }
    ]
  },
  {
    id: "part-2",
    title: "Part II: Where Consumers and Producers Meet",
    description: "Market equilibrium, elasticity, and welfare outcomes.",
    questions: [
      {
        id: "q4",
        topic: "Supply, Demand, and the Market Equilibrium",
        type: "true-false",
        prompt: "If demand increases while supply stays constant, equilibrium price rises.",
        answer: true,
        explanation: "A rightward shift in demand increases both equilibrium price and equilibrium quantity when supply is unchanged."
      },
      {
        id: "q5",
        topic: "Demand & Supply Elasticity",
        type: "multiple-choice",
        prompt: "A 10% increase in price causes quantity demanded to fall by 30%. Demand is:",
        options: [
          "Perfectly inelastic",
          "Inelastic",
          "Unit elastic",
          "Elastic"
        ],
        answer: 3,
        explanation: "Elasticity in absolute value is 30% / 10% = 3, which is greater than 1, so demand is elastic."
      },
      {
        id: "q6",
        topic: "Market Efficiency & Social Welfare",
        type: "multi-select",
        prompt: "Which outcomes are typically associated with a perfectly competitive market at equilibrium?",
        options: [
          "Maximized total surplus",
          "No deadweight loss from underproduction or overproduction",
          "Guaranteed equality of income",
          "Trades occur up to the point where marginal benefit equals marginal cost"
        ],
        answers: [0, 1, 3],
        explanation: "Competitive equilibrium is efficient in the welfare sense because it maximizes total surplus, but it does not guarantee income equality."
      }
    ]
  },
  {
    id: "part-3",
    title: "Part III: When the Government Might Need to Step In",
    description: "Policy tools, redistribution, public goods, and market failures.",
    questions: [
      {
        id: "q7",
        topic: "Government Interventions in Markets",
        type: "multiple-choice",
        prompt: "A binding price ceiling set below equilibrium generally causes:",
        options: [
          "A surplus",
          "A shortage",
          "No change in the market",
          "A rise in producer surplus only"
        ],
        answer: 1,
        explanation: "A price ceiling below equilibrium reduces the price and increases quantity demanded while reducing quantity supplied, creating a shortage."
      },
      {
        id: "q8",
        topic: "Inequality, Poverty, and the Welfare State",
        type: "true-false",
        prompt: "Transfer programs can reduce measured income inequality even if market incomes do not change.",
        answer: true,
        explanation: "Transfers affect disposable income, so inequality after taxes and transfers can fall even if pre-transfer earnings remain unchanged."
      },
      {
        id: "q9",
        topic: "Public Goods",
        type: "multiple-choice",
        prompt: "Which good is most likely to be a public good?",
        options: [
          "A private tutoring session",
          "National defense",
          "A sandwich",
          "A movie ticket"
        ],
        answer: 1,
        explanation: "National defense is non-rival and non-excludable, which are the key characteristics of a public good."
      },
      {
        id: "q10",
        topic: "Positive and Negative Externalities",
        type: "multi-select",
        prompt: "Which policies can help correct a negative externality from pollution?",
        options: [
          "A Pigouvian tax on emissions",
          "Tradable pollution permits",
          "A subsidy for each unit of pollution created",
          "Direct regulation that caps emissions"
        ],
        answers: [0, 1, 3],
        explanation: "Taxes, permits, and direct limits all internalize or constrain the external cost. Subsidizing pollution moves the market in the wrong direction."
      }
    ]
  },
  {
    id: "part-4",
    title: "Part IV: Behind the Demand Curve - Consumer Theory",
    description: "Utility, constraints, optimization, and choices under uncertainty.",
    questions: [
      {
        id: "q11",
        topic: "Utility Functions and Budget Sets",
        type: "multiple-choice",
        prompt: "If a consumer's income doubles and all prices stay the same, the budget set:",
        options: [
          "Shifts inward",
          "Rotates inward",
          "Shifts outward in a parallel way",
          "Does not change"
        ],
        answer: 2,
        explanation: "With higher income and unchanged prices, the consumer can afford more of both goods, so the budget line shifts outward in parallel."
      },
      {
        id: "q12",
        topic: "Optimal Consumer Decisions",
        type: "short-answer",
        prompt: "At an interior optimum, consumers choose bundles where MUx/Px equals what ratio for good y?",
        answers: ["muy/py", "mu_y/p_y", "muy / py", "marginal utility of y divided by price of y"],
        explanation: "The equal marginal utility per dollar rule says MUx/Px = MUy/Py at an interior optimum."
      },
      {
        id: "q13",
        topic: "Risk and Uncertainty",
        type: "true-false",
        prompt: "A risk-averse person always prefers a certain payoff equal to the expected value of a risky gamble.",
        answer: true,
        explanation: "By definition, a risk-averse person prefers certainty to a fair gamble with the same expected value."
      }
    ]
  },
  {
    id: "part-5",
    title: "Part V: Behind the Supply Curve - Theory of the Firm",
    description: "Costs, output choices, and how firms respond in different horizons.",
    questions: [
      {
        id: "q14",
        topic: "Costs, Revenues, Profits",
        type: "multiple-choice",
        prompt: "Economic profit differs from accounting profit because economic profit subtracts:",
        options: [
          "Only variable costs",
          "Implicit and explicit costs",
          "Only taxes",
          "Only sunk costs"
        ],
        answer: 1,
        explanation: "Economic profit includes both explicit costs and opportunity costs, including implicit costs."
      },
      {
        id: "q15",
        topic: "Optimal Production Decisions",
        type: "true-false",
        prompt: "A profit-maximizing firm produces where marginal revenue equals marginal cost, provided price covers shutdown conditions when relevant.",
        answer: true,
        explanation: "The core profit-maximization condition is MR = MC, subject to staying open only when variable costs can be covered in the short run."
      },
      {
        id: "q16",
        topic: "Short Run, Long Run, and Market Supply",
        type: "multi-select",
        prompt: "Which statements are true about the long run?",
        options: [
          "All inputs are variable",
          "Firms can enter or exit the market",
          "At least one input is fixed",
          "Competitive firms may earn zero economic profit in equilibrium"
        ],
        answers: [0, 1, 3],
        explanation: "In the long run all inputs are variable, entry and exit occur, and competitive equilibrium can drive economic profit to zero."
      }
    ]
  },
  {
    id: "part-6",
    title: "Part VI: Market Power and Strategic Interactions",
    description: "Imperfect competition, monopoly, product differentiation, and game theory.",
    questions: [
      {
        id: "q17",
        topic: "From Perfect Competition to Monopoly",
        type: "multiple-choice",
        prompt: "Compared with a perfectly competitive market, a monopolist typically produces:",
        options: [
          "More output at a lower price",
          "Less output at a higher price",
          "The same output at the same price",
          "Less output at a lower price"
        ],
        answer: 1,
        explanation: "Monopoly restricts output and raises price relative to the competitive benchmark, creating deadweight loss."
      },
      {
        id: "q18",
        topic: "Monopolies and Why They May Arise",
        type: "multi-select",
        prompt: "Which factors can create or protect a monopoly?",
        options: [
          "Control of a key resource",
          "Government-granted patent protection",
          "Strong economies of scale over the relevant market range",
          "Perfectly free entry with no barriers"
        ],
        answers: [0, 1, 2],
        explanation: "Monopolies can arise from resource control, legal barriers like patents, and natural monopoly conditions. Free entry works against monopoly power."
      },
      {
        id: "q19",
        topic: "Monopolistic Competition",
        type: "true-false",
        prompt: "In monopolistic competition, firms sell differentiated products and face downward-sloping demand curves.",
        answer: true,
        explanation: "Product differentiation gives each firm some market power, so its demand curve slopes downward."
      },
      {
        id: "q20",
        topic: "Oligopolies and Game Theory",
        type: "multiple-choice",
        prompt: "In the classic prisoner's dilemma, the outcome that is individually rational but collectively worse is:",
        options: [
          "Both players cooperate",
          "Both players defect",
          "One cooperates and the other defects forever",
          "Both players randomize equally"
        ],
        answer: 1,
        explanation: "Defection is the dominant strategy in the one-shot prisoner's dilemma, even though mutual cooperation would make both better off."
      }
    ]
  }
];

const partNav = document.getElementById("partNav");
const partsContainer = document.getElementById("partsContainer");
const partFilter = document.getElementById("partFilter");
const showAllBtn = document.getElementById("showAllBtn");
const questionCount = document.getElementById("questionCount");
const topicCount = document.getElementById("topicCount");
const answeredCount = document.getElementById("answeredCount");
const correctCount = document.getElementById("correctCount");
const accuracyRate = document.getElementById("accuracyRate");
const questionTemplate = document.getElementById("questionTemplate");

const results = {};
let currentFilter = "all";

function countTopics() {
  return new Set(practiceParts.flatMap(part => part.questions.map(question => question.topic))).size;
}

function renderNav() {
  partNav.innerHTML = "";
  practiceParts.forEach(part => {
    const link = document.createElement("a");
    link.className = "part-link";
    link.href = `#${part.id}`;
    link.textContent = part.title;
    link.addEventListener("click", event => {
      event.preventDefault();
      currentFilter = part.id;
      renderParts();
      updateActiveLinks();
      partFilter.value = part.id;
      const target = document.getElementById(part.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    partNav.appendChild(link);
  });
}

function renderFilter() {
  partFilter.innerHTML = "";
  const allOption = new Option("All parts", "all");
  partFilter.appendChild(allOption);
  practiceParts.forEach(part => {
    partFilter.appendChild(new Option(part.title, part.id));
  });

  partFilter.addEventListener("change", event => {
    currentFilter = event.target.value;
    renderParts();
    updateActiveLinks();
  });
}

function updateActiveLinks() {
  const links = partNav.querySelectorAll(".part-link");
  links.forEach((link, index) => {
    const isActive = practiceParts[index].id === currentFilter;
    link.classList.toggle("is-active", isActive);
  });
}

function renderParts() {
  partsContainer.innerHTML = "";
  const visibleParts = currentFilter === "all"
    ? practiceParts
    : practiceParts.filter(part => part.id === currentFilter);

  visibleParts.forEach(part => {
    const section = document.createElement("section");
    section.className = "part-section";
    section.id = part.id;

    const header = document.createElement("div");
    header.className = "part-section__header";
    header.innerHTML = `<h2>${part.title}</h2><p>${part.description}</p>`;
    section.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "questions-grid";

    part.questions.forEach(question => {
      grid.appendChild(renderQuestion(question));
    });

    section.appendChild(grid);
    partsContainer.appendChild(section);
  });
}

function renderQuestion(question) {
  const fragment = questionTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".question-card");
  const topic = fragment.querySelector(".question-card__topic");
  const prompt = fragment.querySelector(".question-card__prompt");
  const type = fragment.querySelector(".question-card__type");
  const body = fragment.querySelector(".question-card__body");
  const checkBtn = fragment.querySelector(".check-btn");
  const resetBtn = fragment.querySelector(".reset-btn");
  const feedback = fragment.querySelector(".feedback");

  card.dataset.questionId = question.id;
  topic.textContent = question.topic;
  prompt.textContent = question.prompt;
  type.textContent = formatType(question.type);

  if (question.type === "multiple-choice") {
    question.options.forEach((optionText, optionIndex) => {
      body.appendChild(buildOption(question.id, "radio", optionText, optionIndex));
    });
  } else if (question.type === "multi-select") {
    question.options.forEach((optionText, optionIndex) => {
      body.appendChild(buildOption(question.id, "checkbox", optionText, optionIndex));
    });
  } else if (question.type === "true-false") {
    body.appendChild(buildOption(question.id, "radio", "True", "true"));
    body.appendChild(buildOption(question.id, "radio", "False", "false"));
  } else if (question.type === "short-answer") {
    const input = document.createElement("input");
    input.type = "text";
    input.name = question.id;
    input.placeholder = "Type your answer here";
    body.appendChild(input);
  }

  checkBtn.addEventListener("click", () => {
    const evaluation = evaluateQuestion(question, body);
    if (!evaluation.answered) {
      setFeedback(feedback, "Please enter or select an answer before checking.", false);
      return;
    }

    results[question.id] = evaluation.correct;
    setFeedback(
      feedback,
      `${evaluation.correct ? "Correct." : "Not quite."} ${question.explanation}`,
      evaluation.correct
    );
    updateProgress();
  });

  resetBtn.addEventListener("click", () => {
    resetQuestion(question, body, feedback);
    delete results[question.id];
    updateProgress();
  });

  return fragment;
}

function buildOption(questionId, inputType, labelText, value) {
  const label = document.createElement("label");
  label.className = "option";

  const input = document.createElement("input");
  input.type = inputType;
  input.name = questionId;
  input.value = value;

  const text = document.createElement("span");
  text.textContent = labelText;

  label.appendChild(input);
  label.appendChild(text);
  return label;
}

function evaluateQuestion(question, body) {
  if (question.type === "multiple-choice") {
    const selected = body.querySelector(`input[name="${question.id}"]:checked`);
    if (!selected) {
      return { answered: false, correct: false };
    }
    return { answered: true, correct: Number(selected.value) === question.answer };
  }

  if (question.type === "multi-select") {
    const selected = Array.from(body.querySelectorAll(`input[name="${question.id}"]:checked`))
      .map(input => Number(input.value))
      .sort((a, b) => a - b);
    if (selected.length === 0) {
      return { answered: false, correct: false };
    }
    const expected = [...question.answers].sort((a, b) => a - b);
    const correct = selected.length === expected.length
      && selected.every((value, index) => value === expected[index]);
    return { answered: true, correct };
  }

  if (question.type === "true-false") {
    const selected = body.querySelector(`input[name="${question.id}"]:checked`);
    if (!selected) {
      return { answered: false, correct: false };
    }
    const value = selected.value === "true";
    return { answered: true, correct: value === question.answer };
  }

  if (question.type === "short-answer") {
    const input = body.querySelector(`input[name="${question.id}"]`);
    const normalized = input.value.trim().toLowerCase();
    if (!normalized) {
      return { answered: false, correct: false };
    }
    const correct = question.answers.some(answer => answer.toLowerCase() === normalized);
    return { answered: true, correct };
  }

  return { answered: false, correct: false };
}

function setFeedback(node, message, isCorrect) {
  node.className = `feedback is-visible ${isCorrect ? "is-correct" : "is-incorrect"}`;
  node.innerHTML = `<strong>${isCorrect ? "Nice work" : "Review this idea"}</strong><span>${message}</span>`;
}

function resetQuestion(question, body, feedback) {
  if (question.type === "short-answer") {
    const input = body.querySelector(`input[name="${question.id}"]`);
    input.value = "";
  } else {
    body.querySelectorAll(`input[name="${question.id}"]`).forEach(input => {
      input.checked = false;
    });
  }

  feedback.className = "feedback";
  feedback.textContent = "";
}

function updateProgress() {
  const totalAnswered = Object.keys(results).length;
  const totalCorrect = Object.values(results).filter(Boolean).length;
  const accuracy = totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100);

  answeredCount.textContent = String(totalAnswered);
  correctCount.textContent = String(totalCorrect);
  accuracyRate.textContent = `${accuracy}%`;
}

function formatType(type) {
  if (type === "multiple-choice") return "Multiple choice";
  if (type === "multi-select") return "Multi-select";
  if (type === "true-false") return "True / False";
  return "Short answer";
}

function init() {
  questionCount.textContent = String(practiceParts.reduce((sum, part) => sum + part.questions.length, 0));
  topicCount.textContent = String(countTopics());
  renderNav();
  renderFilter();
  renderParts();
  updateProgress();
  updateActiveLinks();

  showAllBtn.addEventListener("click", () => {
    currentFilter = "all";
    partFilter.value = "all";
    renderParts();
    updateActiveLinks();
  });
}

init();
