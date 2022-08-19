import React from 'react';
import './styled.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RepositoryItem from '../repository-item';
import StarredItem from '../starred-item';

const Repositories = () => {
  return (
    <Tabs id='container'>
      <TabList>
        <Tab id='repo'>Repositores</Tab>
        <Tab id='starred'>Starred</Tab>
      </TabList>

      <TabPanel >
        <h2 id='title'>Repositores List</h2>
        
        <div id='cards-repo'>
          <div id='cards-repo-item'>
            <RepositoryItem 
              name="SafeMind"
              linkToRepo="https://github.com/Aquinolima/SafeMind"
              fullname="Aquinolima/SafeMind"
              language="JavaScript"
              visibility="public"
              forks="0"
            />
          </div>

          <div id='cards-repo-item'>
            <RepositoryItem id='cards-repo-item'
              name="SafeMind"
              linkToRepo="https://github.com/Aquinolima/SafeMind"
              fullname="Aquinolima/SafeMind"
              language="JavaScript"
              visibility="public"
              forks="0"
            />
          </div>
        
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Starred List</h2>
        <StarredItem />
      </TabPanel>
    </Tabs>
  )
};

export default Repositories;
