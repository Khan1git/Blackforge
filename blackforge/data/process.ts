import type { ProcessPrinciple, ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    slug: "discover",
    title: "Discover",
    summary: "Understand the problem before proposing a solution.",
    description:
      "We talk to the people who use the system, read the code or the current materials, and map the constraints. The output is a shared problem statement, not a sales deck.",
    duration: "1 to 2 weeks",
    clientExpects: [
      "Interviews with the people closest to the work",
      "A review of the current site, product, or infrastructure",
      "A written summary of constraints and assumptions",
      "A clear definition of what success would look like",
    ],
    deliverables: [
      "Discovery notes and current-state map",
      "Problem statement and success measures",
      "Risk and dependency list",
    ],
  },
  {
    number: "02",
    slug: "plan",
    title: "Plan",
    summary: "A scoped plan with visible assumptions and trade-offs.",
    description:
      "We turn the problem into a sequence of decisions: what to build first, what to leave out, what could go wrong, and what it will take. You see the reasoning, not just the price.",
    duration: "1 to 2 weeks",
    clientExpects: [
      "Two or three viable approaches with trade-offs",
      "A milestone plan and a realistic estimate",
      "A named team and a single point of contact",
      "A written scope before any work starts",
    ],
    deliverables: [
      "Project plan and milestone schedule",
      "Technical or creative direction",
      "Decision log and open questions",
    ],
  },
  {
    number: "03",
    slug: "build",
    title: "Build",
    summary: "Short cycles, working software, and no black box.",
    description:
      "We build in increments that can be reviewed. You get a staging environment, a weekly demo, and a written update that says what moved, what is blocked, and what needs a decision.",
    duration: "2 to 8 weeks",
    clientExpects: [
      "A working increment at the end of every cycle",
      "Access to staging and the project board",
      "Weekly written updates and a short demo",
      "Direct access to the people doing the work",
    ],
    deliverables: [
      "Production-quality increments",
      "Tests and technical documentation",
      "Updated decisions and known limitations",
    ],
  },
  {
    number: "04",
    slug: "test-and-secure",
    title: "Test and secure",
    summary: "Quality is a stage, not an afterthought.",
    description:
      "Before launch we test the parts that are easy to skip: accessibility, performance, failure states, permissions, and the security of anything exposed to the internet. Findings are fixed or explicitly accepted.",
    duration: "1 to 2 weeks",
    clientExpects: [
      "A test pass against agreed acceptance criteria",
      "Accessibility and performance checks",
      "A security review proportionate to the risk",
      "A clear list of what is fixed and what is not",
    ],
    deliverables: [
      "Test report and release checklist",
      "Security findings and remediation record",
      "Monitoring and rollback plan",
    ],
  },
  {
    number: "05",
    slug: "launch",
    title: "Launch",
    summary: "A controlled release, not a leap of faith.",
    description:
      "We agree on a cutover window, prepare the rollback, and watch the system together after release. Handover includes the accounts, the documentation, and the training your team needs.",
    duration: "2 to 5 days",
    clientExpects: [
      "A written cutover and rollback plan",
      "A launch window that fits your business",
      "Monitoring during and after release",
      "A handover session with the people who will own it",
    ],
    deliverables: [
      "Production release",
      "Runbook and access handover",
      "Training notes and support plan",
    ],
  },
  {
    number: "06",
    slug: "support",
    title: "Support",
    summary: "The quiet work that keeps things working.",
    description:
      "After launch, we can stay involved for maintenance, monitoring, security updates, and the next round of improvements. Support is scoped in writing, with response times and a clear escalation path.",
    duration: "Ongoing",
    clientExpects: [
      "A named support contact and agreed response times",
      "Planned maintenance rather than surprise downtime",
      "A monthly summary of work and incidents",
      "A roadmap for the next improvements",
    ],
    deliverables: [
      "Support agreement and escalation path",
      "Maintenance and monitoring schedule",
      "Monthly report and improvement backlog",
    ],
  },
];

export const processPrinciples: ProcessPrinciple[] = [
  {
    title: "One owner",
    description:
      "Every engagement has one person accountable for the work. You do not get passed to an account manager when the contract is signed.",
  },
  {
    title: "Write it down",
    description:
      "Decisions, assumptions, and changes live in one shared document. Calls are for discussion, not for reconstructing what was agreed.",
  },
  {
    title: "Small releases",
    description:
      "We would rather ship a narrow thing that works than a broad thing that almost works. Feedback arrives earlier and costs less.",
  },
  {
    title: "No surprises",
    description:
      "If scope, cost, or timing changes, you hear it as soon as we know, with the options and our recommendation.",
  },
];

export const communicationPoints: ProcessPrinciple[] = [
  {
    title: "Weekly written update",
    description:
      "What moved, what is next, what is blocked, and what needs a decision from you. Sent every week without being asked.",
  },
  {
    title: "Demo at the end of each cycle",
    description:
      "A short walkthrough of working software or real design files. You can test it yourself before the next cycle starts.",
  },
  {
    title: "One shared channel",
    description:
      "A single place for questions and decisions. No important context buried in a private thread or a call nobody minuted.",
  },
  {
    title: "Response within one business day",
    description:
      "For active projects, questions get a response within one business day. Urgent production issues follow the support agreement.",
  },
];

export const homeProcess = [
  {
    number: "01",
    title: "Understand",
    summary:
      "We interview the people doing the work, review what exists, and agree on the problem before proposing a solution.",
  },
  {
    number: "02",
    title: "Plan",
    summary:
      "You get a scoped plan with visible assumptions, trade-offs, milestones, and a named team.",
  },
  {
    number: "03",
    title: "Build and secure",
    summary:
      "Short cycles, working software, weekly demos, and a security and quality pass before anything goes live.",
  },
  {
    number: "04",
    title: "Launch and support",
    summary:
      "A controlled release, a real handover, and optional support for the work that comes after launch.",
  },
];
