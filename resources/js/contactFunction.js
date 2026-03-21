const form = document.querySelector(".form-content");
const sendButton = document.querySelector("#send-button");
 

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stoppar redirect

    const data = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/meelypzz", {
            method: "POST",
            body: data,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            sendButton.style.backgroundColor = "var(--highlight)"
            sendButton.innerText = "Thanks!";
            form.reset();
        } else {
            sendButton.style.backgroundColor = "#d83737";
            sendButton.innerText = "Something went wrong";
            form.reset();
        }
    } catch (error) {
        sendButton.innerText = "Something went wrong";
    }
});