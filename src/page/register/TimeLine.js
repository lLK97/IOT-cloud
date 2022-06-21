import React from 'react';
import '../../assets/css/component/timeLine.scss';
import CheckIcon from '@mui/icons-material/Check';


const TimeLine = props => {
    return (
        <div className="timeLine">
            <div className='inner-timeLine'>
                <div className='item'>
                    <div className='up'>
                        <div className={`text ${props.first}`}>
                            <div className='number'>
                                {
                                    props.endFirst == 'true' ? (
                                        <CheckIcon sx={{ mt: '8px', fontSize: '14px' }}></CheckIcon>
                                    ) : 1
                                }
                            </div>
                            {
                                props.forgot == 'true' ? (<div className='name'>Verify identity </div>)
                                    : (<div className='name'>Verify Email</div>)
                            }

                        </div>
                        <div className={`line ${props.lineActiveFirst}`}></div>
                    </div>
                </div>
                <div className='item'>
                    <div className='up'>
                        <div className={`text ${props.second}`}>
                            <div className='number'>
                                {
                                    props.endSecond == 'true' ? (
                                        <CheckIcon sx={{ mt: '3px', fontSize: '14px' }}></CheckIcon>
                                    ) : 2
                                }
                            </div>

                            {
                                props.forgot == 'true' ? (<div className='name'>Reset Password</div>)
                                    : (<div className='name'>   Create account</div>)
                            }



                        </div>
                        <div className={`line ${props.lineActiveSecond}`}></div>
                    </div>

                </div>
                <div className='item'>
                    <div className='up'>
                        <div className={`text ${props.thrid}`}>
                            <div className='number'>
                                {
                                    props.endThrid == 'true' ? (
                                        <CheckIcon sx={{ mt: '3px', fontSize: '14px' }}></CheckIcon>
                                    ) : 3
                                }
                            </div>
                            <div className='name'>
                                Finished
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TimeLine;
