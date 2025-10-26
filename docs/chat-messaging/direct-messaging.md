# Direct Messaging

Direct messaging (DM) lets you have private conversations with people you've connected with at events. Messages persist across events and are private between you and the other person.

## Overview

Direct messages are **private one-on-one conversations** between you and your connections. Unlike chat rooms, DMs are:
- Private (only you and the other person can see messages)
- Persistent (messages stay even after the event ends)
- Event-scoped or global (depending on how you connected)

:::info Message Privacy
Direct messages are private between you and the recipient. However, messages are technically auditable by the instance owner (no end-to-end encryption currently). End-to-end encryption may be added in a future release based on user feedback.
:::

**Key Features:**
- Real-time messaging with typing indicators
- Message status (sent, read)
- Event-scoped and global threads
- Desktop multi-window and mobile full-screen interfaces
- Thread management and deletion

---

## Starting a Direct Message

### From Your Connections

1. Go to **My Network** (in main navigation)
2. Find the person you want to message
3. Click their **Message** button
4. A chat window opens with your conversation

### From Event Attendees

1. Go to the event's **Networking** > **Attendees** tab
2. Find someone you're connected with
3. Click their **Message** button
4. A chat window opens

### After Accepting a Connection

When you accept a connection request:
- A DM thread is automatically created
- **The thread includes their icebreaker message** from the connection request
- This gives you a conversation starter to respond to
- On desktop, you may be navigated to the thread
- You can start messaging immediately

:::tip Who Can You Message?
You can only send direct messages to people you're **connected with** (accepted connection requests). You cannot DM someone you're not connected to.
:::

---

## Desktop Interface

### Multi-Window System

Desktop uses a **floating window system** for DMs:

**Layout:**
- Windows appear in the bottom-right corner
- Up to **3 windows can be open** at once
- Additional threads are minimized (small icons at bottom)
- Click a minimized thread to open it (closes the oldest open window)

**Window Controls:**
- **Minimize button** (–) - Collapse to bottom-right icon
- **Close button** (×) - Close window (thread stays in sidebar)
- **Drag** - Move window around the screen

### Chat Sidebar

**Access:**
- Click the **chat icon** (usually bottom-left or in navigation)
- Sidebar slides out from the left
- Shows your thread list

