import React, { useEffect, useState } from 'react'
import zgyd_logo from '../assets/zgyd.png'



const getWeek = () => {
    switch (new Date().getDay()) {
        case 0: return '星期日'
        case 1: return '星期一'
        case 2: return '星期二'
        case 3: return '星期三'
        case 4: return '星期四'
        case 5: return '星期五'
        case 6: return '星期六'
    }
    return '星期六'
}
const getCurrentTime = () => {
    const _time_ = new Date()
    let year: string | number = _time_.getFullYear()
    let month: string | number = _time_.getMonth() + 1
    let date: string | number = _time_.getDate()
    let hour: string | number = _time_.getHours()
    let minute: string | number = _time_.getMinutes()
    let second: string | number = _time_.getSeconds()
    if (month < 10) {
        month = '0' + month
    }
    if (date < 10) {
        date = '0' + date
    }
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    if (second < 10) {
        second = '0' + second
    }

    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
}

export default function Logo() {
    // 时间显示模块
    const [time, setTime] = useState<string>(getCurrentTime)
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime)
        }, 500)
        return () => clearInterval(interval)
    }, [])

    const [week, setWeek] = useState<string>(getWeek)
    useEffect(() => {
        const interval = setInterval(() => {
            setWeek(getWeek)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className='flex flex-col justify-center items-center gap-10 p-4'>
            <div className='flex items-center justify-center gap-2'>
                <div className='text-[#80aef3] text-xl font-mono font-medium'>
                    <div>{"第一季度  " + week}</div>
                    <div>{time}</div>
                </div>
                <img className='w-1/2' src={zgyd_logo} alt="" />
            </div>

            <div className='text-[#80aef3] text-5xl font-sans font-[900]'>
                上城网络指标监控看板
            </div>

        </div>
    )
}
