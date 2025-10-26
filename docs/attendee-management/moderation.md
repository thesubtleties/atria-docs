# Moderation

Moderation tools help you maintain a safe and respectful environment at your events. You can restrict disruptive users from chat, remove them from your event entirely, and delete inappropriate messages.

## Overview

Atria provides three levels of moderation:

1. **Chat Restrictions** - Mute users from chat while allowing event access
2. **Event Bans** - Prevent users from accessing your event (they remain in the system but cannot access anything)
3. **Message Deletion** - Remove inappropriate messages from chat

:::info Upcoming Features
Full moderation history and audit trails are coming soon. Currently, you can take moderation actions, but detailed history viewing is not yet available in the interface.
:::

## Who Can Moderate

**Admins** have full moderation power:
- Ban or restrict any attendee, speaker, organizer, or admin
- Cannot ban themselves
- Cannot ban the last remaining admin (prevents orphaning the event)

**Organizers** have limited moderation power:
- Ban or restrict speakers and attendees only
- Cannot moderate other organizers or admins
- Cannot ban themselves

**Organization Owners** automatically have admin-level moderation power for all events in their organization.

## Accessing Moderation Tools

1. Navigate to **Event Admin** > **Attendees**
2. Find the user you want to moderate
3. Click the **menu icon** (three dots) next to their name
4. Select the appropriate moderation action

Users who are banned or muted will appear highlighted in your attendees list:
- **Red highlight** - Event-wide ban
- **Orange highlight** - Chat restriction only

---

## Chat Restrictions

Chat restrictions (also called "muting") prevent users from sending messages while allowing them to remain in your event. Users can still attend sessions, view content, and use networking features like sending connection requests.

### When to Use Chat Restrictions

Chat restrictions are useful when you want to limit someone's ability to disrupt chat without removing them from the event entirely. However, keep in mind that muted users can still:
- Send connection requests to other attendees
- Access all event content and sessions
- Use other networking features

If the user's behavior is severe or presents safety concerns, an event ban may be more appropriate than a chat restriction.

### How to Mute a User

1. Go to **Event Admin** > **Attendees**
2. Find the user in your attendees list
3. Click the menu icon next to their name
4. Select **Mute from Chat**
5. Confirm the action

The user will immediately lose chat access. They won't receive a notification, but they'll see a message indicating they're muted if they try to send a message.

:::info Upcoming Feature
Temporary/timed chat bans (1 hour, 24 hours, etc.) are coming soon. Currently, all chat restrictions are permanent until you manually unmute the user.
:::

### How to Unmute a User

1. Go to **Event Admin** > **Attendees**
2. Find the muted user (orange highlight)
3. Click the menu icon next to their name
4. Select **Unmute Chat**
5. Confirm the action

The user can immediately send messages again.

---

## Event Bans

Event bans prevent users from accessing your event. The user remains in your event's database as banned, but cannot access any event content, chat, or features. Importantly, **banned users cannot rejoin your event** even if sent a new invitation.

### What Happens When You Ban a User

When you ban someone from your event:
- They're immediately blocked from accessing the event
- They cannot view event details, sessions, or speakers
- They cannot access chat or networking features
- They cannot rejoin even with a new invitation
- They no longer appear in the attendee directory
- If they're a speaker, they're removed from all session assignments

:::note Ban vs Remove
Banning keeps the user in your system but blocks their access. If you completely **remove** a user from your event (a separate action), they could be reinvited later. Use removal for cases like "accidentally added the wrong person" and use bans for moderation purposes.
:::

### How to Ban a User

:::warning Cannot Rejoin
Banned users cannot rejoin your event, even with a new invitation. Consider a chat restriction first for less severe issues.
:::

1. Go to **Event Admin** > **Attendees**
2. Find the user you want to ban
3. Click the menu icon next to their name
4. Select **Ban User**
5. Review the confirmation dialog carefully
6. Confirm the action

The user is immediately banned from your event.

### How to Unban a User

If you need to reverse a ban:

1. Go to **Event Admin** > **Attendees**
2. Find the banned user (red highlight)
3. Click the menu icon next to their name
4. Select **Unban User**
5. Confirm the action

