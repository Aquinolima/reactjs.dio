import React from 'react'

const RepositoryItem = ({ name, linkToRepo, fullname, language, visibility, forks }) => {
    return (
        
            <div id='content'>
                <div>
                    <h2>{name}</h2>
                </div>
                <div id='content-infos'>
                    <h4>Fullname: </h4>
                    <a href={linkToRepo} target='_blank' rel='noreferrer'>{fullname}</a>
                </div>
                <div id='content-status'>
                    <div>
                        <h4>Languages</h4>
                        <span>{language}</span>
                    </div>
                    <div>
                        <h4>Visibility</h4>
                        <span>{visibility}</span>
                    </div>
                    <div>
                        <h4>Forks</h4>
                        <span>{forks}</span>
                    </div>
                </div>
            </div>
        

    )
}

export default RepositoryItem
