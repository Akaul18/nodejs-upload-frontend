import React, { useState, useRef, useEffect } from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

const Post = () => {
    const [loading, setLoading] = useState(false)
    const [inputText, setInputText] = useState('')
    const [allPosts, setAllPosts] = useState([])
    const [error, setError] = useState(false)
    let inputRef = useRef()

    useEffect(() => {
        getAllPosts('http://10.0.0.166:5600/api/post')
    }, [loading])

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const getAllPosts = (url) => {
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((posts) => setAllPosts(posts))
            .catch((err) => console.error(err.message))
    }

    const handlePostClick = () => {
        if (!inputText) {
            setError(true)
            return
        }
        setError(false)
        setLoading(true)
        fetch('http://10.0.0.166:5600/api/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ post: inputText }),
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                setLoading(false)
                alert(resData.msg)
                setInputText('')
                inputRef.current.ref.current.onblur = true
                // inputRef.current.blur()
            })
            .catch((err) => {
                console.error(err.message)
            })
    }

    return (
        <div className="post-container">
            <h1>Post something...</h1>
            <div>
                <Form>
                    <TextArea
                        placeholder="post quick links, short note etc"
                        style={{ minHeight: 100 }}
                        value={inputText}
                        onChange={handleInputChange}
                        ref={inputRef}
                    />
                    <br />
                    {loading ? (
                        <Button
                            loading
                            secondary
                            style={{
                                margin: '1rem 0 1rem',
                                cursor: 'pointer',
                            }}
                            onClick={handlePostClick}
                        >
                            Post
                        </Button>
                    ) : (
                        <Button
                            secondary
                            style={{
                                margin: '1rem 0 1rem',
                                cursor: 'pointer',
                            }}
                            onClick={handlePostClick}
                        >
                            Post
                        </Button>
                    )}
                </Form>
                {error ? (
                    <div className="ui error message">
                        <p>post field cannot be empty</p>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <br />
            <div className="all-posts-container">
                <ul>
                    {allPosts.map((post) => {
                        return <li key={post.id}>{post.post}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Post
