import React from "react";

type Wrapper = {
    children: JSX.Element
}

export const ChartWrapper: React.FC<Wrapper> = ({ children }) => {
    return (
        <div className='w-full h-full rounded-2xl border-[2px] border-[#6fb6c38a] box-border relative'>
            <div className='absolute top-[-2px] left-[-2px] rounded-tl-2xl border-t-[2px] border-l-[2px] border-[#6fb6c3]  w-6 h-6 '></div>
            <div className='absolute top-[-2px] right-[-2px] rounded-tr-2xl border-t-[2px] border-r-[2px] border-[#6fb6c3]  w-6 h-6 '></div>
            <div className='absolute bottom-[-2px] right-[-2px] rounded-br-2xl border-b-[2px] border-r-[2px] border-[#6fb6c3]  w-6 h-6'></div>
            <div className='absolute bottom-[-2px] left-[-2px] rounded-bl-2xl border-b-[2px] border-l-[2px] border-[#6fb6c3] w-6 h-6 '></div>
            {children}
        </div>
    );
}
