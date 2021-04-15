import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Paper,
  CardContent,
} from '@material-ui/core';
import whatsappLogo from '../../../Assets/img/comp/whatsapp.svg';
import viberLogo from '../../../Assets/img/comp/viber.svg';
import facebookLogo from '../../../Assets/img/comp/messenger.svg';
import ReactMapGl, { Marker, NavigationControl, Popup } from 'react-map-gl';
import RentSlider from '../../../components/Slider/RentSlider/RentSlider';
import {
  EuroOutlined,
  WifiOutlined,
  FlashOnRounded,
  OpacityRounded,
} from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import makeStyles from './styles';

const RentDesc = (props) => {
  const classes = makeStyles();
  const [contact, setContact] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const habdleContactOpen = () => {
    setContact((prevIsSignUp) => !prevIsSignUp);
    console.log(contact);
  };

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  const [viewport, SetViewPort] = useState({
    latitude: 37.9908997, //TODO will be from backend
    longitude: 23.7733589, //TODO will be from
    zoom: 8,
    width: '100%',
    height: '100%',
  });

  return (
    <Card>
      <Grid>
        <Box style={{ position: 'relative', bottom: 0 }}>
          <RentSlider style={{ position: 'relative' }} />{' '}
          {/** //TODO need to provide arr with data of pic */}
          <Box
            style={{
              position: 'absolute',
              bottom: 4,
              right: '5%',
              zIndex: 500,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography className={classes.MainPrice}>300</Typography>
            <Icon
              className='fas fa-euro-sign'
              style={{ fontSize: 14, color: 'white' }}
            />
            <Typography className={classes.SecondaryPrice}>/month</Typography>
          </Box>
        </Box>

        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.sectionTitle}>
                Description
              </Typography>
              <Box className={classes.infoRow}>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    Unit for rent:
                  </Typography>
                  <Typography className={classes.infoText}>Room</Typography>
                </Box>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    {' '}
                    Roomates:
                  </Typography>
                  <Icon
                    className='fas fa-male'
                    color='primary'
                    style={{ fontSize: 14 }}
                  />
                  <Icon
                    className='fas fa-female'
                    color='primary'
                    style={{ fontSize: 14 }}
                  />
                  <Icon
                    className='fas fa-female'
                    color='primary'
                    style={{ fontSize: 14 }}
                  />
                </Box>
              </Box>
              <Box className={classes.infoRow}>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>Area:</Typography>
                  <Typography className={classes.infoText}>
                    Piraeus, Attika
                  </Typography>
                </Box>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    {' '}
                    Total Rooms:
                  </Typography>
                  <Typography className={classes.infoText}>4</Typography>
                </Box>
              </Box>
              <Box className={classes.infoRow}>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    Address:
                  </Typography>
                  <Typography className={classes.infoText}>
                    Rethemnius, 12
                  </Typography>
                </Box>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    {' '}
                    Furnished:
                  </Typography>
                  <Typography className={classes.infoText}>YES</Typography>
                </Box>
              </Box>
              <Box className={classes.infoRow}>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    Deposit:
                  </Typography>
                  <Typography className={classes.infoText}>
                    1 month rent
                  </Typography>
                </Box>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    {' '}
                    Contract:
                  </Typography>
                  <Typography className={classes.infoText}>1 year</Typography>
                </Box>
              </Box>
              <Box className={classes.infoRow}>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    Available:
                  </Typography>
                  <Typography className={classes.infoText}>
                    12/05/2021
                  </Typography>
                </Box>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    {' '}
                    Agent Fees:
                  </Typography>
                  <Typography className={classes.infoText}>NO</Typography>
                </Box>
              </Box>
              <Box className={classes.infoRow}>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}>
                    Included:
                  </Typography>
                  <Box className={classes.iconsRow}>
                    <FlashOnRounded style={{ fontSize: 18 }} />
                    <WifiOutlined style={{ fontSize: 18 }} />
                    <OpacityRounded style={{ fontSize: 18 }} />
                  </Box>
                </Box>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoTitle}> Floor:</Typography>
                  <Typography className={classes.infoText}>Ground</Typography>
                </Box>
              </Box>
              <Grid container spacing={1} style={{ marginTop: 10 }}>
                <Grid item>
                  <Chip
                    label='Balcony'
                    // deleteIcon={<DoneIcon />}
                    color='primary'
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label='Sea View'
                    // deleteIcon={<DoneIcon />}
                    color='primary'
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label='Washing Machine'
                    // deleteIcon={<DoneIcon />}
                    color='primary'
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label='Renovated'
                    // deleteIcon={<DoneIcon />}
                    color='primary'
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label='Garden'
                    // deleteIcon={<DoneIcon />}
                    color='primary'
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Typography className={classes.sectionTitle}>Location</Typography>
              <Box>
                <ReactMapGl
                  {...viewport}
                  width='100%'
                  height='300px'
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  onViewportChange={(viewport) => SetViewPort(viewport)}
                  mapStyle='mapbox://styles/maksydev/ckl8m1vzx03cm17n01lnkbbxu'
                  className={classes.map}
                  scrollZoom={false}
                >
                  <NavigationControl className={classes.NavControl} />
                  {/* {tour?.locations?.map((loc) => (
                    <Marker
                      key={loc._id}
                      latitude={loc.coordinates[0]}
                      longitude={loc.coordinates[1]}
                      offsetTop={-30}
                      offsetLeft={-15}
                    >
                      <RoomOutlinedIcon
                        color='secondary'
                        style={{
                          transform: `translate(${30 / 2 + 'px'}, ${
                            30 / 2 + 'px'
                          })`,
                          width: '30px',
                          height: '30px',
                        }}
                      />
                      <span className={classes.marker_info}>
                        {loc.description}
                      </span>
                    </Marker>
                  ))} */}
                </ReactMapGl>
              </Box>
            </Grid>
          </Grid>
          <Typography
            className={classes.sectionTitle}
            style={{ marginTop: 20 }}
          >
            Videos
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <ReactPlayer
                url='https://www.facebook.com/officialjackvale/videos/2394949410622860'
                width={300}
                height={200}
                // style={{width:'100%'}}
                controls
              />
            </Grid>
            <Grid item>
              <ReactPlayer
                url='https://www.facebook.com/officialjackvale/videos/2394949410622860'
                width={300}
                height={200}
                // style={{width:'100%'}}
                controls
              />
            </Grid>
          </Grid>
        </CardContent>

        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.sectionTitle}>Contacts</Typography>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <Button
                variant='contained'
                color='primary'
                onClick={isSignUp ? habdleContactOpen : null}
              >
                <Typography>
                  {isSignUp
                    ? 'Press to show Contacts'
                    : 'Sign In to show contact'}
                </Typography>
              </Button>
            </Box>
            {contact && (
              <Grid container justify='center' style={{ marginBottom: 20 }}>
                <Box className={classes.infoBoxContacts}>
                  <Box className={classes.infoBoxContacts}>
                    <Button className={classes.contactIcon}>
                      <a
                        href={`https://api.whatsapp.com/send?phone=306941690815&text=Hello, my name is ${'Yigal'} Iam intresting in appartment(room) on Rythimnis str....`}
                        target='_blank'
                      >
                        <img
                          className={classes.icon}
                          src={whatsappLogo}
                          alt='WhatsApp'
                        />
                      </a>
                    </Button>
                    <Button className={classes.contactIcon}>
                      <a href='tel:+6494461709' target='_blank'>
                        <Icon
                          className='fas fa-mobile-alt'
                          style={{ fontSize: 35 }}
                        />
                      </a>
                    </Button>
                    <Button className={classes.contactIcon}>
                      <a
                        href='https://msng.link/o/?yigal.maksimov=fm'
                        target='_blank'
                      >
                        <img
                          className={classes.icon}
                          src={facebookLogo}
                          alt='Messenger'
                        />
                      </a>
                    </Button>
                    <Button className={classes.contactIcon}>
                      <a
                        href='viber://chat?number=+306943811801'
                        target='_blank'
                      >
                        <img
                          className={classes.icon}
                          src={viberLogo}
                          alt='Viber'
                        />
                      </a>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default RentDesc;
