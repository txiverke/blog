// @flow

import React from 'react'

import SingleInput from './form/SingleInput'
import Textarea from './form/Textarea'
import { showFormErrors, showInputError } from '../utils/errorHandler'

const handleChange = (event) => {
  event.target.classList.add('active')
  showInputError(event.target)
}

const handleData = (event, id) => {
  const title = event.target.elements.title.value.trim()
  const content = event.target.elements.content.value.trim()
  const background = event.target.elements.background.value.trim()
  const link = event.target.elements.link.value.trim()
  const tags = event.target.elements.tags.value.trim()

  return {
    title,
    content,
    background,
    link,
    tags,
    creator: id
  }
}

type Props = {
  createPost: Function,
  id: string
}

const CreatePost = ({ createPost, id }: Props) => {
  return (
    <article className="app-form-grid"> 
      <h2 className="app-form-grid-header tit-section">Create Post</h2>
      <form
        noValidate
        className="app-form-grid-body" 
        onSubmit={
          (event) => {
            event.preventDefault()
            if (showFormErrors()) {
              createPost(handleData(event))
            }
        }}
      >
      <SingleInput
        wrapper="app-form-grid-item1"
        name="title"
        inputType="text"
        title="Title"
        placeholder="Title"
        pattern=".{6,}"
        controlFunc={handleChange}
      />
      <SingleInput
        wrapper="app-form-grid-item2"
        name="background"
        inputType="text"
        title="Background"
        placeholder="Background"
        pattern=".{6,}"
        controlFunc={handleChange}
      />
      <SingleInput
        wrapper="app-form-grid-item1"
        name="link"
        inputType="text"
        title="Link"
        placeholder="Link"
        pattern=".{6,}"
        controlFunc={handleChange}
      />
      <SingleInput
        wrapper="app-form-grid-item2"
        name="tags"
        inputType="text"
        title="Tags"
        placeholder="Tags"
        pattern=".{2,}"
        controlFunc={handleChange}
      />
      <Textarea
        wrapper="app-form-grid-whole"
        name="content"
        title="Content"
        pattern=".{6,}"
        controlFunc={handleChange}
      />
      <button 
        type="submit"
        className="app-form-btn btn"
      >
      Create Post
      </button>
    </form>
  </article>
  )
}

export default CreatePost