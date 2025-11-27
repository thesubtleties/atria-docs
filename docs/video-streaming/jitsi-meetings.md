---
sidebar_position: 5
---

# Jitsi Meetings (JaaS)

Jitsi as a Service (JaaS) provides embedded video conferencing directly within Atria. Unlike Zoom which opens in a new window, Jitsi meetings are embedded on the session page, keeping attendees within your event platform.

## When to Use Jitsi

Jitsi is ideal when:
- You want video conferencing **embedded** in Atria (not opening externally)
- You need per-user authentication tied to Atria accounts
- Event admins/organizers should have moderator controls (recording, livestreaming)
- You prefer open-source conferencing technology
- You want attendees to stay within your event experience

**Best for:** Interactive workshops, team breakouts, Q&A sessions, training with recording capabilities

---

## How Jitsi Differs from Other Platforms

| Aspect | Jitsi (JaaS) | Zoom | Mux/Vimeo |
|--------|--------------|------|-----------|
| **Embedding** | Embedded in Atria | Opens externally | Embedded player |
| **Interaction** | Two-way audio/video | Two-way audio/video | One-way (watch only) |
| **Authentication** | Per-user JWT tokens | Zoom account/link | None or signed tokens |
| **Moderator Controls** | Via Atria event roles | Via Zoom settings | N/A |
| **Recording** | Available (JaaS feature) | Via Zoom | Platform-specific |

**Key advantage:** Jitsi keeps attendees in Atria while providing full video conferencing capabilities with role-based moderator permissions.

---

## Prerequisites

To use Jitsi with your sessions:

