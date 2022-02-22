import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SvgIcon from '@material-ui/core/SvgIcon';
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';

const Header = () => {
  const navigate = useNavigate();

  // home icon
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = (action) => {
    setAnchorEl(null);
    handleMobileMenuClose();
    if (action === 'profile') {
      navigate('/admin/profile')
    }
    else if (action === 'logout') {
      navigate('/admin/login')
    }
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu

      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      <MenuItem onClick={() => handleMenuClose("profile")}>Profile</MenuItem>
      <MenuItem onClick={() => handleMenuClose('logout')}>Logout</MenuItem>
    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* Home */}
      <MenuItem onClick={() => navigate('/')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <HomeIcon color="action" />
        </IconButton>
        <p>Home</p>
      </MenuItem>

      {/* Organizers */}
      <MenuItem onClick={() => navigate('/admin/organizer')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <ContactsOutlinedIcon color="action" />
        </IconButton>
        <p>All Organizers</p>
      </MenuItem>

      {/* Users */}
      <MenuItem onClick={() => navigate('/admin/userslist')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <PeopleIcon color="action" />
        </IconButton>
        <p>All Users</p>
      </MenuItem>

      {/* Paid List Allowed */}
      <MenuItem onClick={() => navigate('/admin/allowed/paidlist')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <ListAltIcon color="action" />
        </IconButton>
        <p>Allowed Paid List</p>
      </MenuItem>

      {/* Paid List Requests */}
      <MenuItem onClick={() => navigate('/admin/request/paidlist')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={3} color="primary">
            <SmsOutlinedIcon color="action" />
          </Badge>
        </IconButton>
        <p>Request Paid List</p>
      </MenuItem>

      <MenuItem onClick={() => navigate('/admin/notification')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="primary">
            <NotificationsIcon color="action" />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #6BDCFC",
    // backgroundColor: "rgb(102 98 98)",
    '&:hover': {
      border: "1px solid #6BDCFC",

    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },

  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    marginLeft: "90%;"
    // justifyContent: 'right',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 2, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      height: "10%",
      color: "#fffff",
      [theme.breakpoints.up('md')]: {
        width: '78ch',
        //   '&:focus': {
        //     width: '20ch',
        //   },
      },
    },
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" id='apporg' sx={{ backgroundColor: "white" }}>
          <Toolbar>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: 'block' } }}
            >
              <h2 onClick={() => navigate('/')} className='headerlogoorg'>GM4</h2>
            </Typography>
            <Search id="header-searchbarorg">
              <SearchIconWrapper>
                <SearchIcon sx={{ display: "right", color: "rgb(102 98 98)" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <div className="noti_icon" onClick={() => navigate('/admin/notification')}>
                  <Badge badgeContent={9} color="primary">
                    <NotificationsIcon sx={{ display: "right", color: "rgb(102 98 98)" }} color="action" />
                  </Badge>
                </div>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle sx={{ display: "right", color: "rgb(102 98 98)" }} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon sx={{ color: "gray" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box >
    </>
  )
}

export default Header