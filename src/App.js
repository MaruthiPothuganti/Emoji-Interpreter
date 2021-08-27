import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "🚣": "Person Rowing Boat",
    "🗾": "Map of Japan",
    "⛰️": "Mountain",
    "🌋": "Volcano",
    "🗻": "Mount Fuji",
    "🏕️": "Camping",
    "🏖️": "Beach with Umbrella",
    "🏝️": "Desert Island",
    "🏯": "Japanese Castle",
    "🕍": "Synagogue",
    "⛩️": "Shinto Shrine",
    "🌄": "Sunrise Over Mountains"
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
