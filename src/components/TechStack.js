import React from 'react';
import './TechStack.css';

/**
 * Professional TechStack Component
 *
 * A versatile component for showcasing technologies, programming languages, tools, or skills.
 * Displays tech items in a responsive grid with professional styling and animations.
 *
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle/description
 * @param {array} technologies - Array of technology objects
 * @param {string} variant - Grid variant: 'default' (3 cols), 'compact' (4 cols), 'large' (2 cols)
 * @param {string} theme - Color theme: 'dark', 'gradient', 'branded'
 * @param {boolean} showIcons - Display technology icons (default: true)
 * @param {boolean} hover - Enable hover effects (default: true)
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props
 */
const TechStack = ({
  title = 'Full-Stack Technology',
  subtitle = 'Our professional developers utilize multiple software platforms to enhance computing power, graphics, security standards, and performance levels, ensuring robust and improved web solutions.',
  technologies = [],
  variant = 'default',
  theme = 'dark',
  showIcons = true,
  hover = true,
  className = '',
  ...props
}) => {
  // Build class names
  const sectionClasses = [
    'tech-stack-component',
    `tech-stack-theme-${theme}`,
    className
  ].filter(Boolean).join(' ');

  const gridClasses = [
    'tech-stack-grid',
    `tech-stack-grid-${variant}`,
    hover && 'tech-stack-grid-hover'
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} {...props}>
      <div className="tech-stack-container">
        {(title || subtitle) && (
          <div className="tech-stack-header">
            {title && <h2 className="tech-stack-title">{title}</h2>}
            {subtitle && <p className="tech-stack-subtitle">{subtitle}</p>}
          </div>
        )}

        <div className="tech-stack-grid-wrapper">
          <div className={gridClasses}>
            {technologies.map((tech, index) => (
              <TechCard
                key={index}
                {...tech}
                index={index}
                hover={hover}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * TechCard Component
 * Individual technology card
 *
 * @param {string} name - Technology name
 * @param {string} description - Technology description
 * @param {string|node} icon - Icon URL or React component
 * @param {string} image - Image URL (alternative to icon)
 * @param {string} color - Custom accent color
 * @param {number} index - Card index (for alternating styles)
 * @param {boolean} hover - Enable hover effects
 */
export const TechCard = ({
  name,
  description,
  icon,
  image,
  color,
  index = 0,
  hover = true,
  className = '',
  ...props
}) => {
  const cardClasses = [
    'tech-card',
    index % 2 === 0 ? 'tech-card-primary' : 'tech-card-secondary',
    hover && 'tech-card-hover',
    className
  ].filter(Boolean).join(' ');

  const cardStyle = color ? { '--tech-card-color': color } : {};

  return (
    <div className={cardClasses} style={cardStyle} {...props}>
      {(icon || image) && (
        <div className="tech-card-icon-container">
          {typeof icon === 'string' || image ? (
            <img
              src={icon || image}
              alt={`${name} logo`}
              className="tech-card-icon"
            />
          ) : (
            <div className="tech-card-icon-wrapper">{icon}</div>
          )}
        </div>
      )}

      {name && <h3 className="tech-card-name">{name}</h3>}
      {description && <p className="tech-card-description">{description}</p>}
    </div>
  );
};

/**
 * TechStackGrid Component
 * Flexible grid for displaying tech cards
 *
 * @param {array} technologies - Array of technology objects
 * @param {string} columns - Column count: 'two', 'three' (default), 'four'
 * @param {string} gap - Gap size: 'sm', 'md' (default), 'lg'
 * @param {boolean} hover - Enable hover effects
 * @param {node} children - Alternative to technologies prop
 */
export const TechStackGrid = ({
  technologies = [],
  columns = 'three',
  gap = 'md',
  hover = true,
  children,
  className = '',
  ...props
}) => {
  const gridClasses = [
    'tech-stack-grid',
    `tech-stack-grid-cols-${columns}`,
    `tech-stack-grid-gap-${gap}`,
    hover && 'tech-stack-grid-hover',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses} {...props}>
      {children || technologies.map((tech, index) => (
        <TechCard key={index} {...tech} index={index} hover={hover} />
      ))}
    </div>
  );
};

/**
 * CompactTechStack Component
 * Smaller tech items for dense layouts (4 columns)
 */
export const CompactTechStack = (props) => (
  <TechStack variant="compact" {...props} />
);

/**
 * LargeTechStack Component
 * Larger tech cards with more detail (2 columns)
 */
export const LargeTechStack = (props) => (
  <TechStack variant="large" {...props} />
);

/**
 * IconOnlyTechStack Component
 * Shows only icons/logos without descriptions
 */
export const IconOnlyTechStack = ({ technologies, ...props }) => {
  const simplifiedTechs = technologies.map(tech => ({
    ...tech,
    description: undefined
  }));

  return (
    <TechStack
      technologies={simplifiedTechs}
      variant="compact"
      {...props}
    />
  );
};

// Default export
export default TechStack;

// Pre-configured tech stack data for common technologies
export const commonTechnologies = {
  javascript: {
    name: 'JavaScript',
    description: "Our developers leverage JavaScript's versatility to craft custom web applications. We focus on delivering tailored solutions that meet the unique needs of each client.",
    image: 'images/javacrphot.png',
    color: '#f7df1e'
  },
  python: {
    name: 'Python',
    description: "We harness Python's versatility to deliver innovative, customer-centric applications with seamless execution and enriched user experiences.",
    image: 'images/pythonphoto.png',
    color: '#3776ab'
  },
  java: {
    name: 'Java',
    description: "Our team leverages Java's reliable framework and cross-device compatibility to craft scalable solutions, optimizing workflows with diverse toolkits.",
    image: 'images/javaphoto.png',
    color: '#007396'
  },
  csharp: {
    name: 'C#',
    description: "Our team utilizes C#'s versatility and strong typing to develop scalable software solutions, optimizing performance and delivering innovative applications.",
    image: 'images/c-sharpphoto.png',
    color: '#239120'
  },
  flutter: {
    name: 'Flutter',
    description: "Our team leverages Flutter's cross-platform prowess to craft seamless applications, enhancing user experiences with a rich widget library.",
    image: 'images/flutterphoto.png',
    color: '#02569b'
  },
  ruby: {
    name: 'Ruby On Rails',
    description: "We harness Ruby on Rails' framework for rapid web app development, utilizing rich libraries to deliver scalable, robust solutions efficiently.",
    image: 'images/rubphoto.png',
    color: '#cc0000'
  }
};
