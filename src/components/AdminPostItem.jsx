// @flow

import React from 'react'

import SingleInput from './form/SingleInput'
import Textarea from './form/Textarea'
import ImageUploader from './form/ImageUploader'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import config from '../config'

class AdminPostItem extends React.Component {
  state = { 
    post: {},
    show: true 
  }

  props: {
    label: string,
    handlePost: Function,
    data?: Object
  }

  handleChange = this.handleChange.bind(this)
  handleImageChange = this.handleImageChange.bind(this)
  handleData = this.handleData.bind(this)
  showContent = this.showContent.bind(this)

  handleChange (event: InputEvent) {
    event.target.classList.add('active')
    showInputError(event.target)
  }

  handleImageChange (file: File) {
    const { post } = this.state
    const obj = Object.assign(post, { file })

    this.setState({ post: obj })    
  }
  
  handleData (event: InputEvent, id: string) {
    const { post } = this.state
    const title = event.target.elements.title.value.trim()
    const content = event.target.elements.content.value.trim()
    const link = event.target.elements.link.value.trim()
    const tags = event.target.elements.tags.value.trim()
    const creator = config.api.profileId
    const obj = Object.assign(post, { title, content, link, tags: tags, creator })

    this.setState = ({ post: obj })
  }

  showContent (event: InputEvent) {
    event.preventDefault()
    this.setState({ show: !this.state.show })
  }

  render() {
    const { handlePost, label, data } = this.props
    const { show, post } = this.state
    const classHidden = show ? '' : 'hidden'
    const classButton = show ? 'btn-hide' : 'btn-show'

    return (
      <article className="app-grid"> 
        <header className="app-grid-header">
          <h2 className="tit-section">{label}</h2>
          {!data && 
            <button 
              onClick={this.showContent}
              className={`btn btn-icon btn-clean icon-x-circle tr2 ${classButton}`}>
            </button>
          }
        </header>
        <form
          noValidate
          encType="multipart/form-data"
          className={`app-grid-body ${classHidden}`} 
          onSubmit={
            (event) => {
              event.preventDefault()
              if (showFormErrors()) {
                let id = data ? data._id : ''
                this.handleData(event)
                handlePost(post, id)
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
          controlFunc={this.handleChange}
        />
        <SingleInput
          wrapper="app-grid-item1"
          name="link"
          inputType="text"
          title="Link"
          placeholder="Link"
          content={data && data.link}
          pattern=".{6,}"
          controlFunc={this.handleChange}
        />
        <SingleInput
          wrapper="app-grid-item2"
          name="tags"
          inputType="text"
          title="Tags"
          placeholder="Tags"
          content={data && data.tags}
          pattern=".{2,}"
          controlFunc={this.handleChange}
        />
        <ImageUploader 
          handleImage={file => this.handleImageChange(file)}
        />
        {data && !post.file &&
          <img 
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
          controlFunc={this.handleChange}
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
}

export default AdminPostItem