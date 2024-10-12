function contact(){
    const contentDOM = document.getElementById("content")
    const contactContainer = document.createElement("div")

    contactContainer.classList.add("contactContainer")
    contentDOM.appendChild(contactContainer)

    //contact and form container
    const contactBoxesContainer = document.createElement("div");
    contactBoxesContainer.classList.add("contactBoxesContainer");
    contactContainer.appendChild(contactBoxesContainer)

    //container
    const contactBox= document.createElement("div")
contactBox.classList.add("contactBox")
contactBoxesContainer.appendChild(contactBox)


//contact us!
const contactUs = document.createElement("div");
contactUs.classList.add("contactTitle")
contactUs.textContent = "Contact Us!"
contactBox.appendChild(contactUs)

//contact us text
const contactText = document.createElement("div");
contactText.classList.add("contactText")
contactText.textContent = "Have any questions or want to place an order? reach out to us via email or on social media. We're excited to assist you!"
contactBox.appendChild(contactText)

//Email
const email = document.createElement("div");
email.classList.add("contactTitle");
email.textContent= "Email"
contactBox.appendChild(email)

//Email Text
const emailText = document.createElement("div");
emailText.classList.add("contactText");
emailText.textContent="BigProtien@gmail.com"
contactBox.appendChild(emailText)

//Socials
const socials = document.createElement("div");
socials.classList.add("contactTitle");
socials.textContent = "Socials";
contactBox.appendChild(socials)

//Socials Text
const socialsText = document.createElement("div");
socialsText.classList.add("contactText");
socialsText.textContent = "@BigProtien"
contactBox.appendChild(socialsText)

//Form

const formContainer = document.createElement("div");
formContainer.classList.add("formContainer");
contactBoxesContainer.appendChild(formContainer)

//form TItle
const formTitle = document.createElement("div");
formTitle.classList.add("contactTitle");
formTitle.textContent="Send Message"
formContainer.appendChild(formTitle)

//// Create a form dynamically
var form = document.createElement("form");
form.classList.add("form")
form.setAttribute("action","#");
form.setAttribute("method", "get");

//create Name element
var name = document.createElement("input");
name.setAttribute("type", "text");
name.setAttribute("name","name")
name.setAttribute("placeholder","Name")
form.append(name);

// Create an input element for emailID
var ID = document.createElement("input");
ID.setAttribute("type", "text");
ID.setAttribute("name", "emailID");
ID.setAttribute("placeholder", "E-Mail");

// Create an input element for password
var message= document.createElement("textarea");
message.setAttribute("name", "message");
message.setAttribute("placeholder", "Message");

// Create a submit button
var s = document.createElement("input");
s.classList.add("submitBtn")
s.setAttribute("type", "submit");
s.setAttribute("value", "Submit");

// Append the email_ID input to the form
form.append(ID); 

// Append the password to the form
form.append(message); 

// Append the button to the form
form.append(s); 

formContainer.appendChild(form)

}


export {contact}