The user regains access to your event. However, if they were also chat-banned separately, you'll need to unmute them as well.

---

## Deleting Messages

You can delete inappropriate messages from any chat room in your event. Deleted messages are "soft deleted" - they're hidden from attendees but preserved in the database.

### Who Can Delete Messages

- **Admins** can delete any message
- **Organizers** can delete any message
- Speakers and Attendees cannot delete messages

### How to Delete a Message

1. Navigate to the chat room containing the inappropriate message
2. Hover over the message
3. Click the **delete icon** or **menu option**
4. Confirm the deletion

The message is immediately hidden from all users.

### What Happens to Deleted Messages

**For Attendees**:
- Message shows as "[Message deleted by moderator]"
- Original content is hidden
- No information about who deleted it or why

**In the Database**:
- Message content is preserved
- Deletion timestamp is recorded
- Information about who deleted it is stored

---

## Best Practices

### Understand Your Options

You have three main actions for dealing with disruptive users:

1. **Chat Mute** - User can't send messages but can still network and attend
2. **Event Ban** - User can't access the event at all and cannot rejoin
3. **Remove from Event** - User is removed but could be reinvited if needed (useful for accidental additions)

**Important**: Chat-muted users can still send connection requests and use other networking features. If the behavior is severe or presents safety concerns, consider an event ban instead.

### When to Use Each Action

**Chat Mute**:
- Minor chat disruptions
- Off-topic behavior
- User needs a cooldown period

**Event Ban**:
- Harassment or threatening behavior
- Serious code of conduct violations
- Safety concerns for other attendees
- Repeated violations after chat mute

**Remove from Event**:
- Wrong person was added by mistake
- User requested to be removed
- Administrative cleanup

### Communication

After taking moderation action:
- Consider messaging the user to explain the action (optional)
- Be respectful but firm
- Document the reason for your own records

---

## Common Scenarios

### Scenario 1: Spamming Chat

**Issue**: User is posting the same message repeatedly

**Action**: Chat mute

### Scenario 2: Harassment

**Issue**: User is harassing another attendee

**Action**: Event ban (immediate)

### Scenario 3: Wrong Person Added

**Issue**: You accidentally invited someone who shouldn't be in the event

**Action**: Remove from event (they can be reinvited if it was a mistake)

### Scenario 4: Accidental Ban

**Issue**: You banned the wrong user

**Action**:
1. Immediately unban the user
2. Message the user to apologize and explain

### Scenario 5: Chat Disruption with Safety Concerns

**Issue**: User is being disruptive in chat and other attendees are reporting feeling uncomfortable

**Action**: Event ban (not just chat mute, since they can still send connection requests when muted)

---

## Troubleshooting

### Can't Ban a User

**Problem**: Ban action is grayed out or fails

**Solutions**:
- You may not have permission (must be Admin or Organizer)
- You cannot ban yourself
- Organizers cannot ban other Organizers or Admins
- You cannot ban the last Admin of the event

### User Says They Weren't Notified

**Problem**: Banned user claims they didn't know

**Solution**:
- Atria doesn't send automatic ban notifications
- Users see the restriction when they try to access chat or the event
- Consider messaging users directly if you want to explain the action

### Need to Ban Multiple Users

**Problem**: Multiple users are coordinating disruption

**Solution**:
- Currently, you must ban each user individually
- Use the attendees list to access each user's menu
- Take the appropriate action for each user

### Chat Muted User Still Causing Problems

**Problem**: User is muted from chat but still disrupting via connection requests or other means

**Solution**:
- Chat mutes only prevent messaging - users can still use networking features
- If the behavior is problematic, consider an event ban instead
- Event bans prevent all access to event features

---

## Related Topics

- [Managing Roles](./managing-roles) - Understanding role permissions
- [Inviting Attendees](./inviting-attendees) - How users join your event
- Chat & Messaging - How chat rooms work (coming soon)

---

:::info Questions or Issues?
If you encounter moderation challenges or need guidance on handling specific situations, contact your organization owner or refer to your event's code of conduct.
:::
