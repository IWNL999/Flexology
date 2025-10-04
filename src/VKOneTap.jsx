import React, { useEffect, useRef } from 'react';
import * as VKID from '@vkid/sdk';

const VKOneTap = ({ onSuccess, onError }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Динамически подгружаем VKID SDK для виджетов, если не загружен
    const script = document.createElement('script');
    script.src = 'https://id.vk.com/sdk/vkid-sdk.js';
    script.async = true;
    script.onload = () => {
      if (window.VKID && window.VKID.Widgets && containerRef.current) {
        window.VKID.Widgets.OneTap(containerRef.current, {
          onSuccess,
          onError,
          size: 'medium',
          lang: 'ru',
        });
      } else {
        console.error('VKID.Widgets.OneTap not available');
        onError(new Error('VKID.Widgets.OneTap not available'));
      }
    };
    script.onerror = () => {
      console.error('Failed to load VKID SDK script');
      onError(new Error('Failed to load VKID SDK script'));
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [onSuccess, onError]);

  return <div ref={containerRef} style={{ width: '100%', marginTop: '10px' }} />;
};

export default VKOneTap;