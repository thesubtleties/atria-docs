---
sidebar_position: 1
---

# Inviting Attendees

Build your event audience by inviting attendees, speakers, and organizers. This guide covers everything you need to know about event invitations.

## Who Can Invite Attendees

Only certain roles can send event invitations:

**Can Invite:**
- Event **Admins** - Full invitation privileges
- Event **Organizers** - Full invitation privileges
- Organization **Owners** - Automatic admin access to all org events

**Cannot Invite:**
- Event **Speakers** - Can only present at sessions
- Event **Attendees** - Can only participate
- Organization **Admins** - Must be explicitly added to event first
- Organization **Members** - Must be explicitly added to event first

:::info Organization Owner Privilege
Organization owners automatically have admin access to all organization events, even without being explicitly added. This means they can always invite attendees to any org event.
:::

## Understanding Event Invitations

### What is an Event Invitation?

An event invitation is a secure, tokenized link sent via email that allows someone to join your event with a specific role.

**Key features:**
- Unique secure token (32 characters)
- Expires after 7 days
- Tracks invitation status
- Includes optional personal message
- Role is pre-assigned (Admin, Organizer, Speaker, Attendee)

### Invitation Statuses

Invitations move through different states:

| Status | Meaning |
|--------|---------|
| **PENDING** | Invitation sent, awaiting response |
| **ACCEPTED** | User joined the event |
| **DECLINED** | User rejected the invitation |
| **EXPIRED** | 7-day window passed without response |
| **CANCELLED** | Organizer revoked the invitation |

## Inviting Individual Users

### Step-by-Step: Send an Invitation

1. Navigate to your event
2. Go to **Attendees** or **Attendee Manager**
3. Click **"Invite Member"** or **"Send Invitation"**
4. Fill in the invitation form:
   - **Email address** (required)
   - **Role** (required) - Select: Admin, Organizer, Speaker, or Attendee
   - **Personal message** (optional) - Add context or greeting
5. Click **"Send Invitation"**

The user will receive an email with:
- Event details (name, dates, venue)
- Your optional personal message
- Secure invitation link
- Who invited them
- Accept/Decline buttons

### Choosing the Right Role

**Admin:**
- Full event control
- Can invite others, manage settings
- Best for: Co-organizers, event leads

**Organizer:**
- Manage sessions, speakers, attendees
- Can invite speakers and attendees
- Best for: Event coordinators, program managers

**Speaker:**
- Access to sessions they're assigned to
- Access to green room and backstage chat
- Best for: Presenters, panelists, workshop leaders

**Attendee:**
- Participate in event
- View sessions, network with others
- Best for: Participants, audience members

:::tip Start with Lower Permissions
You can always elevate someone's role later. Start with the minimum role needed and upgrade as necessary.
:::

### Inviting Users Who Don't Have Accounts

**Good news:** You can invite anyone, even if they don't have an Atria account yet!

**What happens:**
1. You send invitation to their email
2. They receive the invitation email
3. When they click the invitation link:
   - If they have an account: They log in and accept
   - If they don't have an account: They're prompted to create one
4. After creating account, they automatically join your event

## Bulk Invitations

Need to invite many people at once? Use bulk invitations.

### How to Send Bulk Invitations

1. Navigate to your event
2. Go to **Attendees** or **Attendee Manager**
3. Click **"Bulk Invite"**
4. Enter email addresses:
   - Separate each email with a comma
   - Format: `email1@example.com, email2@example.com, email3@example.com`
   - Or enter one email per line
5. Select a **role** for all invitees (applies to everyone in the list)
6. Add an optional **message** (same message for everyone)
7. Click **"Send Invitations"**

**Results:**
- You'll see a summary of successful and failed invitations
- Successful: Email sent, invitation created
- Failed: Invalid email, user already in event, etc.

:::info Coming Soon
CSV and file upload support for bulk invitations is planned for a future release! For now, use comma-separated email lists.
:::

### Bulk Invitation Best Practices

**Prepare your list:**
- Verify email addresses are correct
- Remove duplicates
- Check for typos

**Role assignment:**
- Bulk invitations assign the same role to everyone
- For different roles, send separate bulk invitations
- Example: Bulk invite attendees, then separately invite speakers

**Personal touch:**
- While the message is the same for everyone, make it warm and welcoming
- Include event highlights or what to expect
- Explain why they're being invited

## Managing Pending Invitations

### Viewing Pending Invitations

