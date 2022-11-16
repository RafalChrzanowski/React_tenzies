
export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div className="divFace" style={styles}>
            <h2>{props.value}</h2>
        </div>
    )
}