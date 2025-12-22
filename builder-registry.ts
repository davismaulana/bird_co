import { builder, Builder } from "@builder.io/react";
import { BuilderHero } from "./components/BuilderHero";

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

builder.init(API_KEY);

Builder.registerComponent(BuilderHero, {
    name: "Hero",
    inputs: [
        {
            name: "title",
            type: "string",
            defaultValue: "Hero Title",
        },
        {
            name: "description",
            type: "longText",
            defaultValue: "This is the hero description.",
        },
        {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        },
    ],
});
