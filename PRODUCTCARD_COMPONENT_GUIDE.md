**# ProductCard Component - Professional Usage Guide

## Overview

The **ProductCard** component is a versatile, professional card component for showcasing products, services, features, or offerings. It provides multiple variants, themes, and layouts with consistent WayUP branding and smooth animations.

---

## Features

✅ **5 Card Variants**: Default, featured, minimal, horizontal, compact
✅ **4 Theme Options**: Dark, light, gradient, primary
✅ **Responsive Grid**: Auto-adapting layouts for all screen sizes
✅ **Badge Support**: Highlight with "New", "Popular", "Sale" badges
✅ **Icon Overlays**: Add visual icons to cards
✅ **Price Display**: Built-in price formatting
✅ **Hover Effects**: Smooth animations and transitions
✅ **Accessibility**: ARIA labels, keyboard navigation, focus states
✅ **Loading States**: Built-in loading indicators
✅ **Fully Responsive**: Mobile-first design

---

## Installation

The ProductCard component is already created in your project:
- **Component**: `src/components/ProductCard.js`
- **Styles**: `src/components/ProductCard.css`

```jsx
import ProductCard, { ProductGrid, ProductSection } from './components/ProductCard';
```

---

## Basic Usage

### 1. Simple Product Card

```jsx
import ProductCard from './components/ProductCard';

<ProductCard
  image="images/product1.jpg"
  imageAlt="Website Design Service"
  title="Website Design"
  description="Professional website design services tailored to your business needs."
  buttonText="Learn More"
  buttonAction="/services/web-design"
/>
```

---

### 2. Card with Price

```jsx
<ProductCard
  image="images/hosting.jpg"
  title="Web Hosting"
  description="Reliable and secure web hosting with 99.9% uptime guarantee."
  price="$5/month"
  buttonText="Get Started"
  buttonAction="/order"
/>
```

---

### 3. Card with Badge

```jsx
<ProductCard
  image="images/premium-service.jpg"
  title="Premium Package"
  description="Our most comprehensive service package with all features included."
  price="$199"
  badgeText="Popular"
  badgeColor="primary"
  buttonText="Buy Now"
  buttonAction="/checkout"
/>
```

---

### 4. Featured Card

```jsx
import { FeaturedProductCard } from './components/ProductCard';

<FeaturedProductCard
  image="images/special-offer.jpg"
  title="Limited Time Offer"
  description="Get 50% off on all services this month only!"
  price="$99"
  badgeText="Sale"
  badgeColor="warning"
  buttonText="Claim Offer"
  buttonAction="/special-offer"
/>
```

---

### 5. Horizontal Card

```jsx
import { HorizontalProductCard } from './components/ProductCard';

<HorizontalProductCard
  image="images/support.jpg"
  title="24/7 Support"
  description="Our dedicated support team is available around the clock to help you with any issues."
  buttonText="Contact Support"
  buttonAction="/contact"
/>
```

---

### 6. Minimal Card

```jsx
import { MinimalProductCard } from './components/ProductCard';

<MinimalProductCard
  image="images/feature.jpg"
  title="Advanced Analytics"
  description="Track your performance with detailed analytics and insights."
  buttonText="View Details"
  buttonAction="/features/analytics"
/>
```

---

### 7. Compact Card

```jsx
import { CompactProductCard } from './components/ProductCard';

<CompactProductCard
  image="images/addon.jpg"
  title="Email Marketing"
  description="Automated email campaigns for your business."
  price="$29"
  buttonText="Add to Cart"
  buttonAction={() => addToCart('email-marketing')}
/>
```

---

## Product Grid Layouts

### Three Column Grid (Default)

```jsx
import ProductCard, { ProductGrid } from './components/ProductCard';

<ProductGrid>
  <ProductCard
    image="images/service1.jpg"
    title="Service 1"
    description="Description for service 1"
    buttonText="Learn More"
    buttonAction="/service1"
  />
  <ProductCard
    image="images/service2.jpg"
    title="Service 2"
    description="Description for service 2"
    buttonText="Learn More"
    buttonAction="/service2"
  />
  <ProductCard
    image="images/service3.jpg"
    title="Service 3"
    description="Description for service 3"
    buttonText="Learn More"
    buttonAction="/service3"
  />
</ProductGrid>
```

---

### Two Column Grid

