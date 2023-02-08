import { useDispatch } from "react-redux";
import { useContext } from "react";
import { setTotalPages } from '../redux/action';
import { PaginationContext } from "../context/pagination_context";

function RenderFilm(props) {
    const { filmList } = props;
	const dataContext = useContext(PaginationContext);
    const { pageNow } = dataContext;

    const dispatch = useDispatch();
    const moviesPerPage = 10;

    const totalPages = filmList.length / moviesPerPage;
    dispatch(setTotalPages(totalPages));

    const selectPage = pageNow;
    const startFrom = selectPage * moviesPerPage;

    const tenFilmList = filmList.slice(startFrom, startFrom + moviesPerPage);
	return (tenFilmList)
}

export { RenderFilm };
