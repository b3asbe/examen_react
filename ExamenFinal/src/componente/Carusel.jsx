import Carousel from 'react-bootstrap/Carousel';

function Carusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2mCCMKv5SSb6rr-9jUMQwXemT2nx_uOb_FJElN8YSewAwIgXTb-WjnKKHa_ZfJVV2pZFOlPFuV3gTV2zLSr93tayd_KL0AWnd_uTJAqgcfbJmqniRGAI_s0v6sq7JNWuBrYfdfYgn7Gdte7PBWZ1oigfTn3-AEC65Z-qeUncn751fCgEK_bkCPidgGsE/s1600/data3.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5-v3qEAk6x1cqOeJPSitvWrGQQ5ju4UyImG2TRJmo6jbSY6bOMj3oEWK4Pftp9GNoTsob-AaYBdOPYjxnkGbxdS61hTyEKHbO0ho2CPz7afe8ZkCgRQ0LOwUt6V9AhLjOjz0FVPHCJAbaosstr275hyphenhyphenj9LvFvwJsDfLzneXUX2oJrnx__LXMD0Rtci98/s1600/data2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;