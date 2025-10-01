# Design Guidelines: Campus Umbrella Rental Service (캠퍼스 우산 대여)

## Design Approach: Reference-Based with Korean University Student Aesthetic

**Selected References:** Toss (토스) for friendly UI, Airbnb for trust-building, Instagram for youthful vibrancy

**Core Principle:** Create a warm, approachable design that resonates with Korean university students (20-22 years old) while maintaining professionalism for advertiser partnerships.

## Color Palette

**Primary Colors:**
- Brand Blue: 210 100% 50% (Trustworthy, fresh - represents rainy days and reliability)
- Deep Blue: 210 85% 35% (Darker accents, text on light backgrounds)

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 45%

**Dark Mode:**
- Background: 220 20% 10%
- Surface: 220 18% 15%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%

**Accent Colors:**
- Success Green: 145 70% 45% (Form confirmations)
- Warning Orange: 30 100% 55% (Important notices)
- Soft Purple: 260 60% 65% (Advertiser section differentiation)

## Typography

**Font Families:**
- Primary: 'Pretendard' (via CDN - optimal for Korean/English mix)
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

**Scale:**
- Hero: text-5xl md:text-7xl font-bold (48px → 72px)
- Section Headers: text-3xl md:text-4xl font-bold
- Body Large: text-lg (18px)
- Body Regular: text-base (16px)
- Small/Caption: text-sm (14px)

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 consistently

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Content sections: max-w-4xl for readability
- Form containers: max-w-2xl for optimal input width

**Responsive Breakpoints:**
- Mobile-first approach
- md: 768px (tablet)
- lg: 1024px (desktop)

## Page Structure & Components

### Landing Page Sections

**1. Hero Section (80vh minimum)**
- Large hero image: Vibrant photo of Korean university campus on a rainy day (students with colorful umbrellas, modern campus buildings, energetic atmosphere)
- Centered overlay content with backdrop blur
- Main headline in Korean: Large, bold, emotionally resonant
- Subheadline: Brief value proposition
- Primary CTA button (우산 대여 신청하기) - prominent, impossible to miss
- Trust indicator: "10개 캠퍼스 운영 중" or similar social proof

**2. Why Rent Section (py-20 md:py-32)**
- 2-column layout (md:grid-cols-2)
- Left: Relatable problem statement with student-friendly tone
- Right: 3-4 benefit cards with icons
- Benefits to highlight:
  - 갑작스런 비에 걱정 없이 (No worry about sudden rain)
  - 저렴한 대여료 (Affordable rental)
  - 캠퍼스 곳곳 반납 가능 (Return anywhere on campus)
  - 친환경 공유 경제 (Eco-friendly sharing)

**3. How It Works (py-16 md:py-24)**
- 3-column step-by-step process
- Icons + Numbers + Short descriptions
- Clean, simple visual flow (1 → 2 → 3)

**4. Rental Application Form (py-20 md:py-32, bg with subtle color)**
- Sticky heading: "우산 대여 신청"
- Form fields in single column, generous spacing
- Input styling: Large touch targets (h-12), rounded corners
- Date pickers for rental/return dates
- Clear labels in Korean
- Prominent submit button at bottom
- Micro-interactions: Focus states, validation feedback

**5. Campus Locations (py-16 md:py-24)**
- Grid showcase of partner campuses
- Cards with campus names and availability status
- Optional: Simple map illustration or campus photos

**6. Advertiser Section (py-24 md:py-32, distinct background color - soft purple tint)**
- Clear section divider
- Heading: "광고주 모집 안내"
- 2-column layout:
  - Left: Benefits of advertising (reach students, premium placement, flexible packages)
  - Right: Advertiser application form
- Form styling consistent with rental form but visually distinguished
- CTA: "광고 신청하기"

**7. Footer (py-12, border-top)**
- Service information
- Contact details
- Social media links (if applicable)
- Copyright and legal info
- Keep minimal but complete

### Admin Page Design

**Login Screen:**
- Centered card (max-w-md)
- Clean, professional aesthetic
- Simple form: Username, Password, Submit
- No distractions - pure functionality

**Dashboard:**
- Side navigation (collapsible on mobile)
- Two main tabs: "우산 대여 신청" / "광고 신청"
- Data tables with:
  - Clear headers
  - Alternating row colors for readability
  - Responsive (stack on mobile)
  - All submitted data fields displayed
  - Timestamp column
  - Subtle hover states
- Empty state messaging when no data

## Component Library

**Buttons:**
- Primary: Solid blue, white text, h-12, px-8, rounded-lg, font-semibold
- Secondary: Outline style, border-2, transparent bg with backdrop-blur when on images
- Sizes: Default (h-12), Large (h-14)

**Form Inputs:**
- Height: h-12
- Border: border-2, focus:border-primary
- Rounded: rounded-lg
- Padding: px-4
- Background: Maintain dark mode consistency (dark surface color in dark mode)
- Labels: mb-2, font-medium, text-sm

**Cards:**
- Background: Surface color with subtle border
- Padding: p-6
- Rounded: rounded-xl
- Shadow: shadow-sm hover:shadow-md transition
- Border: border border-gray-200 dark:border-gray-700

**Icons:**
- Library: Heroicons (via CDN)
- Size: 24px standard, 32px for features, 48px for hero elements
- Stroke-width: 2 for modern feel

## Images

**Hero Image:**
- Full-width, high-quality photograph
- Subject: Korean university campus during/after rain - students walking with colorful umbrellas, modern campus buildings, vibrant atmosphere
- Mood: Energetic, relatable, slightly nostalgic
- Treatment: Subtle gradient overlay (dark at bottom) for text readability
- Aspect ratio: 16:9 or 21:9 for cinematic feel

**Optional Section Images:**
- Benefit cards: Icon illustrations (simple, friendly style)
- Campus showcase: Real campus photos or illustrated representations
- Advertiser section: Professional but approachable imagery

## Animations & Interactions

**Minimal, Purposeful Only:**
- Form inputs: Smooth focus transitions
- Buttons: Subtle scale on hover (scale-105)
- Cards: Gentle shadow lift on hover
- Page transitions: Fade in on scroll (use Intersection Observer sparingly)
- NO: Excessive parallax, spinning elements, or distracting movements

## Accessibility & Quality Standards

- Maintain WCAG AA contrast ratios
- Dark mode: Consistent across all form inputs and text fields
- Focus indicators: Visible and clear
- Touch targets: Minimum 44x44px
- Semantic HTML structure
- Korean language prioritized with graceful English fallbacks

## Key Design Differentiators

- **Student-Centric Tone:** Casual Korean copy, emoji usage where appropriate (but not excessive)
- **Trust Elements:** Real campus names, social proof, transparent pricing
- **Dual Audience Balance:** Friendly for students, professional for advertisers
- **Mobile Excellence:** Forms optimized for thumbs, large tap areas, minimal typing
- **Data Transparency:** Admin dashboard shows exactly what users submitted