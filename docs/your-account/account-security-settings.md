# Account & Security Settings

Manage your account security, privacy controls, and notification preferences. Control who can see your information and how other attendees can interact with you.

## Overview

Account Settings are organized into tabs:
- **Privacy** - Control who can see your information
- **Profile** - Link to edit your profile
- **Notifications** - Coming soon (not yet available)
- **Security** - Change your password and manage security

**Access:** Click your profile icon → **Settings**

**URL:** `/app/settings`

---

## Tab Navigation

### Desktop

- Horizontal tab bar at the top
- All tabs visible simultaneously
- Click a tab to switch sections

### Mobile

- Dropdown select menu replaces horizontal tabs
- Shows icon of current tab
- Tap dropdown to select a different tab

---

## Privacy Settings

Control your default privacy settings across the platform and set event-specific overrides.

### Privacy Tabs

The Privacy tab has two sub-tabs:
1. **Global Privacy** - Default settings for all events
2. **Event Privacy** - Event-specific overrides

---

## Global Privacy Settings

Default privacy controls that apply across all events (unless overridden by event-specific settings).

### Email Visibility

**Who can see your email address?**

**Options:**
- **Event Attendees** - Any attendee of events you join can see your email
- **Connections & Event Organizers** (Default) - Only your connections and event organizers
- **Event Organizers Only** - Only organizers of events you attend

#### Public Email Option

When you select **"Event Organizers Only,"** an additional toggle appears:

**Use a Different Email for Public Display**
- Shows a different email to attendees instead of hiding it completely
- Your account email remains private (organizers still see it)
- Useful if you want to be reachable but keep your primary email private

**Public Email Field:**
- Label: "Public Email"
- Placeholder: "public@example.com"
- Description: "This email will be shown to attendees while organizers can still see your account email"
- Must be a valid email format

**How it works:**
- Attendees see your public email
- Organizers see your actual account email
- You can use a separate email for networking purposes

### Connection Requests

**Who can send you connection requests?**

**Options:**
- **Event Attendees Only** (Default) - Anyone attending an event with you
- **Speakers & Organizers Only** - Only speakers and event organizers
- **No One** - Completely disable connection requests

**Use cases:**
- **Event Attendees Only:** Most open, great for networking
- **Speakers & Organizers Only:** More selective, good for VIPs or speakers who want to limit requests
- **No One:** Maximum privacy, disables all incoming requests

### Social Links Visibility

**Who can see your social media links?**

**Options:**
- **Event Attendees** (Default) - All event attendees can see
- **Connections Only** - Only people you're connected with
- **Hidden** - Hidden from everyone

**Note:** This controls visibility of your LinkedIn, Twitter, and Website links from your profile.

### Profile Information Visibility

Control which parts of your profile are shown to others.

**Show Company and Job Title** (Toggle)
- Label: "Show company and job title"
- Description: "Display your professional information on your profile"
- Default: ON (enabled)

**Show Bio** (Toggle)
- Label: "Show bio"
- Description: "Display your biography on your profile"
- Default: ON (enabled)

**How it works:**
- When toggled OFF, that information is hidden from your profile
- Even connections won't see hidden fields
- Useful if you want a minimal profile

### Saving Privacy Settings

After making changes:

1. **Save Changes** and **Cancel** buttons appear at the bottom
2. Click **Save Changes** to apply
3. Success notification: "Privacy settings updated successfully"
4. Buttons disappear

**Cancel:**
- Clicking **Cancel** discards all unsaved changes
- Form resets to last saved values

**Validation:**
- If public email is enabled but empty, you'll see an error
- All fields must meet requirements before saving

---

## Event Privacy Overrides

Set different privacy settings for specific events, overriding your global defaults.

### Why Use Event Overrides?

**Common scenarios:**
- More open at networking events, more private at others
- Different settings for professional vs casual events
- Temporary privacy changes for specific events
- Control who can contact you at large conferences

### Setting Up Event Overrides

**Step 1: Select Event**

1. Go to **Privacy** tab → **Event Privacy** sub-tab
2. Use the dropdown to select an event:
   - Label: "Select Event"
   - Placeholder: "Choose an event to configure"
   - Description: "Select an event to view or configure privacy overrides"

**Step 2: Enable Override**

