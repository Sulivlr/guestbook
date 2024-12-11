import GuestBar from "./UI/AppBar/GuestBar";
import {Container, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Messages from "./features/Messages";


const App = () => {
    return (
        <>
            <header>
                <GuestBar />
            </header>
            <Container maxWidth="xl" sx={{ mt: 1 }} component="main">
                <Routes>
                    <Route path="/" element={<Messages />} />
                    <Route path="*" element={<Typography variant="h1">No found!</Typography>} />
                </Routes>
            </Container>
        </>
    );
};

export default App;
