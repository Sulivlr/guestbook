import {AppBar, Grid, styled, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {MenuBook, Message} from "@mui/icons-material";

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        color: 'inherit',
    },
});

const GuestBar = () => {
    return (
        <AppBar
            color="primary"
            position="sticky"
            sx={{
                mb: 2,
                background: 'linear-gradient(#ff9800 20%, #ff5722 67%)',
                boxShadow: '0 3px 10px rgba(0, 0, 0.2, 0.5)',
            }}
        >
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Grid sx={{display: 'flex', alignItems: 'center'}}>
                    <MenuBook sx={{mr: 1}}/>
                    <Typography variant="h6" component="div">
                        <StyledLink to="/">Guest Book</StyledLink>
                    </Typography>
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center'}}>
                    <Message fontSize='medium' color="primary" sx={{mr: 1}}/>
                    <Typography variant="h6" component="div">
                        <StyledLink to="/new-message">Add new message</StyledLink>
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default GuestBar;
