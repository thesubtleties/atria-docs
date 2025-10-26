# Privacy Controls

Atria gives you granular control over what information you share and who can contact you. You can set global privacy defaults and override them for specific events, giving you flexibility for different contexts.

## Overview

Privacy controls let you manage:
- **Email visibility** - Who can see your email address
- **Connection requests** - Who can send you connection requests
- **Social links** - Who can see your LinkedIn, Twitter, and website
- **Profile information** - Whether to show your company, title, and bio

You can configure these settings:
- **Globally** - Default settings that apply to all events
- **Per event** - Override global settings for specific events

---

## Accessing Privacy Settings

1. Click on your **profile menu** or **settings icon**
2. Navigate to **Settings**
3. Click the **Privacy Settings** tab
4. You'll see two tabs: **Global Privacy** and **Event Privacy**

---

## Global Privacy Settings

Global settings are your default privacy configuration. They apply to all events unless you create an event-specific override.

### Email Visibility

Control who can see your email address.

**Options:**

1. **Event Attendees** (most open)
   - During events: All event attendees can see your email
   - After events: Only your connections can see it
   - Use when: You want to be easily reachable during events

2. **Connections & Event Organizers** (default, recommended)
   - Only your accepted connections can see your email
   - Event organizers can always see it for event management
   - Use when: You want to balance privacy with networking

3. **Event Organizers Only** (most restrictive)
   - Only event organizers can see your email
   - Attendees and connections cannot see it
   - Use when: You want maximum email privacy from other attendees

:::tip Public Email Option
If you select "Event Organizers Only," you can enable "Use a different email for public display" to show an alternative email address to attendees. Event organizers will always see your real account email (they need it to manage the event), but other attendees will see your public email instead.
:::

### Public Email (Optional)

When you choose "Event Organizers Only" for email visibility, you can optionally provide a public email:

1. **Toggle on** "Use a different email for public display"
2. **Enter a public email** in the text field (e.g., `public@example.com`)
3. This email will be shown to attendees
4. Organizers will still see your real account email
5. **Save your changes**

This is useful if you want to:
- Provide a speaking/work email to attendees while keeping your personal email private
- Triage event-related emails to a specific inbox
- Give attendees a different contact method
- Keep your account email private from other attendees (organizers always see it)

### Connection Requests

Control who can send you connection requests.

**Options:**

1. **Event Attendees Only** (default, most open)
   - Any attendee at your events can send you connection requests
   - Use when: You want to maximize networking opportunities

2. **Speakers & Organizers Only**
   - Only event speakers and organizers can send requests
   - Regular attendees cannot request to connect
   - Use when: You want to limit networking to speakers and organizers

3. **No One**
   - Completely blocks all connection requests
   - No one can send you requests at any event
   - Use when: You don't want to network or are at capacity

:::warning Blocking All Requests
If you select "No One," you won't receive any connection requests, even from speakers or organizers. You can still message people who are already connected.
:::

### Social Links

Control who can see your LinkedIn, Twitter, website, and other social links.

**Options:**

1. **Event Attendees** (default, most open)
   - During events: All event attendees can see your links
   - After events: Only connections can see them
   - Use when: You want to promote your professional presence

2. **Connections Only**
   - Only your accepted connections can see your social links
   - Event attendees cannot see them until you connect
   - Use when: You want to share links only with established connections

3. **Hidden** (most restrictive)
   - No one can see your social links
   - Links are completely hidden from your profile
   - Use when: You prefer not to share social media

### Profile Information

Control visibility of your professional information.

**Show Company and Job Title:**
- **On** (default): Your title and company are visible
- **Off**: Your title and company are hidden

**Show Bio:**
- **On** (default): Your biography is visible on your profile
- **Off**: Your bio is hidden

:::info Upcoming Feature
These toggles are saved in your settings, but full enforcement is still being implemented. Currently:
- **Title and company** are always visible in attendee lists if you've filled them out
- **Bio** is only shown on profile pages to connected users
Future updates will fully enforce these privacy controls.
:::

### Saving Global Settings

