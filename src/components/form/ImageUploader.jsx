// @flow

import React from 'react'

import SingleInput from './SingleInput'

class ImageUploader extends React.Component {
  state = {
    imagePreviewUrl: ''
  } 
  handleImageChange = this.handleImageChange.bind(this)

  handleImageChange(event: InputEvent) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
    this.props.handleImage(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} height="200" alt="Preview..." />);
    } else {
      $imagePreview = (<p className="txt">Please select an Image for Preview</p>);
    }
    
    return (
      <div className="app-grid-whole">
        <SingleInput 
          name="image"
          inputType="file"
          title="Image" 
          controlFunc={this.handleImageChange} 
          required={false}
        />
        {$imagePreview}
      </div>
    )
  }
}

export default ImageUploader