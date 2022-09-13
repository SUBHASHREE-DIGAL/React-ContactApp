import React, { useState, useEffect } from "react";

import axios from "axios";

function ContactList(props) {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getusers();
  }, []);

  const getusers = async () => {
    let res = await axios.get("https://dummyjson.com/users?limit=10");
    console.log(res.data.users);
    setContact(res.data.users);
  };

  let clickData = (data) => {
    props.sendData(data);
  };

  return (
    <React.Fragment>
      <div>
        <h1>contactList</h1>
        <pre>{JSON.stringify(contact)}</pre>
        <table className=" table striped bordered hover shadow-lg table-danger">
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {contact.length > 0 ? (
              <React.Fragment>
                {contact.map((data) => {
                  return (
                    <tr key={data.id} onClick={() => clickData(data)}>
                      <td>{data.id}</td>
                      <td>
                        {data.firstName} {data.lastName}
                      </td>
                      <td>{data.email}</td>
                      <td>{data.address.city}</td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ) : null}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ContactList;
