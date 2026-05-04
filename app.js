const practiceParts = [
  {
    id: "part-1",
    title: "Part I: Foundations of Economics",
    description: "Core models, scarcity, choice, opportunity cost, and trade.",
    topics: [
      {
        id: "core-principles",
        title: "Core Principles of Economics",
        description: "Scarcity, incentives, tradeoffs, and marginal thinking.",
        generators: [
          () => {
            const scenarios = [
              {
                prompt: "A university has enough funding to build either a new dorm or a new library wing, but not both. Which economic idea is most directly illustrated here?",
                options: [
                  "Scarcity and tradeoffs",
                  "A positive externality from education",
                  "Perfect competition in higher education",
                  "A decrease in marginal cost"
                ],
                answer: 0,
                explanation: "Scarcity means resources are limited, so choosing one option requires giving up another."
              },
              {
                prompt: "A student studies one more hour because the expected grade improvement is greater than the cost in lost free time. This is the clearest example of:",
                options: [
                  "Marginal decision-making",
                  "Average cost pricing",
                  "Public good provision",
                  "A sunk cost fallacy"
                ],
                answer: 0,
                explanation: "Economics emphasizes marginal analysis: compare the additional benefit of one more unit with its additional cost."
              },
              {
                prompt: "Which statement best matches a core economic principle without overstating what economics can predict?",
                options: [
                  "Choices are costless when people act rationally.",
                  "People respond to incentives and face tradeoffs.",
                  "Growth eliminates scarcity in the long run.",
                  "Markets always produce efficient and fair outcomes."
                ],
                answer: 1,
                explanation: "People respond to incentives and make choices under scarcity, so tradeoffs are central to economics."
              }
            ];
            return randomChoice(scenarios);
          }
        ]
      },
      {
        id: "opportunity-cost",
        title: "Opportunity Cost and Economic Decision-Making",
        description: "Finding the value of the next-best alternative.",
        generators: [
          () => {
            const wage = randomChoice([15, 18, 20, 24, 30]);
            const hours = randomChoice([2, 3, 4, 5]);
            const outOfPocket = randomChoice([8, 12, 15, 20]);
            const cost = wage * hours + outOfPocket;
            return {
              type: "short-answer",
              prompt: `A student can work for $${wage} per hour for ${hours} hours or attend a review session instead. Attending the session also requires $${outOfPocket} for transportation and materials. If the student attends the session, what is the total opportunity cost in dollars?`,
              answers: [String(cost), `$${cost}`],
              explanation: `Opportunity cost includes both the forgone wages and the direct cost of the chosen option: $${wage * hours} + $${outOfPocket} = $${cost}.`
            };
          }
        ]
      },
      {
        id: "trade",
        title: "Absolute Advantage, Comparative Advantage, and Trade",
        description: "Comparing productivity and opportunity cost across producers.",
        generators: [
          () => {
            let aBikes;
            let aShirts;
            let bBikes;
            let bShirts;
            let askGood;
            let answerIndex;
            let explanation;

            do {
              aBikes = randomInt(4, 10);
              aShirts = randomInt(10, 24);
              bBikes = randomInt(4, 10);
              bShirts = randomInt(10, 24);
              askGood = randomChoice(["bikes", "shirts"]);

              const aBikeCost = aShirts / aBikes;
              const bBikeCost = bShirts / bBikes;
              const aShirtCost = aBikes / aShirts;
              const bShirtCost = bBikes / bShirts;

              if (askGood === "bikes" && aBikeCost !== bBikeCost) {
                answerIndex = aBikeCost < bBikeCost ? 0 : 1;
                explanation = `Country A gives up ${formatNumber(aBikeCost)} shirts per bike, while Country B gives up ${formatNumber(bBikeCost)}. The lower opportunity cost means that country has comparative advantage in bikes.`;
              }
              if (askGood === "shirts" && aShirtCost !== bShirtCost) {
                answerIndex = aShirtCost < bShirtCost ? 0 : 1;
                explanation = `Country A gives up ${formatNumber(aShirtCost)} bikes per shirt, while Country B gives up ${formatNumber(bShirtCost)}. The lower opportunity cost means that country has comparative advantage in shirts.`;
              }
            } while (answerIndex === undefined);

            return {
              type: "multiple-choice",
              prompt: `Country A can produce either ${aBikes} bikes or ${aShirts} shirts. Country B can produce either ${bBikes} bikes or ${bShirts} shirts. Who has the comparative advantage in ${askGood}?`,
              options: ["Country A", "Country B", "Both countries", "Neither country"],
              answer: answerIndex,
              explanation
            };
          }
        ]
      }
    ]
  },
  {
    id: "part-2",
    title: "Part II: Where Consumers and Producers Meet",
    description: "Supply, demand, equilibrium, elasticity, and efficiency.",
    topics: [
      {
        id: "equilibrium",
        title: "Supply, Demand, and the Market Equilibrium",
        description: "How shifts change equilibrium price and quantity.",
        generators: [
          () => {
            const scenarios = [
              {
                cause: "demand increases while supply stays the same",
                statement: "equilibrium price rises and equilibrium quantity rises",
                truth: true,
                explanation: "When demand rises with supply unchanged, both equilibrium price and quantity rise."
              },
              {
                cause: "supply decreases while demand stays the same",
                statement: "equilibrium price falls and equilibrium quantity rises",
                truth: false,
                explanation: "When supply decreases with demand unchanged, equilibrium price rises and equilibrium quantity falls."
              },
              {
                cause: "demand decreases while supply stays the same",
                statement: "equilibrium price falls and equilibrium quantity falls",
                truth: true,
                explanation: "A leftward shift in demand lowers both equilibrium price and quantity."
              }
            ];
            const scenario = randomChoice(scenarios);
            return {
              type: "true-false",
              prompt: `True or false: If ${scenario.cause}, then ${scenario.statement}.`,
              answer: scenario.truth,
              explanation: scenario.explanation
            };
          }
        ]
      },
      {
        id: "elasticity",
        title: "Demand & Supply Elasticity",
        description: "Measuring responsiveness to price changes.",
        generators: [
          () => {
            const priceChange = randomChoice([5, 10, 12, 15]);
            const type = randomChoice([
              { label: "Inelastic", multiplier: randomChoice([0.2, 0.4, 0.6]) },
              { label: "Unit elastic", multiplier: 1 },
              { label: "Elastic", multiplier: randomChoice([1.5, 2, 3]) }
            ]);
            const quantityChange = Math.round(priceChange * type.multiplier);
            const answerMap = {
              "Inelastic": 1,
              "Unit elastic": 2,
              "Elastic": 3
            };
            return {
              type: "multiple-choice",
              prompt: `A ${priceChange}% increase in price causes quantity demanded to fall by ${quantityChange}%. Which conclusion is best supported?`,
              options: [
                "Demand is perfectly inelastic, so total revenue must rise.",
                "Demand is inelastic because quantity changes less than price.",
                "Demand is unit elastic because total revenue is unchanged by definition.",
                "Demand is elastic because quantity changes proportionally more than price."
              ],
              answer: answerMap[type.label],
              explanation: `Elasticity is ${quantityChange}% / ${priceChange}% = ${formatNumber(quantityChange / priceChange)} in absolute value, so demand is ${type.label.toLowerCase()}.`
            };
          }
        ]
      },
      {
        id: "market-efficiency",
        title: "Measuring How Well Markets Work: Market Efficiency & Social Welfare",
        description: "Total surplus, deadweight loss, and efficient trade.",
        generators: [
          () => ({
            type: "multi-select",
            prompt: "Which outcomes are typically associated with a perfectly competitive market at equilibrium?",
            options: [
              "Total surplus is maximized.",
              "There is no deadweight loss from underproduction or overproduction.",
              "The equilibrium necessarily produces an equal distribution of welfare across consumers.",
              "Trades occur up to the point where marginal benefit equals marginal cost."
            ],
            answers: [0, 1, 3],
            explanation: "Competitive equilibrium is efficient because it maximizes total surplus and equates marginal benefit with marginal cost, but it does not guarantee equality."
          })
        ]
      }
    ]
  },
  {
    id: "part-3",
    title: "Part III: When the Government Might Need to Step In",
    description: "Interventions, welfare policy, public goods, and externalities.",
    topics: [
      {
        id: "government-interventions",
        title: "Government Interventions in Markets: Price Controls, Taxes, and Subsidies",
        description: "How policy changes market outcomes.",
        generators: [
          () => {
            const scenarios = [
              {
                prompt: "A binding price ceiling is set below the equilibrium price. What is the most direct market result?",
                options: ["A surplus", "A shortage", "No change because markets clear automatically", "Higher equilibrium quantity supplied"],
                answer: 1,
                explanation: "A price ceiling below equilibrium increases quantity demanded and reduces quantity supplied, causing a shortage."
              },
              {
                prompt: "A binding price floor is set above the equilibrium price. What is the most direct market result?",
                options: ["A shortage", "A surplus", "No change because the price is only a recommendation", "A guaranteed increase in total surplus"],
                answer: 1,
                explanation: "A price floor above equilibrium raises price, reducing quantity demanded and increasing quantity supplied, creating a surplus."
              },
              {
                prompt: "A per-unit tax is placed on sellers in a competitive market. Which statement is always true?",
                options: [
                  "The tax creates a wedge between the price buyers pay and sellers receive.",
                  "The market always becomes more efficient because external costs are corrected.",
                  "Quantity traded must increase if demand is inelastic.",
                  "Sellers always bear the entire tax burden."
                ],
                answer: 0,
                explanation: "A tax drives a wedge between buyer and seller prices and typically reduces quantity traded."
              }
            ];
            return randomChoice(scenarios);
          }
        ]
      },
      {
        id: "inequality-poverty",
        title: "Inequality, Poverty, and the Welfare State",
        description: "Transfers, taxes, and distributional outcomes.",
        generators: [
          () => {
            const statements = [
              {
                prompt: "True or false: Transfer programs can reduce disposable-income inequality even when the underlying market distribution of wages is unchanged.",
                answer: true,
                explanation: "Transfers affect after-tax, after-transfer income, which can reduce measured inequality."
              },
              {
                prompt: "True or false: A more progressive tax-and-transfer system usually has no effect on after-tax income inequality because it only changes government revenue.",
                answer: false,
                explanation: "Progressive taxes and transfers are designed partly to compress the distribution of disposable income."
              }
            ];
            return {
              type: "true-false",
              ...randomChoice(statements)
            };
          }
        ]
      },
      {
        id: "public-goods",
        title: "Public Goods",
        description: "Non-rivalry, non-excludability, and free-rider problems.",
        generators: [
          () => {
            const sets = [
              ["National defense", "A sandwich", "A haircut", "A movie rental"],
              ["A city siren system", "A toll road at rush hour", "A coffee", "A textbook"],
              ["Street lighting", "A subscription streaming service", "A concert ticket", "A taxi ride"]
            ];
            const options = randomChoice(sets);
            return {
              type: "multiple-choice",
              prompt: "Which item is the best example of a public good?",
              options,
              answer: 0,
              explanation: `${options[0]} is closest to a public good because it is largely non-rival and non-excludable.`
            };
          }
        ]
      },
      {
        id: "externalities",
        title: "Positive and Negative Externalities, Environmental Regulations",
        description: "When private and social incentives differ.",
        generators: [
          () => {
            const kind = randomChoice(["negative", "positive"]);
            if (kind === "negative") {
              return {
                type: "multi-select",
                prompt: "A factory creates a negative externality through pollution. Which policies could help move output closer to the socially efficient level?",
                options: [
                  "A Pigouvian tax on emissions",
                  "Tradable pollution permits",
                  "A subsidy for each unit of pollution created",
                  "Direct regulation that caps emissions"
                ],
                answers: [0, 1, 3],
                explanation: "Taxes, permits, and direct regulation can internalize or limit the external cost. Subsidizing pollution would worsen the problem."
              };
            }
            return {
              type: "multi-select",
              prompt: "Vaccination creates a positive externality. Which policies could encourage consumption closer to the socially efficient level?",
              options: [
                "A subsidy for vaccination",
                "Public information campaigns",
                "A tax on vaccination",
                "Free or low-cost public provision"
              ],
              answers: [0, 1, 3],
              explanation: "Positive externalities lead to underconsumption, so subsidies, public provision, and information can help increase usage."
            };
          }
        ]
      }
    ]
  },
  {
    id: "part-4",
    title: "Part IV: Behind the Demand Curve - Consumer Theory",
    description: "Utility, budget constraints, consumer choice, and uncertainty.",
    topics: [
      {
        id: "utility-budget",
        title: "Measuring Happiness & Facing Constraints - Utility Functions and Budget Sets",
        description: "How income and prices shape the budget line.",
        generators: [
          () => {
            const scenarios = [
              {
                prompt: "If a consumer's income doubles and the prices of both goods stay the same, the budget line:",
                options: [
                  "Shifts inward",
                  "Rotates inward",
                  "Shifts outward in a parallel way",
                  "Does not change"
                ],
                answer: 2,
                explanation: "Higher income with unchanged prices shifts the budget line outward in a parallel way."
              },
              {
                prompt: "If the price of good X rises while income and the price of good Y stay the same, the budget line for goods X and Y:",
                options: [
                  "Rotates inward around the Y-intercept",
                  "Shifts outward in parallel",
                  "Rotates outward around the X-intercept",
                  "Becomes horizontal"
                ],
                answer: 0,
                explanation: "A higher price of X lowers the X-intercept while the Y-intercept stays fixed, so the line rotates inward around the Y-intercept."
              }
            ];
            return randomChoice(scenarios);
          }
        ]
      },
      {
        id: "optimal-consumer",
        title: "Optimal Consumer Decisions",
        description: "Choosing bundles that maximize utility subject to a budget.",
        generators: [
          () => {
            const ratio = randomChoice([2, 3, 4, 5, 6, 7]);
            const px = randomChoice([2, 3, 4, 5]);
            const py = randomChoice([1, 2, 3, 4, 5]);
            const mux = ratio * px;
            const muy = ratio * py;
            return {
              type: "short-answer",
              prompt: `At an interior optimum, a consumer chooses a bundle where MUx/Px = MUy/Py. If MUx = ${mux}, Px = ${px}, and Py = ${py}, what must MUy equal for the consumer to satisfy the equal-marginal-utility-per-dollar rule?`,
              answers: [String(muy)],
              explanation: `MUx/Px = ${mux}/${px} = ${ratio}, so MUy must satisfy MUy/${py} = ${ratio}. Therefore MUy = ${muy}.`
            };
          }
        ]
      },
      {
        id: "risk-uncertainty",
        title: "Risk and Uncertainty",
        description: "Expected value, certainty, and risk preferences.",
        generators: [
          () => {
            const certain = randomChoice([40, 50, 60, 70]);
            const high = certain * 2 + randomChoice([10, 20, 30]);
            const expected = high / 2;
            return {
              type: "true-false",
              prompt: `True or false: A risk-averse person may prefer a certain payoff of $${certain} to a gamble with a 50% chance of $${high} and a 50% chance of $0, even though the gamble's expected monetary value is $${expected}.`,
              answer: true,
              explanation: "Risk-averse people can prefer certainty to a risky gamble even when the gamble has a higher expected value."
            };
          }
        ]
      }
    ]
  },
  {
    id: "part-5",
    title: "Part V: Behind the Supply Curve - Theory of the Firm",
    description: "Costs, profits, production choices, and time horizons.",
    topics: [
      {
        id: "costs-revenues-profits",
        title: "Costs, Revenues, Profits",
        description: "Accounting vs. economic profit and cost concepts.",
        generators: [
          () => {
            const revenue = randomChoice([520, 650, 780, 920]);
            const explicit = randomChoice([180, 240, 300, 360]);
            const implicit = randomChoice([70, 90, 110, 140]);
            const profit = revenue - explicit - implicit;
            return {
              type: "short-answer",
              prompt: `A firm's total revenue is $${revenue}, explicit costs are $${explicit}, and the owner's implicit opportunity costs are $${implicit}. What is the firm's economic profit in dollars?`,
              answers: [String(profit), `$${profit}`],
              explanation: `Economic profit = total revenue - explicit costs - implicit costs = $${revenue} - $${explicit} - $${implicit} = $${profit}.`
            };
          }
        ]
      },
      {
        id: "optimal-production",
        title: "Optimal Production Decisions",
        description: "Using MR, MC, and shutdown rules to choose output.",
        generators: [
          () => {
            const scenarios = [
              {
                prompt: "A competitive firm is producing where marginal revenue exceeds marginal cost, and price is above average variable cost. What change would increase profit?",
                answer: 0,
                explanation: "If MR > MC, producing more raises profit as long as shutdown conditions are satisfied."
              },
              {
                prompt: "A firm is producing where marginal revenue is below marginal cost, and price is still above average variable cost. What change would increase profit?",
                answer: 1,
                explanation: "If MR < MC, the firm should reduce output because the last units cost more than they add in revenue."
              },
              {
                prompt: "A firm's price has fallen below average variable cost in the short run. What is the profit-maximizing short-run decision?",
                answer: 3,
                explanation: "If price is below AVC, the firm should shut down in the short run because it cannot cover variable costs."
              }
            ];
            const scenario = randomChoice(scenarios);
            return {
              type: "multiple-choice",
              prompt: scenario.prompt,
              options: [
                "Increase output",
                "Decrease output",
                "Keep output unchanged",
                "Shut down in the short run"
              ],
              answer: scenario.answer,
              explanation: scenario.explanation
            };
          }
        ]
      },
      {
        id: "short-run-long-run",
        title: "Short Run, Long Run, and Market Supply",
        description: "How firm behavior changes across time horizons.",
        generators: [
          () => ({
            type: "multi-select",
            prompt: "Which statements are true about the long run in a competitive market?",
            options: [
              "All inputs are variable.",
              "Firms can enter or exit the market.",
              "At least one input must remain fixed by definition.",
              "Economic profit may be driven to zero by entry and exit."
            ],
            answers: [0, 1, 3],
            explanation: "In the long run all inputs are variable, firms can enter or exit, and competition can push economic profit to zero."
          })
        ]
      }
    ]
  },
  {
    id: "part-6",
    title: "Part VI: Market Power and Strategic Interactions",
    description: "Monopoly, monopolistic competition, oligopoly, and game theory.",
    topics: [
      {
        id: "perfect-competition-monopoly",
        title: "From Perfect Competition to Monopoly",
        description: "Comparing price, output, and welfare.",
        generators: [
          () => ({
            type: "multiple-choice",
            prompt: "Compared with a perfectly competitive market, a single-price monopolist typically chooses which outcome?",
            options: [
              "More output at a lower price",
              "Less output at a higher price",
              "The same output at the same price because profit maximization is identical",
              "Less output at a lower price because of economies of scale"
            ],
            answer: 1,
            explanation: "Monopolists restrict output and charge a higher price than the competitive benchmark."
          })
        ]
      },
      {
        id: "monopolies-arise",
        title: "Monopolies and Why They May Arise",
        description: "Barriers to entry, natural monopoly, and legal protections.",
        generators: [
          () => ({
            type: "multi-select",
            prompt: "Which factors can create or sustain monopoly power over time?",
            options: [
              "Control of a key resource",
              "Government-granted patent protection",
              "Strong economies of scale over the relevant market range",
              "Perfectly free entry with no barriers to expansion"
            ],
            answers: [0, 1, 2],
            explanation: "Control of resources, legal barriers, and natural monopoly conditions can support monopoly power. Free entry does the opposite."
          })
        ]
      },
      {
        id: "monopolistic-competition",
        title: "Monopolistic Competition",
        description: "Differentiation and downward-sloping demand.",
        generators: [
          () => {
            const statements = [
              {
                prompt: "True or false: In monopolistic competition, firms sell differentiated products and therefore face downward-sloping demand curves for their own varieties.",
                answer: true,
                explanation: "Product differentiation gives each firm some market power, so the firm's demand curve slopes downward."
              },
              {
                prompt: "True or false: Firms in monopolistic competition sell identical products and are pure price takers in both the short run and the long run.",
                answer: false,
                explanation: "That describes perfect competition, not monopolistic competition."
              }
            ];
            return {
              type: "true-false",
              ...randomChoice(statements)
            };
          }
        ]
      },
      {
        id: "oligopoly-game-theory",
        title: "Oligopolies and Game Theory",
        description: "Strategic interaction, dominant strategies, and Nash equilibrium.",
        generators: [
          () => {
            const actionA = randomChoice([
              ["keep prices high", "cut prices"],
              ["advertise lightly", "advertise heavily"],
              ["cooperate", "defect"]
            ]);
            return {
              type: "multiple-choice",
              prompt: `Two firms face a one-shot prisoner's dilemma. Each can either ${actionA[0]} or ${actionA[1]}. If each firm chooses its individually rational strategy, what outcome is most likely to be the Nash equilibrium?`,
              options: [
                `Both firms ${actionA[0]}`,
                `Both firms ${actionA[1]}`,
                `One firm ${actionA[0]} and one firm ${actionA[1]} in a stable collusive outcome`,
                "No equilibrium exists because the firms move simultaneously"
              ],
              answer: 1,
              explanation: `In the standard one-shot prisoner's dilemma, the dominant strategy is the more aggressive action, so both firms ${actionA[1]}.`
            };
          }
        ]
      }
    ]
  }
];

