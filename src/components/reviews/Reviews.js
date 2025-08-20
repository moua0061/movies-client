import { use, useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "./ReviewForm";

export const Reviews = ({getMovieData, movie, reviews, setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const moviveId = params.movieId;

    useEffect(() => {
        getMovieData(moviveId);
    }, []);

    const addReview = async (e) =>{
        e.preventDefault();
        const rev = revText.current;
        try
        {
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});
            const updatedReviews = [...reviews, {body:rev.value}];
            rev.value = "";
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }

  return (
    <div>

    </div>
  )
}
