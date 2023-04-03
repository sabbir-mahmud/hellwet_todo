import React from "react";
import { Helmet } from "react-helmet";
import Form from "./Form";
import Tasks from "./Tasks";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Home: task list</title>
      </Helmet>
      <Form />
      <Tasks />
    </div>
  );
};

export default Home;
