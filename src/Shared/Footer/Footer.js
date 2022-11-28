import React from 'react';

const Footer = () => {
	return (
    <footer className="footer p-10 mt-24 bg-neutral text-neutral-content mx-auto max-w-7xl">
      <ol>
        <span className="footer-title">Book Categorys</span>
        <li className="link link-hover">Novel</li>
        <li className="link link-hover">Love Story</li>
        <li className="link link-hover">Science Fiction</li>
        <li className="link link-hover">No More</li>
      </ol>
      <ol>
        <span className="footer-title">Company</span>
        <li className="link link-hover">About us</li>
        <li className="link link-hover">Contact</li>
        <li className="link link-hover">Advertised</li>
        <li className="link link-hover">Books</li>
      </ol>
      <ol>
        <span className="footer-title">Social Media</span>
        <li className="link link-hover">FaceBook</li>
        <li className="link link-hover">Twitter</li>
        <li className="link link-hover">YouTube</li>
      </ol>
    </footer>
  );
};

export default Footer;