import React from "react";
import Card from "../component/Card";

function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
{/* <img src="./asset/image/category.png" alt="productCategory" /> */}
      <div className="bannerImgDiv">
        <div className="bannerContent">
          <div>
            <h1 className="bannerHeadding">PETHUB.COM <br />  For Pet Careing</h1>
            <h3 className="secondText">Kollam</h3>
            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            vero magnam non dignissimos unde,</small>
          </div>
        <div>       
          <button className="bannerButton">SHOW MORE DETAILS</button>
      </div>
        </div>
        {/* banner content end  */}
        <div className="banner-img">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREBETExIVFhUXGBcWFhUVFxgWFhAVFRcXFhYWFRcYHSggGBolHhUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tKy0tLS0tLS0wLS0tLS0tLS0tLS0tLS0tLS0tLS0tNzctLS0tLf/AABEIAKcBLQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EADoQAAIBAgQDBgQEBAYDAAAAAAABAgMRBAUSITFBUQYTYXGBkSJSobEHMsHRFULh8BQjYpLC8SUzcv/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACMRAQEAAgEEAwEAAwAAAAAAAAABAhEDBBIhMRNBYVEUIjL/2gAMAwEAAhEDEQA/AO0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8m7K7A+g13jI+JqYzNlHaO78SNzkSmNSZiq4iMeLK9VzWTf5vqYo1m+LK7zT6SnH/U3VzNfyr1Nb+KPqR7lYxzVyF5Kl2RLfxN8me6eZPnuQTlZeRkp1R8ld7Is1LFRlzt4Mzplfo1TNGvKO6f9S2Zq7gmgaOCx6qOztc3icsvpGzQADrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8zlZXInG41bmXOcWoJLn0KxisZfj7Io5eTXhbhhvy2a+N4siZYtzle+3sKtTbf2NGdfkmvQx5Z2tExSOHm5PZv0JeGH0q7foRuW09C1SZG9oe01OhBzqT0q9o83J9Elu/Qsx8T9QyS9TEtysl6maNXY5RU/EZ94rQn3d0tbSV+rsXfJ8xVZJxd79Dtxyx9uSy+k5OZ5oTdj3CnselTsNDJTxHIzYTF3bhLhyZGYmm47nPY/iA6VacatKehSa1Kzsk/zaeNrEsZlfTl06213c0+T5krhMXfnsVzA4xVqKlB3VlKPimbeX1kpJ/RlmOXlHKLQD5GV0mfTQpAAAAAAAAAAAAAAAAAAAAAAAAAAAPjdg2V3tBnWmLjH36/0IZ5zGbqWONyuojc+x6lUe/giClWu7vhy/wBT/Yj55hrqSd724vkvXmz7Sq3szzM87ldtuOGo28TVehtkZlKc6z1PZcubJHReO/M1cGtOJaXOK+7RzH27fETeLTmtN7LwKX2k7DTrtThUblHhre2/Kxe7o9KT4GjHxdqb5mnIsL+H2InJd7NRiuSu+d7JcjpXZPs/HDwSTbfVkv3KSuzYwkb7+xZllcvaEknpuQoJGSNJPkY01HZ/QrWbducPQm4xTm1xa4XJ447ct0tMsKnyOVdrvw+qf4mVSi0ozvdN7xb2duXMs1L8SsPteEl7P9SyYDM6ONpaqUrtcnxX9PEn23H0juVWezGWVcHCEHJyilaz3cfC5KVJaZvS+LvZ9fBm7OFluRGLa7wzZ+F08rlk+PulF+nh4EuU3A1bJNPgW7D1NUYy6o08WW4ozx1WQAFqAAAAAAAAAAAAAAAAAAAAAAAADWxlOUlZbHO+1E2pumnve1+h0LNMV3dKUudtvM5Tj6znUsuLfHoY+ryniNPTz7alWNo2W0enVc2/M9tOyMuJtey5WPE5fEl4f3/fiYmpKUUtK8LGpjvhr0n1Ul9mv1MuEqXg/C9vTmaec1LKjPpUX1TX7E8VdWTC0dSTZurTEjsNi24qxmitXFl0qqvVWtraXJG/SmkkalOijJUqWW25Zj/UarvbvMJ0sNNwbTfw7ck+P0OKZjmMr7HcM9pRqU5wkrpo4tneT9zUktLavs99vAv4rFecqOWJbsyzdgu0tShiqelvTKSi/FPYqml3Wxcvw3yfvMbSqOFoQak277tflSXnYttQ07zjUpXXB2uvXkUetX1YqUL2cEr+bLviUnBS6fZnOHV/8jiX10/Sy2MXNGjiXPLt9S6otOQt91a/B+xTspfx+hZuz97Np+DXTxJdPUeWJ0AGtQAAAAAAAAAAAAAAAAAAAAAAAAjc8wkqsFGPXc5jmWHdOrLfhdHYGc97X5ZJSk0uO68TH1XH47o09Pnq6VaFTZv1/YRjeV+u3ojUp3V0+pKYeO1/AwtT1hZWl4Grmkk4Si+VmvdGzU2X1NDMXden7slK5YkcvrPRseafaKnSrRpVJWcuDe0b9LmplLaViv8Ab7LZTpqcVvF38jThJapydSpVdtt7/VGKtP8A0nLew/bWVPRh8Q3JPaE3/L0jJvidAqZlTfGa8m7X9yyy4+Fc8vOOez/fpwKJncNcvAms97S0KSe6lLhpju104cDnOY5/WrSaj8CvwXHnxfqSwxtd3pvxyz/Mvblb6l/7G4bS+Xkc0oqccNVmpS1R0tNPnKUY3fU6j2FxUKlGEtUXKy1pcYtpNprkTyc/FyzLFd3hpN2vslfrx/Q5zljarzk3dS335O+5aM9xTm0l+WPDx4XbICGXTjCpVS+FWi/Vmbly36Wcc1FryC71S6Fh7PJ6m0/BrqupA9m1/kLq19Sw9koPS2yfDPSHJ9rEADYzAAAAAAAAAAAAAAAAAAAAAAAABixGGjUVpK5lAFRz3sZCcXKj8M1yfCRU6tJwWhqz4PwOtHP+1+XyhXc9PwS3vyT6MxdTwyTuxjVw8lt1VZrczQrO9l4t/pY38RLZKO7+xr1MMzHi01lwSsSFakqkGmuKszTw1M3ad0XRTk5N2myKeGqXt8Ld4P8A4+ZuZZmbxPcUZwk5025KXzLS76vH3OlZhgIV6bjKKafun1XQoGOwCwOKpO90/i3W6jvFp28zThyd3i+0dauzE5ZvukaU8pWpNeRb501Ldbo1p0FctmTRlxohYJ9zVgttcXG/n18C69i8EqGESstTbcmubf8ASxE4aim0tix4CNqSja27f6FfLf8AVVlhJ5ZY0NciceUOWDrxS2cbrxlHcwZXQu0XPBUdMFE5xccs8qM89OddnMTanFPim0dBymMVTTjz4lNzzJZYarKpBXpyer/4lzRZuy+I10fJjh3jl213l1Z3RMgA1M4AAAAAAAAAAAAAAAAAAAAAAAAAAB4q0ozTjJJp8UzzVrqJp1czUTlsdkqq55lUaM2oxST3XkQVWmWPtHmWuN7cL26lVxGNjaKurt6V4tRuYOWYzLw14bsemrHuMtiLeYaZWn12dtn04cDaU9UbohLpKx7pY1xqW/lfExZ7ktPE2k+KTS9d7Mxqi73Z9jjJQe3Dp1OzPVcuO0Zh4Oko05pq20ZPg0uC9tjNKiTkK0aq328+B5jldO9/hLpntbjzds1YjMJTs0WpYdLTydt0eMDQjD8vHqS+Hw8Zb3uyX/U0q5eWZeoz5Nh/ji11LUReTUdOolC/CajJld15qQUk00mnyZhweDjSTUFZN3sbAJantHYADoAAAAAAAAAAAAAAAAAHirPSmwPlWso8WaqzWne1358iKxeJcm9yLzDE6aUrcUn6soy5delswWmWa0l/MbFHFQkrxkmUXK6jlS1S4/bgbEq2lPfz8bnJzV28cXdMxYmrZFbwmYSptO7ceae/qb2MxRP5JYh2XbziMRYicVWueq9c0K1QozzWyNPGyKVmepVY3T0KV01yumvTcuVeREYqnvyM1q/Bo1qyScpJtc7K/qelU22bS6cPofVTa/Ktun7GGc9/yv6FXblPS/uxvtoY3F6Gr1GpO9ldu/ob+Wwq4mMZwTutm+EZWfjx9D7hME61WEFFrf8AM1vFLi0y90aCgrJbLZFvHjbPKrkyk9K9/C6qjbVBS8m0j7hcHOP5qqfknz5EtmeJUI7cTTyym1TTlvKW/l0O3x6QlumxSpyS238Ub+FrM1HV0QcuNtvPa1j3l87xju31uWY5eULFryrE9SXTuVnCStYmaFayNmGTPlG8D5CV1c+liAAAAAAAAAAAAAAAAAAABrZj/wCuXkbIFFNdRO+/mRmZVVol7e+x0Lu4/KvZB0o/KvZFN4drJyacy7PVr0Y36v2ub2IleLXVfYv6oxXCMfZDuo/KvZEfg/XflUmEvgW5nde8V5fYt/dx+VeyPvdrovZEvic+RQa1VdTTrVEdJ7qPyr2Q7mPyx9kV3p7ftKcv45PXq9WamJqrc7F3Mflj7IdxD5I+yI/4v6lOfX04lSxKd1cyxaOz/wCHh8kf9qPvcQ+SPsjs6az7Pnn8c0yHRFTnJrbZev8A0S1WqlFO/H63Lr3Mflj7I+91H5V7IsnDqa2heTd25NnGI1OMVxbUV6krot9v0Oh9xH5Y+yPvdR+VeyI/4/678v45fmEn3fhqjfyuSWHhZK3T+/sX50o/KvZH3u4/KvZCdPr7LyqthZ/CmStGd0SndrovY+6V0LphpXcttXBT4o2z5Y+k0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=" alt="img" />
        </div>
      </div>
      <h2 className="main-headding firstText">OUR  <span className="secondText">PETS</span></h2>

      {/* <img src="./asset/image/banner.jpg" className="bannerImg" alt="banner" /> */}

      <Card />
    </div>
  );
}

export default Home;
