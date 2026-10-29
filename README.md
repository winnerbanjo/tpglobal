# TP GLOBAL SERVICES | Unified Digital Web Platform

> Prepared for **Nile Africa Technologies Ltd** & **TP**, Founder of TP Global Services.  
> Version 1.0 Production Specification.

---

## 💎 Project Overview & Brand Architecture

**TP Global Services** brings together four distinct luxury lifestyle divisions under one polished, mobile-first digital identity for customers across **Nigeria**, **Cape Verde**, and the international diaspora.

The website has been purposefully designed with a **slick, high-impact Yellow & Black aesthetic inspired by Stripe**, tailored for an empowered female entrepreneur:
- Radiant Electric Yellow (`#FFDC00`) & Deep Pitch Black (`#08090C` / `#0E1015`) with obsidian glassmorphic card surfaces (`#11141C`).
- Modern geometric typography (*Plus Jakarta Sans* and *Space Grotesk*) with tight letter-spacing and clean line heights.
- Stripe-style Bento Grid architecture, ambient yellow mesh glow, pulsing status indicators, and micro-interactions.

---

## 🏛️ The Four Umbrella Divisions

### 1. TP Stitches (Flagship Luxury African Fashion)
- **Brand Ambassadors Prominence**: The hero and ambassador strip prominently feature the two male brand ambassadors alongside women's ready-to-wear luxury representation.
- **Searchable & Filterable Catalogue**:
  - Filter by **Gender** (*All, Men's Native & RTW, Women's Collection, Accessories*).
  - Filter by **Category** (*Luxury Ready-to-Wear, Agbada & Ceremonial, Kaftans & Dashiki, Safari Suits, Accessories*).
  - Filter by **Fabric** (*Italian Cotton & Silk, Italian Linen, African Print, Aso-Oke Mix*).
  - Real-time search query input.
- **Client-Specified Verified Pricing**:
  - Exact independent **NGN (₦)** and **GBP (£)** amounts with no automated exchange rate distortion (e.g. *Italian Cotton & Silk at ₦120,000 / £68*, *Italian Linen at ₦170,000 / £100*, *Aso-Oke at ₦176,000 / £100*, *Royal Agbada From ₦350,000*).
  - Instant one-click **Currency Selector (₦ NGN / £ GBP)** updating all display prices.
- **Direct WhatsApp Conversion**:
  - Every product features an **"Enquire on WhatsApp"** button prefilled with the exact garment name, fabric, and price.
  - **Quick View Modal** with size selectors (S, M, L, XL, XXL, Custom Measurement) and tailored made-to-measure call-out.

### 2. TP Global Travels & Tours
- **Services Covered**:
  - Flight Ticket Assistance (domestic & international intercontinental).
  - Hotel & Resort Reservations (Lagos, Praia, Sal, London, global).
  - Dedicated **Cape Verde Document & Paperwork Assistance** anchored by the Praça Center Palmarejo hub.
  - VIP Airport Pickup & Drop-off (Lagos Murtala Muhammed & Praia Nelson Mandela).
- **Interactive Travel Quote Form**: Structured intake capturing passenger count, departure, destination, travel dates, and special requests. Automatically logs into the owner's dashboard and opens WhatsApp with a prefilled notification.

### 3. TP Global Event Planner
- **Services Covered**:
  - Luxury Venue Selection & Management.
  - Gourmet Food & Drinks Catering (traditional native dishes, continental, small chops, bar).
  - State-of-the-Art DJ Services & Sound Acoustics.
  - Master of Ceremonies (MC) Coordination.
- **Interactive Event Brief Builder**:
  - Event type selector (*Weddings, Milestone Birthdays, Corporate Galas, Private Dinners*).
  - Guest count slider (20 to 1,000+ guests).
  - Multi-service checklist and budget range selector.

### 4. TP Global Beauty Studio
- **Verified Service Menu**:
  - Certified Nail Technician Artistry (acrylics, BIAB, Russian manicures, nail art).
  - Lash Technician Applications (classic, hybrid, volume — strictly positioned as a service, not retail goods).
  - Restorative Body Massage (Swedish, deep tissue, hot stone).
  - Glamour & Bridal HD Makeup.
  - Luxury Spa Pedicure & Executive Manicure.
- **Appointment Request Flow**: Clearly and truthfully framed as an appointment request with studio concierge confirmation on WhatsApp, strictly honoring PRD scope guardrails.

---

## 📍 Verified Dual-Country Hubs

- **Nigeria Headquarters**:
  - *Address*: Block E11, Eleganza Shopping Mall Complex, VGC Bus Stop, Lekki, Lagos, Nigeria
  - *Phone / WhatsApp*: `+234 704 229 7094`
- **Cape Verde Center**:
  - *Address*: Praça Center Palmarejo, Cape Verde
  - *Phone / WhatsApp*: `+238 914 5325`
- **Official Email**: `tpwears14@gmail.com`
- **Instagram**: `@tpwears_14`
- **TikTok**: `@tp_stitches`

---

## 🛡️ Executive Lead Management Dashboard (`#admin`)

Built into the platform for Nile Africa Technologies and TP:
- **Centralized Lead Inbox**: Captures inquiries across all four divisions with persistent `localStorage` storage.
- **KPI Metrics**: Real-time counter for *Total Leads*, *New Actionable Inquiries*, *Fashion Leads*, and *Service Enquiries*.
- **Workflow Statuses**: Move leads across *New* ➔ *Contacted* ➔ *Quoted* ➔ *Won* ➔ *Closed*.
- **Direct Lead Response**: One-click WhatsApp link directly opening a chat with the lead using their supplied phone number.
- **Export to CSV**: Instant download of all customer records for external CRM analysis.
- **Simulation Tool**: "+ Simulate New Lead" button for instant testing and demonstration.

---

## 🚀 How to Run Locally

You can launch the platform instantly with zero dependencies using Node.js or Python:

### Option 1: Via Node.js (Recommended)
```bash
npm start
# OR
node server.js
```
Then visit: **`http://localhost:3000`**

### Option 2: Via Python 3
```bash
python3 -m http.server 3000
```
Then visit: **`http://localhost:3000`**

### Option 3: Direct Browser File
Double-click `index.html` in your file explorer to open it directly in any modern browser.

---

*TP Global Services • Style, Travels, Events, and Beauty in One Place.*
