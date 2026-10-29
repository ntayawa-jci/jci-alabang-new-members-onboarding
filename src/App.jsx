/*
==========================================================================
  JCI ALABANG MEMBER HUB: PHASE 1 (NEW MEMBERS)
==========================================================================

  HOW THIS FILE IS ORGANIZED
  1. CONTENT     Every word, date, name and link on the site. EDIT THIS PART.
  2. STYLES      Brand colors and a few layout rules. Developers only.
  3. HELPERS     Date and storage functions. Developers only.
  4. COMPONENTS  The page itself. Developers only. Components only read
                 from CONTENT, so you never need to touch them to change copy.

  EDITING RULES FOR CONTENT (please read before changing anything)
  - Keep the quote marks "" around text and the comma at the end of each line.
  - Write dates as YEAR-MONTH-DAY with dashes: "2026-11-14".
  - Anything in [SQUARE BRACKETS] shows up highlighted on the site so it's
    easy to spot. Replace it with the real text before launch.
  - After you edit, check the preview before publishing. If the site shows a
    blank page, a quote or comma is usually missing near what you changed.

--------------------------------------------------------------------------
  SEO: PASTE INTO index.html <head> WHEN THIS MOVES TO VITE
--------------------------------------------------------------------------
  <title>JCI Alabang Member Hub | New Member Guide, Batch 2027</title>
  <meta name="description" content="Your guide from OTI to induction at JCI Alabang: what JCI is, the New Member Roadmap, who to ask and key links." />
  <link rel="canonical" href="[ADD SITE URL]" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="JCI Alabang" />
  <meta property="og:title" content="JCI Alabang Member Hub | Batch 2027" />
  <meta property="og:description" content="Your guide from OTI to induction: what JCI is, what to do next, and who to ask." />
  <meta property="og:url" content="[ADD SITE URL]" />
  <meta property="og:image" content="[ADD SITE URL]/og-image.png" />   (1200 x 630 px)
  <meta property="og:locale" content="en_PH" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="theme-color" content="#13112E" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JCI Alabang",
    "alternateName": "Junior Chamber International Alabang",
    "url": "[ADD SITE URL]",
    "logo": "[ADD LOGO URL]",
    "slogan": "Become the Change.",
    "parentOrganization": { "@type": "Organization", "name": "JCI Philippines" },
    "sameAs": ["[ADD FACEBOOK URL]", "[ADD INSTAGRAM URL]"]
  }
  </script>
==========================================================================
*/

import React, { useEffect, useId, useMemo, useState } from "react";
import { Calendar, ChevronDown, ExternalLink, Mail, Menu, X } from "lucide-react";

/* ==========================================================================
   1. CONTENT: EDIT EVERYTHING ON THE SITE HERE
   ========================================================================== */

