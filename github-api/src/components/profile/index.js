import React from 'react';
import useGithub from '../../hooks/github-hooks';
import './styled.css'
const Profile = () => 
{
    const { githubState } = useGithub()

    return (
        
            <main>
                <img src={githubState.user.avatar_url} alt="avatar of user" />
                <div id='content'>
                    <div>
                        <h1>{githubState.user.name}</h1>
                    </div>
                    <div id='content-infos'>
                        <h4>Username: </h4>
                        <a href={githubState.user.html_url} target='_blank' rel='noreferrer'>{githubState.user.login}</a>
                    </div>
                    <div id='content-status'>
                        <div>
                            <h4>Followers</h4>
                            <span>{githubState.user.followers}</span>
                        </div>
                        <div>
                            <h4>Following</h4>
                            <span>{githubState.user.following}</span>
                        </div>
                        <div>
                            <h4>Public Repos</h4>
                            <span>{githubState.user.public_repos}</span>
                        </div>
                    </div>
                </div>
            </main>

        
    )
}

export default Profile;
