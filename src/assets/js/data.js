// import work1 from "./../../assets/img/works/img1.png"
// import work2 from "./../../assets/img/works/img2.png"
// import work3 from "./../../assets/img/works/img3.png"

// import userPhoto from "./../img/user/photo.png";
import blank from "./../../assets/img/background/blank.png";

import currencies from "./../img/works/exchange-money.jpg";

export const getWorks = () => {
    const works = [
        {
            id: 0,
            title: "Create a simple exchanger",
            date: "2020",
            tag: ["Development", "Exchanger"],
            description:
                "It was a my test task. I had to develop an exhange money app. It icludes work with react hooks, get information from API and function components",
            workImage: currencies,
            urlApp: "https://github.com/OleksiiCherevan/exchanger",
            html: `<p><strong>My application have to solve these problems:&nbsp;</strong></p>
            <p>- get currencies from API</p>
            <p>- have buy and sale mode</p>
            <p>- user can change currencies</p>
            <p>- user change value and immediately get result&nbsp;</p>
            <p><strong>At first</strong>: get API. I used vanilla javascript's "fetch" function. In few wors i used useEffect and useState hooks with "fetch" function.&nbsp;</p>
            <p><strong>Second part</strong> is to create buy and sale mode, i decide to useState hook. I can manage "buy" or "sale" mode i use at the moment and then give user correct result.</p>
            <p><strong><em>Third part</em></strong> is to give user opportunity to change currencies without reloading page. So... i use react and have not problem with it. I use method like in the second part and it works greatly.</p>
            <p><strong>Fourth part</strong> is to create an event when text change i need to change the values. I used hooks with events.</p>
            <p><strong>In the end i made this application:</strong></p>
            <p>&nbsp;</p>
            <p><img src="https://i.ibb.co/NrD874M/exchanger-app.png" alt="" width="601" height="413" /></p>
            <p>This app: <a href="https://exchange-acherevan.herokuapp.com/">exchange money</a></p>
            <p>This app's code on gitHub: <a href="https://github.com/OleksiiCherevan/exchanger">exchange app git</a>&nbsp;</p>
            
            `,
        },
        {
            id: 1,
            title: "Vibrant Portraits of 2020",
            date: "2018",
            tag: ["Illustration"],
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            workImage: blank,
            html: `<p>So my&nbsp;</p>

            <img
                src="https://i.ibb.co/ZYfHgrf/simple-awesome-product-card.png"
                alt="simple-awesome-product-card"
                border="0"
            />
        
            <img
                src="https://i.ibb.co/34FxMZW/simple-awesome-product-card-common.png"
                alt="simple-awesome-product-card-common"
                border="0"
            />
            <img
                src="https://i.ibb.co/xXq3dJC/simple-awesome-product-card-out-of-stock.png"
                alt="simple-awesome-product-card-out-of-stock"
                border="0"
            />
        
            <img
                src="https://i.ibb.co/98pxJfS/simple-awesome-product-card-finish-hover.png"
                alt="simple-awesome-product-card-finish-hover"
                border="0"
            />
            <img
                src="https://i.ibb.co/Vxwd7BF/simple-awesome-product-card-finish-hover-size.png"
                alt="simple-awesome-product-card-finish-hover-size"
                border="0"
            />
        
            `,
        },
        {
            id: 2,
            title: "36 Days of Malayalam type",
            date: "2018",
            tag: ["Typography"],
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            workImage: blank,
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
        userPhoto: blank,
        profesion: "Creative Technologist",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    };

    return user;
};

export const getContact = () => {
    const contact = {
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enimvelit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        userPhoto: blank,
    };

    return contact;
};
