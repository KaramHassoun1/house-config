import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from ".//pages/Home";
import HouseConfigurator from "./pages/HouseConfigurator";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/create" element={<HouseConfigurator/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
