import React from 'react'

const Comments = ({comments}) => 
    <div className="User-Comments">
        <div className="User-Comments-Content">
            {comments}
        </div>
    </div>

export default Comments