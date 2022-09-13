import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Stack, Grid } from '@mui/material';
import { PhoneIphone, Email, CalendarMonth, Place } from '@mui/icons-material';
import Marquee from 'react-fast-marquee';

import {
	about,
	icon,
	icon1,
	icon2,
	icon3,
	icon4,
	icon5,
	brand,
	brand1,
	brand2,
	brand3,
	brand4
} from '../assets';
import { StyledSectionContainer, StyledSection } from '../styles';

import { Footer } from '../components';
import { urlFor, client } from '../client';

const infoList = [
	{ title: 'Phone', subtitle: '123 456 7890', icon: <PhoneIphone /> },
	{ title: 'Location', subtitle: 'Hong kong china', icon: <Place /> },
	{ title: 'Email', subtitle: 'example@gmail.com', icon: <Email /> },
	{ title: 'Birthday', subtitle: 'May 27, 1990', icon: <CalendarMonth /> }
];

const icons = [PhoneIphone, Email, CalendarMonth, Place];

const skillsList = [
	{
		title: 'Ui/Ux Design',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon
	},
	{
		title: 'App Development',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon1
	},
	{
		title: 'Photography',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon2
	},
	{
		title: 'Photography',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon3
	},
	{
		title: 'Managment',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon4
	},
	{
		title: 'Web Development',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon5
	}
];

const brands = [
	brand,
	brand1,
	brand2,
	brand3,
	brand4,
	brand,
	brand1,
	brand2,
	brand3,
	brand4
];

const About = () => {
	const [abouts, setAbouts] = useState([]);
	console.log(abouts);

	useEffect(() => {
		const query = `*[_type == 'abouts']`;

		client.fetch(query).then(data => {
			console.log('hello');
			setAbouts(data);
		});
	}, []);

	return (
		<StyledSection component='section'>
			<StyledSectionContainer disableGutters>
				<Box py={6}>
					<Typography
						variant='h2'
						component='h2'
						fontWeight={800}
						sx={{
							display: 'inline-flex',
							alignItems: 'center',
							marginTop: {
								xs: 5,
								md: 0
							}
						}}>
						About Me
						<Box
							component='span'
							sx={{
								background:
									'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
								height: 2,
								width: '11rem',
								marginLeft: '1.5rem',
								display: {
									xs: 'none',
									sm: 'inline'
								}
							}}></Box>
					</Typography>
					<Grid
						container
						pt={5}
						sx={{
							direction: {
								xs: 'column',
								sm: 'row'
							}
						}}>
						<Grid
							item
							xs={12}
							sm={3.5}
							sx={{
								mb: {
									xs: 2
								}
							}}>
							<Box
								component='img'
								src={about}
								alt='about'
								sx={{
									maxWidth: '100%',
									objectFit: 'cover',
									display: 'block',
									borderRadius: 8,
									width: {
										xs: '100%',
										sm: 330
									},
									height: {
										xs: '100%',
										sm: 400
									}
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={8} ml='auto'>
							<Box mr={6}>
								<Typography variant='h4' componenet='h3' mb={1.5}>
									Who am i?
								</Typography>
								<Typography variant='body1' componenet='p' color='gray'>
									I'm Creative Director and UI/UX Designer from Sydney,
									Australia, working in web development and print media. I enjoy
									turning complex problems into simple, beautiful and intuitive
									designs.
								</Typography>
								<Typography
									variant='body1'
									componenet='p'
									color='gray'
									mt={1.5}>
									My aim is to bring across your message and identity in the
									most creative way. I created web design for many famous brand
									companies.
								</Typography>
								<Typography variant='h4' componenet='h3' my={3}>
									Personal Info
								</Typography>
							</Box>
							<Grid container spacing={2}>
								{abouts.map(({ title, description, imgUrl }, i) => (
									<Grid key={i} item xs={12} sm={6}>
										<Stack direction='row'>
											<Avatar
												variant='rounded'
												src={urlFor(imgUrl)}
												alt=''
												sx={{ marginRight: 1 }}
											/>
											<Box>
												<Typography variant='body2' component='h4' color='gray'>
													{title}
												</Typography>
												<Typography>{description}</Typography>
											</Box>
										</Stack>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Box>
				<Box pb={6}>
					<Typography variant='h3' componenet='h3' pb={3}>
						What I do!
					</Typography>
					<Grid container spacing={4}>
						{skillsList.map(({ title, subtitle, icon }, i) => (
							<Grid item key={i} xs={12} sm={6} lg={4}>
								<Stack
									direction='row'
									gap={2}
									sx={{
										backgroundColor: '#FBF4FE',
										padding: 3,
										borderRadius: 2
									}}>
									<Box>
										<img src={icon} alt='' />
									</Box>
									<Box>
										<Typography variant='h5' component='h4' fontWeight='800'>
											{title}
										</Typography>
										<Typography component='p'>{subtitle}</Typography>
									</Box>
								</Stack>
							</Grid>
						))}
					</Grid>
				</Box>
				<Box
					textAlign='center'
					p={5}
					sx={{ bgcolor: 'lightgray', borderRadius: 3 }}>
					<Typography variant='h5' component='h3' fontWeight='800'>
						Clients
					</Typography>
					<Marquee
						pauseOnHover={true}
						gradient={false}
						style={{ paddingTop: '2rem' }}>
						<Stack direction='row'>
							{brands.map((brand, i) => (
								<Box key={i} p={4}>
									<img
										src={brand}
										alt=''
										style={{
											maxWidth: '100%',
											display: 'block',
											objectFit: 'cover'
										}}
									/>
								</Box>
							))}
						</Stack>
					</Marquee>
				</Box>
				<Footer />
			</StyledSectionContainer>
		</StyledSection>
	);
};

export default About;
