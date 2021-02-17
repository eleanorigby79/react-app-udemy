//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
// Create a react component
const App = () => {

    return (
        <div>
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Nice Blog Post!" avatar={faker.image.image()}/>
            <CommentDetail author="Alex" timeAgo="Today at 2:00AM" comment="Love it!" avatar={faker.image.image()}/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 4:45PM" comment="So inspiring..." avatar={faker.image.image()}/>
        </div>
    );
}
//Take the react component and show it to screen
ReactDOM.render(
  <App />, 
  document.querySelector('#root')  
);