const QUESTION_TYPES = [
  { id: "multiple-choice", label: "Multiple choice" },
  { id: "multi-select", label: "Multi-select" },
  { id: "true-false", label: "True / False" },
  { id: "short-answer", label: "Short answer" }
];

const flatTopics = practiceParts.flatMap(part =>
  part.topics.map(topic => {
    const generatorPool = topic.generators.map(create => ({
      create,
      type: create().type
    }));

    return {
      ...topic,
      partId: part.id,
      partTitle: part.title,
      generatorPool,
      availableTypes: [...new Set(generatorPool.map(generator => generator.type))]
    };
  })
);

const topicById = Object.fromEntries(flatTopics.map(topic => [topic.id, topic]));

const partNav = document.getElementById("partNav");
const partsContainer = document.getElementById("partsContainer");
const typeFilters = document.getElementById("typeFilters");
const topicFilters = document.getElementById("topicFilters");
const topicSelect = document.getElementById("topicSelect");
const topicCountSelect = document.getElementById("topicCountSelect");
const mixedCountSelect = document.getElementById("mixedCountSelect");
const setCountInput = document.getElementById("setCountInput");
const generateTopicBtn = document.getElementById("generateTopicBtn");
const generateMixedBtn = document.getElementById("generateMixedBtn");
const generateMixedHeroBtn = document.getElementById("generateMixedHeroBtn");
const generateCustomBtn = document.getElementById("generateCustomBtn");
const generateAllTopicsBtn = document.getElementById("generateAllTopicsBtn");
const selectAllTypesBtn = document.getElementById("selectAllTypesBtn");
const clearTypesBtn = document.getElementById("clearTypesBtn");
const selectAllTopicsBtn = document.getElementById("selectAllTopicsBtn");
const clearTopicsBtn = document.getElementById("clearTopicsBtn");
const clearWorkspaceBtn = document.getElementById("clearWorkspaceBtn");
const questionCount = document.getElementById("questionCount");
const topicCount = document.getElementById("topicCount");
const answeredCount = document.getElementById("answeredCount");
const correctCount = document.getElementById("correctCount");
const accuracyRate = document.getElementById("accuracyRate");
const workspaceTitle = document.getElementById("workspaceTitle");
const workspaceSubtitle = document.getElementById("workspaceSubtitle");
const questionWorkspace = document.getElementById("questionWorkspace");
const questionTemplate = document.getElementById("questionTemplate");

