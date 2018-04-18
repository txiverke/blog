// @flow

import React from 'react'

import SingleInput from './form/SingleInput'
import Textarea from './form/Textarea'
import ImageUploader from './form/ImageUploader'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import config from '../config'

type Props = {
  label: string,
  handlePost: Function,
  data?: Object
}

const AdminPostItem = ({ label, handlePost, data }: Props) => {
  
  const post = {}
  const hidden = data ? '' : 'hidden'

  function showContent (event: InputEvent) {
    const button = event.target.classList
    // $FlowFixMe
    const form = document.querySelector('.app-grid-body').classList

    if (button.contains('btn-hide')) {
      button.remove('btn-hide')
      button.add('btn-show')
      form.add('hidden')
    } else {
      button.remove('btn-show')
      button.add('btn-hide')
      form.remove('hidden')
    }
  }

  function handleChange (event: InputEvent) {
    event.target.classList.add('active')
    showInputError(event.target)
  }

  function handleData (event: InputEvent) {
    const title = event.target.elements.title.value.trim()
    const content = event.target.elements.content.value.trim()
    const link = event.target.elements.link.value.trim()
    const tags = event.target.elements.tags.value.trim()

    return Object.assign(post, { title, content, link, tags })
  }

  function handleImageChange (file: File) {
    if (document.querySelector('.app-preview') && file) {
      // $FlowFixMe
      document.querySelector('.app-preview').classList.add('hidden')
    }

    return Object.assign(post, { file })
  } 
  
  return (
    <article className="app-grid"> 
      <header className="app-grid-header">
        <h2 className="tit-section">{label}</h2>
        {!data && 
          <button 
            onClick={showContent}
            className="btn btn-icon btn-clean icon-close btn-show tr2">
          </button>
        }
      </header>
      <form
        noValidate
        encType="multipart/form-data"
        className={`app-grid-body ${hidden}`} 
        onSubmit={
          (event) => {
            event.preventDefault()
            if (showFormErrors()) {
              let id = data ? data._id : ''
              handlePost(handleData(event), id)
            }
        }}
      >
        <SingleInput
          wrapper="app-grid-whole"
          name="title"
          inputType="text"
          title="Title"
          placeholder="Title"
          content={data && data.title}
          pattern=".{6,}"
          controlFunc={handleChange}
        />
        <SingleInput
          wrapper="app-grid-item1"
          name="link"
          inputType="text"
          title="Link"
          placeholder="Link"
          content={data && data.link}
          pattern=".{6,}"
          controlFunc={handleChange}
        />
        <SingleInput
          wrapper="app-grid-item2"
          name="tags"
          inputType="text"
          title="Tags"
          placeholder="Tags"
          content={data && data.tags}
          pattern=".{2,}"
          controlFunc={handleChange}
        />
        <ImageUploader 
          handleImage={file => handleImageChange(file)}
        />
        {data && !post.file &&
          <img 
            className="app-preview"
            src={`${config.api.public}/posts/${data.background}`} 
            height="200" 
            alt="Preview..." 
          />
        }
        <Textarea
          wrapper="app-grid-whole"
          name="content"
          title="Content"
          pattern=".{6,}"
          content={data && data.content}
          controlFunc={handleChange}
        />
        <button 
          type="submit"
          className="app-grid-btn btn"
        >
        {label}
        </button>
      </form>
    </article>
  )
}

export default AdminPostItem