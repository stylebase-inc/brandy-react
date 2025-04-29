import React from "react";
import { Input } from "./Input";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        type: { control: "select", options: ["text", "email", "password"] },
        placeholder: { control: "text" },
        label: { control: "text" },
        icon: { control: "text" }, // Provide image URL for testing
    },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    icon: "./assets/search.png",
};
