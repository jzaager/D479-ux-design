const loadHeader = () => {
  const headerElem = document.querySelector('header');
  headerElem.innerHTML = `<div class="logo">
  <a href="index.html">Taniti Tourism</a>
  </div>
  <nav>
    <ul class="main-nav">
      <li><a href="./index.html">Home</a></li>
      <li><a href="./lodging.html">Lodging</a></li>
      <li><a href="./transport.html">Transport</a></li>
      <li><a href="./attractions.html">Attractions</a></li>
      <li><a href="./cuisine.html">Cuisine</a></li>
      <li class="submenu">
        <a href="">More</a>
        <ul class="submenu-content">
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="./faqs.html">FAQs</a></li>
          <li><a href="./index.html#contact">Contact</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div class="search-bar">
    <input type="search" placeholder="Search" />
  </div>
`;
};

const loadFooter = () => {
  const footerElem = document.querySelector('footer');
  footerElem.innerHTML = `<div class="footer-container">
    <div class="footer-logo">
      <a href="index.html">Taniti Tourism</a>
    </div>
    <div class="sitemap">
      <h3>Site Map</h3>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./lodging.html">Lodging</a></li>
        <li><a href="./transport.html">Transport</a></li>
        <li><a href="./attractions.html">Attractions</a></li>
        <li><a href="./cuisine.html">Cuisine</a></li>
        <li><a href="./blog.html">Blog</a></li>
        <li><a href="./faqs.html">FAQs</a></li>
        <li><a href="./index.html#contact">Contact</a></li>
      </ul>
    </div>
    <div class="social-media">
      <h3>Follow Us</h3>
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="contact-info">
      <h3>Contact Us</h3>
      <address id="contact">
        <p>123 Main Street, Taniti City</p>
        <p>Email: info@taniti.com</p>
        <p>Phone: +123 456 7890</p>
      </address>
    </div>
  </div>`;
};

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});
