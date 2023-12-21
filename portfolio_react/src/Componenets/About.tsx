import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';

const About = () => {
    return (
        <>
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
                    A passionate Frontend Developer from Morocco, my main job is
                    to deliver quality work and make it easy for the user to
                    serf the web by providing good user interfaces. I'm always
                    looking to learn new technologies and build innovative
                    projects. I'm looking for opportunities to collaborate with
                    like-minded developers and create meaningful online
                    experiences.
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
                        building websites and web applications that are fast,
                        responsive, and accessible.
                    </Text>
                    <Text color={'#a435f0'} className="block text-center mt-6">
                        Technologies I use:
                    </Text>
                    <Text className="block text-center mt-4">
                        HTML, CSS, Tailwind, Typescript, React, Git, Docker
                    </Text>
                </CardBody>
            </Card>
        </>
    );
};
export default About;
