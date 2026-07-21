'use strict';

const {
  p, h2, h3, h4, pageBreak, chapterDivider,
  callout, procedure, checklist, table, specTable,
  troubleshootingSection, writeChapters,
} = require('./shared');

// ─────────────────────────────────────────────────────────────────────────────
// CHAPTER BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

function chBrandStandards() {
  let c = '';
  c += p('Every customer interaction is a representation of the brand. Consistency across all touchpoints — from the first phone call to the post-delivery follow-up — defines how the market perceives the business. This chapter establishes the non-negotiable standards every team member must internalize before their first day in a customer-facing role.');

  c += h2('Brand Identity & Core Values');
  c += p('The shop\'s brand rests on three pillars: **Expertise**, **Transparency**, and **Care**. Each word carries specific behavioral meaning.');

  c += table(
    ['Pillar', 'What It Means in Practice', 'How Customers Experience It'],
    [
      ['Expertise', 'Technical accuracy, confident answers, no guessing', 'They trust our recommendations without shopping them'],
      ['Transparency', 'Honest timelines, clear pricing, proactive updates', 'They never feel surprised or misled'],
      ['Care', 'Remembering their name, treating the vehicle with respect', 'They feel like a valued guest, not a ticket number'],
    ]
  );

  c += h2('Visual & Verbal Brand Standards');
  c += p('Brand standards extend beyond logos. The following elements must be consistent in every customer-facing context.');

  c += h3('Written Communication Standards');
  c += checklist([
    'Use correct grammar and punctuation in all texts, emails, and DMs',
    'Spell out the shop name in full on first reference — never abbreviate informally',
    'Use the approved email signature template (see Appendix A)',
    'Never use ALL CAPS in customer communication — it reads as shouting',
    'Avoid slang or abbreviations (e.g., "lol", "tbh") in professional correspondence',
    'Emojis are permitted sparingly in text messages only — never in formal emails',
    'Response time target: phone within 3 rings; text/email within 90 minutes during business hours',
  ]);

  c += h3('Verbal Tone Standards');
  c += p('Every team member must project warmth and confidence simultaneously. Warmth without confidence reads as uncertainty; confidence without warmth reads as arrogance. The target tone is "knowledgeable friend."');

  c += callout('tip', '**Warmth cues:** Use the customer\'s first name at least twice during any call. Thank them for calling or visiting. Ask one non-transactional question ("How\'s your day going?") before diving into business.\n\n**Confidence cues:** Give direct answers. Avoid "I think" or "probably." If you don\'t know, say "Let me find out for certain and come right back to you."');

  c += h3('Appearance & Environment Standards');
  c += checklist([
    'Staff visible to customers wear a branded shirt or apron at all times during business hours',
    'The customer lounge is clean, well-lit, and stocked with refreshments before opening each day',
    'Reception desk is clear of personal items, food, and non-work materials during open hours',
    'Music (if played) is at conversation-friendly volume — customer should not need to raise voice',
    'Vehicle keys are stored in a designated secure area, never left on a counter or desk',
    'Installer bay doors facing customer areas remain closed or present a tidy, organized view',
    'Customer vehicles are treated as if they belong to your most important client — every single time',
  ]);

  c += h2('Service Philosophy: The Guest Experience Model');
  c += p('Automotive service businesses historically treat customers transactionally. The competitive advantage of an experience-focused shop is that customers return, refer, and spend more. The Guest Experience Model has four stages:');

  c += procedure('The Four Stages of Guest Experience', [
    '**Welcome** — The customer feels acknowledged immediately and valued from first contact',
    '**Inform** — The customer fully understands what will happen, when, and at what cost',
    '**Update** — The customer is kept in the loop throughout the service without having to chase us',
    '**Deliver** — The vehicle is returned in better condition than expected, and the customer feels educated, not just handed a receipt',
  ]);

  c += h2('Brand Voice Dos and Don\'ts');
  c += table(
    ['Context', 'Do Say', 'Never Say'],
    [
      ['Quoting timeline', '"We expect it to be ready Thursday afternoon"', '"It should be done by Thursday" (non-committal)'],
      ['Answering a technical question', '"Great question. Here\'s exactly how that works…"', '"I think it\'s probably…"'],
      ['Acknowledging a delay', '"I want to keep you updated — we\'ve run into X and your new ETA is Y"', '"It\'s taking longer than expected" with no new ETA'],
      ['Responding to a complaint', '"I hear you, and I want to make this right. Here\'s what I\'m going to do…"', '"I\'m sorry you feel that way"'],
      ['Discussing pricing', '"The investment for this service is…"', '"It\'s going to cost you…"'],
    ]
  );

  c += h2('Brand Standards Audit Checklist');
  c += p('Conduct a monthly brand standards audit to ensure all elements remain consistent as the business grows. Assign the audit to a team lead and file the results in the operations record.');

  c += checklist([
    'Email signature template matches the current approved format across all staff accounts',
    'All phone scripts reviewed within the last 90 days and confirmed current',
    'Customer lounge: furniture clean; brochures current; refreshments stocked; music at appropriate level',
    'Staff appearance: all customer-facing staff in branded attire before opening',
    'Social media bios and profile photos are current and consistent with the brand voice standards',
    'Google Business Profile: hours current; photos updated within 60 days; description accurate',
    'Shop exterior signage: clean; lighting functional; visible from street',
    'Review response audit: all Google reviews responded to within 48 hours',
  ]);

  return c;
}

function chTeamRoles() {
  let c = '';
  c += p('A well-structured customer service team prevents gaps in accountability and ensures every customer has a clearly defined point of contact. This chapter defines each role, its scope, its authority limits, and how roles interact during the customer journey.');

  c += h2('Organizational Structure Overview');
  c += table(
    ['Role', 'Primary Function', 'Customer-Facing Level', 'Authority Limit'],
    [
      ['Customer Service Manager (CSM)', 'Oversees all CS operations, handles escalations, owns KPIs', 'High — takes all escalated issues', 'Full service/pricing adjustments up to shop policy cap'],
      ['Service Advisor (SA)', 'Primary customer contact for quotes, intake, updates, delivery', 'Primary — owns each ticket', 'Standard discounts per pricing policy'],
      ['Scheduler / Office Admin', 'Manages calendar, confirms appointments, handles inbound routing', 'Phone/text — not technical discussions', 'No pricing authority'],
      ['Lead Installer', 'Subject-matter expert called in for technical questions', 'On request only — not primary contact', 'Technical decisions on install approach'],
      ['Shop Owner / GM', 'Final escalation authority, policy decisions', 'Major exceptions only', 'Unlimited'],
    ]
  );

  c += h2('Service Advisor — Full Role Definition');
  c += p('The Service Advisor is the backbone of the customer experience. This role requires equal parts technical literacy and interpersonal skill.');

  c += h3('Core Responsibilities');
  c += checklist([
    'Answer all inbound inquiries (phone, web, walk-in) within SLA targets',
    'Conduct in-person or video consultations and produce written estimates within 24 hours',
    'Perform vehicle intake walkaround and document pre-existing condition on intake form',
    'Set explicit customer expectations for timeline, process, and aftercare',
    'Provide proactive in-service status updates per communication schedule',
    'Conduct delivery walkthrough and collect payment',
    'Request review within 24 hours of delivery',
    'Log all customer interactions in CRM within same business day',
    'Identify upsell and cross-sell opportunities without pressure tactics',
  ]);

  c += h3('What Service Advisors Do NOT Do');
  c += checklist([
    'Promise a specific install outcome they cannot guarantee (e.g., "it will look invisible")',
    'Offer discounts beyond their authority without manager approval',
    'Commit to installation timelines without first checking with the lead installer',
    'Discuss another customer\'s vehicle, pricing, or situation',
    'Allow a customer into the installation bay without supervisor approval',
    'Accept verbal changes to an order without updating the written work order',
  ]);

  c += h2('Role Handoff Protocols');
  c += p('When a customer interaction must be transferred between team members, the handoff must be warm and seamless — never a blind transfer.');

  c += procedure('Warm Transfer Protocol', [
    'Inform the customer you are connecting them with the right person: "Let me bring in [Name], who handles this specifically"',
    'Brief the receiving team member verbally or via CRM note before they take over',
    'Introduce the customer to the new contact by name if they are physically present',
    'Confirm with the customer that they are comfortable with the transition',
    'Log the handoff in CRM with reason and outcome',
  ]);

  c += callout('warning', '**Never** say "That\'s not my department" to a customer without immediately offering to connect them to the right person. Every team member owns the customer experience, even when escalating.');

  c += h2('Cross-Department Communication Standards');
  c += p('Customer-facing staff and installers must communicate through structured channels to prevent promises being made that operations cannot fulfill.');

  c += table(
    ['Communication Need', 'Method', 'Timeline'],
    [
      ['Timeline estimate for a job', 'SA checks with Lead Installer before quoting customer', 'Before any customer commitment'],
      ['Status update on a running job', 'Installer messages SA via internal chat at agreed checkpoints', 'Per job-stage schedule'],
      ['Unexpected delay or complication', 'Installer notifies SA immediately — SA notifies customer within 30 min', 'As soon as discovered'],
      ['Quality concern before delivery', 'Lead Installer flags to SA before vehicle is staged for pickup', 'Before delivery call is made'],
      ['Customer complaint about install quality', 'SA escalates to Lead Installer and CSM within same business day', 'Same day'],
    ]
  );

  return c;
}

function chPhoneScripts() {
  let c = '';
  c += p('Phone calls remain the highest-conversion inbound channel for automotive restyling businesses. A well-handled call builds trust immediately; a poorly handled call sends the prospect to a competitor. Every team member who answers the phone must have these scripts internalized — not read aloud, but adapted naturally.');

  c += h2('Inbound Call — Standard Greeting');
  c += callout('script', '**[RING — Answer before the third ring]**\n\n"Thank you for calling [Shop Name], this is [Your Name]. How can I help you today?"\n\n**If they ask for a specific person who is unavailable:**\n"[Name] is with a customer right now — I want to make sure you\'re taken care of. My name is [Your Name]. What can I help you with?"\n\n**If they ask what you do:**\n"We specialize in automotive paint protection film, ceramic coatings, vinyl wrapping, and window tint — all professional-grade, done in our climate-controlled facility."');

  c += h2('Lead Qualification Call Flow');
  c += p('The goal of a first inbound call is NOT to quote a price — it is to qualify the lead, build rapport, and book a consultation. Price-only shoppers rarely convert to loyal clients.');

  c += procedure('Inbound Lead Call Flow', [
    '**Greet and identify yourself** — Name, shop name, offer help',
    '**Discover the vehicle** — "What kind of vehicle are we working with?" (Make, model, year, color)',
    '**Discover the goal** — "What are you looking to do with it?" Let them describe in their own words',
    '**Educate briefly** — Offer one or two relevant facts that position expertise before discussing price',
    '**Anchor value** — "We use commercial-grade film / coating / tint with a [X]-year warranty on the material and our workmanship"',
    '**Offer a consultation** — "The best next step is a quick no-obligation consultation where we look at the vehicle and walk you through your options — are you available for that?"',
    '**Book the appointment** — Get date, time, contact info; confirm via text immediately',
    '**Close warmly** — "We\'re looking forward to meeting you. If anything comes up before then, don\'t hesitate to reach out — you\'ll have my direct number."',
  ]);

  c += h2('Common Call Scenarios — Word-for-Word Scripts');

  c += h3('Scenario: "How much does it cost?"');
  c += callout('script', '"Great question — pricing really does vary depending on the vehicle size, which panels you want covered, and the film or coating tier you choose. For a [sedan / SUV / truck], a [service type] typically ranges from [low] to [high]. I\'d love to give you a firm number — the fastest way to do that is a quick five-minute look at the vehicle. When could you bring it by?"');

  c += h3('Scenario: "I got a cheaper quote somewhere else"');
  c += callout('script', '"That\'s really helpful to know, and I appreciate you being upfront about that. A few things that affect pricing are the film tier, warranty coverage, and installation environment. I can\'t speak to exactly what\'s included in their quote, but I\'m happy to walk you through what\'s included in ours so you\'re comparing apples to apples. Does that sound fair?"');

  c += h3('Scenario: "How long does it take?"');
  c += callout('script', '"For a [service type], we typically schedule [X to Y days] — that includes proper prep time, the install itself, and a post-cure period before we release the vehicle. We never rush a job, because the result has to be right. Does that timeline work for your schedule?"');

  c += h3('Scenario: Upset customer calling about a concern');
  c += callout('script', '"I\'m glad you called — I want to hear everything you\'re experiencing. Let me start by taking some notes so I don\'t miss anything. Can you walk me through what you\'re seeing?"\n\n[Listen fully without interrupting. Repeat back a summary.]\n\n"Here\'s what I\'d like to do: I want to have you bring the vehicle in so we can look at it together with our lead installer. That way we\'re looking at the same thing and I can give you a real answer, not just a guess over the phone. Does [specific time] work for you?"');

  c += h3('Scenario: Voicemail — Leaving a Message');
  c += callout('script', '"Hi, this is [Name] from [Shop Name]. I\'m calling for [Customer Name] regarding [vehicle / appointment / question]. The best time to reach us is [hours] and our number is [number] — I\'ll also send you a quick text right now so you have it. Looking forward to connecting. Have a great day."');

  c += h3('Scenario: Transferring a Call');
  c += callout('script', '"Absolutely — [Name] is the right person for that. Let me connect you. [Name] is great — you\'re in good hands."\n\n[Brief the receiving person before connecting: "I have [Customer Name] — they\'re asking about [topic]. Go ahead."]');

  c += h2('Outbound Follow-Up Call — After Estimate Sent');
  c += callout('script', '"Hi [Name], this is [Your Name] from [Shop Name] — I sent over your estimate earlier and wanted to make sure you received it and see if you have any questions.\n\n[Pause — let them respond.]\n\nIf they haven\'t reviewed it: "No problem at all — is there a better time later today or tomorrow where I could catch you for five minutes?"\n\nIf they have questions: Answer directly. Do not hedge. Offer to schedule.\n\nIf they want to think about it: "Of course — this is a meaningful decision. Can I ask — is there anything specific you\'re weighing or want me to clarify? I want to make sure you have everything you need."');

  c += h2('Handling Objections — Reference Card');
  c += table(
    ['Objection', 'Underlying Concern', 'Recommended Response'],
    [
      ['"It\'s too expensive"', 'Doesn\'t see the value yet', 'Revisit what\'s included; compare cost of repainting vs. protecting'],
      ['"I need to think about it"', 'Not enough information or needs spousal input', 'Ask what they\'re weighing; offer to answer questions for both parties'],
      ['"I\'ll wait until after winter"', 'Timing concern', 'Explain that damage happens in winter — that\'s exactly when protection matters most'],
      ['"Do you have reviews?"', 'Trust not established', 'Direct them to Google / social proof immediately and offer references'],
      ['"I heard PPF yellows"', 'Outdated information', 'Explain modern film chemistry; offer to show samples; offer warranty documentation'],
      ['"Can you do it cheaper?"', 'Price sensitivity', 'Explore whether a partial package meets their needs at a lower price point'],
    ]
  );

  return c;
}

function chLeadIntake() {
  let c = '';
  c += p('Lead intake is the point where a prospect\'s first expression of interest is captured and organized. A disciplined intake process prevents leads from falling through the cracks and gives the team the information needed to personalize every subsequent interaction.');

  c += h2('Lead Sources & Routing');
  c += table(
    ['Lead Source', 'Intake Method', 'Response SLA', 'Assigned To'],
    [
      ['Inbound phone call', 'Live conversation + CRM entry', 'Immediate', 'First available SA'],
      ['Website contact form', 'CRM auto-creates lead; SA follows up', '90 minutes during business hours', 'Assigned SA on rotation'],
      ['Social media DM', 'SA checks platform Q2h; replies + moves to CRM', '2 hours', 'Social media designee'],
      ['Walk-in', 'Immediate greeting; intake form completed', 'Immediate', 'First available SA'],
      ['Referral (verbal)', 'SA calls within same day; creates CRM record', 'Same business day', 'Referring customer\'s SA if applicable'],
      ['Online review / forum inquiry', 'CSM monitors; SA responds publicly then moves to DM', '4 hours', 'CSM or designated SA'],
    ]
  );

  c += h2('Lead Intake Information Requirements');
  c += p('Every lead record must capture the following fields at minimum before the record is considered complete enough to schedule a consultation:');

  c += checklist([
    'First and last name',
    'Best phone number (confirm it can receive texts)',
    'Email address',
    'Vehicle: Year, Make, Model, Color',
    'Service of interest (even if vague — "I saw a wrapped car and want something like that")',
    'How they heard about us',
    'Preferred timeline ("ASAP", "before summer", "no rush")',
    'Any known pre-existing conditions the customer mentioned',
    'CRM lead source tag applied correctly',
    'Follow-up task created with due date in CRM',
  ]);

  c += h2('CRM Lead Stages');
  c += table(
    ['Stage', 'Definition', 'Required Action to Advance'],
    [
      ['New Inquiry', 'Contact made; basic info collected', 'Vehicle and service interest confirmed'],
      ['Consultation Scheduled', 'Appointment booked', 'Confirmation sent; reminder scheduled'],
      ['Estimate Sent', 'Written quote delivered', 'Follow-up call scheduled within 48 hours'],
      ['Approved / Scheduled', 'Customer approved the estimate; deposit taken', 'Job added to calendar; intake appointment set'],
      ['In Service', 'Vehicle on the rack / in the bay', 'Check-in messages per communication schedule'],
      ['Delivered', 'Vehicle returned', 'Review request sent; 30-day follow-up scheduled'],
      ['Closed Lost', 'Customer went elsewhere or did not proceed', 'Reason logged; re-engage campaign triggered at 6 months'],
    ]
  );

  c += h2('Lead Response Speed & Its Impact on Conversion');
  c += p('Research across service industries consistently shows that response speed is one of the strongest predictors of conversion rate. A lead contacted within five minutes of inquiry converts at dramatically higher rates than one contacted an hour later.');

  c += callout('tip', '**Five-Minute Rule:** Any lead that provides a phone number must receive a call or text within five minutes during business hours. This single discipline has the highest ROI of any sales process improvement. Set an audible CRM alert for new leads and treat it like a ringing phone.');

  c += h3('After-Hours Lead Handling');
  c += p('Leads that arrive after business hours should receive an automated acknowledgment immediately and a personal follow-up within the first hour of the next business day — not at noon, not "when it\'s convenient."');
  c += callout('script', '**Automated after-hours text/email:**\n\n"Thanks for reaching out to [Shop Name]! We received your inquiry and will have a team member contact you personally by [next business day, morning hours]. In the meantime, you can see our portfolio and services at [website]. We look forward to talking with you."');

  c += h2('Consultation Booking Confirmation');
  c += procedure('Consultation Confirmation Sequence', [
    'Immediately after booking: Send text confirmation with date, time, address, and what to bring (vehicle, questions)',
    '48 hours before: Send email confirmation with full service overview and what to expect',
    '24 hours before: Send text reminder with a "1 to confirm / 2 to reschedule" shortcode',
    '2 hours before: Final text reminder with parking and entry instructions',
    'If no confirmation received: Call the customer at the 24-hour mark instead of relying on text only',
  ]);

  return c;
}

