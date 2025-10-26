# Managing Sponsors

Sponsor management lets event organizers showcase sponsors, create sponsorship tiers, and manage sponsor information. This guide covers everything from setting up tiers to adding sponsors and organizing their display.

## Overview

The sponsor management system provides:
- **Customizable sponsor tiers** (Platinum, Gold, Silver, etc.)
- **Comprehensive sponsor profiles** with logos, descriptions, and social links
- **Drag-and-drop reordering** within and between tiers
- **Visibility controls** (active/inactive, featured)
- **Automatic logo optimization** (WebP conversion, compression)

**Who can manage sponsors:**
- Event **Admins** - Full sponsor management access
- Event **Organizers** - Full sponsor management access

---

## Accessing Sponsor Management

1. Navigate to your event in Event Admin
2. Click **Sponsors** in the sidebar
3. You'll see the Sponsors Manager with your tiers and sponsors

**The Sponsors Manager shows:**
- Sponsor tiers with their sponsors organized underneath
- Sponsor cards with logos, names, and tier assignments
- Add Sponsor button
- Manage Tiers button

---

## Setting Up Sponsor Tiers

Sponsor tiers are categories for organizing sponsors by sponsorship level (Platinum, Gold, Silver, etc.).

### Default Tiers

Every new event includes five default tiers:

