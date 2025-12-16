// components/Footer/FooterNav.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterNav () {
    // バグエラー回避策：worksareaへ遷移させる＃の代わりの変数を定義（エスケープコード無効・#記述不可）
    const worksarea = `/#works`;
    const skillsarea = `/about#skills`;

    return (
        <div className='text-white italic pb-[40px] font-thin'>
            <ul className='text-center'>
                
                {/* Home */}
                <li className='text-[30px] text-white italic mb-4'>
                    <Link href="/">Home</Link></li>

                {/* Works */}
                <li className='text-[30px] text-white italic mb-4'>
                    <Link href={worksarea}>Works</Link></li>
            </ul>
        </div>
    )
}