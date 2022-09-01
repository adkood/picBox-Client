import classes from "./PremiumPlan.module.css";
import { useRouter } from "next/router";
import axios from "axios";

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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={classes.features}>
            <h4>
              <span className={classes.feature}>Full Support</span> :{" "}
              <span className={classes.value}>No</span>
            </h4>
            <h4>
              <span className={classes.feature}>Duration</span> :{" "}
              <span className={classes.value}>30 Days</span>
            </h4>
            <h4>
              <span className={classes.feature}>Storage</span> :{" "}
              <span className={classes.value}>10GB</span>
            </h4>
          </div>
          <div className={classes.price}>
            <h4>Rs. 199.00</h4>
          </div>
          <div className={classes.buttonCont}>
          <button onClick={onBuyItClickHandler1} className={classes.buttonCont} type="submit">BUY NOW</button>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.ribbon}>Best Value</div>
          <div className={classes.heading}>
            <h3>PRO</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={classes.features}>
            <h4>
              <span className={classes.feature}>Full Support</span> :{" "}
              <span className={classes.value}>Yes</span>
            </h4>
            <h4>
              <span className={classes.feature}>Duration</span> :{" "}
              <span className={classes.value}>60 Days</span>
            </h4>
            <h4>
              <span className={classes.feature}>Storage</span> :{" "}
              <span className={classes.value}>50GB</span>
            </h4>
          </div>
          <div className={classes.price}>
            <h4>Rs. 399.00</h4>
          </div>
          <div className={classes.buttonCont}>
          <button onClick={onBuyItClickHandler2} className={classes.buttonCont} type="submit">BUY NOW</button>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.heading}>
            <h3>PREMIUM</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={classes.features}>
            <h4>
              <span className={classes.feature}>Full Support</span> :{" "}
              <span className={classes.value}>Yes</span>
            </h4>
            <h4>
              <span className={classes.feature}>Duration</span> :{" "}
              <span className={classes.value}>120 Days</span>
            </h4>
            <h4>
              <span className={classes.feature}>Storage</span> :{" "}
              <span className={classes.value}>150GB</span>
            </h4>
          </div>
          <div className={classes.price}>
            <h4>Rs. 1099.00</h4>
          </div>
          <div className={classes.buttonCont}>
          <button onClick={onBuyItClickHandler3} className={classes.buttonCont} type="submit">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
