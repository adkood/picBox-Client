import classes from "./PremiumPlan.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { Button } from "@chakra-ui/react";

const PremiumPlan = () => {
  const router = useRouter();

  const onBuyItClickHandler1 = async () => {
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/payment/checkout-session-basic`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    router.push(session.data.session.url);
  };

  const onBuyItClickHandler2 = async () => {
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/payment/checkout-session-pro`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    router.push(session.data.session.url);
  };

  const onBuyItClickHandler3 = async () => {
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/payment/checkout-session-premium`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    router.push(session.data.session.url);
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
              width="150px"
              color="blue.500"
              height="50%"
              fontSize="1.5rem"
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
              width="150px"
              color="blue.500"
              height="50%"
              fontSize="1.5rem"
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
              width="150px"
              color="blue.500"
              height="50%"
              fontSize="1.5rem"
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
