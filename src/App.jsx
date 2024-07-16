import { useState } from "react";
import { dummyJSON, jokeApi, recipeList } from "./helper/axios";

function App() {
  const [users, setUsers] = useState([]);
  const [jokes, setJokes] = useState({});
  const [recipe, setrecipes] = useState([]);

  const handleFetchUsers = async () => {
    setUsers([]);
    try {
      const res = await dummyJSON.get("users");
      setUsers(res?.data?.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleJoke = async () => {
    setJokes({});
    try {
      const res = await jokeApi.get("joke/Dark?blacklistFlags=nsfw");
      setJokes(res?.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleList = async () => {
    setrecipes({});
    try {
      const params = {
        from: "0",
        size: "20",
        tags: "under_30_minutes",
      };
      const config = {
        params,
        headers: {
          "X-RapidAPI-Key":
            "3e1d743838mshcedfd136be6186fp14230ajsn79060f8599f1",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };
      const res = await recipeList.get("list", config);
      console.log(res);
      setrecipes(res?.data?.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <button onClick={handleFetchUsers}>FETCH USERS</button>
      <button onClick={handleJoke}>FETCH JOKE</button>
      <button onClick={handleList}>FETCH LIST</button>
      {users.length > 0
        ? users.map((user, index) => <p key={index}>{user?.firstName}</p>)
        : null}
      <h2>{jokes?.setup}</h2>
      <h2>{jokes?.delivery}</h2>
      <h2>{jokes?.joke}</h2>
      {recipe.length > 0 &&
        recipe?.map((i) => {
          return (
            <>
              <img
                src={i?.thumbnail_url}
                alt="thumbnail"
                height={"100px"}
                width={"100px"}
              />
              <p>{i?.name}</p>
              <p>{i?.description}</p>
            </>
          );
        })}
    </>
  );
}

export default App;
