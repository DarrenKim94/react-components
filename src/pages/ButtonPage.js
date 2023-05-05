import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

function ButtonPage() {


    return (
        <div>
            <div>
                <Button className='mb-5' success outline>
                    <GoCloudDownload />
                    Click Me  
                </Button>
            </div>
            <div>
                <Button className='mb-5' success rounded>
                    <GoBell />
                    Dont Click me
                </Button>
            </div>
            <div>
                <Button className='mb-5' warning outline>
                    <GoDatabase />
                    huy
                </Button>
            </div>
            <div>
                <Button className='mb-5' primary rounded>Bro</Button>
            </div>
            <div>
                <Button className='mb-5' secondary>Dang</Button>
            </div>
        </div>
    )
    
}

export default ButtonPage;