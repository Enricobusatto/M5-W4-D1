import { useParams } from "react-router"
import CommentArea from "../CommentArea"

function BookDetail() {
    const {asin} = useParams();
    return (
        <>
            {/* <img>{book.img}</img> */}
            <CommentArea />
        </>
    )
}
export default BookDetail