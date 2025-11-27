---
sidebar_position: 4
---

# Zoom Meetings

Zoom integration allows you to connect live, interactive Zoom meetings to your Atria sessions. Perfect for workshops, Q&A sessions, and any event where attendees need to participate with audio and video.

## When to Use Zoom

Zoom is ideal when:
- You need live, two-way interaction with attendees
- You want participants to share audio and video
- You're running hands-on workshops or training
- You need breakout rooms or interactive features
- You want real-time Q&A and discussion

**Best for:** Workshops, interactive sessions, panel discussions with audience participation, office hours

---

## How Zoom Integration Works

Unlike Vimeo and Mux (which embed videos directly in Atria), Zoom integration displays a **join button** on your session page. When attendees click the button, Zoom opens in a new window or the Zoom app.

**What attendees see:**
- Branded Zoom join card with your meeting details
- Passcode displayed (if you provide one)
- "Join Zoom Meeting" button
- Meeting opens in browser or Zoom app when clicked

**Important:** This is not an embedded meeting - attendees leave Atria to join the Zoom meeting.

---

## Prerequisites

To add Zoom meetings to your sessions:

1. **Zoom Account** - Free or paid Zoom account
2. **Zoom Meeting** - Scheduled meeting or personal meeting room
3. **Meeting URL or ID** - From your Zoom account

:::note Zoom Account Tiers
Atria works with all Zoom account types (Free, Pro, Business, Enterprise). Meeting duration limits are based on your Zoom account tier, not Atria.
:::

---

## Adding Zoom to a Session

### Step 1: Create Your Zoom Meeting

1. Log into Zoom
2. Schedule a new meeting (or use your personal meeting room)
3. Configure meeting settings (security, waiting room, etc.)
4. Copy the meeting URL or meeting ID

**Optional:** Set a passcode for additional security

###Step 2: Configure Your Session in Atria

1. Go to **Event Admin** > **Sessions**
2. Create a new session or edit an existing one
3. Find the **Streaming Platform** dropdown
4. Select **Zoom**
5. In the **Zoom Meeting ID/URL** field, enter:
   - Full Zoom URL: `https://zoom.us/j/1234567890?pwd=abc123`
   - Or just the meeting ID: `123 456 7890`
6. **(Optional)** In the **Zoom Passcode** field, enter the passcode
   - This displays the passcode on the join card for attendees
   - The passcode can also be included in the URL
7. Save the session

Attendees will see a join button on the session page.

---

## URL Formats

Atria accepts multiple Zoom URL and ID formats:

| Format | Example | Works? |
|--------|---------|--------|
| **Full URL with password** | `https://zoom.us/j/1234567890?pwd=abc123` | Yes |
| **URL without password** | `https://zoom.us/j/1234567890` | Yes |
| **Meeting ID with spaces** | `123 456 7890` | Yes |
| **Meeting ID with dashes** | `123-456-7890` | Yes |
| **Raw meeting ID** | `1234567890` | Yes |

The system automatically normalizes all formats into a proper Zoom URL.

:::tip Passcode Handling
If your Zoom URL includes a password parameter (`?pwd=abc123`), Atria automatically extracts it. You can also enter it separately in the Passcode field for clearer display to attendees.
:::

---

## Meeting Security

### Zoom Security Settings

Configure security in Zoom before your event:

**Recommended settings:**
- **Passcode:** Enable for additional security
- **Waiting Room:** Enable to admit attendees manually
- **Lock meeting:** Lock once all expected attendees join
- **Screen sharing:** Limit to host only (for presentations)

**For public events:**
- Disable waiting room for easier access
- Use passcode for basic security
- Monitor participants list for uninvited guests

**For private events:**
- Enable waiting room to vet attendees
- Use complex passcode
- Enable registration requirement
- Disable join before host

:::warning Security Is Managed in Zoom
Atria provides the join button, but all security features (passcode, waiting room, participant controls) are managed in your Zoom account, not Atria.
:::

---

## Common Scenarios

### Scenario 1: Workshop with Interactive Exercises

**Goal:** Run a hands-on coding workshop where attendees share screens

**Steps:**
1. Create a Zoom meeting with screen sharing enabled for all
2. Set a passcode for security
3. Create your session in Atria
4. Select Zoom as streaming platform
5. Add meeting URL and passcode
6. During the session, use Zoom's features:
   - Breakout rooms for group work
   - Screen sharing for demonstrations
   - Chat for questions