**As an Organizer/Admin:**
1. Go to **Attendees** or **Attendee Manager**
2. Look for **"Pending Invitations"** section
3. See all invitations awaiting response

**Information displayed:**
- Email address of invitee
- Role they're being invited as
- Who sent the invitation
- When it was sent
- Time until expiration

### Cancelling an Invitation

Changed your mind? You can cancel pending invitations:

1. Find the invitation in **Pending Invitations**
2. Click **"Cancel"** or the cancel icon
3. Confirm cancellation

**What happens:**
- Invitation status changes to CANCELLED
- The invitation link no longer works
- User cannot accept (even if they click the link)
- No notification is sent to the invitee

### Resending Expired Invitations

If an invitation expired before the user responded:

1. Check the **Pending Invitations** list
2. Find expired invitations (status: EXPIRED)
3. Send a new invitation to the same email address
4. The new invitation will have a fresh 7-day expiration

:::tip Set Expectations
Let invitees know invitations expire in 7 days. Remind them to check their email and accept promptly.
:::

## The Invitation Acceptance Flow

### For the Invitee

**Receiving the invitation:**
1. Check email for invitation from Atria
2. See event details and who invited them
3. Read any personal message from organizer

**Accepting the invitation:**
1. Click **"Accept Invitation"** in email
2. Log in to Atria (or create account if new)
3. Email must match the invited email
4. Confirm they want to join
5. Automatically added to event with assigned role

**Not interested in joining:**
- Simply ignore the email
- Invitation will expire after 7 days
- No action needed on your part

### Invitation Validation

When someone accepts an invitation, Atria validates:

**Security checks:**
- Token is valid and not expired
- Email matches the invited email
- User isn't already in the event
- Invitation is still PENDING (not cancelled/accepted/declined)

**If validation fails:**
- User sees an error message explaining why
- Common issues: expired link, already joined, email mismatch

## Who Can Invite Which Roles?

Not everyone can invite every role. Here's the permission matrix:

### Organization Owners

**Can invite to any role:**
- Admin
- Organizer
- Speaker
- Attendee

### Event Admins

**Can invite to any role:**
- Admin
- Organizer
- Speaker
- Attendee

### Event Organizers

**Can invite:**
- Speaker
- Attendee

**Cannot invite:**
- Admin (only admins/owners can invite admins)
- Organizer (only admins/owners can invite organizers)

:::warning Permission Restrictions
If you're an organizer and try to invite someone as Admin or Organizer, you'll get a permission error. Ask an event admin or organization owner to send those invitations.
:::

## Email Invitations

### What the Email Includes

Invitation emails contain:

**Event information:**
- Event name
- Event dates
- Event format (Virtual, In-Person, Hybrid)
- Venue (if applicable)

**Invitation details:**
- Role being invited as
- Who sent the invitation
- Personal message (if included)

**Action buttons:**
- Accept Invitation (green button)
- Note about ignoring if not interested

**Additional info:**
- Invitation expiration (7 days)
- Link to event page

### Email Deliverability

**To ensure invitations arrive:**

**For organizers:**
- Use valid email addresses
- Avoid sending too many invitations at once
- Include a personal message (reduces spam likelihood)

**For invitees:**
- Check spam/junk folder if invitation doesn't arrive
- Add `noreply@atria.gg` to contacts
- Check that email address is correct

:::info Email Configuration
Atria uses SMTP2GO for transactional emails. If you're self-hosting and emails aren't sending, check your SMTP configuration.
:::

## Tracking Invitation Metrics

### Understanding Your Invitation Stats

**Acceptance rate:**
- Track how many invitations are accepted vs. declined
- Low acceptance? Consider more personalized messages or better timing

**Response time:**
- See how quickly people respond
- Many expirations? Consider reminder emails

**Who's invited whom:**
- Track which organizers are inviting attendees
- Useful for distributed event promotion

## Best Practices

### Before Sending Invitations

**Publish your event first:**
- Users can't join a draft event
- Publish before inviting so users can see event details

**Complete event information:**
- Fill in hero description, sessions, speakers
- Invitees want to see what they're joining

**Prepare your message:**
- Draft a warm, informative message
- Explain why they're being invited
- Highlight what they'll gain

### Timing Your Invitations

**Early invitations (4-6 weeks before):**
- Gives attendees time to plan
- Allows early networking
- Best for: Speakers, VIPs, sponsors

**Mid-term invitations (2-3 weeks before):**
- Sweet spot for most attendees
- Not too early, not too late

