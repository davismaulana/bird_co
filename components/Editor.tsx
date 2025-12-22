import { Puck, Config } from "@measured/puck";
import "@measured/puck/puck.css";

// Define the component props types
type HeroProps = {
    title: string;
    subTitle: string;
};

type MyButtonProps = {
    label: string;
};

// Define the root props for the config
type Props = {
    Hero: HeroProps;
    MyButton: MyButtonProps;
};

// 1. DEFINE YOUR COMPONENTS
const config: Config<Props> = {
    components: {
        Hero: {
            fields: {
                title: { type: "text" },
                subTitle: { type: "text" },
            },
            render: ({ title, subTitle }) => (
                <section style={{ padding: 50, textAlign: "center", backgroundColor: "#f4f4f4" }}>
                    <h1>{title || "Edit this Title"}</h1>
                    <p>{subTitle || "Edit this subtitle"}</p>
                </section>
            ),
        },
        MyButton: {
            fields: {
                label: { type: "text" },
            },
            render: ({ label }) => (
                <button style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    marginTop: "10px"
                }}>
                    {label || "Click Me"}
                </button>
            ),
        },
    },
};

// 2. THE EDITOR COMPONENT
export default function Editor() {
    return (
        <Puck
            config={config}
            data={{ content: [] }} // Start with empty page
            onPublish={(data) => {
                console.log("Your user clicked Publish!", data);
                alert("Check your browser console to see the JSON data!");
            }}
        />
    );
}
