import React, { useEffect, useState } from 'react'
import { Button } from 'components/Button/Button'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { fetchPosts } from 'services/api'
import { Loader } from 'components/Loader/Loader'


export const ImageFinder = () => {
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPosts, setTotalPosts] = useState(null);

  useEffect(() => {
    const getDataFirst = async () => {
      try {
        setLoading(true);
        const { hits, total } = await fetchPosts({ page })
        setHits(prev => [...prev, ...hits])
        setTotalPosts(total)
      } catch (error) {
        console.log(error.message)
        setErr(error.message)
      } finally {
        setLoading(false)
      }
    }

    const getDataByQuery = async () => {
      try {
        setLoading(true);
        const { hits, total } = await await fetchPosts({ q: searchQuery, page })
        setHits(prev => [...prev, ...hits])
        setTotalPosts(total)
      } catch (error) {
        console.log(error.message)
        setErr(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (searchQuery) {
      getDataByQuery()
    } else {
      getDataFirst()
    }
  }, [searchQuery, page])

  const handleSetSearchQuery = (text) => {
    setSearchQuery(text);
    setHits([]);
    setPage(1);
  }

  const handleLoadMore = () => {
    setPage(prev => prev + 1)
  }

  return (<>
    <Searchbar handleSetSearchQuery={handleSetSearchQuery} />
    <ImageGallery hits={hits} />
    {!hits.length && !loading && <h2>Smth's wrong.. Don't worry.. Nothing really matters. Try again!</h2>}
    {loading && <Loader />}
    {err && 'Nothing really matters. Try again!'}
    {hits.length && hits.length < totalPosts ? <Button onHandleClick={handleLoadMore}>{loading ? 'Loading' : 'Load more'} </Button> : null}
  </>)
}