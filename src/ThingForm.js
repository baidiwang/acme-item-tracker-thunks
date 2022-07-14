import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const ThingForm = ({ createThing })=> {
  return (
    <div>
      <button onClick={ createThing }>+</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  return {
    createThing: ()=> {
      // const response = await axios.post('/api/things', { name: Math.random()});
      // const thing = response.data;
      dispatch(createThing({name: Math.random()}));
    }
  };
}

export default connect(null, mapDispatchToProps)(ThingForm);
