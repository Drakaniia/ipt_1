   ---

# Major Instructions

## Title
**Admin Panel Module (Static Web Pages) with Reusable Includes and Strict Naming Convention**

## Project Description
You will extend your existing static authentication pages (login, signup, forgot-password, verify-code, reset-password) by creating an Admin module using static HTML/CSS/JS only.

### Your output must include:
1. **An admin folder** containing the following pages:
   - dashboard.html
   - profile.html
   - reports.html
   - analytics.html

2. **An includes folder** inside admin containing reusable layout components:
   - header.html
   - navigation.html
   - footer.html

3. All admin pages must display a consistent layout using the same UI components (header + navigation tabs + footer) and must look like one connected system.

> ⚠️ **No backend required.** This is a static website structure and layout activity.
> ⚠️ **Use bootstrap Utility Classes.** Minimal custom css styling (only for consistency) and use bootsrap utility class
> 📸 **Reference Images:** Use the images in `/assets/reference-images` as visual guides for your admin panel layout and design.
> 🖼️ **Asset Images:** Use the images in `/assets/images` for hero sections, banners, and other visual elements.

### Layout Overview (Based on Reference Design)
The admin panel uses a **horizontal navigation layout** (NO sidebar):
- **Header** – Top bar with logo, user profile/actions
- **Hero Banner** – Full-width banner image with profile picture overlay
- **Navigation Tabs** – Horizontal pill-style tabs for page navigation
- **Main Content** – Stat cards, tables, progress bars, and page-specific content
- **Footer** – Bottom section with copyright and links

---

## Strict Naming Convention Rules (NO EXCEPTIONS)
✅ Use lowercase only  
✅ Use hyphens for multi-word names  
✅ Use `.html` extension  
✅ Folder names must match exactly  

---

## Required Folder Structure
```
Lastname/
├── login.html
├── signup.html
├── forgot-password.html
├── verify-code.html
├── reset-password.html
├── css/
│   └── style.css
├── assets/
│   ├── js/
│   │   └── main.js
│   └── img/
└── admin/
    ├── dashboard.html
    ├── profile.html
    ├── reports.html
    ├── analytics.html
    └── includes/
        ├── header.html
        ├── navigation.html
        └── footer.html
```

---


## Required Features/Expectations

### Admin Pages (dashboard/profile/reports/analytics)
Each admin page must include:
• Header (top bar with logo and user actions)
• Hero Banner (full-width banner with profile picture overlay)
• Navigation Tabs (horizontal pill-style tabs)
• Main content area with page-specific content
• Footer (copyright and links)

### Includes Files (header/navigation/footer)
These are separate HTML files containing ONLY their section markup. They must be designed to be reused across admin pages.
> Since this is static only, you may use JS `fetch()` to load includes. Layout must be consistent.

### Page Content Requirements (Minimum)

**admin/dashboard.html**
• Page title: "Dashboard"
• 3–4 stat cards (example: Total Users, Total Reports, Alerts, Active Sessions)
• At least 1 simple table (recent activity)
• Progress bars or summary statistics

**admin/profile.html**
• Page title: "Profile"
• Profile card with picture, name, role, email
• Hero banner with profile overlay
• Simple form layout (readonly is okay): Name, Email, Contact

**admin/reports.html**
• Page title: "Reports"
• Table of reports (at least 5 rows)
• Each row includes: ID, Incident Type, Location, Date, Status

**admin/analytics.html**
• Page title: "Analytics"
• At least 2 "chart placeholders" (static boxes labeled Bar Chart/ Pie Chart)
• Summary stats cards
• Progress bars for visual data representation

---

## Detailed Content Guide for Admin Pages

### 📊 admin/dashboard.html

**Stat Cards (4 cards in a row):**
1. **Total Users** – 1,247 users | Icon: 👥 | Badge: +12% this month
2. **Total Reports** – 89 reports | Icon: 📄 | Badge: 23 pending
3. **Active Sessions** – 342 active | Icon: 🟢 | Badge: Live now
4. **System Alerts** – 5 alerts | Icon: ⚠️ | Badge: 2 critical

**Recent Activity Table (minimum 5 rows):**
| User | Action | Timestamp | Status |
|------|--------|-----------|--------|
| John Doe | Submitted Report #1024 | 2024-01-15 10:30 AM | Completed |
| Jane Smith | Updated Profile | 2024-01-15 09:45 AM | Completed |
| Mike Johnson | Login Attempt | 2024-01-15 09:20 AM | Success |
| Sarah Williams | Generated Analytics | 2024-01-15 08:55 AM | Completed |
| Tom Brown | Password Reset | 2024-01-15 08:30 AM | Pending |

**Progress Bars/Summary:**
- System Health: 92% (green)
- Storage Used: 67% (yellow)
- Monthly Goal: 85% (blue)

---

### 👤 admin/profile.html

**Profile Card:**
- Profile Picture: Circular avatar (use placeholder or asset image)
- Full Name: Admin User
- Role/Position: System Administrator
- Email: admin@example.com
- Member Since: January 2024

**Profile Form Fields:**
- First Name: Admin
- Last Name: User
- Email Address: admin@example.com
- Phone Number: +1 (555) 123-4567
- Department: IT Administration
- Location: Main Office
- Bio/Description: System administrator with full access privileges

**Additional Sections:**
- Account Settings button
- Change Password button
- Two-Factor Authentication toggle (ON/OFF)

---

### 📋 admin/reports.html

