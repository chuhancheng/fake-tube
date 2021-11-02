import React, { useState } from "react";
import {
    useHistory
} from "react-router-dom";

const Card = () => {
    return (
        <div className="rounded bg-gray-100 border-solid border-2 border-gray-300 h-44 m-8 p-4 flex items-center">
            <div className="">card content</div>
        </div>
    )
}

const Home = () => {
    const [data, setDete] = useState([1,2,3,4,5,6,7,8,9]);
    const history = useHistory();

    const changeRoute = () => {
        history.push('/firstPage')
    }

    const content = () => {
        return data.map(() => {
            return <Card/>
        })
    }

    return (
        <>
            <div className="py-4">
                {content()}
                <button type="button" onClick={changeRoute}>change page</button>
            </div>
        </>
    )
}

export default Home;