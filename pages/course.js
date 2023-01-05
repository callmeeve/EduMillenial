import { withRouter } from "next/router";
import React from "react"
import Header from "../components/Header";
import Card from "../components/Card"
import Link from "next/link"

const daftarPython = [
    { image: "/Python1.png", judul: "Learn Python: The Complete Python Programming Course", harga: "$20.00", diskon: "$15.00" },
    { image: "/Python2.png", judul: "Learning Python for Data Analysis and Visualization", harga: "$25.00", diskon: "$19.00" },
    { image: "/Python3.png", judul: "Python for Beginners - Learn Programming from scratch", harga: "$24.00", diskon: "$20.00" },
    { image: "/Python4.png", judul: "Automate the Boring Stuff with Python Programming", harga: "$22.00", diskon: "$21.00" }
];

const pembukaAwal = [
    { heading: "Get started with us", text: "Choose from 204,000 online video courses with new additions published every month" }
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

const Course = ({ router }) => {
    const {
        query: { tab }
    } = router

    const isTabOne = tab === "All" || tab == null
    const isTabTwo = tab === "Python"
    const isTabThree = tab === "Javascript"
    return (
        <>

            <section>
                <div className="d-flex container-fluid" lc-helper="background" style={{ height: '50vh', background: 'url(/BG4.png)  center / cover no-repeat' }}></div>
                <div className="container bg-light shadow py-4" style={{ marginTop: '-100px' }}>
                    <div className="row text-center justify-content-center">
                        <div className="col-12">
                            <div className="lc-block">
                                <div editable="rich">
                                    <p className="fw-bold display-5" style={{ color: "#0b4870" }}>Find Fun Programs <br /> from EduMillenial now!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center justify-content-center mb-2">
                        <div className="col-lg-10 col-xxl-8">
                            <div className="lc-block mb-5">
                                <div editable="rich">
                                    <p className="rfs-9" style={{ fontSize: "2rem", fontWeight: "400" }}> Choose from 204,000 online courses with new additions published every month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 py-lg-6">
                <div className="container py-5">
                    <div className="row mt-4 text-center">
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card border-0">
                                <div className="card-body">
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
                                <div className="card-body">
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
                                <div className="card-body">
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
                                <div className="card-body">
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
                    <div className="col-xl-6">
                        <nav className="nav nav-tabs" id="tabs">
                            <Link selected={isTabOne} href={{ pathname: "/user/course", query: { tab: "All" } }}><a className="nav-item nav-link">All</a></Link>
                            <Link selected={isTabTwo} href={{ pathname: "/user/course", query: { tab: "Python" } }}><a className="nav-item nav-link">Python</a></Link>
                            <Link selected={isTabThree} href={{ pathname: "/user/course", query: { tab: "Javascript" } }}><a className="nav-item nav-link">Javascript</a></Link>
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
            </div>
            <div className="container">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {isTabOne && <React.Fragment>
                        {daftarPython.map((agt, indeks) => (
                            <Card image={agt.image} judul={agt.judul} harga={agt.harga} diskon={agt.diskon} />
                        ))}
                        {daftarJavascript.map((agt, indeks) => (
                            <Card image={agt.image} judul={agt.judul} harga={agt.harga} diskon={agt.diskon} />
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
                    <div className="row mb-4">
                        <div className="col-md-12 text-center">
                            <div className="lc-block text-center text-md-end mb-5">
                                <div editable="rich">
                                    <h1 className="display-5 fw-bold" style={{ color: "#0b4870" }}>Our Loved Testimonials</h1>
                                </div>
                            </div>{/* /lc-block */}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-4 mb-4">
                            <div className="card border-0 shadow">
                                <div className="card-body py-4">
                                    <div className="d-flex">
                                        <img style={{ width: 48, height: 48 }} src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1080&h=1080" alt="Photo by Nicolas Horn" className="rounded-2 shadow" srcSet="https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1080&h=1080 1080w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=150 150w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=300 300w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=768 768w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width={1080} height={1080} />
                                        <div className="pt-1">
                                            <h4 editable="inline" className="rfs-7 ms-2" style={{ color: "#0b4870" }}>Mathew Glock</h4>
                                        </div>
                                    </div>
                                    <div className="lc-block mt-4 text-muted">
                                        <div editable="rich">
                                            <p>The tutors are very friendly! Very helpful in explaining things that I do not understand in detail.</p>
                                        </div>
                                    </div>
                                    <div className="rating mt-3 text-success">
                                        <div className="lc-block"> <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-4 mb-4">
                            <div className="card border-0 shadow">
                                <div className="card-body py-4">
                                    <div className="d-flex">
                                        <img style={{ width: 48, height: 48 }} src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1080&h=1080" alt="Photo by Leio McLaren" className="rounded-2 shadow" srcSet="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1080&h=1080 1080w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=150 150w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=300 300w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=768 768w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width={1080} height={1080} />
                                        <div className="pt-1">
                                            <h4 editable="inline" className="rfs-7 ms-2" style={{ color: "#0b4870" }}>Tahmid William&nbsp;<p />
                                                <p />
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="lc-block mt-4 text-muted">
                                        <div editable="rich">
                                            <p>Before using EduMillenial, I was lacking in lessons. But after subscribing to EduMillenial, thank God, I can better understand the material being taught.</p>
                                        </div>
                                    </div>
                                    <div className="rating mt-3 text-success">
                                        <div className="lc-block"> <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-4 mb-4">
                            <div className="card border-0 shadow">
                                <div className="card-body py-4">
                                    <div className="d-flex">
                                        <img style={{ width: 48, height: 48 }} src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=1080&h=1080" alt="Photo by Amir Seilsepour" className="rounded-2 shadow" srcSet="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=1080&h=1080 1080w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=150 150w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=300 300w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=768 768w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width={1080} height={1080} />
                                        <div className="pt-1">
                                            <h4 editable="inline" className="rfs-7 ms-2" style={{ color: "#0b4870" }}>Jarvis Ridley&nbsp;<p />
                                                <p />
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="lc-block mt-4 text-muted">
                                        <div editable="rich">
                                            <p>This was my first time joining EduMillenial and it was really fun. The tutors are chosen according to what we want, the learning is also really good, thank you, Sis!</p>
                                        </div>
                                    </div>
                                    <div className="rating mt-3 text-success">
                                        <div className="lc-block"> <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default withRouter(Course);