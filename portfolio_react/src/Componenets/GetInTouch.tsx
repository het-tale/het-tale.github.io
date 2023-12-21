import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import Contact from './Contact';

const GetInTouch = () => {
    return (
        <Box id="contact" bg={'#a435f0'} color={'#fff'}>
            <Flex flexDirection={'column'} alignItems={'center'}>
                <Avatar
                    src={'/assets/heb.png'}
                    size={'lg'}
                    className="mt-6"
                ></Avatar>
                <Text className="text-center mt-6 font-ruby text-2xl">
                    Find me online:
                </Text>
                <Flex justifyContent={'space-around'} className="mt-3">
                    <Contact />
                </Flex>
                <Text className="tex-base mt-3">
                    Made with Love By me &copy; het-tale
                </Text>
            </Flex>
        </Box>
    );
};
export default GetInTouch;