function chConsultation() {
  let c = '';
  c += p('The consultation is the highest-leverage interaction in the sales process. Done well, it builds so much trust that price becomes secondary to the relationship. Done poorly, it leaves the customer feeling pressured, confused, or skeptical. This chapter provides a complete framework for conducting consultations that convert.');

  c += h2('Consultation Environment Setup');
  c += checklist([
    'The consultation area is clean and professional before the customer arrives',
    'A physical or digital portfolio of past work is accessible',
    'Sample materials (film swatches, coating demo panels, tint samples) are staged and ready',
    'Water or coffee is offered as the customer arrives',
    'The intake form is pre-populated with information already collected',
    'The lead installer or CSM is available by phone for technical questions',
    'No other staff conversations, music, or distractions compete for customer attention',
  ]);

  c += h2('The Seven-Stage Consultation Framework');

  c += procedure('Consultation Framework', [
    '**Welcome & Rapport (2-3 min):** Greet by name. Thank them for coming in. Small talk on neutral topic. Offer refreshment.',
    '**Vehicle Walk (5 min):** Walk the vehicle together. Let the customer point out what matters to them — don\'t lead yet.',
    '**Needs Discovery (5-8 min):** Ask open-ended questions. Listen more than you speak. Uncover the "why."',
    '**Education (5-10 min):** Teach them what they don\'t know. Use samples, demo panels, photos. Build credibility.',
    '**Options Presentation (5-8 min):** Present two or three tiers — never just one option. Describe each as a solution to their stated goal.',
    '**Investment Discussion (3-5 min):** Present pricing clearly and confidently. Tie it back to value, not cost.',
    '**Next Steps (2-3 min):** Ask for the business or ask for permission to send an estimate. Give a clear timeline for follow-up.',
  ]);

  c += h2('Needs Discovery — The 10 Essential Questions');
  c += p('These questions are not interrogation — they are the natural curiosity of someone who genuinely wants to find the right solution. Work them into conversation, not as a list.');

  c += table(
    ['Question', 'What You\'re Learning'],
    [
      ['"What made you start thinking about this?"', 'Motivation, emotional driver'],
      ['"How long have you had the vehicle?"', 'Attachment level, expected ownership duration'],
      ['"Do you plan to keep it long-term or trade in a few years?"', 'Investment horizon — longer = higher-tier recommendation'],
      ['"Where does it live when you\'re not driving it?"', 'Exposure level (garage vs. outdoor)'],
      ['"Has it been through any repairs, repaints, or previous film?"', 'Existing condition; whether correction is needed'],
      ['"What\'s your biggest concern — scratches, fading, rock chips, all of the above?"', 'Priority area for recommendation'],
      ['"Have you had this type of service before?"', 'Experience level; calibrate explanation depth'],
      ['"How important is maintaining the value for resale?"', 'ROI framing opportunity'],
      ['"Is there a particular part of the car you\'re most worried about?"', 'May indicate a partial package is the right fit'],
      ['"What does your ideal outcome look like?"', 'Sets the frame for the solution'],
    ]
  );

  c += h2('Presenting Service Options');
  c += p('Always present options in order from most comprehensive to least — this anchors the customer to the top-tier first and makes mid-tier feel like a reasonable compromise rather than the expensive choice.');

  c += callout('tip', '**The Three-Option Framework:**\n\n**Option A (Premium):** Full vehicle coverage, top-tier film/coating, extended warranty — "This is the gold standard."\n\n**Option B (Core):** High-impact zones, mid-tier product, standard warranty — "This is what most of our clients choose for this type of vehicle."\n\n**Option C (Entry):** Targeted protection on the highest-impact areas only — "If budget is the primary factor, this is where I\'d start."');

  c += h2('Handling Hesitation at Consultation');
  c += p('Some customers need time or information before deciding. Never pressure; always support.');

  c += procedure('When a Customer Asks for Time', [
    'Acknowledge the decision genuinely: "Absolutely — this is a real investment in your vehicle."',
    'Identify the information gap: "Is there anything you\'d like me to clarify or go over again?"',
    'Offer a specific follow-up: "I\'ll get your detailed written estimate over to you by end of business today. Would tomorrow afternoon work to connect briefly?"',
    'Leave them with something tangible: samples, a printed overview, a QR code to your portfolio',
    'Log the outcome in CRM and set the follow-up task before they leave the parking lot',
  ]);

  return c;
}

function chEstimating() {
  let c = '';
  c += p('Professional estimating eliminates ambiguity, reduces disputes, and positions the shop as organized and expert. A well-constructed estimate is also a sales document — it tells a story of value, not just a list of numbers.');

  c += h2('Estimating Principles');
  c += checklist([
    'All estimates are delivered in writing — verbal quotes are for ballpark guidance only',
    'Estimates are itemized — the customer must be able to see what they are paying for',
    'Estimates include a valid-until date (typically 30 days)',
    'Estimates reference the specific product tier, warranty, and scope of work',
    'Estimates do not include vague line items like "misc." without explanation',
    'Estimates are followed up by phone within 48 hours of delivery',
    'Estimates that require a site-survey (complex vehicles, fleet, etc.) note this requirement explicitly',
  ]);

  c += h2('Estimating Format — Required Sections');
  c += table(
    ['Section', 'Content', 'Purpose'],
    [
      ['Customer & Vehicle Info', 'Name, vehicle, contact, date', 'Clear identification; prevents disputes'],
      ['Scope of Work', 'Exactly what panels / areas / services are included', 'Defines deliverable'],
      ['Product Specification', 'Film name/tier, coating product, tint grade', 'Proves quality level'],
      ['Pricing Breakdown', 'Labor + material per service line', 'Transparency; builds trust'],
      ['Warranty Terms', 'What\'s covered, how long, what voids it', 'Reduces post-service disputes'],
      ['Payment Terms', 'Deposit amount, balance due at delivery, accepted methods', 'Sets financial expectations'],
      ['Timeline Estimate', 'Expected drop-off date, expected completion date', 'Manages schedule expectations'],
      ['Validity', '"This estimate is valid for 30 days from [date]"', 'Protects shop from price changes'],
      ['Authorization Line', 'Customer signature + date to approve', 'Becomes binding work order'],
    ]
  );

  c += h2('Pricing Psychology');
  c += p('How pricing is presented affects how customers perceive value. The following practices are proven to reduce price resistance.');

  c += h3('Language Framing');
  c += table(
    ['Avoid', 'Use Instead', 'Reason'],
    [
      ['"It\'ll cost you $2,400"', '"Your investment for this package is $2,400"', '"Investment" implies return; "cost" implies loss'],
      ['"That\'s our price"', '"That reflects [X] square feet of film, [Y] hours of labor, and a [Z]-year warranty"', 'Justifies the number with substance'],
      ['"We\'re cheaper than dealers"', '"Our pricing reflects professional installation in a climate-controlled facility with a written warranty"', 'Compete on value, not low price'],
      ['"I can give you a discount"', '"Let me see if a partial coverage option meets your needs at a lower entry point"', 'Reframes to value fit, not discount'],
    ]
  );

  c += h3('Good-Better-Best Pricing');
  c += p('Always present the full-service option first even if you believe the customer will choose a lower tier. Customers anchored to a higher number perceive mid-tier as a bargain rather than the "expensive" option.');

  c += h2('Estimate Delivery Best Practices');
  c += procedure('Sending an Estimate', [
    'Send the estimate by email in PDF format — never just the numbers in the body of an email',
    'Include a one-paragraph personal note in the email body referencing their specific vehicle and goals',
    'CC yourself and the CSM so both have the thread',
    'Log in CRM: date sent, amount, tier selected',
    'Set a follow-up reminder for 48 hours later',
    'Text the customer: "Your estimate just went to your inbox — let me know if you have any questions. I\'ll follow up with a quick call [day]."',
  ]);

  c += h2('Deposit Policy & Collection');
  c += table(
    ['Job Type', 'Deposit Required', 'When Collected', 'Non-Refundable Portion'],
    [
      ['Standard install (under $1,000)', '25% of estimate', 'At time of scheduling', 'Processing fee only if cancelled <48 hours'],
      ['Standard install ($1,000–$3,000)', '33% of estimate', 'At time of scheduling', '50% of deposit if cancelled <72 hours'],
      ['Premium/Full vehicle wrap', '50% of estimate', 'At time of scheduling', '50% of deposit if cancelled <7 days'],
      ['Fleet / commercial', 'Per contract terms', 'Per contract schedule', 'Per contract terms'],
      ['Walk-in urgent request', '100% upfront or first available slot with deposit', 'At booking', 'Standard policy applies'],
    ]
  );

  return c;
}

function chScheduling() {
  let c = '';
  c += p('Scheduling is the operational backbone of a well-run shop. Poor scheduling creates technician idle time, bottlenecks, missed deadlines, and dissatisfied customers. Excellent scheduling maximizes throughput while protecting quality and setting achievable customer expectations.');

  c += h2('Scheduling Principles');
  c += checklist([
    'Never schedule a job without confirming installer capacity with the lead installer first',
    'Build buffer time between jobs — a 4-hour job is scheduled in a 5-hour block',
    'Complex or first-of-type vehicles require a pre-job consultation with the installer before committing to a date',
    'Material lead time (custom orders, fleet film) is confirmed with the supplier before scheduling',
    'Customer-requested rush timelines are cleared with the lead installer before promising them',
    'No two full-vehicle wraps are scheduled in the same production slot without sufficient staff',
    'Seasonal demand surges (spring, pre-summer) are managed with a waitlist and priority booking for repeat clients',
  ]);

  c += h2('Job Type Time Standards');
  c += table(
    ['Service', 'Standard Duration', 'Drop-Off Lead Time', 'Vehicle Pick-Up Buffer'],
    [
      ['PPF — Partial Front (hood, fenders, bumper)', '1–2 days', 'Day before', 'Same or next morning'],
      ['PPF — Full front end', '2–3 days', '2 days before', 'Next morning after last install day'],
      ['PPF — Full vehicle', '5–7 days', '5 days before', '24 hours after completion'],
      ['Ceramic Coating — Single stage', '1–2 days (24h cure)', 'Day before', 'Following morning'],
      ['Ceramic Coating — Multi-stage + correction', '3–5 days', '3 days before', '24 hours after final cure'],
      ['Vinyl Wrap — Partial (hood, roof, mirrors)', '1 day', 'Morning of', 'Same afternoon or next morning'],
      ['Vinyl Wrap — Full vehicle', '3–5 days', '3 days before', '24 hours after completion'],
      ['Window Tint — Full vehicle', '4–8 hours', 'Morning of', 'Same afternoon'],
      ['Window Tint — Front two windows', '2–3 hours', 'Morning of', 'Same morning'],
      ['Combination package', 'Assess per services included', 'Per longest-lead service', 'Per longest-cure service'],
    ]
  );

  c += h2('Scheduling Workflow');
  c += procedure('Booking a Job in the Calendar', [
    'Confirm estimate is approved and signed by customer',
    'Confirm deposit is collected and recorded',
    'Check installer availability with lead installer for the requested window',
    'Confirm material availability — is the specified film/product in stock or does it need to be ordered?',
    'Add the job to the production calendar with: customer name, vehicle, service, contact number, and job value',
    'Send the customer a booking confirmation with: drop-off date/time, address, what to bring, loaner/transport information if applicable',
    'Add the job to the CRM as "Approved / Scheduled" with all details',
    'Set internal reminders: material prep 3 days before; confirmation call 24 hours before',
  ]);

  c += h2('Rescheduling & Cancellation Handling');
  c += procedure('Customer-Initiated Reschedule', [
    'Thank the customer for notifying us — do not make them feel guilty',
    'Find a new time immediately if possible: "Let me check what we have open for you"',
    'Update the production calendar and CRM immediately',
    'Notify the installer if the original slot is now available for another job',
    'Send confirmation of the new appointment within the hour',
  ]);

  c += procedure('Shop-Initiated Rescheduling', [
    'Call the customer personally — do not send a text-only notification for a schedule change we are causing',
    'Explain honestly: material delay, technician availability, prior job running long',
    'Offer at least two alternative dates',
    'Compensate appropriately: priority rebooking, courtesy upgrade, or modest discount at shop discretion',
    'Log the reason and resolution in CRM; flag for CSM review if customer expresses dissatisfaction',
  ]);

  return c;
}

function chVehicleIntake() {
  let c = '';
  c += p('The vehicle intake walkaround is one of the most important operational moments in the customer relationship. Done properly, it protects the shop from liability for pre-existing damage, gives the customer confidence their vehicle is in good hands, and sets the foundation for an honest relationship. Skipping or rushing this step is one of the most common sources of customer disputes in automotive service.');

  c += h2('Why the Intake Walkaround Matters');
  c += p('Customers sometimes do not notice — or choose not to disclose — pre-existing damage. Without a documented walkaround, any scratch, dent, or chip discovered at or after delivery may be attributed to the shop regardless of responsibility. Conversely, a thorough walkaround demonstrates professionalism and care that competitors who skip it cannot match.');

  c += callout('warning', 'Never allow a vehicle into the bay without a completed and signed intake form. No exceptions. If a customer is in a rush, perform an abbreviated walk with photos and explain you are doing this to protect their vehicle — not to delay them.');

  c += h2('Intake Walkaround Protocol');
  c += procedure('Complete Vehicle Intake Walkaround', [
    'Ensure adequate lighting — move the vehicle to a lit area or use a detail light',
    'Begin at the front bumper; move clockwise around the vehicle',
    'Document every chip, scratch, dent, scuff, stain, or pre-existing film issue on the intake diagram',
    'Photograph every noted defect from two angles — close and at distance for context',
    'Note interior condition: stains, wear, any items of value left in the vehicle',
    'Note tire condition and wheel finish condition',
    'Note any pre-existing mechanical issues: door that doesn\'t close fully, trim that is loose, sensor that is exposed',
    'Read current mileage and record on the form',
    'Have the customer sign the completed intake form before taking the key',
    'Give the customer a copy of the intake form; retain the original in the job file',
    'Upload all intake photos to the CRM job record within one hour',
  ]);

  c += h2('Intake Form — Required Fields');
  c += table(
    ['Section', 'Fields'],
    [
      ['Customer Info', 'Name, phone, email, signature'],
      ['Vehicle Info', 'Year, Make, Model, VIN (last 6), Color, Odometer'],
      ['Condition Diagram', 'Vehicle outline (top/side/front/rear view) with defect marks'],
      ['Defect Notes', 'Freeform description with photo reference numbers'],
      ['Service Agreed', 'Description of service to be performed (ties to estimate)'],
      ['Customer Acknowledgments', 'Pre-existing items noted; any known issues the shop has noted'],
      ['Personal Items', 'Log of any items left in vehicle; disclaimer for items not logged'],
      ['Key Receipt', 'How many keys provided; key type (smart key, fob, physical)'],
      ['Date & Time', 'Intake date and time recorded'],
    ]
  );

  c += h2('Special Intake Situations');

  c += h3('Vehicle with Significant Pre-Existing Paint Issues');
  c += p('If paint correction, active rust, deep scratches, or prior amateur wrap/film removal damage is present, the intake requires an additional step: the SA must flag the issue to the lead installer before the vehicle enters the bay.');
  c += procedure('Paint Issue Intake', [
    'Document all areas of concern on the intake form with detailed photos',
    'Notify the lead installer verbally and show photos',
    'Brief the customer: "We\'ve noted some areas that may affect the final result — let me walk you through what we see"',
    'Amend the estimate if additional prep work is required (correction, scratch filling, etc.)',
    'Obtain the customer\'s written acknowledgment of the condition and their acceptance of the limitation',
  ]);

  c += h3('Vehicles with High-Value Modifications');
  c += p('Vehicles with aftermarket wheels, custom paint, wraps, accessories, or track modifications require additional care documentation.');
  c += checklist([
    'Photograph all visible modifications at intake',
    'Note any modifications that are near the service area and could be at risk',
    'Discuss any modification that could interfere with the service (e.g., aero kit restricting bumper access)',
    'Get explicit customer acknowledgment that the shop has been informed of all modifications',
    'Assign the most experienced installer to this vehicle',
  ]);

  return c;
}

function chExpectationSetting() {
  let c = '';
  c += p('Unmet expectations are the root cause of nearly every customer complaint in this industry. Customers who are surprised — even by the result of genuinely good work — become dissatisfied. Expectation-setting is not a disclaimer exercise; it is a foundational act of customer care.');

  c += h2('The Four Expectation Categories');
  c += table(
    ['Category', 'What the Customer Needs to Know', 'When to Communicate It'],
    [
      ['Timeline', 'Realistic drop-off and pick-up dates with buffer language', 'At scheduling and at intake'],
      ['Process', 'What happens to the vehicle while in the shop; who touches it', 'At consultation and intake'],
      ['Result', 'What the finished product will and will not look like; limitations', 'At consultation and at estimate review'],
      ['Aftercare', 'What they must and must not do in the 7–30 days after service', 'At intake and again at delivery'],
    ]
  );

  c += h2('Setting Timeline Expectations');
  c += callout('tip', 'Always build buffer into the timeline promise. It is far better to say "Thursday" and deliver Wednesday than to say "Wednesday" and deliver Thursday. Under-promise and over-deliver is not a cliché — it is a systematic way to generate positive surprise.');

  c += p('When giving a timeline estimate, use the following language structure:');
  c += callout('script', '"We\'re scheduling [service] for [day]. Based on how that job typically goes for us, we expect to have it ready [day + buffer]. I\'ll reach out as it gets closer with a confirmed pick-up window — and if anything changes, I\'ll contact you immediately. Does that timeline work for you?"');

  c += h2('Setting Result Expectations');
  c += p('Customers often have expectations shaped by social media, showroom-condition vehicles, or the word "perfect" being used carelessly by salespeople. The SA must calibrate expectations honestly without underselling the service.');

  c += h3('PPF Result Expectations');
  c += checklist([
    'Film edge lines are visible upon close inspection — this is normal and expected',
    'Wrap points (areas where film wraps around a panel edge) may be slightly visible at certain angles',
    'Self-healing properties activate with heat — demonstrate with a nail scratch test on a demo panel',
    'Orange peel texture is inherent in film and matches or is slightly more pronounced than the paint underneath — not a defect',
    'Film does not fix existing scratches, swirl marks, or oxidation — these are visible through the film',
    'Yellowing does not occur with modern film under proper care — show warranty documentation',
  ]);

  c += h3('Ceramic Coating Result Expectations');
  c += checklist([
    'Coating does not prevent all scratches — it reduces severity and makes maintenance easier',
    'Coating may not be fully cured for 7–14 days — vehicle must avoid water, washing, and bird droppings during this period',
    'Hydrophobic properties are most dramatic in the first 12–18 months and reduce gradually over the coating\'s lifespan',
    'Coating does not eliminate the need for washing — it makes washing easier and less frequent',
    'Any paint defects not corrected before coating are permanent under the coating — must be addressed before application',
  ]);

  c += h3('Vinyl Wrap Result Expectations');
  c += checklist([
    'Seam lines exist on wrapped vehicles — they are minimized by design but cannot be entirely eliminated',
    'Heat exposure (parking in direct sun) will not damage film under normal conditions but may accelerate edge lifting if edges are not properly wrapped',
    'Film is not designed for long-term exposure to high-pressure wash — recommend hand wash or touchless',
    'Color-change wraps do not cover rock chips that go through paint — existing deep chips may show through film',
    'Matte and satin finishes scratch more visibly than gloss — demonstrate on sample before committing',
  ]);

  c += h2('Aftercare Expectation Handout');
  c += p('Every customer receives a printed and emailed aftercare guide at delivery. The SA reviews the key points verbally — the guide reinforces it. Never hand the guide without a verbal summary.');

  return c;
}

