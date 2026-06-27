import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'solid', 
  shape = 'asymmetric', 
  icon: Icon,
  className = '',
  onClick,
  ...props 
}) => {
  // Map variant and shape properties to their respective CSS module classes
  const variantClass = styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const shapeClass = styles[`shape${shape.charAt(0).toUpperCase() + shape.slice(1)}`];
  
  const combinedClassName = `${styles.btn} ${variantClass} ${shapeClass} ${className}`;

  const renderContent = () => (
    <>
      {children}
      {Icon && <Icon size={16} className={styles.icon} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer" {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {renderContent()}
    </button>
  );
};

export default Button;
