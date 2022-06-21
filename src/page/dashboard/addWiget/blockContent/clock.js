import React from 'react';
import TimeBox from '../../box/timeBox';


const Clock = () => {
    const [timeCurrent, settimeCurrent] = React.useState('');
    let today = new Date();

    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const getTime = () => {
        let today = new Date();
        let hours = today.getHours() >10 ? (today.getHours()) : ('0'+today.getHours());
        let minutes = today.getMinutes() >10 ? (today.getMinutes()) : ('0'+today.getMinutes());
        let seconds = today.getSeconds() >10 ? (today.getSeconds()) : ('0'+today.getSeconds());
        let time = hours + ":" + minutes + ":" + seconds;
        settimeCurrent(time)
    }
    setTimeout(getTime, 1000)
    return (
        <div className="content-widget">
            <div class='timeBoxWidget'>
            <TimeBox
            timeCurrent={timeCurrent}
            dateCurrent={date}></TimeBox>
            </div>
        </div>
    );
}

export default Clock;
