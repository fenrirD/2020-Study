import React from "react"

const Post = ({match, input, onChange}) => {

    return (
        <div>
            포스트  {match && match.params.id}
            <input value={input} onChange={onChange}/>
        </div>
    )
}
export default Post
