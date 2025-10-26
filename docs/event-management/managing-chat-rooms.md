# Managing Chat Rooms

Create and manage chat rooms for your event to facilitate networking and communication among attendees, speakers, and organizers.

## Overview

Chat rooms let attendees communicate in group conversations during your event. You can create different room types with specific access controls.

**Access:** Event Admin → Networking & Chat Management

**Available room types:**
- **General Chat (GLOBAL)** - All attendees
- **Admin Only (ADMIN)** - Admins and organizers only
- **Green Room (GREEN_ROOM)** - Speakers, admins, and organizers

**Key features:**
- Create rooms before or during your event
- Enable/disable rooms as needed
- Monitor active users and message counts
- Reorder rooms with drag-and-drop
- View chat conversations

:::warning Room Type Cannot Change
Once you create a room, its type (GLOBAL, ADMIN, or GREEN_ROOM) cannot be changed. If you need a different type, you must delete the room and create a new one.
:::

---

## Creating a Chat Room

### How to Create a Room

1. Go to **Event Admin** → **Networking & Chat Management**
2. Click **+ Add Chat Room** (top-right)
3. Fill in the room details:
   - **Room Name** (Required) - 3-100 characters
   - **Description** (Optional) - Up to 500 characters
   - **Room Type** (Required) - Choose GLOBAL, ADMIN, or GREEN_ROOM
   - **Enable room immediately** - Toggle ON to activate now, or leave OFF to enable later
4. Click **Create Room**
5. The room appears in the appropriate section

### Room Name Guidelines

**Good examples:**
- "General Networking"
- "Speaker Coordination"
- "Tech Discussion"
- "Product Feedback"

**Tips:**
- Keep it concise and descriptive
- Make the purpose clear to attendees
- Use title case for professionalism

### Room Description

**Optional but recommended** - Helps attendees understand the room's purpose.

**Examples:**
- "A space for attendees to discuss emerging technologies and trends"
- "Private room for speaker preparation and coordination"
- "Connect with other product managers and share insights"

---

## Room Types Explained

### General Chat (GLOBAL)

**Who can access:** All event attendees

**Use cases:**
- General networking
- Broad discussions
- Community chat
- Topic-specific conversations open to everyone

**Visual:** Blue color coding

### Admin Only (ADMIN)

**Who can access:** Event admins and organizers only

**Use cases:**
- Private team communications
- Event planning discussions
- Moderation coordination
- Staff-only announcements

**Visual:** Violet/purple color coding

### Green Room (GREEN_ROOM)

**Who can access:** Speakers, admins, and organizers

**Use cases:**
- Speaker preparation
- Pre-event coordination with speakers
- Speaker Q&A and support
- Speaker-to-speaker networking

**Visual:** Teal color coding

---

## Managing Existing Rooms

### Editing a Room

1. Find the room in your list
2. Click the **Edit** button (pencil icon) or **three-dot menu** → **Edit**
3. Modify the name and/or description
4. Click **Save Changes**

**What you can edit:**
- Room name
- Room description
- Enabled/disabled status

**What you cannot edit:**
- Room type (GLOBAL, ADMIN, GREEN_ROOM)

### Enabling and Disabling Rooms

**Individual room:**
1. Toggle the **Enabled** switch next to the room
2. Room immediately becomes active (enabled) or hidden (disabled)

**Disable all public rooms at once:**
1. Click **Disable All Public Rooms** button
2. Confirm the action
3. All GLOBAL rooms become disabled
4. ADMIN and GREEN_ROOM rooms remain enabled

**Use cases for disabling:**
- Prepare rooms before event start
- Temporarily pause a room
- Control when rooms become available to attendees
- Manage room access during the event

### Deleting a Room

1. Find the room in your list
2. Click the **three-dot menu** → **Delete**
3. Confirmation dialog appears
4. Click **Delete Room** to confirm

**Warning:** Deletion is permanent and irreversible. All messages in the room will be lost.

:::tip Disable Instead of Delete
If you're uncertain about deleting a room, disable it instead. You can re-enable it later without losing message history.
:::

### Reordering Rooms

**Desktop:** Click and drag the drag handle icon (six dots) to reorder

**Mobile:** Long-press a room card, then drag to reorder

**How it works:**
- Rooms are organized by type (GLOBAL, ADMIN, GREEN_ROOM)
- You can only reorder rooms within the same type
- Order determines how rooms appear to attendees
- Changes save automatically

---

## Monitoring Chat Rooms

### Room Statistics

Each room shows real-time information:

**Active Users**
- Green dot indicator
- Number of users currently in the room
- Updates in real-time

**Message Count**
- Total messages sent in the room
- Updates with slight delay (few seconds)

### Viewing Chat Content

1. Find the room you want to review
2. Click **View Chat**
3. The chat window opens showing the conversation
4. Review messages for content, engagement, or moderation

---

## Common Scenarios

### Scenario 1: Setting Up Rooms Before Your Event

**Goal:** Create your room structure ahead of time