let questionSerial = 0;
let currentResults = {};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function formatNumber(value) {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}

function normalizeAnswer(value) {
  return value.toLowerCase().replace(/\$/g, "").replace(/,/g, "").replace(/\s+/g, "");
}

function clampQuestionCount(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return 10;
  }
  return Math.min(30, Math.max(1, Math.round(parsed)));
}

function buildQuestion(topic, generated) {
  questionSerial += 1;
  return {
    ...generated,
    id: `generated-${questionSerial}`,
    topicId: topic.id,
    topic: topic.title,
    partTitle: topic.partTitle
  };
}

function generateQuestionFromTopic(topicId, allowedTypes = topicById[topicId].availableTypes) {
  const topic = topicById[topicId];
  const matchingGenerators = topic.generatorPool.filter(generator => allowedTypes.includes(generator.type));

  if (matchingGenerators.length === 0) {
    return null;
  }

  return buildQuestion(topic, randomChoice(matchingGenerators).create());
}

function generateQuestionFromTopicAndType(topicId, type) {
  const topic = topicById[topicId];
  const matchingGenerators = topic.generatorPool.filter(generator => generator.type === type);

  if (matchingGenerators.length === 0) {
    return null;
  }

  return buildQuestion(topic, randomChoice(matchingGenerators).create());
}

