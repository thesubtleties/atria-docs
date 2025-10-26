---
sidebar_position: 2
---

# Managing Event Roles

Understand and manage the different roles within your event. This guide explains permissions, how to assign roles, and best practices for role management.

## Understanding Event Roles

Atria uses a hierarchical role system for events. Each role has specific permissions and access levels.

### Role Hierarchy (Highest to Lowest)

```
ADMIN
  ↓
ORGANIZER
  ↓
SPEAKER
  ↓
ATTENDEE
```

Higher roles inherit capabilities of lower roles, plus additional permissions.

## Role Permissions

### Admin

**Highest level of event control** - Full access to everything.

**Permissions:**
- Edit all event settings (name, dates, format, venue, status)
- Manage branding and customization
- Create, edit, and delete sessions
- Add and remove attendees with any role
- Invite new admins, organizers, speakers, and attendees
- Delete the event (with strict verification)
- Access all chat rooms (including admin and backstage)
- Manage sponsors
- Update event content sections
- View all attendee information

**Who should be Admin:**
- Event creator (automatically assigned)
- Organization owners (automatic access)
- Co-organizers who need full control
- Primary event leads

**Best for:** People who need complete event control

### Organizer

**Event management role** - Can manage most aspects of the event.

**Permissions:**
- Edit event settings (name, dates, format, venue)
- Create, edit, and delete sessions
- Add and remove speakers and attendees
- Invite speakers and attendees (cannot invite admins/organizers)
- Manage speaker assignments
- Manage sponsors
- Access backstage chat rooms
- View attendee information

**Cannot do:**
- Change event status (draft/published/archived)
- Delete the event
- Invite other admins or organizers
- Change attendee roles
- Update branding (colors, logo, hero images)

**Who should be Organizer:**
- Program managers
- Session coordinators
- Event staff who manage day-to-day operations

**Best for:** Trusted team members who help run the event

### Speaker

**Presenter role** - Access to present at assigned sessions.

**Permissions:**
- View event details and agenda
- Access sessions they're assigned to
- Access green room chat (speaker lounge)
- Access backstage chat for their sessions
- Network with attendees
- View other speakers

**Cannot do:**
- Manage other speakers
- Create or edit sessions
- Invite attendees
- Access admin features

**Who should be Speaker:**
- Presenters
- Panelists
- Workshop facilitators
- Keynote speakers

**Best for:** Anyone presenting or speaking at your event

### Attendee

**Participant role** - Standard event access.

**Permissions:**
- View event details and agenda
- View sessions and speakers
- Join public chat rooms
- Network with other attendees
- Send connection requests
- Access event content

**Cannot do:**
- Manage sessions or speakers
- Access backstage or admin chat
- Invite other attendees
- Edit event information

**Who should be Attendee:**
- General participants
- Audience members
- Anyone not presenting or organizing

**Best for:** The majority of your event participants

## Organization Owner Privileges

Organization owners have special automatic access:

**Automatic Admin Access:**
- Organization owners automatically have **ADMIN** access to all organization events
- No need to explicitly add them to events
- Can manage any organization event

**Invisible Management:**
- Owners can access events without appearing in attendee lists
- Or they can be explicitly added to appear as participants

**This means:**
- Owners always have highest permissions
- Can help manage events even if not formally part of the team
- Useful for oversight and support

## Viewing Event Roles

### See Who Has Which Role

1. Go to your event
2. Navigate to **Attendees** or **Attendee Manager**
3. View the list of all event members

**Information displayed:**
- Name
- Email
- Role
- Join date
- Speaker info (if applicable)

**Filtering by role:**
- Most attendee managers allow filtering by role
- Useful for seeing all admins, all speakers, etc.

## Changing Attendee Roles

### How to Update a Role

**Prerequisites:**
- You must be an **Admin** to change roles
- Organizers cannot change roles

**Steps:**
1. Go to **Attendees** or **Attendee Manager**
2. Find the person whose role you want to change
3. Click the **"..."** menu or role dropdown next to their name
4. Select **"Change Role"**
5. Choose the new role from the dropdown
6. Confirm the change
7. Click **"Save"** or the change applies immediately

**What happens:**
- Role updates instantly
- User's permissions change immediately
- User can access new features based on new role
- No notification is sent to the user
- **If changing Speaker to Attendee:** User is automatically removed from all session assignments
- **If changing Speaker to Organizer/Admin:** User keeps session assignments

### Role Change Restrictions

