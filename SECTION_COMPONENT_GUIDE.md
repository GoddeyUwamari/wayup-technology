# Section Component - Professional Usage Guide

## Overview

The **Section** component is a versatile, professional building block for creating modern, responsive page sections. It supports both **legacy pricing cards** (backward compatible) and **new professional layouts** with flexible styling options.

---

## Features

✅ **Multiple Layout Options**: 2-column, 3-column, 4-column grids
✅ **Dark Theme Styling**: Professional WayUP brand colors
✅ **Reusable Components**: Cards, feature lists, stats, CTAs, images
✅ **Hover Animations**: Smooth transitions and effects
✅ **Fully Responsive**: Mobile-first design
✅ **Scoped Styles**: Zero conflicts with other components
✅ **Accessibility**: ARIA-friendly, keyboard navigation
✅ **Background Patterns**: Optional decorative patterns

---

## Basic Usage

### 1. Legacy Pricing Section (Default)

The component maintains **backward compatibility** with existing pricing cards:

```jsx
import Section from './components/Section';

function HomePage() {
  return (
    <>
      <Section />  {/* Shows default pricing cards */}
    </>
  );
}
```

---

## Modern Professional Usage

### 2. Simple Content Section

```jsx
import Section, { SectionCard } from './components/Section';

function ServicesPage() {
  return (
    <Section
      variant="dark"
      layout="three-column"
      header={{
        badge: "Our Services",
        title: "Transform Your Digital Presence",
        titleHighlight: "Digital",
        subtitle: "We offer cutting-edge solutions to help your business grow and succeed in the digital landscape."
      }}
      showPattern={true}
    >
      <SectionCard
        icon={<span>🚀</span>}
        title="Web Development"
        description="Custom websites built with modern technologies and best practices."
      />

      <SectionCard
        icon={<span>📱</span>}
        title="Mobile Apps"
        description="Native and cross-platform mobile applications that deliver exceptional user experiences."
      />

      <SectionCard
        icon={<span>☁️</span>}
        title="Cloud Solutions"
        description="Scalable cloud infrastructure and deployment strategies for your applications."
      />
    </Section>
  );
}
```

---

### 3. Two-Column Layout with Image

```jsx
import Section, { SectionImage, FeatureList } from './components/Section';

function AboutPage() {
  const features = [
    "10+ years of industry experience",
    "Certified professionals and experts",
    "24/7 customer support available",
    "99.9% uptime guarantee",
    "Enterprise-grade security"
  ];

  return (
    <Section
      variant="light"
      layout="two-column"
      header={{
        badge: "Why Choose Us",
        title: "Built for Excellence",
        subtitle: "We deliver world-class solutions that drive real business results."
      }}
    >
      <div>
        <h3 style={{ color: '#fff', fontSize: '28px', marginBottom: '20px' }}>
          Industry-Leading Expertise
        </h3>
        <p style={{ color: '#cbd5e0', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
          Our team of experts brings decades of combined experience in building
          enterprise-level solutions that scale with your business needs.
        </p>
        <FeatureList features={features} />
      </div>

      <SectionImage
        src="/images/team-photo.jpg"
        alt="Our professional team"
        withOverlay={true}
      />
    </Section>
  );
}
```

---

### 4. Stats Display Section

```jsx
import Section, { StatsGrid, SectionCTA } from './components/Section';

function ResultsPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "15yrs", label: "Experience" }
  ];

  return (
    <Section
      variant="dark"
      header={{
        badge: "Our Impact",
        title: "Results That Speak for Themselves",
        titleHighlight: "Speak",
        subtitle: "We've helped hundreds of businesses achieve their digital transformation goals."
      }}
      showPattern={true}
    >
      <StatsGrid stats={stats} />

      <SectionCTA
        primary={{
          text: "Start Your Project",
          href: "/contact",
          onClick: (e) => {
            e.preventDefault();
            // Custom navigation logic
          }
        }}
        secondary={{
          text: "View Case Studies",
          href: "/portfolio"
        }}
      />
    </Section>
  );
}
```

---

### 5. Four-Column Feature Grid

