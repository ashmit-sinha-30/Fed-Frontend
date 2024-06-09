import React, { useState } from 'react';
import styles from "./Styles/Sidebar.module.scss";
import { MdLogout } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { SiReacthookform } from "react-icons/si";

const Sidebar = ({ activepage, handleChange }) => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <img
            src="https://uploads-ssl.webflow.com/66096a30ae498a9206aee6a0/66096ad2342643f874b4aad4_photo_2024-03-31_19-22-54.jpg"
            alt="Profile"
            className={styles.profilePhoto}
          />
          <div className={styles.profileInfo}>
            <p className={styles.name}>
              John Doe
            </p>
            <p className={styles.role}>
              Admin
            </p>
          </div>
        </div>
        <div className={styles.menu}>
          <div
            onClick={() => {
              handleChange("Event");
            }}
            style={{ color: activepage === "Event" ? "#FF8A00" : "white" }}
          >
            {" "}
            <SlCalender size={17} />
            <span> Event </span>
          </div>
          <div
            onClick={() => {
              handleChange("Form");
            }}
            style={{ color: activepage === "Form" ? "#FF8A00" : "white" }}
          >
            {" "}
            <SiReacthookform size={17} /> Form
          </div>
          <div
            onClick={() => {
              handleChange("Members");
            }}
            style={{ color: activepage === "Members" ? "#FF8A00" : "white" }}
          >
            {" "}
            <TbUserEdit size={17} /> Members
          </div>
          <div
            onClick={() => {
              handleChange("Logout");
            }}
            style={{ color: activepage === "Logout" ? "#FF8A00" : "white" }}
          >
            {" "}
            <MdLogout size={17} /> Logout
          </div>
        </div>
        <div className={styles.divider} />
      </div>
    </>
  );
};

export default Sidebar;
