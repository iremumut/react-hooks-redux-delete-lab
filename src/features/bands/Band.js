import { bandRemoved } from "./bandsSlice";
import { useDispatch } from "react-redux";
const Band = ({band}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(bandRemoved(band.id));
    }
    return(
        <li>
           <p> {band.name} </p>
            <button onClick={handleDelete}>Delete Band</button>
            </li>
    );
}

export default Band;