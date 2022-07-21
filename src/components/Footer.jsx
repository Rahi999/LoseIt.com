import React from "react";
import "./Footer.module.css";
import getTips from "./getTips";
import { Link } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";
import Routing from "./Routes";

const Footer = () => {
  const click = () => {
    window.location.href = "./getTips";
  };
  return (
    <div
      style={{
        width: "90%",
        margin: "auto"
      }}
    >
      <div
        id="steps"
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "20px"
        }}
      >
        <h1>Weight Loss Made Easy</h1>
        <div
          style={{
            display: "flex",
            marginTop: "30px"
          }}
          className="flex"
        >
          <div
            className="flexElement"
            style={{
              color: "black"
            }}
          >
            <h3>Set Your Goals</h3>
            <img
              width="200px"
              src="https://assets.loseit.com/website/home/Home_SetGoal.svg"
              alt="flag"
            />
            <p>
              Tell us what you want to acheive and receive personalized goals.
            </p>
          </div>
          <div className="flexElement">
            <h3>Track Your Food</h3>
            <img
              width="200px"
              src="https://assets.loseit.com/website/home/Home_TrackFoods.svg"
              alt="food"
            />
            <p>
              Learn about the foods you’re eating and keep your calories within
              your daily budget.
            </p>
          </div>
          <div class="flexElement">
            <h3>Lose Weight</h3>
            <img
              width="200px"
              src="https://assets.loseit.com/website/home/Home_LoseWeight.svg"
              alt="ribbon"
            />
            <p>
              Reach your goals and continue to set new ones for a happier,
              healthier you!
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          marginTop: "20px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f1f1f1",
          gap: "20px"
        }}
      >
        <div class="featurePost">
          <img
            width="200px"
            src="https://assets.loseit.com/website/home/Features_WaterTracking.svg"
            alt="water glass"
          />
          <h3>Water Tracking</h3>
          <p>
            Track your water intake to make sure you're getting the recommended
            amount daily.
          </p>
        </div>
        <div class="featurePost second">
          <img
            width="200px"
            src="https://assets.loseit.com/website/home/Features_Macros.svg"
            alt="pie chart"
          />
          <h3>Macro Tracking</h3>
          <p>
            Set personalized macronutrient goals to ensure you’re getting enough
            protein, carbs, and more.
          </p>
        </div>
        <div class="featurePost">
          <img
            width="200px"
            src="https://assets.loseit.com/website/home/Features_DeviceIntegration.svg"
            alt="wristwatch"
          />
          <h3>Device Integration</h3>
          <p>Connect Apple Health and Google Fit for easy exercise tracking.</p>
        </div>
        <div class="featurePost second">
          <img
            width="200px"
            src="https://assets.loseit.com/website/home/Features_PatternsReports.svg"
            alt="report"
          />
          <h3>Patterns & Reports</h3>
          <p>
            Get reports on your behaviors and progress straight to your inbox.
          </p>
        </div>
      </div>

      <section id="numbers">
        <div id="ticker">
          <img
            width="400px"
            style={{
              margin: "auto"
            }}
            id="partyHat"
            src="https://assets.loseit.com/website/home/Ticker_Celebratory.svg"
            alt=""
          />
          <h1 marginTop="20px" id="poundsLost">
            121,505,296
          </h1>
          <h2>POUNDS LOST</h2>
          <hr margin="auto" />
        </div>
        <h3>AS SEEN ON</h3>
        <div
          style={{
            display: "flex"
          }}
          id="seenOnLogos"
        >
          <img
            width="350px"
            src="https://assets.loseit.com/website/home/Feature_TodayShow.png"
            alt="today show"
          />
          <img
            width="150px"
            style={{
              marginLeft: "20px"
            }}
            src="https://assets.loseit.com/website/home/Feature_People.png"
            alt="People magazine"
          />
          <img
            width="150px"
            style={{
              marginLeft: "20px"
            }}
            src="https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png"
            alt="good morning america"
          />
          <img
            width="150px"
            style={{
              marginLeft: "20px"
            }}
            src="https://assets.loseit.com/website/home/Feature_WomensHealth.png"
            alt="women's health"
          />
        </div>
      </section>

      <div
        id="advice"
        style={{
          backgroundColor: "#183962",
          padding: "10px",
          marginTop: "20px",
          borderRadius: "8px"
        }}
      >
        <h2
          style={{
            color: "white"
          }}
        >
          Advice from Successful Members
        </h2>
        <div
          class="flex"
          style={{
            display: "flex"
          }}
        >
          <div
            class="flexElement"
            style={{
              marginLeft: "10px",
              width: "40%",
              margin: "auto"
            }}
          >
            <img
              width="200px"
              src="https://assets.loseit.com/website/home/Advice_Carla.png"
              alt="Carla"
            />
            <p
              style={{
                color: "#ffc16b"
              }}
            >
              Track every single bite you take. You need to know how you’re
              doing before dinner. If you don’t, things can get away from you
              fast."
            </p>
            <span
              style={{
                color: "white"
              }}
            >
              - Carla, 65 lbs lost without giving up pizza.
            </span>
          </div>
          <div
            class="flexElement"
            style={{
              marginLeft: "10px",
              width: "40%",
              margin: "auto"
            }}
          >
            <img
              width="200px"
              src="https://assets.loseit.com/website/home/Advice_Alex.png"
              alt="alex"
            />
            <p
              style={{
                color: "#ffc16b"
              }}
            >
              Everyday is a battle, and you have to make the choice each morning
              to fight for your health and wellness"
            </p>
            <span
              style={{
                color: "white"
              }}
            >
              - Alex, lost 85 lbs for his wedding.
            </span>
          </div>
        </div>
        <Box width="30%" m="auto">
          <Link to="/story">
            <Button bgColor="#ff9400" color="white">
              Share Your Story
            </Button>
          </Link>
        </Box>
      </div>
      <Box width="30%" m="auto">
        <Link to="/gettips">
          <Button bgColor="#183962" color="white">
            Get Weight Loss Tips
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Footer;
