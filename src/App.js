import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "đŖ": "Person Rowing Boat",
    "đž": "Map of Japan",
    "â°ī¸": "Mountain",
    "đ": "Volcano",
    "đģ": "Mount Fuji",
    "đī¸": "Camping",
    "đī¸": "Beach with Umbrella",
    "đī¸": "Desert Island",
    "đ¯": "Japanese Castle",
    "đ": "Synagogue",
    "âŠī¸": "Shinto Shrine",
    "đ": "Sunrise Over Mountains"
  };
  var emojiList = Object.keys(emojiDictionary);

  var [userInput, setUserInput] = useState("");
  function interpretEvent() {
    var userOne = event.target.value;
    var meaning = emojiDictionary[userOne];

    if (meaning === undefined) {
      meaning = "Sorry, its not in our DataBase";
    }
    setUserInput(meaning);
  }

  function emojiListHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }
  return (
    <div className="App">
      <h1>Place Emoji Interpreter</h1>
      <input onChange={interpretEvent}></input>
      <h3>{userInput}</h3>

      <ul>
        {emojiList.map((emoji) => {
          return (
            <li key={emoji} onClick={() => emojiListHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
