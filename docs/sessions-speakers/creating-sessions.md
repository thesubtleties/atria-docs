# Creating Sessions

Sessions are the building blocks of your event schedule - the individual talks, workshops, panels, and activities that attendees will participate in. This guide covers how to create and manage sessions for your event.

## Prerequisites

To create and manage sessions, you must be:
- An **Admin** or **Organizer** for the event

Speakers and Attendees cannot create or edit sessions.

:::note Editing Sessions
You can create and edit sessions at any time, even when your event is archived. There are no restrictions based on event status.
:::

## Accessing Session Management

1. Navigate to your event in the **Event Admin** area
2. Click **Sessions** in the sidebar
3. Use the day navigation to switch between different days of your event

The session manager shows:
- Sessions organized by day
- Total session count and breakdown by type
- Conflict detection warnings
- Quick editing capabilities

---

## Creating a Session

### Basic Session Creation

1. Go to **Event Admin** > **Sessions**
2. Select the day you want to add the session to
3. Click **New Session**
4. Fill in the required information:
   - **Title** (required) - The name of your session
   - **Session Type** (required) - Choose from available types
   - **Start Time** (required) - Select time using AM/PM format (e.g., 2:00 PM)
   - **End Time** (required) - Must be after start time
   - **Day** (required) - Which day of your event (Day 1, Day 2, etc.)
5. Click **Create Session**

The session is created with chat enabled by default.

### Session Fields Explained

**Required Fields:**
- **Title** - Keep it concise and descriptive
- **Session Type** - Affects how the session is displayed
- **Start Time** - When the session begins
- **End Time** - When the session ends (must be after start time)
- **Day Number** - Which day of your multi-day event

**Optional Fields:**
- **Short Description** - Brief summary (max 200 characters) shown in agenda views
- **Description** - Full details shown on the session page
- **Stream URL** - Link to your Vimeo video (live stream or pre-recorded)
- **Chat Mode** - Control whether you have all chat (public + backstage), only backstage chat, or no chat

---

## Session Types

Choose the type that best describes your session:

| Type | Description | Common Use |
|------|-------------|------------|
| **Keynote** | Major address or opening/closing speech | Conference opening, featured speakers |
| **Presentation** | Standard talk or lecture | Most talks and presentations |
| **Workshop** | Hands-on learning session | Interactive training, tutorials |
| **Panel** | Panel discussion with multiple speakers | Group discussions, Q&A panels |
| **Networking** | Unstructured networking time | Coffee breaks, social hours |
| **Q&A** | Question and answer session | Discussion sessions, AMAs |

The session type affects:
- How the session appears in your agenda
- Visual styling in the schedule

You can assign any speaker role to any session type - the type is just for organization and display.

---

## Multi-Day Sessions

For multi-day events, sessions are organized by day number:

- **Day 1** = Your event's start date
- **Day 2** = Start date + 1 day
- **Day 3** = Start date + 2 days
- And so on...

When creating a session, select the appropriate day number. The system automatically calculates the actual date based on your event's start date.

### Organizing Multi-Day Schedules

