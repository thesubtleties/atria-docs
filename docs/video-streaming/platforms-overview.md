---
sidebar_position: 1
---

# Video Platforms Overview

Atria supports multiple video and conferencing platforms, giving you the flexibility to choose the best option for each session. Whether you need pre-recorded content, live streams, or interactive meetings, you can configure different platforms for different sessions based on your needs.

## Supported Platforms

Atria integrates with five video/conferencing platforms:

- **[Vimeo](./vimeo-streaming)** - Embed pre-recorded or live Vimeo videos
- **[Mux](./mux-streaming)** - Professional video streaming with analytics and security options
- **[Zoom](./zoom-meetings)** - Live meeting integration (opens externally)
- **[Jitsi (JaaS)](./jitsi-meetings)** - Embedded video conferencing with per-user authentication
- **[Other/External](./other-external)** - Link to any external platform

You can use different platforms for different sessions within the same event. For example, use Mux for your keynote, Jitsi for workshops, Zoom for external meetings, and Vimeo for pre-recorded talks.

---

## Platform Comparison

| Feature | Vimeo | Mux (PUBLIC) | Mux (SIGNED) | Jitsi (JaaS) | Zoom | Other |
|---------|-------|--------------|--------------|--------------|------|-------|
| **Use Case** | Pre-recorded, live streams | Live streams, VOD | Secure live/VOD | Embedded conferencing | External meetings | Any external platform |
| **Playback** | Embedded player | Embedded player | Embedded player | **Embedded conferencing** | Opens externally | Opens externally |
| **Setup Complexity** | Simple | Simple | Moderate | Moderate | Simple | Simple |
| **Organization Credentials** | Not required | Not required | **Signing key** | **JaaS credentials** | Not required | Not required |
| **Viewer Analytics** | Through Vimeo | **Detailed (Mux)** | **Detailed (Mux)** | Through JaaS | Through Zoom | External platform |
| **Security** | Vimeo privacy | Public links | **Token-based** | **Per-user JWT tokens** | Zoom security | External platform |
| **Live Interaction** | No | No | No | **Yes (embedded)** | Yes (external) | Depends |
| **Moderator Controls** | N/A | N/A | N/A | **Recording, livestream** | Through Zoom | External platform |
| **Best For** | Video content | Public video | Secure video | **Interactive workshops** | External meetings | MS Teams, Google Meet, etc. |

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

**Important:** Zoom integration displays a join button that opens Zoom in a new window or the Zoom app. It doesn't embed the meeting directly in Atria.

**Learn more:** [Zoom Meetings Guide](./zoom-meetings)

---

### Use Jitsi (JaaS) When:
- You want **embedded** video conferencing (stays in Atria, unlike Zoom)
- You need per-user authentication and moderator controls
- Event admins/organizers should have recording and livestreaming capabilities
- You want interactive workshops without leaving the platform
- You prefer open-source conferencing technology

**Example scenarios:**
- Interactive workshops with hands-on exercises
- Team breakout sessions that stay embedded
- Q&A sessions with moderator controls
- Training sessions where admins can record

