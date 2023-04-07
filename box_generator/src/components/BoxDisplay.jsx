import './style.css'
const BoxDisplay = (props) => {
    const styles = {
        width: '200px',
        height: '200px',
        backgroundColor: props.input.color,
        border: '1px black solid'
    }
    return (
    <div className='styles'>
        <div style={styles}></div>
    </div>
    );
};

export default BoxDisplay;