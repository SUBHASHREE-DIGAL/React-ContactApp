import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function ContactApp() {
  const [selectData, setSelectData] = useState();

  let receiveData = (data) => {
    setSelectData(data);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>contactApp</h1>
            <pre>{JSON.stringify(selectData)}</pre>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-9 text-center">
            <ContactList sendData={receiveData} />
          </div>
          <div className="col-md-3 text-center">
            <ContactCard selectData={selectData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactApp;
