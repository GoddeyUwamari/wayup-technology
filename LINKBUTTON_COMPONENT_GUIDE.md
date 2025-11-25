# LinkButton Component - Professional Usage Guide

## Overview

The **LinkButton** component is a versatile, professional navigation element that provides consistent styling across all link types in your application. It supports both internal routing (React Router) and external links with multiple variants and animations.

---

## Features

✅ **15+ Link Variants**: Default, primary, button styles, nav links, badges, cards, and more
✅ **Internal & External**: Seamless React Router integration + external link support
✅ **Icon Support**: Left or right positioned icons with animations
✅ **Size Variants**: Small, medium (default), and large sizes
✅ **Accessibility**: ARIA support, keyboard navigation, focus states
✅ **Animations**: Pulse, bounce, underline, and hover effects
✅ **Responsive**: Mobile-first design with breakpoints
✅ **Loading State**: Built-in loading indicator
✅ **Scoped Styles**: Zero conflicts with `.link-component` scoping

---

## Installation

The LinkButton component is already created in your project:
- **Component**: `src/components/LinkButton.js`
- **Styles**: `src/components/LinkButton.css`

```jsx
import LinkButton from './components/LinkButton';
// Or use named exports
import { PrimaryLink, SecondaryLink, NavLink } from './components/LinkButton';
```

---

## Basic Usage

### 1. Simple Text Links

```jsx
import LinkButton from './components/LinkButton';

// Default link (gray text)
<LinkButton to="/about">About Us</LinkButton>

// Primary link (orange text)
<LinkButton to="/services" variant="primary">
  Our Services
</LinkButton>

// White link
<LinkButton to="/contact" variant="white">
  Contact
</LinkButton>
```

---

### 2. Button-Style Links

```jsx
import { PrimaryLink, SecondaryLink } from './components/LinkButton';

// Primary button (orange gradient)
<PrimaryLink to="/get-started">
  Get Started
</PrimaryLink>

// Secondary button (outlined)
<SecondaryLink to="/learn-more">
  Learn More
</SecondaryLink>

// Outline button
<LinkButton to="/explore" variant="button-outline">
  Explore Features
</LinkButton>
```

---

### 3. Links with Icons

```jsx
import LinkButton from './components/LinkButton';
import { FaArrowRight, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

// Icon on right (default)
<LinkButton
  to="/services"
  variant="primary"
  icon={<FaArrowRight />}
>
  View Services
</LinkButton>

// Icon on left
<LinkButton
  to="/back"
  variant="default"
  icon={<FaArrowLeft />}
  iconPosition="left"
>
  Go Back
</LinkButton>

// Button with download icon
<PrimaryLink
  href="/files/brochure.pdf"
  icon={<FaDownload />}
  external
>
  Download Brochure
</PrimaryLink>
```

---

### 4. Navigation Links

```jsx
import { NavLink } from './components/LinkButton';

function Navigation() {
  const currentPath = window.location.pathname;

  return (
    <nav>
      <NavLink to="/" active={currentPath === '/'}>
        Home
      </NavLink>
      <NavLink to="/services" active={currentPath === '/services'}>
        Services
      </NavLink>
      <NavLink to="/about" active={currentPath === '/about'}>
        About
      </NavLink>
    </nav>
  );
}
```

---

### 5. External Links

```jsx
import LinkButton from './components/LinkButton';

// Opens in new tab with security
<LinkButton
  href="https://example.com"
  external
  variant="primary"
>
  Visit Website
</LinkButton>

// External link with indicator (↗)
<LinkButton
  href="https://docs.example.com"
  external
  variant="external"
>
  View Documentation
</LinkButton>
```

---

### 6. Underline Animated Links

```jsx
import { UnderlineLink } from './components/LinkButton';

<UnderlineLink to="/blog">
  Read Our Blog
</UnderlineLink>

// Or with variant prop
<LinkButton to="/portfolio" variant="underline">
  View Portfolio
</LinkButton>
```

---

### 7. Arrow Links

```jsx
import { ArrowLink } from './components/LinkButton';

// Automatically includes arrow with animation
<ArrowLink to="/next-page">
  Continue Reading
</ArrowLink>

// Custom arrow variant
<LinkButton
  to="/features"
  variant="arrow"
  icon={<FaChevronRight />}
>
  See All Features
</LinkButton>
```

---

### 8. Badge Links

```jsx
import { BadgeLink } from './components/LinkButton';

<BadgeLink to="/new-features">
  New
</BadgeLink>

<BadgeLink to="/beta">
  Beta
</BadgeLink>

<LinkButton to="/premium" variant="badge">
  Pro
</LinkButton>
```

---

### 9. Icon-Only Links

```jsx
import { IconLink } from './components/LinkButton';
import { FaHeart, FaShare, FaBookmark } from 'react-icons/fa';

<IconLink to="/favorites" icon={<FaHeart />} aria-label="Favorites" />
<IconLink to="/share" icon={<FaShare />} aria-label="Share" />
<IconLink to="/save" icon={<FaBookmark />} aria-label="Save" />

// Different sizes
<IconLink to="/profile" icon={<FaUser />} size="sm" />
<IconLink to="/settings" icon={<FaCog />} size="lg" />
```