---

### Scenario 2: Panel Q&A with Audience

**Goal:** Panel discussion where audience can ask questions via audio

**Steps:**
1. Schedule Zoom meeting
2. Enable "Allow participants to unmute themselves"
3. Add meeting to your Atria session
4. During the panel:
   - Panelists share video
   - Audience raises hand to ask questions
   - Host unmutes audience members for Q&A

---

### Scenario 3: Office Hours

**Goal:** Informal drop-in session for attendees to ask questions

**Steps:**
1. Use your Zoom Personal Meeting Room (always the same URL)
2. Add the PMR URL to your Atria session
3. Enable waiting room to admit attendees individually
4. Keep the session open for the scheduled time
5. Attendees can drop in and out as needed

---

### Scenario 4: Recurring Weekly Sessions

**Goal:** Weekly training sessions using the same Zoom meeting

**Steps:**
1. Create a recurring Zoom meeting
2. Copy the recurring meeting URL
3. Create multiple sessions in Atria (one per week)
4. Use the same Zoom URL for all sessions
5. Attendees use the same link each week

---

## Troubleshooting

### Join Button Not Appearing

**Problem:** Added Zoom meeting but join button doesn't show

**Solutions:**
- Check that "Zoom" is selected as the streaming platform
- Verify you saved the session after entering meeting details
- Ensure meeting ID/URL field isn't empty
- Refresh the session page

---

### "Invalid Meeting ID" Error

**Problem:** Meeting ID not recognized

**Solutions:**
- Verify the meeting ID is correct (check Zoom account)
- Try pasting the full Zoom URL instead of just the ID
- Remove any extra spaces or characters
- Ensure the meeting hasn't been deleted in Zoom
- Check that meeting is scheduled for the correct date/time

---

### Passcode Not Displaying

**Problem:** Passcode isn't showing on the join card

**Solutions:**
- Enter the passcode in the separate Passcode field (not just in URL)
- If passcode is in URL (`?pwd=abc123`), it should auto-extract
- Save the session after adding the passcode
- Refresh the session page
- Check that you're not using the "embedded passcode" option in Zoom

---

### Meeting Opens But Says "Meeting Not Started"

**Problem:** Attendees can't join because host hasn't started

**Solutions:**
- Disable "Enable join before host" in Zoom settings
- Start the meeting before the session time
- Or enable "Allow participants to join before host" in Zoom
- Check that the meeting is scheduled for the correct time

---

### Waiting Room Causing Delays

**Problem:** Too many attendees stuck in waiting room

**Solutions:**
- For large public events, disable waiting room
- Assign co-hosts to help admit attendees
- Use passcode instead of waiting room for security
- Start admitting attendees 5-10 minutes early
- Consider upgrading Zoom account for larger webinar capacity

---

### Meeting Link Expired

**Problem:** Zoom link no longer works

**Solutions:**
- Check if the meeting was scheduled for a specific time (and has passed)
- Recurring meetings may have expiration dates
- Personal Meeting Room links don't expire
- Create a new meeting and update the session in Atria
- Use Zoom PMR for sessions that might need flexibility

---

### Zoom Opens in Browser Instead of App

**Problem:** Attendees want to use Zoom app but it opens in browser

**Solutions:**
- This is controlled by attendee's browser/system settings, not Atria
- Attendees can download Zoom app: zoom.us/download
- In browser join page, click "Launch Meeting" to open app
- Or click "Join from Your Browser" to stay in browser
- Some attendees prefer browser (no app install needed)

---

## Best Practices

### Before Your Event

- **Test the meeting** - Create a test Zoom meeting and verify the join button works
- **Schedule early** - Create Zoom meetings well before your event
- **Send reminders** - Include Zoom system requirements in pre-event emails
- **Assign co-hosts** - Add co-hosts in Zoom to help manage the meeting
- **Check settings** - Review Zoom security and feature settings

### During Your Event

- **Start early** - Begin Zoom meeting 10-15 minutes before session
- **Monitor participants** - Watch for uninvited guests or issues
- **Use waiting room strategically** - Vet attendees for small/private sessions
- **Record if needed** - Enable cloud recording for future reference
- **Have backup moderators** - Assign co-hosts to help with tech issues

