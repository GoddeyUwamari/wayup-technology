import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './LinkButton.css';

/**
 * Professional Link Component
 *
 * A versatile, reusable link component with multiple style variants and animations.
 * Supports both internal (React Router) and external links with consistent WayUP branding.
 *
 * @param {string} to - Internal route path (React Router Link)
 * @param {string} href - External URL (anchor tag)
 * @param {node} children - Link content
 * @param {string} variant - Link variant: 'default', 'primary', 'white', 'underline', 'arrow',
 *                           'button-primary', 'button-secondary', 'button-outline', 'nav',
 *                           'badge', 'icon', 'breadcrumb', 'card', 'external'
 * @param {string} size - Link size: 'sm', 'lg' (only for button variants)
 * @param {node} icon - Icon element to display
 * @param {string} iconPosition - Icon position: 'left', 'right' (default: 'right')
 * @param {boolean} external - Open link in new tab with rel="noopener noreferrer"
 * @param {boolean} disabled - Disable the link
 * @param {boolean} active - Active state (for nav links)
 * @param {boolean} pulse - Add pulse animation
 * @param {boolean} bounce - Add bounce animation on hover
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props passed to the link element
 */
const LinkButton = ({
  to,
  href,
  children,
  variant = 'default',
  size,
  icon,
  iconPosition = 'right',
  external = false,
  disabled = false,
  active = false,
  pulse = false,
  bounce = false,
  className = '',
  ...props
}) => {
  // Build class names
  const classNames = [
    'link-component',
    `link-${variant}`,
    size && `link-${size}`,
    external && 'link-external',
    disabled && 'link-disabled',
    active && 'active',
    pulse && 'link-pulse',
    bounce && 'link-bounce',
    icon && variant === 'arrow' && 'link-arrow',
    icon && iconPosition === 'left' && 'link-arrow-left',
    className
  ].filter(Boolean).join(' ');

  // Render content with icon positioning
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="link-icon-wrapper">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="link-icon-wrapper">{icon}</span>}
    </>
  );

  // External link (anchor tag)
  if (href || external) {
    return (
      <a
        href={href || to}
        className={classNames}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Internal link (React Router Link)
  if (to) {
    return (
      <RouterLink
        to={to}
        className={classNames}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : props.onClick}
        {...props}
      >
        {content}
      </RouterLink>
    );
  }

  // Button-style link (for onClick handlers without navigation)
  return (
    <button
      type="button"
      className={classNames}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

// Export named components for specific use cases

/**
 * Primary Button Link - Main CTA style
 */
export const PrimaryLink = (props) => (
  <LinkButton variant="button-primary" {...props} />
);

/**
 * Secondary Button Link - Outlined style
 */
export const SecondaryLink = (props) => (
  <LinkButton variant="button-secondary" {...props} />
);

/**
 * Navigation Link - For header/nav menus
 */
export const NavLink = (props) => (
  <LinkButton variant="nav" {...props} />
);

/**
 * Arrow Link - Inline link with arrow icon
 */
export const ArrowLink = ({ children, ...props }) => (
  <LinkButton
    variant="arrow"
    icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.5 3.5l4.5 4.5-4.5 4.5M12 8H3"/>
    </svg>}
    {...props}
  >
    {children}
  </LinkButton>
);

/**
 * Underline Link - Text link with animated underline
 */
export const UnderlineLink = (props) => (
  <LinkButton variant="underline" {...props} />
);

/**
 * Badge Link - Pill-shaped badge style
 */
export const BadgeLink = (props) => (
  <LinkButton variant="badge" {...props} />
);

/**
 * Icon Link - Icon-only button
 */
export const IconLink = (props) => (
  <LinkButton variant="icon" {...props} />
);

/**
 * Card Link - Full card clickable area
 */
export const CardLink = ({ title, description, ...props }) => (
  <LinkButton variant="card" {...props}>
    <div className="link-card-title">{title}</div>
    <div className="link-card-description">{description}</div>
  </LinkButton>
);

/**
 * Breadcrumb Link - For breadcrumb navigation
 */
export const BreadcrumbLink = (props) => (
  <LinkButton variant="breadcrumb" {...props} />
);

export default LinkButton;