---

### 10. Card Links

```jsx
import { CardLink } from './components/LinkButton';

<CardLink
  to="/solution/cloud"
  title="Cloud Solutions"
  description="Scalable infrastructure for modern applications"
/>

<CardLink
  to="/solution/ai"
  title="AI Integration"
  description="Smart automation powered by machine learning"
/>
```

---

### 11. Breadcrumb Links

```jsx
import { BreadcrumbLink } from './components/LinkButton';

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbLink to="/">Home</BreadcrumbLink>
      <span> / </span>
      <BreadcrumbLink to="/products">Products</BreadcrumbLink>
      <span> / </span>
      <BreadcrumbLink to="/products/software" active>
        Software
      </BreadcrumbLink>
    </nav>
  );
}
```

---

### 12. Size Variants

```jsx
import { PrimaryLink } from './components/LinkButton';

// Small
<PrimaryLink to="/signup" size="sm">
  Sign Up
</PrimaryLink>

// Medium (default)
<PrimaryLink to="/signup">
  Sign Up
</PrimaryLink>

// Large
<PrimaryLink to="/signup" size="lg">
  Sign Up
</PrimaryLink>
```

---

### 13. Disabled Links

```jsx
import LinkButton from './components/LinkButton';

<LinkButton to="/coming-soon" disabled>
  Coming Soon
</LinkButton>

<PrimaryLink to="/unavailable" disabled>
  Unavailable
</PrimaryLink>
```

---

### 14. Animated Links

```jsx
import LinkButton from './components/LinkButton';

// Pulse animation
<LinkButton to="/special-offer" variant="button-primary" pulse>
  Limited Time Offer
</LinkButton>

// Bounce on hover
<LinkButton to="/explore" variant="button-secondary" bounce>
  Explore Now
</LinkButton>
```

---

### 15. Loading State

```jsx
import { useState } from 'react';
import { PrimaryLink } from './components/LinkButton';

function ActionButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await performAction();
    setLoading(false);
  };

  return (
    <PrimaryLink
      onClick={handleClick}
      className={loading ? 'link-loading' : ''}
      disabled={loading}
    >
      Submit Form
    </PrimaryLink>
  );
}
```

---

### 16. Link Groups

```jsx
import { PrimaryLink, SecondaryLink } from './components/LinkButton';

<div className="link-group">
  <PrimaryLink to="/get-started">
    Get Started
  </PrimaryLink>
  <SecondaryLink to="/learn-more">
    Learn More
  </SecondaryLink>
</div>
```

---

## Props Reference

### LinkButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `to` | string | - | Internal route path (React Router) |
| `href` | string | - | External URL (anchor tag) |
| `children` | node | - | Link content |
| `variant` | string | `'default'` | Link variant (see variants below) |
| `size` | string | - | Size: `'sm'`, `'lg'` |
| `icon` | node | - | Icon element to display |
| `iconPosition` | string | `'right'` | Icon position: `'left'`, `'right'` |
| `external` | boolean | `false` | Open in new tab |
| `disabled` | boolean | `false` | Disable the link |
| `active` | boolean | `false` | Active state (for nav links) |
| `pulse` | boolean | `false` | Add pulse animation |
| `bounce` | boolean | `false` | Add bounce on hover |
| `className` | string | `''` | Additional CSS classes |
| `...props` | object | - | Additional props |

---

## Variant Reference

### Text Variants
- `default` - Gray text that turns white on hover
- `primary` - Orange text (WayUP brand color)
- `white` - White text that turns orange on hover
- `underline` - Animated underline effect
- `arrow` - Includes arrow with slide animation
- `external` - Adds external link indicator (↗)

### Button Variants
- `button-primary` - Orange gradient button
- `button-secondary` - Outlined button with orange border
- `button-outline` - Subtle outlined button

### Navigation Variants
- `nav` - Navigation link with underline on hover/active
- `badge` - Pill-shaped badge style
- `breadcrumb` - Breadcrumb navigation style

### Special Variants
- `icon` - Icon-only button (40x40px)
- `card` - Full card clickable area
- `ghost` - Minimal transparent style
- `danger` - Red color for destructive actions
- `success` - Green color for success actions

---

## Complete Example