```jsx
import Section, { SectionCard } from './components/Section';
import { FaRocket, FaShieldAlt, FaCogs, FaChartLine } from 'react-icons/fa';

function FeaturesPage() {
  return (
    <Section
      variant="light"
      layout="four-column"
      header={{
        badge: "Platform Features",
        title: "Everything You Need to Succeed",
        subtitle: "Powerful features designed to help you build, deploy, and scale your applications."
      }}
    >
      <SectionCard
        icon={<FaRocket />}
        title="Fast Deployment"
        description="Deploy your applications in minutes with our automated CI/CD pipeline."
      />

      <SectionCard
        icon={<FaShieldAlt />}
        title="Enterprise Security"
        description="Bank-level security with encryption, compliance, and monitoring."
      />

      <SectionCard
        icon={<FaCogs />}
        title="Easy Integration"
        description="Connect with your favorite tools and services seamlessly."
      />

      <SectionCard
        icon={<FaChartLine />}
        title="Analytics Dashboard"
        description="Real-time insights and metrics to track your performance."
      />
    </Section>
  );
}
```

---

### 6. Custom Card with Additional Content

```jsx
import Section, { SectionCard, SectionCTA } from './components/Section';

function PricingPage() {
  return (
    <Section
      variant="dark"
      layout="three-column"
      header={{
        badge: "Pricing Plans",
        title: "Choose Your Perfect Plan",
        subtitle: "Flexible pricing options for businesses of all sizes."
      }}
      showPattern={true}
    >
      <SectionCard
        icon={<span style={{ fontSize: '32px' }}>💼</span>}
        title="Starter"
        description="Perfect for small teams and startups."
      >
        <div style={{ marginTop: '20px' }}>
          <p style={{ color: '#ef5a16', fontSize: '36px', fontWeight: '800' }}>$29</p>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>per month</p>
          <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e0' }}>
            <li style={{ marginBottom: '8px' }}>✓ Up to 5 users</li>
            <li style={{ marginBottom: '8px' }}>✓ 10 GB storage</li>
            <li style={{ marginBottom: '8px' }}>✓ Basic support</li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard
        icon={<span style={{ fontSize: '32px' }}>🚀</span>}
        title="Professional"
        description="For growing businesses and teams."
      >
        <div style={{ marginTop: '20px' }}>
          <p style={{ color: '#ef5a16', fontSize: '36px', fontWeight: '800' }}>$99</p>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>per month</p>
          <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e0' }}>
            <li style={{ marginBottom: '8px' }}>✓ Up to 25 users</li>
            <li style={{ marginBottom: '8px' }}>✓ 100 GB storage</li>
            <li style={{ marginBottom: '8px' }}>✓ Priority support</li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard
        icon={<span style={{ fontSize: '32px' }}>⭐</span>}
        title="Enterprise"
        description="For large organizations with advanced needs."
      >
        <div style={{ marginTop: '20px' }}>
          <p style={{ color: '#ef5a16', fontSize: '36px', fontWeight: '800' }}>Custom</p>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>contact us</p>
          <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e0' }}>
            <li style={{ marginBottom: '8px' }}>✓ Unlimited users</li>
            <li style={{ marginBottom: '8px' }}>✓ Unlimited storage</li>
            <li style={{ marginBottom: '8px' }}>✓ Dedicated support</li>
          </ul>
        </div>
      </SectionCard>
    </Section>
  );
}
```

---

## Props Reference

### Section Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | `'ruler'` | Additional CSS classes |
| `variant` | string | `'pricing'` | Section style: `'pricing'`, `'dark'`, `'light'` |
| `layout` | string | `'grid'` | Layout type: `'grid'`, `'two-column'`, `'three-column'`, `'four-column'` |
| `header` | object | `null` | Header configuration (see below) |
| `children` | node | `null` | Section content |
| `showPattern` | boolean | `false` | Show decorative background pattern |

### Header Object Props

```javascript
{
  badge: "Badge Text",           // Optional badge above title
  title: "Section Title",        // Main heading
  titleHighlight: "Highlight",   // Word to highlight in orange
  subtitle: "Subtitle text"      // Description below title
}
```

### SectionCard Props

| Prop | Type | Description |
|------|------|-------------|
| `icon` | node | Icon element (emoji, SVG, or React icon) |
| `title` | string | Card title |
| `description` | string | Card description |
| `children` | node | Additional card content |
| `className` | string | Additional CSS classes |

### FeatureList Props

| Prop | Type | Description |
|------|------|-------------|
| `features` | array | Array of feature strings |

### StatsGrid Props

| Prop | Type | Description |
|------|------|-------------|
| `stats` | array | Array of objects: `{ number, label }` |

