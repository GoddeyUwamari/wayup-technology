# TechStack Component - Professional Usage Guide

## Overview

The **TechStack** component is a professional, reusable component for showcasing technologies, programming languages, tools, frameworks, or skills. It displays tech items in a responsive grid with smooth animations and consistent branding.

---

## Features

✅ **3 Grid Variants**: Default (3 cols), Compact (4 cols), Large (2 cols)
✅ **3 Theme Options**: Dark, gradient, branded
✅ **Alternating Card Styles**: Auto-alternating primary/secondary colors
✅ **Icon/Image Support**: Display tech logos or custom icons
✅ **Hover Animations**: Smooth lift, glow, and transform effects
✅ **Custom Colors**: Per-card accent color support
✅ **Fully Responsive**: Auto-adapting layouts for all screens
✅ **Accessibility**: Focus states, reduced motion, high contrast
✅ **Pre-configured Data**: Common technologies included
✅ **Loading States**: Built-in loading indicators

---

## Installation

The TechStack component is already created in your project:
- **Component**: `src/components/TechStack.js`
- **Styles**: `src/components/TechStack.css`

```jsx
import TechStack, { TechCard, commonTechnologies } from './components/TechStack';
```

---

## Basic Usage

### 1. Simple Tech Stack Display

```jsx
import TechStack from './components/TechStack';

const technologies = [
  {
    name: 'JavaScript',
    description: 'Modern web development with ES6+ features',
    image: 'images/javascript.png'
  },
  {
    name: 'Python',
    description: 'Versatile language for web and data science',
    image: 'images/python.png'
  },
  {
    name: 'React',
    description: 'Component-based UI library',
    image: 'images/react.png'
  }
];

<TechStack technologies={technologies} />
```

---

### 2. With Custom Title and Subtitle

```jsx
<TechStack
  title="Our Technology Stack"
  subtitle="We use cutting-edge technologies to build robust and scalable solutions"
  technologies={technologies}
/>
```

---

### 3. Using Pre-configured Technologies

```jsx
import TechStack, { commonTechnologies } from './components/TechStack';

const myTechs = [
  commonTechnologies.javascript,
  commonTechnologies.python,
  commonTechnologies.java,
  commonTechnologies.csharp,
  commonTechnologies.flutter,
  commonTechnologies.ruby
];

<TechStack
  title="Full-Stack Technology"
  subtitle="Our professional developers utilize multiple software platforms"
  technologies={myTechs}
/>
```

---

### 4. Compact Layout (4 Columns)

```jsx
import { CompactTechStack } from './components/TechStack';

<CompactTechStack
  title="Tools & Frameworks"
  technologies={toolsList}
/>

// Or with variant prop
<TechStack
  variant="compact"
  technologies={toolsList}
/>
```

---

### 5. Large Layout (2 Columns)

```jsx
import { LargeTechStack } from './components/TechStack';

<LargeTechStack
  title="Core Technologies"
  technologies={coreTechs}
/>

// Or with variant prop
<TechStack
  variant="large"
  technologies={coreTechs}
/>
```

---

### 6. Icon-Only Display

```jsx
import { IconOnlyTechStack } from './components/TechStack';

<IconOnlyTechStack
  title="Supported Technologies"
  technologies={allTechs}
/>
```

---

### 7. Different Themes

```jsx
// Dark theme (default)
<TechStack theme="dark" technologies={techs} />

// Gradient theme
<TechStack theme="gradient" technologies={techs} />

// Branded theme (with WayUP pattern)
<TechStack theme="branded" technologies={techs} />
```

---

### 8. Custom Colors per Card

```jsx
const technologies = [
  {
    name: 'JavaScript',
    description: 'Modern web development',
    image: 'images/js.png',
    color: '#f7df1e' // Yellow accent
  },
  {
    name: 'Python',
    description: 'Data science and AI',
    image: 'images/python.png',
    color: '#3776ab' // Blue accent
  },
  {
    name: 'Ruby',
    description: 'Elegant web frameworks',
    image: 'images/ruby.png',
    color: '#cc0000' // Red accent
  }
];

<TechStack technologies={technologies} />
```

---

### 9. Using React Icons

```jsx
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';

const technologies = [
  {
    name: 'React',
    description: 'Modern UI development',
    icon: <FaReact />
  },
  {
    name: 'Python',
    description: 'Versatile programming',
    icon: <FaPython />
  },
  {
    name: 'Node.js',
    description: 'Server-side JavaScript',
    icon: <FaNodeJs />
  }
];

<TechStack technologies={technologies} />
```

---

### 10. Custom Grid with TechCards

```jsx
import { TechStackGrid, TechCard } from './components/TechStack';

<TechStackGrid columns="three" gap="lg">
  <TechCard
    name="Docker"
    description="Containerization platform"
    image="images/docker.png"
  />
  <TechCard
    name="Kubernetes"
    description="Container orchestration"
    image="images/k8s.png"
  />
  <TechCard
    name="AWS"
    description="Cloud computing services"
    image="images/aws.png"
  />
</TechStackGrid>
```

---

## Complete Example

