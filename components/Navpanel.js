// components/Navpanel.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Navpanel({ closeNavpanel }) {
    // バグエラー回避策：worksareaへ遷移させる＃の代わりの変数を定義（エスケープコード無効・#記述不可）
    const worksarea = `/#works`;
    const skillsarea = `/about#skills`;
    
    return (
        <div className='bg-black h-screen opacity-90 w-[97vw] items-center jsutify-center z-[100]'>
            <div id="navpanel" className="navpanel">
                <div className='text-white text-2xl italic font-thin pl-[-3vw] pt-[52px]'>
                {/* <div className='text-white text-2xl italic font-thin pl-[3vw] pb-[50vw] pt-[calc(50vw-52px)]'> */}
                    <ul className='text-center panelul'>
                        
                        {/* Home */}
                        <li className='text-5xl text-white italic mb-4'>
                            <Link href="/" onClick={closeNavpanel}>Home</Link></li>
                        
                        {/* Works */}
                        <li className='text-5xl text-white italic mb-4'>
                            <Link href={worksarea} onClick={closeNavpanel}>Works</Link></li>
                        

                    </ul>
                </div>
            </div>
        </div>
    )
}
