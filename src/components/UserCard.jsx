import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";

const UserCard = ({ details, generateNewUser }) => {
  return (
    <>
      <Card style={{backgroundColor: "#03203C", borderColor: "#fff"}}>
        <CardImg
          top
          src={details.picture?.large}
          alt="User image"
          className="rounded-circle img-thumbnail border-primary"
          style={{ width: "30%", margin: "1rem auto" }}
        />
        <CardBody>
          <CardTitle tag="h2" className="text-center text-primary">
            <span className="m-1">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </CardTitle>
          <CardSubtitle tag="h6" className="mt-3 text-center">
            <p className="text-white">
              <FaEnvelope />
              <span className="m-1">{details.email}</span>
            </p>
            <p className="text-white">
              <FaPhoneAlt />
              <span className="m-1">{details.phone}</span>
            </p>
            <p className="text-white">
              <FaMapMarkerAlt />
              <span className="m-1">
                {details.location?.city},
              </span>
              <span className="m-1">
                {details.location?.state}
              </span>
            </p>
            <p className="text-white">
              <FaBirthdayCake/>
              <span className="m-1">{details.dob?.age}</span>
            </p>
          </CardSubtitle>
        </CardBody>
      </Card>
      <Button block color="primary" className="mt-4" onClick={generateNewUser}>
        Generate New User
      </Button>
    </>
  );
};

export default UserCard;
