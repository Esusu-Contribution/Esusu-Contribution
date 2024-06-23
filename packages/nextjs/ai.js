const fetch = require("node-fetch");

const API = "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";

async function query(data) {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            {
                headers: {
                    "Authorization": `Bearer ${API}`,
                    "Content-Type": "application/json"  // Ensure the Content-Type is set to application/json
                },
                method: "POST",
                body: JSON.stringify(data),  // Ensure the body is correctly stringified
            }
        );

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Log the raw response text
        const responseText = await response.text();
        console.log("Raw response:", responseText);

        // Attempt to parse the JSON response
        const result = JSON.parse(responseText);
        return result;
    } catch (error) {
        // Log the error message and stack trace
        console.error("Error occurred:", error.message);
        console.error(error.stack);
        return { error: error.message };
    }
}

const input =`503 Service Unavailable
The HyperText Transfer Protocol (HTTP) 503 Service Unavailable server error response code indicates that the server is not ready to handle the request.

Common causes are a server that is down for maintenance or that is overloaded. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time for the recovery of the service.

Note: together with this response, a user-friendly page explaining the problem should be sent.

Caching-related headers that are sent along with this response should be taken care of, as a 503 status is often a temporary condition and responses shouldn't usually be cached.

Status
HTTP
Copy to Clipboard
503 Service Unavailable
Specifications
Specification
HTTP Semantics
# status.503
Browser compatibility
Report problems with this compatibility data on GitHub
desktop	mobile
Chrome
Edge
Firefox
Opera
Safari
Chrome Android
Firefox for Android
Opera Android
Safari on iOS
Samsung Internet
WebView Android
503

Yes
Toggle history	
12
Toggle history	
Yes
Toggle history	
Yes
Toggle history	
Yes
Toggle history	
Yes
Toggle history	
Yes
Toggle history	
Yes
Toggle history	
Yes
Toggle history	
Yes
Toggle history	
Yes
Toggle history
Legend
Tip: you can click/tap on a cell for more information.

Full support
Full support
See also
Retry-After
HTTP Status Code Definitions
Help improve MDN

Was this page helpful to you?

Yes

No
Learn how to contribute.
This page was last modified on Apr 10, 2023 by MDN contributors.

View this page on GitHub • Report a problem with this content`

const data = {
    inputs: input,
    parameters: {
        max_length: 512, // Adjust the max length as needed
        num_return_sequences: 1 // Number of summaries to return
    }
};

query(data).then((response) => {
    console.log(JSON.stringify(response, null, 2));
});


// https://api-inference.huggingface.co/models/VidhuMathur/bart-log-summarization