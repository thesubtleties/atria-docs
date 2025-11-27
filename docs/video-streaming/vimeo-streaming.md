---
sidebar_position: 2
---

# Vimeo Streaming

Vimeo is a popular video hosting platform that integrates seamlessly with Atria. Use Vimeo for pre-recorded videos or live streams that you host on Vimeo Live.

## When to Use Vimeo

Vimeo is ideal when:
- You already host your videos on Vimeo
- You need a simple, reliable video solution
- You want to use Vimeo's privacy and access controls
- You have pre-recorded content or Vimeo Live streams
- You prefer a platform focused on professional video quality

**Best for:** Pre-recorded talks, welcome videos, sponsor presentations, general video content

---

## Prerequisites

Before adding Vimeo videos to your sessions:

1. **Vimeo Account** - You need a Vimeo account (free or paid)
2. **Video Content** - Either:
   - Video uploaded to Vimeo (for VOD)
   - Live stream configured in Vimeo Live
3. **Privacy Settings** - Video must be accessible with the URL you provide

:::note Privacy Settings & Live Streaming
Configure your video privacy settings in Vimeo before adding to Atria. The video must be accessible to your attendees based on the privacy option you choose in Vimeo.

For live streams, Vimeo automatically converts the same URL to VOD after your stream ends, so you don't need to update your session.
:::

---

## Adding Vimeo to a Session

### Step 1: Get Your Vimeo URL

From Vimeo, copy one of these:
- **Video URL:** `https://vimeo.com/123456789`
- **Player URL:** `https://player.vimeo.com/video/123456789`
- **Just the ID:** `123456789`

All formats work - Atria automatically extracts the video ID.

### Step 2: Configure Your Session

1. Go to **Event Admin** > **Sessions**
2. Create a new session or edit an existing one
3. Find the **Streaming Platform** dropdown
4. Select **Vimeo**
5. In the **Stream URL** field, paste your Vimeo URL or ID
6. Save the session

The video will be embedded on the session page for attendees to watch.

---

## URL Formats

Atria accepts multiple Vimeo URL formats and automatically normalizes them:

| Format | Example | Works? |
|--------|---------|--------|
| **Standard URL** | `https://vimeo.com/123456789` | Yes |
| **Player URL** | `https://player.vimeo.com/video/123456789` | Yes |
| **Event URL** | `https://vimeo.com/event/123456` | Yes |
| **Just Video ID** | `123456789` | Yes |
| **With Parameters** | `https://vimeo.com/123456789?quality=auto` | Yes (parameters ignored) |

The system extracts the video ID and stores it, so you can paste any of these formats.

---

## Vimeo Privacy Settings

Control who can watch your Vimeo videos:

### Public
- Anyone with the link can watch
- Video may appear in Vimeo search results
- Best for: Openly accessible conference sessions

### Unlisted
- Anyone with the link can watch
- Video does not appear in search results
- Best for: Most event sessions (semi-private)

### Password Protected
- Viewers need a password to watch
- Password is set in Vimeo, not Atria
- Best for: Content requiring an extra layer of security

:::tip Recommended Setting
For most events, use **Unlisted** videos. This keeps your content semi-private (only people with the link can watch) without requiring password management.
:::

---

## Vimeo Live Streaming

You can use Vimeo Live for real-time streaming:

### Setup for Vimeo Live

1. Create a Vimeo Live event in your Vimeo account
2. Set up your streaming software (OBS, vMix, etc.) with Vimeo's stream key
3. Copy your Vimeo Live event URL
4. Add the URL to your Atria session
5. Start your stream in your streaming software

### During Your Event

- The live stream embeds in Atria automatically
- Attendees watch on the session page
- Vimeo handles buffering and quality adjustment
- Stream is embedded at your video's native resolution

:::note Recording
If you enable recording in Vimeo Live, the recording becomes available on the same URL after your stream ends. Your session will automatically show the recording once available.
:::

---

## Embedding Behavior

### Player Features

When embedded in Atria, the Vimeo player includes:
- Play/pause controls
- Volume control
- Quality selection (if multiple qualities available)
- Fullscreen mode
- Playback speed control (if enabled in Vimeo)

### What's Not Included

- Vimeo comments (not embedded)
- Vimeo likes/stats (not visible to viewers)
- Suggested videos (not shown)

---

## Common Scenarios

### Scenario 1: Pre-Recorded Conference Talk

**Goal:** Add a pre-recorded presentation to your schedule

**Steps:**
1. Upload your video to Vimeo
2. Set privacy to "Unlisted"
3. Copy the video URL
4. Edit your session in Atria
5. Select "Vimeo" as streaming platform
6. Paste the URL
7. Video is immediately available on the session page

---

### Scenario 2: Live Keynote with Vimeo Live