After making changes:
1. Review your settings
2. Click **Save Changes** (only visible if you've made changes)
3. A success notification appears
4. Settings apply immediately to all events (unless overridden)

Click **Cancel** to discard changes and revert to saved settings.

---

## Event Privacy Overrides

Event-specific overrides let you use different privacy settings for individual events. This is useful when:
- You're speaking at an event and want to be more accessible
- An event requires different privacy than your normal settings
- You want to be more or less visible at specific events

### Setting Up Event Overrides

1. Go to **Settings** > **Privacy Settings**
2. Click the **Event Privacy** tab
3. Select an event from the dropdown
4. **Toggle on** "Override Privacy Settings for This Event"
5. Configure your event-specific settings (same options as global)
6. Click **Save Event Overrides**

### Event Selection

**Dropdown menu** shows all events you're part of:
- Events you created
- Events you're invited to
- Events where you're a speaker, organizer, or attendee

**If you have no events:**
- You'll see a message: "No Events Available"
- "You're not currently part of any events. Event-specific privacy overrides will be available when you join or create events."

### Override Settings

When you enable overrides for an event, you can configure:
- **Email Visibility** (same 3 options as global)
- **Public Email** (if using "Organizers Only")
- **Connection Requests** (same 3 options as global)
- **Social Links** (same 3 options as global)
- **Show Company & Title** (toggle)
- **Show Bio** (toggle)

All settings work exactly like global settings but only apply to the selected event.

### How Overrides Work

**During the event:**
- Your event override settings apply
- These override your global settings
- Only applies to this specific event

**After the event ends:**
- Your global settings apply again
- Connections from that event see you based on global settings
- The override is no longer active

**For other events:**
- Your global settings apply
- Overrides only affect the specific event they're configured for

### Disabling Overrides

To remove an event override:
1. Select the event from the dropdown
2. **Toggle off** "Override Privacy Settings for This Event"
3. A notification appears: "Event privacy overrides removed"
4. Your global settings now apply to this event

The override is deleted immediately - you don't need to click save.

---

## Privacy in Practice

### How Privacy Filtering Works

Atria uses **context-aware privacy filtering**:

**What you show depends on:**
1. Your privacy settings (global or event override)
2. The viewer's relationship to you (connected, organizer, attendee)
3. The context (in-event, post-event, global network)

**During an event:**
- Event attendees see your title, company, and social links/email based on your privacy settings
- Connections can view your full profile, including bio
- Organizers can always see email for event management

**Outside of events:**
- Your connections can view your full profile
- Non-connections cannot access your profile

**What "connected" means:**
- Once someone is in your network (accepted connection), they can access your full profile page
- This includes your bio, title, company, and other information you've filled out
- Privacy settings mainly control what non-connected people see in attendee lists

### Privacy Levels Explained

**Most Open (Maximum Visibility):**
- Email: Event Attendees
- Requests: Event Attendees Only
- Social Links: Event Attendees
- Profile info toggles: On

Use when: Speaking, networking heavily, promoting yourself

**Balanced (Recommended Default):**
- Email: Connections & Event Organizers
- Requests: Event Attendees Only
- Social Links: Event Attendees
- Profile info toggles: On

Use when: Normal event participation, comfortable networking

**Most Private (Maximum Privacy):**
- Email: Event Organizers Only (with optional public email)
- Requests: Speakers & Organizers Only or No One
- Social Links: Hidden
- Profile info toggles: Off

Use when: Want to minimize exposure, not actively networking

:::note Profile Visibility
Once someone is connected with you, they can view your full profile page. The privacy settings primarily control what non-connected people see in attendee lists and search results.
:::

---

## Common Privacy Scenarios

### Scenario 1: Speaking at a Conference

**Goal**: Be accessible to attendees but triage emails to a dedicated address

**Settings** (Event Override):
- Email: Event Organizers Only
- Enable "Use a different email for public display"
- Public Email: `speaking@yourcompany.com` (your speaking/triage email)
- Requests: Event Attendees Only
- Social Links: Event Attendees
- Profile toggles: On

This way:
- Attendees see your speaking email (`speaking@yourcompany.com`) for that event
- Event organizers see your real account email for coordination
- After the event, your global settings apply (attendees lose access to that specific email)

### Scenario 2: Attending as Regular Attendee

**Goal**: Network selectively, maintain some privacy

**Settings** (Global):
- Email: Connections & Event Organizers
- Requests: Event Attendees Only
- Social Links: Connections Only
- Company/Title: Shown
- Bio: Shown

Attendees can request to connect, but only connections see your social links.

### Scenario 3: Maximum Privacy

**Goal**: Attend without sharing much information

**Settings**:
- Email: Event Organizers Only (with public email if needed)
- Requests: Speakers & Organizers Only
- Social Links: Hidden
- Company/Title: Hidden
- Bio: Hidden

Only organizers and speakers can contact you, minimal information visible.

### Scenario 4: Different Privacy Per Event

**Goal**: Be open at work events, private at others

**Work Events** (Event Override):
- Email: Event Attendees
- Requests: Event Attendees Only
- Social Links: Event Attendees
- Profile toggles: On

**Other Events** (Global):
- Email: Connections & Organizers
- Requests: Speakers & Organizers Only
- Social Links: Connections Only
- Profile toggles: Off

Each event respects its override or falls back to global settings.

---

## Best Practices

### Choosing Your Settings

**Consider your goals:**
- Networking: More open settings help people find and connect with you
- Privacy: More restrictive settings protect your information
- Balance: Default settings work well for most people

**Think about your role:**
- **Speakers**: Usually want to be accessible (use event overrides)
- **Organizers**: Need to balance accessibility with privacy
- **Attendees**: Can be more selective about who contacts them

**Update as needed:**
- You can change settings anytime
- Changes apply immediately
- Event overrides give you flexibility

### Using Event Overrides

**When to use overrides:**
- Speaking at an event (be more accessible)
- Client events (be more private)
- Networking-focused events (be more open)
- Different professional contexts

**How to manage overrides:**
- Set them up before or during the event
- Review and disable after the event if needed
- Keep global settings as your comfortable default

### Protecting Your Privacy

**Email protection:**
- Use "Connections & Organizers" as default for most events
- Use "Organizers Only" + public email when speaking (provide event-specific email to attendees)
- Remember: Organizers always see your real account email
- Your public email is only shown to other attendees (not organizers)
- Check your email visibility periodically

**Connection request control:**
- "Event Attendees" works for most people
- Use "Speakers & Organizers" if you get too many requests
- Use "No One" temporarily if you need a break

**Information sharing:**
- Be thoughtful about your bio - it's searchable
- Social links are optional - only share what you're comfortable with
- Company and title help with networking but can be hidden

---

## Troubleshooting

### Privacy Settings Not Saving

**Problem**: Click save but settings don't apply

**Solutions**:
- Check for error notifications
- Refresh the page and try again
- Make sure you actually changed a setting
- Verify you have an internet connection

### Event Override Not Working

**Problem**: Set override but seeing global settings

**Solutions**:
- Make sure you toggled ON the override
- Click "Save Event Overrides"
- Refresh the page
- Check you selected the correct event

### Can't Find Event in Override List

**Problem**: Event not appearing in dropdown

**Solutions**:
- Make sure you're actually part of the event
- Check that the event exists and you have access
- Try refreshing the page
- You may not be invited yet

### People Can Still See My Email

**Problem**: Changed email visibility but people can still see it

**Solutions**:
- Check which email visibility level you selected
- "Event Attendees" means attendees CAN see it
- Connections can see your email even with "Connections & Organizers"
- Use "Event Organizers Only" for maximum privacy
- Wait a moment for changes to propagate

### Getting Too Many Connection Requests

**Problem**: Overwhelmed with connection requests

**Solutions**:
- Change "Connection Requests" to "Speakers & Organizers Only"
- Use "No One" temporarily to block all requests
- Set event override to "No One" for specific events
- You can change this back anytime

### Social Links Not Showing for Connections

**Problem**: Connected users can't see your social links

**Solutions**:
- Check your "Social Links" setting
- If set to "Hidden," no one can see them
- Change to "Connections Only" or "Event Attendees"
- Save your settings
- Make sure you've actually added social links to your profile

---

## Related Topics

- [Making Connections](./making-connections) - How to network at events
- [Your Profile](../your-account/your-profile) - Update your profile information
- [Account & Security Settings](../your-account/account-security-settings) - Manage your account and privacy

---

:::tip Finding Your Balance
Start with the default settings and adjust based on your comfort level. You can always make your settings more or less private as you use the platform and understand what works for you.
:::
