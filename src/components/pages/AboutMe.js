import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  CgSignal,
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaGithub,
  FaLinkedin,
  FaSpotify,
  FaSteam,
  FaTwitter,
  SiHackerrank,
  SiLeetcode,
} from "react-icons/all";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className='main-home'>
      <Navbar />
      <div className='about-me-section'>
        <h1 className='about-me-section-header'>
          About me: Mustafa Tevfik Kadan
        </h1>
        <hr />
        <p className='about-paragraph'>
          I am Mustafa, I was born in 2000. After going through all the
          unnecessary details, I went to high school at Gonen Science High
          School by staying in a dormitory.I graduated from high school with an
          average of 3.52/4.
        </p>
        <p className='about-paragraph'>
          Then, in 2018, I started the computer engineering department at
          Suleyman Demirel University.
        </p>
        <p className='about-paragraph'>
          In my spare time, I usually watch TV series or go swimming.
        </p>
        <p className='about-paragraph'>
          Coming to the reason why I am trying to specialize in software
          engineering, it is a short way to contribute to the technologies
          reached by all communities in the world. I think it's one of the best
          things to do in this little world, which motivates me.
        </p>
        <p className='about-paragraph'>You can see my main profiles below;</p>
        <div className='about-profiles'>
          <p className='about-tags'>
            Social&nbsp; <FaArrowCircleDown />
          </p>
          <div className='about-social'>
            <a
              href='https://github.com/mtevfik41'
              target='_blank'
              rel='noreferrer'
              className='about-social-link'
            >
              <FaGithub />
              &nbsp;Github
            </a>
            <a
              href='https://www.linkedin.com/in/tevfikkadan/'
              target='_blank'
              rel='noreferrer'
              className='about-social-link'
            >
              <FaLinkedin />
              &nbsp;LinkedIn
            </a>
            <a
              href='https://twitter.com/mtevfik41'
              target='_blank'
              rel='noreferrer'
              className='about-social-link'
            >
              <FaTwitter />
              &nbsp;Twitter
            </a>
            <a
              href='https://steamcommunity.com/profiles/76561198274152093/'
              target='_blank'
              rel='noreferrer'
              className='about-social-link'
            >
              <FaSteam />
              &nbsp;Steam
            </a>
            <a
              href='https://open.spotify.com/user/eeo4uni1zcvrjfkz4vkjskuaw?si=14f7ab112c184abc'
              target='_blank'
              rel='noreferrer'
              className='about-social-link'
            >
              <FaSpotify />
              &nbsp;Spotify
            </a>
          </div>
          <p className='about-tags'>
            Problem Solving - Nowadays I'm using Leetcode and Codesignal &nbsp;{" "}
            <FaArrowCircleDown />
          </p>
          <div className='about-problem-solving'>
            <a
              href='https://www.hackerrank.com/mtevfik41'
              target='_blank'
              rel='noreferrer'
              className='about-social-link'
            >
              <SiHackerrank />
              &nbsp;Hackerrank
            </a>
            <a
              href='https://leetcode.com/mtevfik41/'
              target='_blank'
              rel='noreferrer'
              className='about-social-link'
            >
              <SiLeetcode />
              &nbsp;LeetCode
            </a>
            <a
              href='https://app.codesignal.com/profile/mtevfik'
              target='_blank'
              rel='noreferrer'
              className='about-social-link'
            >
              <CgSignal />
              &nbsp;CodeSignal
            </a>
          </div>
        </div>
      </div>
      <Link
        style={{ marginTop: "35px" }}
        className='cv'
        target='_blank'
        to='/files/Mustafa_Tevfik_Kadan_CV.pdf'
        download='cv(Mustafa Tevfik Kadan)'
      >
        Download CV as PDF{" "}
        <span className='cv-span'>Last uploaded 13 October 2021</span>
      </Link>
      <Footer />
      <a href='#navbar' className='stable'>
        <FaArrowCircleUp />
      </a>
    </div>
  );
};

export default AboutMe;
