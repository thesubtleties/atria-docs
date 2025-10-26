---
sidebar_position: 1
---

# Organizations & Multi-Tenancy

Organizations are the foundation of Atria's multi-tenant architecture. Every event belongs to an organization, and organization members can collaborate on events together.

## What is an Organization?

An **organization** is a workspace where you and your team manage events. Think of it as your company, nonprofit, community group, or any entity that hosts events.

**Key concepts:**
- Every user can belong to multiple organizations
- Every event belongs to exactly one organization
- Organizations provide data isolation - you only see your organization's data
- Organization owners automatically have admin access to all organization events
- You must create an organization before you can create events

:::info Not Creating Events?
If you're joining Atria as an attendee, speaker, or team member, you don't need to create an organization. You'll be invited to existing organizations and events by organizers.
:::

## Organization Roles

Atria uses a three-tier role hierarchy within organizations:

### Owner

**Highest level of access** - The organization founder or primary administrator.

**Permissions:**
- Full control over the organization
- Create events for the organization
- Manage all organization events (automatic event admin access)
- Invite members and change member roles
- Promote members to owner status
- Delete events they created (with strict verification)

**Important:** Every organization must have at least one owner. You cannot demote yourself if you're the only owner.

### Admin

**Administrative access** - Trusted team members who help manage the organization.

**Permissions:**
- Create events for the organization
- Manage all organization events (automatic event admin access)
- Invite members and change member roles
- View all organization data
- Cannot promote members to owner (only owners can do this)

### Member

**Standard access** - Regular team members who participate in events.

**Permissions:**
- View organization events
- Participate in events they're invited to
- View other organization members
- Cannot create events
- Cannot invite or manage other members

## Creating an Organization

To start hosting events on Atria, you'll need to create an organization first:

1. Navigate to your **Dashboard**
2. Click **"Create Organization"**
3. Enter the organization name
4. Click **"Create"**

You'll be set as the owner automatically and taken to your organization page, where you can start creating events.

## Managing Organization Members

### Viewing Members

To see who's in your organization:

1. Go to your **Organization Dashboard**
2. Click on the **Members** tab
3. View all members with their roles and join dates

### Inviting Users

Only organization **admins and owners** can invite members.

Organizations support two ways to add members:

#### Option 1: Invite Individual Users

To invite a single person (whether they have an Atria account or not):

1. Go to **Organization → Members**
2. Click **"Invite Member"**
3. Enter their email address
4. Select their role (Admin or Member)
5. Add an optional personal message
6. Click **"Send Invitation"**

The user will receive an email invitation with a secure link that expires in 7 days.

**If they don't have an Atria account yet:**
- They'll be prompted to create an account when clicking the invitation link
- After creating their account, they'll automatically join your organization

#### Option 2: Bulk Invitations

Need to invite many people at once?

1. Go to **Organization → Members**
2. Click **"Bulk Invite"**
3. Enter email addresses separated by commas
4. Select the role for all invitees (Admin or Member)
5. Add an optional message
6. Click **"Send Invitations"**

:::info Coming Soon
CSV and file upload support for bulk invitations is planned for a future release!
:::

### Accepting Invitations

When you receive an organization invitation:

1. Check your email for the invitation
2. Click **"Accept Invitation"** in the email
3. Log in (or create an account if you're new)
4. Confirm you want to join the organization
5. You're in! Start collaborating immediately

### Managing Invitation Status

Track your pending invitations:

**As an Admin/Owner:**
- View pending invitations in **Organization → Members** (pending invitations section)
- See who hasn't responded yet
- Cancel pending invitations if needed
- Resend invitations that expired

**As a Member:**
- Members cannot view pending invitations
- Only admins and owners have access to invitation management

**As an Invitee:**
- View your pending invitations at **/invitations**
- Accept or decline each invitation
- See who invited you and when

### Changing Member Roles

Organization admins and owners can update member roles:

1. Go to **Organization → Members**
2. Find the member you want to update
3. Click the **"..."** menu next to their name
4. Click **"Change Role"**
5. Select the new role (Owner, Admin, or Member)
6. Confirm the change

**Role change rules:**
- Admins can promote members to admin
- Only owners can promote members to owner
- Owners can demote admins to member
- You can demote yourself (as long as there's another owner)
- Cannot demote yourself if you're the only owner

### Removing Members

To remove someone from your organization:

1. Go to **Organization → Members**
2. Find the member to remove
3. Click **"Remove"** next to their name
4. Confirm the removal

**Important:** Removing a member:
- Removes their access to organization events
- Does NOT delete their Atria account
- Does NOT remove them from events they were explicitly invited to
- Cannot remove the last owner (must transfer ownership first)

## Organization Settings

### Updating Organization Details

To update your organization information:

1. Go to **Organization → Settings**
2. Update the organization name
3. Click **"Save Changes"**

:::info Future Settings
Additional organization settings (logo, description, custom branding) are coming soon!
:::

## Cross-Organization Events

Atria's multi-tenant architecture provides powerful collaboration features:

### Organization Owner Privileges

**Automatic Event Access:**
- Organization owners and admins automatically have **ADMIN** access to all events in their organization
- No need to explicitly add owners/admins to each event
- Owners/admins can manage events without appearing in the attendee list

**Flexible Visibility:**
- Owners/admins can access events invisibly (for management purposes)
- Or they can be explicitly added to events to appear in attendee lists, speaker rosters, etc.
- This gives organizers flexibility to manage behind the scenes or participate publicly

### Event Membership for Members

**For Regular Members:**
- Must be explicitly invited to events
- Event creators can invite organization members with specific roles
- Members can see organization events but need explicit invitation to participate

### Example Workflow

```
Organization: "Tech Conference Inc"
├─ Owner: Alice (auto-admin on all events)
├─ Admin: Bob (can create events, needs invitation to edit existing ones)
└─ Member: Charlie (can view org events, needs invitation to participate)

Event: "DevCon 2025"
├─ Alice: ADMIN (automatic as org owner)
├─ Bob: ORGANIZER (explicitly invited)
└─ Charlie: ATTENDEE (explicitly invited)
```

## Data Isolation & Security

Atria implements strict data isolation between organizations:

### What's Isolated

- **Events** - Only your organization's events are visible
- **Members** - Cannot see members of other organizations
- **Sessions** - Session data scoped to organization events
- **Sponsors** - Sponsor data tied to organization events
- **Chat Rooms** - Chat rooms scoped to specific events
- **Invitations** - Organization invitations are organization-specific

### What's Shared

Some data crosses organization boundaries by design:

- **User Profiles** - Users can belong to multiple organizations
- **Connections** - You can connect with people from other organizations through events
- **Direct Messages** - Can message connections from any organization (connections must be made through events)

### Security Features

- **Database-level isolation** - Foreign key constraints enforce data boundaries
- **API authorization** - Every endpoint verifies organization membership
- **Role-based access control** - Granular permissions at org and event levels
- **Service-layer validation** - Business logic re-verifies permissions (defense in depth)

## Transferring Ownership

Need to make another member an owner?

1. Go to **Organization → Members**
2. Find the member you want to promote
3. Click the **"..."** menu next to their name
4. Click **"Change Role"**
5. Select **"Owner"**
6. Confirm the change

**After promoting someone to owner, you can demote yourself:**

1. Have another owner change your role to Admin or Member
2. Or demote yourself using the same role change process

**Important:**
- Only owners can promote members to owner
- You cannot demote yourself if you're the only owner
- Multiple owners can co-exist in an organization

## Deleting an Organization

:::warning Not Yet Available
Organization deletion is not currently available. We're working on a safe solution that properly handles cascading data and preserves important event history.

If you need to remove or archive an organization, please contact us at [steven@sbtl.dev](mailto:steven@sbtl.dev).
:::

## Best Practices

### For Organization Owners

- **Add at least two owners** - Prevents lockout if one owner is unavailable

- **Use clear naming** - Name your organization clearly (e.g., "Acme Corp" not "My Org")

- **Audit members regularly** - Remove inactive members to keep your org secure

- **Set role expectations** - Communicate what each role means in your organization

### For Admins

- **Invite thoughtfully** - Only invite people who need access

- **Use appropriate roles** - Don't over-permission; give minimum necessary access

- **Document your events** - Use clear event names and descriptions

### For Members

- **Respect permissions** - Don't request role escalation unless needed

- **Communicate with admins** - Ask questions if you need access to something

- **Keep profile updated** - Your organization benefits from accurate member profiles

## Common Questions

### Can I belong to multiple organizations?

Yes! Users can be members of unlimited organizations. Switch between them using the organization selector in your dashboard.

### Can I create events in multiple organizations?

Yes, as long as you have the appropriate permissions in each organization. Each event belongs to exactly one organization.

### What happens if I leave an organization?

- You lose access to all organization events (unless explicitly invited before leaving)
- Your Atria account remains active
- Your connections made at organization events remain
- Event attendance history is preserved

### Can I merge two organizations?

Not currently. If you need to consolidate organizations, you'll need to:
1. Manually move events by recreating them in the target organization
2. Re-invite members to the target organization
3. Remove members from the old organization

Organization deletion is not yet available. Contact us at [steven@sbtl.dev](mailto:steven@sbtl.dev) if you need help managing old organizations.

### Do organization members see each other's profiles?

Yes, organization members can see each other's **account emails** and roles. All members in an organization can view the email addresses of all other members, regardless of role.

**Important:** The email displayed is your actual account email (the one you use to log in), not your public email preference. Currently, there are no privacy controls for hiding your email from other organization members.

## Next Steps

Now that you understand organizations, learn how to:
- **[Create your first event](../event-management/creating-events)** - Start hosting events
- **[Manage event roles](../attendee-management/managing-roles)** - Understand event-level permissions
- **[Invite attendees](../attendee-management/inviting-attendees)** - Grow your event audience

---

**Questions?** [Contact us](mailto:steven@sbtl.dev) or [open an issue](https://github.com/thesubtleties/atria/issues).
