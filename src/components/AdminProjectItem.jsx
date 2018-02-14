// @flow

import React from 'react'

import SingleInput from './form/SingleInput'
import Textarea from './form/Textarea'
import ImageUploader from './form/ImageUploader'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import config from '../config'

type Props = {
  label: string,
  handleProject: Function,
  data?: Object,
}

const AdminProjectItem = ({ label, handleProject, data }: Props) => {

  const project = {}
  const hidden = data ? '' : 'hidden'

  function showContent (event:InputEvent) {
    const button = event.target.classList
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
    const subtitle = event.target.elements.subtitle.value.trim()
    const link = event.target.elements.link.value.trim()
    const summary = event.target.elements.summary.value.trim()
    const content = event.target.elements.content.value.trim()

    return Object.assign(project, { title, subtitle, link, summary, content })
  }

  function handleImageChange (file: File) {
    if (file) document.querySelector('.app-preview').classList.add('hidden')

    return Object.assign(project, { file })
  }
  
  return (
    <article className="app-grid"> 
      <header className="app-grid-header">
        <h2 className="tit-section">{label}</h2>
        {!data && 
          <button 
            onClick={showContent}
            className={`btn btn-icon btn-clean icon-close tr2 btn-show`}>
          </button>
        }
      </header>
      <form
        noValidate
        encType="multipart/form-data"
        className={`app-grid-body ${hidden}`}
        onSubmit={
          (event: InputEvent) => {
            event.preventDefault()
            if (showFormErrors()) {
              let id = data ? data._id : ''
              handleProject(handleData(event), id) 
            }
          }
        }
      >
        <SingleInput 
          wrapper="app-grid-whole"
          name="title"
          inputType="text"
          title="Title"
          placeholder="Title"
          content={data && data.title}
          pattern=".{6,}"
          controlFunc={(e: InputEvent) => handleChange(e)}
        />
        <SingleInput 
          wrapper="app-grid-item1"
          name="subtitle"
          inputType="text"
          title="Subtitle"
          placeholder="Subtitle"
          content={data && data.subtitle}
          pattern=".{6,}"
          controlFunc={handleChange}
        />
        <SingleInput 
          wrapper="app-grid-item2"
          name="link"
          inputType="text"
          title="Link"
          placeholder="Link"
          content={data && data.link}
          pattern=".{6,}"
          controlFunc={handleChange}
        />
         <ImageUploader 
          handleImage={file => handleImageChange(file)}
        />
        {data && !project.file &&
          <img 
            className="app-preview"
            src={`${config.api.public}/projects/${data.background}`} 
            height="200" 
            alt="Preview..." 
          />
      }
        <Textarea
          wrapper="app-grid-whole"
          name="summary"
          title="Summary"
          pattern=".{25,}"
          content={data && data.summary}
          controlFunc={handleChange}
        />
        <Textarea
          wrapper="app-grid-whole"
          name="content"
          title="Content"
          pattern=".{25,}"
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

export default AdminProjectItem