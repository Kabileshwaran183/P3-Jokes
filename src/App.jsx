import Joke from "./components/Joke"
import jokesData from "./components/jokesData"

// 2.     What do we usually use `.map()` for in React?
//        Convert an array of raw data into an array of JSX elements
//        that can be displayed on the page.

export default function App() {
    const jokeElements = jokesData.map((joke) => {
        return <Joke setup={joke.setup} 
                    punchline={joke.punchline} />
    })
    return (
        <main>
            {jokeElements}
        </main>
    )
}