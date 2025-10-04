import React from 'react';
import * as VKID from '@vkid/sdk';

const VKLoginButton = ({ onSuccess, onError }) => {
  const handleClick = async () => {
  console.log('VK Login initiated');
  try {
    const data = await VKID.Auth.login();
    console.log('VK Login success:', data);
    onSuccess(data);
  } catch (error) {
    console.error('VK Login error:', error);
    onError(error);
  }
};
  
  return (
    <div className="input-container">
      <button type="button" onClick={handleClick} className="vk-login-btn">
        Войти с VK
      </button>
    </div>
  );
};

export default VKLoginButton;