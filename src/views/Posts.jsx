// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import ReactMessages from 'react-messages'

import PostList from '../components/PostList'
import Loader from '../components/Loader'
import ButtonBack from '../components/ButtonBack'
import Search from '../containers/Search'
import { loadPostData } from '../actions/postActionCreators'
import { isEqual } from '../utils/helpers'
import { getDictionary } from '../utils/dictionary'

type Props = {
  dispatch: Function,
  posts: Data,
  tags: Tag,
  language: Object
}

type State = {
  tags: Array<string>,
  posts: Array<Object>,
  DIC: Object
}

class Posts extends React.PureComponent<Props, State> {
  state: State = {
    tags: [],
    posts: [],
    DIC: {}
  }

  props: Props

  componentDidMount() {
    const { dispatch, posts, language } = this.props

    this.setState({ DIC: getDictionary(language.current)})

    if (posts.data.length === 0) {
      dispatch(loadPostData())
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    const { tags } = nextProps
    const old = this.props.language.current
    const current = nextProps.language.current

    if (old !== current) {
      this.setState({ DIC: getDictionary(current)})
    }

    if (!isEqual(tags.data, this.state.tags)) {
      this.setState({ tags: [...tags.data] })
      this.renderProperPosts(tags.data)
    }
  }

  getTags(data: Array<Object>) {
    const listOfArr = data.map(item =>  item.tags.split(','))
    // $FlowFixMe
    return Array.from(new Set([].concat(...listOfArr).map(item => item.trim())))
  }
  
  renderProperPosts(tags: Array<string>) {
    const data = [...this.props.posts.data]
    const postsTagged = []
    const added = []

    tags.forEach(tag => {
      data.filter((item, i) => {
        if (item.tags.includes(tag) && !added.includes(item._id)) {
          postsTagged.push(item)
          added.push(item._id)
        }
        return false
      })
    })

    const postsSorted = postsTagged.sort((a, b) => a.created < b.created ? 1 : -1)
      
    this.setState({ posts: [...postsSorted] })
  }

  render() {
    const { completed, data, message, error } = this.props.posts
    const { posts, DIC } = this.state

    if (completed) {
      const tags = this.getTags(data)

      return (
        <section className="">
          <Helmet 
            title={DIC.POSTS} 
            meta={[
              { name:"description", content: `${DIC.POSTS}` },
              { property: "og:title", content: `${DIC.POSTS}` },
            ]}
          />
          <ButtonBack />
          {error && <ReactMessages message={message} error={error} next={completed} />}
          <Search tagsToRender={tags} />
          <h1 className="hidden">{DIC.POSTS}</h1>
          <PostList list={posts} DIC={DIC} />
        </section>
      )
    }

    return (
      <div className="app-view app-view-centered">
        <Loader msg={message} />
      </div>
    )
  }
} 

const mapStateToProps = state => ({ 
  posts: state.posts,
  tags: state.tags ,
  language: state.language
})

export const Unwrapped = Posts
export default connect(mapStateToProps)(Posts)