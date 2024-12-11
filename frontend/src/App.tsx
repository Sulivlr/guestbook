import {Container} from "@mui/material";
import GuestBar from "./UI/AppBar/GuestBar";
import Messages from "./features/Messages";
import NewMessage from "./features/components/NewMessage";

const App = () => {
    return (
        <>
            <header>
                <GuestBar/>
            </header>
            <main>
                <Container maxWidth="xl">
                    <NewMessage />
                    <Messages/>
                </Container>
            </main>
        </>
    );
};

export default App;