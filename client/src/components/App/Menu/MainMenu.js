import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const MainMenu = (props) => {
  return (
    <Menu className='main-menu' borderless secondary vertical fixed='top'>
      {/* <Search size='large' results={props.articles}/> */}
      <Menu.Item onClick={()=>props.switchArticles('all')}>
        <Icon name='newspaper' size='large' color='grey'/>
        All articles
      </Menu.Item>
      {props.loggedIn &&
        <Menu.Item onClick={()=>props.switchArticles('saved')}>
          <Icon name='save' size='large' color='grey'/>
          Saved articles
        </Menu.Item>}
      <Menu.Item>
        <Icon name='feed' size='large' color='grey'/>
        Trending topics:
        <Menu secondary vertical 
          items={props.trendingTopics}
          className='trending-topics'
          />
      </Menu.Item>
      <Menu.Item onClick={props.toggleLandingPage}>
        <Icon name='info circle' size='large' color='grey'/>
        About Good News
      </Menu.Item>
    </Menu>
  );
}
 
export default MainMenu;