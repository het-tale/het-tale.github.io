import Navbar from './Navbar';
import { Avatar, Box, Flex, Img, Portal, Text } from '@chakra-ui/react';
import '../Css/style.css';
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
                        className="text-center text-base font-ruby w-96"
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
            </Portal>
        </>
    );
};

export default Introduce;
