import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jon Jameson",
        email: "JJames@gmail.com",
        phone: "123-456-7489",
        type: "personal"
      },
      {
        id: 2,
        name: "John James",
        email: "JhJames@gmail.com",
        phone: "223-456-7489",
        type: "personal"
      },
      {
        id: 3,
        name: "Jean Jameso",
        email: "JeaJames@gmail.com",
        phone: "323-456-7489",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact

  //Delete contact

  //Set current contact

  //Clear contact

  //Update contact

  //Filter contacts

  //Clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