```jsx
import React from 'react';
import TechStack, { commonTechnologies } from './components/TechStack';

function TechnologiesPage() {
  // Programming Languages
  const languages = [
    commonTechnologies.javascript,
    commonTechnologies.python,
    commonTechnologies.java,
    commonTechnologies.csharp,
    commonTechnologies.flutter,
    commonTechnologies.ruby
  ];

  // Frontend Technologies
  const frontend = [
    {
      name: 'React',
      description: 'Component-based UI library for building interactive interfaces',
      image: 'images/react.png',
      color: '#61dafb'
    },
    {
      name: 'Vue.js',
      description: 'Progressive framework for building user interfaces',
      image: 'images/vue.png',
      color: '#42b883'
    },
    {
      name: 'Angular',
      description: 'Platform for building mobile and desktop web applications',
      image: 'images/angular.png',
      color: '#dd0031'
    },
    {
      name: 'TypeScript',
      description: 'Typed superset of JavaScript for large-scale applications',
      image: 'images/typescript.png',
      color: '#3178c6'
    }
  ];

  // Backend Technologies
  const backend = [
    {
      name: 'Node.js',
      description: 'JavaScript runtime built on Chrome V8 engine',
      image: 'images/nodejs.png',
      color: '#339933'
    },
    {
      name: 'Django',
      description: 'High-level Python web framework',
      image: 'images/django.png',
      color: '#092e20'
    }
  ];

  return (
    <>
      {/* Programming Languages Section */}
      <TechStack
        title="Full-Stack Technology"
        subtitle="Our professional developers utilize multiple software platforms to enhance computing power, graphics, security standards, and performance levels, ensuring robust and improved web solutions."
        technologies={languages}
        theme="dark"
      />

      {/* Frontend Section */}
      <TechStack
        title="Frontend Frameworks"
        subtitle="Modern tools for building responsive and interactive user interfaces"
        technologies={frontend}
        variant="compact"
        theme="gradient"
      />

      {/* Backend Section */}
      <TechStack
        title="Backend Technologies"
        subtitle="Powerful server-side frameworks and platforms"
        technologies={backend}
        variant="large"
        theme="branded"
      />
    </>
  );
}

export default TechnologiesPage;
```

---

## Props Reference

### TechStack Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `'Full-Stack Technology'` | Section title |
| `subtitle` | string | - | Section subtitle/description |
| `technologies` | array | `[]` | Array of technology objects |
| `variant` | string | `'default'` | Grid variant: `'default'`, `'compact'`, `'large'` |
| `theme` | string | `'dark'` | Color theme: `'dark'`, `'gradient'`, `'branded'` |
| `showIcons` | boolean | `true` | Display technology icons |
| `hover` | boolean | `true` | Enable hover effects |
| `className` | string | `''` | Additional CSS classes |

### Technology Object Structure

```javascript
{
  name: 'JavaScript',              // Required: Tech name
  description: 'Description...',   // Optional: Tech description
  image: 'images/js.png',         // Optional: Image URL
  icon: <FaReact />,              // Optional: React icon component
  color: '#f7df1e'                // Optional: Custom accent color
}
```

### TechCard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | - | Technology name |
| `description` | string | - | Technology description |
| `icon` | string\|node | - | Icon URL or React component |
| `image` | string | - | Image URL (alternative to icon) |
| `color` | string | - | Custom accent color |
| `index` | number | `0` | Card index (for alternating styles) |
| `hover` | boolean | `true` | Enable hover effects |
| `className` | string | `''` | Additional CSS classes |

### TechStackGrid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `technologies` | array | `[]` | Array of technology objects |
| `columns` | string | `'three'` | Column count: `'two'`, `'three'`, `'four'` |
| `gap` | string | `'md'` | Gap size: `'sm'`, `'md'`, `'lg'` |
| `hover` | boolean | `true` | Enable hover effects |
| `children` | node | - | Alternative to technologies prop |
| `className` | string | `''` | Additional CSS classes |

---

## Grid Variants

### Default Variant (3 Columns)
```jsx
<TechStack variant="default" {...props} />
```
Standard 3-column grid, ideal for showcasing 6-12 technologies.

### Compact Variant (4 Columns)
```jsx
<TechStack variant="compact" {...props} />
```
Denser 4-column grid, perfect for displaying many items.

### Large Variant (2 Columns)
```jsx
<TechStack variant="large" {...props} />
```
Spacious 2-column grid with more detail per card.

---

## Theme Options