**Tips for multi-day events:**
- Use consistent timing across days (e.g., keynotes always at 9:00 AM)
- Leave buffer time between sessions for transitions
- Consider timezone when scheduling (times are in your event's timezone)
- Group similar session types together

---

## Session Status

:::info Upcoming Feature
Session status management (Scheduled, Live, Completed, Cancelled) is coming soon. Currently, all sessions are treated the same regardless of timing. Future updates will allow you to mark sessions as live or completed and control visibility based on status.
:::

---

## Chat Modes

Control who can access chat for each session:

### Enabled (Default)
- Creates two chat rooms: **Public** and **Backstage**
- **Public chat**: All event attendees can participate
- **Backstage chat**: Only speakers and organizers
- Best for most sessions where you want attendee interaction

### Backstage Only
- Creates only a **Backstage** chat room
- Only speakers and organizers can chat
- No public attendee chat available
- Best for:
  - Sessions where you don't want attendees interacting in chat
  - Sensitive topics or client presentations
  - Coordinating between speakers without public chat
  - Pre-session planning and rehearsals

### Disabled
- No chat rooms created
- Nobody can chat during this session
- Best for passive content or when using external chat tools

:::note Chat Rooms Auto-Created
When you create a session, chat rooms are automatically created based on your chat mode selection. You don't need to set them up separately.
:::

---

## Editing Sessions

You have two ways to edit sessions:

### Quick Edit (Inline)
Available in **Event Admin > Sessions**:

1. Find the session in your session list
2. Click on the field you want to edit (title, time, description, etc.)
3. Make your changes
4. Changes auto-save after 500ms

This is fastest for small updates like fixing typos or adjusting times.

### Full Edit Modal
Available from the public session page (where attendees watch videos):

1. Navigate to the session page
2. Click the **Edit** button (admins/organizers only)
3. Make your changes in the modal
4. Click **Save Changes**

This is better for making multiple changes at once, especially when you're viewing the session as attendees see it.

### What You Can Edit

You can change any session field after creation:
- Title and descriptions
- Session type
- Start and end times
- Day number (move to a different day)
- Chat mode
- Status
- Stream URL

:::warning Moving Sessions
If you change the day or times, check for speaker conflicts. The system will warn you if a speaker is double-booked.
:::

---

## Deleting Sessions

To delete a session:

1. Find the session in your list
2. Click the **menu icon** (three dots)
3. Select **Delete Session**
4. Confirm the deletion

:::danger Permanent Action
Deleting a session removes it permanently, including:
- All speaker assignments
- Associated chat rooms and message history
- Session from attendee schedules

This cannot be undone.
:::

---

## Stream URLs

Add video links to your sessions using Vimeo:

### Supported Platforms
- **Vimeo** - Currently the only supported platform
- Additional platforms (YouTube, etc.) coming soon

### Adding a Stream URL
1. Edit your session
2. Find the **Stream URL** field
3. Paste the full Vimeo URL:
   - Live stream: `https://vimeo.com/event/123456`
   - Pre-recorded video: `https://vimeo.com/123456789`
4. Save the session

The video appears embedded on the session page for attendees to watch.

:::info Video Display
Videos are displayed as soon as you add a stream URL. Future updates will add controls to show videos only when sessions go live, but currently they're visible immediately when the URL is set.
:::

:::tip Test Your Videos
Always test your Vimeo links before your event starts. Make sure they're publicly accessible and don't require special authentication.
:::

---

## Conflict Detection

The system automatically detects when speakers are scheduled for overlapping sessions.

### What Triggers a Conflict Warning

A conflict occurs when:
- The same speaker is assigned to multiple sessions
- Those sessions overlap in time
- They're on the same day

### How to See Conflicts

Sessions with conflicts appear with a **yellow warning highlight** in the session list. This warns you about overlaps but doesn't prevent you from creating them.

**Important:** The system will warn you about overlapping sessions, but it **will not allow you to assign speakers to overlapping sessions**. If you try to add a speaker who's already assigned to another session at that time, it will be blocked.

### Resolving Conflicts

To fix a scheduling conflict:
1. Identify the overlapping sessions
2. Either:
   - Change the session times so they don't overlap
   - Move one session to a different day
   - Remove the speaker from one of the sessions

:::note Conflict Detection
The system only detects conflicts for sessions on the same day. Speakers can have sessions at the same time on different days.
:::

---

## Time Validation

The system validates your session times:

### Rules
- End time must be after start time
- Times are selected using AM/PM dropdowns (12-hour format)
- Day number must be valid for your event duration
- Times are available in 15-minute intervals (00, 15, 30, 45)

### Time Selection

Use the time picker to select times:
- **Format:** 12-hour with AM/PM (e.g., 2:00 PM, 9:30 AM)
- **Intervals:** 15 minutes (times like 2:15 PM, 2:30 PM, 2:45 PM)
- **Display:** Shows in AM/PM format, stored in 24-hour format in the system

:::tip Timezone Context
All session times are in your event's timezone. Attendees will see times converted to their local timezone automatically.
:::

---

## Best Practices

### Session Planning

**Before creating sessions:**
- Plan your full schedule on paper or spreadsheet first
- Consider session lengths (30 min, 45 min, 60 min, 90 min are common)
- Build in buffer time between sessions (10-15 minutes)
- Leave time for breaks and meals

**Session length guidelines:**
- Keynotes: 45-60 minutes
- Standard talks: 30-45 minutes
- Workshops: 60-90 minutes
- Panels: 45-60 minutes
- Networking breaks: 15-30 minutes

### Descriptions

**Short description** (200 chars):
- One sentence summary
- Focus on key takeaways
- Shown in agenda view

**Full description**:
- What attendees will learn
- Prerequisites or required knowledge
- Key topics covered
- Include speaker bios here or link to them

### Chat Configuration

**Use Public Chat when:**
- You want attendee questions during the session
- Interactive sessions with Q&A
- Community discussion is valuable

**Use Backstage Only when:**
- Coordinating between speakers and organizers
- Pre-session setup and planning
- You have external chat tools for attendees

**Use Disabled when:**
- Passive viewing only
- Using external chat platform (Discord, Slack)
- Very large audiences where chat would be overwhelming

---

## Common Scenarios

### Scenario 1: Creating a Full Day Schedule

**Goal**: Set up Day 1 with keynote, talks, and breaks

**Steps**:
1. Create keynote session (09:00-10:00, type: Keynote)
2. Create coffee break (10:00-10:15, type: Networking, chat: Disabled)
3. Create morning talks (10:15-11:00, 11:00-11:45, type: Presentation)
4. Create lunch break (12:00-13:00, type: Networking)
5. Continue with afternoon sessions

### Scenario 2: Moving a Session to a Different Day

**Issue**: Need to reschedule a Day 2 session to Day 3

**Steps**:
1. Open the session for editing
2. Change **Day** from 2 to 3
3. Check for speaker conflicts on the new day
4. Save the changes

### Scenario 3: Setting Up a Live Stream

**Goal**: Add a Vimeo stream to your session

**Steps**:
1. Find or create your session
2. Get your Vimeo live event URL or video URL
3. Use quick edit to click on the **Stream URL** field
4. Paste the Vimeo URL
5. The video automatically appears on the session page

### Scenario 4: Using Backstage Chat Only

**Goal**: Allow speaker coordination without public chat

**Steps**:
1. Create or edit your session
2. Find the **Chat Settings** field
3. Select **Backstage Only**
4. Save the session
5. Only speakers and organizers will see the chat room

---

## Troubleshooting

### Can't Create Sessions

**Problem**: Create button is grayed out or missing

**Solutions**:
- Check that you're an Admin or Organizer
- Verify you're on the Sessions page for your event
- Make sure the event exists and you have access

### End Time Before Start Time Error

**Problem**: "End time must be after start time"

**Solutions**:
- Ensure end time is actually later than start time
- Check you selected AM/PM correctly (common mistake: selecting PM instead of AM)
- For sessions crossing midnight, consider splitting into two sessions or scheduling the end time as late as 11:45 PM

### Invalid Day Number

**Problem**: "Day number must be between 1 and X"

**Solutions**:
- Check your event's duration (start date to end date)
- Day 1 = start date, Day 2 = start date + 1 day, etc.
- You can't create sessions beyond your event's end date

### Speaker Conflict Warning

**Problem**: Warning that speaker is double-booked

**Solutions**:
- Review the overlapping sessions
- Adjust times to remove overlap
- Move one session to a different day
- Remove the speaker from one session

### Video Not Showing

**Problem**: Added stream URL but video doesn't appear

**Solutions**:
- Make sure you're using a Vimeo URL (other platforms not yet supported)
- Verify the URL is correct and publicly accessible
- Check that the video isn't set to private in Vimeo
- The video appears immediately once the URL is saved

### Chat Rooms Not Appearing

**Problem**: Expected chat rooms aren't showing up

**Solutions**:
- Check the session's chat mode setting
- "Disabled" means no chat rooms
- "Backstage Only" means only backstage chat (no public)
- Speakers and organizers can always see backstage chat

---

## Related Topics

- [Managing Speakers](./managing-speakers) - Add speakers to your sessions
- [Event Customization](../event-management/customization) - Customize your event details
- Chat & Messaging - How chat rooms work (coming soon)

---

:::tip Session Management Tips
Start with a rough schedule, then refine it. You can always edit sessions later. Focus on getting the core schedule in place first, then add details like descriptions and stream URLs.
:::
