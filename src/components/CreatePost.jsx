// @flow

import React from 'react'

import SingleInput from './form/SingleInput'
import Textarea from './form/Textarea'
import { showFormErrors, showInputError } from '../utils/errorHandler'

class CreatePost extends React.Component {
  state = { show: true }

  handleChange = this.handleChange.bind(this)
  handleData = this.handleData.bind(this)
  showContent = this.showContent.bind(this)

  props: {
    createPost: Function,
    id: string,
  }

  handleChange (event: InputEvent) {
    event.target.classList.add('active')
    showInputError(event.target)
  }
  
  handleData (event: InputEvent, id: string) {
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

  showContent (event: InputEvent) {
    event.preventDefault()
    this.setState({ show: !this.state.show })
  }

  render() {
    const { createPost } = this.props
    const { show } = this.state
    const classHidden = show ? '' : 'hidden'
    const classButton = show ? 'btn-hide' : 'btn-show'

    return (
      <article className="app-grid"> 
        <header className="app-grid-header">
          <h2 className="tit-section">Create Post</h2>
          <button 
            onClick={this.showContent}
            className={`btn btn-icon btn-clean icon-x-circle tr2 ${classButton}`}></button>
        </header>
        <form
          noValidate
          className={`app-grid-body ${classHidden}`} 
          onSubmit={
            (event) => {
              event.preventDefault()
              if (showFormErrors()) {
                createPost(this.handleData(event))
              }
          }}
        >
        <SingleInput
          wrapper="app-grid-item1"
          name="title"
          inputType="text"
          title="Title"
          placeholder="Title"
          pattern=".{6,}"
          controlFunc={this.handleChange}
        />
        <SingleInput
          wrapper="app-grid-item2"
          name="background"
          inputType="text"
          title="Background"
          placeholder="Background"
          pattern=".{6,}"
          controlFunc={this.handleChange}
        />
        <SingleInput
          wrapper="app-grid-item1"
          name="link"
          inputType="text"
          title="Link"
          placeholder="Link"
          pattern=".{6,}"
          controlFunc={this.handleChange}
        />
        <SingleInput
          wrapper="app-grid-item2"
          name="tags"
          inputType="text"
          title="Tags"
          placeholder="Tags"
          pattern=".{2,}"
          controlFunc={this.handleChange}
        />
        <Textarea
          wrapper="app-grid-whole"
          name="content"
          title="Content"
          pattern=".{6,}"
          controlFunc={this.handleChange}
        />
        <button 
          type="submit"
          className="app-grid-btn btn"
        >
        Create Post
        </button>
      </form>
    </article>
    )
  }
}

export default CreatePost