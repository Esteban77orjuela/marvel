import BestCharacters from "../components/BestCharacters/BestCharacters";
import ListLastEvents from "../components/ListLastEvent/ListLastEvent";
import Insider from "../components/Insider/Insider";

export default function Home() {
    return (
        <div>
            <BestCharacters />
            <ListLastEvents />
            <Insider />
        </div>
    );
}
