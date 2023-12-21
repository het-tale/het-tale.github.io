import { HStack, IconButton, Tooltip } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const socials = [
        { icon: <FaGithub />, link: 'https://github.com/het-tale/' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/hasnaa-et-taleby-1a0b31189/' },
        { icon: <EmailIcon />, link: 'mailto:ettalebyhasnaa99@gmail.com' }
    ];
    return (
        <HStack spacing={4}>
            {socials.map((socialMedia, index) => (
                <Tooltip
                    key={index}
                    label={socialMedia.link}
                    hasArrow
                    placement="top"
                >
                    <IconButton
                        as="a"
                        href={socialMedia.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${socialMedia.link}`}
                        icon={socialMedia.icon}
                        rounded="full"
                        border={'1px solid rgba(182, 187, 196, 0.4)'}
                        bg="#a435f0"
                        color="white"
                        _hover={{ bg: 'teal.500' }}
                        size="md"
                    />
                </Tooltip>
            ))}
        </HStack>
    );
};
export default Contact;
