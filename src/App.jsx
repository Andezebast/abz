import "./App.scss";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Register from "./components/Register/Register";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [successUser, setSuccessUser] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);
  const [data, setData] = useState([]);
  const showButton = page < totalPage;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      );
      const newData = [...data].concat(response.data.users);
      setData(newData.sort((prev, next) => prev.registration_timestamp > next.registration_timestamp));
      setTotalPage(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div className="App">
      <Header />
      <Banner />
      <Users setPage={setPage} page={page} showButton={showButton} data={data} />
      <Form setSuccessUser={setSuccessUser} fetchData={fetchData} />
      <Register successUser={successUser} />
    </div>
  );
};

export default App;
