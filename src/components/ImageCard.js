import React from 'react'

function ImageCard({ items }) {
    const tags = items.tags.split(',')

    return (
        <div style={{ width: "35%", overflow: 'hidden', borderRadius: "10px", boxShadow: "0px 2px 10px black" }}>
            <img src={items.webformatURL} alt='' style={{ width: '100%' }} />
            <div style={{ padding: '6px 4px' }}>
                <div style={{ fontWeight: "bold", color: 'purple', marginBottom: "2px", fontSize: "18px" }}>
                    Photo by {items.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {items.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {items.downloads}
                    </li>
                    <li>
                        <strong className='text-white'>Likes: </strong>
                        {items.likes}
                    </li>
                </ul>
            </div>
            <div style={{ padding: "4px 6px" }}>
                {
                    tags.map((tag, id) => (
                        <span key={id} style={{ display: "inline-block", background: "grey", borderRadius: "15px", padding: "1px 4px", fontSize: "15px", fontWeight: "semiBold", marginRight: "2px", color: "white" }}>
                            #{tag}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageCard