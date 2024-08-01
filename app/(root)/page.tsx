import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Adrian",
    lastName: "JMN",
    email: "adrian@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {" "}
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and Manage your account and transaction effeciently"
          />{" "}
        </header>
        Recent Transactions
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.59 }, { currentBalance: 111.21 }]}
      />
    </section>
  );
};

export default Home;