**Tabs:**
- **Global** - All your DMs from all events
- **Event** - DMs from the current event (if you're in an event)

**Thread List:**
- Shows preview of last message
- Timestamp of last message
- Unread indicator (if new messages)
- Online status (if other user is active)

### Sending Messages (Desktop)

1. Type in the input box at the bottom of the window
2. **Press Enter** to send
3. **Shift+Enter** for a new line
4. Message appears immediately (optimistic update)
5. Checkmark (✓) shows when sent to server

---

## Mobile Interface

### Full-Screen Windows

Mobile uses **full-screen chat windows**:

**Layout:**
- Thread list in collapsible sidebar
- Tap thread to open full-screen
- Back button (×) returns to thread list
- One conversation at a time

### Chat Sidebar

**Access:**
- Tap the **chat icon** (usually bottom-right or floating button)
- Sidebar opens over your content
- Shows tabs: Global, Event, Rooms, Session

**Global Tab:**
- All your DM threads from all events
- Shows preview and timestamp
- Tap to open full-screen

**Event Tab:**
- DM threads from current event
- Also shows global threads if other user is in this event
- Contextual to what event you're viewing

### Sending Messages (Mobile)

1. Tap a thread to open it full-screen
2. Type in the input box at the bottom
3. Tap the **Send** button
4. Message appears immediately
5. Status indicators show delivery status

**Mobile Input:**
- Placeholder: "Message [First Name]..."
- Auto-resizes as you type
- Soft keyboard support
- Better touch targets

---

## Message Features

### Typing Indicators

When someone is typing a message to you:
- **Desktop:** "typing..." appears in the thread
- **Mobile:** "typing..." appears in the chat window

**How it works:**
- Updates in real-time as they type
- Shows for 5 seconds after they stop typing
- Only visible in DMs (not chat rooms)

### Message Status

Your sent messages show status indicators:

**✓ (Checkmark) - Sent**
- Message successfully sent to the server

**✓ (Checkmark) - Read**
- The other person has opened and seen your message

:::note Read Receipts
Read receipts show when someone has actually seen your message. They're automatic - you can't turn them off for individual messages.
:::

### Optimistic Updates

When you send a message:
1. It appears **immediately** in your window (optimistic)
2. A "pending" style shows it's being sent
3. Server confirms receipt within ~1 second
4. Message updates to show "sent" status (✓)

If sending fails:
- Message stays in pending state
- You can retry or delete it

---

## Thread Management

### Finding Conversations

**Global Tab (Desktop and Mobile):**
- All your DM conversations across all events
- Sorted by most recent message
- Shows preview of last message

**Event Tab (Desktop and Mobile):**
- Conversations from the current event
- Also includes global threads if the other person is in this event
- Filtered based on event context

**Search:**
- Use the search bar to find people by name
- Filters the thread list in real-time

### Deleting Threads

You can delete entire conversations (iMessage-style):

1. Find the thread in your thread list
2. Click the **menu icon** (three dots) or swipe (mobile)
3. Select **Delete Chat**
4. Confirm the deletion

**What happens:**
- The thread disappears from your list
- **Your message history is deleted** from your view
- The other person's message history is unchanged (they still see everything)
- If either person sends a new message, the thread reappears
- **You only see new messages** from the point you deleted forward
- The other person still sees full history

:::warning Thread Deletion
Deleting a thread only removes it from your view and deletes your message history. The other person keeps their full history. If either person sends a new message, the thread reappears, but you'll only see messages from that point forward. This isn't a permanent block.
:::

---

## Event-Scoped vs Global Threads

### Event-Scoped Threads (Rare)

**What they are:**
- Created when an organizer/admin messages you within an event
- **Only when you're NOT connected** to each other
- Purpose: Quick communication without requiring a connection (event updates, warnings, etc.)
- Purely event-specific

**What happens when you connect:**
- The event-scoped thread becomes a global thread
- You now have ONE persistent DM thread across all events

**Example:** An organizer sends you a quick message about a session change. If you later connect with that organizer, that thread becomes global.

### Global Threads (Most Common)

**What they are:**
- DMs with people you're connected to
- One thread per connection, regardless of how many events you attend together
- Persists across all events and outside event context

**Where you see them:**
- Always in the "Global" tab
- In the "Event" tab if the other person is in your current event

**Example:** You connect with someone at "Tech Conference 2024" and message them. You have ONE global thread with them that follows you to future events.

### Understanding the Event Tab

The **Event tab** shows:
- Anyone you have an active thread with who is **in the same event** you're viewing
- These are "familiar faces" - people you already know/chatted with
- Makes it easy to find and message people you've connected with at past events who happen to be at this event too

:::tip Finding People You Know
The Event tab is your "friendly faces" filter - it shows threads with people who are attending the same event you're currently viewing. This makes networking easier by surfacing people you already have relationships with.
:::

---

## Desktop vs Mobile

### Desktop Features

**Multi-window DMs:**
- Up to 3 windows open simultaneously
- Floating, movable windows
- Minimize windows to bottom-right
- Click minimized to restore

**Sidebar:**
- Collapsible from left side
- Thread list with tabs (Global, Event)
- Search threads
- Open thread opens a window

### Mobile Features

**Full-screen DMs:**
- One conversation at a time
- Full-screen for better reading
- Larger touch targets
- Back button to return to thread list

**Sidebar:**
- Opens over content
- 4 tabs: Global, Event, Rooms, Session
- Tap to open thread full-screen
- Close button collapses sidebar

**Mobile Advantages:**
- Session tab (easy access to session rooms)
- Better keyboard handling
- Optimized for small screens
- Fewer distractions

### Feature Parity

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Send messages | ✓ | ✓ |
| Typing indicators | ✓ | ✓ |
| Read receipts | ✓ | ✓ |
| Thread deletion | ✓ | ✓ |
| Search threads | ✓ | ✓ |
| Global/Event tabs | ✓ | ✓ |
| Multi-window | ✓ | ✗ |
| Session tab | ✗ | ✓ |

---

## Best Practices

### Starting Conversations

When you accept a connection request, **the thread already includes their icebreaker message**. This gives you a natural conversation starter - just respond to what they said!

**Tips:**
- Use the Event tab to find familiar faces at the event you're attending
- Use the Global tab to see all your conversations
- Search for people by name rather than scrolling

### Message Etiquette

- Be professional and respectful
- Respond in a reasonable timeframe
- Don't spam or send excessive messages
- Don't use DMs for harassment or inappropriate content

---

## Common Scenarios

### Scenario 1: Messaging Someone You Just Connected With

**Goal:** Start a conversation after connecting at an event

**Steps:**
1. You accept their connection request (or they accept yours)
2. A DM thread is automatically created
3. **Desktop:** Window may open automatically
4. **Mobile:** Find them in the Event tab
5. Send your first message

### Scenario 2: Finding an Old Conversation

**Goal:** Message someone you met at a past event

**Steps:**
1. Open chat sidebar
2. Go to **Global** tab (shows all threads)
3. Search for their name
4. Click/tap the thread to open
5. Continue the conversation

### Scenario 3: Messaging Multiple People at an Event

**Desktop:**
1. Open first thread (window 1)
2. Click second person (window 2)
3. Click third person (window 3)
4. All three windows visible at once
5. Switch between them as needed

**Mobile:**
1. Open first thread
2. Back button to thread list
3. Open second thread
4. Repeat as needed
5. One conversation at a time

### Scenario 4: Cleaning Up Your Thread List

**Goal:** Remove old or inactive conversations

**Steps:**
1. Find threads you don't need
2. Menu → **Delete Chat**
3. Confirm deletion
4. Thread removed from your list
5. Reappears only if new messages arrive

---

## Troubleshooting

### Can't Message Someone

**Problem:** No message button or can't start a DM

**Solutions:**
- Make sure you're connected (accepted connection request)
- You can only DM people in your network
- Check if they've blocked you (though this isn't visible)
- Verify internet connection