function chInServiceUpdates() {
  let c = '';
  c += p('One of the most consistent complaints in the automotive service industry is "they never updated me." Customers whose vehicles are in the shop feel vulnerable — they have surrendered control of a significant asset. Proactive communication during the service restores that sense of control and dramatically reduces anxiety-driven "check-in" calls.');

  c += h2('Communication Schedule by Job Type');
  c += table(
    ['Job Type', 'Update Touchpoints', 'Method', 'Content'],
    [
      ['1-day service', 'Intake confirmation + delivery notification', 'Text', 'Drop-off confirmed; "we\'ll reach out when ready"'],
      ['2-day service', 'Intake + end-of-day-1 + delivery call', 'Text + phone call', 'Progress update; any surprises; ETA confirmation'],
      ['3–5 day service', 'Intake + daily brief update + delivery call', 'Text (daily) + phone call', 'Progress photos; milestone completion; ETA'],
      ['Full vehicle wrap (5–7 days)', 'Intake + day 2 + day 4 + delivery call', 'Text with photos + phone calls', 'Panel-by-panel progress; any design decisions needed'],
    ]
  );

  c += h2('Progress Update Message Templates');

  c += h3('Day-1 Intake Confirmation');
  c += callout('script', '"Hi [Name], we\'ve got your [Vehicle] in the bay and we\'re getting started. Everything looks great from our intake — we\'ll keep you posted as we go. Expected ready: [day/time]. Reach me anytime at this number."');

  c += h3('Mid-Service Progress Update (Multi-Day)');
  c += callout('script', '"Hi [Name] — quick update on your [Vehicle]: [specific progress, e.g., hood and driver fender are done and looking sharp]. We\'re on track for [pick-up day]. I\'ll reach out again [tomorrow / when it\'s ready]. Any questions?"');

  c += h3('Delay Notification');
  c += callout('script', '"Hi [Name] — I want to get ahead of this for you. We ran into [brief honest explanation] and want to make sure we do this right rather than rush it. New expected pick-up: [day/time]. I\'m sorry for the adjustment — your vehicle will be worth the wait. Can I answer any questions?"');

  c += h3('Ready for Pick-Up');
  c += callout('script', '"Great news — your [Vehicle] is done and looking excellent. We can have you pick up any time [hours]. When you come in, I\'d love to walk you through everything we did. See you [day]!"');

  c += h2('Handling Customer Check-In Calls During Service');
  c += p('Even with proactive communication, some customers will call for updates. Treat every check-in call as an opportunity to reinforce trust — not an interruption.');

  c += procedure('Handling an Inbound Customer Check-In Call', [
    'Answer warmly: "Hi [Name], I was just about to send you an update!"',
    'Pull up the job record before responding — never guess at the status',
    'Give a specific, factual update — not "it\'s going well"',
    'Confirm the current ETA with a buffer: "We\'re targeting [day] and I\'ll confirm by [time]"',
    'Offer to send a photo if appropriate',
    'Thank them for their patience without being condescending',
    'Log the call and update the CRM note',
  ]);

  return c;
}

function chDeliveryWalkthrough() {
  let c = '';
  c += p('The delivery moment is the shop\'s opportunity to turn a satisfied customer into an enthusiastic ambassador. The delivery walkthrough should feel like an unveiling — structured, proud, and educational. It is also the last chance to confirm quality before the vehicle leaves the property.');

  c += h2('Pre-Delivery Checklist (Internal)');
  c += checklist([
    'Final QC inspection completed and signed off by the lead installer',
    'Vehicle is cleaned — interior surfaces that were touched are wiped down; exterior is spot-free',
    'Vehicle is staged in a clean, well-lit area for the walkthrough',
    'All materials removed from interior (plastic, tape, tools)',
    'Floor mats are returned to original positions',
    'All keys are accounted for',
    'Aftercare package (printed guide + product if applicable) is ready to hand over',
    'Invoice is prepared and payment method is confirmed',
    'Review request is prepared (link, QR code, or direct text)',
  ]);

  c += h2('Delivery Walkthrough Script');
  c += procedure('Customer Delivery Walkthrough', [
    '**The Reveal:** Walk the customer to the vehicle with energy — "Wait until you see this." Allow a moment of reaction before talking.',
    '**The Tour:** Walk the entire vehicle clockwise pointing out quality details: "Notice how clean the edge is here…", "Look at how the film wraps around the corner…"',
    '**The Education:** Explain what was done, not just what the customer can see: "We prepped the surface with [process], applied [product], and here\'s what that means for you going forward."',
    '**Demonstrate self-healing (PPF) or hydrophobic (ceramic) if applicable** — live demos build memory and excitement.',
    '**Review the aftercare guide together** — highlight the top three rules and hand them the guide.',
    '**Address any questions fully** — do not rush this moment.',
    '**Collect payment** — present the invoice and process payment before returning the key.',
    '**Return the key personally** — not through a window or left on a counter.',
    '**The Ask:** "We\'d love to know what you thought — would you mind leaving us a quick Google review? It really makes a difference for us." Hand them the QR code or link.',
    '**The Close:** "It was our pleasure. You know where we are if you need anything — we\'re here for you." Handshake or genuine farewell.',
  ]);

  c += h2('Delivery Moment Don\'ts');
  c += checklist([
    'Do NOT have the customer pick up the vehicle before the walkaround is complete',
    'Do NOT hand keys over a counter — walk them to the vehicle',
    'Do NOT rush through aftercare because the customer seems busy',
    'Do NOT apologize for the price at delivery — the job is done; own the value',
    'Do NOT ask for a review in a way that sounds scripted or transactional',
    'Do NOT leave any defect unaddressed — if you see it, the customer will see it',
  ]);

  c += h2('Handling a Delivery Concern');
  c += p('On rare occasions, the customer will identify a concern during the walkthrough — a visual imperfection, an area they are unhappy with, or a question about whether something is right. These moments must be handled calmly and decisively.');

  c += procedure('Delivery Concern Protocol', [
    'Listen fully — let the customer finish describing the concern without interrupting',
    'Look at it together — physically get close to what they are pointing at',
    'Determine whether it is a defect, a limitation inherent to the service, or a pre-existing condition',
    'If it is a true defect: "I want to make this right. Here\'s what I\'d like to do…" — give a specific resolution',
    'If it is a service limitation: Walk them through the expectation that was set and the sample/documentation',
    'If it is pre-existing: Reference the intake form and photos',
    'Never argue about whether it is a defect — focus on resolution',
    'Log the concern and resolution in the CRM job record',
    'If resolution requires a return appointment, schedule before the customer leaves',
  ]);

  return c;
}

function chWarrantyEducation() {
  let c = '';
  c += p('Warranty education serves two purposes: it protects the shop by ensuring customers understand coverage terms, and it dramatically increases customer retention by giving them ongoing reasons to return. A customer who understands their warranty comes back for warranty service — and brings future business.');

  c += h2('Warranty Overview by Service');
  c += table(
    ['Service', 'Manufacturer Warranty', 'Shop Workmanship Warranty', 'Key Conditions'],
    [
      ['PPF — Standard tier', '5 years against yellowing, bubbling, cracking', '1 year on installation', 'Proper aftercare required; no high-pressure washing'],
      ['PPF — Premium tier', '10 years against yellowing, bubbling, cracking', '2 years on installation', 'Proper aftercare required; documented wash record recommended'],
      ['Ceramic Coating — Standard', '2 years hydrophobic performance', '1 year', 'Annual inspection recommended; proper wash products required'],
      ['Ceramic Coating — Premium', '5 years', '2 years', 'Annual maintenance service required; documented'],
      ['Vinyl Wrap', '3 years against fading, bubbling', '1 year on installation', 'No high-pressure; avoid petroleum-based cleaners on seams'],
      ['Window Tint', '3–5 years against bubbling, peeling', '1 year', 'No ammonia cleaners; no hard abrasives'],
    ]
  );

  c += h2('What Voids the Warranty');
  c += p('Warranty education must include what customers must avoid. Frame this as protection of their investment — not a list of ways they will lose coverage.');

  c += checklist([
    'Automatic car washes with brushes (all services except glass coatings)',
    'High-pressure washing directly at film edges or seams',
    'Petroleum-based products applied to film or coating surfaces',
    'Ammonia-based cleaners on tinted glass',
    'Bird droppings, tree sap, or road tar left on the surface for more than 24 hours',
    'Improper installation by an unauthorized party over existing shop-installed film or coating',
    'Use of abrasive polishing compounds on ceramic-coated surfaces without professional guidance',
    'Failure to return for required maintenance inspections on premium coatings',
  ]);

  c += h2('Warranty Claim Process');
  c += procedure('Customer Warranty Claim Handling', [
    'Customer contacts the shop describing the issue',
    'SA collects: vehicle details, service date, nature of concern, photos if customer can provide',
    'SA creates a warranty claim record in CRM and assigns to CSM for review',
    'CSM reviews claim against original intake photos, service record, and warranty terms',
    'Schedule a warranty inspection appointment — no charge to the customer for the inspection',
    'Lead installer evaluates at the inspection: determine if defect is covered, excluded, or customer-caused',
    'If covered: Provide repair at no charge, document, update CRM',
    'If excluded: Explain clearly using the warranty document the customer signed; offer a paid repair at a courtesy rate',
    'If unclear: Escalate to the film or coating manufacturer representative for technical assessment',
    'Document every step in CRM regardless of outcome',
  ]);

  c += h2('Using the Warranty as a Retention Tool');
  c += p('The warranty is not a liability — it is a relationship maintenance engine. A customer who understands they have an annual inspection coming creates a natural re-engagement cycle.');

  c += checklist([
    'Schedule the 12-month warranty check-in in CRM at time of delivery',
    'Send a warranty anniversary reminder at 11 months with a link to book',
    'During warranty check-ins, identify opportunities to upgrade, add protection, or address new areas',
    'Document warranty check-in results and update the customer\'s vehicle record',
    'Use warranty inspections to re-engage clients who have not returned for other services',
  ]);

  return c;
}

function chComplaintResolution() {
  let c = '';
  c += p('No operation is perfect. How a business handles problems defines its reputation as surely as the quality of its best work. A complaint resolved with speed, honesty, and care often produces a more loyal customer than one who never experienced a problem at all. This chapter provides a systematic approach to resolving complaints at every severity level.');

  c += h2('The HEAR Framework');
  c += table(
    ['Letter', 'Action', 'Description'],
    [
      ['H', 'Hear', 'Allow the customer to express the complaint fully without interruption or defense'],
      ['E', 'Empathize', 'Acknowledge the emotional experience — validate that their frustration is reasonable'],
      ['A', 'Assess', 'Gather the facts: what happened, when, what the customer expected vs. what they experienced'],
      ['R', 'Resolve', 'Offer a clear, specific resolution with a timeline — and follow through on every commitment'],
    ]
  );

  c += h2('Complaint Severity Levels');
  c += table(
    ['Level', 'Description', 'Examples', 'Response Owner', 'Resolution Timeline'],
    [
      ['1 — Minor', 'Small cosmetic concern; easy to address', 'Visible dust particle under film; edge not fully tucked', 'Service Advisor', 'Same day if possible; within 48 hours max'],
      ['2 — Moderate', 'Visible defect requiring rework or return appointment', 'Lifting edge; bubble under coating; film scratched during install', 'Service Advisor + Lead Installer', 'Schedule within 5 business days; resolution within 10'],
      ['3 — Major', 'Significant quality failure; potential damage; customer threatening review', 'Panel damage during removal; film heavily contaminated; coating failed within 30 days', 'CSM + Shop Owner', '24-hour response; resolution plan within 3 days'],
      ['4 — Critical', 'Vehicle damage; legal threat; media attention', 'Scratch through paint; body panel damaged; customer posts viral complaint', 'Shop Owner + Legal Counsel', 'Immediate personal call; resolution within 24 hours'],
    ]
  );

  c += h2('What Not to Say During a Complaint');
  c += table(
    ['Never Say', 'Why It Fails', 'Say Instead'],
    [
      ['"I\'m sorry you feel that way"', 'Dismisses the concern; implies the customer\'s feeling is the problem', '"I\'m sorry this happened — let\'s figure out how to make it right."'],
      ['"That\'s normal"', 'Sounds dismissive even if technically true', '"I understand that looks unexpected — let me explain what you\'re seeing and what we can do."'],
      ['"Nobody else has complained about that"', 'Implies the customer is wrong; damages trust', '"Your feedback is important — let me take a closer look."'],
      ['"The warranty doesn\'t cover that"', 'Even if true, sounds adversarial as an opening', '"Let me pull up your warranty details so we can look at this together."'],
      ['"The installer did their best"', 'Implies the result was acceptable; infuriates an already upset customer', '"This doesn\'t meet our standard, and we\'re going to fix it."'],
    ]
  );

  c += h2('Resolution Options');
  c += p('The resolution must match the severity and the customer\'s actual concern. Over-compensating for minor issues trains customers to complain; under-compensating for major issues loses them forever.');

  c += table(
    ['Resolution Type', 'Appropriate For', 'Notes'],
    [
      ['Free repair / redo', 'All genuine workmanship defects', 'Always the first offer; schedule promptly'],
      ['Full or partial refund', 'Irreparable failures; customer cannot return vehicle', 'Requires CSM approval; document thoroughly'],
      ['Upgrade to premium tier', 'Moderate issue where standard tier was the cause of limitation', 'Costs shop material; buys goodwill and loyalty'],
      ['Complimentary future service', 'Minor issues where customer is still satisfied overall', 'Creates next visit; excellent for mildly disappointed customers'],
      ['Formal written apology', 'Any Level 3 or 4 complaint', 'From the CSM or owner; adds accountability and professionalism'],
    ]
  );

  c += h2('Post-Complaint Follow-Through');
  c += procedure('After a Complaint is Resolved', [
    'Log full complaint details, resolution offered, and outcome in CRM',
    'Confirm the resolution was completed and the customer is satisfied — do not assume',
    'If a redo was performed, conduct a second delivery walkthrough with the same care as the original',
    'Follow up with the customer 5–7 days after resolution: "We wanted to make sure everything has been exactly what you hoped for since you picked it up."',
    'Flag the record for the CSM review meeting — discuss any process failure that allowed the defect to occur',
    'If appropriate, request a revised review after successful resolution',
  ]);

  return c;
}

function chReviewsReferrals() {
  let c = '';
  c += p('Online reviews and word-of-mouth referrals are the two most cost-effective growth engines available to an automotive restyling business. Unlike paid advertising, they compound over time — each review makes the next prospect more likely to call, and each referral client is already partially sold before they make contact. This chapter establishes systematic processes for generating both.');

  c += h2('Review Strategy — Google Primary');
  c += p('Google reviews directly influence search ranking and are the first thing most prospects see when evaluating a shop. Every delivered job is a review opportunity. The ask must be systematic, not sporadic.');

  c += procedure('Review Request Sequence', [
    '**At delivery (in person):** "Before you go — would you be willing to share your experience on Google? It takes about 60 seconds and it really helps us reach more customers who are looking for this kind of work. Here\'s the link." [Hand QR code card]',
    '**Same-day text (sent within 2 hours of delivery):** "[Name], it was great seeing you today — I hope you\'re loving how [Vehicle] turned out! If you have a moment, we\'d be really grateful for a Google review: [link]. It means a lot to the team."',
    '**3-day follow-up (if no review posted):** "[Name], hope everything is going well with [Vehicle]! If anything comes up, just reach out. And if you have a moment for that review: [link]. No pressure at all — we appreciate you either way."',
    '**Stop after two requests** — never send more than two review request messages to the same customer.',
  ]);

  c += h2('Responding to Reviews');
  c += table(
    ['Review Type', 'Response Approach', 'Timeline'],
    [
      ['5-star positive', 'Thank by name; reference the specific vehicle or service; invite them back', 'Within 24 hours'],
      ['4-star mixed', 'Thank genuinely; acknowledge the area they noted; offer to follow up', 'Within 12 hours'],
      ['3-star or below', 'Thank for feedback; acknowledge concern; move to private resolution; never argue publicly', 'Within 4 hours'],
      ['Fake or malicious review', 'Politely and factually note that no matching record exists; flag to Google for review', 'Within 2 hours'],
    ]
  );

  c += h2('Referral Program Structure');
  c += p('A formal referral program removes the awkwardness of the ask and gives customers a clear reason to send their network to the shop.');

  c += table(
    ['Referral Tier', 'Trigger', 'Reward to Referrer', 'Reward to New Customer', 'Tracking Method'],
    [
      ['Standard Referral', 'Referred customer completes a service', '$50 shop credit', '10% off first service', 'CRM referral field + code'],
      ['Multi-referral (3+)', 'Third completed referral in 12 months', '$200 shop credit + priority scheduling for 12 months', 'Same 10% off', 'Tracked in CRM referral history'],
      ['High-value referral', 'Referred customer spends $3,000+', '$150 shop credit', '10% off first service', 'Flagged by SA at booking'],
    ]
  );

  c += procedure('Referral Program Communication', [
    'Introduce the program during the delivery walkthrough: "By the way — if any of your friends or family are interested in protecting their vehicle the same way, we have a referral program where both of you benefit."',
    'Include referral card with the aftercare package',
    'Email the referral link and program details in the delivery confirmation',
    'Track all referrals in CRM with the referring customer\'s record',
    'Notify the referrer when their referred customer books and again when the job is complete',
    'Apply credits and notify the referrer within 48 hours of referred customer\'s delivery',
  ]);

  return c;
}

