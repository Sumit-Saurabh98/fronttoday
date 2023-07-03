import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Input,
  Button,
  useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

function HomePage(props) {
    const navigate = useNavigate()
    const toast = useToast()
  const [signup, setSignup] = useState({
    email: '',
    password: '',
    conformPassword: ''
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://thankful-wasp-waistcoat.cyclic.app/signup', {
        email: signup.email,
        password: signup.password,
        conformPassword: signup.conformPassword
      });
      if(response.data.msg==="login success"){
        <Navigate to="/dashboard" />
      }else{
        <Navigate to="/" />
      }
      toast({
        title: response.data.msg,
        duration: 9000,
        isClosable: true,
      })

      console.log(response.data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://thankful-wasp-waistcoat.cyclic.app/login', {
        email: login.email,
        password: login.password
      });
      toast({
        title: response.data.msg,
        duration: 9000,
        isClosable: true,
      })

      console.log(response.data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  return (
    <div>
      <Box
        style={{
          maxWidth: '600px',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Tabs
          style={{ width: '50%', height: '90%', marginTop: '10px' }}
          isFitted
          variant="enclosed"
        >
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Input
                type="email"
                name="email"
                placeholder="email"
                value={login.email}
                onChange={(e) =>
                  setLogin({ ...login, email: e.target.value })
                }
              />
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
              <Button colorScheme="teal" variant="solid" onClick={handleLogin}>
                Login
              </Button>
            </TabPanel>
            <TabPanel>
              <Input
                type="email"
                name="email"
                placeholder="email"
                value={signup.email}
                onChange={(e) =>
                  setSignup({ ...signup, email: e.target.value })
                }
              />
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={signup.password}
                onChange={(e) =>
                  setSignup({ ...signup, password: e.target.value })
                }
              />
              <Input
                type="password"
                name="password"
                placeholder="conformPassword"
                value={signup.conformPassword}
                onChange={(e) =>
                  setSignup({ ...signup, conformPassword: e.target.value })
                }
              />
              <Button
                onClick={handleSignup}
                colorScheme="teal"
                variant="solid"
              >
                Signup
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default HomePage;