**Reports Table (minimum 5 rows):**
| Report ID | Incident Type | Location | Date Submitted | Status | Priority |
|-----------|---------------|----------|----------------|--------|----------|
| RPT-1024 | System Error | Server Room A | 2024-01-15 | Under Review | High |
| RPT-1023 | User Access Issue | Building 2 | 2024-01-14 | Resolved | Medium |
| RPT-1022 | Network Outage | Floor 3 | 2024-01-14 | In Progress | Critical |
| RPT-1021 | Hardware Failure | Workstation 45 | 2024-01-13 | Pending | Low |
| RPT-1020 | Security Alert | Main Entrance | 2024-01-13 | Resolved | High |
| RPT-1019 | Software Bug | Development Lab | 2024-01-12 | Under Review | Medium |
| RPT-1018 | Data Backup Issue | Cloud Storage | 2024-01-12 | Resolved | High |

**Filter Options:**
- Status: All / Pending / In Progress / Resolved
- Priority: All / Critical / High / Medium / Low
- Date Range: Last 7 days / Last 30 days / Custom

**Action Buttons:**
- View Details
- Export to PDF
- Generate Report

---

### 📈 admin/analytics.html

**Summary Stat Cards (4 cards):**
1. **Total Page Views** – 45,892 views | Trend: ↑ 15%
2. **Avg. Session Duration** – 8m 32s | Trend: ↑ 5%
3. **Bounce Rate** – 32.4% | Trend: ↓ 8%
4. **Conversion Rate** – 12.8% | Trend: ↑ 3%

**Chart Placeholders (2 minimum):**
1. **Bar Chart** – "Monthly User Activity"
   - Placeholder box with title and axis labels
   - X-axis: Jan, Feb, Mar, Apr, May, Jun
   - Y-axis: 0 - 1000 users

2. **Pie Chart** – "Report Status Distribution"
   - Placeholder circle with legend
   - Segments: Resolved (45%), In Progress (30%), Pending (15%), Under Review (10%)

**Additional Chart (Optional):**
3. **Line Chart** – "System Performance Over Time"
   - Placeholder with trend line visualization

**Progress Indicators:**
- User Engagement: 78% (with progress bar)
- Report Resolution Rate: 85% (with progress bar)
- System Uptime: 99.2% (with progress bar)
- Customer Satisfaction: 4.5/5 stars (with star rating)

**Data Table (Optional):**
- Top 5 Most Active Users
- Top 5 Most Common Issues
- Peak Usage Hours

---

### Navigation Links (required)
Horizontal navigation tabs must include links to:
• Dashboard
• Profile
• Reports
• Analytics
• Logout (links back to `../login.html`)

---

## Step-by-Step Instructions

1. **Step 1 — Create folders**
   - Open your existing project folder.
   - Create a folder named exactly: `admin`
   - Inside admin, create a folder named exactly: `includes`

2. **Step 2 — Create required admin pages**
   Inside `admin/`, create:
   • dashboard.html
   • profile.html
   • reports.html
   • analytics.html

3. **Step 3 — Create include files**
   Inside `admin/includes/`, create:
   • header.html
   • navigation.html
   • footer.html

4. **Step 4 — Build your reusable UI components**
   • Put header (logo + user actions) inside `header.html`
   • Put hero banner with profile overlay inside `header.html` or directly in pages
   • Put horizontal navigation tabs inside `navigation.html`
   • Put footer (copyright, links) inside `footer.html`

5. **Step 5 — Apply the layout to each admin page**
   Each admin page must show:
   • Header at the top
   • Hero banner with profile picture overlay
   • Horizontal navigation tabs below the banner
   • Main content changes per page
   • Footer at the bottom

6. **Step 6 — Link all pages correctly**
   • Navigation tab links must go to the correct admin pages
   • Logout must go back to `../login.html`
   • Ensure links work from every page (no broken paths)

7. **Step 7 — Styling (Required)**
   • All pages must share one CSS file (recommended: `assets/css/style.css`)
   • Pages must look consistent (same font, spacing, colors)
   • Follow the reference design for visual styling

8. **Step 8 — Final checking**
   • Check file/folder names (strict)
   • Test all links
   • Open each page and confirm layout is consistent

---

Here are the two Rubric tables with only the **Criteria** and **5 – Excellent** columns:

### Admin Structure, Naming, and Layout Implementation

| Criteria | 5 – Excellent |
| :--- | :--- |
| **Folder Structure & Organization** | Folder structure exactly follows required format (admin/ and admin/includes/), no missing files, perfectly organized |
| **Strict Naming Convention Compliance** | All filenames and folders strictly follow lowercase, hyphen format, correct paths, no errors |
| **Includes Implementation (header, navigation, footer)** | All includes created correctly, reusable layout clearly structured and consistent across pages |
| **Layout Consistency Across Admin Pages** | Dashboard, Profile, Reports, Analytics all have consistent header, navigation tabs, footer, spacing, and alignment |
| **Navigation Linking Accuracy** | All navigation tab links work correctly; logout correctly links to `../login.html`; no broken paths |

---

### Content Quality, UI Design, and Functionality

| Criteria | 5 – Excellent |
| :--- | :--- |
| **Dashboard Page Content** | Includes at least 3 statistic cards and a complete table (min 5 rows); layout clean and professional |
| **Profile Page Layout & Form Design** | Profile card and form layout well-structured, properly aligned, visually consistent |
| **Reports Page Table Implementation** | Table includes required columns and minimum 5 rows; clear structure and clean formatting |
| **Analytics Page Structure** | Contains at least 2 chart placeholders and summary stats; clean, organized layout |
| **UI Consistency & Professional Appearance** | Consistent font usage, spacing, colors, alignment; visually professional |

---