function chUpsellCrossSell() {
  let c = '';
  c += p('Upselling and cross-selling in a service environment must feel like advice, not pressure. Customers who trust a shop will follow well-placed recommendations — because they perceive them as being in the customer\'s interest. Every recommendation must genuinely serve the customer\'s stated goals.');

  c += h2('Upsell vs. Cross-Sell Defined');
  c += table(
    ['Type', 'Definition', 'Example'],
    [
      ['Upsell', 'Recommending a higher tier of the same service', 'Customer inquiring about standard PPF → present premium film with 10-year warranty'],
      ['Cross-sell', 'Recommending a complementary service', 'Customer coming in for window tint → note that their clear coat is oxidizing and mention ceramic coating'],
    ]
  );

  c += h2('Natural Cross-Sell Moments');
  c += table(
    ['Primary Service', 'Natural Cross-Sell', 'Opening Line'],
    [
      ['PPF — Partial front', 'Ceramic coating on top of PPF', '"Most of our PPF customers also add a coating on top — it makes washing effortless and gives the film that deep gloss look. Want me to include a quote?"'],
      ['Window Tint', 'Ceramic coating — glass coating', '"We can add a glass coating to the windshield while we have the vehicle — it dramatically improves visibility in rain. Takes about 30 minutes extra."'],
      ['Ceramic Coating', 'PPF on high-impact zones', '"Coating will protect against chemical fallout and UV, but rock chips will still get through. Adding PPF on the front end gives you the complete protection package. Want to see the combined pricing?"'],
      ['Vinyl Wrap — Color change', 'Window tint to complete the look', '"Wrapping the body without tinting the windows often looks incomplete — the contrast is striking. Let me show you a few before and after examples."'],
      ['Interior detail', 'Leather coating or fabric protection', '"Since we have the interior cleaned, this is the perfect time to apply a leather/fabric coating — it lasts 2–3 years and makes cleanup effortless."'],
    ]
  );

  c += h2('The No-Pressure Upsell Framework');
  c += p('The difference between advice and pressure is follow-through. Make the recommendation once clearly. If the customer declines, acknowledge it respectfully. Never repeat the offer on the same visit.');

  c += procedure('Presenting an Upsell or Cross-Sell', [
    'Make it specific to their vehicle and stated goals — not generic',
    'Explain the benefit in terms of what the customer told you they care about',
    'Give them a number — vague "it\'s not much more" is not helpful',
    'Show them if possible (photos, samples, demo panels)',
    'Accept "no" gracefully: "Totally understood — we can always add that later. I\'ll note it on your file."',
    'Log the declined offer in CRM for future follow-up at the appropriate time',
  ]);

  c += h2('Package Bundles for Increased Average Order Value');
  c += table(
    ['Bundle Name', 'Included Services', 'Positioned For'],
    [
      ['New Car Essentials', 'PPF partial front + single-stage ceramic coating', 'New vehicle owners within 30 days of purchase'],
      ['Complete Shield Package', 'PPF full front + premium ceramic coating + front two windows tinted', 'Enthusiasts and long-term owners'],
      ['Resale Ready', 'Paint correction + ceramic coating + window tint full vehicle', 'Pre-sale or pre-trade-in customers'],
      ['Fleet Protection', 'Vinyl wrap or PPF + fleet-grade window tint', 'Commercial and fleet operators'],
      ['Interior Protection', 'Interior ceramic + leather coating + windshield coating', 'Customers with high-value interiors'],
    ]
  );

  return c;
}

function chEmailTemplates() {
  let c = '';
  c += p('Consistent, professional email templates save time, ensure brand voice accuracy, and prevent errors in key customer communications. Every template below should be customized with the customer\'s name, vehicle, and specifics — they are frameworks, not form letters.');

  c += h2('Template Library');

  c += h3('Template 1: Initial Inquiry Response');
  c += callout('script', '**Subject:** Your Inquiry About [Service] — [Shop Name]\n\nHi [First Name],\n\nThank you for reaching out! We\'d love to help protect your [Year Make Model].\n\nBased on what you described, [Service] is an excellent choice for that vehicle. To give you an accurate quote and walk you through the options that make the most sense, I\'d love to set up a quick consultation — either in person or over a video call.\n\nAre you available [Day 1] or [Day 2]? It typically takes about 20–30 minutes and there\'s no obligation.\n\nLooking forward to connecting,\n\n[Your Name]\n[Title] | [Shop Name]\n[Phone] | [Email]');

  c += h3('Template 2: Estimate Delivery');
  c += callout('script', '**Subject:** Your [Service] Estimate — [Shop Name]\n\nHi [First Name],\n\nAttached is your estimate for [service description] on your [Year Make Model].\n\nA few highlights from the proposal:\n• [Key feature 1 — e.g., "10-year manufacturer warranty on the film"]\n• [Key feature 2 — e.g., "Installation in our climate-controlled bay"]\n• [Key feature 3 — e.g., "1-year workmanship guarantee from us"]\n\nEstimate is valid for 30 days. I\'ll follow up with a quick call in the next day or two — and if you have questions before then, just hit reply or call me directly at [phone].\n\n[Your Name]');

  c += h3('Template 3: Appointment Confirmation');
  c += callout('script', '**Subject:** Appointment Confirmed — [Date] at [Time] — [Shop Name]\n\nHi [First Name],\n\nYou\'re confirmed! Here are the details:\n\n• **Date:** [Day], [Date]\n• **Time:** [Time]\n• **Address:** [Full address + parking note]\n• **Service:** [Service description]\n• **Estimated duration:** [Duration]\n\nPlease arrive with a full tank — we avoid moving vehicles while work is in progress. If anything comes up and you need to reschedule, just reply to this email or text [number].\n\nWe\'re looking forward to taking care of your [Vehicle]!\n\n[Your Name]');

  c += h3('Template 4: Post-Delivery Thank You + Review Request');
  c += callout('script', '**Subject:** Thank You — Your [Vehicle] is Delivered!\n\nHi [First Name],\n\nIt was a pleasure working on your [Year Make Model] today. [Insert one specific compliment about the vehicle or job.]\n\nA couple of reminders from the aftercare guide:\n• [Most important aftercare rule for this service]\n• [Second most important rule]\n\nIf you have any questions in the first days, don\'t hesitate to reach out — you have my direct number.\n\nAnd if you have a minute to share your experience, a Google review makes a tremendous difference for us: [link]\n\nThank you for choosing us!\n\n[Your Name]');

  c += h3('Template 5: 30-Day Check-In');
  c += callout('script', '**Subject:** How\'s Your [Vehicle] Doing? — [Shop Name]\n\nHi [First Name],\n\nIt\'s been about a month since your [service] — we wanted to check in and make sure everything is exactly as you hoped.\n\nIf you\'ve noticed anything or have any questions, just reply here or give me a call. And if you\'re loving it — we\'d still appreciate that Google review if you haven\'t had a chance: [link]\n\nAs a reminder, your warranty covers [key coverage]. We\'ll send you a reminder when your annual check-in is coming up.\n\nTake care,\n[Your Name]');

  c += h3('Template 6: Warranty Inspection Reminder');
  c += callout('script', '**Subject:** Your Annual Protection Inspection — Time to Check In\n\nHi [First Name],\n\nIt\'s almost been a year since your [service] on your [Vehicle] — time for your complimentary annual inspection!\n\nThis check-in takes about 20 minutes and lets us:\n• Verify your [film/coating] is performing as expected\n• Address any warranty questions\n• Catch any areas that may need early attention before they become larger issues\n\nSchedule at [link] or just reply and I\'ll find a time that works for you.\n\n[Your Name]');

  return c;
}

function chCRMWorkflow() {
  let c = '';
  c += p('A customer relationship management system is only as valuable as the discipline with which it is used. An underutilized CRM creates a false sense of organization while hiding the gaps where leads fall through and follow-ups are missed. This chapter defines the non-negotiable CRM habits every team member must maintain.');

  c += h2('CRM Minimum Use Standards');
  c += checklist([
    'Every customer contact — phone call, text, email, walk-in — logged within the same business day',
    'Every estimate is attached to the CRM record with version number and date',
    'Every job is tagged with the lead source before being moved past "Consultation Scheduled"',
    'Deposits and payments are logged in the CRM record linked to the job',
    'Every follow-up commitment generates a CRM task with a due date before ending the interaction',
    'Lost deals have a "Closed Lost" reason logged from a standard list of reasons',
    'No customer record is marked as complete without a next-touch date scheduled',
  ]);

  c += h2('CRM Fields — Master Record Requirements');
  c += table(
    ['Field Group', 'Required Fields', 'Who Fills It', 'When'],
    [
      ['Customer Identity', 'Full name, phone (sms-capable), email, address', 'SA at first contact', 'Before any estimate'],
      ['Vehicle', 'Year/Make/Model/Color/VIN last 6', 'SA at consultation or intake', 'Before scheduling'],
      ['Lead Source', 'Source tag from approved list', 'SA at first contact', 'At record creation'],
      ['Job Details', 'Service, product tier, scope, estimated value', 'SA at estimate stage', 'At estimate creation'],
      ['Financial', 'Estimate amount, deposit amount/date, balance, payment method', 'SA + Admin', 'At deposit and delivery'],
      ['Communication Log', 'Date, method, summary, next action', 'Any team member who had contact', 'Same day'],
      ['Intake', 'Intake form link/reference, intake photos folder link', 'SA at intake', 'Day of intake'],
      ['Delivery', 'Delivery date, walkthrough completed checkbox, review request sent date', 'SA at delivery', 'Day of delivery'],
      ['Post-Service', 'Review posted Y/N, 30-day check-in date, warranty inspection scheduled date', 'SA after delivery', 'As events occur'],
    ]
  );

  c += h2('Lead Source Tags — Approved List');
  c += checklist([
    'Google Search (Organic)',
    'Google Maps',
    'Google Ads (Paid)',
    'Instagram',
    'Facebook',
    'TikTok',
    'Referral — Existing Customer (note name)',
    'Referral — Partner Business (note business)',
    'Walk-In',
    'Dealer Referral',
    'Car Club / Event',
    'Repeat Customer',
    'Other (describe in notes)',
  ]);

  c += h2('Weekly CRM Review Protocol');
  c += procedure('Weekly CRM Review Meeting (30 minutes)', [
    'Pull all leads in "Estimate Sent" stage older than 5 days — who needs a follow-up call?',
    'Review all "Closed Lost" records from the past week — what patterns exist in the reasons?',
    'Check all overdue CRM tasks — reassign or complete',
    'Review delivery dates from the past 7 days — have review requests been sent for every completed job?',
    'Review upcoming 2-week calendar — are all scheduled jobs fully booked and materials confirmed?',
    'CSM reviews KPIs (see Chapter 20) and flags any metric outside of target range',
  ]);

  return c;
}

function chEscalation() {
  let c = '';
  c += p('Escalation is not a failure of the front-line team — it is a design feature of a well-run service organization. Knowing when and how to escalate protects the customer, the team, and the shop\'s reputation. This chapter defines the conditions that trigger escalation and the process for handling each.');

  c += h2('Escalation Triggers');
  c += table(
    ['Trigger', 'Escalation Level', 'Immediate Action'],
    [
      ['Customer is not satisfied with a resolution offered by the SA', 'CSM', 'SA introduces CSM within the same interaction if possible'],
      ['Complaint involves potential vehicle damage caused by the shop', 'CSM + Lead Installer + Owner', 'Pull vehicle; photograph; do not release until assessed'],
      ['Customer mentions legal action, attorney, or small claims', 'Owner + Legal Counsel', 'Do not discuss further — refer all communication to the owner'],
      ['Customer posts a negative review during an active service dispute', 'CSM + Owner', 'CSM responds publicly within 2 hours; private resolution immediately'],
      ['Customer arrives at the shop in a visibly distressed or aggressive state', 'CSM or Owner — immediately', 'Move to private space; do not engage publicly; involve owner if escalation continues'],
      ['A quality failure is identified that may affect multiple vehicles from the same product batch', 'CSM + Lead Installer + Supplier', 'Contact supplier; identify affected vehicles; proactively contact customers'],
      ['A team member makes a pricing or service promise they are not authorized to make', 'CSM', 'Review with team member privately; contact customer to clarify within 24 hours'],
    ]
  );

  c += h2('How to Introduce an Escalation to a Customer');
  c += callout('script', '"[Name], I want to make sure this gets handled at the highest level. Let me bring in [CSM/Owner Name], who has the authority to make sure we get this right for you. I\'m going to step away for just a moment to brief them — I appreciate your patience."');

  c += h2('CSM Escalation Response Protocol');
  c += procedure('CSM Handling an Escalated Complaint', [
    'Review all available information in CRM before engaging the customer',
    'Acknowledge the issue and the customer\'s frustration before offering any resolution',
    'Conduct a physical inspection of the vehicle if it is on premises — never resolve sight-unseen if the vehicle is present',
    'Provide a clear resolution within the authority level — do not make commitments that require owner approval before obtaining it',
    'Document the conversation in CRM with every commitment made',
    'Follow up personally within 24 hours of resolution to confirm the customer is satisfied',
    'Conduct an internal post-mortem with the SA and lead installer to understand the root cause',
  ]);

  c += h2('Documentation Requirements for Escalated Cases');
  c += checklist([
    'Full timeline of events from first contact through resolution',
    'All communication records (calls, texts, emails)',
    'Intake photos referenced against post-service photos',
    'Names of all staff involved in the service',
    'Resolution offered and customer acceptance / rejection',
    'Any cost incurred by the shop in resolution (redo labor, material, refund, credit)',
    'Final customer satisfaction assessment (verbal or written)',
    'Process improvement recommendation if failure was systemic',
  ]);

  return c;
}

function chKPIs() {
  let c = '';
  c += p('Key Performance Indicators give the service team objective visibility into how well the operation is performing against its goals. KPIs should be reviewed weekly at the team level and monthly for trend analysis. The following metrics are industry-relevant for an automotive restyling customer service operation.');

  c += h2('Core KPI Dashboard');
  c += table(
    ['KPI', 'Formula / Definition', 'Target', 'Review Frequency'],
    [
      ['Lead Response Time', 'Avg. time from inquiry to first personal contact', '< 10 minutes during business hours', 'Weekly'],
      ['Consultation Booking Rate', 'Consultations scheduled / total inquiries received', '> 60%', 'Weekly'],
      ['Estimate Close Rate', 'Jobs booked / estimates delivered', '> 40%', 'Weekly'],
      ['Average Job Value', 'Total revenue / number of jobs completed', 'Per service line targets', 'Monthly'],
      ['Review Request Rate', 'Review requests sent / deliveries completed', '100%', 'Weekly'],
      ['Review Conversion Rate', 'Reviews received / review requests sent', '> 25%', 'Monthly'],
      ['Average Review Rating', 'Mean of all Google review ratings', '> 4.7', 'Monthly'],
      ['Complaint Rate', 'Complaints received / deliveries completed', '< 5%', 'Monthly'],
      ['Repeat Customer Rate', 'Returning customers / total customers (12-month window)', '> 30%', 'Quarterly'],
      ['Referral Rate', 'Jobs from referrals / total new jobs', '> 20%', 'Quarterly'],
      ['Lead-to-Revenue Cycle Time', 'Avg. days from first inquiry to delivery', 'Per service line benchmark', 'Monthly'],
      ['NPS (Net Promoter Score)', 'Survey-based (0–10 recommend likelihood)', '> 70', 'Quarterly'],
    ]
  );

  c += h2('KPI Tracking Cadence');
  c += procedure('Weekly KPI Review', [
    'Pull lead response time report from CRM for the previous 7 days',
    'Count consultations scheduled vs. total inbound leads logged',
    'Calculate estimate close rate from estimates delivered vs. jobs booked in the period',
    'Check review request compliance: did every delivery trigger a review request?',
    'Flag any KPI outside target range for discussion in the team meeting',
  ]);

  c += procedure('Monthly KPI Review', [
    'Generate full revenue report by service line — compare to prior month and prior year',
    'Calculate review conversion rate and average star rating — check for trend',
    'Calculate complaint rate and categorize by type and resolution outcome',
    'Review referral source breakdown in CRM — which sources are growing?',
    'Identify any team member-level trends: who has the highest close rate? Highest complaint rate?',
    'Set targets for the following month based on current performance and business goals',
  ]);

  c += h2('Responding to KPIs Outside Target');
  c += table(
    ['KPI Below Target', 'First Investigation Step', 'Common Root Cause', 'Corrective Action'],
    [
      ['Lead Response Time > 10 min', 'Review CRM lead arrival logs vs. first contact logs', 'Staff not notified of new leads in real time', 'Fix CRM alert settings; assign lead monitoring duty'],
      ['Consultation Booking Rate < 60%', 'Review recordings or notes from declined calls', 'Price shared too early; value not established', 'Refresh phone script training; mystery shop exercise'],
      ['Estimate Close Rate < 40%', 'Review estimates that went cold — what was the last communication?', 'Insufficient follow-up; competitor pricing', 'Increase follow-up cadence; review pricing strategy'],
      ['Review Conversion < 25%', 'Check delivery records — are review requests consistently sent?', 'Inconsistent ask; poor timing of text', 'Build review request into delivery checklist; test text timing'],
      ['Complaint Rate > 5%', 'Categorize complaint types and identify patterns', 'Systemic install quality issue or expectation gap', 'Root cause analysis with lead installer; update expectation scripts'],
    ]
  );

  c += h2('KPI Benchmarks by Business Size');
  c += table(
    ['Business Stage', 'Monthly Job Volume', 'Staffing', 'Priority KPIs', 'Acceptable Range'],
    [
      ['Startup (< 1 year)', '15–30 jobs/month', '1–2 staff (owner + 1 CS)', 'Lead response time; close rate; review rating', 'Wider tolerance — building pipeline; focus on learning over optimization'],
      ['Growth (1–3 years)', '30–80 jobs/month', '2–4 staff dedicated CS + install', 'All 12 core KPIs; NPS introduced', 'Move all KPIs to within 10% of target; identify the 2 weakest for focused improvement'],
      ['Established (3+ years)', '80–200+ jobs/month', 'Dedicated CS team; CRM manager', 'NPS; repeat rate; referral rate; AJV growth trend', 'All KPIs at or above target; focus shifts to trend improvement and segment analysis'],
    ]
  );

  return c;
}

