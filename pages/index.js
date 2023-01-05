import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import Card from "../components/Card";
import Header from "../components/Header";
import Slider from "../components/Slider";
import UserLayout from "../components/UserLayout";
import YoutubeCard from "../components/YoutubeCard";

const daftarPython = [
  { image: "/Python1.png", judul: "Learn Python: The Complete Python Programming Course", harga: "$20.00", diskon: "$15.00" },
  { image: "/Python2.png", judul: "Learning Python for Data Analysis and Visualization", harga: "$25.00", diskon: "$19.00" },
  { image: "/Python3.png", judul: "Python for Beginners - Learn Programming from scratch", harga: "$24.00", diskon: "$20.00" },
  { image: "/Python4.png", judul: "Automate the Boring Stuff with Python Programming", harga: "$22.00", diskon: "$21.00" }
];

const pembukaAwal = [
  { heading: "Get started with us", text: "Choose from 204,000 courses with new additions published every month" }
]

const pembukaPython = [
  { heading: "Expand your career opportunities with Python", text: "Take one of EduMillenial's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps." }
];

const pembukaJavascript = [
  { heading: "Grow your software development skills with JavaScript", text: "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes." }
]

const daftarJavascript = [
  { image: "/JS1.png", judul: "Javascript for Beginners", harga: "$20.00", diskon: "$15.00" },
  { image: "/JS2.png", judul: "1 Hour Javascript", harga: "$60.00", diskon: "$57.00" },
  { image: "/JS3.png", judul: "Javascript from Beginner to Expert", harga: "$60.00", diskon: "$57.00" },
  { image: "/JS4.png", judul: "Advanced Javascript", harga: "$30.00", diskon: "$25.00" }
];

const daftarDesainWeb = [
  { video: "https://www.youtube.com/embed/hw6nfQS6-qc", judul: "Desain Web Part 1 : Pengantar Teknologi Website", nama: "Eko Heri Susanto", deskripsi: "Jangan lupa untuk subscribe" },
  { video: "https://www.youtube.com/embed/f7DL8U9JS3I", judul: "Desain Web Part 2 : Cascade Style Sheet (CSS)", nama: "Eko Heri Susanto", deskripsi: "Jangan lupa untuk subscribe" },
  { video: "https://www.youtube.com/embed/ASnbwvZmeJ8", judul: "Desain Web Part 3 : Pengaturan Layout Dengan Model Grid System", nama: "Eko Heri Susanto", deskripsi: "Jangan lupa untuk subscribe" },
  { video: "https://www.youtube.com/embed/31ptqDxpV1M", judul: "Desain Web Part 4 : Responsive Web Design", nama: "Eko Heri Susanto", deskripsi: "Jangan lupa untuk subscribe" }
];



