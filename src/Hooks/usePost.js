import {useStore} from '../Store'

const usePost = () => {
    const [{post}, setState] = useStore()

    const setPost = post => {
        setState()
    }
    const setLikes = likes => {
        setState()
    }

    const setComments = comments => {
        setState()
    }

    return [post, setPost, setLikes, setComments]
  }
  
  export default usePost
  