import React, { children, createContext, useState } from 'react'


export const GithubContext = createContext ({
    location: false,
    user: {},
    repositories: [],
    starred:[],
});

const getUSer = (username) => {
    
}

const GithubProvider = ({children}) => {

    const [githubState, setGithubState] = useState({
        location: false,
        user: {
            avatar_url: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            followers: 0,
            following: 0,
            public_repos: 0


        },
        repositories: [],
        starred:[],
    });

    const getUSer = () => {

    }

    const contextValue = {
        githubState,
    }

  return <GithubContext.Provider value={contextValue}> {children} </GithubContext.Provider>
}

export default GithubProvider