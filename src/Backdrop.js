import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
    const hideBackdrop = () => {
        props.onClick();
        props.onCancel();
    };
    return <div className={styles.backdrop} onClick={hideBackdrop}></div>;
};

export default Backdrop;
