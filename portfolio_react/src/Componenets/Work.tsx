import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProjectDesc from './ProjectDesc';

const Work = () => {
    return (
        <Box id="work">
            <h2 className="text-2xl font-bold text-center sm:text-center mt-16 mb-6">
                My projects
            </h2>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem className="ml-6 mb-6">
                    <ProjectDesc
                        title={'Het-tale'}
                        description={
                            'My personal website where I showcase my work'
                        }
                        link={'https://het-tale.github.io/'}
                        img={'/assets/heb.png'}
                        name="het-tale.github.io"
                    />
                </GridItem>
                <GridItem className="ml-6 mb-6">
                    <ProjectDesc
                        title={'ft_transcendence'}
                        description={
                            'A web application that allows you to play pong with your friends'
                        }
                        link={'https://github.com/het-tale/ft_transcendence/'}
                        img={'/assets/pongLogo.png'}
                        name="github.com/het-tale/ft_transcendence"
                    />
                </GridItem>
                <GridItem className="ml-6 mb-6">
                    <ProjectDesc
                        title={'matcha'}
                        description={
                            'a dating website that allows you to meet new people'
                        }
                        link={'#'}
                        img={'/assets/love.png'}
                        name={'work in progress'}
                    />
                </GridItem>
                <GridItem className="ml-6 mb-6">
                    <ProjectDesc
                        title={'Facebook-Scraper'}
                        description={
                            'A web application that allows you to get data of facebook users who liked a post and send them a message'
                        }
                        link={'https://github.com/het-tale/Facebook-scraper'}
                        img={'/assets/fb.png'}
                        name={'github.com/het-tale/Facebook-scraper'}
                    />
                </GridItem>
            </Grid>
        </Box>
    );
};
export default Work;