1. Toggle **Override Privacy Settings for This Event**
2. Description: "When enabled, these settings will override your global privacy settings for this event only"
3. Default: OFF

**Step 3: Configure Settings**

When override is enabled, all the same privacy options appear:
- Email visibility
- Public email option (conditional)
- Connection requests
- Social links visibility
- Company/title visibility
- Bio visibility

**Step 4: Save**

1. Make your changes
2. Click **Save Event Overrides**
3. Success: "Event privacy overrides saved"

### Disabling Event Overrides

To remove event-specific settings and revert to global settings:

1. Find the event in the dropdown
2. Toggle **Override Privacy Settings for This Event** to OFF
3. Event-specific settings are deleted
4. Event now uses your global privacy settings

### No Events Available

If you haven't joined any events yet, you'll see:

> **No Events Available**
> "You're not currently part of any events. Event-specific privacy overrides will be available when you join or create events."

---

## Security Settings

Manage your password and account security.

### Change Password

Update your password to maintain account security.

#### Password Change Form

**Fields:**

| Field | Required | Notes |
|-------|----------|-------|
| Current Password | Yes | Your current password |
| New Password | Yes | Minimum 8 characters |
| Confirm New Password | Yes | Must match new password |

#### Password Strength Indicator

When you type in the "New Password" field, a strength indicator appears below:

**Visual Components:**
- **Progress bar** - Color-coded by strength
- **Strength label** - "Weak," "Fair," "Good," or "Strong"
- **Checklist** - Shows which criteria your password meets:
  - ✓ At least 8 characters
  - ✓ Uppercase letter
  - ✓ Lowercase letter
  - ✓ Number
  - ✓ Special character

#### Changing Your Password

1. Enter your current password
2. Enter your new password (at least 8 characters)
3. Re-enter your new password to confirm
4. Click **Update Password**
5. Button shows "Updating Password..." while processing
6. On success:
   - Form clears
   - Notification: "Password updated successfully"
   - You can now log in with your new password

**Cancel:**
- Click **Cancel** to discard changes
- All fields clear
- Buttons disappear

**Validation errors:**
- Current password incorrect: Error shown on current password field
- Passwords don't match: "Passwords don't match" on confirm field
- Password too short: "Password must be at least 8 characters"

### Security Best Practices

The Security tab includes helpful tips:

**Recommendations:**
- Use a unique password that you don't use on other websites
- Include a mix of uppercase, lowercase, numbers, and special characters
- Avoid using personal information like birthdays or names
- Consider using a password manager to generate and store secure passwords

---

## Profile Tab

Simple tab that redirects you to edit your profile.

**Content:**
> "Profile settings can be updated on your [profile page](./your-profile)"

**Click the link** to go to your profile page where you can edit your information.

---

## Notifications Tab

**Status:** Not yet implemented (disabled in UI)

This tab will be available in a future update to manage:
- Email notification preferences
- Event reminders
- Connection requests notifications
- Message notifications

---

## Forgot Password

If you can't log in and need to reset your password:

### How to Reset Your Password

1. Go to the login page
2. Click **Forgot password?** link
3. Enter your email address
4. Click **Send Reset Link**
5. Check your email for reset instructions

### Reset Email

**What you'll receive:**
- Email from Atria
- Subject: Password reset instructions
- Contains a reset link valid for **1 hour**

**Security note:** The email says "If an account exists with the email you provided, we've sent password reset instructions to your inbox." This prevents people from discovering which emails have accounts.

### Completing the Reset

1. Click the reset link in your email
2. You're directed to a password reset page
3. Enter your new password
4. Confirm your new password
5. Submit the form
6. Password is changed
7. Log in with your new password

**Link expiration:**
- Reset link expires after **1 hour**
- If expired, request a new reset link
- Check your spam folder if you don't receive the email

---

## Common Scenarios

### Scenario 1: Setting Up Privacy for a Networking Event

**Goal:** Be more open at a networking-focused conference

**Steps:**
1. Go to Settings → Privacy → Event Privacy
2. Select the networking event from dropdown
3. Toggle "Override Privacy Settings for This Event" ON
4. Set Email Visibility to "Event Attendees"
5. Set Connection Requests to "Event Attendees Only"
6. Set Social Links Visibility to "Event Attendees"
7. Enable "Show company and job title" and "Show bio"
8. Click "Save Event Overrides"
9. Your profile is more visible at this event only

