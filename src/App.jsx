import "./App.css";
import Card from "./components/card/Card";
import Card_layold from "./components/card__Layold/Card_layold";

import users from "./components/utls/data/data";

function App(props) {
  return (
    <div className="App">
      <Card_layold>
        {users.map((item) => (
          <Card
          web={item.web}
          twitter = {item.twitter}
          profilePic={item.profilePic}
          userInfo={item.userInfo}
            bgcolor={item.wallpaper}
            username={item.username}
            id={item.id}
          
            
          />
        ))}
      </Card_layold>
    </div>
  );
}

export default App;