### Messages Not Sending

**Problem:** Message stuck in "pending" state

**Solutions:**
- Check internet connection
- Refresh the page or app
- Message may be queued - wait a moment
- Try sending again if it fails

### Typing Indicator Not Working

**Problem:** Don't see "typing..." when other person is typing

**Solutions:**
- Typing indicators only work in DMs (not rooms)
- Other person may not be typing
- Real-time connection may be delayed
- Refresh if it's been broken for a while

### Can't Find a Thread

**Problem:** Looking for a conversation but can't find it

**Solutions:**
- Check both Global and Event tabs
- Use the search bar to find by name
- Thread may have been deleted
- Make sure you're still connected to the person

### Thread Keeps Reappearing After Deletion

**Problem:** Deleted a thread but it came back

**Solutions:**
- This is expected behavior
- Threads reappear when new messages arrive
- Either person sending a message brings it back
- To permanently stop receiving messages: remove the connection

### Desktop Windows Not Opening

**Problem:** Click message but no window appears

**Solutions:**
- May already have 3 windows open (max limit)
- Close or minimize a window first
- Check if a window is hidden behind other content
- Refresh the page

### Mobile Chat Overlay Stuck

**Problem:** Chat sidebar won't close

**Solutions:**
- Tap outside the sidebar
- Tap the close/back button
- Refresh the page
- May be a layout issue - try rotating device

---

## Related Topics

- [Chat Rooms](./chat-rooms) - Event-level public chat
- [Making Connections](../networking-features/making-connections) - Connect with attendees
- [Privacy Controls](../networking-features/privacy-controls) - Manage visibility

---

:::tip Quick Messaging
On desktop, keep your most active conversations open in windows while working in the event. On mobile, the sidebar gives you instant access to all your threads from anywhere.
:::