### Security

- **Always use passcodes** - Even for public events
- **Lock when full** - Lock meeting once expected attendees are in
- **Monitor participant list** - Remove uninvited or disruptive participants
- **Control screen sharing** - Limit to host/co-hosts unless collaboration needed
- **Disable file transfer** - Prevent sharing of unwanted files

### For Large Events

- **Consider Zoom Webinars** - For 100+ attendees (requires paid tier)
- **Use registration** - Collect attendee info and pre-approve participants
- **Disable participant video** - Reduce bandwidth and distractions
- **Use Q&A feature** - More organized than unmuting for questions
- **Enable live streaming** - Stream to YouTube/Facebook for larger reach

---

## Zoom Account & Pricing

Atria works with all Zoom account types, from free to enterprise plans.

**View Zoom pricing:** [zoom.us/pricing](https://zoom.us/pricing)

Zoom offers various plans with different participant limits, meeting durations, and features. Free accounts work for short meetings (40 minutes for groups), while paid tiers unlock unlimited duration and cloud recording.

---

## Zoom vs Embedded Video

### When to Use Zoom

- Live interaction required
- Attendees need to speak/share video
- Workshops, Q&A, networking
- Real-time collaboration needed

### When to Use Vimeo/Mux Instead

- Pre-recorded content
- One-way broadcasting (no audience participation)
- Want video embedded in Atria
- Need to control who watches with analytics
- Content should be available on-demand

### Can You Use Both?

Yes! Common pattern:
- Use Zoom for live session
- Record the Zoom meeting
- Upload recording to Vimeo/Mux
- Add Vimeo/Mux video to same session
- Attendees can watch recording later

---

## Zoom Cloud Recordings

If you enable cloud recording in Zoom:

**What happens:**
- Zoom records the meeting to Zoom cloud
- Recording available in your Zoom account after meeting
- Zoom provides a shareable link to the recording
- Recordings can be downloaded

**Making recordings available in Atria:**
1. Download the recording from Zoom
2. Upload to Vimeo or Mux
3. Edit your session in Atria
4. Change the streaming platform from Zoom to Vimeo or Mux
5. Add the video URL/playback ID
6. Save - the same session now shows the recording instead of the join button

:::tip Reuse the Same Session
You can keep using the same session for both the live Zoom meeting and the recording. Just switch the platform and update the stream URL after uploading the recording to Vimeo/Mux.
:::

:::note Future Feature
Automatic Zoom cloud recording integration is being considered for future releases.
:::

---

## Limitations

### Current Limitations

- Zoom meeting opens externally (not embedded in Atria)
- Meeting security managed in Zoom, not Atria
- No automatic import of Zoom cloud recordings
- Attendee tracking happens in Zoom, not Atria
- Meeting duration limits based on Zoom account tier

### Zoom Platform Limitations

- Free accounts: 40-minute limit for 3+ participants
- Participant limits based on account tier
- Some features require paid Zoom accounts
- Cloud recording requires paid account

---

## Getting Zoom Meeting URLs

### From Zoom Web Portal

1. Go to zoom.us and sign in
2. Click "Meetings" in left sidebar
3. Click "Schedule a Meeting"
4. Fill in meeting details
5. Save
6. Copy the "Join URL" from meeting details

### From Zoom Desktop App

1. Open Zoom app
2. Click "Schedule"
3. Enter meeting details
4. Click "Schedule"
5. Copy meeting URL from confirmation

### Using Personal Meeting Room

1. Sign in to zoom.us
2. Go to "Meetings" > "Personal Room"
3. Copy your PMR URL
4. This URL never changes - reuse for multiple sessions

---

## Related Topics

- [Video Platforms Overview](./platforms-overview) - Compare all platforms
- [Vimeo Streaming](./vimeo-streaming) - Embedded video alternative
- [Mux Streaming](./mux-streaming) - Embedded video with analytics
- [Creating Sessions](../sessions-speakers/creating-sessions) - Session management guide

---

:::tip Live Interaction
Zoom and Jitsi are the two platforms that provide two-way interaction. Zoom opens externally, while Jitsi embeds directly in Atria. Choose based on whether you want attendees to stay in-platform (Jitsi) or prefer external Zoom (this guide).
:::