```jsx
<ProductGrid columns="two" gap="lg">
  <ProductCard {...cardProps1} />
  <ProductCard {...cardProps2} />
</ProductGrid>
```

---

### Four Column Grid

```jsx
<ProductGrid columns="four" gap="sm">
  <ProductCard {...cardProps1} />
  <ProductCard {...cardProps2} />
  <ProductCard {...cardProps3} />
  <ProductCard {...cardProps4} />
</ProductGrid>
```

---

## Complete Section with Header

```jsx
import { ProductSection, ProductGrid } from './components/ProductCard';
import ProductCard from './components/ProductCard';

<ProductSection
  title="How Can We Help Today?"
  subtitle="At any juncture of your entrepreneurial quest, consider us your trusted ally, providing unwavering support."
  background="primary"
>
  <ProductGrid columns="three" gap="md">
    <ProductCard
      image="images/domain.jpg"
      title="Buy A Domain"
      description="Secure your online presence and establish a unique digital identity by registering your domain name."
      buttonText="Buy A Domain"
      buttonAction="/order"
    />

    <ProductCard
      image="images/registration.jpg"
      title="Business Registration"
      description="Running a business without proper registration is a critical misstep that can lead to legal and financial challenges."
      buttonText="Register Your Business"
      buttonAction="/order"
    />

    <ProductCard
      image="images/support.jpg"
      title="Get Support"
      description="Our team is here to offer comprehensive assistance and support to address the issues that businesses encounter."
      buttonText="Get Support"
      buttonAction="/order"
    />
  </ProductGrid>
</ProductSection>
```

---

## Card Variants

### Default Variant
```jsx
<ProductCard variant="default" {...props} />
```
Standard card with full features and medium height.

### Featured Variant
```jsx
<ProductCard variant="featured" {...props} />
```
Stands out with enhanced border, shadow, and slight scale.

### Minimal Variant
```jsx
<ProductCard variant="minimal" {...props} />
```
Clean, borderless design for subtle presentations.

### Horizontal Variant
```jsx
<ProductCard variant="horizontal" {...props} />
```
Side-by-side layout with image on left, content on right.

### Compact Variant
```jsx
<ProductCard variant="compact" {...props} />
```
Smaller size for dense layouts or secondary content.

---

## Theme Options

### Dark Theme (Default)
```jsx
<ProductCard theme="dark" {...props} />
```
Dark background with white text.

### Light Theme
```jsx
<ProductCard theme="light" {...props} />
```
Light, translucent background.

### Gradient Theme
```jsx
<ProductCard theme="gradient" {...props} />
```
Gradient from navy to slate.

### Primary Theme
```jsx
<ProductCard theme="primary" {...props} />
```
Gradient with WayUP orange accent.

---

## Badge Colors

```jsx
// Primary badge (orange)
<ProductCard badgeText="New" badgeColor="primary" {...props} />

// Success badge (green)
<ProductCard badgeText="Available" badgeColor="success" {...props} />

// Warning badge (yellow/orange)
<ProductCard badgeText="Sale" badgeColor="warning" {...props} />

// Info badge (blue)
<ProductCard badgeText="Info" badgeColor="info" {...props} />
```

---

## Advanced Features

### Card with Icon Overlay

```jsx
import { FaCloud } from 'react-icons/fa';

<ProductCard
  image="images/cloud.jpg"
  title="Cloud Services"
  description="Scalable cloud infrastructure"
  icon={<FaCloud />}
  buttonText="Explore"
  buttonAction="/cloud"
/>
```

---

### Card with Custom onClick Handler

```jsx
const handlePurchase = () => {
  console.log('Adding to cart...');
  addToCart(productId);
  showNotification('Added to cart!');
};

<ProductCard
  title="Premium Plan"
  description="Our best value package"
  price="$299"
  buttonText="Add to Cart"
  buttonAction={handlePurchase}
/>
```

---

### Disabled Hover Effects

```jsx
<ProductCard
  {...props}
  hover={false}
/>
```

---

### Borderless Card

```jsx
<ProductCard
  {...props}
  bordered={false}
/>
```

---

## Complete Page Example

