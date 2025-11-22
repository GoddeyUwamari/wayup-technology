import React, { useState } from 'react';

function ReadMore({ text, maxLength }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '12px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#000048',
    backgroundColor: '#fdd700',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(253, 215, 0, 0.3)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  return (
    <div>
      <p style={{ margin: 0 }}>
        {isCollapsed ? text.slice(0, maxLength) : text}
      </p>
      {text.length > maxLength && (
        <button
          onClick={toggleCollapse}
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(253, 215, 0, 0.4)';
            e.target.style.backgroundColor = '#ef5a16';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(253, 215, 0, 0.3)';
            e.target.style.backgroundColor = '#fdd700';
            e.target.style.color = '#000048';
          }}
        >
          {isCollapsed ? '📖 Read More' : '📕 Show Less'}
        </button>
      )}
    </div>
  );
}



export default ReadMore;