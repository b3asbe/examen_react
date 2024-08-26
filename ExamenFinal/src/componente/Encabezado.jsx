import { Fragment } from "react"
import Logo from "./Logo";

function Encabezado(){
  return (
    <>
     
        <header>
            <Logo/>
            <div class="social-icons">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhopC0RC3sUqSYo7WfoK2iUSwBTDB8r1nJ8W6pMQG5lunBuAs4IHaW0Jjud1pic9ObnyRj_WkoFR4gpg50Bs7r5ZEk_yTEZyZcE2xWhLphUoOHFYmELgQNJjn89agBjQoQAlImoiajR3SNow8TvATM6IOmDCqdQQXC5WsbAvYAXhKjAXGsOkdvNjxKKKp8/s1600/face.png"
                    alt="Facebook" />
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM_1mkHt_Xi_MN8iTss4ZyVw7FdL1_XBRzKSpxCcRl0BjFtg5fPSIWMC3wPVjsqfRq86NdVTJEhXU9v5EDJYxXaNlS55ERKXnaju5WQ2-9_QKREvUZJAVi3QeGFsmyp34Um_cozHIyMuJSs8YQv94lA7R6z2lP1B_yTxCwvAkCRd5RZ2KOCk9fq5jCNFk/s1600/insta.png"
                    alt="Instagram"/>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjszTUsvxkdLL8qBs8xi5b05N0rmB-foSlUpb-qQahs6AKSqPpD3hyz8_Revgy-ILeK76cv7jBqQRtziPrXTFt3tyL1L1mOFUWQKU7AMYH5lBPOBoewXDQ3UFM6rMGte7e1BEnHd1_cV-WzCVhljJ_TrV33C-cTTTZBcS7g9ColTxf4X7a3cFRuR51C-PE/s1600/youtu.png"
                    alt="YouTube"/>
            </div>
        </header>
        
    </>
  );
}

export default Encabezado;