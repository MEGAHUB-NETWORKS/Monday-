
import React from 'react';

interface AdUnitProps {
  id: string;
  width?: number;
  height?: number;
  type?: '300x250' | '468x60' | '160x600' | '320x50' | '160x300' | 'native';
  adKey?: string;
  isNative?: boolean;
}

const AdUnit: React.FC<AdUnitProps> = ({ width, height, adKey, isNative }) => {
  if (!adKey) return null;

  // Industry-standard isolation for high-density ad scripts
  const srcDoc = isNative 
    ? `
      <html>
        <head><style>body{margin:0;padding:0;overflow:hidden;background:transparent;display:flex;justify-content:center;}</style></head>
        <body>
          <div id="container-${adKey}"></div>
          <script async="async" data-cfasync="false" src="https://pl28394031.effectivegatecpm.com/${adKey}/invoke.js"></script>
        </body>
      </html>
    `
    : `
      <html>
        <head><style>body{margin:0;padding:0;overflow:hidden;background:transparent;display:flex;justify-content:center;}</style></head>
        <body>
          <script type="text/javascript">
            atOptions = {
              'key' : '${adKey}',
              'format' : 'iframe',
              'height' : ${height || 50},
              'width' : ${width || 320},
              'params' : {}
            };
          </script>
          <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
        </body>
      </html>
    `;

  return (
    <div 
      className="flex justify-center overflow-hidden ad-container"
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : (isNative ? '250px' : 'auto'),
        margin: '10px 0'
      }}
    >
      <iframe
        title="ad-frame"
        srcDoc={srcDoc}
        width={width || '100%'}
        height={height || '100%'}
        frameBorder="0"
        scrolling="no"
        style={{ border: 'none', overflow: 'hidden' }}
      />
    </div>
  );
};

export default AdUnit;
