---
sidebar_position: 2
---

# Events Overview

Events are the heart of Atria. Whether you're hosting a multi-day conference, a single webinar, or a hybrid gathering, Atria provides the tools to manage your event from start to finish.

## What is an Event?

An **event** is a gathering where attendees connect, learn, and network. In Atria:

- Every event belongs to exactly one organization
- Events can span multiple days with scheduled sessions
- Events support virtual, in-person, or hybrid formats
- Each event has its own attendees, speakers, sessions, and sponsors
- Events can be customized with branding, content sections, and networking features

## Event Types

Atria supports two distinct event types:

### Conference

**Multi-session events** - Perfect for conferences, summits, festivals, or any multi-day gathering.

**Features:**
- Multiple sessions scheduled across one or more days
- Session scheduling by day with start/end times
- Multiple speakers across different sessions
- Session-specific chat rooms (public and backstage)
- Comprehensive session management and speaker assignments
- Attendee networking across the entire event

**Best for:**
- Tech conferences and industry summits
- Academic conferences and symposiums
- Multi-day workshops or training programs
- Music or arts festivals
- Community conventions

### Single Session

**Single-presentation events** - Ideal for webinars, workshops, or standalone talks.

**Features:**
- One main session highlighted in navigation
- Simplified event structure focused on a single presentation
- All standard event features (chat, networking, branding)
- Direct navigation to the main session
- Can select which session is the "main stage"
- Speakers assigned to sessions

**Best for:**
- Webinars and online workshops
- Guest speaker presentations
- Training sessions
- Product launches
- Community meetups with a single speaker
- Multi-day events with one session per day (no agenda needed)

**Main Session Selection:**
- You can choose which session is featured as the "main session"
- Change the main session at any time in Event Settings
- Useful for multi-day events where you have one session per day and want to highlight the current day's session

:::tip Multi-Day Single Sessions
Want multiple days but only one session per day? Create a Conference event with multiple days, add one session per day, then set the event type to Single Session. You can change which session is the "main stage" as often as needed - perfect for rotating daily highlights without needing an agenda view.
:::

:::tip Choosing Your Event Type
Choose **Conference** if you have multiple sessions or a multi-day schedule. Choose **Single Session** if you're hosting a one-time presentation or workshop. You can change the event type later if needed.
:::

## Event Lifecycle

Events move through distinct stages from creation to completion:

### Draft

**Work in progress** - Your event starts here.

**What it means:**
- Event is being set up and configured
- Not visible to attendees
- Only organization owners/admins and event admins can access
- You can freely edit all event details

**When to use:**
- Initial event creation
- Setting up branding, sessions, and speakers
- Testing configurations before launch
- Preparing event content

### Published

**Live and accepting attendees** - Your event is public.

**What it means:**
- Event is visible to invited attendees
- Attendees can join and participate
- Registration is active
- Event appears in organization event lists
- Sessions are viewable by attendees

**When to use:**
- Event is ready for attendees
- All required fields are completed (see Publishing Requirements below)
- You have at least one organizer assigned
- Ready to start accepting registrations

:::info You Can Still Edit
Published events can still be edited! Update sessions, add speakers, modify branding - all while the event is live. Changes are visible immediately to attendees. You can even change the status back to Draft if needed.
:::

### Archived

**Event has ended** - Historical record.

**What it means:**
- Event has concluded
- Attendees can view event history and past sessions
- Connections made during the event are preserved
- Event remains accessible for reference

**When to use:**
- Event has concluded
- You want to preserve event history
- Attendees should still access past content
- Maintaining connection context

:::tip Status Flexibility
You can archive an event at any time - you don't have to wait for the end date to pass. You can also change an archived event back to Published or Draft if needed.
:::

### Publishing Requirements

Before you can publish an event, you must complete:

- Event title
- Start and end dates
- At least one organizer assigned
- Hero description (main tagline)
- Venue information (for in-person and hybrid events)

:::warning Validation on Publish
Atria validates these requirements when you attempt to publish. If anything is missing, you'll see specific error messages telling you what needs to be completed.
:::

## Event Formats

Choose how your event will be delivered to attendees:

### Virtual

**Online-only events** - Attendees join remotely.

**Features:**
- No venue required
- Stream URLs for sessions
- Virtual chat rooms and networking
- Global timezone support
- Lower overhead and logistics

