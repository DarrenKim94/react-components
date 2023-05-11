import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handClose = () => {
        setShowModal(false);
    };

    const actionBar = <div><Button onClick={handClose} primary>I accept</Button></div>

    const modal = <Modal onClose={handClose} actionBar={actionBar}>
        <p>Here</p>
    </Modal>

    return(
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    )
};

export default ModalPage;