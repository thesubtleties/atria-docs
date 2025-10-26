# Chat Rooms

Chat rooms let attendees communicate in real-time during events. Each event has multiple rooms for different audiences and purposes, from general discussion to speaker coordination.

## Overview

Chat rooms are **event-specific** spaces where attendees can:
- Send messages to everyone in the room
- Participate in live discussions during sessions
- Coordinate with speakers (for speakers/organizers)
- Ask questions and engage with other attendees

**Key Features:**
- Real-time messaging powered by Socket.IO
- Different rooms for different roles and purposes
- Moderation tools for admins and organizers
- Mobile and desktop access with different interfaces

---

## Room Types

Events can have several types of chat rooms based on purpose and access level:

### General (GLOBAL)

- **Icon:** Globe 🌐
- **Access:** All event attendees
- **Purpose:** Main event discussion, announcements, general questions
- **Always available:** Yes

This is the main room for your event where everyone can chat.

### Speakers (GREEN_ROOM)

- **Icon:** Microphone 🎤
- **Badge:** "Speakers" (green)
- **Access:** Speakers, admins, and organizers only
- **Purpose:** Speaker coordination, backstage communication, prep discussions

### Admin (ADMIN)

- **Icon:** Lock 🔒
- **Badge:** "Admin" (red)
- **Access:** Admins and organizers only
- **Purpose:** Private staff communication, event coordination

### Session Rooms

Session-specific rooms are available when you're viewing a session. They only appear when you're in a session context.

**Public (PUBLIC)**
- **Icon:** Message 💬
- **Badge:** "Public" (blue)
- **Access:** All session attendees
- **Purpose:** Session-specific discussion, Q&A

**Backstage (BACKSTAGE)**
- **Icon:** Users 👥
- **Badge:** "Backstage" (violet)
- **Access:** Session speakers and organizers
- **Purpose:** Speaker coordination for that specific session

**Desktop:** Session chat pops out from the right side, automatically resizing the video and content to make space. You can collapse it to expand the video.

**Mobile:** Session rooms appear in the "Session" tab of the chat sidebar when you're viewing a session.

:::note Session Rooms
Session rooms are contextual - they only appear when you're viewing a specific session. They're separate from event-level rooms.
:::

---

## Accessing Chat Rooms

### Desktop

1. Navigate to your event
2. Click **Networking** in the event menu
3. Select the **Chat** tab

You'll see tabs for each available room at the top. Click a tab to switch rooms.

:::info Desktop Chat Location
On desktop, chat rooms are in the Networking area's Chat tab. This tab is **only visible on desktop** - mobile uses a different interface.
:::

### Mobile

1. Navigate to your event
2. Look for the **chat icon** (usually bottom right)
3. Tap to open the chat sidebar
4. Select the **Rooms** tab

You'll see a list of available rooms. Tap a room to open it full-screen.

**Mobile Tabs:**
- **Global** - Your direct messages from all events
- **Event** - Event-scoped direct messages
- **Rooms** - Event chat rooms (what we're discussing here)
- **Session** - Session-specific chat rooms (when viewing a session)

:::tip Mobile Chat Interface
On mobile, chat uses a collapsible sidebar that opens over your content. The sidebar combines both chat rooms and direct messages in one place.
:::

---

## Sending Messages

### Desktop

1. Make sure you're in the correct room (check the active tab)
2. Type your message in the input box at the bottom
3. Press **Enter** to send, or **Shift+Enter** for a new line
4. Your message appears immediately for everyone in the room

### Mobile

1. Tap the room to open it full-screen
2. Type your message in the input box at the bottom
3. Tap the **Send** button (or press Enter if using a keyboard)
4. Your message appears for everyone in the room

**Message Input:**
- Placeholder: "Write a message..."
- Supports multi-line messages (Shift+Enter on desktop)
- Auto-scrolls to show your new message

---

## Viewing Messages

### Message Display

Each message shows:
- **Sender's name**
- **Message content**
- **Timestamp** (e.g., "2:30 PM")

**Your messages** appear with your name and profile avatar.

**Others' messages** appear with their name and avatar.

### Scrolling and History

**Auto-scroll:**
- When you're near the bottom of the chat, new messages auto-scroll into view
- If you scroll up to read history, auto-scroll is disabled
- Scroll to the bottom to re-enable auto-scroll

**Loading older messages:**
- Scroll to the top of the message list
- Older messages load automatically (infinite scroll)
- Chat fetches messages in batches (50 at a time)

:::tip Reading While Active
If you scroll up to read older messages, new messages won't auto-scroll. This lets you read without being interrupted. When you scroll back to the bottom, auto-scroll resumes.
:::

---

## Room Permissions

### Who Can Send Messages

**General (GLOBAL):**
- All attendees can send messages
- Unless they're chat-banned by an organizer

**Speakers (GREEN_ROOM):**
- Speakers
- Admins and organizers

**Admin (ADMIN):**
- Admins
- Organizers

**Session Rooms:**
- **Public:** All session attendees
- **Backstage:** Session speakers and organizers

### Who Can See Rooms

You only see rooms you have access to. The backend filters rooms based on your role:
- Attendees see General and Public session rooms
- Speakers see General, Speakers, and session rooms
- Organizers/Admins see all rooms

---

## Message Moderation

### Who Can Moderate

- **Admins** can moderate any message in any room
- **Organizers** can moderate any message in any room
- Regular attendees and speakers cannot moderate messages

### Deleting Messages

To delete an inappropriate message:

1. **Hover over the message** (desktop) or **long-press** (mobile)
2. Click the **delete icon** that appears
3. Confirm the deletion in the modal

**What happens:**
- The message is soft-deleted from the system
- A websocket update removes it from everyone's chat in real-time
- **For regular attendees:** The message disappears completely
- **For admins/organizers:** The deleted message still appears with deletion info (who deleted it, when)
- **New users loading chat:** Don't see the message at all (unless they're admin/organizer)
- The sender is NOT notified of the deletion

