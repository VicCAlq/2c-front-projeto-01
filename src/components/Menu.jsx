import React, { useEffect } from 'react';

export default function Menu({ children }) {

  useEffect(() => {
    console.log('Menu montado');
  }, []);

  useEffect(() => {
    console.log('Menu atualizou');
  });

  return (
    <div className="menu">
      {children}
    </div>
  );
}