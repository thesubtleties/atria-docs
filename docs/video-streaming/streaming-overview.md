---
sidebar_position: 1
---

# Video Streaming Overview

Atria supports multiple video streaming platforms, giving you the flexibility to choose the best option for each session. Whether you need pre-recorded content, live streams, or interactive meetings, you can configure different platforms for different sessions based on your needs.

## Supported Platforms

Atria integrates with three video platforms:

- **[Vimeo](./vimeo-streaming)** - Embed pre-recorded or live Vimeo videos
- **[Mux](./mux-streaming)** - Professional video streaming with analytics and security options
- **[Zoom](./zoom-meetings)** - Live meeting integration for interactive sessions

You can use different platforms for different sessions within the same event. For example, use Mux for your keynote, Zoom for workshops, and Vimeo for pre-recorded talks.

---

## Platform Comparison

| Feature | Vimeo | Mux (PUBLIC) | Mux (SIGNED) | Zoom |
|---------|-------|--------------|--------------|------|
| **Use Case** | Pre-recorded content, live streams | Live streams, on-demand video | Secure live/VOD with analytics | Live meetings, workshops |
| **Playback** | Embedded player | Embedded player | Embedded player | Opens in new window/app |
| **Setup Complexity** | Simple | Simple | Moderate | Simple |
| **Organization Credentials** | Not required | Not required | **Signing key required** | Not required |
| **Viewer Analytics** | Through Vimeo | **Detailed (via Mux)** | **Detailed (via Mux)** | Through Zoom |
| **Security** | Vimeo privacy settings | Public (shareable links) | **Token-based, time-limited** | Zoom meeting security |
| **Video Sharing** | Can be shared | Can be shared | **Secure against unauthorized sharing** | Meeting-specific |
| **Interaction** | Atria chat (if enabled) | Atria chat (if enabled) | Atria chat (if enabled) | **Full two-way audio/video** |
| **Best For** | General video content | Public live/VOD hosting | High-value or sensitive content | Interactive sessions, Q&A |

---

## Choosing the Right Platform

### Use Vimeo When:
- You already host your videos on Vimeo
- You need a simple, straightforward video solution
- You want to use Vimeo's privacy and access controls
- Your content is pre-recorded or you're using Vimeo Live

**Example scenarios:**
- Pre-recorded conference talks
- Welcome videos
- Sponsor presentations
- Session recordings from previous events

**Learn more:** [Vimeo Streaming Guide](./vimeo-streaming)

---

### Use Mux (PUBLIC) When:
- You want professional video hosting without authentication
- You need a simple embed for publicly accessible content
- You want detailed analytics but don't need to prevent link sharing
- You're okay with anyone who has the link being able to watch

**Example scenarios:**
- Public conference sessions
- Marketing or promotional content
- General presentations that don't require tracking

**Learn more:** [Mux Streaming Guide](./mux-streaming)

---

### Use Mux (SIGNED) When:
- You want to ensure comprehensive analytics (prevents link sharing bypass)
- You need time-limited access to videos
- You want to prevent unauthorized video sharing
- You're hosting high-value or sensitive content
- You need to restrict playback to specific domains

**Example scenarios:**
- Premium paid content
- Internal company training
- Client-specific presentations
- Keynotes where you want to track engagement

