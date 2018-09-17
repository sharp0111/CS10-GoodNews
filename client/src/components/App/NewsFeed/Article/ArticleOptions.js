import React from 'react';
import { Dropdown } from 'semantic-ui-react';
// import axios from 'axios';

const ArticleOptions = (props) => {
  return (
    <Dropdown icon='ellipsis horizontal' pointing='top right'>
      <Dropdown.Menu>
        <Dropdown.Item 
          text="Save for later" onClick={props.save}/>
      </Dropdown.Menu>
    </Dropdown>
  );
}
 
export default ArticleOptions;