function getEligibleTopicData(topicIds, allowedTypes) {
  const eligibleTopics = flatTopics.filter(topic =>
    topicIds.includes(topic.id) && topic.availableTypes.some(type => allowedTypes.includes(type))
  );
  const eligibleTypes = allowedTypes.filter(type =>
    eligibleTopics.some(topic => topic.availableTypes.includes(type))
  );

  return { eligibleTopics, eligibleTypes };
}

function pickTopicForType(type, eligibleTopics, topicUsage, typeUsage) {
  const candidates = eligibleTopics.filter(topic => topic.availableTypes.includes(type));
  if (candidates.length === 0) {
    return null;
  }

  return candidates.reduce((best, topic) => {
    if (!best) {
      return topic;
    }

    const bestTopicUsage = topicUsage[best.id] || 0;
    const topicCount = topicUsage[topic.id] || 0;
    if (topicCount !== bestTopicUsage) {
      return topicCount < bestTopicUsage ? topic : best;
    }

    const bestTypeCount = typeUsage[type] || 0;
    const currentTypeCount = typeUsage[type] || 0;
    if (currentTypeCount !== bestTypeCount) {
      return currentTypeCount < bestTypeCount ? topic : best;
    }

    return Math.random() < 0.5 ? topic : best;
  }, null);
}

