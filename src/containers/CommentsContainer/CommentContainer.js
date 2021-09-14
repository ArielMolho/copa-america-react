import React, { useState, useEffect } from 'react'
import Comments from '../../components/Comments/Comments';
import ButtonRedirect from '../../components/ButtonRedirect/ButtonRedirect';
import './CommentContainer.css';

const { getPosts, createPost } = require('../../services/postService');

export default function CommentContainer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then(res => setPosts(res.data))
    }, [])
    
    function handleSave(){
        createPost({
            name: name, 
            email: email, 
            message: message
        })
            .then(res => {
                setPosts([...posts, {id: res.id, name: res.name, email: res.email, message: res.message}])
        })
    }

    return (
        <div className="container my-5 mx-auto">
            <div className="row m-0">
                <form className="col-12 col-md-4 needs-validation" noValidate>
                    <h2 className="comments-title">Agregá tus comentarios</h2>
                    <fieldset>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Ingresá tu nombre" onChange={evt => setName(evt.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="nombre@ejemplo.com" onChange={evt => setEmail(evt.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="message" rows="6" name="message" placeholder="Comentá sobre la Copa América" onChange={evt => setMessage(evt.target.value)} required/>
                        </div>
                        <div className="mb-3 button-box">
                            <button type="reset" className="btn btn-secondary comment-button">Limpiar</button>
                            <button type="submit" className="btn btn-primary comment-button" disabled={!(name && email && message)} onClick={handleSave} >Enviar</button>
                        </div>
                    </fieldset>
                </form>
                <div className="col-12 col-md-8">
                    <h2 className="comments-title">Feed:</h2>
                    <div className="row">
                        <Comments posts={posts} />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end my-5">
                <ButtonRedirect/>
            </div>
        </div>
    )
}