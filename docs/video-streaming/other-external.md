---
sidebar_position: 6
---

# Other/External Links

The "Other" streaming option allows you to link to any external streaming or conferencing platform. Use this when you need to connect to platforms that Atria doesn't directly integrate, such as Microsoft Teams, Google Meet, self-hosted solutions, or any other HTTPS-accessible service.

## When to Use Other

Use the "Other" option when:
- Your organization uses MS Teams, Google Meet, or other platforms
- You have a self-hosted Jitsi instance (non-JaaS)
- You need to link to a custom or niche streaming solution
- The external platform has features Atria doesn't directly support
- You want flexibility to link to any HTTPS URL

**Best for:** MS Teams meetings, Google Meet, self-hosted conferencing, custom streaming platforms

---

## How It Works

The "Other" option is intentionally simple:

1. You enter an HTTPS URL to your external platform
2. Attendees see a styled card with the link
3. Clicking "Open Stream" opens the URL in a new browser tab
4. The external platform handles everything from there

**Important:** Unlike Vimeo, Mux, or Jitsi, the external platform is NOT embedded in Atria. It opens in a new window, similar to Zoom.

---

## Prerequisites

To use external links:

1. **HTTPS URL** - The link must be HTTPS (not HTTP)
2. **Valid URL** - Must be a properly formatted URL with domain
3. **Accessible Platform** - Attendees must be able to access the linked platform

No organization credentials or special setup required.

---

## Adding External Links to a Session

### Step 1: Get Your External URL

Copy the URL to your external streaming or meeting platform:
- MS Teams meeting link
- Google Meet URL
- Self-hosted Jitsi room URL
- Any other HTTPS streaming service

### Step 2: Configure Your Session

1. Go to **Event Admin** > **Sessions**
2. Create a new session or edit an existing one
3. Find the **Streaming Platform** dropdown
4. Select **Other**
5. In the **Stream URL** field, paste your HTTPS URL
6. Save the session

Attendees will see a card with a button to open the external platform.

---

## URL Requirements

| Requirement | Details |
|-------------|---------|
| **Protocol** | Must be HTTPS (not HTTP) |
| **Format** | Valid URL with domain and TLD |
| **Length** | Displayed truncated after 60 characters |
| **Accessibility** | Platform must be accessible to attendees |

**Valid examples:**
- `https://teams.microsoft.com/l/meetup-join/...`
- `https://meet.google.com/abc-defg-hij`
- `https://your-jitsi.company.com/room-name`
- `https://custom-streaming.example.com/live/session`

**Invalid examples:**
- `http://insecure-site.com/meeting` (HTTP not allowed)
- `teams.microsoft.com/meeting` (missing protocol)
- `ftp://files.example.com` (wrong protocol)

---

## What Attendees See

When attendees view a session with "Other" streaming:

1. **Styled card** with external link icon
2. **URL preview** (first 60 characters, truncated if longer)
3. **Disclaimer** alerting them it opens an external platform
4. **"Open Stream" button** to launch the external link

The button opens in a new tab with security attributes (`noopener`, `noreferrer`) to protect your event platform.

---

## Common Scenarios

### Scenario 1: Microsoft Teams Meeting

**Goal:** Link to a corporate MS Teams meeting

**Steps:**
1. Create your Teams meeting and copy the join link
2. Edit your session in Atria
3. Select "Other" as streaming platform
4. Paste the Teams URL
5. Save - attendees click to join Teams

---

### Scenario 2: Google Meet

**Goal:** Use Google Meet for a session

**Steps:**
1. Create a Google Meet and copy the link
2. Edit your session in Atria
3. Select "Other" as streaming platform
4. Paste the Google Meet URL
5. Save - attendees click to join Google Meet

---

### Scenario 3: Self-Hosted Jitsi

**Goal:** Use your own Jitsi server instead of JaaS