function addBalancedQuestion(questions, topic, type, topicUsage, typeUsage) {
  const question = generateQuestionFromTopicAndType(topic.id, type);
  if (!question) {
    return false;
  }

  questions.push(question);
  topicUsage[topic.id] = (topicUsage[topic.id] || 0) + 1;
  typeUsage[type] = (typeUsage[type] || 0) + 1;
  return true;
}

function generateQuestionSet(topicIds, allowedTypes, count, options = {}) {
  const { eligibleTopics, eligibleTypes } = getEligibleTopicData(topicIds, allowedTypes);

  if (eligibleTopics.length === 0) {
    return [];
  }

  const safeCount = clampQuestionCount(count);
  const questions = [];
  const topicUsage = {};
  const typeUsage = {};
  const shouldCoverTopics = Boolean(options.coverTopics);
  const shouldCoverTypes = Boolean(options.coverTypes);
  const minimumCoverageCount = Math.min(
    30,
    Math.max(
      safeCount,
      shouldCoverTopics ? eligibleTopics.length : 0,
      shouldCoverTypes ? eligibleTypes.length : 0
    )
  );

  if (shouldCoverTopics && minimumCoverageCount >= eligibleTopics.length) {
    eligibleTopics.forEach(topic => {
      if (questions.length >= minimumCoverageCount) {
        return;
      }
      const leastUsedType = topic.availableTypes
        .filter(type => eligibleTypes.includes(type))
        .sort((a, b) => (typeUsage[a] || 0) - (typeUsage[b] || 0))[0];
      addBalancedQuestion(questions, topic, leastUsedType, topicUsage, typeUsage);
    });
  }

  if (shouldCoverTypes) {
    eligibleTypes.forEach(type => {
      if (questions.length >= minimumCoverageCount || (typeUsage[type] || 0) > 0) {
        return;
      }
      const topic = pickTopicForType(type, eligibleTopics, topicUsage, typeUsage);
      if (topic) {
        addBalancedQuestion(questions, topic, type, topicUsage, typeUsage);
      }
    });
  }

  while (questions.length < minimumCoverageCount) {
    const topic = eligibleTopics.reduce((best, current) => {
      if (!best) {
        return current;
      }
      const bestUsage = topicUsage[best.id] || 0;
      const currentUsage = topicUsage[current.id] || 0;
      if (currentUsage !== bestUsage) {
        return currentUsage < bestUsage ? current : best;
      }
      return Math.random() < 0.5 ? current : best;
    }, null);

    const type = topic.availableTypes
      .filter(candidate => eligibleTypes.includes(candidate))
      .sort((a, b) => (typeUsage[a] || 0) - (typeUsage[b] || 0))[0];

    if (!addBalancedQuestion(questions, topic, type, topicUsage, typeUsage)) {
      break;
    }
  }

  return questions;
}

