import React from 'react'
import { Link } from 'react-router-dom';

import './info.css'
const Information = () => {
    return (
        <div class="main-body" style={{paddingTop: "100px"}}>
        {/* <link rel="stylesheet" type="css" href="info.css" /> */}
            <nav id="navbar">
                <header>Introduction to HTML</header>
                <a href="#Introduction" class="nav-link">Introduction</a>
                <a href="#Html" class="nav-link">Html</a>
                <a href="#Tags" class="nav-link">Tags</a>
                <a href="#Links" class="nav-link">Links</a>
                <a href="#Sections" class="nav-link">Sections</a>
            </nav>
            <br/><br/><br/><br/>
            <main id="main-doc">
                <section class="main-section" id="Introduction">
                    <header>Introduction</header>
                    <p>HyperText Markup Language (HTML) is a simple markup system used to create hypertext documents that are portable from one platform to another. HTML documents are SGML documents with generic semantics that are appropriate for representing information from a wide range of applications.111111111111111111111111111<br/>11111111111111111111<br/>111111111111111111111111<br/>11111111111<br/>111111111111111111111111111111111111111111111111111</p>
                    <code>!DOCTYPE html</code>
                    <p>...is used for declaring html 5</p>
                </section>
                <section class="main-section" id="Html">
                    <header>Html</header>
                    <p>HTML, the Hypertext Markup Language, is a standard for describing the structure and presentation of information via the Internet. Web developers use HTML keywords or tags to instruct the Web browser application how to format and display the content of Web pages.22222222<br/>222222222222<br/>222222222222222222<br/>2222222222222222222222222<br/>222222222222222222222222222222222222</p>
                    <p>This is how it is written;</p>
                    {/* <code>< html > < /html ></code> */}
                    <p></p>
                </section>
                <section class="main-section" id="Tags">
                    <header>Tags</header>
                    <p>HTML tags are like keywords which defines that how web browser will format and display the content. With the help of tags, a web browser can distinguish between an HTML content and a simple content. HTML tags contain three main parts: opening tag, content and closing tag. ... Every tag in HTML perform d<br/>ifferent tasks, some are listed below;333333<br/>3333333333<br/>333333333333333333333333333<br/>33333333333333333333<br/>3333333333333333333333</p>
                    {/* <code> < h1 > < /h1 >, < p > < /p >, < head > < /head > </code> */}
                        <ul>
                            <li>the h1 tag</li>
                            <li>the p tag</li>
                            <li>the anchor tag</li>
                            <li>the div tag</li>
                            <li>the nav tag</li>
                        </ul>
                        <p>...there are a lot more</p><br/><br/>
                    </section>
                        <section class="main-section" id="Links">
                            <header>Links</header>
                            <p>A link (short for hyperlink) is an HTML object that allows you to jump to <br/>a new location when you click or tap it. ... Link<br/>s can be attached to text, images, or other HTML elements. Most text links are blue, since that is standard color web browsers use to display links. You might have want to be able to link throu<br/>gh sites, Html can do that for you!4<br/>4444444444444444444444<br/>4444444444444444444444<br/>44444444444444444444</p>
                            <Link href="link">content </Link >
                            <p>...Hope you link through wikipedia :)</p>
                        </section>
                        <section class="main-section" id="Sections">
                            <header>Sections</header>
                            <p>The HTML section element represents a generic standalone section of a document, which doesn't have a more specific se<br/>mantic element to represent it. Section<br/>s should always have a heading, with very few exceptions.55555<br/>555555555555555555555555555555555555555555555555<br/>5555555555555555<br/>5555555555555555555555555555555<br/>555555555555</p>
                            {/* <code>< section> ---contents--- < /section ></code> */}
                            <br/><br/><br/>
                            <p>You might want to put some articles there :)</p>
                        </section>
                    </main>
                    </div>

                    )
}
                    export default Information
