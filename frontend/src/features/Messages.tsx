import {Grid, Typography} from "@mui/material";

const Messages = () => {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container>
                <Grid item sx={{mt: 1}}>
                    <Typography variant="h4">Messages</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Messages;