function renderNav() {
  partNav.innerHTML = "";
  practiceParts.forEach(part => {
    const link = document.createElement("a");
    link.className = "part-link";
    link.href = `#${part.id}`;
    link.textContent = part.title;
    partNav.appendChild(link);
  });
}

function renderTypeFilters() {
  typeFilters.innerHTML = "";

  QUESTION_TYPES.forEach(type => {
    const label = document.createElement("label");
    label.className = "checkbox-option";
    label.innerHTML = `
      <input type="checkbox" name="questionType" value="${type.id}" checked />
      <span>${type.label}</span>
    `;
    typeFilters.appendChild(label);
  });
}

function renderTopicFilters() {
  topicFilters.innerHTML = "";

  practiceParts.forEach(part => {
    const wrapper = document.createElement("section");
    wrapper.className = "topic-filter-group";

    const title = document.createElement("h4");
    title.textContent = part.title;
    wrapper.appendChild(title);

    const list = document.createElement("div");
    list.className = "topic-filter-list";

    part.topics.forEach(topic => {
      const topicMeta = topicById[topic.id];
      const label = document.createElement("label");
      label.className = "checkbox-option";
      label.innerHTML = `
        <input type="checkbox" name="topicFilter" value="${topic.id}" checked />
        <span>
          ${topic.title}
          <span class="checkbox-option__meta">${topicMeta.availableTypes.map(formatType).join(" • ")}</span>
        </span>
      `;
      list.appendChild(label);
    });

    wrapper.appendChild(list);
    topicFilters.appendChild(wrapper);
  });
}

function renderTopicSelect() {
  topicSelect.innerHTML = "";
  flatTopics.forEach(topic => {
    topicSelect.appendChild(new Option(`${topic.partTitle} - ${topic.title}`, topic.id));
  });
}

