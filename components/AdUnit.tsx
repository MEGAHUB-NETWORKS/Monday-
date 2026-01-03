
import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  id: string;
  format?: 'iframe' | 'native';
  width?: number;
  height?: number;
  type?: '300x250' | '468x60' | '160x600' | '320x50' | '160x300' | 'native';
  adKey?: string;
  isNative?: boolean;
}

const AdUnit: React.FC<AdUnitProps> = ({ id, width, height, adKey, type, isNative }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !adKey || initialized.current) return;

    const currentContainer = containerRef.current;

    if (isNative) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = `https://pl28394031.effectivegatecpm.com/${adKey}/invoke.js`;
      currentContainer.appendChild(script);
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.highperformanceformat.com/invoke.js';
      
      const config = document.createElement('script');
      config.innerHTML = `
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : ${height || 50},
          'width' : ${width || 320},
          'params' : {}
        };
      `;
      
      currentContainer.appendChild(config);
      currentContainer.appendChild(script);
    }

    initialized.current = true;
    
    return () => {
      // Cleanup to prevent duplicate script injection on re-render
      if (currentContainer) {
        currentContainer.innerHTML = '';
        initialized.current = false;
      }
    };
  }, [adKey, height, width, isNative]);

  const wrapperClass = type === '160x600' || type === '160x300' 
    ? "flex justify-center transition-opacity duration-500" 
    : "flex justify-center my-4 w-full overflow-hidden transition-opacity duration-500";

  return (
    <div className={wrapperClass}>
      <div 
        id={isNative ? `container-${adKey}` : undefined} 
        ref={containerRef} 
        className="ad-min-h"
        style={{ 
          width: width ? `${width}px` : '100%', 
          minHeight: height ? `${height}px` : 'auto',
          maxWidth: '100%' 
        }}
      >
      </div>
    </div>
  );
};

export default AdUnit;
