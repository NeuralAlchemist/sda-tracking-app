import Moment from "react-moment";

export default function getReadableDate(date) {
    return (
        <Moment local format="YYYY-MM-DD HH:mm">
            {date}
        </Moment>
    );
}