**Steps:**
1. Get your self-hosted Jitsi room URL (e.g., `https://meet.yourcompany.com/room-name`)
2. Edit your session in Atria
3. Select "Other" as streaming platform
4. Paste your Jitsi URL
5. Save - attendees click to join your Jitsi instance

:::note Self-Hosted vs JaaS
If you use JaaS (Jitsi as a Service), use the "Jitsi" platform option for embedded conferencing with per-user authentication. Use "Other" only for self-hosted Jitsi instances without JaaS integration.
:::

---

### Scenario 4: Department Breakouts

**Goal:** Different departments use different platforms

**Steps:**
1. Create separate sessions for each department
2. Engineering breakout: Link to their Slack huddle
3. Sales breakout: Link to their Zoom room
4. Support breakout: Link to their MS Teams channel
5. Each team uses their preferred platform

---

## Troubleshooting

### Link Not Saving

**Problem:** URL doesn't save when you submit the form

**Solutions:**
- Verify URL starts with `https://`
- Check URL is properly formatted
- Ensure no extra spaces before/after URL
- Try copying URL fresh from your browser

---

### "Invalid URL" Error

**Problem:** Form rejects your URL

**Solutions:**
- Ensure protocol is HTTPS (not HTTP)
- Check for typos in the URL
- Verify URL has a valid domain (e.g., `.com`, `.org`, `.io`)
- Remove any trailing spaces or special characters

---

### Button Not Working

**Problem:** "Open Stream" button doesn't open anything

**Solutions:**
- Check browser popup blocker settings
- Try opening in a different browser
- Verify the URL is still valid/active
- Check if the external platform requires authentication

---

### External Platform Issues

**Problem:** Platform loads but doesn't work properly

**Solutions:**
- This is an issue with the external platform, not Atria
- Check the external platform's requirements (browser, plugins, etc.)
- Ensure attendees have necessary accounts/permissions
- Contact the external platform's support

---

## Best Practices

### URL Management

- **Test links** - Verify URLs work before your event
- **Use permanent links** - Avoid links that expire quickly
- **Keep links updated** - If URLs change, update the session
- **Consider shortened URLs** - If the full URL is very long, consider a URL shortener for cleaner display

### Communication

- **Inform attendees** - Let them know they'll leave Atria for this session
- **Provide instructions** - Include any special requirements (apps, accounts)
- **Mention platform** - In session description, note which platform they'll join
- **Include backup** - Provide alternative contact if link issues occur

### Security

- **HTTPS only** - Never use HTTP links (Atria blocks them anyway)
- **Trusted platforms** - Only link to reputable services
- **Access control** - Use the external platform's security features
- **Privacy notice** - Remind attendees they're leaving Atria

---

## Limitations

### Current Limitations

- Does not embed external platforms (opens in new tab)
- No integration with external platform features
- No analytics or tracking through Atria
- URL validation is basic (format only, not accessibility)

### By Design

- **Simple link** - Intentionally minimal to support any platform
- **External control** - Security/features managed by external platform
- **No authentication** - Atria doesn't authenticate with external platforms

---

## Comparison with Other Platforms

| Feature | Other/External | Zoom | Jitsi |
|---------|---------------|------|-------|
| **Opens In** | New tab | New window/app | Embedded |
| **Setup** | Just paste URL | Paste URL + passcode | Room name + credentials |
| **Credentials** | Not needed | Not needed | Required |
| **Any Platform** | Yes | Zoom only | JaaS only |
| **Atria Features** | Chat (if enabled) | Chat (if enabled) | Chat + embedded video |

---

## Related Topics

- [Video Platforms Overview](./platforms-overview) - Compare all platforms
- [Zoom Meetings](./zoom-meetings) - Alternative external meeting option
- [Jitsi Meetings (JaaS)](./jitsi-meetings) - Embedded conferencing
- [Creating Sessions](../sessions-speakers/creating-sessions) - Session management guide

---

:::tip Maximum Flexibility
The "Other" option gives you complete flexibility to link to any platform. Use it when Atria's direct integrations don't cover your needs, or when different sessions require different external tools.
:::
