import React, { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useLocation } from "react-router-dom";
import "../builder-registry";

// Initialize builder with your API key (should match the one in registry)
builder.init("PLACEHOLDER_KEY");

export default function BuilderPage() {
    const isPreviewingInBuilder = useIsPreviewing();
    const [notFound, setNotFound] = useState(false);
    const [content, setContent] = useState<any>(null);
    const location = useLocation();

    useEffect(() => {
        async function fetchContent() {
            const content = await builder
                .get("page", {
                    url: location.pathname,
                })
                .promise();

            setContent(content);
            setNotFound(!content);
        }

        fetchContent();
    }, [location.pathname]);

    if (notFound && !isPreviewingInBuilder) {
        return <div>404 - Page Not Found</div>;
    }

    return (
        <BuilderComponent model="page" content={content} />
    );
}
