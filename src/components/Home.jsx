import { useState } from 'react';
import '../styles/Home.scss';

function Home() {
    const [city, setCity] = useState(null);

    return (
        <div className="home">
            <h3>React Weather</h3>
        </div>
    )
}

export default Home;