const Home = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "All" || tab == null
  const isTabTwo = tab === "Python"
  const isTabThree = tab === "Javascript"
  const isTabFour = tab === "Desain Web"
  return (
    <>

      <section className="bg-light">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-5">
              <img src="/BG.png" className="d-block mx-lg-auto img-fluid wp-image-1116" alt loading="lazy" width={800} height={905} />
            </div>
            <div className="col-lg-7">
              <div className="lc-block mb-3">
                <div editable="rich">
                  <h1 className="fw-bold" style={{ color: "#0b4870" }}>Learning that gets you</h1>
                  <p className="lead">Skills for your present (and your future). <br /> Get started with us.</p>
                </div>
              </div>
              <div className="lc-block d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                <a href="#" className="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
                  <img className="img-fluid wp-image-1118 bg-dark" src="https://lclibrary.b-cdn.net/wp-content/uploads/sites/15/2022/02/appstore-light.svg" width={124} height={1} alt />
                </a>
                <a href="#" className="btn btn-dark btn-lg px-3 py-2 mb-3">
                  <img className="img-fluid wp-image-1117 bg-dark" src="https://lclibrary.b-cdn.net/wp-content/uploads/sites/15/2022/02/googleplay-light.svg" width={124} height={1} alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="lc-block">
              <div editable="rich">
                <p className="h4">A broad selection of courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="lc-block col-xl-6 lh-lg">
            <div editable="rich">
              <p className>Don't worry if you missed it! Access on-demand keynotes, sessions, and every kind of courses.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-start mb-4">
          <div className="col-md-12">
            <nav className="nav nav-tabs" id="tabs">
              <Link selected={isTabOne} href={{ pathname: "/user", query: { tab: "All" } }}><a className="nav-item nav-link">All</a></Link>
              <Link selected={isTabTwo} href={{ pathname: "/user", query: { tab: "Python" } }}><a className="nav-item nav-link">Python</a></Link>
              <Link selected={isTabThree} href={{ pathname: "/user", query: { tab: "Javascript" } }}><a className="nav-item nav-link">Javascript</a></Link>
              <Link selected={isTabFour} href={{ pathname: "/user", query: { tab: "Desain Web" } }}><a className="nav-item nav-link">Desain Web</a></Link>
              <a href="#" className="nav-item nav-link">Ecommerce</a>
              <a href="#" className="nav-item nav-link">Laravel</a>
            </nav>
          </div>
        </div>
        <div>
          {isTabOne && <React.Fragment>{pembukaAwal.map((agt, indeks) => (
            <Header heading={agt.heading} text={agt.text} />
          ))}</React.Fragment>}
          {isTabTwo && <React.Fragment>{pembukaPython.map((agt, indeks) => (
            <Header heading={agt.heading} text={agt.text} />
          ))}</React.Fragment>}
          {isTabThree && <React.Fragment>{pembukaJavascript.map((agt, indeks) => (
            <Header heading={agt.heading} text={agt.text} />
          ))}</React.Fragment>}
        </div>
        <div className="row justify-content-start mb-4">
          <div className="lc-block col-sm-3">
            <Link href="/user/course">
              <button class="btn btn-outline-dark btn-register rounded-0 me-2" type="button">Explore</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {isTabOne && <React.Fragment>
            {daftarPython.map((agt, indeks) => (
              <Card image={agt.image} judul={agt.judul} harga={agt.harga} diskon={agt.diskon} />
            ))}
            {daftarJavascript.map((agt, indeks) => (
              <Card image={agt.image} judul={agt.judul} harga={agt.harga} diskon={agt.diskon} />
            ))}
            {daftarDesainWeb.map((agt, indeks) => (
              <YoutubeCard video={agt.video} judul={agt.judul} nama={agt.nama} deskripsi={agt.deskripsi} />
            ))}</React.Fragment>}

          {isTabTwo && <React.Fragment>{daftarPython.map((agt, indeks) => (
            <Card image={agt.image} judul={agt.judul} harga={agt.harga} diskon={agt.diskon} />
          ))}</React.Fragment>}
          {isTabThree && <React.Fragment>
            {daftarJavascript.map((agt, indeks) => (
              <Card image={agt.image} judul={agt.judul} harga={agt.harga} diskon={agt.diskon} />
            ))}</React.Fragment>}
        </div>
      </div>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row mt-4 text-center">
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="card border-0">
                <div className="card-body" >
                  <div className="lc-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" className="bg-light rounded p-3" viewBox="0 0 16 16" lc-helper="svg-icon">
                      <path d="m7.792.312-1.533 2.3A.25.25 0 0 0 6.467 3H7.5v7.319a2.5 2.5 0 0 0-.515-.298L5.909 9.56A1.5 1.5 0 0 1 5 8.18v-.266a1.5 1.5 0 1 0-1 0v.266a2.5 2.5 0 0 0 1.515 2.298l1.076.461a1.5 1.5 0 0 1 .888 1.129 2.001 2.001 0 1 0 1.021-.006v-.902a1.5 1.5 0 0 1 .756-1.303l1.484-.848A2.5 2.5 0 0 0 11.995 7h.755a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.741a1.5 1.5 0 0 1-.747 1.142L8.76 8.99a2.584 2.584 0 0 0-.26.17V3h1.033a.25.25 0 0 0 .208-.389L8.208.312a.25.25 0 0 0-.416 0Z" />
                    </svg>
                  </div>
                  <div className="lc-block mb-2">
                    <div editable="rich">
                      <h2 className="h4" id="h4">Learn in-demand skills <br /> with over 204,000 courses</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="card border-0">
                <div className="card-body"  >
                  <div className="lc-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" className="bg-light rounded p-3" viewBox="0 0 16 16" lc-helper="svg-icon">
                      <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                    </svg>
                  </div>
                  <div className="lc-block mb-2">
                    <div editable="rich">
                      <h2 className="h4" id="h4">Learn at your own pace, with lifetime access on mobile and desktop</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="card border-0">
                <div className="card-body"  >
                  <div className="lc-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" className="bg-light rounded p-3" viewBox="0 0 16 16" lc-helper="svg-icon">
                      <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                      <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>
                  <div className="lc-block mb-2">
                    <div editable="rich">
                      <h2 className="h4" id="h4">Choose courses taught by <br /> real-world experts</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="card border-0">
                <div className="card-body"  >
                  <div className="lc-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" class="bg-light rounded p-3" viewBox="0 0 16 16" lc-helper="svg-icon">
                      <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"></path>
                    </svg>
                  </div>
                  <div className="lc-block mb-2">
                    <div editable="rich">
                      <h2 className="h4" id="h4">Explore new skills <br /> through fun programs</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-4">
        <div className="row mb-4 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="lc-block text-center">
              <img className="img-fluid w-50" src="/BG2.png" width={800} height={900} />
            </div>
          </div>
          <div className="col-lg-6 p-lg-6">
            <div className="lc-block mb-5">
              <div editable="rich">
                <h2 className="display-4 fw-bold" style={{ color: "#0b4870" }}>Boost your Creativity</h2>
                <p className="lead"><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus.</p>
              </div>
            </div>
            <div className="lc-block">
              <div className="lc-block d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                <a href="#" className="btn btn-outline-dark">
                  Find Out How
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2 mt-5 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1">
            <div className="lc-block text-center">
              <img className="img-fluid w-50" src="/BG3.png" width={800} height={900} />
            </div>
          </div>
          <div className="col-lg-6 p-lg-6">
            <div className="lc-block mb-5">
              <div editable="rich">
                <h2 className="display-4 fw-bold" style={{ color: "#0b4870" }}>Transform your life through education</h2>
                <p className="lead"><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus.</p>
              </div>
            </div>
            <div className="lc-block">
              <div className="lc-block d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                <a href="#" className="btn btn-outline-dark">
                  Find Out How
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default withRouter(Home)
