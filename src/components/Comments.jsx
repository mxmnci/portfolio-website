import { useEffect, useRef } from 'react'

function Comments() {
  const commentBox = useRef()

  useEffect(() => {
    const commentNodeId = 'comments_' + Date.now()
    commentBox.current.innerHTML = `<div id="${commentNodeId}" />`

    const script = document.createElement('script')
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('repo', 'mxmnci/portfolio-website')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'preferred-color-scheme')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    document.getElementById(commentNodeId).appendChild(script)
  }, [])

  return <div ref={commentBox} />
}

export default Comments
