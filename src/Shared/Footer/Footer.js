import React from 'react';

const Footer = () => {
	return (
    <footer className="footer p-10 bg-neutral text-neutral-content mx-auto max-w-7xl">
      <ol>
        <span className="footer-title">Services</span>
        <li to="/" className="link link-hover">Branding</li>
        <li to="/" className="link link-hover">Design</li>
        <li to="/" className="link link-hover">Marketing</li>
        <li to="/" className="link link-hover">Advertisement</li>
      </ol>
      <ol>
        <span className="footer-title">Company</span>
        <li to="/" className="link link-hover">About us</li>
        <li to="/" className="link link-hover">Contact</li>
        <li to="/" className="link link-hover">Jobs</li>
        <li to="/" className="link link-hover">Press kit</li>
      </ol>
      <ol>
        <span className="footer-title">Legal</span>
        <li to="/" className="link link-hover">Terms of use</li>
        <li to="/" className="link link-hover">Privacy policy</li>
        <li to="/" className="link link-hover">Cookie policy</li>
      </ol>
    </footer>
  );
};

export default Footer;