**Steps:**
1. Click "Add Chat Room" for each room you want
2. Fill in name and description
3. Choose appropriate room type
4. Leave "Enable room immediately" toggle OFF
5. Create all your rooms in disabled state
6. Enable rooms 30 minutes before event or when ready

**Why:** Prevents attendees from accessing rooms before you're ready, gives you time to review setup

### Scenario 2: Creating a Topic-Specific Discussion

**Goal:** Add a room for specific discussion topic

**Steps:**
1. Click "Add Chat Room"
2. Name: "AI & Machine Learning"
3. Description: "Discuss AI trends, tools, and applications"
4. Type: General Chat (GLOBAL)
5. Enable immediately: ON
6. Click "Create Room"

### Scenario 3: Mid-Event Room Management

**Goal:** Adjust rooms during the event based on engagement

**Actions you can take:**
- Disable low-activity rooms to focus attendees
- Enable additional rooms if needed
- Reorder rooms to prioritize active ones
- Add new rooms for emerging topics

### Scenario 4: Emergency Moderation

**Goal:** Quickly disable a problematic room

**Steps:**
1. Find the room
2. Toggle "Enabled" switch OFF
3. Room immediately hidden from attendees
4. Review chat using "View Chat"
5. Decide to re-enable, delete, or keep disabled

### Scenario 5: Post-Event Cleanup

**Goal:** Archive or remove rooms after event

**Options:**
- **Disable all rooms** - Preserve messages but prevent new ones
- **Delete unwanted rooms** - Permanently remove (cannot undo)
- **Keep important rooms** - Leave enabled for post-event networking

---

## Troubleshooting

### Can't Change Room Type

**Problem:** Need to change a room from GLOBAL to ADMIN

**Solution:**
- Room type cannot be changed after creation
- Delete the existing room
- Create a new room with the correct type
- Inform attendees of the change if room was already in use

### Room Not Appearing for Attendees

**Problem:** Attendees can't see a room you created

**Solutions:**
- Check if the room is **Enabled** (toggle should be ON)
- Verify the room type matches who should see it (GLOBAL for all attendees)
- Refresh the attendee interface
- Check if attendees have the correct role (for ADMIN or GREEN_ROOM)

### Can't Delete a Room

**Problem:** Delete button isn't working

**Solutions:**
- Check your permissions (must be admin or organizer)
- Try refreshing the page
- Check if there's a confirmation dialog you need to respond to
- Contact support if issue persists

### Drag-and-Drop Not Working

**Problem:** Can't reorder rooms

**Solutions:**
- Make sure you're dragging within the same room type section
- On mobile, use long-press before dragging
- Check that you're clicking the drag handle icon (six dots)
- Try refreshing the page

### Active Users Count Seems Wrong

**Problem:** Active user count doesn't match expectations

**Info:**
- Count updates in real-time but may have slight delay
- Only shows users currently viewing the room
- Users who close the room are removed from count
- Count may fluctuate as users join and leave

---

## Best Practices

### Planning Your Room Structure

**Before creating rooms:**
- Decide which types you need (GLOBAL, ADMIN, GREEN_ROOM)
- Plan 3-7 rooms for most events (avoid overwhelming attendees)
- Create rooms in disabled state before event
- Enable progressively as event progresses

**Naming strategy:**
- Use clear, descriptive names
- Avoid abbreviations attendees won't understand
- Consider adding emojis for visual distinction (if supported)
- Keep names concise (under 50 characters ideal)

### Room Management During Events

**Best practices:**
- Monitor active users to gauge engagement
- Check "View Chat" periodically for content quality
- Disable low-activity rooms to focus attendees
- Add rooms for trending topics if needed
- Use "Disable All Public" only in emergencies

### Descriptions

**Write effective descriptions:**
- Explain the room's purpose clearly
- Keep under 200 characters for readability
- Include any guidelines or expectations
- Mention if the room is for specific topics or groups

**Examples:**
- "Connect with fellow developers and discuss tech trends"
- "Ask questions and get support from event organizers"
- "Share product feedback and feature requests with our team"

### Room Types Selection

**Choose wisely:**
- **GLOBAL** - Most common, use for general attendee networking
- **ADMIN** - Keep sensitive discussions private
- **GREEN_ROOM** - Support speakers and coordinate before sessions

**Remember:** You can't change type later, so plan carefully

### Timing

**When to enable rooms:**
- **Before event:** Enable 30 minutes early for early arrivals
- **During event:** Enable new rooms as topics emerge
- **After event:** Keep some rooms open for post-event networking
- **Long-term:** Disable or delete when no longer needed

---

## Related Topics

- [Chat Rooms](../chat-messaging/chat-rooms) - Attendee guide to using chat rooms
- [Direct Messaging](../chat-messaging/direct-messaging) - Attendee guide to DMs
- [Moderation](../attendee-management/moderation) - Moderating chat and managing problematic users
- [Managing Icebreakers](./managing-icebreakers) - Setting up conversation starters for networking

---

:::tip Room Strategy
Create 3-5 GLOBAL rooms for different topics or interests, 1 ADMIN room for your team, and 1 GREEN_ROOM if you have speakers. Start with all disabled, then enable them 30 minutes before your event begins.
:::