| Tier | Display Name | Color | Order |
|------|--------------|-------|-------|
| Platinum | Platinum Sponsor | Silver (#E5E4E2) | 1 (top) |
| Gold | Gold Sponsor | Gold (#DEAE4A) | 2 |
| Silver | Silver Sponsor | Light Blue (#C7D3DB) | 3 |
| Bronze | Bronze Sponsor | Brown (#BB8F4C) | 4 |
| Community | Community Partner | Purple (#8B5CF6) | 5 (bottom) |

### Managing Tiers

To customize your sponsor tiers:

1. Click **Manage Tiers** button in Sponsors Manager
2. The Tier Management modal opens
3. You can:
   - Edit existing tiers (name, color, order)
   - Add new tiers
   - Delete tiers
4. Click **Save Tiers** to apply changes

### Adding a New Tier

1. In the Tier Management modal, click **Add Tier**
2. Fill in the tier information:
   - **Tier ID:** Lowercase identifier (e.g., "vip", "partner", "sponsor-2024")
     - Use lowercase letters, numbers, and hyphens - no spaces
   - **Display Name:** What attendees see (e.g., "VIP Partner")
     - Can include spaces and capitals
   - **Color:** Hex color code for visual identification
     - Click the color picker to choose from presets or enter custom hex (e.g., #FF5733)
     - Save and check your sponsors page to see how the tier color looks with your event's design
3. Order is automatically assigned as the next available number
4. Click **Save Tiers**

:::tip Tier ID vs Display Name
- **Tier ID:** Internal identifier, lowercase only (e.g., "platinum")
- **Display Name:** Public-facing name, any format (e.g., "Platinum Sponsor")
:::

### Editing a Tier

1. In the Tier Management modal, find the tier
2. Update any field:
   - **Display Name:** Change how it appears to attendees
   - **Color:** Change the tier's visual color
   - **Order:** Change the tier's display position (lower numbers = higher priority)
3. Click **Save Tiers**

**Color Picker Presets:**
- Platinum: #E5E4E2
- Gold: #DEAE4A
- Silver: #C7D3DB
- Bronze: #BB8F4C
- Purple: #8B5CF6
- Additional options available

### Deleting a Tier

1. In the Tier Management modal, find the tier
2. Click the **delete/trash icon** next to it
3. The tier is removed from the list
4. Click **Save Tiers**

:::warning Sponsors in Deleted Tiers
If you delete a tier that has sponsors assigned to it, those sponsors may need to be reassigned to a different tier or they'll appear without a tier designation.
:::

---

## Adding a Sponsor

### How to Add a Sponsor

1. In the Sponsors Manager, click **Add Sponsor**
2. The Add Sponsor modal opens
3. Fill in the sponsor information (details below)
4. Click **Create Sponsor** or **Save**

The sponsor will appear in the appropriate tier based on your selection.

### Basic Information

**Sponsor Name** (Required)
- The company or organization name
- Maximum 255 characters
- This is the primary identifier shown on sponsor cards

**Description** (Optional)
- Company bio or description
- Maximum 1000 characters
- Shown in sponsor details view
- Example: "Leading provider of enterprise software solutions since 2010"

**Website URL** (Optional)
- Company website
- Must start with http:// or https://
- Appears as a clickable link
- Example: https://www.acmecorp.com

**Tier** (Required)
- Select from your configured sponsor tiers
- Determines where the sponsor appears
- Can be changed later

### Logo Upload

**Upload a sponsor logo:**

1. Click **Upload Logo** or the file upload button
2. Select an image file from your computer
3. See a preview of the logo (80x80px on desktop, 60x60px on mobile)
4. The logo uploads when you save the sponsor

**Accepted formats:**
- PNG
- JPEG
- GIF
- WebP

**File size limit:** 10 MB

**Automatic optimization:**
- Logos are automatically converted to WebP format
- Resized to maximum 800px (maintaining aspect ratio)
- Compressed for fast loading
- Typical output: 50-200 KB

:::tip Logo Quality
Upload high-quality logos (at least 400x400px recommended). They'll be automatically optimized for web display while maintaining quality.
:::

### Contact Information (Optional, Collapsible)

Private information for organizer reference only, not shown to attendees.

**Contact Name**
- Primary contact person
- Maximum 255 characters

**Contact Email**
- Valid email format
- Maximum 255 characters

**Contact Phone**
- Phone number with digits, spaces, +, parentheses, hyphens
- Maximum 50 characters
- Example: +1 (555) 123-4567

### Social Media Links (Optional)

Add social media profiles for the sponsor:

**Available platforms:**
- Twitter
- LinkedIn
- Facebook
- Instagram
- YouTube
- TikTok
- Other (custom link)

**Requirements:**
- All links must start with http:// or https://
- Each platform is optional
- Example: https://twitter.com/acmecorp

---

## Editing a Sponsor

### How to Edit

**Method 1:**
1. Find the sponsor in the Sponsors Manager
2. Click the **menu icon** (three dots) on the sponsor card
3. Select **Edit**

**Method 2:**
1. Click directly on the sponsor card
2. The edit modal opens

### What You Can Edit

- Sponsor name
- Description
- Website URL
- Tier assignment (changes which tier they appear in)
- Logo (replace or keep existing)
- Contact information
- Social media links

**Logo changes:**
- Keep existing logo (don't upload new one)
- Replace with new logo (upload a new file)

:::note Tier Changes
Changing a sponsor's tier moves them to that tier's section. Their display order within the new tier is calculated automatically.
:::

---

## Organizing Sponsors

### Drag-and-Drop Ordering

Sponsors within each tier can be reordered using drag and drop:

**How to reorder:**

1. **Grab the sponsor card** by the grip handle (if visible) or by clicking and holding
2. **Drag** the sponsor to a new position
3. **Drop** it where you want it
4. The order updates immediately

**You can:**
- Reorder sponsors within the same tier
- Move sponsors between different tiers (changes tier assignment)

**Ordering behavior:**
- Sponsors with lower order numbers appear first
- New sponsors are added to the end of their tier
- Order is automatically recalculated when you drag and drop

:::tip Cross-Tier Dragging
Dragging a sponsor from one tier to another updates both their tier assignment and display order. You'll see a notification showing the move.
:::

### Display Order

Each sponsor has a display order value that determines its position:

- **Within a tier:** Sponsors are sorted by this order value
- **Across tiers:** Tiers are sorted by tier order, then sponsors by display order within each tier
- **Automatic calculation:** Order is calculated automatically when you add or move sponsors

**You don't need to manage order numbers manually** - just drag and drop to reorder.

---

## Visibility Controls

### Active vs Inactive Sponsors

Control whether sponsors appear in public listings:

**Active:** Sponsor appears in sponsor listings
**Inactive:** Sponsor hidden from public view (admins can still see them)

**How to toggle:**

1. Find the sponsor card
2. **Desktop:** Use the toggle switch
3. **Mobile:** Click menu → Toggle active status
4. The sponsor is immediately hidden or shown

**When to mark inactive:**
- Sponsorship expired
- Sponsor requested temporary removal
- Event date has passed
- Sponsor details incomplete
- Pending verification

:::info Admin View
Inactive sponsors are hidden from attendees but remain visible to admins and organizers in the Sponsors Manager.
:::

### Featured Sponsors

Mark sponsors as "featured" to give them special prominence:

**What "featured" means:**
- Special designation in the system
- Can be used to highlight top-tier sponsors
- Behavior depends on your event's theme/display

**How to feature a sponsor:**
- Currently managed through sponsor profile
- Typically reserved for highest-tier sponsors

---

## Deleting Sponsors

To remove a sponsor:

1. Find the sponsor in the Sponsors Manager
2. Click the **menu icon** (three dots)
3. Select **Delete** or **Remove Sponsor**
4. Confirm the deletion

:::warning Permanent Action
Deleting a sponsor removes it permanently, including its logo and all information. This cannot be undone.
:::

---

## Logo Management

### Logo Specifications

**Recommended logo sizes:**
- Minimum: 400x400px
- Recommended: 800x800px or higher
- Maximum: Any size (will be resized to 800px max)

**Display sizes:**
- Desktop cards: 50x50px
- Mobile cards: 40x40px
- Admin edit view: 80x80px

**Formats accepted:**
- PNG (supports transparency)
- JPEG
- GIF
- WebP

### Automatic Optimization

All uploaded logos are automatically optimized for web display:
- Resized to maximum 800px (maintains aspect ratio)
- Converted to WebP format for best compression
- Typical file size reduction: 70-85%
- Orientation corrected automatically

### Replacing Logos

To change a sponsor's logo:

1. Edit the sponsor
2. In the logo section, click **Upload Logo** or file button
3. Select new logo file
4. Preview shows the new logo
5. Save the sponsor
6. Old logo is replaced with the new one

---

## Best Practices

### Setting Up Tiers

**Tier structure:**
- Use 3-5 tiers for most events
- Name tiers clearly (Platinum, Gold, Silver, Bronze)
- Order from highest to lowest sponsorship level
- Use distinct colors for easy visual identification

**Custom tiers:**
- Add specific tiers for your event (VIP, Presenting Sponsor, Media Partner)
- Keep tier IDs simple and lowercase
- Make display names descriptive

### Adding Sponsors

**Information to include:**
- Add a logo if available (sponsors without logos show a placeholder)
- Write a clear, concise description
- Include website URL for attendee reference
- Add social links for better engagement

**Contact information:**
- Keep contact details up to date
- Use for internal coordination only

### Organizing Display

**Ordering:**
- Place most important sponsors at the top of each tier
- Drag and drop to reorder as needed

**Active/inactive usage:**
- Mark sponsors inactive rather than deleting if they might return
- Keep inactive sponsors for historical records
- Activate sponsors as you confirm them

---

## Common Scenarios

### Scenario 1: Setting Up Sponsors for a New Event

**Goal:** Add all sponsors organized by tier

**Steps:**
1. Review default tiers, customize if needed
2. Start with highest tier (Platinum)
3. Add each sponsor with logo, description, website
4. Move to next tier down
5. Repeat until all sponsors added
6. Reorder within tiers if needed

### Scenario 2: Adding a Last-Minute Sponsor

**Goal:** Quickly add a new sponsor

**Steps:**
1. Click **Add Sponsor**
2. Enter sponsor name and select tier
3. Upload logo (required for visibility)
4. Add website URL
5. Save (skip optional fields for now)
6. Edit later to add full details

### Scenario 3: Promoting a Sponsor to a Higher Tier

**Goal:** Move sponsor from Silver to Gold tier

**Steps:**
1. Edit the sponsor
2. Change tier from Silver to Gold
3. Save
4. Sponsor moves to Gold tier section
5. Drag to adjust position within Gold tier if needed

### Scenario 4: Adding Sponsors Ahead of Confirmation

**Goal:** Add all sponsors early, activate as they confirm payment/contracts

**Steps:**
1. Add all potential sponsors with their information
2. Keep them **Inactive** until payment received or contract signed
3. As each sponsor confirms, toggle to **Active**
4. Sponsor immediately appears on your event page

This prevents last-minute work and lets you prepare everything in advance.

### Scenario 5: Reordering Multiple Sponsors

**Goal:** Organize sponsors by importance

**Steps:**
1. Within each tier, drag sponsors to desired order
2. Most important at top, others below
3. Each drag updates the order immediately
4. No save button needed - changes auto-save

---

## Troubleshooting

### Can't Upload Logo

**Problem:** Logo upload button doesn't work or fails

**Solutions:**
- Check file size (must be under 10 MB)
- Verify file format (PNG, JPEG, GIF, or WebP only)
- Try a different image
- Reduce file size if too large
- Check internet connection

### Logo Not Displaying

**Problem:** Uploaded logo doesn't show

**Solutions:**
- Wait a moment for optimization to complete
- Refresh the page
- Check that you saved the sponsor after uploading
- Verify the file uploaded successfully

### Can't Reorder Sponsors

**Problem:** Drag and drop not working

**Solutions:**
- Make sure you're an Admin or Organizer
- Try clicking and holding longer before dragging
- Refresh the page and try again
- Check browser compatibility

### Tier Changes Not Saving

**Problem:** Edited tiers but changes disappeared

**Solutions:**
- Click **Save Tiers** after making changes
- Don't close modal without saving
- Check for validation errors (red text)
- Verify tier IDs are lowercase with no spaces

### Sponsor Appears in Wrong Tier

**Problem:** Sponsor showing in unexpected tier

**Solutions:**
- Edit the sponsor
- Check tier assignment dropdown
- Select the correct tier
- Save and verify

### Can't Delete a Sponsor

**Problem:** Delete button disabled or not working

**Solutions:**
- Verify you're an Admin or Organizer
- Refresh the page
- Try from the sponsor edit modal instead
- Check browser console for errors

---

## Related Topics

- [Event Customization](../event-management/customization) - Customize other event details
- [Publishing Your Event](../event-management/publishing) - Make your event public
- Sessions & Speakers - Manage event sessions (if applicable)

---

:::tip Sponsor Visibility
Sponsors appear on your event page when they're marked as **Active**. Sponsors without logos will show a placeholder. Make sure to toggle sponsors to active for them to be visible to attendees.
:::