function chTrainingNewStaff() {
  let c = '';
  c += p('New customer service staff require a structured onboarding program that goes beyond "shadow for a week." This chapter provides a 30-day training framework covering all competencies a new team member must demonstrate before handling customers independently.');

  c += h2('Onboarding Phases Overview');
  c += table(
    ['Phase', 'Duration', 'Focus', 'Completion Criteria'],
    [
      ['Phase 1: Orientation', 'Days 1–3', 'Brand, culture, systems, safety', 'Passes systems quiz; signs handbook acknowledgment'],
      ['Phase 2: Product Knowledge', 'Days 4–10', 'Film, coating, tint, wrap — basics of each', 'Passes product knowledge assessment (80%+)'],
      ['Phase 3: Process Practice', 'Days 11–20', 'Scripts, CRM, consultations, estimates — role-play', 'Passes simulated consultation evaluation'],
      ['Phase 4: Supervised Calls', 'Days 21–27', 'Live customer interactions with supervisor listening', 'Satisfactory supervisor evaluation on 5 live interactions'],
      ['Phase 5: Independent Practice', 'Days 28–30', 'Handle own lead queue with supervisor available', 'Successfully manages 10 leads independently'],
    ]
  );

  c += h2('Phase 2: Product Knowledge Training — Required Topics');
  c += checklist([
    'Paint protection film: film construction, adhesive types, self-healing, top coat, warranty tiers',
    'Ceramic coatings: chemistry basics, application method, curing, hydrophobic property, layering',
    'Vinyl wrap: film types, finishes, adhesive removal, design applications, fleet applications',
    'Window tint: visible light transmission percentages, ceramic vs. dyed vs. carbon, legal limits by state',
    'Paint correction: what it is, why it matters before coating, basic compound/polish understanding',
    'How to read a paint thickness gauge reading (context — not to perform correction)',
    'What questions to ask vs. what to refer to the lead installer',
    'How to set accurate expectations for each service type',
  ]);

  c += h2('Supervised Call Evaluation Rubric');
  c += table(
    ['Evaluation Criterion', 'Weight', 'Scoring Notes'],
    [
      ['Greeting quality and brand compliance', '10%', 'Used shop name, own name, warm tone within first 5 seconds'],
      ['Needs discovery — asked qualifying questions', '20%', 'Minimum 3 discovery questions asked; listened without interrupting'],
      ['Product knowledge accuracy', '20%', 'No factual errors; referred to installer for technical questions beyond scope'],
      ['Expectation setting', '15%', 'Timeline, result, and aftercare expectations communicated correctly'],
      ['CRM logging — same-day completeness', '15%', 'All required fields completed; follow-up task created'],
      ['Next step clarity', '10%', 'Clear, specific next step established and communicated'],
      ['Overall brand voice compliance', '10%', 'Tone, language, non-pressure approach maintained throughout'],
    ]
  );

  c += h2('Role-Play Scenarios for Training');
  c += table(
    ['Scenario', 'Training Objective'],
    [
      ['Caller opens with: "How much for a full wrap?"', 'Discovery before pricing; not leading with numbers'],
      ['Customer who got a cheaper competitive quote', 'Value differentiation without disparaging competitors'],
      ['Estimate follow-up call — customer hasn\'t responded in 5 days', 'Non-pushy follow-up; identify objections'],
      ['Customer calling upset about a bubbled film edge', 'HEAR framework; complaint resolution; CRM documentation'],
      ['New car owner who doesn\'t know what PPF or ceramic is', 'Education-first consultation; portfolio use'],
      ['Customer who wants a rush timeline', 'Honest timeline management; escalation to installer'],
      ['Delivery walkthrough simulation', 'Tour sequence; aftercare review; review ask'],
    ]
  );

  return c;
}

function chAppendices() {
  let c = '';
  c += h2('Appendix A — Approved Email Signature Format');
  c += callout('tip', '**[Your Full Name]**\n[Title] | [Shop Name]\n[Direct Phone]\n[Email Address]\n[Website URL]\n\n*Protecting what drives you.*');

  c += h2('Appendix B — CRM Lead Source Tag Master List');
  c += checklist([
    'Google Search (Organic)',
    'Google Ads (Paid)',
    'Google Maps Discovery',
    'Instagram Organic',
    'Instagram Ad',
    'Facebook Organic',
    'Facebook Ad',
    'TikTok Organic',
    'TikTok Ad',
    'YouTube',
    'Referral — Customer (Name)',
    'Referral — Partner Business (Name)',
    'Referral — Dealer (Dealership Name)',
    'Walk-In Unannounced',
    'Car Show / Event',
    'Repeat Customer — Self',
    'Print / Local Ad',
    'Other — Notes Required',
  ]);

  c += h2('Appendix C — Approved Discount Authority Levels');
  c += table(
    ['Discount Type', 'Maximum %', 'Who Can Approve', 'Requires Documentation'],
    [
      ['Loyalty / repeat customer', '5%', 'Service Advisor', 'CRM note only'],
      ['Referral incentive (referred customer first job)', '10%', 'Service Advisor', 'CRM note + referral record'],
      ['Bundle discount', '8% on total package', 'Service Advisor', 'Noted on estimate'],
      ['Military / first responder', '10%', 'Service Advisor', 'ID verification note in CRM'],
      ['Complaint resolution courtesy discount', 'Up to 15%', 'CSM', 'Full complaint resolution record required'],
      ['Competitor match (documented competitive quote)', 'Up to 10%', 'CSM', 'Copy of competitor quote on file'],
      ['Any discount above 15%', 'Unlimited', 'Owner/GM only', 'Written approval + full context note'],
    ]
  );

  c += h2('Appendix D — New Customer Welcome Script (Walk-In)');
  c += callout('script', '"Welcome! Come on in — [Name] here, how can I help you today?"\n\n[After they state their interest:]\n"Great — are you familiar with [service], or would it be helpful if I gave you a quick overview of how it works?"\n\n[If unfamiliar:] Give 60-second education using a demo panel or sample.\n\n"The best thing we can do for you today is take a look at your vehicle — takes about 10 minutes, no charge, no obligation. Would you like to do that now?"');

  c += h2('Appendix E — Quick Reference: Complaint Resolution Authority');
  c += table(
    ['Resolution', 'SA Authority', 'CSM Authority', 'Owner Only'],
    [
      ['Free return appointment for rework', 'Yes', 'Yes', 'Not required'],
      ['Complimentary detailing or add-on service', 'Up to $100 value', 'Up to $500 value', 'Above $500'],
      ['Partial refund', 'No', 'Up to 25% of job value', 'Above 25%'],
      ['Full refund', 'No', 'No', 'Yes — requires documentation'],
      ['Free upgrade to premium tier', 'No', 'Yes with documentation', 'Not required'],
      ['External referral (vehicle back to factory for paint claim)', 'No', 'No', 'Yes — legal review first'],
    ]
  );

  c += h2('Appendix F — Seasonal Service Promotion Calendar');
  c += table(
    ['Month', 'Promotion Theme', 'Service Focus', 'Channel'],
    [
      ['January–February', '"New Year, New Protection"', 'Ceramic coating + PPF packages', 'Email to prior customers; Google Ad'],
      ['March–April', '"Spring Protection Package"', 'Pre-summer full vehicle protection', 'Social media + email'],
      ['May–June', '"Show Season Ready"', 'Full detail + coating + optional wrap', 'Car club outreach + social'],
      ['July–August', 'UV Protection awareness', 'Tint + ceramic — heat damage focus', 'Social education posts'],
      ['September–October', '"Pre-Winter Shield"', 'PPF on high-impact zones', 'Email campaign + Google'],
      ['November–December', '"Gift Card Season"', 'Gift certificates for enthusiast vehicles', 'Social + email; in-shop display'],
    ]
  );

  c += h2('Appendix G — Vehicle Type Reference Card');
  c += table(
    ['Vehicle Category', 'Typical Services', 'Key Upsell', 'Estimated Ticket Range'],
    [
      ['New luxury sedan (0–6 months)', 'Ceramic coating full vehicle + PPF front zone + window tint', 'Elite paint protection package', '$2,000–$5,000'],
      ['Used daily driver', 'Full detail + paint correction + sealant or entry ceramic', 'Ceramic upgrade from sealant', '$400–$1,200'],
      ['Sports/performance vehicle', 'Full correction + premium ceramic + optional PPF full front', 'Full PPF hood + bumper + mirrors', '$2,500–$6,000+'],
      ['SUV/pickup (family use)', 'Full detail + ceramic + tint + fabric protection', 'Interior ceramic coating bundle', '$800–$2,000'],
      ['Classic/collector vehicle', 'Hand-polish only (no machine); wax; interior conditioning; soft-top care', 'Annual maintenance plan', '$500–$1,500'],
      ['Fleet vehicle (commercial)', 'Vinyl wrap or tint; bulk pricing; scheduled maintenance', 'Fleet maintenance contract', 'Per vehicle × fleet volume'],
      ['Exotic/supercar', 'Full PPF + multi-layer ceramic + custom tint; all corrections', 'Full front or full body PPF', '$5,000–$20,000+'],
    ]
  );

  c += h2('Appendix H — Objection Handling Quick Reference');
  c += table(
    ['Objection', 'Root Concern', 'Response Framework'],
    [
      ['"I need to think about it"', 'Not yet sold; risk aversion', 'Ask: "What would make you feel confident moving forward today?" — address the specific barrier'],
      ['"I saw it cheaper elsewhere"', 'Price comparison without quality context', 'Ask: "What was included in that quote?" — establish value differential; never match without understanding the comparison'],
      ['"Can I just do part of it?"', 'Budget constraint', 'Offer a scoped-down version with a clear upgrade path documented in the CRM for follow-up'],
      ['"I don\'t want to leave the car all day"', 'Inconvenience concern', 'Offer early drop-off + loaner/shuttle arrangement; highlight same-day service options where applicable'],
      ['"My last shop messed it up"', 'Trust deficit from prior experience', 'Acknowledge the experience; invite them to tour the shop; show your QC process; offer a smaller initial service to earn trust'],
    ]
  );

  return c;
}

function chPricingPresentationPsychology() {
  let c = '';
  c += p('Price presentation is a skill distinct from pricing itself. The same price can be received very differently by the customer depending on how, when, and in what context it is presented. This chapter covers the psychological principles behind price presentation and provides practical scripts and frameworks that increase conversion without resorting to high-pressure tactics.');

  c += h2('The Anchoring Effect in Service Sales');
  c += p('Anchoring is the human tendency to rely heavily on the first piece of information encountered when making a decision. In service sales, the first price the customer hears becomes the reference point against which all subsequent prices are evaluated.');

  c += procedure('Applying the Anchoring Effect', [
    'Always present the highest-tier option first, even if you believe the customer will choose a lower tier',
    'Describe the premium option thoroughly before introducing the mid-tier — the mid-tier price feels reasonable in comparison to the premium anchor',
    'When presenting multiple tiers, move from highest to lowest: "Our Elite package is $3,200 for full vehicle coverage. Our Professional package at $1,800 is our most popular choice. For clients focused on just the highest-impact areas, our Essential is $900."',
    'After introducing the anchor, pause and let the customer react before moving to the next tier — rushing through all three prices dilutes the anchoring effect',
  ]);

  c += h2('Framing Price as Investment vs. Cost');
  c += table(
    ['Cost Framing (Avoid)', 'Investment Framing (Use)', 'Why Investment Framing Works'],
    [
      ['"It\'s going to be $2,400"', '"The investment for this service is $2,400"', '"Investment" implies return; "cost" implies loss with no recovery'],
      ['"That\'s what it costs"', '"Here\'s what you\'re getting for that investment: [list value elements]"', 'Connecting price to specific value prevents the price from standing alone'],
      ['"We charge $X per panel"', '"Our panel pricing reflects professional-grade film with a 10-year warranty and factory-certified installation"', 'Breaking down what the price represents justifies it without apologizing for it'],
      ['"I can do it cheaper if you skip..."', '"Let me show you an option that focuses on the highest-impact areas for a lower entry point"', 'Reframe reduction as scope adjustment, not discounting quality'],
    ]
  );

  c += h2('The Value Ladder — Building Toward the Ask');
  c += p('Customers who understand what they are paying for are significantly more likely to approve a higher-tier option. The value ladder builds the customer\'s appreciation of the outcome before the price is introduced.');

  c += procedure('Value Ladder Presentation Sequence', [
    '**Start with the problem** — describe what happens to a vehicle\'s paint, tint, or surface over time without protection',
    '**Introduce the solution** — explain what the specific service does to address the problem',
    '**Demonstrate the outcome** — show photos, demo panels, or live demonstration of the result',
    '**Quantify the value** — "A full respray on a vehicle like yours costs $8,000–$15,000; our protective package at $X prevents the primary causes of paint damage"',
    '**Present the investment** — only now, after the customer fully understands what the service does, present the price',
    '**Tie back to their goal** — "You mentioned you\'re planning to keep this vehicle for 10 years. This investment protects the paint for that entire ownership period."',
  ]);

  c += h2('Handling "Can You Do it Cheaper?" Professionally');
  c += p('The request for a lower price is not always a rejection — it is often an invitation to re-explain the value or to find a scope adjustment that serves the customer better. The worst response is an immediate, unconditional discount, which signals that the original price was inflated.');

  c += procedure('Responding to a Price Reduction Request', [
    'Acknowledge the request without apologizing: "I want to make sure we find the right fit for you."',
    'Ask a clarifying question: "Is there a specific budget range you\'re working within?"',
    'If the gap is modest ($100–$200): explore whether a package adjustment, timing, or a loyalty benefit brings the number into range without reducing quality',
    'If the gap is significant: present a lower-scope option and clearly describe what is included and what is excluded — never reduce the price on the same scope',
    'Never discount immediately: "Let me see what I can do" followed by an instant discount destroys price credibility permanently; if a discount is warranted, tie it to a specific reason (multi-service, referral, loyalty tier)',
    'Close with the value: regardless of which option the customer selects, end with a restatement of what they are getting and why it is the right choice for their vehicle',
  ]);

  c += h2('The Power of Specificity in Price Justification');
  c += p('Vague value statements do not justify price. Specific, concrete statements do.');

  c += table(
    ['Vague (Weak)', 'Specific (Strong)'],
    [
      ['"Our film is high quality"', '"This film has a 10-year manufacturer warranty against yellowing, cracking, and delaminating"'],
      ['"We\'re experienced"', '"Our lead installer has performed over 400 PPF installations on vehicles from compact cars to supercars"'],
      ['"It protects your car"', '"This film absorbs rock impacts that would chip through paint — it self-heals those impacts with heat, returning to a clear surface"'],
      ['"We do great work"', '"We have a 4.9-star Google rating from 218 reviews — I can send you the link before you decide"'],
    ]
  );

  return c;
}

function chServiceRecoveryAdvanced() {
  let c = '';
  c += p('Standard complaint resolution handles the reactive dimension of service failure. Service recovery at an advanced level transforms failure into a relationship-building opportunity — when executed well, a customer who has experienced a problem that was handled with exceptional care becomes among the most loyal and vocal advocates the shop has. This chapter goes beyond the basics to cover the strategic and emotional dimensions of service recovery.');

  c += h2('The Service Recovery Paradox');
  c += p('Research in customer experience management consistently shows that customers who experience a well-resolved service failure often report higher satisfaction and loyalty than customers who never experienced a failure at all. This is the service recovery paradox — and it applies directly to automotive service businesses.');

  c += p('The paradox operates because a successful recovery demonstrates:');
  c += checklist([
    'The shop takes accountability rather than deflecting',
    'The shop\'s commitments are reliable — when they promise a fix, they deliver it',
    'The customer matters as an individual, not just as a transaction',
    'The shop has the character and capability to handle adversity',
  ]);

  c += callout('tip', 'Not every complaint can become a recovery paradox success story. But every complaint is an opportunity to demonstrate what kind of business this is. The key differentiator is speed of response and the specificity of the resolution — both of which are determined by process, not personality.');

  c += h2('Emotional Stages of a Complaint');
  c += p('Understanding the emotional state of a complaining customer is the prerequisite to handling the interaction effectively. Customers in different emotional states need different responses.');

  c += table(
    ['Emotional Stage', 'Customer Behavior', 'What They Need', 'Staff Response'],
    [
      ['Frustrated (early)', 'Polite but clearly unhappy; may over-describe the problem; seeks acknowledgment', 'To feel heard; to know someone cares', 'Active listening; no interruption; full presence; restate what you heard'],
      ['Angry (escalated)', 'Raised voice; accusatory language; may threaten review or legal action', 'Validation of the seriousness of the issue; action, not more talking', 'Acknowledge without defending; offer specific action with a timeline'],
      ['Defeated (past frustration)', 'Flat affect; low energy; "I\'m done"; may have already written the review', 'A reason to re-engage; evidence that the problem will actually be fixed', 'Escalate to CSM or owner; personal call from senior leadership; concrete, written commitment'],
      ['Satisfied post-resolution', 'Relaxed; responsive; may express gratitude', 'Confirmation that the resolution is complete; invitation to continue the relationship', 'Follow through on every promise; check in proactively; gentle invitation to update the review'],
    ]
  );

  c += h2('The Written Commitment Protocol');
  c += p('For any complaint at Level 2 or above, a written commitment to resolution must be provided to the customer. This is not legal protection — it is an act of accountability that signals to the customer that the shop\'s resolution promise is real.');

  c += callout('script', '**Sample Written Commitment Letter:**\n\n"Dear [Customer Name],\n\nThank you for bringing this to our attention. I want to confirm our commitment to you in writing:\n\nWe have identified [specific issue] on your [Vehicle]. To correct this, we will [specific action] at no charge to you. We will complete this by [specific date].\n\nI personally will follow up with you on [date] to confirm the resolution meets your expectations. You can reach me directly at [number].\n\nWe value your trust and are committed to making this right.\n\nSincerely,\n[Name, Title]"');

  c += h2('Review Recovery After a Complaint');
  c += p('A negative review posted during or immediately after a complaint is a public record that prospective customers will see. The recovery process must address both the customer\'s experience and the public perception.');

  c += procedure('Review Recovery Protocol', [
    'Respond to the negative review publicly within 2–4 hours: acknowledge the issue, take ownership, describe the action being taken',
    'Do not argue, defend, or provide excuses in the public response — the response is read by prospective customers, not just the complaining customer',
    'Private follow-up with the customer: call within the same business day; reference the review; reaffirm the commitment to resolution',
    'After the resolution is complete: follow up with the customer personally; once satisfied, it is appropriate to ask: "Would you be willing to share how the resolution went? It would mean a lot to us — we want future customers to see the full picture of how we handle issues"',
    'Never incentivize review changes with discounts or free services — this violates review platform terms of service and, if discovered, is more damaging than the negative review itself',
    'Log the review, the resolution, and the outcome in the CRM record for that customer',
  ]);

  return c;
}

