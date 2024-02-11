/* eslint-disable */

import {Input} from '@chakra-ui/react';

export const TextInput = ({changeFn, ...props})=>(
    <Input variant="flushed" backgroundColor="gray.200" onChange={changeFn} {...props}/>
);