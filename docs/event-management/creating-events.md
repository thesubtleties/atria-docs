---
sidebar_position: 1
---

# Creating Your First Event

Ready to host your event on Atria? This guide walks you through creating an event from start to finish.

## Prerequisites

Before creating an event, you'll need:

- An Atria account (sign up at [atria.gg](https://atria.gg))
- An organization (create one from your Dashboard if you don't have one yet)
- Organization owner or admin role (only owners and admins can create events)

## Step-by-Step: Creating an Event

### 1. Navigate to Your Organization

1. Log in to Atria
2. Go to your **Dashboard**
3. Select the organization where you want to create the event
4. Click **"Create Event"** or navigate to the organization page and click **"New Event"**

### 2. Fill in Basic Information

You'll see the event creation form with several required and optional fields:

#### Event Name (Required)

- Enter a clear, descriptive name for your event
- This is what attendees will see first
- Examples: "DevCon 2025", "Annual Fundraising Gala", "Web Development Workshop"

#### Event Type (Required)

Choose between two event types:

**Conference:**
- Multiple sessions scheduled across one or more days
- Full agenda with session scheduling
- Best for: conferences, summits, multi-day events

**Single Session:**
- Focused on one main presentation
- Simplified structure
- Best for: webinars, workshops, single talks

:::tip Can't Decide?
Start with Conference - you can change it to Single Session later. You can also switch from Single Session to Conference if you need to add more sessions.
:::

#### Dates & Time (Required)

**Start Date:**
- When your event begins
- Can be in the future or today

**End Date:**
- When your event concludes
- Must be the same day or after the start date
- Multi-day events: End date determines total event duration

**Timezone:**
- Select the timezone for your event
- Uses IANA format (e.g., "America/New_York", "Europe/London")
- All session times will use this timezone
- Attendees from other timezones will see converted times

:::info Time Zones Matter
Choose the timezone carefully! If you're hosting a virtual event for a global audience, consider using UTC or the timezone where most attendees are located.
:::

#### Event Format (Required)

Choose how attendees will participate:

**Virtual:**
- Online-only event
- No venue required
- Stream URLs for sessions

**In-Person:**
- Physical venue required
- Must provide venue details (see below)

**Hybrid:**
- Both online and in-person
- Requires venue details AND stream URLs
- Attendees choose how to participate

#### Venue Information (Required for In-Person & Hybrid)

If you selected In-Person or Hybrid format, you must provide:

- **Venue Name** - Name of the location (e.g., "San Francisco Convention Center")
- **Street Address** - Full street address
- **City** - City name
- **State** - State/province (for US venues, required)
- **Country** - Country name

:::warning Venue Required
You cannot publish an In-Person or Hybrid event without complete venue information. Virtual events don't need venue details.
:::

#### Company Name (Optional)

- Your organization or company name
- Displayed on event pages
- Helps with event branding

### 3. Review and Create

Once you've filled in all required fields:

1. Review your information
2. Click **"Create Event"**
3. Your event is created in **DRAFT** status

You'll be redirected to your new event's management page.

## What Happens After Creation

### Event Status: Draft

Your newly created event starts in **DRAFT** status, which means:

- Event is not visible to attendees
- Only you and other organization owners/admins can see it
- You can freely edit all settings
- Perfect for setting up sessions, speakers, and branding

### Automatic Setup

**Your Role:**
- You're automatically assigned as an **ADMIN** for the event
- Full control over all event settings

:::info Chat Rooms
Chat rooms are not automatically created. You can create chat rooms from the Event Settings → Chat Rooms section as needed. Typical chat rooms include: General, Q&A, Networking, Staff Coordination, and Speaker Green Room.
:::

### Next Steps After Creation

Now that your event exists, you'll want to:

1. **Customize branding** - Add your logo, colors, and hero images
2. **Add content** - Welcome message, highlights, FAQs
3. **Create sessions** (for Conference events) - Build your agenda
4. **Invite speakers** - Add presenters to your event
5. **Set up sponsors** (optional) - Add sponsor tiers and companies
6. **Configure networking** - Customize icebreaker messages
7. **Publish your event** - Make it live for attendees

## Common Event Creation Scenarios

### Scenario 1: Multi-Day Conference

```
Event Type: Conference
Format: Hybrid
Dates: March 15-17, 2025
Timezone: America/New_York

After creation:
1. Add 10-15 sessions across 3 days
2. Invite 20 speakers
3. Add sponsor tiers (Platinum, Gold, Silver)
4. Customize branding with conference colors
5. Publish event
```

### Scenario 2: Single Webinar

```
Event Type: Single Session
Format: Virtual
Dates: April 5, 2025 (same start/end date)
Timezone: UTC

After creation:
1. Create one main session
2. Invite 1-2 speakers
3. Set main session in event settings
4. Add hero description and branding
5. Publish event
```

### Scenario 3: In-Person Workshop Series

```
Event Type: Conference
Format: In-Person
Dates: May 10-12, 2025
Timezone: America/Los_Angeles
Venue: TechHub SF, 123 Market St, San Francisco, CA, USA

After creation:
1. Add 3 workshop sessions (one per day)
2. Invite workshop facilitators as speakers
3. Add venue directions in welcome section
4. Publish event
```

## Editing Your Event

Need to make changes after creation? No problem!

**From Event Dashboard:**
1. Go to **Event Settings**
2. Click **Basic Info** tab
3. Update any field
4. Click **"Save Changes"**

**What You Can Change:**
- Event name
- Event type (Conference ↔ Single Session)
- Dates and timezone
- Event format (Virtual, In-Person, Hybrid)
- Venue information
- Company name
- Event status (Draft, Published, Archived)

**What You Cannot Change:**
- Event organization (events always belong to the org they were created in)

## Validation & Error Messages

Atria validates your event data to ensure everything works correctly:

### Common Validation Errors

**"End date must be after start date"**
- Fix: Set end date to the same day or later than start date

**"Venue information required for in-person events"**
- Fix: Fill in all venue fields (name, address, city, country)

**"Event type is required"**
- Fix: Select either Conference or Single Session

**"Timezone is required"**
- Fix: Select a timezone from the dropdown

**"Cannot shorten event duration - sessions exist for day X"**
- Fix: Remove sessions from later days first, then shorten event dates

## Tips for Success

**Planning Phase:**
- Create your event as soon as you have basic details
- Keep it in DRAFT while you set everything up
- Use a clear, searchable event name

**Multi-Day Events:**
- Calculate your day count: End date - Start date + 1
- Example: March 1-3 = 3 days (not 2!)
- Sessions use day numbers (1, 2, 3, etc.)

**Timezone Selection:**
- Virtual events: Consider attendee locations
- In-person events: Use venue's local timezone
- Global events: UTC is a safe choice

**Format Changes:**
- Start with your best guess
- You can change format later if needed
- Just add venue info when switching to In-Person/Hybrid

**Save Often:**
- Changes are saved when you click "Save Changes"
- No auto-save - don't navigate away without saving

## Frequently Asked Questions

### Can I create multiple events for the same organization?

Yes! Create as many events as you need. Each event is independent with its own sessions, attendees, and settings.

### Can I duplicate an existing event?

Not currently. You'll need to manually create a new event and recreate sessions/settings. Contact us if you need help with recurring events.

### What if I don't know all the details yet?

That's fine! Create the event with basic info and keep it in DRAFT status. You can add sessions, speakers, and other details later before publishing.

### Can I delete an event after creating it?

Yes. Event admins can delete events from the Event Settings page. This requires strict verification (entering your password and typing DELETE) and cannot be undone.

:::warning Event Deletion
Deleting an event is permanent and will remove all sessions, chat rooms, and event data. Attendee connections made at the event will be preserved.
:::

### Can I transfer an event to another organization?

No. Events cannot be transferred between organizations. If you need to move an event, you'll need to recreate it in the target organization.

### How many attendees can I have?

There's no hard limit on attendees. The system is designed to scale. For very large events (1000+ attendees), contact us for optimization recommendations.

## Next Steps

Now that your event is created:

- **[Customize your event](./customization)** - Add branding, content, and styling
- **[Add sessions](../sessions-speakers/creating-sessions)** - Build your event agenda
- **[Invite attendees](../attendee-management/inviting-attendees)** - Bring people to your event
- **[Publish your event](./publishing)** - Make it live

---

**Need help?** [Contact us](mailto:steven@sbtl.dev) or [open an issue](https://github.com/thesubtleties/atria/issues).