function chConsumerPsychology() {
  let c = '';
  c += p('Understanding why customers make the decisions they do gives the customer service team a significant advantage in building relationships, presenting services, and retaining clients. This chapter covers the core principles of consumer psychology as they apply directly to the automotive restyling service context — without manipulation, and with the customer\'s genuine interests at the center.');

  c += h2('Decision-Making in High-Consideration Purchases');
  c += p('Automotive protection services — PPF, ceramic coating, vinyl wrap — are high-consideration purchases. The customer is spending a significant amount of money on something they cannot fully evaluate before purchase (unlike buying a product they can inspect). This creates a set of predictable psychological dynamics:');

  c += table(
    ['Psychological Dynamic', 'How It Manifests', 'How to Address It'],
    [
      ['Uncertainty about quality', 'Customer shops multiple quotes; asks same questions repeatedly; delays decision', 'Provide verifiable social proof (reviews, portfolio, referrals); offer a clear, written warranty'],
      ['Fear of regret', 'Customer says "I\'ll think about it" when they actually want to say yes', 'Address the fear directly: "What would need to be true for this to feel like the right decision?"'],
      ['Social comparison', 'Customer mentions competitors; asks "why are you more expensive?"', 'Do not disparage competitors; calmly differentiate on specific, verifiable value elements'],
      ['Loss aversion', 'Customer responds to "what you lose without protection" more strongly than "what you gain"', 'Frame protection in terms of what the vehicle loses without it: rock chips, UV fade, resale value decline'],
      ['Authority bias', 'Customer trusts the expert\'s recommendation strongly when expertise is established', 'Build expertise first (education phase) before making any recommendation — recommendations land differently after trust is established'],
    ]
  );

  c += h2('The Trust Hierarchy in Service Businesses');
  c += p('Customers extend trust along a hierarchy. Understanding where a prospect sits in this hierarchy dictates which trust-building mechanism to use.');

  c += table(
    ['Trust Level', 'Customer State', 'What They Need', 'Most Effective Trust Signal'],
    [
      ['Level 1 — Aware', 'Has seen the shop\'s advertising or posts; no personal contact yet', 'Evidence that others trust the shop', 'Volume of positive reviews; visual quality of social media portfolio'],
      ['Level 2 — Considering', 'Has inquired; is comparing options', 'Reason to believe this shop is the right choice for them', 'Personal reference (referral); specific portfolio work similar to their vehicle'],
      ['Level 3 — Engaged', 'Has had a consultation; has received an estimate', 'Confidence that the specific outcome will be achieved', 'Clear scope in writing; warranty documentation; technician\'s credentials and experience'],
      ['Level 4 — Committed', 'Has approved and scheduled; vehicle is in the shop', 'Reassurance that the vehicle is safe and work is progressing', 'Proactive updates; access to the SA; progress photos'],
      ['Level 5 — Loyal', 'Has received the completed job and is satisfied', 'Recognition and an ongoing relationship', 'Personal follow-up; loyalty program acknowledgment; anniversary recognition'],
    ]
  );

  c += h2('The Role of Certainty in the Buying Decision');
  c += p('Customers do not just buy a service — they buy a feeling of certainty about the outcome. A customer who is uncertain about whether the result will meet their expectations will delay or abandon the purchase, even when they want the service. Eliminating uncertainty is the primary function of the pre-sale consultation.');

  c += procedure('Certainty-Building Actions in the Consultation', [
    'Show physical samples — a tangible sample eliminates "I can\'t tell how it will look" uncertainty',
    'Show your own work on a similar vehicle — "we did this exact package on a vehicle like yours last month"',
    'Explain what happens if it is not right — the warranty and rework commitment removes the "what if I\'m stuck with a bad result" fear',
    'Quantify the protection benefit in concrete terms — "this film absorbs rock impacts that would chip through paint"',
    'Provide the names of past clients who have given permission to serve as references — verbal reference from a peer is the most powerful certainty signal',
    'Close the consultation by summarizing what will happen step by step — a customer who knows exactly what the process is feels certain about proceeding',
  ]);

  return c;
}

function chInboundMarketingCS() {
  let c = '';
  c += p('Inbound marketing — attracting prospective customers through content, search visibility, and word of mouth rather than interrupting them with outbound advertising — is the long-term growth engine for automotive restyling businesses. Customer service plays a central role in inbound marketing because every customer interaction either creates content (reviews, referrals, testimonials) or fails to. This chapter connects CS operations to inbound marketing outcomes.');

  c += h2('How CS Drives Inbound Marketing Performance');
  c += table(
    ['CS Action', 'Inbound Marketing Outcome', 'Measurement'],
    [
      ['Consistently requesting Google reviews', 'Higher Google rating; more reviews = better local search ranking', 'Weekly review count; monthly rating trend'],
      ['Proactive in-service photo documentation', 'Social media content library; portfolio growth; before/after posts', 'Monthly content pieces produced per job'],
      ['Referral program communication at delivery', 'Word-of-mouth referral volume', 'Quarterly referral rate (referred jobs / total new jobs)'],
      ['Delivering genuinely exceptional experiences', 'Spontaneous online sharing by customers (tagged posts, stories)', 'Monthly tag mentions; organic reach from customer-generated content'],
      ['Following up after delivery and asking for reviews', 'Review conversion rate and review quality', 'Review requests sent vs. reviews received'],
      ['Responding to all reviews professionally', 'Trust signals for prospects reading reviews; engagement with existing customers', 'Review response rate and response timeliness'],
    ]
  );

  c += h2('Content Creation Role for Customer Service Staff');
  c += p('Customer service staff who interact with customers during key moments — consultation, delivery, the "wow" reaction at reveal — are ideally positioned to capture content that marketing cannot manufacture artificially.');

  c += checklist([
    'SA captures the customer\'s reaction at delivery with their permission — a genuine reaction video is among the highest-performing content formats for this market',
    'SA photographs the vehicle at delivery in the lighting conditions where it looks best — a dark, moody background with a properly lit vehicle is more impactful than a bright daylit shot',
    'When a customer shares their vehicle on social media and tags the shop, the SA comments immediately and personally — this signals to the algorithm and to the customer\'s network that the shop is engaged and real',
    'SA asks at every delivery: "Would you be comfortable sharing a quick photo of your vehicle with us? We\'d love to feature it on our page with credit to you."',
    'SA collects written testimonials from customers who express enthusiasm at delivery — a single genuine sentence from a satisfied client is worth more than any marketing copy',
  ]);

  c += h2('SEO Benefit of Customer Reviews');
  c += p('Google\'s local search ranking algorithm gives significant weight to review volume, review recency, and review rating. For a locally-competing automotive service business, reviews are one of the highest-impact, lowest-cost SEO activities available.');

  c += table(
    ['Review Factor', 'SEO Impact', 'CS Role'],
    [
      ['Review volume (total count)', 'Higher count = stronger trust signal; better ranking', 'Systematically request reviews on every delivery'],
      ['Review recency', 'Recent reviews outweigh old reviews in ranking calculation', 'Consistent review generation (not one campaign, then silence) is required'],
      ['Review rating (stars)', 'Higher average = better ranking; below 4.0 triggers suppression', 'Service quality drives ratings; recovery after complaints protects the average'],
      ['Review keywords', 'Reviews that mention specific services help the business rank for those search terms', 'Educate customers on what to write: "If you\'re happy, mentioning what service you got and the vehicle type helps us reach people searching for the same thing"'],
      ['Business responses to reviews', 'Response rate and quality are a secondary ranking signal', 'Respond to every review within 24 hours — always'],
    ]
  );

  c += h2('Monthly Content Planning with CS Input');
  c += procedure('Monthly CS Content Calendar Input', [
    'First Monday of the month: SA lead reviews the previous month\'s completed jobs; identifies the 4–6 with the most visual impact or the most compelling story',
    'SA prepares a brief content brief for each selected job: vehicle; service; before/after availability; any notable detail (customer milestone, rare vehicle, complex install)',
    'SA submits the briefs to the marketing designee; marketing schedules and produces the content from the provided information and photos',
    'SA reviews draft posts before publishing to verify accuracy of any technical or service claims',
    'After posting: SA monitors comments for 48 hours; responds to any comments or questions from prospective customers who engage with the post',
  ]);

  return c;
}

function chCustomerJourneyMap() {
  let c = '';
  c += p('The customer journey is the complete sequence of experiences a customer has with the shop — from first awareness through long-term loyalty. Mapping this journey systematically reveals the touchpoints where the experience is strongest, where gaps exist, and where competitors have an opportunity to intercept a prospective client. This chapter provides the complete CORE Workbooks customer journey map with associated customer expectations, shop responsibilities, and quality standards at each stage.');

  c += h2('Journey Map Overview');
  c += table(
    ['Stage', 'Customer Action', 'Customer Emotion', 'Shop Responsibility', 'Success Indicator'],
    [
      ['1 — Awareness', 'Sees an ad, post, or a wrapped vehicle; searches online', 'Curious; comparing; low commitment', 'Visible portfolio; strong reviews; fast response to first contact', 'First inquiry made'],
      ['2 — Research', 'Reads reviews; visits website; browses social media; may ask a friend', 'Evaluating; hopeful; uncertain', 'Consistent high-quality online presence; prompt initial response', 'Consultation inquiry submitted'],
      ['3 — First Contact', 'Calls, texts, or fills out the web form', 'Tentative; testing the waters; forming a first impression', 'Warm, fast, professional response; begins discovery', 'Consultation booked'],
      ['4 — Consultation', 'Visits or meets online for assessment and education', 'Engaged but guarded; evaluating trust', 'Expert consultation; education; honest assessment; clear options presented', 'Estimate requested or approved on the spot'],
      ['5 — Estimate Review', 'Reviews written estimate; compares to alternatives', 'Deliberating; may have objections; checking the number feels right', 'Professional written estimate; timely follow-up; objection handling', 'Estimate approved; deposit taken'],
      ['6 — Scheduling', 'Books the appointment; arranges drop-off logistics', 'Committed but may have logistics anxiety', 'Smooth booking; clear confirmation; preparation checklist sent', 'Appointment confirmed; deposit received'],
      ['7 — Vehicle Drop-Off', 'Arrives with vehicle; hands over keys', 'Trusting but slightly anxious; protective of vehicle', 'Warm reception; intake walkaround; clear expectations set for timeline and process', 'Vehicle in shop; intake form signed'],
      ['8 — In-Service', 'Goes about their day; waits for updates', 'Varies: curious, anxious, or trusting depending on prior communication', 'Proactive updates per schedule; immediate notification of any change', 'Customer contacts shop for updates (ideally zero — proactive updates prevent this)'],
      ['9 — Delivery', 'Returns to pick up vehicle', 'Anticipatory; will compare result to expectation set during consultation', 'Full delivery walkthrough; aftercare education; review ask', 'Customer leaves satisfied; review requested; aftercare understood'],
      ['10 — Post-Service (30 days)', 'Lives with the result; notices the benefits; may talk to friends', 'Satisfied (if result met expectation); possibly sharing on social media', '30-day check-in call; warranty reminder; review follow-up if not yet submitted', 'Review posted; no complaints'],
      ['11 — Loyalty', 'Returns for maintenance; refers friends; responds to seasonal campaigns', 'Loyal; advocate; relationship-based', 'Warranty check-ins; loyalty acknowledgment; referral program communication', 'Repeat visit booked; referral generated'],
      ['12 — Advocate', 'Actively recommends the shop; social media posts; brings others in', 'Proud advocate; ownership stake in the shop\'s success', 'Referral reward delivered; VIP recognition; personal thank-you', 'Multiple referrals generated; tagged posts; 5-star reviews with specific detail'],
    ]
  );

  c += h2('Critical Moments of Truth');
  c += p('Moments of truth are the interactions in the customer journey that have disproportionate impact on the customer\'s overall evaluation of the experience. Failing at a moment of truth is recoverable but costly; excelling at a moment of truth creates lasting positive memories.');

  c += table(
    ['Moment of Truth', 'Why It Is Disproportionately Important', 'How to Excel at It'],
    [
      ['First 30 seconds of first contact (call, text, or walk-in)', 'First impressions are extremely resistant to revision; the tone is set in the first interaction', 'Warm, immediate, professional; use their name within 10 seconds; project energy and confidence'],
      ['Receiving the estimate', 'This is where the customer evaluates the value proposition; a poorly presented estimate loses jobs that would otherwise convert', 'Send in PDF with a personal note; itemized; clear warranty terms; follow up within 48 hours'],
      ['The intake walkaround', 'This is where the customer sees whether the shop is professional or amateur; the walkaround signals how the vehicle will be treated', 'Thorough; takes time; inspector uses a proper light; every defect documented without making the customer feel blamed'],
      ['The delivery reveal', 'This is the emotional peak of the experience; the customer is comparing what they received to what they imagined', 'Stage the vehicle; walk around it together; point out the best details; let them have their reaction before talking'],
      ['The first problem or concern', 'How the shop handles adversity determines whether the customer becomes loyal or becomes a detractor', 'Respond immediately; listen fully; offer a specific resolution before they ask for one'],
    ]
  );

  c += h2('Customer Communication Frequency Standard');
  c += table(
    ['Journey Stage', 'Minimum Contact Frequency', 'Preferred Channel', 'Content'],
    [
      ['From first inquiry to consultation booking', 'Immediate response + confirmation', 'Call + text confirmation', 'Thank them; confirm appointment details'],
      ['From booking to drop-off', '48h reminder + 24h reminder', 'Text + email', 'Confirm appointment; what to bring; address'],
      ['Drop-off day', 'At drop-off (in person) + same-day text', 'In person + text', 'Intake complete; ETA confirmed; direct contact info'],
      ['1-day service', '1 update (in-service) + delivery call', 'Text + call', 'Status + ETA'],
      ['2–3 day service', 'End of each day + delivery call', 'Text (end of day) + call', 'Progress + ETA each day'],
      ['4+ day service', 'Day 2 with photos + every 2 days + delivery call', 'Text with photos + call', 'Progress photos + milestones + ETA'],
      ['Post-delivery', '24h text + 7-day call + 30-day call', 'Text then call', 'Check satisfaction; answer questions; review request'],
      ['Annual', 'Warranty check-in reminder', 'Email + text', 'Schedule inspection; loyalty offer'],
    ]
  );

  c += h2('Measuring Journey Quality');
  c += p('Each stage of the journey can be measured. The following KPIs correspond directly to the journey stages above:');
  c += table(
    ['Journey Stage', 'KPI', 'Target', 'Measurement Source'],
    [
      ['Awareness → Research', 'Profile views; website sessions', 'Growing month-over-month', 'Google Business; website analytics'],
      ['Research → First Contact', 'Contact conversion rate (contacts / profile views)', '> 5%', 'Google Business insights; form submissions'],
      ['First Contact → Consultation', 'Consultation booking rate', '> 60% of qualified inquiries', 'CRM'],
      ['Consultation → Estimate', 'Estimate request rate', '> 80% of consultations', 'CRM'],
      ['Estimate → Approval', 'Close rate', '> 40%', 'CRM'],
      ['Approval → Drop-Off', 'No-show / reschedule rate', '< 10%', 'Calendar vs. deposits'],
      ['Drop-Off → Delivery', 'On-time completion rate', '> 90%', 'Job calendar vs. actual completion'],
      ['Delivery → Review', 'Review conversion rate', '> 25%', 'Reviews received / requests sent'],
      ['Delivery → Return', 'Repeat customer rate (12 months)', '> 30%', 'CRM repeat customer report'],
      ['Return → Referral', 'Referral rate', '> 20%', 'CRM lead source tracking'],
    ]
  );

  c += h2('Experience Gap Analysis');
  c += p('An experience gap is the difference between what the customer expects at a given stage and what they actually receive. Identifying and closing experience gaps is the primary driver of NPS improvement and complaint reduction.');

  c += procedure('Conducting an Experience Gap Analysis', [
    'Survey a sample of 20+ recent customers (mix of new, repeat, and dissatisfied) using a 5-question satisfaction survey about each stage',
    'Map average satisfaction scores by stage; identify any stage with a score below 4.0 out of 5.0',
    'For the lowest-scoring stage, conduct 3–5 customer interviews to understand what specifically fell below expectation',
    'Compare the actual shop process for that stage to the current SOP — is the process being followed? Is the SOP itself inadequate?',
    'Identify the root cause: skill gap; process gap; resource gap; communication gap',
    'Implement a corrective action; verify improvement in survey scores at the 90-day mark',
    'Repeat the analysis annually; expectations evolve as the customer base evolves',
  ]);

  return c;
}

