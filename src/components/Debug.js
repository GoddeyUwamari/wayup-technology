import React, { useEffect } from 'react';

const DebugContainers = () => {
  useEffect(() => {
    // Function to check all parent containers for overflow issues
    const checkContainers = () => {
      const header = document.querySelector('.header');
      if (!header) return;

      let element = header;
      const problematicContainers = [];

      // Walk up the DOM tree
      while (element && element !== document.body) {
        const styles = window.getComputedStyle(element);
        const overflow = styles.overflow;
        const overflowX = styles.overflowX;
        const overflowY = styles.overflowY;

        if (overflow === 'hidden' || overflowX === 'hidden' || overflowY === 'hidden') {
          problematicContainers.push({
            element: element,
            tagName: element.tagName,
            className: element.className,
            id: element.id,
            overflow: overflow,
            overflowX: overflowX,
            overflowY: overflowY
          });
        }

        element = element.parentElement;
      }

      if (problematicContainers.length > 0) {
        console.log('🚨 Found containers that might break sticky positioning:');
        problematicContainers.forEach((container, index) => {
          console.log(`${index + 1}. <${container.tagName}> ${container.className ? `class="${container.className}"` : ''} ${container.id ? `id="${container.id}"` : ''}`);
          console.log(`   overflow: ${container.overflow}, overflow-x: ${container.overflowX}, overflow-y: ${container.overflowY}`);
          console.log('   Element:', container.element);
        });
      } else {
        console.log('✅ No problematic containers found!');
      }

      // Check if sticky is actually being applied
      const headerStyles = window.getComputedStyle(header);
      console.log('Header position:', headerStyles.position);
      console.log('Header top:', headerStyles.top);
      console.log('Header z-index:', headerStyles.zIndex);
    };

    // Run the check after component mounts
    setTimeout(checkContainers, 1000);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#333',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 10000
    }}>
      Debug: Check browser console for container analysis
    </div>
  );
};

export default DebugContainers;