```jsx
import React from 'react';
import ProductCard, {
  ProductGrid,
  ProductSection,
  FeaturedProductCard,
  HorizontalProductCard
} from './components/ProductCard';
import { FaGlobe, FaBuilding, FaHeadset } from 'react-icons/fa';

function ServicesPage() {
  return (
    <>
      {/* Main Services Section */}
      <ProductSection
        title="How Can We Help Today?"
        subtitle="At any juncture of your entrepreneurial quest, consider us your trusted ally."
        badge="Our Services"
        background="primary"
      >
        <ProductGrid columns="three" gap="lg">
          <ProductCard
            image="images/domain.jpg"
            imageAlt="Domain Registration"
            title="Buy A Domain"
            description="Secure your online presence and establish a unique digital identity by registering your domain name through our user-friendly online platform."
            icon={<FaGlobe />}
            buttonText="Buy A Domain"
            buttonAction="/order"
          />

          <FeaturedProductCard
            image="images/registration.jpg"
            imageAlt="Business Registration"
            title="Business Registration"
            description="Running a business without proper registration is a critical misstep that can lead to a myriad of legal, financial, and operational challenges."
            icon={<FaBuilding />}
            price="Starting at $199"
            badgeText="Popular"
            badgeColor="primary"
            buttonText="Register Your Business"
            buttonAction="/order"
          />

          <ProductCard
            image="images/support.jpg"
            imageAlt="Customer Support"
            title="Get Support"
            description="Our team is here to offer comprehensive assistance and support to address the myriad issues that businesses encounter during their journey."
            icon={<FaHeadset />}
            buttonText="Get Support"
            buttonAction="/contact"
          />
        </ProductGrid>
      </ProductSection>

      {/* Pricing Section */}
      <ProductSection
        title="Flexible Pricing Plans"
        subtitle="Choose the plan that best fits your needs"
        background="secondary"
      >
        <ProductGrid columns="three" gap="md">
          <ProductCard
            theme="dark"
            title="Starter"
            price="$29/mo"
            description="Perfect for small businesses and startups getting started."
            buttonText="Get Started"
            buttonAction="/pricing/starter"
          />

          <FeaturedProductCard
            title="Professional"
            price="$99/mo"
            description="Ideal for growing businesses with advanced needs."
            badgeText="Best Value"
            badgeColor="success"
            buttonText="Choose Plan"
            buttonAction="/pricing/pro"
          />

          <ProductCard
            theme="gradient"
            title="Enterprise"
            price="Custom"
            description="Tailored solutions for large organizations."
            buttonText="Contact Sales"
            buttonAction="/contact"
          />
        </ProductGrid>
      </ProductSection>

      {/* Featured Service */}
      <ProductSection background="primary">
        <HorizontalProductCard
          image="images/premium.jpg"
          title="Premium Support Package"
          description="Get dedicated support from our team of experts. Available 24/7 with priority response times and personalized assistance for all your business needs."
          badgeText="New"
          badgeColor="primary"
          buttonText="Learn More"
          buttonAction="/premium-support"
        />
      </ProductSection>
    </>
  );
}

export default ServicesPage;
```

---

## Props Reference

### ProductCard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | string | - | Image URL or path |
| `imageAlt` | string | `'Product image'` | Alt text for image |
| `title` | string | - | Card title |
| `description` | string | - | Card description |
| `buttonText` | string | - | CTA button text |
| `buttonAction` | string\|function | - | URL path or onClick handler |
| `variant` | string | `'default'` | Card variant (see variants below) |
| `theme` | string | `'dark'` | Color theme (see themes below) |
| `badgeText` | string | - | Badge text |
| `badgeColor` | string | `'primary'` | Badge color |
| `icon` | node | - | Icon element |
| `price` | string | - | Price display |
| `className` | string | `''` | Additional CSS classes |
| `hover` | boolean | `true` | Enable hover effects |
| `bordered` | boolean | `true` | Show border |

### ProductGrid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | string | `'three'` | Grid columns: `'two'`, `'three'`, `'four'` |
| `gap` | string | `'md'` | Gap size: `'sm'`, `'md'`, `'lg'` |
| `children` | node | - | ProductCard components |
| `className` | string | `''` | Additional CSS classes |

### ProductSection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Section title |
| `subtitle` | string | - | Section subtitle |
| `badge` | string | - | Optional badge text |
| `children` | node | - | Section content |
| `background` | string | `'primary'` | Background: `'primary'`, `'secondary'`, `'white'` |
| `className` | string | `''` | Additional CSS classes |