```jsx
import React from 'react';
import LinkButton, {
  PrimaryLink,
  SecondaryLink,
  NavLink,
  ArrowLink,
  BadgeLink,
  IconLink
} from './components/LinkButton';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

function CompleteLinkExample() {
  return (
    <div>
      {/* Hero CTA */}
      <section style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1>Welcome to WayUP Technology</h1>
        <div className="link-group" style={{ justifyContent: 'center', marginTop: '30px' }}>
          <PrimaryLink to="/get-started" size="lg">
            Get Started Free
          </PrimaryLink>
          <SecondaryLink to="/demo" size="lg">
            Request Demo
          </SecondaryLink>
        </div>
      </section>

      {/* Navigation */}
      <nav style={{ display: 'flex', gap: '30px', padding: '20px' }}>
        <NavLink to="/" active>Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Feature Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '40px' }}>
        <LinkButton
          to="/cloud"
          variant="card"
        >
          <div className="link-card-title">Cloud Solutions</div>
          <div className="link-card-description">
            Scalable infrastructure for your applications
          </div>
        </LinkButton>

        <LinkButton
          to="/ai"
          variant="card"
        >
          <div className="link-card-title">AI Integration</div>
          <div className="link-card-description">
            Smart automation powered by ML
          </div>
        </LinkButton>

        <LinkButton
          to="/security"
          variant="card"
        >
          <div className="link-card-title">Enterprise Security</div>
          <div className="link-card-description">
            Bank-level protection and compliance
          </div>
        </LinkButton>
      </section>

      {/* Content Section */}
      <section style={{ padding: '40px' }}>
        <BadgeLink to="/new">New Feature</BadgeLink>
        <h2>Latest Updates</h2>
        <p>Check out our newest features and improvements...</p>
        <ArrowLink to="/blog/latest">
          Read More
        </ArrowLink>
      </section>

      {/* Footer Social Links */}
      <footer style={{ display: 'flex', gap: '15px', padding: '20px' }}>
        <IconLink
          href="https://github.com/wayuptech"
          external
          icon={<FaGithub />}
          aria-label="GitHub"
        />
        <IconLink
          href="https://linkedin.com/company/wayuptech"
          external
          icon={<FaLinkedin />}
          aria-label="LinkedIn"
        />
      </footer>

      {/* External Resources */}
      <section style={{ padding: '40px' }}>
        <h3>Resources</h3>
        <LinkButton
          href="https://docs.wayuptechn.com"
          external
          variant="underline"
        >
          View Documentation
        </LinkButton>
      </section>
    </div>
  );
}

export default CompleteLinkExample;
```

---

## WayUP Brand Colors

```css
Primary Orange: #ef5a16
Accent Orange: #f97316
White Text: #ffffff
Gray Text: #cbd5e0
Light Gray: #94a3b8
Dark Backgrounds: #0f172a, #000048, #1e293b
```

---

## Accessibility Features

✅ **Keyboard Navigation**: All links are keyboard accessible
✅ **Focus Indicators**: Clear focus outlines for keyboard users
✅ **ARIA Labels**: Support for `aria-label`, `aria-disabled`
✅ **Screen Readers**: Semantic HTML with proper roles
✅ **High Contrast**: Enhanced visibility in high contrast mode
✅ **Reduced Motion**: Respects `prefers-reduced-motion`
✅ **External Links**: Proper `rel="noopener noreferrer"` for security

---

## Best Practices

1. **Use Semantic Variants**: Choose the variant that matches the action's importance
2. **Consistent Icon Sizes**: Keep icons consistent across your app
3. **External Links**: Always use `external` prop for external URLs
4. **Disabled State**: Provide feedback for why a link is disabled
5. **Loading State**: Show loading indicators for async actions
6. **Mobile First**: Test on mobile devices for touch targets
7. **Accessibility**: Always provide `aria-label` for icon-only links

---

## Common Patterns

### Call-to-Action Section
```jsx
<div className="link-group">
  <PrimaryLink to="/signup" size="lg">Sign Up Free</PrimaryLink>
  <SecondaryLink to="/pricing" size="lg">View Pricing</SecondaryLink>
</div>
```

### Feature Grid with Cards
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
  <CardLink to="/feature1" title="Feature 1" description="Description here" />
  <CardLink to="/feature2" title="Feature 2" description="Description here" />
  <CardLink to="/feature3" title="Feature 3" description="Description here" />
</div>
```

### Breadcrumb Navigation
```jsx
<nav aria-label="Breadcrumb">
  <BreadcrumbLink to="/">Home</BreadcrumbLink> /
  <BreadcrumbLink to="/products">Products</BreadcrumbLink> /
  <BreadcrumbLink active>Current Page</BreadcrumbLink>
</nav>
```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Migration from Standard Links

```jsx
// Old way
<a href="/about" style={{ color: 'orange' }}>About</a>
<Link to="/services">Services</Link>

// New way
<LinkButton to="/about" variant="primary">About</LinkButton>
<LinkButton to="/services">Services</LinkButton>
```

---

## Troubleshooting

**Q: Styles not applying?**
A: Ensure `LinkButton.css` is imported and check for CSS specificity conflicts

**Q: Icons not showing?**
A: Install icon library: `npm install react-icons`

**Q: React Router not working?**
A: Ensure your app is wrapped in `<BrowserRouter>` or `<HashRouter>`

**Q: External links not opening?**
A: Add `external` prop: `<LinkButton href="..." external>`

---

**Version**: 1.0
**Last Updated**: November 2025
**Maintained by**: WayUP Technologies
