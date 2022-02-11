import workImgPortfolio from "./../img/works/workImgPortfolio.png";
import workImgPortfolioBack from "./../img/works/workImgPortfolioBack.jpg";

import work1 from "./../../assets/img/works/img1.png"
import work2 from "./../../assets/img/works/img2.png"
import work3 from "./../../assets/img/works/img3.png"

import userPhoto from "./../img/user/photo.png";

export const getWorks = () => {
    const works = [
        {
            id: 0,
            title: "Designing Dashboards",
            date: "2020",
            tag: ["Dashboard"],
            describe: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            img: work1,
            html: [
                "<p>Every React developer or web developer in general needs to be able to show off what they can do to any potential client or employer.</p>",
                "<p>That's exactly what we're going to be building right now, with the help of a number of industry standard tools, including React, Sass, and HTML.</p>",
            ],
        },
        {
            id: 1,
            title: "Vibrant Portraits of 2020",
            date: "2018",
            tag: ["Illustration"],
            describe: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            img: work2,
            html: [
                "Every React developer or web developer in general needs to be able to show off what they can do to any potential client or employer.",
                "That's exactly what we're going to be building right now, with the help of a number of industry standard tools, including React, Sass, and HTML.",
            ],
        },
        {
            id: 2,
            title: "36 Days of Malayalam type",
            date: "2018",
            tag: ["Typography"],
            describe: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            img: work3,
            html: [
                "Every React developer or web developer in general needs to be able to show off what they can do to any potential client or employer.",
                "That's exactly what we're going to be building right now, with the help of a number of industry standard tools, including React, Sass, and HTML.",
            ],
        },
    ];
    return works;
};

export const getPosts = () => {
    const posts = [
        {
            key: 0,
            header: "Making a design system from scratch",
            date: "12 Feb 2020",
            tag: ["Design", "Pattern"],
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            key: 1,
            header: "Creating pixel perfect icons in Figma",
            date: "12 Feb 2020",
            tag: ["Figma", "Icon Design"],
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        ,
        {
            key: 2,
            header: "My goal is to become a front-end developer",
            date: "5 August 2021",
            tag: ["Design", "Programing"],
            description:
                "I think a lot about it. I start learning pure HTML and CSS and i wanna learn some web framework such as Angular or ReactJS",
        },
    ];
    return posts;
};

export const getAboutUser = () => {
    const user = {
        name: "Alex",
        photo: userPhoto,
        profesion: "Creative Technologist",
        // text: 'I\'m just person who really enjoy coding  :3'
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    };

    return user;
};