### SectionCTA Props

| Prop | Type | Description |
|------|------|-------------|
| `primary` | object | Primary button: `{ text, href, onClick }` |
| `secondary` | object | Secondary button: `{ text, href, onClick }` |

### SectionImage Props

| Prop | Type | Description |
|------|------|-------------|
| `src` | string | Image source URL |
| `alt` | string | Alt text for accessibility |
| `withOverlay` | boolean | Show gradient overlay on hover |

---

## WayUP Brand Colors

The component uses official WayUP brand colors:

```css
/* Dark Backgrounds */
#0f172a  /* Primary dark */
#000048  /* Deep navy */
#1e293b  /* Slate dark */

/* Orange Brand Colors */
#ef5a16  /* Primary orange */
#f97316  /* Accent orange */

/* Text Colors */
#ffffff  /* White text */
#cbd5e0  /* Light gray text */
#94a3b8  /* Muted gray text */
```

---

## Responsive Behavior

The component is fully responsive with the following breakpoints:

- **Desktop (1024px+)**: Full multi-column layouts
- **Tablet (768px-1023px)**: 2-column grids, adjusted spacing
- **Mobile (<768px)**: Single column, optimized for small screens

---

## Best Practices

1. **Use Semantic Variants**: Choose `'dark'` or `'light'` based on surrounding content
2. **Consistent Spacing**: Let the component handle padding and margins
3. **Icon Sizing**: Keep icons consistent (32px recommended)
4. **Content Length**: Keep card descriptions concise (2-3 lines)
5. **Pattern Usage**: Use `showPattern` sparingly for visual interest
6. **Accessibility**: Always provide alt text for images
7. **Performance**: Import only the components you need

---

## Migration from Legacy

If you're using the old pricing section:

```jsx
// Old way (still works)
<Section />

// New way (when ready to migrate)
<Section
  variant="dark"
  layout="three-column"
  header={{ title: "Pricing Plans" }}
>
  {/* Your custom content */}
</Section>
```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Troubleshooting

**Q: Styles not applying?**
A: Ensure `Section.css` is imported and all selectors are scoped to `.section-component`

**Q: Layout breaking on mobile?**
A: Check that you're not overriding the responsive grid styles

**Q: Animation conflicts?**
A: All animations are prefixed with `section-` to avoid conflicts

**Q: Icons not showing?**
A: Make sure to install and import icon libraries (e.g., `react-icons`)

---

## Example: Complete Page

```jsx
import React from 'react';
import Section, {
  SectionCard,
  StatsGrid,
  FeatureList,
  SectionCTA
} from './components/Section';

function CompletePage() {
  return (
    <>
      {/* Hero Stats */}
      <Section
        variant="dark"
        header={{
          badge: "Trusted by Industry Leaders",
          title: "Delivering Excellence Since 2008",
        }}
        showPattern={true}
      >
        <StatsGrid stats={[
          { number: "500+", label: "Projects" },
          { number: "98%", label: "Satisfaction" },
          { number: "50+", label: "Team Members" },
          { number: "15yrs", label: "Experience" }
        ]} />
      </Section>

      {/* Services */}
      <Section
        variant="light"
        layout="three-column"
        header={{
          badge: "What We Do",
          title: "Our Core Services",
          subtitle: "Comprehensive solutions for your digital needs."
        }}
      >
        <SectionCard
          icon={<span>🎨</span>}
          title="Design"
          description="Beautiful, user-friendly interfaces that convert."
        />
        <SectionCard
          icon={<span>💻</span>}
          title="Development"
          description="Robust, scalable applications built to last."
        />
        <SectionCard
          icon={<span>📈</span>}
          title="Marketing"
          description="Data-driven strategies that drive growth."
        />
      </Section>

      {/* CTA */}
      <Section
        variant="dark"
        header={{
          title: "Ready to Get Started?",
          subtitle: "Let's build something amazing together."
        }}
      >
        <SectionCTA
          primary={{ text: "Contact Us", href: "/contact" }}
          secondary={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Section>
    </>
  );
}

export default CompletePage;
```

---

## Support

For questions or issues with the Section component:
- Check this guide first
- Review the component source code
- Test in isolation to identify conflicts
- Verify all props are correctly typed

---

**Version**: 2.0
**Last Updated**: November 2025
**Maintained by**: WayUP Technologies