**Requirements:**
- Your organization must have JaaS credentials configured
- Learn how: [Organization JaaS Credentials Setup](../core-concepts/organizations#jitsi-jaas-credentials)

**Learn more:** [Jitsi Meetings (JaaS) Guide](./jitsi-meetings)

---

### Use Other/External When:
- You need to link to platforms Atria doesn't directly integrate
- Your organization uses MS Teams, Google Meet, or other services
- You have a self-hosted streaming solution
- You want flexibility to link to any HTTPS platform

**Example scenarios:**
- MS Teams meetings for corporate events
- Google Meet for organizations using Google Workspace
- Self-hosted Jitsi instances (non-JaaS)
- Custom or niche streaming platforms

**Important:** "Other" opens a link in a new browser tab, similar to Zoom. It does not embed the external platform.

**Learn more:** [Other/External Links Guide](./other-external)

---

## Configuration Workflow

### For Event Organizers

1. **Set up credentials** (if using Mux SIGNED or Jitsi)
   - For Mux SIGNED: Configure Mux signing key - [Mux Credentials Setup](../core-concepts/organizations#mux-streaming-credentials)
   - For Jitsi: Configure JaaS credentials - [JaaS Credentials Setup](../core-concepts/organizations#jitsi-jaas-credentials)

2. **Create your sessions**
   - Go to **Event Admin** > **Sessions**
   - Create or edit a session
   - See: [Creating Sessions](../sessions-speakers/creating-sessions)

3. **Add video/conferencing**
   - Select your platform from the dropdown
   - Enter the required information (URL, meeting ID, room name, etc.)
   - Save the session

### Platform-Specific Setup

Each platform has slightly different configuration:

- **Vimeo:** Paste your Vimeo video URL or video ID
- **Mux:** Enter your Mux Playback ID and choose PUBLIC or SIGNED
- **Zoom:** Enter your Zoom meeting URL or meeting ID (optionally include passcode)
- **Jitsi:** Enter a room name (3+ characters) - requires JaaS credentials
- **Other:** Enter any HTTPS URL to an external platform

The system automatically normalizes URLs where applicable (Vimeo, Mux, Zoom).

---

## Mixing Platforms

You can use different platforms for different sessions in the same event. Common patterns:

**Conference Example:**
- Keynote: Mux SIGNED (track engagement, prevent sharing)
- Workshops: Jitsi (embedded, moderator controls, stays in Atria)
- Sponsor talks: Vimeo (they already host there)
- Pre-recorded presentations: Mux PUBLIC (simple hosting)
- External sponsor meetings: Other (link to sponsor's platform)

**Training Event Example:**
- Welcome session: Vimeo (simple, pre-recorded)
- Live training: Jitsi (embedded, admins can record)
- Q&A sessions: Jitsi (interactive, moderator controls)
- Reference materials: Mux PUBLIC (easy access)

**Corporate Event Example:**
- All-hands meeting: Jitsi (embedded conferencing)
- Department breakouts: Other (link to MS Teams rooms)
- Recorded announcements: Mux SIGNED (track who watched)
- External client meetings: Zoom (they prefer Zoom)

---

## Platform Limitations

### Current Limitations

**All platforms:**
- You can only have one platform per session
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

**Jitsi (JaaS):**
- Requires JaaS account credentials (BYOA model)
- Per-user JWT tokens generated on-demand
- Recording and livestreaming features cost extra through JaaS
- Moderator permissions tied to Admin/Organizer event roles

**Other:**
- Opens externally (does not embed)
- Must be HTTPS URL
- Security and features managed by external platform
- No Atria integration beyond linking

---

## Getting Help

### Platform-Specific Guides

For detailed setup instructions and troubleshooting:

- [Vimeo Streaming](./vimeo-streaming) - Full Vimeo integration guide
- [Mux Streaming](./mux-streaming) - Mux PUBLIC and SIGNED setup
- [Zoom Meetings](./zoom-meetings) - Zoom integration details
- [Jitsi Meetings (JaaS)](./jitsi-meetings) - JaaS setup and moderator controls
- [Other/External](./other-external) - External platform linking

### Common Questions

**Q: Can I use platforms like YouTube or Twitch?**
A: Use the "Other" platform option to link to any HTTPS streaming service. YouTube and Twitch aren't directly integrated due to ad-related constraints, but you can link to them. Additional direct integrations may be considered based on community feedback in [GitHub Discussions](https://github.com/thesubtleties/atria/discussions).

**Q: Can I change the platform after creating a session?**
A: Yes, you can edit the session and change the platform. Previous configuration will be cleared when you switch platforms.

**Q: Do I need credentials for all platforms?**
A: No. Only **Mux SIGNED** and **Jitsi** require organization credentials. Vimeo, Mux PUBLIC, Zoom, and Other work without additional setup.

**Q: What's the difference between Jitsi and Zoom?**
A: Jitsi embeds directly in Atria (attendees stay on the platform), while Zoom opens in a new window. Jitsi also provides per-user JWT authentication and moderator controls tied to Atria event roles.

**Q: How do attendees watch/join?**
A: Vimeo, Mux, and Jitsi are embedded directly on the session page. Zoom and Other display buttons that open in a new window or app.

---

## Related Topics

- [Creating Sessions](../sessions-speakers/creating-sessions) - How to create and manage sessions
- [Organizations](../core-concepts/organizations) - Organization settings and credentials
- [Managing Speakers](../sessions-speakers/managing-speakers) - Add speakers to your sessions

---

:::tip Choose What Works For You
You don't have to use the same platform for every session. Mix and match based on your content type, security needs, and interaction requirements. Start with the simplest option (Vimeo or Mux PUBLIC), use Jitsi for embedded interactive sessions, and use Other to link to any external platform your organization already uses.
:::
