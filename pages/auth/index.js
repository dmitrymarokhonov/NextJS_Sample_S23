import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => (
  <div>
    <h1>The auth index page - {props.appName}</h1>
    <User name="Дима" age="28" />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  promise.then();
  return promise;
}

export default authIndexPage;
