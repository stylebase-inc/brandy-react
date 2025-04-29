import React from "react";
import Header from "./Header";

export default {
    title: "Components/Header",
    component: Header,
    argTypes: {
        logoSrc: {
            control: "text",
            description: "Logo image URL to display",
        },
    },
};

const Template = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
    logoSrc: "/assets/Logos.svg",
};

export const CustomLogoHeader = Template.bind({});
CustomLogoHeader.args = {
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
};