**Last-minute invitations (1 week before):**
- Only if necessary
- May result in lower acceptance
- Best for: Fill remaining spots

### Writing Effective Invitation Messages

**Good invitation messages:**
- Are personalized (even if slightly)
- Explain why they're being invited
- Highlight event value
- Include a call to action
- Are warm and welcoming

**Example for speakers:**
```
Hi [Name],

We'd love to have you speak at TechCon 2025! Your expertise in
AI/ML would be perfect for our audience of 500+ developers.

The event is March 15-17 in San Francisco. We'll cover travel
and accommodation.

Please accept this invitation to join as a speaker. Looking
forward to having you!

Best,
[Your name]
```

**Example for attendees:**
```
Hi there!

You're invited to our Annual Fundraising Gala on April 10th.
Join us for an evening of giving back, networking, and
celebrating our community impact.

This event is perfect for anyone passionate about education
and youth development. We'd love to see you there!

Click below to accept your invitation.

Thanks,
[Your name]
```

### Managing Invitations at Scale

**For large events (100+ attendees):**

**Segment your invitations:**
- Invite speakers first (4-6 weeks out)
- Then organizers and VIPs (3-4 weeks out)
- Then general attendees (2-3 weeks out)

**Batch your sends:**
- Don't send 500 invitations at once
- Send in batches of 50-100
- Space them out over days

**Track and follow up:**
- Monitor acceptance rates
- Send reminders to non-responders
- Re-invite expired invitations

## Common Scenarios

### Scenario 1: Inviting a Keynote Speaker

```
Role: Speaker
Message: "We'd be honored to have you keynote TechCon 2025.
Your work in distributed systems aligns perfectly with our theme.
All expenses covered. Looking forward to your acceptance!"

Timeline: 6 weeks before event
Follow-up: Personal email if no response in 3 days
```

### Scenario 2: Inviting Event Team

```
Role: Organizer
Invitees: 5 team members (individual invitations)
Message: "Welcome to the organizing team! You'll help manage
sessions, speakers, and attendees. Let's make this event amazing!"

Timeline: 4 weeks before event
```

### Scenario 3: Bulk Invite Attendees

```
Role: Attendee
Count: 150 people
Method: Bulk invitation (comma-separated)
Message: "You're invited to join 200+ professionals at our
annual conference. Three days of learning, networking, and
innovation. We'd love to have you!"

Timeline: 3 weeks before event
```

## Troubleshooting

### "Permission denied" when trying to invite

**Solution:**
- Check your role in the event
- Organizers can only invite Speakers and Attendees
- Ask an admin to invite Admins/Organizers

### User says they never received invitation

**Check:**
1. Is the email address correct?
2. Did they check spam/junk folder?
3. Is the invitation still PENDING (not cancelled)?

**Solution:**
- Verify email address
- Resend invitation
- Ask them to whitelist Atria emails

### "User already in event" error

**Solution:**
- They're already a member of the event
- Check the attendee list
- Update their role instead of re-inviting

### Invitation expired before user could accept

**Solution:**
- Send a new invitation
- Contact the user to accept promptly
- Consider extending expiration in future (not currently configurable)

## Frequently Asked Questions

### Can I invite the same person to multiple roles?

No. One invitation per email address per event. Choose the most appropriate role when inviting.

### What if someone's email changes after I invite them?

Cancel the old invitation and send a new one to their current email address.

### Can invitees forward the invitation link to others?

No. The invitation is tied to the specific email address. The link won't work for anyone else.

### How do I change someone's role after they've accepted?

Don't re-invite them. Instead, update their role in the Attendee Manager.

### Can I customize the invitation email template?

Not currently. The email template is standardized. You can add a personal message within the invitation.

### Is there a limit on how many people I can invite?

No hard limit. For very large events (1000+ attendees), contact us for best practices.

### Can I see who has viewed the invitation email?

No. You can only see invitation status (pending, accepted, declined).

### What happens if I delete someone after they've accepted?

Their invitation status remains ACCEPTED in the system, but they're removed from the event. They would need a new invitation to rejoin.

## Next Steps

After inviting attendees:

- **[Manage event roles](./managing-roles)** - Understand and update attendee roles
- **[Moderate your event](./moderation)** - Handle disruptive users
- **[Monitor engagement](../monitoring/event-analytics)** - Track who's active

---

**Need help?** [Contact us](mailto:steven@sbtl.dev) or [open an issue](https://github.com/thesubtleties/atria/issues).
