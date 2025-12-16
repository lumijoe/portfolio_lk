// components/Label/LabelWorkAbout.js

import React from 'react';

export default function LabelWorkAbout ({ children, className }) {
    // カスタムカラーをコンポーネントで強制使用するためのクラス設定
    
    const LabelWorkAbout = `rounded-full text-black bg-white py-[3px] h-auto border border-black ${className}`

    return (
        <div className='mb-5 mt-12 flex justify-center'>
            <span type="button"
                className={
                    `flex items-center justify-center ${LabelWorkAbout}`
                }
                style={{
                    fontFamily: 'Noto Sans JP',
                    position: 'relative'
                }}
            >
                {children}
            </span>
        </div>
    )
}