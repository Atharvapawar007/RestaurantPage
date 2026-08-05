const contactDiv = document.createElement("div");
contactDiv.id = "contactDiv";

contactDiv.innerHTML = `
    <h2 id="contactLabel">Contact Us</h2>

    <p><strong>📍 Address:</strong><br>
    The Odin's Inn<br>
    42 Raven's Wharf,<br>
    Frostholm District,<br>
    Bergen, Norway 5003
    </p>

    <p><strong>📞 Phone:</strong><br>
    +47 412 56 789
    </p>

    <p><strong>✉️ Email:</strong><br>
    feast@odinsinn.com
    </p>

    <p><strong>🌐 Website:</strong><br>
    www.odinsinn.com
    </p>

    <p><strong>🕒 Opening Hours:</strong><br>
    Monday – Thursday: 11:00 AM – 10:00 PM<br>
    Friday – Saturday: 11:00 AM – 12:00 AM<br>
    Sunday: 12:00 PM – 9:00 PM
    </p>

    <p><strong>🍺 Follow Us:</strong><br>
    Instagram: @odinsinn<br>
    Facebook: The Odin's Inn
    </p>
`

export default contactDiv;