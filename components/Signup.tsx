import React, { useState } from "react";
import styles from "../components/Signup.module.css";

const CreateAccount: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"Buyer" | "Seller">("Buyer");

  const toggleRole = (role: "Buyer" | "Seller") => {
    setActiveRole(role);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img
          src="/Assets/signIn/istockphoto-1296363649-612x612.jpg"
          alt="Child drinking milk"
          className={styles.image}
        />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.btn} ${activeRole === "Buyer" ? styles.active : ""}`}
            onClick={() => toggleRole("Buyer")}
          >
            Buyer
          </button>
          <button
            className={`${styles.btn} ${activeRole === "Seller" ? styles.active : ""}`}
            onClick={() => toggleRole("Seller")}
          >
            Seller
          </button>
        </div>
        <h2>Create an Account</h2>
        <p>Enter your details below</p>
        <form>
          <input type="text" placeholder="Name" required className={styles.input} />
          <input
            type="email"
            placeholder="Email or Phone Number"
            required
            className={styles.input}
          />
          <input type="password" placeholder="Password" required className={styles.input} />
          <button type="submit" className={styles.submitBtn}>
            Create Account
          </button>
        </form>
        <p className={styles.loginLink}>
          Already have an account? <a href="/signIn">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
