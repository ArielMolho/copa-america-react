import React from 'react';

export default function Comments({posts}) {
    return(
        <>
            { posts.map(data => {
                return (
                    <div key={Math.random().toString(36).substr(2, 9)}>
                        <div className="col-10 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">'{data.message}'</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )} 
            )}
        </>
    )
}