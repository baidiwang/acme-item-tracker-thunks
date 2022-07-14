import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { createUser, removeThingFromUser, deleteUser  } from './store';


const Users = ({ users, createUser, deleteUser, things, removeThingFromUser })=> {
  return (
    <div>
      <h1>Users</h1>
      <button onClick={ createUser }>+</button>
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                { user.name }
                <button onClick={ ()=> deleteUser(user)}>x</button>
                <ul>
                {
                  things.filter( thing => thing.userId === user.id)
                    .map(thing => {
                      return (
                        <li key={ thing.id }>
                          { thing.name } ({ thing.ranking })
                          <button onClick={ ()=> removeThingFromUser(thing)}>x</button>
                        </li>
                      );
                    }) 
                  
                }
                </ul>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state)=> {
  return {
    users: state.users,
    things: state.things
  };
}

const mapDispatch = (dispatch)=> {
  return {
    createUser: ()=> {
      // const user = (await axios.post('/api/users', {name: Math.random()})).data;
      // dispatch({ type: 'CREATE_USER', user});
      //hint
      dispatch(createUser({name: Math.random()}));
    },
    removeThingFromUser: (thing)=> {
      thing = {...thing, userId: null}
      // const updatedThing = (await axios.put(`/api/things/${thing.id}`, thing)).data
      // dispatch({ type: 'UPDATE_THING', thing: updatedThing});
      dispatch(updatedThing(thing));
    },
    deleteUser: (user)=> {
      // await axios.delete(`/api/users/${user.id}`);
      // dispatch({ type: 'DELETE_USER', user});
      dispatch(deleteUser(user));
    },
  };
}
export default connect(mapStateToProps, mapDispatch)(Users);
