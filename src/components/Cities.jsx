import { useOutletContext } from "react-router-dom";
import "../styles/Cities.scss"

function Cities() {
    const [ city, setCity ] = useOutletContext();

    const handleCityChange = () => {
        
    }

    return (
        <div className="cities">
            <form>
                <label htmlFor="city">City:</label>
                <input type="text" />
                <button onClick={handleCityChange}>Sumbit</button>
            </form>
        </div>
    )
}

export default Cities;