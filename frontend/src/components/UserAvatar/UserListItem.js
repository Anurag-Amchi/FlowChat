import React from 'react'
// import { ChatState } from '../../Context/ChatProvider'
import { Avatar, Box, Text } from '@chakra-ui/react'

const UserListItem = ({ user, handleFunction }) => {
    return (
        <Box
            onClick={handleFunction}
            cursor="pointer"
            bg="#E8E8E8"
            _hover={{ background: "#d49a25ff", color: "white" }}
            width="100%"
            padding="15px"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            mb={2}
            color="black"
            px={3}
            py={2}
        >
            <Avatar
                mr={2}
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
            />
            <Box>
                <Text>{user.name}</Text>
                <Text fontSize="xs">
                    <b>Email: </b>
                    {user.email}
                </Text>
            </Box>
        </Box>
    )

}

export default UserListItem