**Requirements:**
- Your organization must have Mux credentials configured
- Learn how: [Organization Mux Credentials Setup](../core-concepts/organizations#mux-streaming-credentials)

**Learn more:** [Mux Streaming Guide](./mux-streaming)

---

### Use Zoom When:
- You need live, interactive sessions
- Attendees need to participate with audio/video
- You want real-time Q&A or discussion
- You're running workshops that require interaction

**Example scenarios:**
- Live workshops
- Interactive Q&A sessions
- Panel discussions with audience participation
- Small group breakouts
- Office hours or networking sessions

**Important:** Zoom integration displays a join button that opens Zoom in a new window or the Zoom app. It doesn't embed the meeting directly in Atria like video platforms do.

**Learn more:** [Zoom Meetings Guide](./zoom-meetings)

---

## Configuration Workflow

### For Event Organizers

1. **Set up credentials** (if using Mux SIGNED)
   - Configure your organization's Mux credentials
   - See: [Mux Credentials Setup](../core-concepts/organizations#mux-streaming-credentials)

2. **Create your sessions**
   - Go to **Event Admin** > **Sessions**
   - Create or edit a session
   - See: [Creating Sessions](../sessions-speakers/creating-sessions)

3. **Add streaming**
   - Select your streaming platform from the dropdown
   - Enter the required information (URL, meeting ID, etc.)
   - Save the session

### Platform-Specific Setup

Each platform has slightly different configuration:

- **Vimeo:** Paste your Vimeo video URL or video ID
- **Mux:** Enter your Mux Playback ID and choose PUBLIC or SIGNED
- **Zoom:** Enter your Zoom meeting URL or meeting ID (optionally include passcode)

The system automatically normalizes URLs, so you can paste full URLs or just IDs - both work.

---

## Mixing Platforms

You can use different platforms for different sessions in the same event. Common patterns:

**Conference Example:**
- Keynote: Mux SIGNED (track engagement, prevent sharing)
- Workshops: Zoom (interactive, live participation)
- Sponsor talks: Vimeo (they already host there)
- Pre-recorded presentations: Mux PUBLIC (simple hosting)

**Training Event Example:**
- Welcome session: Vimeo (simple, pre-recorded)
- Live training: Zoom (interactive, hands-on)
- Reference materials: Mux PUBLIC (easy access)

**Hybrid Event Example:**
- In-person talks: Mux SIGNED (stream to virtual attendees, track viewing)
- Virtual networking: Zoom (breakout rooms, interaction)
- Recorded content: Vimeo (familiar platform)

---

## Platform Limitations

### Current Limitations

**All platforms:**
- You can only have one streaming platform per session
- Platform selection is set when creating/editing the session

**Vimeo:**
- Must be publicly accessible or use Vimeo's privacy controls
- Requires valid Vimeo account and video hosting

**Mux:**
- SIGNED playback requires organization credentials
- Requires Mux account and video content uploaded to Mux

**Zoom:**
- Does not embed meeting in Atria (opens externally)
- Requires valid Zoom meeting (free or paid account)
- Meeting security is managed through Zoom settings

---

## Getting Help

### Platform-Specific Guides

For detailed setup instructions and troubleshooting:

- [Vimeo Streaming](./vimeo-streaming) - Full Vimeo integration guide
- [Mux Streaming](./mux-streaming) - Mux PUBLIC and SIGNED setup
- [Zoom Meetings](./zoom-meetings) - Zoom integration details

### Common Questions

**Q: Can I use other platforms like YouTube or Twitch?**
A: Currently, Atria supports Vimeo, Mux, and Zoom. Additional platforms may be considered based on community feedback and requests. If you have a specific platform need, please share it in [GitHub Discussions](https://github.com/thesubtleties/atria/discussions).

**Q: Can I change the platform after creating a session?**
A: Yes, you can edit the session and change the streaming platform. Previous streaming configuration will be cleared when you switch platforms.

**Q: Do I need credentials for all platforms?**
A: No. Only Mux SIGNED requires organization credentials. Vimeo, Mux PUBLIC, and Zoom work without additional setup.

**Q: Can different sessions use different Mux playback policies?**
A: Yes. You can have some sessions using Mux PUBLIC and others using Mux SIGNED, as long as your organization has Mux credentials configured for SIGNED sessions.

**Q: How do attendees watch the videos?**
A: Vimeo and Mux videos are embedded directly on the session page. Zoom displays a join button that opens the meeting in a new window or the Zoom app.

---

## Related Topics

- [Creating Sessions](../sessions-speakers/creating-sessions) - How to create and manage sessions
- [Organizations](../core-concepts/organizations) - Organization settings and credentials
- [Managing Speakers](../sessions-speakers/managing-speakers) - Add speakers to your sessions

---

:::tip Choose What Works For You
You don't have to use the same platform for every session. Mix and match based on your content type, security needs, and interaction requirements. Start with the simplest option (Vimeo or Mux PUBLIC) and upgrade to more advanced features (Mux SIGNED, Zoom) as needed.
:::
