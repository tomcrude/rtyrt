import {Box,Link,Typography}from '@mui/material'
import Image from 'next/image'

export function Links(props) {
  return (
     <Box mt={3} textAlign="center" sx={{display: {xs: "none", md:"block"}}}><Link  color="rgb(133,115,187)" fontWeight="700" sx={{textDecoration: "none",fontSize: {xs: "16.5px",md:"24px"}}} href={props.link}>{props.name}</Link></Box>
  )
}

export function Line(props) {
  return (
    <Box id={props.id} position="absolute"  borderTop="rgb(48,35,85) 3px solid" margin={6} mt={0} width="50%"></Box>
  )
}

export function Project(props) {
  return (
    <Box id={props.id} position="absolute"  borderTop="rgb(48,35,85) 3px solid" margin={6} mt={0} width="50%"></Box>
  )
}


export function ContactItem(props) {
  return (
    <Box mb={4} display="inline-block"><Typography marginLeft={1.4} display="inline-block" component="p" sx={{fontSize: {xs:"14px",md: "19px"}}} fontWeight="600">{props.text}<Box display="inline-block"><Link href={props.url} color="rgb(1,247,153)" sx={{"&:hover":{color:"rgb(232,117,246)",cursor: "pointer"}}} className='link'  marginLeft={1}>{props.link}</Link></Box></Typography></Box>
  )
}

export function SkillItem(props){
  return (
    <Box marginLeft={2} marginBottom={2}  display="inline-block" bgcolor={props.color} borderRadius="2%"><Box margin={0.6} marginX={1.5}><Box display="inline-block"  sx={{transform: "translateY(4px)",width:{xs:"18px",md: "25px"}}}><Image layout='responsive' src={require(`../public/logos/${props.text}.png`)} alt={props.text}/></Box><Typography sx={{transform: "translateY(-1px)",color: "rgb(255,255,255)",fontSize:{md:"15px",xs:"13px"}}} marginLeft={1.5}  display="inline-block" component="p" fontWeight="700" >{props.text}</Typography></Box></Box>
  )
}

export function ProjectItem(props){
  return (
    <Box  mb={4} display="inline-block" marginRight="2%" onClick={()=>{window.location.href = props.link}} bgcolor="rgb(51,37,90)" sx={{height: {xs:400, md:440},width:{xs:"255px",md:"310px",lg:"355px"},"&:hover":{cursor:"pointer", transform: "scale(1.025)"}}} borderRadius="1%" border="1px solid rgb(255,255,255)">
    <Box width="100%" height="40%" ><Image layout='responsive' src={require(`../public/images-projects/${props.image}.png`)} alt={props.image}/></Box>
      <Box margin={2}>
    <Typography fontSize="28px" color="rgb(232,117,246)" component="p" sx={{marginTop:{lg:"25px",md:"-2px",xs:"-40px"}}}>{props.title}</Typography>
    <Box height="50%"><Typography sx={{fontSize: {xs:"14px",md: "16px"}}} component="p" fontWeight="600">{props.des}</Typography></Box>

    <Box className={props.name === "brain" ? "" : "disabled"}>
      <ProjectLogo skill="html2"/><ProjectLogo skill="css2"/><ProjectLogo skill="Javascript"/><ProjectLogo skill="bootstrap2"/>
    </Box>

    <Box className={props.name === "tom-crude" ? "" : "disabled"}>
      <ProjectLogo skill="Next.JS"/><ProjectLogo skill="bootstrap2"/>
    </Box>

    <Box className={props.name === "koala" ? "" : "disabled"}>
    <ProjectLogo skill="React"/><ProjectLogo skill="material ui2"/><ProjectLogo skill="Typescript"/><ProjectLogo skill="Heroku"/><ProjectLogo skill="next-js2"/><ProjectLogo skill="Express"/><ProjectLogo skill="MySQL"/>
    </Box>

    </Box>
  </Box>
  )
}

export function ProjectLogo(props){
  return (
    <Box mr={2} display="inline-block" mt={2} sx={{width:{xs: "25px",lg: "30px"}}}>
      <Image layout='responsive' src={require(`../public/logos/${props.skill}.png`)} alt={props.skill}/>
      </Box>
  )
}


