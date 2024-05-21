import { Heading1 } from "../../typo"
import { Modal } from "react-bootstrap"

const RequestSent = ({show, onHide}:any) => {
    return (
        <Modal show={show} onHide={onHide} className="request-sent" centered>
            <Modal.Body>
                <div>
                    <Heading1>Thank you we will let you know when it has been approved.</Heading1>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default RequestSent