1. **JaaS Account** - Sign up at [jaas.8x8.vc](https://jaas.8x8.vc)
2. **JaaS Credentials** - App ID, API Key, and Private Key from your JaaS account
3. **Organization Setup** - Configure credentials in Atria organization settings

:::note BYOA Model
Like Mux SIGNED, Jitsi uses a **Bring Your Own Account** model. Your organization maintains the JaaS account, and Atria generates per-user tokens using your credentials.
:::

---

## JaaS Credential Setup

Before using Jitsi in sessions, configure your organization's JaaS credentials.

### Step 1: Get Your JaaS Credentials

Log into your [JaaS Dashboard](https://jaas.8x8.vc):

1. **Get your App ID:**
   - Found on your dashboard
   - Format: `vpaas-magic-cookie-xxxxxxxxxxxxx`

2. **Get your API Key ID:**
   - Go to **API Keys** section
   - Create or select an API key
   - Copy the **Key ID**

3. **Get your Private Key:**
   - When creating an API key, download the RSA private key
   - This is a PEM-encoded private key file
   - Save it securely - you can't retrieve it later!

### Step 2: Add Credentials to Atria

1. Go to your **Organization Dashboard**
2. Click the **dropdown chevron** (▼) in the header to expand settings
3. Find the **Jitsi Video Conferencing (JaaS)** card
4. Click **"Add Credentials"**
5. Enter your credentials:
   - **JaaS App ID** (required)
   - **JaaS API Key ID** (required)
   - **JaaS Private Key** (required) - Paste the full PEM content
6. Click **"Save Credentials"**

For detailed instructions, see: [Organization JaaS Credentials Setup](../core-concepts/organizations#jitsi-jaas-credentials)

:::warning Credentials Are Encrypted
Your JaaS credentials are encrypted using Fernet encryption before storage. Credentials are NEVER viewable after entry - you must enter new ones to update.
:::

---

## Adding Jitsi to a Session

### Step 1: Choose a Room Name

Pick a unique room name for your session:
- Minimum 3 characters
- Maximum 200 characters
- Use descriptive names like `workshop-day1-intro` or `keynote-qa-session`

### Step 2: Configure Your Session

1. Go to **Event Admin** > **Sessions**
2. Create a new session or edit an existing one
3. Find the **Streaming Platform** dropdown
4. Select **Jitsi**
5. Enter your **Room Name**
6. Save the session

The Jitsi meeting will be embedded on the session page when attendees visit.

---

## Moderator Permissions

Jitsi provides different capabilities based on user roles in your event.

### Who Gets Moderator Status

Users are **moderators** if they have:
- **Admin** role in the event
- **Organizer** role in the event

Regular attendees and speakers are **participants** (non-moderators).

### Moderator Capabilities

| Feature | Moderators | Participants |
|---------|------------|--------------|
| **Recording** | Yes (costs via JaaS) | No |
| **Livestreaming** | Yes (to YouTube, etc.) | No |
| **File Upload** | Yes | No |
| **View Participant List** | Yes | Yes |
| **Mute/Kick Others** | Yes | No |

:::tip Recording Costs
Recording through JaaS has usage costs (approximately $0.01/minute). Only moderators can initiate recording, protecting against unexpected charges from attendees.
:::

---

## How Authentication Works

### Per-User JWT Tokens

Unlike Zoom (which uses shared meeting links), Jitsi generates unique tokens for each user:

1. User loads the session page
2. Atria generates a JWT token containing:
   - User's name and ID
   - Moderator status (true/false)
   - Feature permissions
   - Expiration time
3. Token is passed to embedded Jitsi
4. User joins with their identity and appropriate permissions

### Token Expiration

Tokens automatically expire based on your session:
- **Duration:** Session end time + 1 hour buffer
- **Fallback:** 8 hours if session duration unknown
- **Refresh:** New token generated on page reload

### Privacy

- User name is included in the token
- User ID is included for identification
- Email is included for JaaS features
- All data is transmitted securely via JWT

---

## Common Scenarios

### Scenario 1: Interactive Workshop

**Goal:** Run a hands-on workshop where attendees participate

**Steps:**
1. Ensure JaaS credentials are configured for your organization
2. Create a session with type "Workshop"
3. Select Jitsi as the platform
4. Enter room name: `workshop-react-basics`
5. Save the session
6. During the workshop:
   - Attendees join embedded in Atria
   - You (as organizer) can record if needed
   - Use screen sharing for demonstrations

---

### Scenario 2: Q&A Session with Recording

**Goal:** Host Q&A that you want to record for later

**Steps:**
1. Create session for Q&A
2. Select Jitsi platform
3. Enter room name: `day2-qa-session`
4. During the session:
   - Organizers/admins can start recording
   - Recording is saved to JaaS cloud
   - Download from JaaS dashboard later

---

### Scenario 3: Breakout Sessions

**Goal:** Multiple simultaneous breakout rooms

**Steps:**
1. Create separate sessions for each breakout
2. Use unique room names:
   - `breakout-track-a`
   - `breakout-track-b`
   - `breakout-track-c`
3. Attendees self-select which session to join
4. Each room operates independently

---

## Troubleshooting

### Meeting Not Loading

**Problem:** Jitsi meeting doesn't appear on session page

**Solutions:**
- Verify JaaS credentials are configured for your organization
- Check that room name is entered (minimum 3 characters)
- Ensure "Jitsi" is selected as the platform
- Refresh the page to get a fresh token
- Check browser console for CSP or loading errors

---

### "Invalid Token" Error

**Problem:** Users see authentication errors when joining

**Solutions:**
- Verify JaaS credentials are correct in organization settings
- Check that the private key is complete (full PEM format)
- Ensure your JaaS account is active
- Try re-entering credentials in organization settings
- Check if API key is expired in JaaS dashboard

---

### No Moderator Controls

**Problem:** Organizer doesn't have recording/moderation options

**Solutions:**
- Verify you have Admin or Organizer role in the event
- Refresh the page to get a new token with updated permissions
- Check event role assignments in Event Admin
- Moderator status is determined at token generation time

---

### Recording Not Available

**Problem:** Recording button doesn't appear or doesn't work

**Solutions:**
- Only moderators (Admin/Organizer) can record
- Verify your JaaS plan includes recording
- Check JaaS billing/account status
- Recording may have additional costs through JaaS

---

### Audio/Video Issues

**Problem:** Microphone or camera not working

**Solutions:**
- Grant browser permissions for camera/microphone
- Check browser settings for media permissions
- Try a different browser (Chrome recommended)
- Verify device is not in use by another application
- Check JaaS system status at status.jitsi.org

---

## Best Practices

### Before Your Event

- **Test credentials** - Create a test session and verify Jitsi loads
- **Test roles** - Confirm moderators get appropriate controls
- **Test recording** - If you plan to record, test it beforehand
- **Communicate expectations** - Let attendees know it's embedded (no app needed)

### Room Naming

- Use descriptive names: `workshop-day1-session2` not `room1`
- Keep names unique across your event
- Avoid special characters that might cause issues
- Consider including date/time for recurring sessions

### During Sessions

- **Start early** - Join 5-10 minutes before to test
- **Have backup moderator** - Ensure multiple admins/organizers can moderate
- **Monitor participant list** - Watch for uninvited guests
- **Use Atria chat too** - Jitsi chat is separate from Atria session chat

### Security

- Credentials are encrypted but treat them as sensitive
- Each session gets isolated room names
- Per-user tokens prevent unauthorized access
- Moderator controls are role-based (can't be bypassed)

---

## JaaS Pricing

JaaS offers usage-based pricing. Key costs to be aware of:

- **Video conferencing** - Free tier available, paid tiers for higher usage
- **Recording** - Approximately $0.01/minute when recording
- **Transcription** - Available but not enabled in Atria by default
- **Livestreaming** - Available for moderators, standard streaming costs apply

**View current pricing:** [jaas.8x8.vc/pricing](https://jaas.8x8.vc/#pricing)

:::tip Cost Control
Only moderators (Admin/Organizer roles) can initiate recordings, protecting against unexpected costs from attendees starting recordings.
:::

---

## Limitations

### Current Limitations

- Requires JaaS account credentials (BYOA model)
- Recording/livestreaming costs handled through JaaS billing
- Per-user tokens require page refresh to update permissions
- Breakout rooms within a single Jitsi meeting not supported (use separate sessions)

### JaaS Platform Limitations

- Free tier has usage limits
- Some features may require paid JaaS plans
- Recording storage is in JaaS cloud (download to keep permanently)

---

## Related Topics

- [Video Platforms Overview](./platforms-overview) - Compare all video platforms
- [Organizations](../core-concepts/organizations#jitsi-jaas-credentials) - JaaS credential setup
- [Zoom Meetings](./zoom-meetings) - Alternative (external) video conferencing
- [Creating Sessions](../sessions-speakers/creating-sessions) - Session management guide

---

:::tip Embedded Experience
Jitsi is the only video conferencing option that keeps attendees fully within Atria. If maintaining a cohesive event experience is important, Jitsi is your best choice for interactive sessions.
:::
