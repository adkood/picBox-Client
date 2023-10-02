import classes from "./PremiumPlan.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const PremiumPlan = () => {
  const router = useRouter();
  const toast = useToast();

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const authState = useSelector((state: any) => state.auth.isLogged);

  const onBuyItClickHandler1 = async () => {
    if (authState) {
      const session = await axios(
        `${backendUrl}/api/v1/payment/checkout-session-basic`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      router.push(session.data.session.url);
    } else {
      toast({
        title: "You are not logged in, Please Login first !!!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onBuyItClickHandler2 = async () => {
    if (authState) {
      const session = await axios(
        `${backendUrl}/api/v1/payment/checkout-session-pro`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      router.push(session.data.session.url);
    } else {
      toast({
        title: "You are not logged in, Please Login first !!!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onBuyItClickHandler3 = async () => {
    if (authState) {
      const session = await axios(
        `${backendUrl}/api/v1/payment/checkout-session-premium`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      router.push(session.data.session.url);
    } else {
      toast({
        title: "You are not logged in, Please Login first !!!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.pricingTable}>
        <div className={classes.item}>
          <div className={classes.heading}>
            <h3>BASIC</h3>
          </div>
          <p>
            Really Helpfull if you are looking for few images to post somewhere
            or personal use.
          </p>
          <div className={classes.features}>
            <h4>
              <span className={classes.feature}>Full Support</span> :{" "}
              <span className={classes.value}>Yes</span>
            </h4>
            <h4>
              <span className={classes.feature}>Image Count</span> :{" "}
              <span className={classes.value}>5 (Five)</span>
            </h4>
          </div>
          <div className={classes.price}>
            <h4>Rs. 199.00</h4>
          </div>
          <div className={classes.buttonCont}>
            <Button
              onClick={onBuyItClickHandler1}
              width="120px"
              color="blue.500"
              height="40%"
              fontSize="1.2rem"
              bgColor={"blue.100"}
              _hover={{ color: "white" }}
            >
              BUY NOW
            </Button>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.ribbon}>Best Value</div>
          <div className={classes.heading}>
            <h3>PRO</h3>
          </div>
          <p>
            Really Helpfull if you are looking for images for your project or as
            a collectables.
          </p>
          <div className={classes.features}>
            <h4>
              <span className={classes.feature}>Full Support</span> :{" "}
              <span className={classes.value}>Yes</span>
            </h4>
            <h4>
              <span className={classes.feature}>Image Count</span> :{" "}
              <span className={classes.value}>15 (Fifteen)</span>
            </h4>
          </div>
          <div className={classes.price}>
            <h4>Rs. 399.00</h4>
          </div>
          <div className={classes.buttonCont}>
            <Button
              onClick={onBuyItClickHandler2}
              width="120px"
              color="blue.500"
              height="40%"
              fontSize="1.2rem"
              bgColor={"blue.100"}
              _hover={{ color: "white" }}
            >
              BUY NOW
            </Button>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.heading}>
            <h3>PREMIUM</h3>
          </div>
          <p>
            Really Helpfull if you are looking for images for some big project
            and you need the images of your choices without any hassle.
          </p>
          <div className={classes.features}>
            <h4>
              <span className={classes.feature}>Full Support</span> :{" "}
              <span className={classes.value}>Yes</span>
            </h4>
            <h4>
              <span className={classes.feature}>Image Count</span> :{" "}
              <span className={classes.value}>30 (Thirty)</span>
            </h4>
          </div>
          <div className={classes.price}>
            <h4>Rs. 1099.00</h4>
          </div>
          <div className={classes.buttonCont}>
            <Button
              onClick={onBuyItClickHandler3}
              width="120px"
              color="blue.500"
              height="40%"
              fontSize="1.2rem"
              bgColor={"blue.100"}
              _hover={{ color: "white" }}
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
