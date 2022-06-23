import classes from "./PremiumPlan.module.css";

const PremiumPlan = () => {
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
            <h4>$25</h4>
          </div>
          <button type="submit">BUY NOW</button>
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
            <h4>$50</h4>
          </div>
          <button type="submit">BUY NOW</button>
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
            <h4>$150</h4>
          </div>
          <button type="submit">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
