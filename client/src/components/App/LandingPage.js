import React from 'react';
import { Grid, Icon, Button, Segment } from 'semantic-ui-react';

const LandingPage = (props) => {
  return (
    <Grid stackable>
      <Grid.Row 
        style={{
          backgroundColor: '#37bc9b',
          height: '50vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <div style={{ backgroundColor: 'white', padding: '2em' }}>
            <span className='app-name' style={{color: '#37bc9b', paddingRight: '0.2em'}}>
              GOOD
            </span>
            <span className='app-name' style={{color: '#3d3d3d'}}>
              NEWS
            </span>
        </div>
        <span className='app-description'>A CLICKBAIT-FREE NEWS AGGREGATOR</span>
      </Grid.Row>
      <Grid.Row 
        className='about-section'
        centered>
        <Grid.Column width={1}>
          <Icon name='newspaper outline' size='huge' color='grey'/>
        </Grid.Column>
        <Grid.Column width={3} className='about-app'>
          You can get news from a variety of sources without having to deal with clickbait.
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon name='settings' size='huge' color='grey'/>
        </Grid.Column>
        <Grid.Column width={3} className='about-app'>
          We used artificial intelligence to identify clickbait articles so you don’t have to.
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon name='group' size='huge' color='grey'/>
        </Grid.Column>
        <Grid.Column width={3} className='about-app'>
          Created by a team of Data Science and Web Development students at Lambda School.
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Button primary size='large' 
          style={{ backgroundColor: '#37bc9b' }}
          onClick={props.enterSite}>ENTER SITE</Button>
      </Grid.Row>
    </Grid>
  );
}
 
export default LandingPage;