**Goal:** Stream a live keynote to attendees

**Steps:**
1. Create Vimeo Live event
2. Configure your streaming software with Vimeo's stream key
3. Add the Vimeo Live URL to your Atria session
4. Test your stream before the event
5. Start streaming when ready
6. Attendees watch on the session page

---

### Scenario 3: Private Sponsor Content

**Goal:** Share a sponsor presentation only with event attendees

**Steps:**
1. Upload video to Vimeo
2. Set privacy to "Password Protected"
3. Share the password with your attendees (via email, event page, etc.)
4. Add the Vimeo URL to your Atria session
5. Attendees enter the password when they watch

---

## Troubleshooting

### Video Not Appearing

**Problem:** Added Vimeo URL but video doesn't show on session page

**Solutions:**
- Verify the URL is correct (try opening it in a new browser tab)
- Check that "Vimeo" is selected as the streaming platform
- Ensure the video exists and hasn't been deleted from Vimeo
- Save the session after entering the URL
- Refresh the session page

---

### "This Video is Private" Error

**Problem:** Attendees see "This video is private" message

**Solutions:**
- Check your Vimeo privacy settings
- If using "Hide from Vimeo," change to "Unlisted" or "Public"
- If password protected, share the password with attendees
- Verify the video isn't set to "Only me" visibility
- Check domain restrictions in Vimeo (ensure Atria domain is allowed)

---

### Video Quality Issues

**Problem:** Video quality is poor or buffering

**Solutions:**
- Upload higher quality source video to Vimeo
- Allow Vimeo time to process multiple quality versions
- Check attendee internet connection
- Vimeo automatically adjusts quality based on connection speed
- Consider Vimeo Pro or higher for better quality options

---

### Wrong Video Showing

**Problem:** Different video appears than expected

**Solutions:**
- Double-check the video ID in the URL
- Ensure you copied the correct Vimeo URL
- Edit the session and verify the Stream URL field
- Try pasting the full Vimeo URL instead of just the ID

---

### Live Stream Not Starting

**Problem:** Vimeo Live stream doesn't appear

**Solutions:**
- Verify you've started the stream in your streaming software
- Check the stream key is correct in OBS/vMix/etc.
- Wait 10-30 seconds for the stream to start (processing delay)
- Refresh the session page
- Check Vimeo Live dashboard for connection status
- Test your stream before the event starts

---

### Playback Speed Control Missing

**Problem:** Can't change playback speed

**Solutions:**
- Playback speed is controlled by Vimeo settings, not Atria
- Enable playback speed in your Vimeo video settings
- Some Vimeo accounts may not have this feature
- Upgrade to Vimeo Pro or higher for additional player controls

---

## Best Practices

### Before Your Event

- **Upload early** - Give Vimeo time to process multiple quality versions
- **Test the embed** - Watch the video on your session page before the event
- **Check privacy** - Ensure privacy settings allow your attendees to watch
- **Test on mobile** - Verify video works on phones and tablets
- **Have a backup** - Keep a local copy of important videos

### Video Quality

- **Upload high quality** - Minimum 1080p for best results
- **Use recommended formats** - MP4 with H.264 video codec
- **Optimize file size** - Balance quality and upload time
- **Enable multiple qualities** - Let Vimeo generate multiple quality options

### For Live Streams

- **Test your setup** - Do a test stream before the event
- **Check your bandwidth** - Ensure stable internet for streaming
- **Start early** - Begin stream 5-10 minutes before session time
- **Have a backup plan** - Know what to do if the stream fails
- **Monitor the stream** - Have someone check the stream is working

---

## Vimeo Account & Pricing

Atria works with all Vimeo account tiers, from free to enterprise plans.

**Get started with Vimeo:** [vimeo.com/upgrade-plan](https://vimeo.com/upgrade-plan)

Vimeo offers various plans with different storage limits, live streaming capabilities, and advanced features. Choose the tier that matches your event size and video hosting needs.

---

## Limitations

### Current Limitations

- Vimeo privacy is managed in Vimeo, not Atria
- Comments and social features don't embed
- Viewer analytics are in Vimeo, not Atria
- Domain restrictions must allow your Atria deployment

### Vimeo Platform Limitations

- Upload limits based on account tier
- Processing time for high-quality videos
- Geographic restrictions (if you set them)
- Embedding restrictions (if you set them)

---

## Related Topics

- [Video Platforms Overview](./platforms-overview) - Compare all platforms
- [Mux Streaming](./mux-streaming) - Alternative with built-in analytics
- [Creating Sessions](../sessions-speakers/creating-sessions) - Session management guide

---

:::tip Simple and Reliable
Vimeo is the simplest streaming option in Atria. If you already use Vimeo or want straightforward video embedding without additional setup, Vimeo is a great choice.
:::