function renderPartSections() {
  partsContainer.innerHTML = "";

  practiceParts.forEach(part => {
    const section = document.createElement("section");
    section.className = "part-section";
    section.id = part.id;

    const header = document.createElement("div");
    header.className = "part-section__header";
    header.innerHTML = `<h2>${part.title}</h2><p>${part.description}</p>`;
    section.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "topic-grid";

    part.topics.forEach(topic => {
      const topicMeta = topicById[topic.id];
      const card = document.createElement("article");
      card.className = "topic-card";
      card.innerHTML = `
        <div class="topic-card__meta">${part.title}</div>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
        <p class="topic-card__meta">${topicMeta.availableTypes.map(formatType).join(" • ")}</p>
        <div class="topic-card__actions">
          <button class="button button--secondary" type="button" data-topic-id="${topic.id}" data-count="1">1 question</button>
          <button class="button button--ghost" type="button" data-topic-id="${topic.id}" data-count="5">5 questions</button>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    partsContainer.appendChild(section);
  });

  partsContainer.querySelectorAll("[data-topic-id]").forEach(button => {
    button.addEventListener("click", () => {
      const topicId = button.dataset.topicId;
      const count = Number(button.dataset.count);
      topicSelect.value = topicId;
      topicCountSelect.value = String(Math.min(count, 10));
      renderSession(
        generateQuestionSet([topicId], topicById[topicId].availableTypes, count),
        `${topicById[topicId].title} practice`,
        count === 1
          ? "Fresh question generated from this topic."
          : `Fresh ${count}-question set generated from this topic.`
      );
    });
  });
}

function renderSession(questions, title, subtitle) {
  currentResults = {};
  updateProgress();
  workspaceTitle.textContent = title;
  workspaceSubtitle.textContent = subtitle;
  questionWorkspace.innerHTML = "";

  if (questions.length === 0) {
    renderEmptyState(
      "No matching questions",
      "Choose at least one topic and one question type with overlapping coverage."
    );
    return;
  }

  questions.forEach((question, index) => {
    questionWorkspace.appendChild(renderQuestion(question, index + 1));
  });

  document.getElementById("workspace").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderEmptyState(title = "No questions generated yet", message = "Use the controls above or click a topic card below.") {
  questionWorkspace.innerHTML = `
    <div class="empty-state">
      <h3>${title}</h3>
      <p>${message}</p>
    </div>
  `;
}

function renderQuestion(question, number) {
  const fragment = questionTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".question-card");
  const topic = fragment.querySelector(".question-card__topic");
  const prompt = fragment.querySelector(".question-card__prompt");
  const type = fragment.querySelector(".question-card__type");
  const body = fragment.querySelector(".question-card__body");
  const hintBtn = fragment.querySelector(".hint-btn");
  const checkBtn = fragment.querySelector(".check-btn");
  const resetBtn = fragment.querySelector(".reset-btn");
  const hint = fragment.querySelector(".hint");
  const feedback = fragment.querySelector(".feedback");

  card.dataset.questionId = question.id;
  topic.textContent = `${question.partTitle} - ${question.topic}`;
  prompt.textContent = `Question ${number}: ${question.prompt}`;
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

  hintBtn.addEventListener("click", () => {
    const isVisible = hint.classList.contains("is-visible");
    if (isVisible) {
      hint.className = "hint";
      hint.textContent = "";
      hintBtn.textContent = "Show hint";
      return;
    }

    setHint(hint, buildHint(question));
    hintBtn.textContent = "Hide hint";
  });

  checkBtn.addEventListener("click", () => {
    const evaluation = evaluateQuestion(question, body);
    if (!evaluation.answered) {
      setFeedback(feedback, "Please enter or select an answer before checking.", false);
      return;
    }

    currentResults[question.id] = evaluation.correct;
    setFeedback(
      feedback,
      `${evaluation.correct ? "Correct." : "Not quite."} ${question.explanation}`,
      evaluation.correct
    );
    updateProgress();
  });

  resetBtn.addEventListener("click", () => {
    resetQuestion(question, body, hint, feedback, hintBtn);
    delete currentResults[question.id];
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
    const normalized = normalizeAnswer(input.value.trim());
    if (!normalized) {
      return { answered: false, correct: false };
    }
    const correct = question.answers.some(answer => normalizeAnswer(answer) === normalized);
    return { answered: true, correct };
  }

  return { answered: false, correct: false };
}

function setFeedback(node, message, isCorrect) {
  node.className = `feedback is-visible ${isCorrect ? "is-correct" : "is-incorrect"}`;
  node.innerHTML = `<strong>${isCorrect ? "Nice work" : "Review this idea"}</strong><span>${message}</span>`;
}

function setHint(node, message) {
  node.className = "hint is-visible";
  node.innerHTML = `<strong>Hint</strong><span>${message}</span>`;
}

function buildHint(question) {
  const prompt = question.prompt.toLowerCase();
  const topic = question.topic.toLowerCase();

  if (prompt.includes("comparative advantage")) {
    return "Compute the opportunity cost of each good for each country first, then pick the country with the lower opportunity cost for the good being asked about.";
  }
  if (prompt.includes("opportunity cost")) {
    return "Add up every relevant thing the decision-maker gives up, including forgone earnings and any direct costs mentioned in the scenario.";
  }
  if (prompt.includes("elasticity")) {
    return "Use elasticity as percentage change in quantity divided by percentage change in price, and focus on the absolute value before naming the category.";
  }
  if (prompt.includes("budget line")) {
    return "Ask whether income changed or whether the price of one good changed; that tells you whether the line shifts in parallel or rotates around an intercept.";
  }
  if (prompt.includes("economic profit")) {
    return "Economic profit subtracts both explicit costs and implicit opportunity costs from total revenue.";
  }
  if (prompt.includes("marginal revenue") || prompt.includes("marginal cost")) {
    return "Compare MR and MC first, then check whether the firm is still covering variable costs before deciding whether it should keep producing.";
  }
  if (topic.includes("public goods")) {
    return "Look for a good that is both hard to exclude people from and one person's use does not significantly reduce another person's use.";
  }
  if (topic.includes("externalities")) {
    return "Think about whether the activity is overproduced or underproduced relative to the social optimum, then choose policies that move the market in the corrective direction.";
  }
  if (topic.includes("risk") || prompt.includes("expected monetary value")) {
    return "Separate expected value from preferences: the question is about how a risk-averse person compares certainty with a gamble.";
  }
  if (question.type === "multi-select") {
    return "More than one answer is correct here. Test each option separately instead of looking for a single best choice.";
  }
  if (question.type === "short-answer") {
    return "Identify the key formula or relationship in the prompt, compute carefully, and type only the final value or expression.";
  }
  if (question.type === "true-false") {
    return "Watch for a single word that makes the statement too strong, like always, never, only, or guaranteed.";
  }
  return "Start from the core definition behind the topic, eliminate answers that are too absolute, and choose the option that best matches the economic logic.";
}

function resetQuestion(question, body, hint, feedback, hintBtn) {
  if (question.type === "short-answer") {
    const input = body.querySelector(`input[name="${question.id}"]`);
    input.value = "";
  } else {
    body.querySelectorAll(`input[name="${question.id}"]`).forEach(input => {
      input.checked = false;
    });
  }

  hint.className = "hint";
  hint.textContent = "";
  hintBtn.textContent = "Show hint";
  feedback.className = "feedback";
  feedback.textContent = "";
}

function updateProgress() {
  const totalAnswered = Object.keys(currentResults).length;
  const totalCorrect = Object.values(currentResults).filter(Boolean).length;
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

function getCheckedValues(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter(input => input.checked)
    .map(input => input.value);
}

function setCheckedValues(selector, checked) {
  document.querySelectorAll(selector).forEach(input => {
    input.checked = checked;
  });
}

function generateCustomStudySet() {
  const selectedTypes = getCheckedValues('input[name="questionType"]');
  const selectedTopics = getCheckedValues('input[name="topicFilter"]');
  const { eligibleTopics, eligibleTypes } = getEligibleTopicData(selectedTopics, selectedTypes);

  if (eligibleTopics.length === 0 || eligibleTypes.length === 0) {
    renderSession([], "Custom study set", "No questions matched your selected topics and question types.");
    return;
  }

  const requestedCount = clampQuestionCount(setCountInput.value);
  const adjustedCount = Math.min(30, Math.max(requestedCount, eligibleTopics.length, eligibleTypes.length));
  setCountInput.value = String(adjustedCount);

  renderSession(
    generateQuestionSet(selectedTopics, selectedTypes, adjustedCount, {
      coverTopics: true,
      coverTypes: true
    }),
    "Custom study set",
    adjustedCount === requestedCount
      ? `${adjustedCount} randomized question${adjustedCount === 1 ? "" : "s"} covering your selected topics and question types.`
      : `Expanded to ${adjustedCount} questions so the set can include every selected topic and question type.`
  );
}

function generateAllTopicsSet(count) {
  renderSession(
    generateQuestionSet(flatTopics.map(topic => topic.id), QUESTION_TYPES.map(type => type.id), count),
    "Random all-topic review",
    `${count} randomized question${count === 1 ? "" : "s"} drawn from every topic and question type.`
  );
}

function init() {
  questionCount.textContent = "Unlimited";
  topicCount.textContent = String(flatTopics.length);

  renderNav();
  renderTypeFilters();
  renderTopicFilters();
  renderTopicSelect();
  renderPartSections();
  renderEmptyState();
  updateProgress();

  generateTopicBtn.addEventListener("click", () => {
    const topicId = topicSelect.value;
    const count = clampQuestionCount(topicCountSelect.value);
    renderSession(
      generateQuestionSet([topicId], topicById[topicId].availableTypes, count),
      `${topicById[topicId].title} practice`,
      count === 1
        ? "Fresh question generated from this topic."
        : `Fresh ${count}-question set generated from this topic.`
    );
  });

  generateMixedBtn.addEventListener("click", () => {
    const count = clampQuestionCount(mixedCountSelect.value);
    generateAllTopicsSet(count);
  });

  generateMixedHeroBtn.addEventListener("click", () => {
    const count = clampQuestionCount(mixedCountSelect.value || 10);
    generateAllTopicsSet(count);
  });

  generateCustomBtn.addEventListener("click", generateCustomStudySet);

  generateAllTopicsBtn.addEventListener("click", () => {
    setCheckedValues('input[name="questionType"]', true);
    setCheckedValues('input[name="topicFilter"]', true);
    const count = clampQuestionCount(setCountInput.value);
    setCountInput.value = String(count);
    generateAllTopicsSet(count);
  });

  selectAllTypesBtn.addEventListener("click", () => {
    setCheckedValues('input[name="questionType"]', true);
  });

  clearTypesBtn.addEventListener("click", () => {
    setCheckedValues('input[name="questionType"]', false);
  });

  selectAllTopicsBtn.addEventListener("click", () => {
    setCheckedValues('input[name="topicFilter"]', true);
  });

  clearTopicsBtn.addEventListener("click", () => {
    setCheckedValues('input[name="topicFilter"]', false);
  });

  clearWorkspaceBtn.addEventListener("click", () => {
    currentResults = {};
    updateProgress();
    workspaceTitle.textContent = "Question workspace";
    workspaceSubtitle.textContent = "Choose a topic or generate a mixed set to begin.";
    renderEmptyState();
  });
}

init();
