import {Axios} from "./Axios";

export function getAllMovie() {
    const url = `/movie/changes?page=1`;
    return Axios.get(url);
}

const moviePageServices = {
    getAllMovie,
};

export default moviePageServices;
