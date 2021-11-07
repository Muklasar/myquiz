import React, { useState } from 'react'


const Answer = ({ ans, checkAns, changeHandler }) => {
    return (
        <div style={{ fontSize: '16px' }}>
            <input class="form-check-input" type="radio" name="checkAns" value={ans.ans}onChange={()=>changeHandler({ans})} checked={ans==checkAns.ans}/>
            <lebel for={ans.ans} onClick={()=>changeHandler({ans})} style={{marginLeft:'10px', cursor:'pointer' }}>{ans}</lebel>
        </div>
    )
}

export default Answer