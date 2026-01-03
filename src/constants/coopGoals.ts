import { CoopGoal } from "@/types/coop";

// Editable template for co-op goals and reflections.
export const coopGoals: CoopGoal[] = [
  {
    goal: "Goal 1: Strengthen technical breadth",
    actionPlan: [
      "Pair with senior engineers weekly to review code and ask questions.",
      "Ship at least one feature in the stack you want to grow in.",
      "Document takeaways after each sprint.",
    ],
    measureOfSuccess: [
      "Feature PRs merged with minimal rework.",
      "Mentor feedback notes improved autonomy.",
      "You can explain key design decisions in post-sprint writeups.",
    ],
    reflection:
      "Use this space to summarize what you achieved, what surprised you, and what you would do differently next term.",
  },
  {
    goal: "Goal 2: Improve communication",
    actionPlan: [
      "Lead at least one demo per sprint.",
      "Post concise daily updates in team channel.",
      "Ask for feedback on written specs before implementation.",
    ],
    measureOfSuccess: [
      "Stakeholders can restate your updates without confusion.",
      "Reduced back-and-forth on specs after your clarifications.",
      "Positive feedback from manager/mentor on clarity.",
    ],
    reflection:
      "Capture wins (e.g., smoother handoffs) and areas to refine (e.g., earlier async updates).",
  },
  {
    goal: "Goal 3: Deliver measurable impact",
    actionPlan: [
      "Identify a metric with your manager (latency, retention, etc.).",
      "Align tasks to move that metric and track before/after.",
      "Review impact in midterm and final check-ins.",
    ],
    measureOfSuccess: [
      "Metric baseline and post-change numbers recorded.",
      "At least one experiment or fix shows movement.",
      "You can attribute impact to specific changes.",
    ],
    reflection:
      "Summarize the metric movement, blockers you hit, and follow-up ideas.",
  },
  {
    goal: "Goal 4: Grow team collaboration",
    actionPlan: [
      "Co-own a small project with a teammate.",
      "Offer to review at least two PRs per week.",
      "Join or start a knowledge-share session.",
    ],
    measureOfSuccess: [
      "Consistent PR review cadence with actionable feedback.",
      "Teammate acknowledgements in retros or standups.",
      "Shared project delivered on time with clear ownership.",
    ],
    reflection:
      "Note what worked about collaboration, how you handled conflicts, and what you'd repeat.",
  },
  {
    goal: "Goal 5: Document and present learnings",
    actionPlan: [
      "Maintain a living co-op journal (weekly highlights).",
      "Create short writeups for complex tasks you solved.",
      "Present a final recap to your team or school coordinator.",
    ],
    measureOfSuccess: [
      "Journal kept up-to-date through the term.",
      "Colleagues reference your notes to unblock themselves.",
      "Final recap clearly explains outcomes and lessons.",
    ],
    reflection:
      "Record presentation feedback and how documentation saved time for you or others.",
  },
];

