import {CircularProgress, Grid, Typography} from "@mui/material";
import {selectMessages, selectMessagesIsFetching} from "./messagesSlice";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import MessageItem from "./components/MessageItem";
import {useEffect} from "react";
import {fetchMessages} from "./messagesThunks";

const Messages = () => {

    const dispatch = useAppDispatch();
    const messages = useAppSelector(selectMessages);
    const fetchLoading = useAppSelector(selectMessagesIsFetching);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return fetchLoading ? (
        <CircularProgress />
    ) : (
        <Grid container direction="column" spacing={2}>
            <Grid item container>
                <Grid item sx={{ mt: 1 }}>
                    <Typography variant="h4">Messages</Typography>
                </Grid>
            </Grid>
            <Grid item container spacing={2}>
                {messages.map(message => (
                    <Grid item xs={12}>
                        <MessageItem
                            key={message.id}
                            author={message.author}
                            message={message.message}
                            image={message.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );

};

export default Messages;