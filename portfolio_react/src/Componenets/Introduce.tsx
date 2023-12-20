import Navbar from './Navbar';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Grid,
    GridItem,
    Heading,
    Img,
    Link,
    Portal,
    Text
} from '@chakra-ui/react';
import '../Css/style.css';
import ProjectDesc from './ProjectDesc';
const Introduce = () => {
    return (
        <>
            <Portal>
                <Navbar />
            </Portal>
            <Portal>
                <Flex className="mt-12" flexDirection={'column'} zIndex={-1}>
                    <h1 className="text-4xl font-bold text-center sm:text-center">
                        Frontend Developer
                    </h1>
                    <Text className="text-xl text-center mt-6 sm:text-center">
                        I Solve problems by writing clean and readable{' '}
                        <span style={{ color: '#a435f0' }}>code</span>
                    </Text>
                    <Img
                        src="/assets/melink.jpg"
                        w={'200px'}
                        h={'200px'}
                        borderRadius={'50%'}
                        alignSelf={'center'}
                        className="mt-12"
                    ></Img>
                </Flex>
            </Portal>
            <Portal>
                <Flex
                    bg={'#a435f0'}
                    color={'#fff'}
                    h={'400px'}
                    p={2}
                    marginTop={6}
                    justifyItems={'center'}
                    flexDirection={'column'}
                    id="about"
                    w={'100%'}
                    zIndex={-1}
                >
                    <h2 className="text-2xl font-bold text-center sm:text-center mt-6 mb-6">
                        Hey There{' '}
                        <Box
                            as="span"
                            role="img"
                            aria-label="Waving Hand"
                            fontSize="2xl"
                            animation="wave 2s infinite"
                        >
                            👋
                        </Box>{' '}
                        This is Hasnaa. Nice to meet you!
                    </h2>
                    <Text
                        className="text-center text-lg font-ruby w-3/6"
                        alignSelf={'center'}
                    >
                        A passionate Frontend Developer from Morocco, my main
                        job is to deliver quality work and make it easy for the
                        user to serf the web by providing good user interfaces.
                        I'm always looking to learn new technologies and build
                        innovative projects. I'm looking for opportunities to
                        collaborate with like-minded developers and create
                        meaningful online experiences.
                    </Text>
                </Flex>
                <Card
                    align="center"
                    marginTop={'-5rem'}
                    zIndex={3}
                    w={'40rem'}
                    alignSelf={'center'}
                    marginLeft={'auto'}
                    marginRight={'auto'}
                    className="font-ruby"
                >
                    <CardHeader>
                        <Heading size="md"> Frontend Developer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            I'm a Frontend Developer based in Morocco. I enjoy
                            building websites and web applications that are
                            fast, responsive, and accessible.
                        </Text>
                        <Text
                            color={'#a435f0'}
                            className="block text-center mt-6"
                        >
                            Technologies I use:
                        </Text>
                        <Text className="block text-center mt-4">
                            HTML, CSS, Tailwind, Typescript, React, Git, Docker
                        </Text>
                    </CardBody>
                </Card>
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
                                link={
                                    'https://github.com/het-tale/ft_transcendence/'
                                }
                                img={'/assets/heb.png'}
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
                                img={'/assets/heb.png'}
                                name={'work in progress'}
                            />
                        </GridItem>
                        <GridItem className="ml-6 mb-6">
                            <ProjectDesc
                                title={'Facebook-Scraper'}
                                description={
                                    'A web application that allows you to get data of facebook users who liked a post and send them a message'
                                }
                                link={
                                    'https://github.com/het-tale/Facebook-scraper'
                                }
                                img={'/assets/heb.png'}
                                name={'github.com/het-tale/Facebook-scraper'}
                            />
                        </GridItem>
                    </Grid>
                </Box>
                {/* <Box id="contact" bg={"#a435f0"}>
                    <h2 className="text-2xl font-bold text-center sm:text-center mt-16 mb-6">
                        Let's Talk
                    </h2>
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Avatar
                            src={'/assets/heb.png'}
                            size={'xl'}
                            className="mt-6"
                        ></Avatar>
                        <Text className="text-center mt-6">
                            If you have any questions or want to get in touch,
                            please feel free to <Link href="mailto:"></Link>
                        </Text>
                    </Flex>
                </Box> */}
            </Portal>
        </>
    );
};

export default Introduce;
