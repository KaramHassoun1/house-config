//home component
import {Button} from "@chakra-ui/react";
import * as React from "react";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            asdasdasas
            <Button colorScheme="gray"
                    onClick={() => navigate("/create")}>
                Start configurating</Button>
        </>

    );
};