:::warning Moderation Responsibility
Deleted messages cannot be undeleted. Use moderation for code of conduct violations, spam, or inappropriate content only.
:::

---

## Desktop vs Mobile

### Desktop Interface

**Layout:**
- Single-room tab system at top
- Click tab to switch rooms
- Message list in center
- Input at bottom
- Always visible when on Chat tab

**Navigation:**
- Tab-based room switching
- URL synchronized (bookmark specific rooms)
- One room active at a time

### Mobile Interface

**Layout:**
- Collapsible sidebar with room list
- Tap room to open full-screen
- Close button returns to sidebar
- Sidebar overlays content

**Navigation:**
- Tap sidebar icon to open
- Choose "Rooms" tab
- Tap room to open
- Back button returns to room list

**Session Rooms:**
- Available in "Session" tab (mobile only)
- Automatically shows rooms for the session you're viewing
- Easy switching between Public and Backstage

:::tip Session Chat Access
**Desktop:** Session chat automatically pops out from the right side when you're in a session, resizing the content to fit. Collapse it to give the video more space.

**Mobile:** Session rooms appear in the dedicated "Session" tab of the chat sidebar when you're viewing a session.

Both interfaces make session chat easily accessible without leaving the session page.
:::

---

## Best Practices

### Sending Messages

**Do:**
- Stay on topic for the room
- Be respectful and professional
- Use General for broad questions
- Use session rooms for session-specific discussion

**Don't:**
- Spam or send excessive messages
- Share personal information publicly
- Use ALL CAPS (considered shouting)
- Post off-topic content in specialized rooms

### Room Selection

**General Room:**
- Event announcements
- General networking
- Finding session locations
- Broad questions

**Speakers Room:**
- Coordinating with other speakers
- Asking organizers questions
- Session timing questions
- Technical setup issues

**Admin Room:**
- Staff coordination
- Emergency issues
- Event management
- Private organizer discussion

**Session Rooms:**
- Questions for the speaker
- Discussion about session content
- Networking with session attendees

---

## Common Scenarios

### Scenario 1: Asking a Question During a Session

**On Desktop:**
1. Stay on the session page
2. Open the session's Public chat room
3. Ask your question
4. Speaker or other attendees can respond

**On Mobile:**
1. While viewing the session
2. Open chat sidebar
3. Go to "Session" tab
4. Tap "Public" room
5. Ask your question

### Scenario 2: Coordinating as a Speaker

1. Open the Speakers (GREEN_ROOM) room
2. Discuss with other speakers and organizers
3. Messages are private to speakers/staff
4. Use for backstage coordination

### Scenario 3: Event Announcement (Organizers)

1. Open the General room
2. Send your announcement
3. Everyone sees it immediately
4. Consider pinning important announcements (if available)

### Scenario 4: Switching Between Rooms

**Desktop:**
- Click different room tabs at the top
- Active room changes immediately
- Message history loads for the new room

**Mobile:**
- Tap back to return to room list
- Tap different room
- Opens full-screen with that room's messages

---

## Troubleshooting

### Can't See a Room

**Problem:** Expected room isn't showing up

**Solutions:**
- Check your role - you may not have access
- Speakers rooms require Speaker role
- Admin rooms require Admin/Organizer role
- Session rooms only appear when viewing a session
- Refresh the page

### Can't Send Messages

**Problem:** Input is disabled or messages won't send

**Solutions:**
- Check if you're chat-banned (contact organizers)
- Verify you have access to this room
- Make sure you have an internet connection
- Try refreshing the page
- Check if the event is archived

### Messages Not Appearing

**Problem:** Sent a message but don't see it

**Solutions:**
- Check your internet connection
- Refresh the page
- Verify you're in the right room
- Message may have failed to send - try again

### Old Messages Not Loading

**Problem:** Can't see message history

**Solutions:**
- Scroll to the very top of the message list
- Wait a moment for messages to load
- Refresh the page if stuck
- May be no older messages (start of conversation)

### Chat Tab Missing (Desktop)

**Problem:** Don't see Chat tab in Networking area

**Solutions:**
- Chat tab is desktop-only
- On mobile, use the chat icon/sidebar instead
- Make sure you're in an event's Networking page
- Refresh the page

### Mobile Chat Won't Open

**Problem:** Tap chat icon but nothing happens

**Solutions:**
- Make sure you're in an event context
- Try closing and reopening the app/browser
- Clear browser cache
- Check if JavaScript is enabled

---

## Related Topics

- [Direct Messaging](./direct-messaging) - Message other attendees privately
- [Moderation](../attendee-management/moderation) - Managing disruptive users
- [Making Connections](../networking-features/making-connections) - Connect with attendees

---

:::tip Staying on Topic
When you're in a session, stick to that session's chat room to keep discussions on topic and network with people who are interested in the same content. Event-level rooms like General are great for broader networking and event-wide questions.
:::