**Who can change roles:**
- **Admins** can change anyone to any role
- **Organizers** can change Attendees and Speakers between those two roles only
  - Can change: Attendee ↔ Speaker
  - Cannot change: Anyone to/from Admin or Organizer

**You cannot:**
- Change your own role if you're the only admin
- Remove the last admin from an event
- (As Organizer) Change roles of other Organizers or Admins

## Adding Users with Specific Roles

### Via Invitation

When inviting users, you choose their role:

1. Send invitation (see [Inviting Attendees](./inviting-attendees))
2. Select role: Admin, Organizer, Speaker, or Attendee
3. User joins with that role automatically

**Permission restrictions apply:**
- Admins can invite any role
- Organizers can only invite Speakers and Attendees
- Organizers cannot invite Admins or other Organizers

## Role-Based Access Control

### What Each Role Can Access

#### Chat Rooms

| Room Type | Admin | Organizer | Speaker | Attendee |
|-----------|-------|-----------|---------|----------|
| **Global** (General, Q&A, Networking) | ✅ | ✅ | ✅ | ✅ |
| **Public** (Session chat) | ✅ | ✅ | ✅ | ✅ |
| **Admin** (Staff coordination) | ✅ | ✅ | ❌ | ❌ |
| **Green Room** (Speaker lounge) | ✅ | ✅ | ✅ | ❌ |
| **Backstage** (Session-specific) | ✅ | ✅ | ✅* | ❌ |

*Speakers only access backstage for their own sessions

#### Event Management

| Feature | Admin | Organizer | Speaker | Attendee |
|---------|-------|-----------|---------|----------|
| Edit event settings | ✅ | ✅ | ❌ | ❌ |
| Change event status | ✅ | ❌ | ❌ | ❌ |
| Update branding | ✅ | ❌ | ❌ | ❌ |
| Create/edit sessions | ✅ | ✅ | ❌ | ❌ |
| Manage speakers | ✅ | ✅ | ❌ | ❌ |
| Manage sponsors | ✅ | ✅ | ❌ | ❌ |
| Invite Admins/Organizers | ✅ | ❌ | ❌ | ❌ |
| Invite Speakers/Attendees | ✅ | ✅ | ❌ | ❌ |
| Change attendee roles | ✅ | ❌ | ❌ | ❌ |
| Delete event | ✅ | ❌ | ❌ | ❌ |

#### Attendee Information

| Information | Admin | Organizer | Speaker | Attendee |
|-------------|-------|-----------|---------|----------|
| Full attendee list | ✅ | ✅ | ✅ | ✅ |
| Email addresses | ✅ | ✅ | Privacy-filtered | Privacy-filtered |
| Contact details | ✅ | ✅ | Privacy-filtered | Privacy-filtered |

## Special Cases

### Promoting Attendees to Speakers

Common workflow when attendees volunteer to present:

1. Find the attendee in your attendee list
2. Change their role from **Attendee** to **Speaker**
3. Assign them to a session
4. They now have speaker access (green room, backstage)

### Promoting Speakers to Organizers

If a speaker takes on coordination duties, this creates a challenge:

**What happens:**
1. If you change their role from **Speaker** to **Organizer**, they keep their session assignments
2. They gain event management permissions
3. However, their role will show as **Organizer**, not **Speaker**

**The problem:**
- You cannot have both Speaker and Organizer roles simultaneously
- One person = one role
- If they need to be listed as a speaker AND have organizer permissions, they have a few options:

**Workarounds:**

**Option 1: Keep them as Speaker**
- Leave their role as Speaker
- They can present but cannot manage the event
- Have admins handle event management tasks for them

**Option 2: Make them Organizer (loses speaker designation)**
- Change to Organizer for management access
- They remain assigned to sessions but appear as Organizer
- Attendees will see them in sessions but not with "Speaker" designation

**Option 3: Create two accounts (if needed)**
- One account as "Event Admin" or team name (Organizer role)
- One account with their real name (Speaker role)
- Separates management duties from speaker profile

:::warning Session Assignment Note
When changing a Speaker to Attendee, they are automatically removed from all session assignments. When changing Speaker to Organizer/Admin, they keep session assignments but their role shows as Organizer/Admin, not Speaker.
:::

### Demoting Roles

Sometimes you need to reduce someone's access:

**Reasons to demote:**
- Person is no longer actively involved
- Security/trust concerns
- Reorganizing team structure
- Person requested reduced responsibility

**How to demote:**
1. Change their role to a lower level
2. They immediately lose higher permissions
3. They retain access to features of new role

## Multiple Admins

### Benefits of Multiple Admins

**Recommended:** Have 2-3 admins for important events

**Why:**
- Prevents single point of failure
- Allows coverage if one admin is unavailable
- Distributes workload
- Provides backup for critical decisions

### Managing Multiple Admins

**Best practices:**
- Clearly define responsibilities
- Communicate about major changes
- Use chat or external tools for coordination
- Respect each other's work

**Avoiding conflicts:**
- Don't simultaneously edit the same settings
- Communicate before making major changes
- Establish who handles what

## Best Practices

### Role Assignment

**Start conservative:**
- Begin with lower roles
- Elevate as needed
- Easier to promote than demote

**Match role to responsibility:**
- Don't give Admin to someone who only needs to manage sessions
- Don't make everyone an Organizer "just in case"

**Review regularly:**
- Audit roles monthly for large events
- Remove inactive admins/organizers
- Update roles as responsibilities change

### Security Considerations

**Admin role:**
- Only assign to fully trusted individuals
- Admins can delete your event
- Admins see all attendee information

**Organizer role:**
- Trusted team members only
- Can invite attendees and speakers
- Access to sensitive attendee data

**Speaker role:**
- Generally safe to assign broadly
- Limited permissions
- Access to green room chat

**Attendee role:**
- Default for most participants
- Minimal risk
- Can be promoted later if needed

### Communication

**Inform role changes:**
- Let people know when you change their role
- Explain new permissions
- Provide guidance if needed

**Set expectations:**
- Clarify what each role can/cannot do
- Define responsibilities
- Establish communication channels

## Common Scenarios

### Scenario 1: Building Your Event Team

```
Week 1: Create event
- You: ADMIN (automatic)

Week 2: Add core team
- Add 2 co-organizers as ORGANIZER
- They help build sessions and invite speakers

Week 3: Add support staff
- Promote 1 organizer to ADMIN (full backup)
- Keep 1 as ORGANIZER (focused on program)

Week 4: Add speakers
- Invite 15 speakers as SPEAKER
- They can access green room and their sessions
```

### Scenario 2: Handling a Volunteer Speaker

```
Attendee volunteers to present
1. Change role: ATTENDEE → SPEAKER
2. Create their session (or assign to existing)
3. Add them as speaker to the session
4. They now access speaker features
```

### Scenario 3: Team Member Leaves

```
Organizer leaves the team
1. Change role: ORGANIZER → ATTENDEE (if staying)
   OR
2. Remove from event entirely
3. Reassign their sessions to other organizers
4. Update any relevant documentation
```

## Troubleshooting

### "Permission denied" when trying to change role

**Solution:**
- Only Admins can change roles
- If you're an Organizer, ask an Admin

### Can't remove last Admin

**Solution:**
- Promote another user to Admin first
- Then demote or remove the original admin
- Every event must have at least one admin

### User doesn't have access they should have

**Check:**
1. What is their current role?
2. Is the feature actually available to that role?
3. Have they logged out and back in?

**Solution:**
- Verify their role is correct
- Update role if needed
- Ask them to refresh their browser

### Changed role but user still has old permissions

**Solution:**
- Changes are immediate
- Ask them to refresh the page
- Clear browser cache if needed
- Log out and back in

## Frequently Asked Questions

### Can one person have multiple roles?

No. Each person has exactly one role in an event. Choose the role that best matches their primary responsibility.

### Can I assign different roles in different events?

Yes! Roles are per-event. Someone can be an Admin in one event and an Attendee in another.

### What happens if I remove all admins?

You cannot remove the last admin. Atria prevents this to avoid locking yourself out.

### Can attendees see who the admins are?

Yes, roles are visible in the attendee list. This promotes transparency.

### Do I need to tell someone when I change their role?

Atria doesn't send automatic notifications. It's good practice to communicate role changes directly.

### Can speakers invite other speakers?

No. Only Admins and Organizers can invite people.

### What if an organization owner is causing problems in my event?

Organization owners have automatic admin access. You'll need to discuss with them or other organization owners. Event admins cannot remove organization owner access.

### Can I create custom roles?

Not currently. Use the four existing roles: Admin, Organizer, Speaker, Attendee.

## Next Steps

After setting up roles:

- **[Moderate your event](./moderation)** - Handle disruptive users
- **[Create sessions](../sessions-speakers/creating-sessions)** - Build your agenda
- **[Manage speakers](../sessions-speakers/managing-speakers)** - Assign presenters

---

**Need help?** [Contact us](mailto:steven@sbtl.dev) or [open an issue](https://github.com/thesubtleties/atria/issues).