### Dark Theme (Default)
```jsx
<TechStack theme="dark" {...props} />
```
Solid dark background (#15212a).

### Gradient Theme
```jsx
<TechStack theme="gradient" {...props} />
```
Navy to slate gradient background.

### Branded Theme
```jsx
<TechStack theme="branded" {...props} />
```
WayUP branded with subtle dot pattern overlay.

---

## Pre-configured Technologies

The component includes pre-configured data for common technologies:

```jsx
import { commonTechnologies } from './components/TechStack';

// Available technologies:
commonTechnologies.javascript
commonTechnologies.python
commonTechnologies.java
commonTechnologies.csharp
commonTechnologies.flutter
commonTechnologies.ruby
```

Each includes:
- Name
- Professional description
- Image path
- Brand color

---

## Responsive Behavior

The component automatically adapts to different screen sizes:

- **Desktop (1201px+)**: Full grid layout as specified
- **Desktop (993px-1200px)**: Optimized 3-column grid
- **Large Tablet (769px-992px)**: 2 columns
- **Small Tablet (577px-768px)**: 1 column (vertical)
- **Mobile (431px-576px)**: 1 column (optimized)
- **Mobile Small (<430px)**: 1 column (compact)

---

## Accessibility Features

✅ **Keyboard Navigation**: All cards are focusable
✅ **Focus Indicators**: Clear cyan outline on focus
✅ **Reduced Motion**: Respects `prefers-reduced-motion`
✅ **High Contrast**: Enhanced borders and shadows
✅ **Semantic HTML**: Proper heading hierarchy
✅ **Alt Text**: All images have descriptive alt text
✅ **Print Styles**: Optimized for printing

---

## Advanced Features

### Without Hover Effects

```jsx
<TechStack technologies={techs} hover={false} />
```

---

### Custom Styling

```jsx
// Add custom class
<TechStack className="custom-tech-section" {...props} />
```

```css
/* In your CSS file */
.custom-tech-section.tech-stack-component {
  background: linear-gradient(to right, #your-color-1, #your-color-2);
}
```

---

### Loading State

```jsx
import { TechCard } from './components/TechStack';

<TechCard
  name="Loading..."
  description="Fetching data..."
  className="tech-card-loading"
/>
```

---

### Icon-Only Cards

```jsx
const iconOnlyTechs = technologies.map(tech => ({
  name: tech.name,
  icon: tech.icon,
  // No description - will show compact
}));

<TechStack technologies={iconOnlyTechs} />
```

---

## Common Patterns

### Full Technology Showcase
```jsx
<TechStack
  title="Our Technology Stack"
  subtitle="Comprehensive suite of modern technologies"
  technologies={allTechnologies}
  variant="default"
  theme="dark"
/>
```

### Skills Grid for Portfolio
```jsx
<TechStack
  title="Technical Skills"
  subtitle="Proficient in multiple programming languages and frameworks"
  technologies={mySkills}
  variant="compact"
  theme="gradient"
/>
```

### Tools & Frameworks Section
```jsx
<TechStack
  title="Development Tools"
  subtitle="Industry-standard tools for efficient development"
  technologies={devTools}
  variant="large"
  theme="branded"
/>
```

---

## Migration from Language.js

```jsx
// Old way (Language.js)
<div className='grid-general-container'>
  <h1>Full-Stack Technology</h1>
  <p>Description...</p>
  <div className="language-grid-container">
    <div className="language-grid">
      <div className="language-one">...</div>
      <div className="language-two">...</div>
      // ... more hardcoded divs
    </div>
  </div>
</div>

// New way (TechStack component)
<TechStack
  title="Full-Stack Technology"
  subtitle="Description..."
  technologies={[
    { name: 'JavaScript', description: '...', image: '...' },
    { name: 'Python', description: '...', image: '...' },
    // ... dynamic array
  ]}
/>
```

---

## Best Practices

1. **Image Optimization**: Use WebP format for logos (fallback to PNG)
2. **Consistent Icons**: Keep icon sizes similar (100x100px recommended)
3. **Description Length**: Keep descriptions to 2-3 sentences
4. **Color Harmony**: Use brand colors that complement each other
5. **Alt Text**: Always provide descriptive alt text for images
6. **Loading Priority**: Lazy load images for better performance
7. **Accessibility**: Test with keyboard navigation

---

## Performance Tips

1. **Lazy Loading**: Use lazy loading for images below the fold
2. **Image Optimization**: Compress images before use
3. **Limit Items**: Keep tech items to 12-15 max per section
4. **Code Splitting**: Load tech data separately for large lists

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Troubleshooting

**Q: Cards not displaying in grid?**
A: Ensure technologies array has valid objects with required fields

**Q: Images not loading?**
A: Check image paths are correct and images exist in public folder

**Q: Hover effects not working?**
A: Verify `hover={true}` (default) and CSS is not overridden

**Q: Grid not responsive?**
A: Check for custom CSS overriding breakpoints

**Q: Icons not showing?**
A: Ensure icon library is installed: `npm install react-icons`

---

## Color Reference

**Default Card Colors:**
- Primary Cards: Background `#121f3e`, Border `#00ffff` (cyan)
- Secondary Cards: Background `#15212a`, Border `#043668` (navy)
- Hover Border: `#3498db` (blue) or `#1a3b5d` (dark blue)

**Technology Colors (Pre-configured):**
- JavaScript: `#f7df1e` (yellow)
- Python: `#3776ab` (blue)
- Java: `#007396` (blue)
- C#: `#239120` (green)
- Flutter: `#02569b` (blue)
- Ruby: `#cc0000` (red)

---

**Version**: 1.0
**Last Updated**: November 2025
**Maintained by**: WayUP Technologies
