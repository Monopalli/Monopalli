import React from 'react';
import {Box, Button} from "@mui/material";
import { styled } from '@mui/system';

const Hero = () => {
    return (
        <StyledBox>
            <DesignContainer>
                <DesignBox sx={{flex: 1, backgroundColor: '#1A202C', border: '1px solid #1A202C', height: '100%'}}>
                    <Button sx={{ color: 'white', borderColor: 'white'}} variant="outlined">Create Room</Button>
                </DesignBox>
                <DesignBox sx={{flex: 1, height: '100%', border: '1px solid #1A202C'}}>
                    <Button color="secondary" variant="outlined">Join Room</Button>
                </DesignBox>
            </DesignContainer>
        </StyledBox>
    )
}

const DesignContainer = styled(Box)`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  ${props => props.theme.breakpoints.up("lg")} {
    width: 70%;
  }
  ${props => props.theme.breakpoints.down("md")} {
    width: 80%;
    height: 70%;
  }
  ${props => props.theme.breakpoints.down("sm")} {
    width: 100%;
    height: 100%;
  }
`

const DesignBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledBox = styled(Box)`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
`

export default Hero;