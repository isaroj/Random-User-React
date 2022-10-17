import Axios from "axios"
import {useEffect, useState, useRef} from 'react'
import { ToastContainer, toast } from "react-toastify";
import {Container, Row, Col, Spinner, Button} from 'reactstrap'

import {isEmpty} from 'lodash'

import UserCard from './UserCard'

const UserDashboard = () => {

    const [userDetails, setUserDetails] = useState({});
    const [startSpinner, setStartSpinner] = useState(false);

    const initialRender = useRef(true);

    const fetchUserDetails = async() => {
        try {
             setStartSpinner(true)
             const { data} = await Axios.get("https://randomuser.me/api/");
             const userData = data?.results[0];
             if (isEmpty(userData)) toast.warn("No userdata present :(");
             else toast.info('New user loaded :)')
             setUserDetails(userData) 
        } catch (err) {
            console.log(err)
            toast.error("something went wrong...");
        } finally {
          setStartSpinner(false);
        }
    }

useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
        fetchUserDetails();
    }
    return () => {
      setUserDetails({})
    }
}, []);

    return (
      <>
        <header className="text-center display-6 p-1 text-white">
          Random User Generator
        </header>
        <hr className="text-white" />
        <ToastContainer position="bottom-right" />

        <Container className="mt-5">
          <Row>
            {startSpinner ? (
              <div
                className="d-flex flex-column align-items-center"
                style={{ minHeight: "30vh" }}
              >
                <Spinner
                  color="warning"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <div className="text-white" style={{ fontSize: "1.5rem" }}>
                  Loading...
                </div>
              </div>
            ) : (
              <Col md={4} className="offset-md-4">
                {isEmpty(userDetails) ? (
                  <>
                    <h1 className="display-6 mt-5 text-warning">
                      No user data to show! Reload Again.
                    </h1>
                    <Button
                      block
                      color="primary"
                      className="mt-4"
                      onClick={fetchUserDetails}
                    >
                      Generate New User
                    </Button>
                  </>
                ) : (
                  <UserCard
                    details={userDetails}
                    generateNewUser={fetchUserDetails}
                  />
                )}
              </Col>
            )}
          </Row>
        </Container>
      </>
    );

}

export default UserDashboard