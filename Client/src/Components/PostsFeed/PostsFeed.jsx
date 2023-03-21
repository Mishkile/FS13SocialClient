import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PostComp from '../Post/Post'
function PostsFeedComp() {
    const [posts, setPosts] = useState([])


    const fetchPosts = async () => {
        const { data } = await axios.get("http://localhost:3001/posts")
            setPosts(data)
        }

    useEffect(() => {

        fetchPosts()
    }, [])
    return (
        <div>

            <div className='posts-container'>
                {posts?.map(post => (
                    <PostComp post={post} />
                ))}
            </div>

        </div>
    )
}

export default PostsFeedComp