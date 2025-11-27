---
sidebar_position: 3
---

# Mux Streaming

Mux is a professional video streaming platform that offers high-quality live streaming and video-on-demand (VOD) delivery with optional security and analytics features. Atria supports both public and secure (signed) Mux playback.

## When to Use Mux

Mux is ideal when:
- You need professional live streaming or VOD infrastructure
- You want detailed viewer analytics (who watched, when, for how long)
- You need to prevent unauthorized video sharing
- You want time-limited access to content
- You're hosting high-value or sensitive content

**Best for:** Keynotes with tracking, premium content, live streams, client presentations, internal training

---

## Mux Playback Policies

Mux offers two playback policies:

### PUBLIC Playback
- Anyone with the link can watch
- No authentication required
- No organization credentials needed
- Basic analytics through Mux dashboard

**Use when:** You want simple video hosting without viewer tracking

### SIGNED Playback
- Token-based authentication
- Time-limited access (tokens expire)
- Detailed viewer analytics
- Prevents unauthorized sharing
- **Requires organization Mux credentials**

**Use when:** You need to track viewers or secure your content

---

## PUBLIC vs SIGNED Comparison

| Feature | PUBLIC | SIGNED |
|---------|--------|--------|
| **Setup** | Simple | Requires credentials |
| **Who Can Watch** | Anyone with link | Authorized viewers only |
| **Analytics** | Basic (in Mux dashboard) | Detailed (who, when, duration) |
| **Video Sharing** | Can be shared freely | Secure, time-limited |
| **Token Expiration** | N/A | Auto-expires after session |
| **Live & VOD** | Both supported | Both supported |
| **Best For** | Public content | Premium/sensitive content |

:::tip Start Simple
If you're new to Mux, start with PUBLIC playback to get familiar with the platform. Upgrade to SIGNED when you need security and detailed analytics.
:::

---

## Prerequisites

### For PUBLIC Playback

1. **Mux Account** - Free or paid Mux account
2. **Video Content** - Either:
   - Video uploaded to Mux (VOD)
   - Live stream configured in Mux
3. **Playback ID** - Get the playback ID from Mux

### For SIGNED Playback

Everything above, plus:
1. **Organization Credentials** - Mux signing credentials configured in Atria
2. **Signing Key** - Generated in your Mux dashboard

Learn how to set up credentials: [Organization Mux Credentials](../core-concepts/organizations#mux-streaming-credentials)

---

## Live Streaming vs VOD

### Live Streaming with Mux

Mux supports live streaming for real-time broadcasts:

**Setup:**
1. Create a live stream in your Mux dashboard
2. Get the stream's playback ID
3. Configure your streaming software (OBS, vMix, etc.) with Mux stream key
4. Add the playback ID to your Atria session
5. Start streaming - video appears live on the session page

**Important:** When your live stream ends, Mux creates a **new VOD asset** from the recording. This VOD asset **may have a different playback ID** than the live stream. If you want the recording available after the stream, you may need to manually update your session with the new VOD asset's playback ID.

### Video-on-Demand (VOD)

For pre-recorded or post-live content:

**Setup:**
1. Upload your video directly to Mux (or use VOD created from live stream)
2. Get the asset's playback ID
3. Add the playback ID to your Atria session
4. Video is immediately available on-demand

:::note Live Stream to VOD Transition
Unlike Vimeo (which automatically transitions the same URL from live → VOD), Mux creates a separate VOD asset with a potentially different playback ID. Check your Mux dashboard after your live stream ends to get the correct VOD playback ID if needed.
:::

---

## Adding Mux to a Session

### Step 1: Get Your Mux Playback ID

From Mux, copy one of these:
- **Stream URL:** `https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe.m3u8`
- **Playback ID:** `DS00Spx1CV902MCtPj5WknGlR102V5HFkDe`

Both formats work - Atria automatically extracts the playback ID.

**For live streams:** Use the live stream's playback ID
**For VOD:** Use the asset's playback ID

### Step 2: Configure Your Session

1. Go to **Event Admin** > **Sessions**
2. Create a new session or edit an existing one
3. Find the **Streaming Platform** dropdown
4. Select **Mux**
5. In the **Stream URL** field, paste your Mux URL or playback ID
6. Select **Playback Policy**:
   - **PUBLIC** - Simple, no authentication
   - **SIGNED** - Secure with analytics (requires org credentials)
7. Save the session

The video will be embedded on the session page for attendees to watch.

---

## URL Formats

Atria accepts multiple Mux URL formats:

| Format | Example | Works? |
|--------|---------|--------|
| **Stream URL** | `https://stream.mux.com/ABC123...m3u8` | Yes |
| **Just Playback ID** | `ABC123def456GHI789` | Yes |

The system extracts the playback ID and stores it.

:::note Playback ID Length
Mux playback IDs are typically long alphanumeric strings. Make sure you copy the entire ID.
:::

---

## SIGNED Playback Features

### What You Get with SIGNED

**Security Benefits:**
- Videos cannot be shared outside your event
- Access automatically expires after the session ends
- Each viewer gets a unique, time-limited access token
- Prevents hotlinking and unauthorized embedding

**Analytics Benefits:**
- Track which attendees watched the video
- See how long each person watched
- Identify engagement levels
- View timestamp data (when they started, paused, etc.)

### How Token Expiration Works

Atria automatically calculates token expiration based on your session:
- **Tokens expire:** Session end time + 1 hour
- **Token refresh:** Tokens refresh when the page reloads
- **No manual management:** Everything is handled automatically

**Example:**
- Session runs 2:00 PM - 3:00 PM
- Tokens expire at 4:00 PM
- Attendees can watch during and shortly after the session
- After 4:00 PM, tokens expire and videos become inaccessible

**Additional Security:**
- You can restrict playback to specific domains using [Mux Playback Restrictions](https://www.mux.com/docs/api-reference/video/playback-restrictions)
- Combined with SIGNED playback, this ensures videos only play on your Atria instance
- Even if someone shares a login, videos won't play on unauthorized sites

:::tip Why Expiration Matters
Token expiration prevents sharing of video links after your event. Even if someone shares a link, it won't work once the token expires, protecting your content.
:::

---

## Setting Up Organization Credentials

To use SIGNED playback, your organization needs a Mux signing key.

**Required:** Mux Signing Key (for SIGNED playback security)
**Optional:** Mux Token ID & Secret (for future Atria-side analytics features)

For complete setup instructions, see: [Organization Mux Credentials Setup](../core-concepts/organizations#mux-streaming-credentials)

:::warning Credentials Are Encrypted
Your Mux credentials are encrypted using Fernet encryption before being stored. Credentials are NEVER viewable after entry - you must enter new ones to update.
:::

---

## Embedding Behavior

### Player Features

The Mux player embedded in Atria includes:
- High-quality adaptive streaming
- Play/pause controls
- Volume control
- Automatic quality adjustment based on connection
- Fullscreen mode
- Seeking (timeline scrubbing)
- Support for both live streams and VOD

### Analytics Tracking

Both PUBLIC and SIGNED playback provide detailed analytics through your Mux dashboard.

**What's tracked:**
- Viewer information (name only - email not sent for privacy)
- Session context (event name, session title)
- View duration and engagement
- Playback events (play, pause, seek)

**SIGNED advantage:** Prevents link sharing that could bypass analytics, ensuring more comprehensive tracking.

View analytics in your Mux dashboard. You may need to configure [custom metadata dimensions](https://www.mux.com/docs/guides/extend-data-with-custom-metadata) in Mux to see viewer names.

---

## Common Scenarios

### Scenario 1: Simple VOD Hosting (PUBLIC)

**Goal:** Host a pre-recorded conference session

**Steps:**
1. Upload your video to Mux
2. Copy the asset's playback ID
3. Edit your session in Atria
4. Select "Mux" as streaming platform
5. Paste the playback ID
6. Select **PUBLIC** playback policy
7. Save - video is immediately available

---

### Scenario 2: Live Stream with VOD Fallback

**Goal:** Stream live, then provide VOD recording afterward

**Steps:**
1. Create a live stream in Mux dashboard
2. Copy the live stream's playback ID
3. Add playback ID to your Atria session
4. Start your live stream
5. Attendees watch live
6. **After stream ends:** Check Mux dashboard for new VOD asset
7. **If playback ID changed:** Update session with new VOD playback ID
8. Attendees can now watch the recording

:::tip Verify Playback ID After Live Stream
After your live stream ends, check your Mux dashboard to confirm whether the VOD asset uses the same playback ID. If it's different, update your session to point to the new VOD asset.
:::

---

### Scenario 3: Secure Keynote with Analytics (SIGNED)

**Goal:** Track who watches your keynote and prevent sharing

**Steps:**
1. Ensure your organization has Mux credentials set up
2. Upload your keynote video to Mux (or configure live stream)
3. Edit your session in Atria
4. Select "Mux" as streaming platform
5. Paste the Mux playback ID
6. Select **SIGNED** playback policy
7. Save the session
8. Atria generates secure tokens automatically
9. View analytics in your Mux dashboard

---

### Scenario 4: Premium Training Content

**Goal:** Protect paid training videos with time-limited access

**Steps:**
1. Set up Mux credentials for your organization
2. Upload all training videos to Mux
3. Create sessions for each training module
4. Use **SIGNED** playback for all sessions
5. Tokens expire after each session ends
6. Track completion and engagement in Mux

---

## Troubleshooting

### Video Not Appearing

**Problem:** Added Mux playback ID but video doesn't show

**Solutions:**
- Verify the playback ID is correct
- Check that "Mux" is selected as the streaming platform
- Ensure the asset/stream exists in your Mux account
- For VOD: Verify the asset is ready (not still processing)
- For live: Verify the stream has started
- Save the session after entering the playback ID
- Refresh the session page

---

### Live Stream Ended, Recording Not Available

**Problem:** Live stream worked, but VOD isn't showing afterward

**Solutions:**
- Check Mux dashboard for the new VOD asset created from live stream
- Verify the VOD asset's playback ID
- Update your Atria session if the playback ID changed
- Wait for Mux to finish processing the recording (can take a few minutes)
- Ensure recording was enabled for the live stream in Mux

---

### "SIGNED playback requires credentials" Error

**Problem:** Selected SIGNED but see an error about missing credentials

**Solutions:**
- Verify your organization has Mux credentials configured
- Check that all four credential fields are filled in
- Ensure you're an organization admin or owner
- Try re-entering the credentials
- Verify credentials are correct in your Mux dashboard

---

### Video Playback Errors

**Problem:** Video player shows an error or won't load

**Solutions:**
- Check the playback ID is correct (no extra spaces)
- Verify the video is ready in Mux (not still processing)
- For live streams: Ensure the stream has started
- For SIGNED: Ensure credentials are correctly configured
- Check browser console for specific error messages
- Try PUBLIC playback first to isolate the issue

---

### Analytics Not Showing

**Problem:** Using SIGNED but not seeing analytics in Mux

**Solutions:**
- Analytics only work with SIGNED playback (not PUBLIC)
- Check your Mux dashboard (not Atria - analytics are in Mux)
- Wait a few minutes for data to populate
- Ensure someone actually watched the video
- Verify your Mux account has analytics enabled

---

### Token Expired Error

**Problem:** Attendees see "token expired" message

**Solutions:**
- Check if the session has ended (tokens expire session end + 1 hour)
- This is expected behavior for post-event security
- If session is still active, try refreshing the page
- Verify system clock is accurate on the server
- Tokens auto-refresh while watching - expired tokens mean session ended

---

### Quality Issues / Buffering

**Problem:** Video quality is poor or constantly buffering

**Solutions:**
- Mux automatically adjusts quality based on connection speed
- Check attendee internet connection
- Upload higher quality source video to Mux
- Wait for Mux to finish processing all quality renditions
- For live: Check your streaming software settings and upload bandwidth
- Verify Mux status at status.mux.com

---

### Playback ID Not Recognized

**Problem:** Error says playback ID is invalid

**Solutions:**
- Verify you copied the entire playback ID (they're long!)
- Check for extra spaces at the beginning or end
- Ensure the asset/stream exists in your Mux account
- Try pasting the full stream URL instead of just the ID
- Verify the asset is not deleted in Mux
- For post-live VOD: Confirm you're using the VOD asset ID, not the live stream ID

---

## Best Practices

### Before Your Event

- Upload early - Give Mux time to process multiple quality versions
- Test both policies - Try PUBLIC first, then SIGNED if you need it
- Verify credentials - Ensure SIGNED setup works before the event
- Check analytics - Confirm analytics are flowing to Mux dashboard
- Test on devices - Verify playback works on desktop, mobile, tablets
- Test live streams - Do a test stream before your live event

### For Live Streaming

- Test your setup - Do a test stream well before the event
- Check bandwidth - Ensure stable upload speed for streaming
- Start early - Begin stream 5-10 minutes before session time
- Monitor the stream - Have someone verify the stream is working
- Plan for VOD - Know whether you'll need to swap playback IDs after

### Choosing Playback Policies

- PUBLIC for: Open content, marketing videos, public sessions
- SIGNED for: Premium content, internal training, sensitive material
- Mix both: Use different policies for different sessions

### Security

- Protect credentials - Only admins/owners should access Mux credentials
- Rotate keys - Periodically update signing keys in Mux
- Monitor analytics - Check for unusual viewing patterns
- Use SIGNED for sensitive content - Don't use PUBLIC for private videos

### Performance

- High-quality uploads - Upload the best quality you have
- Let Mux process - Don't add videos immediately after upload
- Monitor Mux status - Check status.mux.com during live events
- Have backups - Keep local copies of critical videos

---

## Mux Account & Pricing

Atria works with all Mux account tiers, from free to enterprise plans.

**View Mux pricing:** [mux.com/pricing/video](https://www.mux.com/pricing/video)

Mux offers flexible, usage-based pricing for video streaming and analytics. Their free tier is great for testing, and paid tiers provide additional features, support, and volume discounts.

---

## Understanding the BYOA Model

**BYOA = Bring Your Own Account**

Atria doesn't host your videos. Instead:
- You maintain your own Mux account
- You control your video content and settings
- You manage your Mux billing and limits
- Atria provides the integration and player

**Benefits:**
- Full control over your content
- Direct access to Mux analytics
- No Atria middleman for video delivery
- Scale based on your Mux account

---

## Limitations

### Current Limitations

- Playback policy is set per-session (all viewers use same policy)
- Analytics are viewed in Mux dashboard, not Atria
- Requires Mux account and separate billing
- SIGNED requires organization credential setup
- Live stream → VOD may require manual playback ID update

### Mux Platform Limitations

- Processing time for newly uploaded videos
- Account tier limits (storage, bandwidth)
- Some features require paid Mux accounts
- Live stream VOD assets may have different playback IDs

---

## Getting Mux Credentials

### Where to Find Them

**In your Mux Dashboard:**

1. **Mux Token ID & Secret:**
   - Go to Settings > Access Tokens
   - Create a new access token
   - Copy the Token ID and Token Secret

2. **Signing Key ID & Private Key:**
   - Go to Settings > Signing Keys
   - Create a new signing key
   - Copy the Key ID and Private Key

:::danger Save Your Credentials
Mux only shows the Token Secret and Private Key once when created. Save them securely - you can't retrieve them later. If lost, you'll need to generate new credentials.
:::

---

## Related Topics

- [Video Platforms Overview](./platforms-overview) - Compare all platforms
- [Organizations](../core-concepts/organizations#mux-streaming-credentials) - Set up Mux credentials
- [Vimeo Streaming](./vimeo-streaming) - Alternative platform with auto VOD transition
- [Creating Sessions](../sessions-speakers/creating-sessions) - Session management guide

---

:::tip Professional Video Delivery
Mux offers professional-grade video streaming with excellent reliability and performance for both live streams and VOD. If you need detailed analytics or secure video delivery, Mux SIGNED playback is the best choice.
:::
