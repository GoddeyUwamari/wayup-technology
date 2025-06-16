import React, { useState } from 'react';

function ReadMore({ text, maxLength }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  const toggleCollapse = () => {
 setIsCollapsed(!isCollapsed)
  };
  return (
    <div>
     <p>
        {isCollapsed ? text.slice(0, maxLength) : text}
        {text.length > maxLength && (
          <span onClick={toggleCollapse} style={{
            color: 'black', backgroundColor: '#fdd700'
            , padding:'14px', fontSize:'14px', borderRadius:'20px', cursor: 'pointer'
          }}>
            {isCollapsed ? '... Read more' : ' Show less'}
          </span>
        )}
      </p> 
    </div>
  )
}



export default ReadMore;