# Managing Speakers

Speakers are the presenters, panelists, and facilitators who deliver content at your event. This guide covers how to add speakers to your event, assign them to sessions, and manage their profiles.

## Prerequisites

To manage speakers, you must be:
- An **Admin** or **Organizer** for the event
- Working with a published or draft event

## Understanding Speakers in Atria

In Atria, speakers are users who have been:
1. Added to your event with the **Speaker** role first
2. Then assigned to one or more sessions with a specific speaker role

A user becomes a speaker when you:
- Invite them with the Speaker role, OR
- Change an existing attendee's role to Speaker

You must give someone the Speaker role before you can add them to sessions as a speaker.

---

## Adding Speakers to Your Event

Before you can assign someone to speak at a session, they need to be in your event.

### Method 1: Invite as Speaker

1. Go to **Event Admin** > **Attendees**
2. Click **Invite Attendees**
3. Enter their email address
4. Select role: **Speaker**
5. Send the invitation

When they accept, they'll have the Speaker role and can be assigned to sessions.

### Method 2: Change Existing Attendee to Speaker

1. Go to **Event Admin** > **Attendees**
2. Find the person in your attendees list
3. Click the menu icon (three dots) next to their name
4. Select **Change Role**
5. Choose **Speaker**
6. Confirm the change

They now have the Speaker role and can be assigned to sessions.

:::tip Who Should Be a Speaker?
Give the Speaker role to anyone who will be presenting, moderating, or on stage. This gives them access to backstage chat and marks them as a speaker in your event.
:::

---

## Assigning Speakers to Sessions

Once someone has the Speaker role in your event, you can assign them to specific sessions.

### From the Session Manager

1. Go to **Event Admin** > **Sessions**
2. Find the session you want to add a speaker to
3. Click on the session card or use the menu
4. Click **Add Speaker** or **Manage Speakers**
5. Select the speaker from your event's speaker list
6. Choose their **speaker role** for this session
7. Optionally set their display order
8. Click **Add**

### From the Speakers Manager

The Speakers Manager has a "Manage Sessions" button, but currently this just takes you to the main Sessions page. You'll need to use the Session Manager to assign speakers to sessions.

:::note Session Speaker Roles
The "speaker role" (host, keynote, moderator, etc.) is specific to each session. The same person can be a keynote in one session and a panelist in another.
:::

---

## Speaker Roles

When assigning a speaker to a session, choose the role that describes their participation:

| Role | Description | Best For |
|------|-------------|----------|
| **Host** | Session facilitator or host | MCs, session chairs, hosts |
| **Keynote** | Featured keynote speaker | Main speakers, headliners |
| **Speaker** | Standard presenter | Most presentations, talks |
| **Moderator** | Panel moderator or facilitator | Panel moderators, discussion leaders |
| **Panelist** | Panel participant | Panel members, discussants |

### Role Display Order

Speakers appear in this order on session pages:
1. Host
2. Keynote
3. Speaker
4. Moderator
5. Panelists

You can also manually set a custom order (see Speaker Ordering below).

---

## Speaker Profiles

Speaker information comes from their user profile. This includes:

**Profile Information:**
- Full name
- Profile avatar (customizable SVG avatar, like a flat cartoon character)
- Bio (if privacy settings allow)
- Title and company (if privacy settings allow)
- Custom speaker title (optional override for sessions/speakers pages)
- Social links (if privacy settings allow)

**How Titles Display:**
- **Regular title and company**: Shows on attendees/networking pages
- **Custom speaker title**: If set, shows on session pages and speakers page instead

**About Avatars:**
Currently, Atria uses customizable SVG avatars (similar to Miis or cartoon characters) that users can personalize on their profile page. Profile photos may be added as an option in the future.

**How to Update Speaker Profiles:**
- Speakers update their own profiles through **Profile Settings**
- Privacy settings control what information is visible
- Encourage speakers to fill out their bios and adjust privacy settings as they wish

:::info Privacy Filtering
Speaker profile data respects privacy settings. If a speaker has hidden their title, company, or social links, that information won't appear even though they're a speaker.
:::

---

## Speaker Ordering

Control the order speakers appear on session pages.

### How Speaker Ordering Works

Speakers are ordered by:
1. **First by speaker role** (Host → Keynote → Speaker → Moderator → Panelist)
2. **Then by custom order within each role**

This means:
- You can reorder speakers within the same role (e.g., adjust which of 5 panelists appears first)
- But role hierarchy always takes priority (moderator will always appear above panelists)

### Custom Ordering

To manually reorder speakers:

1. Go to the session page or session manager
2. Find the speaker list
3. **Drag and drop** speakers to reorder them within their role
4. Changes save automatically

