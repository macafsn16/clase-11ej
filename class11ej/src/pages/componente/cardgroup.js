import fullData from "../data/data.js";
import Card from "./card.js";

export default function Cardgroup() {
    
    return (

        fullData.map(item => (
            <Card data={ item } key={item.id} />
        )
    )
)
};