function chVehiclePhotography() {
  let c = '';
  c += p('Vehicle photography is not just a marketing activity — it is a quality control and trust-building tool. Every completed vehicle should be photographed professionally before delivery. These images document the shop\'s work, provide social proof, protect against post-delivery disputes, and fuel ongoing content marketing without any additional cost.');

  c += h2('Photography Standard — When and Why');
  c += table(
    ['Purpose', 'Stage', 'Primary Use'],
    [
      ['Documentation of vehicle condition', 'At intake — before any work', 'Legal protection; dispute resolution; customer communication about pre-existing issues'],
      ['Progress documentation', 'Mid-service (optional on complex jobs)', 'Proactive customer updates; social media content showing the process'],
      ['Final delivery portfolio', 'After completed QC; before delivery', 'Portfolio; social media; review requests; customer gift; resale value documentation'],
      ['Before/after comparison', 'Side-by-side of intake vs. delivery photos', 'Highest-converting social media content; demonstrates value clearly'],
    ]
  );

  c += h2('Equipment Standards');
  c += checklist([
    'A modern smartphone with a capable camera is sufficient for documentation photography',
    'A dedicated mirrorless or DSLR camera is required for portfolio-quality delivery photography',
    'A circular polarizing filter on the camera lens reduces glare and reflections from paint surfaces',
    'A tripod or stabilizing grip prevents motion blur in low-light conditions',
    'A portable LED panel light or a reflector disc improves lighting consistency outdoors',
    'A clean, uncluttered background (bay wall, outdoor landscape) is required for all portfolio shots',
    'The vehicle must be freshly cleaned immediately before portfolio photography — no dust, water spots, or fingerprints',
  ]);

  c += h2('Standard Shot List — Delivery Portfolio');
  c += table(
    ['Shot', 'Description', 'Camera Setting'],
    [
      ['3/4 front driver side', 'Vehicle at 45° — most flattering and common automotive angle', 'Wide aperture (f/2.8–f/5.6); low to ground or bumper height'],
      ['3/4 rear passenger side', 'Opposite corner for symmetrical portfolio pair', 'Same as above'],
      ['Full profile driver side', 'Straight side view; parallel to vehicle', 'Camera at mid-door height; level horizon'],
      ['Hood detail close-up', 'Fill frame with hood surface to show film, coating, or correction quality', 'Macro or close-focus; raking light for gloss'],
      ['Wheel detail', 'One coated or cleaned wheel; close-up', 'Low angle; capture brake caliper and barrel if coated'],
      ['Interior overview', 'Driver door open; wide angle shows seats, dash, carpet', 'Interior lighting + flash if needed'],
      ['Service detail shot', 'The specific service feature: film edge, water beading on coating, tint comparison', 'Document what makes the job distinctive'],
      ['Before/after pair', 'If condition correction was performed — same angle, same distance, same lighting', 'Must match precisely for credibility'],
    ]
  );

  c += h2('Social Media Content Calendar Integration');
  c += p('Customer service is responsible for collecting content and ensuring the marketing calendar has a steady stream of vehicle photography. A consistent posting cadence — minimum three times per week — requires a systematic content pipeline, not sporadic inspiration.');

  c += procedure('Content Pipeline Protocol', [
    'At every delivery, the SA confirms that a photo set exists in the job file before closing the job in CRM',
    'The SA selects 3–5 best images and uploads to the shared marketing folder with the vehicle description and service performed',
    'The social media designee reviews the folder twice weekly and schedules content using the approved format',
    'All posted content must have the customer\'s permission confirmed — obtained at delivery using the media release checkbox on the intake form',
    'Tag the customer only if they have requested to be tagged — never tag without asking',
    'Service Advisor comments on their own delivered vehicle posts within 2 hours of posting to boost early engagement',
  ]);

  c += h2('Before/After Content — Best Practices');
  c += checklist([
    'Shoot the "before" at intake — this requires discipline; do not wait until the vehicle is already in the bay',
    'Match the "before" shot angle exactly for the "after" — use the same location marker (piece of tape on the floor) for consistency',
    'Paint correction before/after shots require raking LED light from the same angle in both shots',
    'Crop before/after images to the same panel area — do not use a wide-before and a close-up-after',
    'Caption must describe what changed: "2-stage paint correction, ceramic coating applied" not just "before and after"',
    'Never use heavy photo filters on vehicle photography — they alter perceived color and gloss and may mislead customers about results',
  ]);

  return c;
}

function chFleetCommercial() {
  let c = '';
  c += p('Fleet and commercial accounts are the highest-value recurring revenue source available to an automotive restyling shop. A single commercial account with ten vehicles per year at average job value generates more revenue than 20–30 individual consumer transactions. This chapter covers how to identify, approach, close, and manage fleet and commercial relationships.');

  c += h2('Fleet Account Types');
  c += table(
    ['Account Type', 'Typical Vehicle Volume', 'Primary Service', 'Decision Maker'],
    [
      ['Delivery fleet (vans, trucks)', '5–50 vehicles', 'Vinyl wrap branding; paint protection', 'Fleet manager or operations director'],
      ['Corporate car program', '3–20 vehicles', 'Paint protection, ceramic coating, window tint', 'HR or facilities manager; sometimes individual executives'],
      ['Car rental company', '10–100+ vehicles', 'PPF on high-wear areas; ceramic coating; tint', 'District manager or fleet purchasing team'],
      ['Dealer prep partnership', '20–100+ vehicles/month', 'Ceramic coating; PPF; tint on new vehicles pre-delivery', 'F&I manager or dealer principal'],
      ['Government / municipal fleet', 'Variable; procurement process required', 'Vehicle wraps for identification; PPF for protection', 'Purchasing department; formal RFP process usually required'],
      ['Emergency services (police, fire, ambulance)', 'Variable', 'High-visibility vinyl marking; PPF', 'Fleet coordinator; procurement through government process'],
    ]
  );

  c += h2('Fleet Account Acquisition');
  c += procedure('Fleet Account Prospecting Protocol', [
    'Identify prospects: delivery vans in your service area with unbranded vehicles are a strong target; companies with visible fleets but poor-quality or aging wraps',
    'Research the company before contact: size, fleet composition, decision-maker name and title (LinkedIn is effective)',
    'Initial outreach: a physical letter or personal email to the decision-maker works better than a cold call in the fleet market; include one striking photo of a relevant vehicle your shop has completed',
    'Discovery call goal: understand their fleet composition, current vendor situation, pain points (quality, turnaround, consistency), and budget parameters — do not quote price on the first call',
    'Proposal stage: provide a per-unit quote with volume pricing tiers; include a fleet management plan covering scheduling, turnaround time, replacement/warranty process, and documentation',
    'Proof of concept: offer to wrap or protect one vehicle at a demonstration rate; let the fleet manager see the result before committing the fleet',
    'Close: a fleet account requires a formal agreement; draft a master service agreement (MSA) covering pricing, scope, turnaround commitments, and warranty terms',
  ]);

  c += h2('Fleet Account Management');
  c += checklist([
    'Assign a dedicated Service Advisor as the fleet account manager — the commercial client should have one consistent contact',
    'Monthly billing cycle is standard for commercial accounts — provide a detailed invoice with vehicle VINs and service descriptions',
    'Maintain a fleet vehicle log in CRM: which vehicles have been serviced, when, what service, and when the next service window is',
    'Quarterly business reviews for accounts with 10+ vehicles per year — present volume statistics, warranty claim rates, and service quality metrics',
    'Volume pricing tiers must be documented in the MSA and applied consistently — inconsistent pricing causes disputes',
    'Rush requests from fleet accounts should be managed with a designated emergency slot in the production calendar',
    'Fleet accounts typically have stricter turnaround requirements than individual consumers — always confirm can-do timelines before promising them',
  ]);

  c += h2('Dealer Partnership Program');
  c += p('Dealer partnerships — where the shop provides protection packages as an add-on to new vehicle sales — represent a particularly scalable revenue model. The dealer\'s F&I (Finance and Insurance) office presents the shop\'s services during the vehicle purchase process.');

  c += procedure('Dealer Partnership Setup', [
    'Identify target dealers: brands that sell higher-value vehicles whose buyers are the shop\'s target demographic',
    'Request a meeting with the General Manager and F&I Manager — they control whether F&I products are offered',
    'Present the value proposition: the shop provides a service the dealer can mark up, increasing F&I gross profit; the dealer provides high-quality pre-qualified leads at zero acquisition cost',
    'Agree on service packaging: two or three tiers that work for the F&I menu; keep it simple for the F&I team to present',
    'Agree on turnaround commitment: dealers need vehicles returned within 24–48 hours on average',
    'Establish a dispatch protocol: dealer calls or emails when a vehicle is sold; shop schedules intake within 24 hours',
    'Provide the F&I team with training and leave-behind materials they can use during the sales presentation',
    'Track monthly volume per dealer in CRM; provide a monthly performance summary to the dealer GM',
  ]);

  return c;
}

function chDigitalCommunication() {
  let c = '';
  c += p('Customers in the current marketplace communicate across an increasingly diverse set of channels. A professional service operation must be accessible on the channels customers prefer while maintaining brand voice consistency across all of them. This chapter addresses the operational and tone standards for each digital channel.');

  c += h2('Channel Overview & Priority');
  c += table(
    ['Channel', 'Primary Use', 'Response SLA', 'Tone', 'Best Practice'],
    [
      ['Phone (inbound)', 'First contact; consultations; complaints', 'Answer before 3 rings; voicemail response within 30 minutes', 'Warm, confident, professional', 'See Chapter 3 for full script library'],
      ['Text/SMS (business number)', 'Confirmations; quick updates; review requests', 'Within 30 minutes during hours; automated reply after hours', 'Conversational; concise; no emojis except as established by brand voice', 'Short messages only; complex information belongs in email'],
      ['Email', 'Estimates; confirmations; formal communication; templates', 'Within 90 minutes during hours; same-day', 'Professional; formatted; full detail', 'See Chapter 16 for templates'],
      ['Google Business Chat', 'Website inquiries; review-initiated questions', 'Within 2 hours', 'Professional and informative; move complex inquiries to phone', 'Route to CRM lead immediately; never attempt to quote via GBC'],
      ['Instagram DM', 'Social media inquiries from content viewers', 'Within 2 hours', 'Enthusiastic; brand-consistent; visual', 'Respond briefly; offer to move to a call or email for detailed info'],
      ['Facebook Messenger', 'Inquiry from Facebook; older demographic', 'Within 2 hours', 'Friendly; helpful', 'Same as Instagram — move quickly to a proper channel'],
      ['Online review response', 'Public; all reviews require response', 'Google: 24h; others: 48h', 'Professional; appreciative; never defensive', 'Respond publicly; any resolution moves to private'],
    ]
  );

  c += h2('Text Message Standards');
  c += p('Text messaging has become the preferred channel for many customers when it comes to confirmations, quick questions, and status updates. The following standards ensure text communication remains professional.');

  c += checklist([
    'Always identify yourself and the shop in the first message: "Hi [Name], this is [Your Name] at [Shop Name]."',
    'Confirm the customer\'s preferred text contact during intake — not every customer wants texts',
    'Business texts are sent from a dedicated business number — never from a personal cell phone',
    'Text messages are limited to 3–4 lines — longer content belongs in an email',
    'Do not discuss pricing disputes, warranty claims, or complaints via text — call or email instead',
    'Text conversations are logged in the CRM by screenshot or by a CRM integration',
    'After-hours text responses are handled by an approved auto-reply; no personal responses until the next business day',
  ]);

  c += h2('Online Reputation Management');
  c += p('The shop\'s online reputation is a public asset that requires active management. Every review, every tagged post, and every comment on business social media channels is visible to prospective customers evaluating the business.');

  c += procedure('Weekly Online Reputation Monitoring Protocol', [
    'Check Google Business Profile: new reviews since last week; update business hours or photos if needed',
    'Check all social media platforms: new comments on posts, new DMs, any tagged mentions',
    'Respond to any unanswered reviews or comments per the response guidelines in Chapter 14',
    'Screenshot and log any negative content not on owned platforms (forum posts, community groups) for CSM awareness',
    'Report weekly review count and average rating to the CSM; track trend versus prior 4-week average',
  ]);

  c += h2('CRM-to-Email Integration Standards');
  c += p('Every outbound email to a customer should be logged in CRM automatically or manually. A CRM without the full email history is a partial CRM — it creates dangerous gaps in institutional knowledge when staff changes occur.');

  c += checklist([
    'All estimate emails are sent from the CRM or BCC\'d to CRM email capture',
    'All template emails (confirmation, review request, warranty reminder) are sent from the CRM where possible',
    'Personal email replies are BCC\'d to the customer\'s CRM record email address',
    'Email open rates for mass campaigns (seasonal promotions, warranty reminders) are reviewed monthly',
    'Unsubscribes from email campaigns are honored immediately and the CRM preference is updated',
  ]);

  return c;
}

function chAfterHoursProtocol() {
  let c = '';
  c += p('After-hours communication management is a discipline that separates professional operations from those that lose prospects to competitors simply because no one responded until the next day. Customers often do their research in the evenings and on weekends. This chapter covers the protocols that keep the business responsive without requiring 24/7 staffing.');

  c += h2('After-Hours Communication Touchpoints');
  c += table(
    ['Channel', 'After-Hours Handling', 'Response Method', 'Next-Day Follow-Up Target'],
    [
      ['Inbound phone', 'Voicemail with professional greeting and next-contact promise', 'Automated voicemail message; live callback in first hour of next business day', 'First hour of next business day'],
      ['Website contact form', 'Automated email acknowledgment triggered immediately', 'Personal follow-up call or email at start of next business day', 'First 30 minutes of next business day'],
      ['SMS / text inquiry', 'Auto-reply: "Thanks for reaching out to [Shop]. We\'ll call you first thing [day]."', 'Personal follow-up via text or call first thing next day', 'Within 30 minutes of opening'],
      ['Social media DM', 'Auto-reply if enabled; otherwise no immediate reply', 'Social media designee responds at morning check-in', 'Within 2 hours of opening'],
      ['Google Business Chat', 'Auto-reply message', 'Morning check-in response', 'Within 2 hours of opening'],
    ]
  );

  c += h2('After-Hours Voicemail Greeting Script');
  c += callout('script', '"Thank you for calling [Shop Name]. Our team is available [hours]. We check messages first thing each morning and will return your call by [specific time, e.g., 9:30 AM]. If you\'d prefer a text, feel free to send one to this same number and we\'ll reach back out the same way. We look forward to connecting with you. Have a great [evening/weekend]."');

  c += h2('Automated After-Hours Text/Email Response Template');
  c += callout('script', '"Hi! Thanks for reaching out to [Shop Name] — we received your message and appreciate your interest.\n\nOur team will contact you personally by [next business day, time]. In the meantime, you can explore our work at [website] or [Instagram handle].\n\nTalk soon!"');

  c += h2('Emergency Contact Protocol');
  c += p('On rare occasions, a genuine emergency arises after hours — typically a customer reporting vehicle damage discovered after delivery, or a vehicle left at the shop experiencing an unexpected problem. The following protocol defines when staff are contacted outside of business hours and who is responsible.');

  c += table(
    ['Emergency Type', 'Threshold for After-Hours Contact', 'Who Is Contacted', 'How'],
    [
      ['Vehicle left in shop — flooding or severe weather risk', 'Any time if structural risk to the vehicle', 'Shop owner; lead installer', 'Phone call from on-call staff'],
      ['Break-in or security breach at the shop', 'Immediately when discovered', 'Shop owner; police', 'Immediately'],
      ['Customer reports vehicle damage discovered immediately after delivery', 'Within 2 hours of delivery close', 'CSM on personal phone (designated on-call CSM)', 'Phone call only — no text; no social media'],
      ['Film or coating catastrophic failure (rare) reported day of delivery', 'As reported', 'CSM; lead installer', 'Phone; assess by tomorrow morning'],
      ['General complaint about service quality (not urgent safety or damage)', 'Not an after-hours emergency', 'Handle next business day', 'Log the message; notify CSM at opening'],
    ]
  );

  c += h2('After-Hours Lead Log — Daily Opening Review');
  c += procedure('First-30-Minutes-of-Day Protocol', [
    'CSM or designated SA reviews all after-hours contact channels: voicemail, web form CRM leads, social DMs, text messages',
    'All new leads are entered into CRM if not already auto-captured',
    'Priority outreach list is created: order by inquiry time (oldest first) within the business day',
    'All after-hours leads are called or texted within the first hour of business opening — no exceptions',
    'SA logs the initial outreach attempt in CRM with timestamp; if no answer, a second attempt is made before noon',
  ]);

  return c;
}

function chLoyaltyProgram() {
  let c = '';
  c += p('A formal customer loyalty program systematizes repeat business generation and gives customers a clear, ongoing reason to return. Unlike ad hoc loyalty gestures, a structured program is trackable, consistently applied, and sustainable. This chapter covers program design, communication, and operational management.');

  c += h2('Loyalty Program Architecture');
  c += table(
    ['Tier', 'Qualification Criterion', 'Benefits', 'Communication Cadence'],
    [
      ['Standard (all customers)', 'First completed service', 'Referral program access; warranty check-in service; birthday offer', 'Monthly email newsletter; seasonal promotions'],
      ['Preferred (2+ services or $1,000+ spend)', 'Met automatically — CRM tracks', 'Priority scheduling; 5% loyalty discount on future services; annual vehicle check-in', 'Monthly + personal outreach at 6 months'],
      ['Premium (5+ services or $5,000+ lifetime spend)', 'Met automatically — CRM flags SA', 'All Preferred benefits + dedicated SA contact; 10% loyalty rate; complimentary annual maintenance detail', 'Monthly + personal call at 6-month anniversary; card/gift at milestone'],
      ['VIP (10+ services or $10,000+ lifetime)', 'CSM-reviewed manual upgrade', 'All Premium + first access to new services at launch; invitation to annual appreciation event; complimentary protective refresh annually', 'Proactive monthly personal outreach from CSM'],
    ]
  );

  c += h2('Birthday & Anniversary Outreach');
  c += p('Automated personal outreach for birthdays and vehicle service anniversaries dramatically improves engagement rates compared to generic promotional emails.');

  c += table(
    ['Outreach Type', 'CRM Trigger', 'Message', 'Offer'],
    [
      ['Customer birthday', 'DOB in CRM profile (optional — collect on intake form)', 'Personal birthday message from their SA', '10% off any service booked within 30 days'],
      ['Vehicle anniversary (1 year)', '1 year from delivery date', '"Your [Vehicle] is celebrating its first year of protection with us!"', 'Complimentary annual inspection (builds warranty compliance)'],
      ['Service anniversary (2+ years)', 'Annual recurring from delivery date', '"It\'s been [X] years since your wrap/coating — time for a check-in?"', 'Free assessment; upsell opportunity for refresh or upgrade'],
    ]
  );

  c += h2('Loyalty Program Communication Templates');
  c += callout('script', '**Tier Upgrade Notification:**\n\n"Hi [Name], great news — your loyalty with us has moved you to [Tier Name] status! This means [specific benefit]. We\'re grateful for your continued trust, and we\'re looking forward to taking care of your [Vehicle] for many more years.\n\n[Your Name]"');

  c += callout('script', '**Annual Maintenance Reminder with Loyalty Framing:**\n\n"Hi [Name], it\'s been about a year since your [service] — and as a [Tier Name] member, your complimentary annual inspection is ready to schedule. This is a great time to top off your hydrophobic layer and make sure everything is performing exactly as it should.\n\nSchedule here: [link] or just reply with what works for you.\n\n[Your Name]"');

  c += h2('Loyalty Program KPIs');
  c += table(
    ['Metric', 'Target', 'Source'],
    [
      ['Repeat customer rate (12 months)', '> 30%', 'CRM — customers with 2+ jobs in 12-month window / total unique customers'],
      ['Tier enrollment rate', '100% — every customer is auto-enrolled', 'CRM audit — no customer without a tier tag'],
      ['Birthday offer redemption rate', '> 15%', 'Promo code tracking in CRM'],
      ['Loyalty tier upgrade conversion', '> 40% from Standard → Preferred within 18 months', 'CRM tier movement tracking'],
      ['Annual inspection booking rate', '> 50% of eligible customers book', 'Warranty inspection appointments vs. eligible pool'],
    ]
  );

  return c;
}

