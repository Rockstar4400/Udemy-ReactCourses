import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCar from './ApprovalCard';

const App = () =>{
  return (
    <div className="ui container comments">
      <ApprovalCar>
      <CommentDetail
        author="Sam"
        timeAgo="Today"
        text="Nice"
        avatar={faker.image.avatar()}
      />
      </ApprovalCar>
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector("#root"));
