import styles from "./Modal.module.css";

const Modal = (props) => {
    const okBtnHandler = () => {
        props.onOk();
    };

    const cancelBtnHandler = () => {
        props.onCancel();
    };

    return (
        <div className={styles.modal}>
            <h2>Do you want to delete this entry?</h2>
            <div className={styles.btn__group}>
                <button className={styles.ok__btn} onClick={okBtnHandler}>
                    OK
                </button>
                <button
                    className={styles.cancel__btn}
                    onClick={cancelBtnHandler}
                >
                    CANCEL
                </button>
            </div>
        </div>
    );
};

export default Modal;