**Best for:**
- Webinars and online conferences
- Remote workshops
- Global audience events
- Cost-effective events

### In-Person

**Physical venue events** - Attendees gather at a location.

**Features:**
- Venue information displayed to attendees (name, address, city, state, country)
- In-person networking
- Physical session locations
- Local event experience

**Required venue details:**
- Venue name
- Street address
- City
- State (for US venues)
- Country

**Best for:**
- Local conferences and meetups
- Trade shows and exhibitions
- Networking-focused events
- Hands-on workshops

### Hybrid

**Best of both worlds** - Attendees can join online or in-person.

**Features:**
- All features of virtual AND in-person events
- Venue information for in-person attendees
- Stream URLs for remote attendees
- Unified chat and networking (both groups interact)
- Flexibility for attendees

**Required details:**
- Venue information (for in-person attendees)
- Stream URLs (for virtual attendees)

**Best for:**
- Large conferences with remote options
- Events with international audiences
- Accessibility-focused events
- Maximum attendance flexibility

:::tip Format Flexibility
You can update the event format at any time, even after publishing (e.g., change from in-person to hybrid if you add virtual streaming). When changing to In-Person or Hybrid, you'll need to add venue information.
:::

## Multi-Day Events

Conference-type events can span multiple days:

**How it works:**
- Set your event start and end dates
- Sessions are assigned to specific days (day 1, day 2, etc.)
- Day count is automatically calculated from your date range
- Each day can have multiple sessions
- Sessions are organized by day in the agenda view

**Session scheduling:**
- Assign sessions to a day number (1-based: day 1, day 2, etc.)
- Set start and end times for each session
- Sessions within a day are ordered by start time
- Timezone-aware scheduling (uses event timezone)

**Example:**
```
Event: DevCon 2025
Start: January 15, 2025
End: January 17, 2025
Timezone: America/New_York

Day 1 (Jan 15):
  - 9:00 AM - 10:00 AM: Opening Keynote
  - 10:30 AM - 12:00 PM: Workshop A

Day 2 (Jan 16):
  - 9:00 AM - 10:30 AM: Panel Discussion
  - 11:00 AM - 12:30 PM: Workshop B

Day 3 (Jan 17):
  - 9:00 AM - 10:00 AM: Closing Remarks
```

:::warning Date Validation
You cannot shorten an event's date range if it would orphan existing sessions. For example, if you have sessions scheduled for day 5, you can't change the event to only 3 days.
:::

## Timezone Support

Events are fully timezone-aware:

**What this means:**
- Set your event's timezone (IANA format: 'America/New_York', 'Europe/London', etc.)
- Session times are stored and displayed in the event's timezone
- Attendees from different timezones see correct local times
- Prevents confusion for global events

**How to set:**
1. Select timezone when creating the event
2. Update in Event Settings → Basic Info
3. All session times will use this timezone

## Event Ownership & Access

Understanding who can access and manage your event:

### Organization Owners

**Automatic access:**
- Organization **owners** automatically have ADMIN access to all organization events
- Can manage events without being explicitly added
- Won't appear in attendee lists unless explicitly added

**This means:**
- Owners can access any organization event for management
- They can remain "invisible" (not in attendee lists)
- Or they can be added explicitly to appear as participants/speakers

:::info Organization Admins
Organization **admins** do NOT have automatic event access. They must be explicitly added to events like regular members. Only organization **owners** have implicit event admin privileges.
:::

### Event-Level Roles

Events have their own role hierarchy (covered in detail in the Event Roles guide):

- **ADMIN** - Full event control and editing
- **ORGANIZER** - Manage sessions, speakers, attendees
- **SPEAKER** - Present at sessions
- **ATTENDEE** - Participate in the event

:::info Role Details
We'll cover event roles in depth in the [Attendee Management](../attendee-management/managing-roles) section.
:::

## Next Steps

Ready to create your first event? Continue to:

- **[Creating Your First Event](../event-management/creating-events)** - Step-by-step event creation
- **[Event Customization](../event-management/customization)** - Branding and content
- **[Managing Attendees](../attendee-management/inviting-attendees)** - Invite and manage participants

---

**Questions?** [Contact us](mailto:steven@sbtl.dev) or [open an issue](https://github.com/thesubtleties/atria/issues).
