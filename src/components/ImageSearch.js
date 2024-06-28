import React, { useState } from 'react'

function ImageSearch({ searchText }) {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text)
    }
    return (
        <div style={{ margin: "20px 0px" }}>
            <form onSubmit={onSubmit}>
                <div>
                    <input onChange={e => setText(e.target.value)} type='text' placeholder='search Image' style={{ width: "50vw", padding: "8px", borderRadius: "10px" }} />
                    <button style={{ width: "20vw", marginLeft: "5px", padding: "5px", borderRadius: "20px" }}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch