import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

/**
 * Professional ProductCard Component
 *
 * A versatile, reusable product/service card component with multiple layout options.
 * Perfect for showcasing products, services, features, or offerings with professional styling.
 *
 * @param {string} image - Image URL or path
 * @param {string} imageAlt - Alt text for image (accessibility)
 * @param {string} title - Card title
 * @param {string} description - Card description text
 * @param {string} buttonText - CTA button text
 * @param {string|function} buttonAction - URL path or onClick handler function
 * @param {string} variant - Card variant: 'default', 'featured', 'minimal', 'horizontal', 'compact'
 * @param {string} theme - Color theme: 'dark', 'light', 'gradient', 'primary'
 * @param {string} badgeText - Optional badge text (e.g., "New", "Popular")
 * @param {string} badgeColor - Badge color: 'primary', 'success', 'warning', 'info'
 * @param {node} icon - Optional icon element
 * @param {string} price - Optional price display
 * @param {string} className - Additional CSS classes
 * @param {boolean} hover - Enable hover effects (default: true)
 * @param {boolean} bordered - Show border (default: true)
 * @param {object} ...props - Additional props
 */
const ProductCard = ({
  image,
  imageAlt = 'Product image',
  title,
  description,
  buttonText,
  buttonAction,
  variant = 'default',
  theme = 'dark',
  badgeText,
  badgeColor = 'primary',
  icon,
  price,
  className = '',
  hover = true,
  bordered = true,
  ...props
}) => {
  const navigate = useNavigate();

  // Handle button click
  const handleButtonClick = () => {
    if (typeof buttonAction === 'function') {
      buttonAction();
    } else if (typeof buttonAction === 'string') {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
      navigate(buttonAction);
    }
  };

  // Build class names
  const cardClasses = [
    'product-card-component',
    `product-card-${variant}`,
    `product-card-theme-${theme}`,
    hover && 'product-card-hover',
    bordered && 'product-card-bordered',
    className
  ].filter(Boolean).join(' ');

  const badgeClasses = badgeText ? `product-card-badge product-card-badge-${badgeColor}` : '';

  // Render based on variant
  if (variant === 'horizontal') {
    return (
      <div className={cardClasses} {...props}>
        {badgeText && <span className={badgeClasses}>{badgeText}</span>}

        <div className="product-card-image-section">
          {image && <img src={image} alt={imageAlt} className="product-card-image" />}
          {icon && <div className="product-card-icon-overlay">{icon}</div>}
        </div>

        <div className="product-card-content">
          {title && <h3 className="product-card-title">{title}</h3>}
          {price && <div className="product-card-price">{price}</div>}
          {description && <p className="product-card-description">{description}</p>}
          {buttonText && (
            <button
              className="product-card-button"
              onClick={handleButtonClick}
              aria-label={`${buttonText} - ${title}`}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Default vertical layout
  return (
    <div className={cardClasses} {...props}>
      {badgeText && <span className={badgeClasses}>{badgeText}</span>}

      {image && (
        <div className="product-card-image-container">
          <img src={image} alt={imageAlt} className="product-card-image" />
          {icon && <div className="product-card-icon-overlay">{icon}</div>}
        </div>
      )}

      <div className="product-card-content">
        {title && <h3 className="product-card-title">{title}</h3>}
        {price && <div className="product-card-price">{price}</div>}
        {description && <p className="product-card-description">{description}</p>}
        {buttonText && (
          <button
            className="product-card-button"
            onClick={handleButtonClick}
            aria-label={`${buttonText} - ${title}`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * ProductGrid Component
 * Container for displaying multiple ProductCards in a responsive grid
 *
 * @param {string} columns - Grid columns: 'two', 'three' (default), 'four'
 * @param {string} gap - Gap size: 'sm', 'md' (default), 'lg'
 * @param {node} children - ProductCard components
 * @param {string} className - Additional CSS classes
 */
export const ProductGrid = ({
  columns = 'three',
  gap = 'md',
  children,
  className = '',
  ...props
}) => {
  const gridClasses = [
    'product-card-grid',
    `product-card-grid-${columns}`,
    `product-card-grid-gap-${gap}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * FeaturedProductCard Component
 * Pre-styled featured/highlighted product card
 */
export const FeaturedProductCard = (props) => (
  <ProductCard variant="featured" theme="gradient" {...props} />
);

/**
 * MinimalProductCard Component
 * Minimalist card design with subtle styling
 */
export const MinimalProductCard = (props) => (
  <ProductCard variant="minimal" theme="light" bordered={false} {...props} />
);

/**
 * CompactProductCard Component
 * Smaller card for dense layouts
 */
export const CompactProductCard = (props) => (
  <ProductCard variant="compact" {...props} />
);

/**
 * HorizontalProductCard Component
 * Card with horizontal (side-by-side) layout
 */
export const HorizontalProductCard = (props) => (
  <ProductCard variant="horizontal" {...props} />
);

/**
 * ProductSection Component
 * Full section wrapper with header for product displays
 *
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle
 * @param {string} badge - Optional badge text
 * @param {node} children - Section content (typically ProductGrid)
 * @param {string} background - Background color: 'primary', 'secondary', 'white'
 * @param {string} className - Additional CSS classes
 */
export const ProductSection = ({
  title,
  subtitle,
  badge,
  children,
  background = 'primary',
  className = '',
  ...props
}) => {
  const sectionClasses = [
    'product-section-component',
    `product-section-bg-${background}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} {...props}>
      <div className="product-section-container">
        {(title || subtitle || badge) && (
          <div className="product-section-header">
            {badge && <span className="product-section-badge">{badge}</span>}
            {title && <h2 className="product-section-title">{title}</h2>}
            {subtitle && <p className="product-section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default ProductCard;
