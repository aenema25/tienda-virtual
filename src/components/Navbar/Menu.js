import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuOpen, MenuSharp } from '@mui/icons-material';
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant={'contained'}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    backgroundColor: "#e5e5e5",
                    color: "#2B2D42",
                    "&:hover": {
                        backgroundColor: "#e5e5e5"
                    }
                }}
                endIcon={open ? <MenuOpen /> : <MenuSharp />}
            >
                <Typography variant={"body2"} fontWeight={100}>
                    Menu
                </Typography>
            </Button>
            <Menu
                sx={{
                    ".MuiPaper-root": {
                        backgroundColor: "#e5e5e5"
                    },
                    "a": {
                        textDecoration: 'none',
                        color: "#2B2D42"
                    }
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem disabled>Categorias</MenuItem>
                <Divider />
                <Link to="./category/hombre"><MenuItem onClick={handleClose}>Hombre</MenuItem></Link>
                <Link to="./category/mujer"><MenuItem onClick={handleClose}>Mujer</MenuItem></Link>
                <Link to="./category/nino"><MenuItem onClick={handleClose}>Niños</MenuItem></Link>
            </Menu>
        </div>
    );
}