import Button from "./Button";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

function App() {
    return (
        <div>
            <div>
                <Button success outline>
                    <GoCloudDownload />
                    Click Me  
                </Button>
            </div>
            <div>
                <Button success rounded>
                    <GoBell />
                    Dont Click me
                </Button>
            </div>
            <div>
                <Button warning outline>
                    <GoDatabase />
                    huy
                </Button>
            </div>
            <div>
                <Button primary rounded>Bro</Button>
            </div>
            <div>
                <Button secondary>Dang</Button>
            </div>
        </div>
    )
    
}

export default App;