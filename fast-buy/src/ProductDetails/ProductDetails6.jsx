import React from 'react'
import {Text,Image,Box,Heading, Button,Flex} from "@chakra-ui/react"
import { IconButton,Highlight } from '@chakra-ui/react'
import {StarIcon, TimeIcon} from "@chakra-ui/icons"
import TextTruncate from 'react-text-truncate';
import {AiOutlineShoppingCart} from "react-icons/ai"
import Timer1 from "../Timer/Timer"
import { useContext,useState } from 'react'
import {Link as RouterLink} from "react-router-dom"

const ProductDetails6 = ({id,image,title,modelNumber,reviews,discount,price}) => {
 

 const handleClick=()=>{

 }


  
 
  return (
   
     
   <RouterLink to={`/ProductSelect/EditData/${id}`}><Box boxShadow={"2xl"}  w="100%" h={{base:"410px" ,lg:"650px"}} mt="20px" 
       borderRadius="8px"  onClick={handleClick}
      >
       
           <Image src={image} w="400px" m="auto" />
           {/* <Text fontSize={{base:"10px",lg:"20px"}} bg="red" textOverflow="ellipsis" overflow="hidden" >{title}</Text> */}
           <TextTruncate
    line={2}
    fontSize={{base:"10px",lg:"20px"}}
    element="span"
    truncateText="…"
    text={title}
    textTruncateChild={<a href="#">Read on</a>}
/>
           <Text fontSize={{base:"10px",lg:"20px"}}>{modelNumber}</Text>
           <Text color="blue"><StarIcon color="#ffe000"/>
    <StarIcon color="#ffe000"/>
    <StarIcon color="#ffe000"/> 
    <StarIcon color="#ffe000"/></Text>
           
           <Text fontSize={{base:"10px",lg:"20px"}}>reviews({reviews})</Text>
           <Text fontSize={{base:"10px",lg:"20px"}} color="rgb(187,6,40)" fontWeight="bold">Save ${discount}</Text>
           <Text fontSize={{base:"10px",lg:"20px"}} color="rgb(187,6,40)" fontWeight="bold">${price}</Text>
           <Text fontSize="0.8rem"><TimeIcon />  Deal ends in    <Timer1/></Text>
           <Text fontSize={{base:"8px",lg:"17px"}} fontWeight="bold" >Free 6-month security software & <Highlight query='1 more $29.99 value '  styles={{color:"blue",fontWeight:"bold"}}>1 more $29.99 value</Highlight></Text>
          
         <Flex justifyContent="center">
         <IconButton
 borderRightRadius="none"
 colorScheme='yellow'
 fontSize='20px'
 icon={<AiOutlineShoppingCart />}
/>

         </Flex>
          
      </Box>
      </RouterLink>   
  )
  }

export default ProductDetails6;