---

## Responsive Behavior

The component automatically adapts to different screen sizes:

- **Desktop (992px+)**: Full multi-column layouts
- **Tablet (577px-991px)**: 2-column grids, third card becomes horizontal
- **Mobile (<576px)**: Single column, stacked layout

---

## Accessibility Features

✅ **ARIA Labels**: All buttons have descriptive labels
✅ **Keyboard Navigation**: Full keyboard accessibility
✅ **Focus States**: Clear focus indicators
✅ **High Contrast**: Enhanced visibility in high contrast mode
✅ **Reduced Motion**: Respects `prefers-reduced-motion`
✅ **Screen Readers**: Semantic HTML with proper roles

---

## Best Practices

1. **Image Optimization**: Use optimized images (WebP format recommended)
2. **Consistent Sizing**: Keep images consistent dimensions
3. **Clear CTAs**: Use action-oriented button text
4. **Concise Descriptions**: Keep descriptions to 2-3 lines
5. **Badge Usage**: Use badges sparingly for impact
6. **Theme Consistency**: Stick to one theme per section
7. **Grid Layout**: Use appropriate column count for content amount

---

## Common Patterns

### Services Showcase
```jsx
<ProductGrid columns="three">
  <ProductCard variant="default" theme="dark" {...service1} />
  <ProductCard variant="featured" theme="gradient" {...service2} />
  <ProductCard variant="default" theme="dark" {...service3} />
</ProductGrid>
```

### Pricing Table
```jsx
<ProductGrid columns="three" gap="md">
  <ProductCard price="$29" {...basicPlan} />
  <FeaturedProductCard price="$99" badgeText="Popular" {...proPlan} />
  <ProductCard price="Custom" {...enterprisePlan} />
</ProductGrid>
```

### Feature Highlights
```jsx
<ProductGrid columns="four" gap="sm">
  <CompactProductCard icon={<Icon1 />} {...feature1} />
  <CompactProductCard icon={<Icon2 />} {...feature2} />
  <CompactProductCard icon={<Icon3 />} {...feature3} />
  <CompactProductCard icon={<Icon4 />} {...feature4} />
</ProductGrid>
```

---

## Styling Customization

### Custom Colors
```jsx
// Add custom class for specific styling
<ProductCard
  className="custom-themed-card"
  {...props}
/>
```

```css
/* In your CSS file */
.custom-themed-card.product-card-component {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Tips

1. **Lazy Loading**: Use lazy loading for images below the fold
2. **Image Optimization**: Compress images before use
3. **Grid Limits**: Keep grids to reasonable sizes (12-15 cards max)
4. **Pagination**: Implement pagination for large product lists

---

## Migration from Original Product.js

```jsx
// Old way (Product.js page component)
<div className='wrapper1'>
  <h1>How Can We Help Today?</h1>
  <p>Description...</p>
  <div className='flex-master'>
    <div className='div1'>...</div>
    <div className='div2'>...</div>
    <div className='div3'>...</div>
  </div>
</div>

// New way (ProductCard components)
<ProductSection
  title="How Can We Help Today?"
  subtitle="Description..."
  background="primary"
>
  <ProductGrid>
    <ProductCard {...card1Props} />
    <ProductCard {...card2Props} />
    <ProductCard {...card3Props} />
  </ProductGrid>
</ProductSection>
```

---

## WayUP Brand Colors

```css
Primary Yellow: #fdd700
Primary Orange: #ef5a16
Accent Orange: #f97316
Purple Accent: #8b5cf6, #a855f7
Dark Background: #15212a, #0f172a
Navy Blue: #000048
White Text: #ffffff
Gray Text: #cbd5e0
```

---

## Troubleshooting

**Q: Cards not displaying in grid?**
A: Ensure you're wrapping cards in `<ProductGrid>`

**Q: Images not loading?**
A: Check image paths are correct and images exist in public folder

**Q: Hover effects not working?**
A: Make sure `hover={true}` is set (default) or CSS is not overridden

**Q: Button onClick not working?**
A: Verify `buttonAction` is a valid path (string) or function

**Q: Responsive layout issues?**
A: Check for custom CSS that might override breakpoints

---

**Version**: 1.0
**Last Updated**: November 2025
**Maintained by**: WayUP Technologies
