// components/Label/LabelWorkType.js

import React from 'react';

export default function LabelWorkType ({ type, children, className }) {
    // 業務か個人かを区別するためのラベル設定
    const labels = {
        work: '業務',
        private: '個人'
    };
    const colors = {
          work: '#238c23',
          private: 'blue'
      };

    const labelWorkTypeClass = `rounded-full text-white w-[55px] h-[55px] border ${className}`

    return (
        <p
         className={`${labelWorkTypeClass}`}
         style={{ 
            fontSize: '14px',
            fontWeight: 'bold',
            backgroundColor: colors[type],
            position: 'absolute',
            top: '-40px',
            left: '-10px',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            letterSpacing: '0.1rem'
         }}
        >
        {children || labels[type]}
        </p>
    )
}