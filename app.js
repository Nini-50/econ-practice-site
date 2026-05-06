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
          () => ({
            type: "multiple-choice",
            prompt: "Which of the following is a normative statement?",
            options: [
              "State minimum wages differ across the United States.",
              "The unemployment rate fell last year.",
              "Congress should impose a single federal minimum wage in every state.",
              "A higher price usually reduces quantity demanded."
            ],
            answer: 2,
            explanation: "Normative statements make value judgments about what should happen; the other choices are positive statements."
          }),
          () => {
            const scenarios = [
              {
                prompt: "True or false: Scarcity means every desirable goal can be achieved if people make good enough choices.",
                answer: false,
                explanation: "Scarcity means resources are limited, so tradeoffs remain even when people choose well."
              },
              {
                prompt: "True or false: Marginal thinking asks whether the extra benefit of one more unit exceeds the extra cost.",
                answer: true,
                explanation: "Marginal analysis compares the additional benefit and additional cost of the next unit."
              }
            ];
            return {
              type: "true-false",
              ...randomChoice(scenarios)
            };
          }
        ]
      },
      {
        id: "opportunity-cost",
        title: "Opportunity Cost and Economic Decision-Making",
        description: "Finding the value of the next-best alternative.",
        generators: [
          () => {
            const play = randomChoice([30, 32, 35]);
            const hike = randomChoice([22, 25, 27]);
            const home = randomChoice([12, 15, 18]);
            return {
              type: "short-answer",
              prompt: `A student can spend Saturday at a free play they value at $${play}, a hike they value at $${hike}, or a quiet evening at home they value at $${home}. If they go to the play, what is the opportunity cost in dollars?`,
              answers: [String(Math.max(hike, home)), `$${Math.max(hike, home)}`],
              explanation: `The opportunity cost is the value of the next-best alternative, which is $${Math.max(hike, home)}.`
            };
          },
          () => {
            const wage = randomChoice([16, 18, 20, 24]);
            const hours = randomChoice([2, 3, 4]);
            const travel = randomChoice([6, 8, 10, 12]);
            const total = wage * hours + travel;
            return {
              type: "multiple-choice",
              prompt: `A student skips ${hours} hours of work paying $${wage} per hour to attend a review session and also spends $${travel} on transportation. What is the total opportunity cost?`,
              options: [`$${travel}`, `$${wage * hours}`, `$${total}`, `$${total + wage}`],
              answer: 2,
              explanation: `Opportunity cost includes forgone wages and direct costs: $${wage * hours} + $${travel} = $${total}.`
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
            const casesA = 8;
            const reportsA = 4;
            const casesB = 6;
            const reportsB = 6;
            return {
              type: "multiple-choice",
              prompt: `Worker A can complete either ${casesA} cases or ${reportsA} reports per day. Worker B can complete either ${casesB} cases or ${reportsB} reports. Which statement is correct?`,
              options: [
                "Worker A has both comparative and absolute advantage in reports.",
                "Worker B has comparative advantage in reports and Worker A has absolute advantage in cases.",
                "Worker B has comparative advantage in cases and absolute advantage in reports.",
                "Neither worker has comparative advantage in either task."
              ],
              answer: 1,
              explanation: "A produces more cases (absolute advantage in cases). A gives up 2 cases per report while B gives up 1 case per report, so B has comparative advantage in reports and A in cases."
            };
          },
          () => {
            const maxCasesA = 8;
            const maxReportsA = 4;
            const maxCasesB = 6;
            const maxReportsB = 6;
            const jointReports = 7;
            const lostCases = 1;
            return {
              type: "short-answer",
              prompt: `Two workers can each specialize. Worker A can produce up to ${maxCasesA} cases or ${maxReportsA} reports, and Worker B can produce up to ${maxCasesB} cases or ${maxReportsB} reports. If their joint output rises from 6 to ${jointReports} reports, what is the opportunity cost in cases?`,
              answers: [String(lostCases), `${lostCases} case`, `${lostCases} cases`],
              explanation: "The seventh report must come from shifting Worker A away from cases after Worker B specializes in reports, so the economy gives up 1 case."
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
            const demandIntercept = randomChoice([12, 14, 16]);
            const demandSlope = randomChoice([1, 2]);
            const supplyIntercept = randomChoice([0, 2, 4]);
            const supplySlope = randomChoice([1, 2]);
            const quantity = (demandIntercept - supplyIntercept) / (demandSlope + supplySlope);
            return {
              type: "short-answer",
              prompt: `Suppose inverse demand is P = ${demandIntercept} - ${demandSlope}Q and inverse supply is P = ${supplyIntercept} + ${supplySlope}Q. What is the equilibrium quantity?`,
              answers: [formatNumber(quantity)],
              explanation: `Set demand equal to supply: ${demandIntercept} - ${demandSlope}Q = ${supplyIntercept} + ${supplySlope}Q, so Q = ${formatNumber(quantity)}.`
            };
          },
          () => {
            const scenarios = [
              {
                prompt: "The price of a key input falls while the price of a close substitute rises. What is guaranteed in the original market?",
                options: [
                  "Equilibrium quantity rises, while price may rise, fall, or stay the same.",
                  "Equilibrium price falls and quantity falls.",
                  "Equilibrium price rises and quantity falls.",
                  "Both equilibrium price and quantity must rise."
                ],
                answer: 0,
                explanation: "Lower input cost shifts supply right and the substitute's higher price shifts demand right. Quantity must rise, but price is ambiguous."
              },
              {
                prompt: "Demand decreases while supply also decreases. Which outcome is guaranteed?",
                options: [
                  "Price rises and quantity rises.",
                  "Quantity falls, while price may rise, fall, or stay the same.",
                  "Price falls and quantity rises.",
                  "Both price and quantity are unchanged."
                ],
                answer: 1,
                explanation: "Both leftward shifts reduce equilibrium quantity, but their effects on price go in opposite directions."
              }
            ];
            return {
              type: "multiple-choice",
              ...randomChoice(scenarios)
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
            const startPrice = randomChoice([10, 12, 16]);
            const endPrice = startPrice - randomChoice([2, 4]);
            const startQuantity = randomChoice([90, 110, 130]);
            const endQuantity = startQuantity + randomChoice([10, 20, 30]);
            const elasticity = Math.abs(((endQuantity - startQuantity) / ((endQuantity + startQuantity) / 2)) / ((endPrice - startPrice) / ((endPrice + startPrice) / 2)));
            return {
              type: "short-answer",
              prompt: `If price falls from $${startPrice} to $${endPrice} and quantity demanded rises from ${startQuantity} to ${endQuantity}, what is the midpoint price elasticity of demand? Round to one decimal place.`,
              answers: [elasticity.toFixed(1), formatNumber(elasticity)],
              explanation: `Using the midpoint formula gives elasticity ${elasticity.toFixed(1)} in absolute value.`
            };
          },
          () => ({
            type: "multiple-choice",
            prompt: "The government wants to maximize revenue from the same per-unit excise tax across otherwise similar markets. Which market should it prefer?",
            options: [
              "Demand elasticity 0.6 and supply elasticity 0.3",
              "Demand elasticity 1.6 and supply elasticity 1.3",
              "Demand elasticity 2.5 and supply elasticity 0.5",
              "All markets yield the same tax revenue by definition"
            ],
            answer: 0,
            explanation: "A tax raises more revenue when quantity falls less, which is more likely when demand and supply are relatively inelastic."
          })
        ]
      },
      {
        id: "market-efficiency",
        title: "Measuring How Well Markets Work: Market Efficiency & Social Welfare",
        description: "Total surplus, deadweight loss, and efficient trade.",
        generators: [
          () => ({
            type: "multiple-choice",
            prompt: "Which policy is guaranteed not to reduce consumer surplus in a competitive market?",
            options: [
              "A binding quota",
              "An excise tax",
              "A price ceiling set above the equilibrium price",
              "A binding price floor"
            ],
            answer: 2,
            explanation: "A price ceiling above equilibrium is non-binding, so it does not change market outcomes or consumer surplus."
          }),
          () => ({
            type: "multi-select",
            prompt: "Which statements are true in a perfectly competitive market operating efficiently?",
            options: [
              "Total surplus is maximized.",
              "Trades occur up to the point where marginal benefit equals marginal cost.",
              "A deadweight loss from underproduction remains.",
              "Redistribution across buyers and sellers is necessarily equal."
            ],
            answers: [0, 1],
            explanation: "Efficient competitive markets maximize total surplus and equate marginal benefit and marginal cost, but they do not guarantee equality."
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
            const qd = 6;
            const qs = 8;
            return {
              type: "multiple-choice",
              prompt: "A government imposes a binding price floor in a market. At that price, quantity demanded is 6 and quantity supplied is 8. What is the immediate result?",
              options: [
                "A shortage of 2 units",
                "A surplus of 2 units",
                "No change because only equilibrium matters",
                "A subsidy wedge of 2 units"
              ],
              answer: 1,
              explanation: `A binding price floor creates a surplus equal to quantity supplied minus quantity demanded: ${qs} - ${qd} = 2.`
            };
          },
          () => ({
            type: "multi-select",
            prompt: "Which statements are always true after a per-unit excise tax is introduced in a competitive market?",
            options: [
              "A wedge opens between the price buyers pay and sellers receive.",
              "Quantity traded falls relative to the no-tax equilibrium.",
              "Buyers always bear the full tax burden.",
              "The market becomes efficient regardless of the original problem."
            ],
            answers: [0, 1],
            explanation: "A tax drives a wedge between buyer and seller prices and reduces the quantity traded. Incidence and efficiency depend on elasticities and the original market failure."
          })
        ]
      },
      {
        id: "inequality-poverty",
        title: "Inequality, Poverty, and the Welfare State",
        description: "Transfers, taxes, and distributional outcomes.",
        generators: [
          () => {
            const income = 91000;
            const tax = 2000 + 4500 + 8000 + 350;
            const averageRate = ((tax / income) * 100).toFixed(1);
            return {
              type: "short-answer",
              prompt: "A worker earns $91,000 and faces these tax brackets: 10% on the first $20,000, 15% on the next $30,000, 20% on the next $40,000, and 35% on income above $90,000. What is the average tax rate as a percent, rounded to one decimal place?",
              answers: [averageRate, `${averageRate}%`],
              explanation: `Total tax is $${tax}. Average tax rate = ${tax}/${income} = ${averageRate}%.`
            };
          },
          () => ({
            type: "multiple-choice",
            prompt: "A region with a higher Gini coefficient than another region is guaranteed to have which outcome?",
            options: [
              "A higher median income",
              "A lower mean income",
              "A lower poverty rate using the same threshold",
              "None of the above is guaranteed"
            ],
            answer: 3,
            explanation: "A higher Gini coefficient tells you inequality is higher, but it does not by itself determine mean income, median income, or poverty rates."
          })
        ]
      },
      {
        id: "public-goods",
        title: "Public Goods",
        description: "Non-rivalry, non-excludability, and free-rider problems.",
        generators: [
          () => {
            const benefits = [
              { mb1: 50, mb2: 100, mc: 25000, total: 1000 * 50 + 500 * 100 },
              { mb1: 40, mb2: 75, mc: 40000, total: 1000 * 40 + 500 * 75 },
              { mb1: 30, mb2: 50, mc: 55000, total: 1000 * 30 + 500 * 50 },
              { mb1: 20, mb2: 25, mc: 70000, total: 1000 * 20 + 500 * 25 }
            ];
            const efficientCount = benefits.filter(space => space.total >= space.mc).length;
            return {
              type: "short-answer",
              prompt: "A town is considering green spaces. For the first four parks, marginal benefits per resident are ($50, $40, $30, $20) for 1,000 type-1 residents and ($100, $75, $50, $25) for 500 type-2 residents. Marginal costs are $25,000, $40,000, $55,000, and $70,000. How many parks should be provided efficiently?",
              answers: [String(efficientCount)],
              explanation: "For a public good, sum marginal benefits vertically across residents. The first three parks have total marginal benefit at least as large as marginal cost, but the fourth does not."
            };
          },
          () => ({
            type: "multiple-choice",
            prompt: "Which U.S. welfare program is both means-tested and provided in kind rather than in cash?",
            options: [
              "Medicare",
              "SNAP",
              "Social Security retirement benefits",
              "Worker's compensation"
            ],
            answer: 1,
            explanation: "SNAP is a means-tested in-kind transfer because benefits are tied to food purchases rather than cash."
          })
        ]
      },
      {
        id: "externalities",
        title: "Positive and Negative Externalities, Environmental Regulations",
        description: "When private and social incentives differ.",
        generators: [
          () => ({
            type: "multiple-choice",
            prompt: "A market generates a negative production externality because firms ignore pollution damages. Which policy moves output toward the efficient level most directly?",
            options: [
              "A Pigouvian tax equal to the marginal external cost",
              "A subsidy to producers for each unit sold",
              "A price floor above equilibrium",
              "A tax on consumers unrelated to the external cost"
            ],
            answer: 0,
            explanation: "A Pigouvian tax internalizes the external cost by aligning firms' private marginal cost with social marginal cost."
          }),
          () => ({
            type: "multiple-choice",
            prompt: "Alex values playing loud music at $40 while Holden values quiet at $25 and holds the property rights. If Coase theorem assumptions hold, what happens?",
            options: [
              "No trade occurs.",
              "Holden pays Alex $40 for silence.",
              "Alex pays Holden at least $25 and at most $40 to play music.",
              "The government must ban music for efficiency."
            ],
            answer: 2,
            explanation: "Because Alex values music more than Holden values silence, the efficient outcome is music playing, reached through bargaining when transaction costs are negligible."
          })
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
                prompt: "If income rises while the prices of both goods stay the same, the budget line:",
                options: [
                  "Rotates inward",
                  "Shifts outward in parallel",
                  "Rotates around the x-intercept",
                  "Does not change"
                ],
                answer: 1,
                explanation: "A pure income increase raises both intercepts proportionally, so the budget line shifts outward in parallel."
              },
              {
                prompt: "If the price of coffee falls while income and the price of manuals stay the same, the budget line:",
                options: [
                  "Rotates outward around the manuals intercept",
                  "Shifts inward in parallel",
                  "Rotates inward around the coffee intercept",
                  "Becomes flatter because income fell"
                ],
                answer: 0,
                explanation: "A lower coffee price raises the coffee intercept while the manuals intercept stays fixed."
              }
            ];
            return {
              type: "multiple-choice",
              ...randomChoice(scenarios)
            };
          },
          () => {
            const muCoffee = randomChoice([30, 40, 48]);
            const priceCoffee = randomChoice([4, 5]);
            const priceManuals = randomChoice([2, 3, 4]);
            const muManuals = (muCoffee / priceCoffee) * priceManuals;
            return {
              type: "short-answer",
              prompt: `A consumer is at an interior optimum. Their marginal utility from coffee is ${muCoffee}, the price of coffee is $${priceCoffee}, and the price of manuals is $${priceManuals}. What must marginal utility from manuals be?`,
              answers: [formatNumber(muManuals)],
              explanation: `At an interior optimum MUcoffee/Pcoffee = MUmanuals/Pmanuals, so MUmanuals = (${muCoffee}/${priceCoffee}) x ${priceManuals} = ${formatNumber(muManuals)}.`
            };
          }
        ]
      },
      {
        id: "optimal-consumer",
        title: "Optimal Consumer Decisions",
        description: "Choosing bundles that maximize utility subject to a budget.",
        generators: [
          () => ({
            type: "true-false",
            prompt: "True or false: If MUx/Px is greater than MUy/Py at the current bundle, the consumer can raise utility by buying more x and less y while staying on the budget line.",
            answer: true,
            explanation: "The consumer should shift spending toward the good with the higher marginal utility per dollar until the ratios are equalized."
          }),
          () => ({
            type: "multiple-choice",
            prompt: "A student consumes coffee and technical manuals. At their current bundle, MUcoffee/Pcoffee is greater than MUmanuals/Pmanuals. Which statement is correct?",
            options: [
              "They are already maximizing utility.",
              "Buying more manuals and less coffee must increase utility.",
              "Buying more coffee and fewer manuals can raise total utility.",
              "Their total utility cannot change while staying on the budget line."
            ],
            answer: 2,
            explanation: "If coffee gives more marginal utility per dollar, utility rises by shifting spending toward coffee."
          })
        ]
      },
      {
        id: "risk-uncertainty",
        title: "Risk and Uncertainty",
        description: "Expected value, certainty, and risk preferences.",
        generators: [
          () => {
            const certain = randomChoice([40, 50, 60]);
            const high = certain * 2 + randomChoice([10, 20]);
            const expected = high / 2;
            return {
              type: "multiple-choice",
              prompt: `A gamble pays $${high} with 50% probability and $0 otherwise, so its expected value is $${expected}. A risk-averse person prefers a certain $${certain}. Which statement best explains that choice?`,
              options: [
                "Risk aversion means expected value is irrelevant and should be ignored.",
                "The certain payoff can yield higher expected utility even when its dollar value is lower.",
                "Risk-averse people always choose the option with the lower expected monetary value.",
                "The gamble must have negative expected value."
              ],
              answer: 1,
              explanation: "Risk-averse people care about expected utility, not only expected monetary value."
            };
          },
          () => ({
            type: "true-false",
            prompt: "True or false: A risk-neutral person chooses between lotteries using expected monetary value alone.",
            answer: true,
            explanation: "Risk-neutral preferences imply indifference across lotteries with the same expected monetary payoff."
          })
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
            const revenue = randomChoice([480, 560, 720, 840]);
            const explicit = randomChoice([180, 220, 300, 340]);
            const implicit = randomChoice([60, 90, 120, 150]);
            const profit = revenue - explicit - implicit;
            return {
              type: "short-answer",
              prompt: `A firm's total revenue is $${revenue}, explicit costs are $${explicit}, and implicit opportunity costs are $${implicit}. What is economic profit?`,
              answers: [String(profit), `$${profit}`],
              explanation: `Economic profit = total revenue - explicit costs - implicit costs = $${profit}.`
            };
          },
          () => ({
            type: "short-answer",
            prompt: "A firm's total cost at quantity 1 is $60 and its variable cost at quantity 1 is $30. What is fixed cost?",
            answers: ["30", "$30"],
            explanation: "Fixed cost = total cost - variable cost = 60 - 30 = 30."
          })
        ]
      },
      {
        id: "optimal-production",
        title: "Optimal Production Decisions",
        description: "Using MR, MC, and shutdown rules to choose output.",
        generators: [
          () => ({
            type: "multiple-choice",
            prompt: "A competitive firm's AVC schedule reaches a minimum of $4. What is the lowest price at which it will produce a non-zero quantity in the short run?",
            options: ["$2", "$3", "$4", "$8"],
            answer: 2,
            explanation: "A competitive firm supplies output in the short run only if price is at least minimum AVC."
          }),
          () => {
            const scenarios = [
              {
                prompt: "A firm is producing where marginal revenue exceeds marginal cost and price is above AVC. What should it do?",
                answer: 0,
                explanation: "If MR > MC, producing more raises profit."
              },
              {
                prompt: "A firm is producing where marginal revenue is below marginal cost and price is above AVC. What should it do?",
                answer: 1,
                explanation: "If MR < MC, reducing output raises profit."
              },
              {
                prompt: "Price has fallen below minimum AVC. What is the best short-run choice?",
                answer: 3,
                explanation: "Below minimum AVC, the firm should shut down in the short run."
              }
            ];
            const scenario = randomChoice(scenarios);
            return {
              type: "multiple-choice",
              prompt: scenario.prompt,
              options: ["Increase output", "Decrease output", "Keep output unchanged", "Shut down"],
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
            type: "multiple-choice",
            prompt: "A firm's ATC falls through quantity 3 and rises afterward. At what quantity does diminishing returns first outweigh the spreading effect?",
            options: ["2", "3", "4", "5"],
            answer: 2,
            explanation: "ATC starts rising after its minimum, so diminishing returns first outweigh spreading at the next quantity, 4."
          }),
          () => ({
            type: "multiple-choice",
            prompt: "In the short run, labor is variable and capital is fixed. If the firm could use one more unit of capital while labor stays variable, what happens to MPL while it remains positive?",
            options: [
              "MPL would be lower.",
              "MPL would be higher.",
              "MPL would be unchanged.",
              "Nothing can be said."
            ],
            answer: 1,
            explanation: "More capital makes labor more productive, so the marginal product of labor rises for a given amount of labor."
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
          () => {
            const intercept = randomChoice([20, 24, 30]);
            const mc = randomChoice([8, 10, 12]);
            const quantity = (intercept - mc) / 2;
            const price = intercept - quantity;
            return {
              type: "short-answer",
              prompt: `A monopolist faces demand P = ${intercept} - Q and constant marginal cost of $${mc}. If it cannot price discriminate, what price does it charge?`,
              answers: [formatNumber(price), `$${formatNumber(price)}`],
              explanation: `For linear demand, MR = ${intercept} - 2Q. Setting MR = MC gives Q = ${formatNumber(quantity)}, so price is ${intercept} - ${formatNumber(quantity)} = $${formatNumber(price)}.`
            };
          },
          () => ({
            type: "multiple-choice",
            prompt: "Compared with perfect competition, a single-price monopolist usually chooses:",
            options: [
              "More output at a lower price",
              "Less output at a higher price",
              "The same output because both set P = MC",
              "Less output at a lower price"
            ],
            answer: 1,
            explanation: "A monopolist restricts output below the competitive level and charges a higher price."
          })
        ]
      },
      {
        id: "monopolies-arise",
        title: "Monopolies and Why They May Arise",
        description: "Barriers to entry, natural monopoly, and legal protections.",
        generators: [
          () => ({
            type: "multiple-choice",
            prompt: "Which set of conditions can create or sustain monopoly power?",
            options: [
              "Control of a key resource, patents, and economies of scale",
              "Perfectly free entry and many close substitutes",
              "Constant returns to scale with no legal barriers",
              "A market structure with identical products and price-taking firms"
            ],
            answer: 0,
            explanation: "Resource control, government protection, and natural-monopoly conditions are classic sources of monopoly power."
          }),
          () => ({
            type: "multiple-choice",
            prompt: "A labor market is monopsonistic. A carefully chosen minimum wage will most likely:",
            options: [
              "Always eliminate employment",
              "Have no effect on wages or employment",
              "Reduce the deadweight loss from wage suppression",
              "Increase deadweight loss in every case"
            ],
            answer: 2,
            explanation: "In a monopsony, a moderate minimum wage can push wages and employment closer to the competitive outcome."
          })
        ]
      },
      {
        id: "monopolistic-competition",
        title: "Monopolistic Competition",
        description: "Differentiation and downward-sloping demand.",
        generators: [
          () => ({
            type: "short-answer",
            prompt: "A restaurant in a monopolistically competitive market has fixed cost $120 per day, variable cost $2 per order, and charges $4 per order. If it is in long-run equilibrium with zero economic profit, how many orders does it sell per day?",
            answers: ["60"],
            explanation: "Zero economic profit means total revenue equals total cost: 4Q = 120 + 2Q, so Q = 60."
          }),
          () => ({
            type: "true-false",
            prompt: "True or false: In long-run monopolistic competition, firms can earn zero economic profit while still producing with excess capacity.",
            answer: true,
            explanation: "Free entry drives profit to zero, but downward-sloping demand means firms often produce below the output that minimizes ATC."
          })
        ]
      },
      {
        id: "oligopoly-game-theory",
        title: "Oligopolies and Game Theory",
        description: "Strategic interaction, dominant strategies, and Nash equilibrium.",
        generators: [
          () => ({
            type: "multiple-choice",
            prompt: "T-Mobile chooses Low or High advertising. Its payoffs are 8 with Low when Verizon chooses Low, 7 with High when Verizon chooses Low, 4 with Low when Verizon chooses High, and 6 with High when Verizon chooses High. Is Low spending a dominant strategy for T-Mobile?",
            options: ["Yes", "No"],
            answer: 1,
            explanation: "T-Mobile prefers Low when Verizon chooses Low, but prefers High when Verizon chooses High, so Low is not dominant."
          }),
          () => ({
            type: "multiple-choice",
            prompt: "Taiga and Ryuji have the following payoffs: (Cooperate, Cooperate) = (5, 6), (Cooperate, Compete) = (2, 5), (Compete, Cooperate) = (6, 3), and (Compete, Compete) = (1, 3). What is the pure-strategy Nash equilibrium?",
            options: [
              "(Cooperate, Cooperate)",
              "(Compete, Compete)",
              "(Compete, Cooperate)",
              "(Cooperate, Compete)"
            ],
            answer: 2,
            explanation: "Taiga prefers Compete regardless of Ryuji's action, while Ryuji prefers Cooperate regardless of Taiga's action, so the Nash equilibrium is (Compete, Cooperate)."
          })
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

const STORAGE_KEYS = {
  accounts: "econPracticeAccounts.v1",
  activeUser: "econPracticeActiveUser.v1"
};

function inferQuestionType(question) {
  if (question.type) {
    return question.type;
  }
  if (Array.isArray(question.answers) && Array.isArray(question.options)) {
    return "multi-select";
  }
  if (typeof question.answer === "boolean") {
    return "true-false";
  }
  if (Array.isArray(question.options)) {
    return "multiple-choice";
  }
  if (Array.isArray(question.answers)) {
    return "short-answer";
  }
  return "multiple-choice";
}

function normalizeGeneratedQuestion(question) {
  return {
    ...question,
    type: inferQuestionType(question)
  };
}

const flatTopics = practiceParts.flatMap(part =>
  part.topics.map(topic => {
    const generatorPool = topic.generators.map(create => ({
      create,
      type: inferQuestionType(create())
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

const authOverlay = document.getElementById("authOverlay");
const authUsername = document.getElementById("authUsername");
const authPassword = document.getElementById("authPassword");
const authConfirmPassword = document.getElementById("authConfirmPassword");
const authFeedback = document.getElementById("authFeedback");
const loginBtn = document.getElementById("loginBtn");
const createAccountBtn = document.getElementById("createAccountBtn");
const logoutBtn = document.getElementById("logoutBtn");
const accountName = document.getElementById("accountName");
const topicProgressList = document.getElementById("topicProgressList");
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
const workspaceTitle = document.getElementById("workspaceTitle");
const workspaceSubtitle = document.getElementById("workspaceSubtitle");
const questionWorkspace = document.getElementById("questionWorkspace");
const questionTemplate = document.getElementById("questionTemplate");

let questionSerial = 0;
let currentUsernameKey = null;
let currentUser = null;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(0, index);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
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

function normalizeUsername(username) {
  return username.trim().toLowerCase();
}

function hashPassword(username, password) {
  const input = `${normalizeUsername(username)}::${password}`;
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) + hash) + input.charCodeAt(i);
  }
  return String(hash >>> 0);
}

function loadAccounts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.accounts) || "{}");
  } catch (error) {
    return {};
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(accounts));
}

function loadActiveUsernameKey() {
  return localStorage.getItem(STORAGE_KEYS.activeUser);
}

function saveActiveUsernameKey(usernameKey) {
  localStorage.setItem(STORAGE_KEYS.activeUser, usernameKey);
}

function clearActiveUsernameKey() {
  localStorage.removeItem(STORAGE_KEYS.activeUser);
}

function createEmptyTopicProgress() {
  return { attempted: 0, correct: 0 };
}

function ensureTopicProgressShape(user) {
  if (!user.progress) {
    user.progress = {};
  }

  flatTopics.forEach(topic => {
    if (!user.progress[topic.id]) {
      user.progress[topic.id] = createEmptyTopicProgress();
    }
  });
}

function setAuthFeedback(message, isError = true) {
  authFeedback.textContent = message;
  authFeedback.style.color = isError ? "var(--warning)" : "var(--success)";
}

function persistCurrentUser() {
  if (!currentUser || !currentUsernameKey) {
    return;
  }
  const accounts = loadAccounts();
  accounts[currentUsernameKey] = currentUser;
  saveAccounts(accounts);
}

function setAuthenticatedState(isAuthenticated) {
  authOverlay.classList.toggle("is-hidden", isAuthenticated);
  document.body.classList.toggle("auth-required", !isAuthenticated);
  logoutBtn.hidden = !isAuthenticated;
}

function renderAccountPanel() {
  if (currentUser) {
    accountName.textContent = currentUser.username;
  } else {
    accountName.textContent = "Not logged in";
  }
}

function renderTopicProgress() {
  topicProgressList.innerHTML = "";

  if (!currentUser) {
    topicProgressList.innerHTML = `
      <div class="empty-state">
        <h3>No user logged in</h3>
        <p>Create or log in to a browser-local account to save topic accuracy.</p>
      </div>
    `;
    return;
  }

  ensureTopicProgressShape(currentUser);

  practiceParts.forEach(part => {
    const partTopics = part.topics.map(topic => {
      const stats = currentUser.progress[topic.id] || createEmptyTopicProgress();
      const accuracy = stats.attempted === 0 ? 0 : Math.round((stats.correct / stats.attempted) * 100);
      return { topic, stats, accuracy };
    });
    const attemptedTopics = partTopics.filter(entry => entry.stats.attempted > 0);
    const partAverage = attemptedTopics.length === 0
      ? 0
      : Math.round(
        attemptedTopics.reduce((sum, entry) => sum + entry.accuracy, 0) / attemptedTopics.length
      );
    const totalAttempts = partTopics.reduce((sum, entry) => sum + entry.stats.attempted, 0);

    const details = document.createElement("details");
    details.className = "progress-part";

    const summary = document.createElement("summary");
    summary.innerHTML = `
      <div class="progress-part__summary">
        <div class="progress-part__left">
          <span class="progress-part__arrow">▶</span>
          <div>
            <p class="progress-part__title">${part.title}</p>
            <div class="progress-part__meta">${attemptedTopics.length} started topic${attemptedTopics.length === 1 ? "" : "s"} • ${totalAttempts} total attempt${totalAttempts === 1 ? "" : "s"}</div>
          </div>
        </div>
        <div class="progress-part__score">${partAverage}%</div>
      </div>
    `;
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "progress-part__body";

    partTopics.forEach(({ topic, stats, accuracy }) => {
      const item = document.createElement("article");
      item.className = "progress-item";
      item.innerHTML = `
        <div class="progress-item__top">
          <div>
            <p class="progress-item__title">${topic.title}</p>
            <div class="progress-item__meta">${stats.attempted} attempt${stats.attempted === 1 ? "" : "s"} • ${stats.correct} correct</div>
          </div>
          <div class="progress-item__score">${accuracy}%</div>
        </div>
        <div class="progress-bar"><div class="progress-bar__fill" style="width: ${accuracy}%;"></div></div>
      `;
      body.appendChild(item);
    });

    details.appendChild(body);
    topicProgressList.appendChild(details);
  });
}

function applyLoggedInUser(usernameKey, user) {
  currentUsernameKey = usernameKey;
  currentUser = user;
  ensureTopicProgressShape(currentUser);
  persistCurrentUser();
  saveActiveUsernameKey(usernameKey);
  setAuthenticatedState(true);
  renderAccountPanel();
  renderTopicProgress();
  authPassword.value = "";
  authConfirmPassword.value = "";
  setAuthFeedback("", false);
}

function restoreActiveSession() {
  const activeUsernameKey = loadActiveUsernameKey();

  if (!activeUsernameKey) {
    return false;
  }

  const accounts = loadAccounts();
  const user = accounts[activeUsernameKey];

  if (!user) {
    clearActiveUsernameKey();
    return false;
  }

  authUsername.value = user.username;
  applyLoggedInUser(activeUsernameKey, user);
  return true;
}

function createAccount() {
  const username = authUsername.value.trim();
  const password = authPassword.value;
  const confirmPassword = authConfirmPassword.value;

  if (!username) {
    setAuthFeedback("Enter a username.");
    return;
  }
  if (!password) {
    setAuthFeedback("Enter a password.");
    return;
  }
  if (password.length < 4) {
    setAuthFeedback("Use a password with at least 4 characters.");
    return;
  }
  if (password !== confirmPassword) {
    setAuthFeedback("The password confirmation does not match.");
    return;
  }

  const usernameKey = normalizeUsername(username);
  const accounts = loadAccounts();
  if (accounts[usernameKey]) {
    setAuthFeedback("That username already exists in this browser.");
    return;
  }

  const user = {
    username,
    passwordHash: hashPassword(usernameKey, password),
    progress: {}
  };

  accounts[usernameKey] = user;
  saveAccounts(accounts);
  applyLoggedInUser(usernameKey, user);
}

function login() {
  const username = authUsername.value.trim();
  const password = authPassword.value;

  if (!username || !password) {
    setAuthFeedback("Enter both username and password.");
    return;
  }

  const usernameKey = normalizeUsername(username);
  const accounts = loadAccounts();
  const user = accounts[usernameKey];

  if (!user || user.passwordHash !== hashPassword(usernameKey, password)) {
    setAuthFeedback("Incorrect username or password for this browser.");
    return;
  }

  applyLoggedInUser(usernameKey, user);
}

function logout() {
  currentUsernameKey = null;
  currentUser = null;
  clearActiveUsernameKey();
  setAuthenticatedState(false);
  renderAccountPanel();
  renderTopicProgress();
  authUsername.value = "";
  authPassword.value = "";
  authConfirmPassword.value = "";
  setAuthFeedback("", false);
  workspaceTitle.textContent = "Question workspace";
  workspaceSubtitle.textContent = "Choose a topic or generate a mixed set to begin.";
  renderEmptyState("Log in to continue", "Create or log in to your browser-local account to generate and save progress.");
}

function recordProgress(question, isCorrect, card) {
  if (!currentUser || card.dataset.scored === "true") {
    return;
  }

  ensureTopicProgressShape(currentUser);
  const topicStats = currentUser.progress[question.topicId] || createEmptyTopicProgress();
  topicStats.attempted += 1;
  if (isCorrect) {
    topicStats.correct += 1;
  }
  currentUser.progress[question.topicId] = topicStats;
  card.dataset.scored = "true";
  persistCurrentUser();
  renderTopicProgress();
}

function buildQuestion(topic, generated) {
  questionSerial += 1;
  const normalizedQuestion = normalizeGeneratedQuestion(generated);
  return {
    ...normalizedQuestion,
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

function chooseLeastUsed(items, usage, getKey = item => item) {
  if (items.length === 0) {
    return null;
  }

  const leastUsage = Math.min(...items.map(item => usage[getKey(item)] || 0));
  const leastUsedItems = items.filter(item => (usage[getKey(item)] || 0) === leastUsage);
  return randomChoice(leastUsedItems);
}

function pickBalancedTopic(candidates, topicUsage, partUsage) {
  if (candidates.length === 0) {
    return null;
  }

  const leastPartUsage = Math.min(...candidates.map(topic => partUsage[topic.partId] || 0));
  const leastUsedParts = candidates.filter(topic => (partUsage[topic.partId] || 0) === leastPartUsage);
  return chooseLeastUsed(leastUsedParts, topicUsage, topic => topic.id);
}

function pickTypeForTopic(topic, eligibleTypes, typeUsage) {
  const matchingTypes = topic.availableTypes.filter(type => eligibleTypes.includes(type));
  return chooseLeastUsed(matchingTypes, typeUsage);
}

function pickTopicForType(type, eligibleTopics, topicUsage, partUsage) {
  const candidates = eligibleTopics.filter(topic => topic.availableTypes.includes(type));
  return pickBalancedTopic(candidates, topicUsage, partUsage);
}

function addBalancedQuestion(questions, topic, type, topicUsage, typeUsage, partUsage) {
  const question = generateQuestionFromTopicAndType(topic.id, type);
  if (!question) {
    return false;
  }

  questions.push(question);
  topicUsage[topic.id] = (topicUsage[topic.id] || 0) + 1;
  typeUsage[type] = (typeUsage[type] || 0) + 1;
  partUsage[topic.partId] = (partUsage[topic.partId] || 0) + 1;
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
  const partUsage = {};
  const shouldCoverTopics = Boolean(options.coverTopics);
  const shouldCoverTypes = Boolean(options.coverTypes);
  const shouldCoverParts = Boolean(options.coverParts);
  const shouldShuffleResults = Boolean(options.shuffleResults);
  const strictCoverage = Boolean(options.strictCoverage);
  const eligiblePartIds = [...new Set(eligibleTopics.map(topic => topic.partId))];
  const minimumCoverageCount = strictCoverage
    ? Math.min(
        30,
        Math.max(
          safeCount,
          shouldCoverTopics ? eligibleTopics.length : 0,
          shouldCoverTypes ? eligibleTypes.length : 0,
          shouldCoverParts ? eligiblePartIds.length : 0
        )
      )
    : safeCount;

  if (shouldCoverParts) {
    const shuffledPartIds = shuffleArray(eligiblePartIds);
    shuffledPartIds.forEach(partId => {
      if (questions.length >= minimumCoverageCount) {
        return;
      }

      const partTopics = eligibleTopics.filter(topic => topic.partId === partId);
      const topic = pickBalancedTopic(partTopics, topicUsage, partUsage);
      const type = topic ? pickTypeForTopic(topic, eligibleTypes, typeUsage) : null;
      if (topic && type) {
        addBalancedQuestion(questions, topic, type, topicUsage, typeUsage, partUsage);
      }
    });
  }

  if (shouldCoverTopics && minimumCoverageCount >= eligibleTopics.length) {
    shuffleArray(eligibleTopics).forEach(topic => {
      if (questions.length >= minimumCoverageCount) {
        return;
      }
      const leastUsedType = pickTypeForTopic(topic, eligibleTypes, typeUsage);
      if (leastUsedType) {
        addBalancedQuestion(questions, topic, leastUsedType, topicUsage, typeUsage, partUsage);
      }
    });
  }

  if (shouldCoverTypes) {
    shuffleArray(eligibleTypes).forEach(type => {
      if (questions.length >= minimumCoverageCount || (typeUsage[type] || 0) > 0) {
        return;
      }
      const topic = pickTopicForType(type, eligibleTopics, topicUsage, partUsage);
      if (topic) {
        addBalancedQuestion(questions, topic, type, topicUsage, typeUsage, partUsage);
      }
    });
  }

  while (questions.length < minimumCoverageCount) {
    const topic = pickBalancedTopic(eligibleTopics, topicUsage, partUsage);
    const type = topic ? pickTypeForTopic(topic, eligibleTypes, typeUsage) : null;

    if (!topic || !type || !addBalancedQuestion(questions, topic, type, topicUsage, typeUsage, partUsage)) {
      break;
    }
  }

  return shouldShuffleResults ? shuffleArray(questions) : questions;
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
  card.dataset.scored = "false";
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

    recordProgress(question, evaluation.correct, card);
    setFeedback(
      feedback,
      `${evaluation.correct ? "Correct." : "Not quite."} ${question.explanation}`,
      evaluation.correct
    );
  });

  resetBtn.addEventListener("click", () => {
    resetQuestion(question, body, hint, feedback, hintBtn);
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
  if (prompt.includes("tax brackets") || prompt.includes("average tax rate")) {
    return "Compute the tax paid inside each bracket first, add those amounts, and only then divide by total income for the average tax rate.";
  }
  if (prompt.includes("budget line")) {
    return "Ask whether income changed or whether the price of one good changed; that tells you whether the line shifts in parallel or rotates around an intercept.";
  }
  if (prompt.includes("gini coefficient")) {
    return "A higher Gini tells you inequality is greater, but it does not by itself pin down mean income, median income, or poverty.";
  }
  if (prompt.includes("economic profit")) {
    return "Economic profit subtracts both explicit costs and implicit opportunity costs from total revenue.";
  }
  if (prompt.includes("coase theorem") || prompt.includes("property rights")) {
    return "Compare the two sides' valuations first, then ask whether bargaining can move the resource to the higher-valued use.";
  }
  if (prompt.includes("nash equilibrium") || prompt.includes("dominant strategy")) {
    return "Mark each player's best response to the other player's action, then look for the cell where both best responses overlap.";
  }
  if (prompt.includes("monopolist") || prompt.includes("price discriminate")) {
    return "For a single-price monopolist, derive marginal revenue from demand, set MR = MC, then read the price from the demand curve.";
  }
  if (prompt.includes("marginal revenue") || prompt.includes("marginal cost")) {
    return "Compare MR and MC first, then check whether the firm is still covering variable costs before deciding whether it should keep producing.";
  }
  if (topic.includes("public goods")) {
    return "For a classification question, look for non-rivalry and non-excludability; for a provision question, add marginal benefits across people and compare that total with marginal cost.";
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
  const questionCard = hintBtn.closest(".question-card");
  if (questionCard) {
    questionCard.dataset.scored = "false";
  }
  feedback.className = "feedback";
  feedback.textContent = "";
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
      coverTypes: true,
      shuffleResults: true,
      strictCoverage: true
    }),
    "Custom study set",
    adjustedCount === requestedCount
      ? `${adjustedCount} randomized question${adjustedCount === 1 ? "" : "s"} covering your selected topics and question types.`
      : `Expanded to ${adjustedCount} questions so the set can include every selected topic and question type.`
  );
}

function generateAllTopicsSet(count) {
  renderSession(
    generateQuestionSet(flatTopics.map(topic => topic.id), QUESTION_TYPES.map(type => type.id), count, {
      coverParts: true,
      coverTypes: true,
      shuffleResults: true
    }),
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
  renderAccountPanel();
  renderTopicProgress();
  const restoredSession = restoreActiveSession();
  setAuthenticatedState(restoredSession);

  loginBtn.addEventListener("click", login);
  createAccountBtn.addEventListener("click", createAccount);
  logoutBtn.addEventListener("click", logout);

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
    workspaceTitle.textContent = "Question workspace";
    workspaceSubtitle.textContent = "Choose a topic or generate a mixed set to begin.";
    renderEmptyState();
  });
}

init();