**You can edit speaker order:**
- On the session page (if you're an admin or organizer)
- In the session manager

**When to use custom ordering:**
- Organizing panelists by speaking order
- Highlighting the main presenter among multiple speakers
- Arranging speakers for visual balance

---

## Conflict Detection

The system warns you when a speaker is assigned to overlapping sessions.

### What Causes a Conflict

A conflict occurs when:
- A speaker is assigned to multiple sessions
- Those sessions are on the same day
- The times overlap

**Example conflict:**
- Session A: Day 1, 10:00-11:00, Speaker: Jane
- Session B: Day 1, 10:30-11:30, Speaker: Jane
- **Conflict!** Jane can't be in two places at once

### How to See Conflicts

**In Session Manager:**
- Sessions with conflicts show a warning badge
- Hover or click for details

**In Speakers Manager:**
- Speakers with conflicts show a warning indicator
- Click to see which sessions conflict

### Resolving Conflicts

To fix a speaker conflict:

**Option 1: Change session times**
1. Edit one of the conflicting sessions
2. Adjust start/end times so they don't overlap
3. Save the changes

**Option 2: Move session to different day**
1. Edit the session
2. Change the day number
3. Save (conflict disappears)

**Option 3: Remove speaker from one session**
1. Go to the conflicting session
2. Remove the speaker from one of them
3. Assign a different speaker if needed

:::tip Conflict Detection Only Checks Same Day
The system only detects conflicts on the same day. A speaker can have sessions at 10:00 AM on Day 1 and 10:00 AM on Day 2 with no conflict.
:::

---

## Removing Speakers

### Remove from a Session

To remove a speaker from a specific session:

1. Go to the session page or session manager
2. Find the speaker in the speaker list
3. **Hover over the speaker**
4. Click the **trash can icon** that appears
5. Confirm

The speaker is removed from this session but remains in your event with the Speaker role.

### Remove from Event Entirely

To remove someone from your event completely:

1. Go to **Event Admin** > **Attendees**
2. Find the speaker
3. Click the menu icon
4. Select **Remove from Event**
5. Confirm

:::warning Removing Speakers from Event
If you remove a speaker from the event entirely, they're automatically removed from all their assigned sessions. They'll lose access to your event and will need to be reinvited if you want them back.
:::

---

## Finding and Searching Speakers

### In Speakers Manager

1. Go to **Event Admin** > **Speakers**
2. Use the **search bar** to find speakers by:
   - Name
   - Email
   - Company

### Filter and Sort

**Sort by:**
- Name (A-Z or Z-A)
- Number of sessions
- Role

**View:**
- Desktop: Table view (compact, shows more info)
- Mobile: Card view (visual layout optimized for mobile)

---

## Best Practices

### Adding Speakers

**Before your event:**
- Invite all confirmed speakers early
- Ask speakers to complete their profiles (bio, photo, social links)
- Remind speakers that their profile is public

**During speaker management:**
- Use descriptive speaker roles that match their actual role
- Check for conflicts before finalizing the schedule
- Communicate schedule changes to affected speakers

### Speaker Profiles

**Encourage speakers to:**
- Customize their avatar on their profile page
- Write a bio
- Include their title and company
- Add social media links (LinkedIn, Twitter, etc.)
- Adjust privacy settings to control what information is visible

### Session Assignment

**Tips for assigning speakers:**
- Assign hosts and keynotes first
- Check availability before assigning to multiple sessions
- Use the conflict detector to catch scheduling issues
- Consider speaker energy levels (don't overbook)

**Common speaker role patterns:**
- **Solo presentation**: One "Speaker" role
- **Panel discussion**: One "Moderator" + 3-5 "Panelist" roles
- **Fireside chat**: One "Host" + one "Speaker" or "Keynote"
- **Workshop**: One or two "Speaker" roles

---

## Troubleshooting

### Can't Add Speaker to Session

**Problem**: Speaker doesn't appear in the "Add Speaker" list

**Solutions**:
- Verify they're invited to the event and have accepted (all users must accept invitations)
- Check they have the Speaker role (not just Attendee)
- If they're an Organizer or Admin, they may need the Speaker role too
- Make sure they aren't already added to this session

### Speaker Profile Information Missing

**Problem**: Speaker bio, company, or other info not showing

**Solutions**:
- The speaker needs to fill out their profile
- Check their privacy settings - they may have hidden this information
- As organizer, you cannot override privacy settings
- Ask the speaker to update their profile and adjust privacy

### Can't Remove Speaker from Session

**Problem**: Remove button is grayed out or unavailable

**Solutions**:
- Check that you're an Admin or Organizer
- Refresh the page and try again
- The speaker may already be removed

### Conflict Warning Won't Go Away

**Problem**: Changed times but still seeing conflict warning

**Solutions**:
- Refresh the page to see updated conflict status
- Verify the times actually don't overlap anymore
- Check that you saved the time changes
- Look for other sessions - there might be a third conflicting session

---

## Related Topics

- [Creating Sessions](./creating-sessions) - Set up your event schedule
- [Managing Roles](../attendee-management/managing-roles) - Understanding event roles
- [Inviting Attendees](../attendee-management/inviting-attendees) - How to invite speakers

---

:::tip Speaker Management Workflow
The easiest workflow is: 1) Invite all speakers to your event first, 2) Create your full session schedule, 3) Then assign speakers to sessions. This lets you see all speakers and all sessions together, making it easier to spot conflicts and plan assignments.
:::
