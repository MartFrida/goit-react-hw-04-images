import React from 'react'
import { Button } from 'components/Button/Button'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { fetchPosts } from 'services/api'
import { Loader } from 'components/Loader/Loader'

export class ImageFinder extends React.Component {
  state = {
    hits: [],
    loading: false,
    error: null,
    page: 1,
    searchQuery: '',
    totalPosts: null,
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true })
      const { hits, total } = await fetchPosts()
      this.setState({ hits, totalPosts: total })
    } catch (error) {
      console.log(error.message)
    } finally {
      this.setState({ loading: false })
    }
  }

  handleSetSearchQuery = (text) => {
    this.setState({ searchQuery: text, hits: [], page: 1 })
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      try {
        this.setState({ loading: true })
        const { hits, total } = await fetchPosts({ q: this.state.searchQuery, page: this.state.page })
        this.setState(prevState => ({ hits: [...prevState.hits, ...hits], totalPosts: total }))
      } catch (error) {
        console.log(error.message)
      } finally {
        this.setState({ loading: false })
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }

  render() {
    const { hits, totalPosts, loading } = this.state
    return (<>
      <Searchbar handleSetSearchQuery={this.handleSetSearchQuery} />
      <ImageGallery hits={hits} />
      {!hits.length && !loading && <h2>Smth's wrong.. Don't worry.. Nothing really matters. Try again!</h2>}
      {loading && <Loader />}
      {hits.length && hits.length < totalPosts ? <Button onHandleClick={this.handleLoadMore}>{loading ? 'Loading' : 'Load more'} </Button> : null}
    </>)
  }
}

