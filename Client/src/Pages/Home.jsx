import React from 'react'
import InputPostComp from '../Components/InputPost/InputPost'
import PostComp from '../Components/Post/Post'
import "./Home.css"
function HomeComp() {
  return (
    <div className='page-container'>
      <InputPostComp />
      <PostComp />
    </div>
  )
}

export default HomeComp