### Scenario 2: Changing Your Password Regularly

**Goal:** Update password for security

**Steps:**
1. Go to Settings → Security
2. Enter your current password
3. Enter a strong new password (check the strength indicator)
4. Confirm your new password
5. Click "Update Password"
6. Success! Log in with new password next time

### Scenario 3: Limiting Connection Requests

**Goal:** Only accept requests from speakers and organizers

**Steps:**
1. Go to Settings → Privacy → Global Privacy
2. Find "Connection Requests"
3. Select "Speakers & Organizers Only"
4. Click "Save Changes"
5. Now only speakers/organizers can send you requests

### Scenario 4: Using a Public Email for Networking

**Goal:** Share a separate email for networking without exposing your primary email

**Steps:**
1. Go to Settings → Privacy → Global Privacy
2. Set Email Visibility to "Event Organizers Only"
3. Toggle "Use a different email for public display" ON
4. Enter your public email (e.g., networking@example.com)
5. Click "Save Changes"
6. Attendees see your public email, organizers see your account email

### Scenario 5: Hiding Professional Info at a Casual Event

**Goal:** Keep your job details private at a non-professional event

**Steps:**
1. Go to Settings → Privacy → Event Privacy
2. Select the casual event
3. Toggle "Override Privacy Settings for This Event" ON
4. Toggle "Show company and job title" OFF
5. Toggle "Show bio" OFF
6. Click "Save Event Overrides"
7. Your job info is hidden at this event only

---

## Troubleshooting

### Can't Save Privacy Settings

**Problem:** Save button doesn't work or shows error

**Solutions:**
- If using public email, make sure the public email field is filled and valid
- Check that all required fields are completed
- Refresh the page and try again
- Check your internet connection

### Password Change Fails

**Problem:** "Update Password" fails or shows error

**Solutions:**
- Make sure current password is correct
- New password must be at least 8 characters
- Confirm password must match new password exactly
- Check for extra spaces in password fields
- Try logging out and back in if issue persists

### Event Override Not Working

**Problem:** Privacy settings don't seem to apply at an event

**Solutions:**
- Make sure you toggled "Override Privacy Settings for This Event" ON
- Check that you clicked "Save Event Overrides"
- Refresh the event page
- Verify you selected the correct event from dropdown

### Public Email Not Showing

**Problem:** Public email not displaying to attendees

**Solutions:**
- Email visibility must be set to "Event Organizers Only"
- "Use a different email for public display" toggle must be ON
- Public email field must be filled with valid email
- Click "Save Changes" after setting up
- Other users must refresh to see the change

### Can't See Notifications Tab

**Problem:** Notifications tab disabled or grayed out

**Solutions:**
- This tab is not yet implemented
- It will be available in a future update
- No action needed - this is expected behavior

---

## Best Practices

### Privacy Strategies

**For maximum networking:**
- Email Visibility: "Event Attendees"
- Connection Requests: "Event Attendees Only"
- Social Links: "Event Attendees"
- Show all profile information

**For selective networking:**
- Email Visibility: "Connections & Event Organizers"
- Connection Requests: "Speakers & Organizers Only"
- Social Links: "Connections Only"
- Show profile information selectively

**For maximum privacy:**
- Email Visibility: "Event Organizers Only" (with public email option)
- Connection Requests: "No One" or "Speakers & Organizers Only"
- Social Links: "Hidden" or "Connections Only"
- Hide company/bio if desired

### Event Privacy Overrides

**When to use:**
- Different privacy needs at different events
- Temporary changes for specific events
- Testing privacy settings before applying globally
- Managing privacy at very large vs small events

**Remember:**
- Event overrides only apply to that specific event
- Global settings apply everywhere else
- You can have different overrides for each event
- Remove override to revert to global settings

---

## Related Topics

- [Your Profile](./your-profile) - Edit your profile information
- [Privacy Controls](../networking-features/privacy-controls) - Detailed privacy controls guide
- [Account Creation](./account-creation) - Create and verify your account
- [Making Connections](../networking-features/making-connections) - Networking at events

---

:::tip Privacy Strategy
Set your global privacy settings to your most common preference, then use event overrides for events where you want different settings. This gives you maximum control with minimum effort.
:::
