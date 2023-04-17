import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate = () => {
    const [rate, setRate] = useState(0);

    return (
        <>
            <Container>
                {[...Array(5)].map((i, index) => {
                    const givenRating = index + 1;

                    return (
                        <>
                            <label key={index}>
                                <Radio
                                    type="radio"
                                    value={givenRating}
                                    onClick={() => {
                                        setRate(givenRating);
                                        // alert(`Are you sure you want to give ${givenRating} stars ?`);
                                        console.log(givenRating);
                                    }}
                                />
                                <Rating>
                                    <FaStar
                                        color={
                                            givenRating < rate || givenRating === rate
                                                ? "000"
                                                : "rgb(192,192,192)"
                                        }
                                    />
                                </Rating>
                                </label>
                        </>
                    );
                })}
            </Container >
        </>
    );
};

export default Rate;
