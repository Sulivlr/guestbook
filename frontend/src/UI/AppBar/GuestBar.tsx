import {AppBar, Grid, styled, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {MarkEmailUnread, MenuBook} from "@mui/icons-material";

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        color: '#d3d3d3',

    },
});

const GuestBar = () => {
    return (
        <AppBar
            color="primary"
            position="sticky"
            sx={{
                mb: 2,
                background: 'linear-gradient(#00e1ff 100%, #80ffc0 100%)',
                boxShadow: '0 3px 10px rgba(0, 0, 0.2, 0.5)',
            }}
        >
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Grid sx={{display: 'flex', alignItems: 'center'}}>
                    <MenuBook fontSize="large" sx={{mr: 1}}/>
                    <Typography variant="h6" component="div">
                        <StyledLink to="/">Guest Book</StyledLink>
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default GuestBar;