const CONTENT = {
  /* ------------------------------------------------------------------
     SITE BASICS
     Chapter name, tagline, logo, and the contact line in the footer.
     ------------------------------------------------------------------ */
  site: {
    chapterName: "JCI Alabang",
    tagline: "Become the Change.",
    // LOGO SWAP: put the official logo file in the project's "public" folder,
    // then type its file name here, for example "/jci-alabang-logo.svg".
    // While this is empty (""), the site shows the text "JCI Alabang" instead.
    logoUrl: "",
    logoAlt: "JCI Alabang",
    contactLine:
      "Questions? Ask your buddy first, or email the chapter at admin@jcialabang.com.",
    skipLinkLabel: "Skip to main content",
    menuOpenLabel: "Menu",
    menuCloseLabel: "Close",
    mainNavLabel: "Main",
    newTabLabel: "(opens in a new tab)",
  },

  /* ------------------------------------------------------------------
     KEY DATES (always YEAR-MONTH-DAY, e.g. "2027-03-13")
     ------------------------------------------------------------------ */
  dates: {
    // Leave as "" until the induction date is confirmed.
    // Once you add a date, the top of the page shows a day countdown.
    inductionDate: "",
    // Shown instead of the countdown while inductionDate is empty.
    inductionPlaceholder: "March 2027 (date TBC)",
    // Members whose OTI date is after this see the "Started late?" note.
    // Once inductionDate is set, the site compares each member's own
    // Day 90 with the induction date instead, which is more accurate.
    lateStartCutoff: "2026-12-31",
    // Change this whenever you update the site. It shows in the footer.
    lastUpdated: "2026-10-29",
  },

  /* ------------------------------------------------------------------
     TOP MENU
     "href" must match a section on the page: #welcome, #roadmap,
     or #links.
     ------------------------------------------------------------------ */
  nav: [
    { label: "Welcome Pack", href: "#welcome" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Links", href: "#links" },
  ],

  /* ------------------------------------------------------------------
     TOP OF THE PAGE (HERO)
     ------------------------------------------------------------------ */
  hero: {
    headline: "Welcome to JCI Alabang, Batch 2027",
    subhead:
      "Your guide from OTI to induction: what JCI is, what to do next, and who to ask.",
    countdownLabel: "Your induction",
    daysToGoLabel: "days to go",
    oneDayToGoLabel: "1 day to go",
    inductionTodayLabel: "Induction is today",
    inductionDoneLabel: "Batch 2027 has been inducted",
    primaryButton: { label: "Start with the Welcome Pack", href: "#welcome" },
    secondaryButton: { label: "See my Roadmap", href: "#roadmap" },
  },

  /* ------------------------------------------------------------------
     WELCOME PACK
     Each card opens and closes. To add a simple text card, copy the
     "What is JCI?" block and change the id, title and paragraphs.
     Cards with kind "departments", "officers", "glossary" or "faq"
     pull their details from the lists further down.
     ------------------------------------------------------------------ */
  welcome: {
    title: "JCI 101 for first-timers",
    intro:
      "Open any card to read more. Short on time? Read the first two and check who to ask.",
    cards: [
      {
        id: "what-is-jci",
        kind: "text",
        title: "What is JCI?",
        paragraphs: [
          "JCI stands for Junior Chamber International. It's a global network of young active citizens aged 18 to 40.",
          "It was founded in 1915 in St. Louis, USA, and now has chapters in more than 100 countries.",
          "JCI Philippines is the national organization. JCI Alabang is our local chapter, and the one you're joining.",
        ],
      },
      {
        id: "mission-vision",
        kind: "pairs",
        title: "Mission and vision",
        pairs: [
          {
            label: "Mission",
            text: "To provide development opportunities that empower young people to create positive change.",
          },
          {
            label: "Vision",
            text: "To be the leading global network of young active citizens.",
          },
        ],
        note: "You'll recite both from memory before induction (Step 6).",
      },
      {
        id: "creed",
        kind: "text",
        title: "JCI Creed",
        // One line per pair of quotes. Keep the comma after each line.
        paragraphs: [
          "We Believe:",
          "That faith in God gives meaning and purpose to human life;",
          "That the brotherhood of man transcends the sovereignty of nations;",
          "That economic justice can best be won by free men through free enterprise;",
          "That government should be of laws rather than of men;",
          "That earth’s great treasure lies in human personality;",
          "And that service to humanity is the best work of life.",
        ],
        note: "You'll recite this from memory before induction (Step 6).",
      },
      {
        id: "prayer",
        kind: "text",
        title: "JCI Prayer",
        // One line per pair of quotes, like the Creed above.
        paragraphs: ["We reaffirm our conviction that faith in God gives meaning and purpose to human life. May the Lord guide us in all our undertakings."],
        note: "You'll recite this from memory before induction (Step 6).",
      },
      {
        id: "about-alabang",
        kind: "text",
        title: "About JCI Alabang",
        paragraphs: [
          "JCI Alabang is a premier local chapter of Junior Chamber International Philippines based in Muntinlupa, Metro Manila. For 27 years, the chapter has been dedicated to empowering young active citizens aged 18 to 40 by fostering leadership development, driving sustainable community development, and creating meaningful social impact across the region.",
        ],
      },
      {
        id: "departments",
        kind: "departments",
        title: "The four departments",
        intro:
          "Before induction you'll try activities in at least three of these. At induction you join one.",
      },
      {
        id: "who-to-ask",
        kind: "officers",
        title: "Who to ask",
        intro:
          "Each officer looks after one part of your path. Not sure who to ask? Start with your buddy.",
      },
      {
        id: "buddy",
        kind: "list",
        title: "Your buddy",
        paragraphs: [
          "Every new member gets a buddy at OTI. Your buddy is an existing member who helps you through your first 90 days.",
        ],
        listTitle: "Go to your buddy for:",
        list: [
          "Getting added to the members' group chat",
          "Finding activities that count toward your three",
          "Practicing your recitation",
          "Knowing what to expect at trainings and events",
          "Anything you're not sure who to ask about",
        ],
        note: "Didn't get a buddy at OTI? Tell Membership Growth.",
      },
      {
        id: "glossary",
        kind: "glossary",
        title: "Glossary",
        intro: "Words you'll hear in your first few weeks.",
      },
      {
        id: "faq",
        kind: "faq",
        title: "Questions new members ask",
      },
    ],
  },

  /* ------------------------------------------------------------------
     DEPARTMENTS (one sentence each)
     ------------------------------------------------------------------ */
  departments: [
    {
      name: "Individual",
      description:
        "Helps you grow as a person through trainings and skills like public speaking and leadership.",
    },
    {
      name: "Community Development",
      description:
        "Runs projects that respond to real needs in the community.",
    },
    {
      name: "Business",
      description:
        "Builds business and entrepreneurship skills and connects members with people in business.",
    },
    {
      name: "International",
      description:
        "Connects you with JCI members, events and opportunities in other chapters and countries.",
    },
  ],

  /* ------------------------------------------------------------------
     OFFICERS ("Who to ask")
     Public site: names and roles only. Never add phone numbers or
     personal emails here. To add an officer, copy one block.
     ------------------------------------------------------------------ */
  officers: [
    {
      role: "Membership Growth",
      name: "Marge Balquin",
      helpsWith: "OTI, your buddy, your 30/60/90-day check-ins, and recitation checks.",
    },
    {
      role: "Membership Engagement",
      name: "Steph Naval",
      helpsWith: "Open activities each month and how you take part.",
    },
    {
      role: "Local Skills Development",
      name: "Janine Landicho",
      helpsWith: "Foundational Training Part 1 and Part 2.",
    },
    {
      role: "PR & Branding",
      name: "Lester Villarmino",
      helpsWith: "Event promotion and new member features.",
    },
    {
      role: "VP for Individual Development",
      name: "Nikki Tayawa",
      helpsWith: "Co-chair slots and final approval for induction.",
    },
    {
      role: "Secretary General",
      name: "Jessica Osias",
      helpsWith: "Official membership records.",
    },
  ],

  /* ------------------------------------------------------------------
     GLOSSARY. To add a word, copy one line.
     ------------------------------------------------------------------ */
  glossary: [
    { term: "OTI", definition: "Opportunity to Impact. Your first session with the chapter, and Day 0 of your roadmap." },
    { term: "VPI", definition: "Vice President for Individual Development. Assigns co-chair slots and gives final approval for induction." },
    { term: "SG", definition: "Secretary General. Keeps the chapter's official membership records." },
    { term: "LSD", definition: "Local Skills Development. Runs Foundational Training Part 1 and Part 2." },
    { term: "Batch", definition: "The group of new members inducted together. You're in Batch 2027." },
    { term: "Chair / Co-chair", definition: "The chair leads a project. The co-chair works alongside the chair and shares the work." },
    { term: "JCI Action Framework", definition: "The four steps JCI uses to run projects: Analyze the need, Develop a plan, Execute it, then Review the results." },
    { term: "Foundational Training", definition: "The two training days every new member completes before induction: Part 1 (JCI Discover + JCI Explore) and Part 2 (JCI Project Management + JCI Protocol)." },
    { term: "Induction", definition: "The ceremony where you officially become a JCI Alabang member. Planned for March 2027." },
    { term: "Department", definition: "One of the four areas of work: Individual, Community Development, Business and International. You join one at induction." },
  ],

  /* ------------------------------------------------------------------
     FAQ. To add a question, copy one block. Replace anything in
     [CHAPTER TO CONFIRM] once the chapter has decided.
     ------------------------------------------------------------------ */
  faq: [
    {
      q: "How much are the membership dues, and how do I pay?",
      a: "[CHAPTER TO CONFIRM: dues amount, what they cover, and how to pay.] Until this is posted, ask Membership Growth.",
    },
    {
      q: "How much time will this take each month?",
      a: "Over your first 90 days, plan for two training days (Part 1 and Part 2), about one activity a month, and one co-chair project. [CHAPTER TO CONFIRM: typical hours per month.]",
    },
    {
      q: "What should I wear to events?",
      a: "[CHAPTER TO CONFIRM: dress code for meetings, trainings and projects.] If you're unsure, ask your buddy before the event.",
    },
    {
      q: "What happens if I fall behind?",
      a: "The roadmap is a recommended pace, not a deadline. If you're behind at Day 90, you and Membership Growth agree on a new date. You don't get dropped.",
    },
    {
      q: "Can I do this while working full-time?",
      a: "The roadmap is flexible, and you can agree on a different pace with Membership Growth if work gets busy. [CHAPTER TO CONFIRM: whether trainings and activities usually run on weekends or weeknights.]",
    },
    {
      q: "Where do I find upcoming activities?",
      a: "In the members' group chat and on our Facebook page. Your buddy can point you to the ones that count toward your three activities.",
    },
    {
      q: "What happens after induction?",
      a: "You join one of the four departments and keep growing: more trainings (JCI Achieve and JCI Admin), chairing a project on your own, and leadership roles when you're ready.",
    },
  ],

  /* ------------------------------------------------------------------
     NEW MEMBER ROADMAP
     ------------------------------------------------------------------ */
  roadmap: {
    title: "Your New Member Roadmap",
    intro:
      "This is the recommended pace from OTI to induction. If you're behind at Day 90, you and Membership Growth agree on a new date. You don't get dropped.",
    timelineTitle: "The path at a glance",
    checkInLabel: "Check-in",
    inductionTag: "Induction",
    dateTbcLabel: "Date TBC",

    // Timeline milestones, in order.
    milestones: [
      {
        id: "day0",
        label: "Day 0",
        isCheckIn: false,
        isInduction: false,
        items: [
          "Attend OTI",
          "Get your buddy",
          "Get the group chat invite",
          "Get the next Part 1 date",
          "Get this roadmap",
        ],
      },
      {
        id: "day30",
        label: "Day 30",
        isCheckIn: true,
        isInduction: false,
        items: [
          "Foundational Training Part 1 (JCI Discover + JCI Explore)",
          "At least 1 activity",
        ],
      },
      {
        id: "day60",
        label: "Day 60",
        isCheckIn: true,
        isInduction: false,
        items: [
          "Foundational Training Part 2 (JCI Project Management + JCI Protocol)",
          "At least 2 activities",
          "Co-chair project assigned",
        ],
      },
      {
        id: "day90",
        label: "Day 90",
        isCheckIn: true,
        isInduction: false,
        items: [
          "3 activities, one per department",
          "Chair or co-chair project completed",
          "Recitation passed",
        ],
      },
      {
        id: "induction",
        label: "March 2027",
        isCheckIn: false,
        isInduction: true,
        items: ["Inducted as a JCI Alabang member", "Join a department"],
      },
    ],

    stepsTitle: "The 8 steps",
    stepsIntro: "Open a step to see what counts, who helps you, and tips.",
    requirementsNote: "Steps 1 to 6 are your induction requirements.",
    inductionNote: "Steps 7 and 8 happen together at the induction.",
    labels: {
      stepPrefix: "Step",
      timing: "Recommended timing",
      owner: "Who helps you",
      whatCounts: "What counts",
      tips: "Tips",
      learning: "What you'll learn",
    },

    // The 8 steps. "isRequirement: true" marks steps 1 to 6 (the induction requirements).
    steps: [
      {
        id: "oti",
        number: 1,
        title: "Attend Opportunity to Impact (OTI)",
        isRequirement: true,
        timing: "Day 0",
        owner: "Membership Growth",
        whatCounts: [
          "Attending the OTI session.",
          "You leave with a buddy, the group chat invite, the next Part 1 date, and this roadmap.",
        ],
        tips: [
          "Put the Part 1 date in your calendar the same day.",
          "Count 30, 60 and 90 days from your OTI date and put those check-ins in your calendar.",
        ],
      },
      {
        id: "activities",
        number: 2,
        title: "Three activities, one per department",
        isRequirement: true,
        timing: "Aim for 1 by Day 30, 2 by Day 60, 3 by Day 90",
        owner: "Membership Engagement",
        whatCounts: [
          "One activity each from any 3 of the 4 departments.",
          "An active role: committee member, marshal, logistics or documentation. Just showing up doesn't count.",
          "Your chairmanship in Step 5 does not count toward these three.",
        ],
        tips: [
          "Ask your buddy or check the members' group chat for activities that count.",
          "One a month is enough. Spreading them out is easier than cramming before Day 90.",
          "Pick departments you're curious about. You'll choose one to join at induction.",
        ],
      },
      {
        id: "part1",
        number: 3,
        title: "Foundational Training Part 1: JCI Discover + JCI Explore",
        isRequirement: true,
        timing: "By Day 30 (both modules on the same day)",
        owner: "Local Skills Development",
        whatCounts: ["Completing both modules on the training day."],
        learning: {
          note: "",
          modules: [
            { name: "JCI Discover", points: ["[ADD LEARNING POINTS FROM THE ROADMAP PDF]"] },
            { name: "JCI Explore", points: ["[ADD LEARNING POINTS FROM THE ROADMAP PDF]"] },
          ],
        },
        tips: ["You get the next Part 1 date at OTI. Register as soon as registration opens."],
      },
      {
        id: "part2",
        number: 4,
        title: "Foundational Training Part 2: JCI Project Management + JCI Protocol",
        isRequirement: true,
        timing: "By Day 60 (both modules on the same day)",
        owner: "Local Skills Development",
        whatCounts: ["Completing both modules on the training day."],
        learning: {
          note: "Summary – official course outline to follow",
          modules: [
            { name: "JCI Project Management", points: ["[ADD LEARNING POINTS FROM THE ROADMAP PDF]"] },
            { name: "JCI Protocol", points: ["[ADD LEARNING POINTS FROM THE ROADMAP PDF]"] },
          ],
        },
        tips: ["Take Part 2 before your co-chair project. It covers the planning you'll use there."],
      },
      {
        id: "project",
        number: 5,
        title: "Chair or co-chair one project",
        isRequirement: true,
        timing: "By Day 90, after Part 2",
        owner: "VPI, with project chairs",
        whatCounts: [
          "Chairing or co-chairing one chapter project. Co-chair is the recommended default: you learn alongside an experienced chair.",
          "Running it with the JCI Action Framework: Analyze, Develop, Execute, Review.",
          "Ending with a short results report.",
        ],
        tips: [
          "Your co-chair project is assigned around Day 60.",
          "This project doesn't count toward your three activities in Step 2.",
        ],
      },
      {
        id: "recitation",
        number: 6,
        title: "Recite the JCI Creed, Mission, Vision and Prayer",
        isRequirement: true,
        timing: "By Day 90, at any chapter meeting",
        owner: "Membership Growth",
        whatCounts: ["Reciting all four from memory to an officer."],
        tips: [
          "The full texts are in the Welcome Pack.",
          "Practice with your buddy first.",
          "Learn one a week and you'll have all four well before Day 90.",
        ],
      },
      {
        id: "induction",
        number: 7,
        title: "Induction",
        isRequirement: false,
        highlight: "induction",
        timing: "March 2027 (date TBC)",
        owner: "VPI and Secretary General",
        whatCounts: ["Steps 1 to 6 done, with final approval from the VPI."],
        tips: ["[CHAPTER TO CONFIRM: what to wear and bring on induction day.]"],
      },
      {
        id: "department",
        number: 8,
        title: "Join a department",
        isRequirement: false,
        timing: "At induction",
        owner: "VPI",
        whatCounts: ["Choosing one of the four departments, based on the three you tried in Step 2."],
        tips: ["Ask yourself which activity you'd happily do again."],
      },
    ],

    afterInduction: {
      title: "After induction",
      body: "Stage 5 (Development) starts. You keep growing with JCI Achieve and JCI Admin trainings, chair a project on your own, and take on leadership roles.",
    },
  },

  /* ------------------------------------------------------------------
     IMPORTANT LINKS
     To add a link, copy one line inside a group and change the details.
     - href "#": link not ready yet. Shows an [ADD LINK] label.
     - href null: no link on purpose, just a note (like the group chat).
     - Email links start with "mailto:".
     Never put the members' group chat invite link here.
     ------------------------------------------------------------------ */
  links: {
    title: "Important links",
    intro: "Sign-ups, and where to find us.",
    placeholderLabel: "[ADD LINK]",
    groups: [
      {
        title: "Get started",
        items: [
          { label: "OTI registration", href: "#", description: "Sign up for the next Opportunity to Impact session." },
          { label: "Membership application form", href: "#", description: "Fill this in after your OTI." },
          { label: "Dues payment instructions", href: "#", description: "[CHAPTER TO CONFIRM: amount and how to pay.]" },
        ],
      },
      {
        title: "Stay connected",
        items: [
          { label: "Facebook page", href: "https://www.facebook.com/alabangjaycees", description: "Chapter news and event announcements." },
          { label: "Instagram", href: "https://www.instagram.com/jcialabang", description: "Event highlights and new member features." },
          { label: "Chapter email", href: "mailto:admin@jcialabang.com", description: "admin@jcialabang.com" },
          { label: "Members' group chat", href: null, description: "Your buddy will add you." },
        ],
      },
      {
        title: "JCI network",
        items: [
          { label: "JCI Philippines", href: "https://jciphilippines.com/", description: "The national organization." },
          { label: "JCI International", href: "https://jci.cc", description: "The global network." },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------
     FOOTER
     ------------------------------------------------------------------ */
  footer: {
    socialNavLabel: "JCI Alabang online",
    lastUpdatedLabel: "Last updated",
    // icon can be "mail" or "" (none)
    social: [
      { label: "Facebook", href: "https://www.facebook.com/alabangjaycees", icon: "" },
      { label: "Instagram", href: "https://www.instagram.com/jcialabang", icon: "" },
      { label: "Email", href: "mailto:admin@jcialabang.com", icon: "mail" },
    ],
  },
};

/* Turns straight quotes typed into CONTENT into proper typographic ones
   (it's -> it’s, "x" -> “x”) everywhere on the site. Links, dates and ids
   are left untouched. Editors can keep typing normal quotes. */
const LITERAL_KEYS = new Set([
  "href", "link", "logoUrl", "id", "color", "icon", "kind", "highlight",
  "date", "hideAfter", "inductionDate", "lateStartCutoff", "lastUpdated",
]);
function smartenQuotes(node) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => {
      if (typeof item === "string") node[i] = smartenText(item);
      else smartenQuotes(item);
    });
  } else if (node && typeof node === "object") {
    Object.keys(node).forEach((key) => {
      const value = node[key];
      if (typeof value === "string") {
        if (!LITERAL_KEYS.has(key)) node[key] = smartenText(value);
      } else smartenQuotes(value);
    });
  }
}
function smartenText(text) {
  return text.replace(/"([^"]*)"/g, "\u201C$1\u201D").replace(/'/g, "\u2019");
}
smartenQuotes(CONTENT);

/* ==========================================================================
   2. STYLES: brand colors and a few rules Tailwind can't express with
   core classes. Plain CSS, so it works in the preview and in Vite.
   ========================================================================== */

const HUB_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.jh { font-family: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #13112E; background: #FFFFFF; line-height: 1.6; -webkit-font-smoothing: antialiased; }
.jh *, .jh *::before, .jh *::after { box-sizing: border-box; }
.jh h1, .jh h2, .jh h3, .jh h4, .jh h5 { line-height: 1.2; }
.jh :focus-visible { outline: 3px solid #0095DA; outline-offset: 3px; border-radius: 8px; }
.jh-on-dark :focus-visible { outline-color: #5BBDBA; }
@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
.jh section[id] { scroll-margin-top: 80px; }

.jh-skip { position: absolute; left: -9999px; top: 0; }
.jh-skip:focus { left: 16px; top: 12px; z-index: 100; background: #13112E; color: #fff; padding: 12px 16px; border-radius: 8px; }

.jh-tap { min-height: 44px; }

/* Brand colors. #0072A8 is a darker JCI blue used wherever white text or
   small blue text sits on white, because #0095DA fails AA contrast there. */
.jh-bg-navy { background: #13112E; }
.jh-bg-mist { background: #F2F7FB; }
.jh-bg-royal { background: #1F4788; }
.jh-bg-yellow { background: #F2C511; }
.jh-text-navy { color: #13112E; }
.jh-text-blue { color: #0072A8; }
.jh-text-royal { color: #1F4788; }
.jh-text-teal { color: #5BBDBA; }
.jh-text-muted { color: #4A4F6A; }
.jh-text-soft { color: #C8D2E8; }

.jh-border { border: 1px solid #DCE6EF; }
.jh-border-b { border-bottom: 1px solid #DCE6EF; }
.jh-border-t { border-top: 1px solid #DCE6EF; }
.jh-border-t-dark { border-top: 1px solid rgba(255,255,255,.16); }

.jh-btn-primary { background: #0095DA; color: #13112E; }
.jh-btn-primary:hover { background: #3DB0E6; }
.jh-btn-outline { border: 2px solid rgba(255,255,255,.6); color: #FFFFFF; }
.jh-btn-outline:hover { background: rgba(255,255,255,.08); }
.jh-btn-solid { background: #0072A8; color: #FFFFFF; }
.jh-btn-solid:hover { background: #1F4788; }
.jh-btn-quiet { color: #1F4788; border: 1px solid #C9D6E3; background: #FFFFFF; }
.jh-btn-quiet:hover { background: #F2F7FB; }

.jh-navlink { color: #13112E; }
.jh-navlink:hover { background: #F2F7FB; }
.jh-link { color: #0072A8; text-decoration: underline; text-underline-offset: 3px; }
.jh-link:hover { color: #1F4788; }

.jh-countdown { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.18); }

.jh-arcs { position: absolute; right: -140px; bottom: -150px; width: 460px; height: 460px; opacity: .45; pointer-events: none; }
@media (min-width: 768px) { .jh-arcs { right: -40px; bottom: -80px; width: 640px; height: 640px; opacity: 1; } }

.jh-disclosure-btn:hover { background: rgba(31,71,136,.05); }
.jh-chevron { transition: transform .2s ease; }
.jh-chevron-open { transform: rotate(180deg); }

.jh-stepnum { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 9999px; font-weight: 800; flex-shrink: 0; }

/* Timeline: vertical line on mobile, horizontal from 768px */
.jh-timeline::before { content: ""; position: absolute; left: 15px; top: 12px; bottom: 12px; width: 2px; background: #C9D9E8; }
@media (min-width: 768px) { .jh-timeline::before { left: 16px; right: 16px; top: 15px; bottom: auto; width: auto; height: 2px; } }
.jh-tl-dot { position: absolute; left: 4px; top: 4px; width: 24px; height: 24px; border-radius: 9999px; border: 4px solid #F2F7FB; }
.jh-dot-start { background: #0095DA; }
.jh-dot-checkin { background: #1F4788; }
.jh-dot-induction { background: #F2C511; box-shadow: 0 0 0 2px #13112E; }
.jh-induction-card { border: 2px solid #F2C511; }

.jh-tag-checkin { background: #E3EBF6; color: #1F4788; }


@media (prefers-reduced-motion: reduce) { .jh-chevron { transition: none; } }

.jh-footer-link { border: 1px solid rgba(255,255,255,.3); color: #FFFFFF; }
.jh-footer-link:hover { background: rgba(255,255,255,.08); }

/* Anything in [square brackets] is highlighted so it gets filled in before launch */
.jh-placeholder { background: #FDECEC; color: #8A1C1C; border-radius: 4px; padding: 0 4px; font-weight: 600; }
`;

/* ==========================================================================
   3. HELPERS
   ========================================================================== */

// Parses "YYYY-MM-DD" as a local date (not UTC), so dates don't shift a day.
function parseDate(value) {
  if (typeof value !== "string") return null;
  const match = value.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (!match) return null;
  const y = Number(match[1]);
  const m = Number(match[2]);
  const d = Number(match[3]);
  const date = new Date(y, m - 1, d);
  if (Number.isNaN(date.getTime()) || date.getMonth() !== m - 1) return null;
  return date;
}

function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function daysBetween(from, to) {
  return Math.round((to.getTime() - from.getTime()) / 86400000);
}

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function isExternal(href) {
  return typeof href === "string" && /^https?:\/\//.test(href);
}

function isPlaceholderHref(href) {
  return href === "#" || href === "";
}

// Wraps any [PLACEHOLDER] text in a highlight so it's easy to spot.
function rich(text) {
  if (typeof text !== "string") return text;
  const parts = text.split(/(\[[^\]]+\])/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <span key={i} className="jh-placeholder">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

/* ==========================================================================
   4. COMPONENTS
   ========================================================================== */

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SmartLink({ href, children, className = "", onDark = false }) {
  if (href === null || href === undefined) {
    return <span className={className}>{children}</span>;
  }
  if (isPlaceholderHref(href)) {
    return (
      <span className={`${className} flex-wrap`}>
        {children}{" "}
        <span className="jh-placeholder text-xs">{CONTENT.links.placeholderLabel}</span>
      </span>
    );
  }
  const external = isExternal(href);
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && (
        <>
          <ExternalLink
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 ${onDark ? "" : "jh-text-blue"}`}
          />
          <span className="sr-only"> {CONTENT.site.newTabLabel}</span>
        </>
      )}
    </a>
  );
}

function Disclosure({
  title,
  meta,
  leading,
  children,
  defaultOpen = false,
  headingLevel = 3,
  surface = "mist",
  className = "",
}) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const btnId = `d${uid.replace(/[^a-zA-Z0-9]/g, "")}-btn`;
  const panelId = `d${uid.replace(/[^a-zA-Z0-9]/g, "")}-panel`;
  const Heading = `h${headingLevel}`;
  const surfaceClass = surface === "white" ? "bg-white jh-border" : "jh-bg-mist";

  return (
    <div className={`rounded-2xl ${surfaceClass} ${className}`}>
      <Heading className="m-0 text-base font-bold">
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="jh-tap jh-disclosure-btn flex w-full cursor-pointer items-center gap-4 rounded-2xl px-4 py-4 text-left sm:px-5"
        >
          {leading}
          <span className="flex-1">
            <span className="block text-base font-bold leading-snug sm:text-lg">{title}</span>
            {meta && (
              <span className="mt-1 block text-sm font-medium jh-text-muted">{meta}</span>
            )}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`jh-chevron h-5 w-5 shrink-0 jh-text-royal ${open ? "jh-chevron-open" : ""}`}
          />
        </button>
      </Heading>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        hidden={!open}
        className="px-4 pb-5 sm:px-5"
      >
        {children}
      </div>
    </div>
  );
}

function Section({ id, title, intro, tone = "white", split = false, children }) {
  const headingId = `${id}-title`;
  const bg = tone === "mist" ? "jh-bg-mist" : "bg-white";

  if (split) {
    return (
      <section id={id} aria-labelledby={headingId} className={bg}>
        <Container className="grid gap-8 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 id={headingId} className="text-3xl font-extrabold tracking-tight md:text-4xl">
                {title}
              </h2>
              {intro && <p className="mt-3 text-lg jh-text-muted">{intro}</p>}
            </div>
          </div>
          <div className="lg:col-span-8">{children}</div>
        </Container>
      </section>
    );
  }

  return (
    <section id={id} aria-labelledby={headingId} className={bg}>
      <Container className="py-16 md:py-24">
        <h2 id={headingId} className="text-3xl font-extrabold tracking-tight md:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl text-lg jh-text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

/* ---------- Header ---------- */

function Wordmark() {
  const { site } = CONTENT;
  // LOGO SWAP: set CONTENT.site.logoUrl. No change needed here.
  if (site.logoUrl) {
    return <img src={site.logoUrl} alt={site.logoAlt} className="h-9 w-auto" />;
  }
  return <span>{site.chapterName}</span>;
}

function Header() {
  const { site, nav } = CONTENT;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-white jh-border-b">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="jh-tap inline-flex items-center rounded-lg text-xl font-extrabold tracking-tight jh-text-navy"
        >
          <Wordmark />
        </a>

        <nav aria-label={site.mainNavLabel} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="jh-tap jh-navlink inline-flex items-center rounded-lg px-4 text-sm font-semibold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="jh-tap jh-btn-quiet inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="jh-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
          {open ? site.menuCloseLabel : site.menuOpenLabel}
        </button>
      </Container>

      <nav
        id="jh-mobile-nav"
        aria-label={site.mainNavLabel}
        hidden={!open}
        className="jh-border-t bg-white md:hidden"
      >
        <ul className="mx-auto w-full max-w-6xl px-5 py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="jh-tap jh-navlink flex items-center rounded-lg px-3 text-base font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */

function HeroArcs() {
  // Concentric arcs inspired by the roadmap cover. Pure SVG, no image files.
  const rings = [
    { r: 140, color: "#0095DA", w: 26, o: 1 },
    { r: 200, color: "#1F4788", w: 14, o: 1 },
    { r: 250, color: "#5BBDBA", w: 5, o: 0.9 },
    { r: 305, color: "#0095DA", w: 3, o: 0.75 },
    { r: 370, color: "#1F4788", w: 22, o: 0.85 },
    { r: 440, color: "#0095DA", w: 2, o: 0.55 },
    { r: 510, color: "#5BBDBA", w: 2, o: 0.4 },
    { r: 580, color: "#1F4788", w: 8, o: 0.5 },
  ];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="jh-arcs"
      viewBox="0 0 600 600"
      fill="none"
    >
      {rings.map((ring) => (
        <circle
          key={ring.r}
          cx="600"
          cy="600"
          r={ring.r}
          stroke={ring.color}
          strokeWidth={ring.w}
          opacity={ring.o}
        />
      ))}
    </svg>
  );
}

function Hero({ today }) {
  const { hero, dates, site } = CONTENT;
  const induction = parseDate(dates.inductionDate);

  let main = dates.inductionPlaceholder;
  let sub = null;
  if (induction) {
    const n = daysBetween(today, induction);
    sub = formatDate(induction);
    if (n > 1) main = `${n} ${hero.daysToGoLabel}`;
    else if (n === 1) main = hero.oneDayToGoLabel;
    else if (n === 0) main = hero.inductionTodayLabel;
    else main = hero.inductionDoneLabel;
  }

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="jh-on-dark relative overflow-hidden jh-bg-navy text-white"
    >
      <HeroArcs />
      <Container className="relative pb-20 pt-14 md:pb-28 md:pt-24">
        <p className="text-base font-semibold jh-text-teal">{site.tagline}</p>
        <h1
          id="hero-title"
          className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          {hero.headline}
        </h1>
        <p className="mt-5 max-w-xl text-lg jh-text-soft">{hero.subhead}</p>

        <div className="jh-countdown mt-8 inline-flex items-center gap-4 rounded-2xl px-5 py-4">
          <Calendar aria-hidden="true" className="h-6 w-6 shrink-0 jh-text-teal" />
          <div>
            <p className="text-sm jh-text-soft">{hero.countdownLabel}</p>
            <p className="text-xl font-bold">{main}</p>
            {sub && <p className="text-sm jh-text-soft">{sub}</p>}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={hero.primaryButton.href}
            className="jh-tap jh-btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-bold"
          >
            {hero.primaryButton.label}
          </a>
          <a
            href={hero.secondaryButton.href}
            className="jh-tap jh-btn-outline inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-bold"
          >
            {hero.secondaryButton.label}
          </a>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Welcome Pack ---------- */

function Note({ children }) {
  return <p className="mt-4 text-sm font-medium jh-text-royal">{children}</p>;
}

function WelcomeCardBody({ card }) {
  const { departments, officers, glossary, faq } = CONTENT;

  switch (card.kind) {
    case "text":
      return (
        <div className="max-w-2xl space-y-3">
          {card.paragraphs.map((p, i) => (
            <p key={i} className={card.keepLineBreaks ? "whitespace-pre-line" : ""}>
              {rich(p)}
            </p>
          ))}
          {card.note && <Note>{card.note}</Note>}
        </div>
      );

    case "pairs":
      return (
        <div className="max-w-2xl">
          <dl className="space-y-4">
            {card.pairs.map((pair) => (
              <div key={pair.label} className="rounded-xl bg-white p-4 jh-border">
                <dt className="text-sm font-bold jh-text-blue">{pair.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{pair.text}</dd>
              </div>
            ))}
          </dl>
          {card.note && <Note>{card.note}</Note>}
        </div>
      );

    case "list":
      return (
        <div className="max-w-2xl">
          {card.paragraphs.map((p, i) => (
            <p key={i}>{rich(p)}</p>
          ))}
          <p className="mt-4 font-semibold">{card.listTitle}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {card.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {card.note && <Note>{card.note}</Note>}
        </div>
      );

    case "departments":
      return (
        <div>
          {card.intro && <p className="max-w-2xl">{card.intro}</p>}
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {departments.map((d) => (
              <li key={d.name} className="rounded-xl bg-white p-4 jh-border">
                <p className="font-bold">{d.name}</p>
                <p className="mt-1 text-sm jh-text-muted">{d.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );

    case "officers":
      return (
        <div>
          {card.intro && <p className="max-w-2xl">{card.intro}</p>}
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {officers.map((o) => (
              <li key={o.role} className="rounded-xl bg-white p-4 jh-border">
                <p className="text-sm font-semibold jh-text-blue">{o.role}</p>
                <p className="mt-1 text-lg font-bold">{rich(o.name)}</p>
                <p className="mt-2 text-sm jh-text-muted">{o.helpsWith}</p>
              </li>
            ))}
          </ul>
        </div>
      );

    case "glossary":
      return (
        <div className="max-w-2xl">
          {card.intro && <p>{card.intro}</p>}
          <dl className="mt-4 rounded-xl bg-white jh-border">
            {glossary.map((g, i) => (
              <div key={g.term} className={`p-4 ${i > 0 ? "jh-border-t" : ""}`}>
                <dt className="font-bold">{g.term}</dt>
                <dd className="mt-1 text-sm jh-text-muted">{g.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "faq":
      return (
        <div className="space-y-2">
          {faq.map((item) => (
            <Disclosure key={item.q} title={item.q} headingLevel={4} surface="white">
              <p className="max-w-2xl">{rich(item.a)}</p>
            </Disclosure>
          ))}
        </div>
      );

    default:
      return null;
  }
}

function WelcomeSection() {
  const { welcome } = CONTENT;
  return (
    <Section id="welcome" title={welcome.title} intro={welcome.intro} split>
      <div className="space-y-3">
        {welcome.cards.map((card, i) => (
          <Disclosure key={card.id} title={card.title} defaultOpen={i === 0}>
            <WelcomeCardBody card={card} />
          </Disclosure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Roadmap ---------- */

function Timeline() {
  const { roadmap, dates } = CONTENT;
  const induction = parseDate(dates.inductionDate);

  return (
    <ol className="jh-timeline relative mt-8 grid gap-6 md:grid-cols-5 md:gap-4">
      {roadmap.milestones.map((m) => {
        const dotClass = m.isInduction
          ? "jh-dot-induction"
          : m.isCheckIn
          ? "jh-dot-checkin"
          : "jh-dot-start";
        return (
          <li key={m.id} className="relative pl-12 md:pl-0 md:pt-12">
            <span aria-hidden="true" className={`jh-tl-dot ${dotClass}`} />
            <div
              className={`h-full rounded-2xl bg-white p-4 ${
                m.isInduction ? "jh-induction-card" : "jh-border"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-lg font-extrabold">{m.label}</h4>
                {m.isCheckIn && (
                  <span className="jh-tag-checkin rounded-full px-2 py-0.5 text-xs font-bold">
                    {roadmap.checkInLabel}
                  </span>
                )}
                {m.isInduction && (
                  <span className="jh-bg-yellow jh-text-navy rounded-full px-2 py-0.5 text-xs font-bold">
                    {roadmap.inductionTag}
                  </span>
                )}
              </div>
              {m.isInduction && (
                <p className="mt-1 text-sm font-semibold jh-text-muted">
                  {induction ? formatDate(induction) : roadmap.dateTbcLabel}
                </p>
              )}
              <ul className="mt-3 space-y-2 text-sm">
                {m.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="jh-text-royal">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function StepCard({ step }) {
  const { labels } = CONTENT.roadmap;
  const isInduction = step.highlight === "induction";

  return (
    <li>
      <Disclosure
        surface="white"
        headingLevel={4}
        leading={
          <span
            aria-hidden="true"
            className={`jh-stepnum ${
              isInduction ? "jh-bg-yellow jh-text-navy" : "jh-bg-royal text-white"
            }`}
          >
            {step.number}
          </span>
        }
        title={
          <>
            <span className="sr-only">
              {labels.stepPrefix} {step.number}:{" "}
            </span>
            {step.title}
          </>
        }
        meta={step.timing}
      >
        <dl className="grid gap-3 rounded-xl jh-bg-mist p-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold jh-text-muted">{labels.timing}</dt>
            <dd className="font-semibold">{step.timing}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold jh-text-muted">{labels.owner}</dt>
            <dd className="font-semibold">{step.owner}</dd>
          </div>
        </dl>

        <h5 className="mt-5 font-bold">{labels.whatCounts}</h5>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {step.whatCounts.map((item) => (
            <li key={item}>{rich(item)}</li>
          ))}
        </ul>

        {step.learning && (
          <>
            <h5 className="mt-5 font-bold">{labels.learning}</h5>
            {step.learning.note && (
              <p className="mt-1 text-sm font-medium jh-text-royal">{step.learning.note}</p>
            )}
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {step.learning.modules.map((mod) => (
                <div key={mod.name} className="rounded-xl p-4 jh-border">
                  <p className="font-semibold">{mod.name}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                    {mod.points.map((pt) => (
                      <li key={pt}>{rich(pt)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {step.tips && step.tips.length > 0 && (
          <>
            <h5 className="mt-5 font-bold">{labels.tips}</h5>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {step.tips.map((tip) => (
                <li key={tip}>{rich(tip)}</li>
              ))}
            </ul>
          </>
        )}
      </Disclosure>
    </li>
  );
}

function RoadmapSection() {
  const { roadmap } = CONTENT;
  const required = roadmap.steps.filter((s) => s.isRequirement);
  const atInduction = roadmap.steps.filter((s) => !s.isRequirement);

  return (
    <Section id="roadmap" title={roadmap.title} intro={roadmap.intro} tone="mist">
      <h3 className="text-xl font-extrabold">{roadmap.timelineTitle}</h3>
      <Timeline />

      <div className="mt-16 max-w-3xl">
        <h3 className="text-xl font-extrabold">{roadmap.stepsTitle}</h3>
        <p className="mt-1 jh-text-muted">{roadmap.stepsIntro}</p>

        <p className="mt-6 text-sm font-bold jh-text-royal">{roadmap.requirementsNote}</p>
        <ol className="mt-3 space-y-3">
          {required.map((s) => (
            <StepCard key={s.id} step={s} />
          ))}
        </ol>

        <p className="mt-8 text-sm font-bold jh-text-royal">{roadmap.inductionNote}</p>
        <ol start={required.length + 1} className="mt-3 space-y-3">
          {atInduction.map((s) => (
            <StepCard key={s.id} step={s} />
          ))}
        </ol>
      </div>

      <div className="jh-on-dark mt-16 rounded-2xl jh-bg-navy p-6 text-white sm:p-8">
        <h3 className="text-2xl font-extrabold">{roadmap.afterInduction.title}</h3>
        <p className="mt-2 max-w-2xl jh-text-soft">{roadmap.afterInduction.body}</p>
      </div>
    </Section>
  );
}

/* ---------- Links ---------- */

function LinksSection() {
  const { links } = CONTENT;
  return (
    <Section id="links" title={links.title} intro={links.intro}>
      <div className="grid gap-6 md:grid-cols-3">
        {links.groups.map((group) => (
          <div key={group.title} className="rounded-2xl jh-bg-mist p-5 sm:p-6">
            <h3 className="text-lg font-extrabold">{group.title}</h3>
            <ul className="mt-3">
              {group.items.map((item, i) => (
                <li key={item.label} className={`py-3 ${i > 0 ? "jh-border-t" : ""}`}>
                  <SmartLink
                    href={item.href}
                    className={`inline-flex items-center gap-2 font-semibold ${
                      item.href && !isPlaceholderHref(item.href) ? "jh-link jh-tap" : ""
                    }`}
                  >
                    {item.label}
                  </SmartLink>
                  {item.description && (
                    <p className="mt-0.5 text-sm jh-text-muted">{rich(item.description)}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  const { site, dates, footer } = CONTENT;
  const updated = parseDate(dates.lastUpdated);

  return (
    <footer className="jh-on-dark jh-bg-navy text-white">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xl font-extrabold">{site.chapterName}</p>
            <p className="mt-1 font-semibold jh-text-teal">{site.tagline}</p>
            <p className="mt-4 max-w-md text-sm jh-text-soft">{rich(site.contactLine)}</p>
          </div>
          <nav aria-label={footer.socialNavLabel}>
            <ul className="flex flex-wrap gap-2">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <SmartLink
                    href={s.href}
                    onDark
                    className="jh-tap jh-footer-link inline-flex items-center gap-2 rounded-lg px-4 text-sm font-semibold"
                  >
                    {s.icon === "mail" && <Mail aria-hidden="true" className="h-4 w-4" />}
                    {s.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="jh-border-t-dark mt-10 pt-6 text-sm jh-text-soft">
          {footer.lastUpdatedLabel} {updated ? formatDate(updated) : dates.lastUpdated}
        </p>
      </Container>
    </footer>
  );
}

/* ---------- Page ---------- */

export default function MemberHub() {
  const today = useMemo(() => startOfToday(), []);

  return (
    <div className="jh min-h-screen">
      <style>{HUB_CSS}</style>
      <a href="#main" className="jh-skip">
        {CONTENT.site.skipLinkLabel}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero today={today} />
        <WelcomeSection />
        <RoadmapSection />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
}