function chServiceAgreementsContracts() {
  let c = '';
  c += p('A clearly written service agreement protects the shop legally, sets precise customer expectations, and reduces disputes before they begin. Every job above a defined threshold (recommended: $300) should be accompanied by a signed service authorization document.');

  c += h2('Elements of a Complete Service Authorization');
  c += checklist([
    'Customer full name, phone number, and email address',
    'Vehicle year, make, model, color, VIN last 6 digits',
    'Odometer reading at drop-off and pick-up',
    'Itemized description of authorized services with individual pricing',
    'Total authorized amount and deposit collected',
    'Estimated completion date and communication method customer prefers',
    'Pre-existing damage notation — signed by customer acknowledging the pre-existing conditions listed',
    'Statement of work scope: "Additional work discovered during service will be communicated for approval before proceeding"',
    'Liability limitations: "Shop is not responsible for pre-existing mechanical issues, paint defects concealed under dirt, or damage resulting from customer-directed work modifications"',
    'Warranty terms summary (full warranty document provided separately)',
    'Payment terms: when balance is due, accepted payment methods, late pickup fee policy',
    'Customer signature and date',
  ]);

  c += h2('Pre-Existing Damage Documentation Protocol');
  c += p('Photographing and documenting pre-existing damage is the single most important legal protection a shop has. A vehicle that arrives with a scratched bumper cannot be claimed by a customer to be the shop\'s fault if that damage is photographed, timestamped, and customer-acknowledged at intake.');

  c += procedure('Pre-Existing Damage Documentation', [
    'Perform the full walkaround under adequate lighting before moving the vehicle — natural light or 3-bulb LED preferred',
    'Photograph all four corners, all four panels, the roof, hood, and all glass surfaces — minimum 20 photos',
    'Use a raking-light inspection (low-angle flashlight) to highlight any paint defects, door dings, or swirl marks on the areas NOT being serviced',
    'Note every defect on the damage diagram form — use standardized symbols: circle=chip, zigzag=scratch, triangle=dent',
    'Take a photo of the completed damage diagram form next to the vehicle before the customer leaves',
    'Email or text the damage documentation photos to the customer immediately — this creates a timestamped record',
    'Have the customer sign the damage section of the service authorization form, confirming they acknowledge the pre-existing conditions',
    'Store the documentation in the CRM record under the job, linked to the vehicle VIN',
  ]);

  c += h2('Handling Liability Disputes');
  c += p('Even with thorough documentation, disputes will occasionally arise. Having a clear escalation and resolution process prevents small disagreements from becoming reviews or legal claims.');

  c += table(
    ['Dispute Type', 'First Response', 'Evidence to Reference', 'Resolution Path'],
    [
      ['Customer claims chip occurred at shop', 'Acknowledge concern; review photos together', 'Intake photos with timestamp', 'Show documented photo; if pre-existing, explain and offer good-will discount on repair referral'],
      ['Customer claims swirl marks from wash', 'Inspect vehicle under proper lighting', 'Pre/post photos; confirm if correction service was purchased', 'If shop-caused, correct at no charge; if pre-existing, show documentation'],
      ['Customer claims color is wrong', 'Compare to signed color authorization form', 'Signed sample approval or digital proof', 'Re-do if shop error; charge for change-of-mind revision'],
      ['Customer disputes total price', 'Pull original signed authorization', 'Signed service authorization with itemized pricing', 'If authorization was signed, hold firm; offer payment plan if needed'],
      ['Vehicle damage during service (shop fault)', 'Acknowledge immediately; do not minimize', 'Document damage; contact insurance if needed', 'Repair at shop expense; notify customer with plan before they discover it'],
    ]
  );

  c += h2('Contract Language Reference');
  c += callout('tip', '**Recommended warranty limitation language:**\n\n"The warranty applies only to materials and workmanship under normal use and proper maintenance as described in the care instructions provided at delivery. Warranty is void if the vehicle has been involved in an accident, repainted, exposed to abrasive wash methods, or treated with products incompatible with the applied service."\n\n**Recommended liability limitation language:**\n\n"[Shop Name] exercises due care in handling all customer vehicles. However, [Shop Name] is not liable for pre-existing mechanical conditions, concealed paint defects, electronic malfunctions unrelated to service performed, or damage resulting from customer-requested modifications to the agreed scope of work."');

  return c;
}

function chPartnershipReferralNetwork() {
  let c = '';
  c += p('A structured referral partner network multiplies a shop\'s marketing reach without increasing the advertising budget. By forming professional relationships with complementary businesses — dealerships, body shops, detail suppliers, insurance agents, car clubs — the shop builds a self-reinforcing referral ecosystem where each partner has a business incentive to send customers.');

  c += h2('Identifying the Right Referral Partners');
  c += table(
    ['Partner Type', 'Why They Refer', 'What You Offer Them', 'How to Approach'],
    [
      ['New car dealerships', 'Buyers want protection immediately after purchase', 'Commission or reciprocal referral; white-label service', 'Visit F&I manager; offer complimentary demo install on a showroom vehicle'],
      ['Pre-owned car dealerships', 'Buyers want the car looking its best before purchase', 'Trade discount; priority scheduling for their cars', 'Present ROI: a coated used car sells faster and at higher price'],
      ['Auto body / collision centers', 'Fresh paint should be protected; they can\'t do it themselves', 'Return referrals for body work needed; mutual discount cards', 'Meeting with owner; propose a formal mutual referral agreement'],
      ['Insurance agents (auto)', 'Clients ask for trusted vendors; agent adds value', 'Client appreciation referral gift; co-branded content', 'Lunch meeting; frame the partnership as value for their book of business'],
      ['High-end car clubs & meets', 'Members trust fellow enthusiasts\' recommendations', 'Club discount; exclusive event sponsorship; demo days', 'Attend events; offer a demo day at your facility'],
      ['Detailing supply stores', 'Customers buying supplies often need professional services', 'Mutual referrals; in-store materials', 'Propose co-marketing; place business cards in their shop'],
      ['Mobile mechanics', 'They see client vehicles regularly and know their condition', 'Return referrals; reciprocal online reviews', 'Direct outreach; propose written referral agreement'],
    ]
  );

  c += h2('Referral Partner Program Structure');
  c += checklist([
    'Formal referral partners sign a one-page referral agreement outlining commission terms or reciprocal arrangements',
    'Commission rate for paid referrals: recommended 5–10% of job value, paid monthly by check or bank transfer',
    'Partners receive branded referral cards or a unique promo code for tracking',
    'Each referral is logged in the CRM with the referring partner noted — this enables accurate commission calculation',
    'Monthly performance report sent to active partners: how many referrals tracked, how many converted, commissions due',
    'Annual partner appreciation event: dinner, recognition, renewed relationship investment',
    'Referral partners are offered priority scheduling for their own vehicles as an exclusive benefit',
  ]);

  c += h2('Activating and Maintaining Referral Relationships');
  c += procedure('Referral Partner Onboarding', [
    'Identify the target partner; research their business to understand how to add value to them',
    'Initial outreach: in-person visit preferred; email or call as backup — explain the partnership concept in one sentence',
    'Invite the partner for a shop tour: seeing the facility builds confidence in what they are referring their clients to',
    'Provide a physical referral kit: printed cards, digital assets, a brief description of services for their use',
    'Perform a complimentary service demo on the partner\'s own vehicle — this creates a first-hand advocate',
    'Set up the referral tracking mechanism (unique code or printed card) before they leave',
    'First check-in call or visit within 30 days: how many referrals sent; any questions; any adjustments needed',
    'Monthly newsletter or text update: new services, seasonal promotions they can pass along',
    'Quarterly review: assess referral volume; recognize top partners publicly (social media, newsletter mention)',
  ]);

  c += h2('Measuring Referral Network Performance');
  c += table(
    ['Metric', 'Target', 'Tracking Method', 'Review Cadence'],
    [
      ['Referrals received per partner per month', '2–5', 'CRM source tracking by partner code', 'Monthly'],
      ['Referral-to-booked conversion rate', '> 60%', 'CRM lead status tracking', 'Monthly'],
      ['Average job value from referral leads', 'Match or exceed walk-in average', 'CRM job value by lead source', 'Quarterly'],
      ['Commission paid per month', 'Track for ROI vs. paid advertising', 'Accounting ledger / CRM', 'Monthly'],
      ['Number of active partners', '5–15 depending on market size', 'Referral partner CRM category', 'Quarterly'],
      ['Revenue attributed to referral network', '>20% of total revenue', 'CRM lead source revenue report', 'Quarterly'],
    ]
  );

  c += callout('tip', 'The highest-performing referral relationships are those where the partner genuinely believes the shop provides exceptional service to their clients. Prioritize keeping referral partners updated on their referred customers\' outcomes — a quick "your referral just picked up their car and they loved it" text keeps the partner emotionally invested in the relationship.');

  c += h2('Partner Communication Templates');
  c += table(
    ['Message Type', 'Timing', 'Content Summary'],
    [
      ['Initial partnership proposal email', 'First outreach', 'One sentence on who you are; one sentence on why you are reaching out; one sentence on the value to them; call to action for a brief meeting'],
      ['Referral tracking update (monthly)', 'First business day of each month', 'Number of referrals sent; number converted; any commissions due; a thank-you for the relationship'],
      ['Customer outcome notification', 'Within 24 hours of any referred job completion', '"Just wanted to let you know — [First Name] picked up the car today and was thrilled with the result. Thank you for the introduction."'],
      ['Seasonal partner promotion share', 'Quarterly', 'Share the current seasonal promotion; invite partner to distribute to their clients; include a referral link or code'],
      ['Annual relationship review invitation', 'Annually', 'Propose a coffee or lunch meeting; express appreciation for the year of partnership; share a summary of referral volume and value generated together'],
    ]
  );

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

function chInternalCulture() {
  let c = '';
  c += p('Customer service quality is a direct reflection of the team culture inside the shop. Staff who feel respected, heard, and invested in their own growth naturally deliver better customer experiences. Building a positive internal culture is not a soft initiative — it is a measurable driver of customer satisfaction scores, staff retention, and revenue.');

  c += h2('Core Culture Principles');
  c += table(
    ['Principle', 'Meaning in Practice', 'Measurement'],
    [
      ['Ownership mentality', 'Every team member treats problems as their own to solve, not to pass along', 'Escalation rate — fewer escalations = more ownership at the front line'],
      ['Transparent communication', 'Problems are raised immediately; no surprises for customers or management', 'On-time job completion rate; internal update adherence'],
      ['Continuous improvement', 'After every difficult customer interaction, the team reviews and extracts a lesson', 'Team meeting frequency; documented improvement actions'],
      ['Customer-first language', '"We serve customers" precedes "we complete jobs"', 'Customer satisfaction survey scores'],
      ['No blame culture', 'Mistakes are learning opportunities, not firing offenses — repeat mistakes are coaching conversations', 'Staff retention rate; willingness to self-report errors'],
    ]
  );

  c += h2('Daily Team Huddle');
  c += p('A 10-minute daily team huddle at the start of each day aligns the entire team on the day\'s priorities, flags potential issues before they become customer complaints, and reinforces the culture standards in a concrete, daily way.');

  c += procedure('Daily Team Huddle Agenda', [
    'What\'s on the board today: review every vehicle scheduled, their service, and their committed completion time',
    'Capacity flag: if any job is at risk of running late, identify it now and assign a resolution — call the customer proactively, not reactively',
    'Yesterday\'s feedback: share any customer compliments or complaints from the prior day; extract the lesson from each',
    'Product or process update: 60-second update on any new information relevant to the day\'s work',
    'Recognition moment: call out one specific thing a team member did well in the last 24 hours — specificity makes recognition meaningful',
    'Energy check: confirm all team members have what they need to start the day; any blockers are resolved before dispersing',
  ]);

  c += h2('Handling Internal Conflict');
  c += procedure('Internal Conflict Resolution Protocol', [
    'Any interpersonal conflict between staff members must be addressed privately — never in front of customers or other staff members',
    'The manager meets with each party individually before any joint conversation to understand both perspectives',
    'Conflicts rooted in process ambiguity are resolved by clarifying the process, not by assigning blame',
    'Conflicts rooted in behavior require a documented coaching conversation with clear expectations and consequences defined',
    'All coaching conversations are documented in the personnel file — this creates an audit trail if escalation is needed',
    'Repeat behavior issues after coaching follow the progressive discipline process: verbal warning → written warning → performance plan → separation',
    'A team member who raises a conflict in good faith is protected from retaliation — this is a non-negotiable cultural standard',
  ]);

  c += h2('Staff Feedback System');
  c += checklist([
    'Monthly one-on-one between each staff member and their direct supervisor: 20 minutes minimum; focus on how the staff member is doing, not just what they are doing',
    'Anonymous quarterly survey: rate culture, communication, tools/resources, management support, and pride in work on a 1–5 scale',
    'Survey results are shared with the team — transparency builds trust; identifying themes shows you act on the feedback',
    'Each staff member has clear written performance expectations for their role — they cannot be evaluated fairly without knowing the standards',
    'Annual performance review is formal and documented: includes self-evaluation, manager evaluation, and a development plan for the coming year',
    'Compensation review is tied to the performance review cycle — staff who perform above expectations have a clear path to earning more',
  ]);

  c += h2('Recognition Programs');
  c += table(
    ['Recognition Type', 'Frequency', 'Format', 'Impact'],
    [
      ['Daily verbal recognition', 'Daily', 'Specific verbal acknowledgment in team huddle', 'Immediate morale; reinforces desired behavior'],
      ['Customer compliment sharing', 'As received', 'Read the review or text aloud to the team; note the person named', 'Connects the team\'s work to real customer impact'],
      ['Monthly spotlight', 'Monthly', 'Feature one team member in a staff meeting; include a specific achievement story', 'Peer respect; visible recognition'],
      ['Performance bonus', 'Quarterly', 'Tied to KPI achievement or above-and-beyond incidents', 'Financial motivation aligned to business results'],
      ['Anniversary recognition', 'Annual', 'Public acknowledgment; tenure gift; handwritten note from owner', 'Retention signal; loyalty reinforcement'],
    ]
  );

  c += h2('Onboarding New Staff into the Culture');
  c += p('Culture transmission to new hires is not automatic. It requires deliberate, structured onboarding that explicitly teaches the values, demonstrates them in practice, and pairs the new hire with a team member who embodies them.');

  c += procedure('New Staff Culture Onboarding Sequence', [
    'Day 1: owner or manager personally introduces the shop\'s brand story and values — not an HR document; a face-to-face conversation',
    'Day 1–3: shadow-only period; new hire observes every customer interaction, every phone call, every delivery without participating — they are learning the standard',
    'Week 1: read the Customer Service Manual; complete the 10-question comprehension quiz covering brand voice, phone scripts, and escalation protocol',
    'Week 2: role-play key scenarios with their manager or buddy: phone intake, complaint handling, delivery walkthrough — scored against the standard',
    'Week 2–4: take first customer interactions with the buddy present; buddy provides real-time feedback privately after each interaction',
    'Week 4: manager reviews customer feedback received during the new hire\'s first interactions; provides a written summary of strengths and development areas',
    '30-day check-in: formal one-on-one; new hire rates their own confidence across all responsibilities; manager rates the same independently; compare and discuss gaps',
  ]);

  c += table(
    ['Onboarding Milestone', 'Completed By', 'Sign-Off Required'],
    [
      ['Brand values quiz (8/10 minimum)', 'End of week 1', 'Manager countersign on quiz form'],
      ['Phone script role-play pass', 'End of week 2', 'Manager observation checklist'],
      ['Complaint handling role-play pass', 'End of week 2', 'Manager observation checklist'],
      ['First 5 customer interactions with buddy', 'End of week 3', 'Buddy feedback form filed'],
      ['30-day performance review', 'Day 30', 'Mutual sign-off; filed in personnel record'],
    ]
  );

  return c;
}

function generateCustomerServiceManual(baseDir) {
  const chapters = [
    { title: 'Brand Standards & Service Philosophy',         content: chBrandStandards() },
    { title: 'Team Roles & Organizational Structure',        content: chTeamRoles() },
    { title: 'Phone Scripts & Call Handling',                content: chPhoneScripts() },
    { title: 'Lead Intake & CRM Workflow',                   content: chLeadIntake() },
    { title: 'Consultation Framework',                       content: chConsultation() },
    { title: 'Estimating & Pricing Presentation',            content: chEstimating() },
    { title: 'Scheduling & Capacity Management',             content: chScheduling() },
    { title: 'Vehicle Intake & Walkaround Inspection',       content: chVehicleIntake() },
    { title: 'Setting Customer Expectations',                content: chExpectationSetting() },
    { title: 'In-Service Communication & Updates',           content: chInServiceUpdates() },
    { title: 'Delivery Walkthrough & Customer Education',    content: chDeliveryWalkthrough() },
    { title: 'Warranty Education & Aftercare Guidance',      content: chWarrantyEducation() },
    { title: 'Complaint Resolution & Service Recovery',      content: chComplaintResolution() },
    { title: 'Reviews & Referral Generation',                content: chReviewsReferrals() },
    { title: 'Upsell & Cross-Sell Strategy',                 content: chUpsellCrossSell() },
    { title: 'Email Templates & Written Communication',      content: chEmailTemplates() },
    { title: 'CRM Workflow & Data Management',               content: chCRMWorkflow() },
    { title: 'Escalation Procedures',                        content: chEscalation() },
    { title: 'KPIs & Performance Metrics',                   content: chKPIs() },
    { title: 'Training New Customer Service Staff',          content: chTrainingNewStaff() },
    { title: 'Pricing Presentation Psychology',               content: chPricingPresentationPsychology() },
    { title: 'Advanced Service Recovery',                    content: chServiceRecoveryAdvanced() },
    { title: 'Consumer Psychology in Automotive Services',   content: chConsumerPsychology() },
    { title: 'Inbound Marketing & Content for CS',          content: chInboundMarketingCS() },
    { title: 'Customer Journey Map — Full Reference',       content: chCustomerJourneyMap() },
    { title: 'Vehicle Photography Standards',                content: chVehiclePhotography() },
    { title: 'Fleet & Commercial Account Management',        content: chFleetCommercial() },
    { title: 'Digital Communication & Reputation Management', content: chDigitalCommunication() },
    { title: 'After-Hours Protocol & Emergency Contact',     content: chAfterHoursProtocol() },
    { title: 'Customer Loyalty Program',                     content: chLoyaltyProgram() },
    { title: 'Service Agreements, Contracts & Liability',    content: chServiceAgreementsContracts() },
    { title: 'Partnership & Referral Network Management',    content: chPartnershipReferralNetwork() },
    { title: 'Staff Communication & Internal Culture',       content: chInternalCulture() },
    { title: 'Appendices',                                   content: chAppendices() },
  ];

  writeChapters(baseDir, chapters);
}

module.exports = { generateCustomerServiceManual };
