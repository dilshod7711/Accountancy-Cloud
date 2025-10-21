import React, { useState } from "react";
import Confetti from "react-confetti";
import logo from "../../assets/logo.svg";
import hero from "../../assets/hero.png";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [randomMeme, setRandomMeme] = useState("");
  const memes = [
    "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif",
    "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif",
    "https://media.giphy.com/media/fAnEC88LccN7a/giphy.gif",
    "https://media.giphy.com/media/26Ff6yRPLzD4G1b5u/giphy.gif",
    "https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif",
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
    "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    "https://media.giphy.com/media/26Ff6V8y5zE1P1Yp2/giphy.gif",
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    "https://media.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif",
    "https://media.giphy.com/media/xT0GqnY1KkB4d3CzI0/giphy.gif",
    "https://media.giphy.com/media/3o7btQZJbJ3lJxkWbK/giphy.gif",
    "https://media.giphy.com/media/d10dMmzqCYqQ0/giphy.gif",
    "https://media.giphy.com/media/l0HlTy9x8FZo0XO1i/giphy.gif",
    "https://media.giphy.com/media/3o6ZsX2dK2jzY2ZkTu/giphy.gif",
    "https://media.giphy.com/media/xT5LMW8hD8Wm0q6XQ8/giphy.gif",
    "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
  ];

  function handleOpenModal() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randomIndex]);

    setIsModalOpen(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      {showConfetti && <Confetti numberOfPieces={400} recycle={false} />}

      <header className="max-w-[1200px] mx-auto py-[20px] pt-[100px]">
        <nav className="fixed z-50 top-0 left-0 right-0 bg-[#ffffffdc] backdrop-blur-sm shadow-sm">
          <div className="flex justify-between items-center py-[20px] max-w-[1200px] mx-auto">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="flex gap-[30px] items-center">
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                Home
              </a>
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                How it works
              </a>
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                What we do
              </a>
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                Who we help
              </a>
              <a className="text-[15px] text-[#000000] font-Roboto" href="">
                Resources
              </a>
              <button className="font-bold text-[18px] text-[#000000] w-[96px] h-[50px] border border-[#000000] rounded-[50px] cursor-pointer">
                Login
              </button>
              <button
                onClick={handleOpenModal}
                className="font-bold text-[18px] text-[#FFFFFF] bg-[#000000] w-[189px] h-[50px] rounded-[50px] cursor-pointer hover:scale-105 transition-transform"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </nav>

        <div className="flex justify-between mt-[100px] items-center">
          <div>
            <h1 className="text-[#000000] text-[77px] max-w-[491px] font-Roboto font-bold leading-[82.8px]">
              Get your finances right
            </h1>
            <p className="text-[20px] text-[#000000] font-Roboto max-w-[476px] mt-[20px]">
              Get your finances right with Accountancy Cloud. We offer the best
              accounting, R&D credits and CFO services for ambitious businesses
              who want to grow.
            </p>
            <p className="text-[18px] text-[#000000] font-Roboto mt-[100px]">
              Switching to us is simple
            </p>
            <p></p>
            <button
              onClick={handleOpenModal}
              className="font-bold text-[18px] text-[#FFFFFF] bg-[#000000] w-[159px] h-[50px] rounded-[50px] mt-[87px] hover:scale-105 transition-transform"
            >
              Talk to an Expert
            </button>
          </div>
          <div>
            <img src={hero} alt="hero" />
          </div>
        </div>
      </header>
      <hr className="mt-[-40px] text-gray-200" />

      {isModalOpen && (
        <div className="fixed inset-0 bg-[#00000080] flex justify-center items-center z-50 animate-fadeIn">
          <div className="w-[800px] h-[600px] rounded-[30px] bg-white p-10 relative shadow-2xl animate-scaleUp">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-4xl font-bold text-center mt-4">
              😂 Surprise Meme Time!
            </h2>
            <p className="text-center text-gray-600 mt-3 text-lg">
              Here's your daily dose of fun 💥
            </p>
            <div className="mt-10 flex justify-center">
              <img
                src={randomMeme}
                alt="Random Meme"
                className="rounded-2xl shadow-lg w-[400px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
