
export default function Contact() {
  return (
    <>
    <form action="">
       <div className="contact" id="contact">
        <p>Contact Me!</p>
        <input type="text" name="name" id="name" placeholder="Enter your name.." />
        <input type="text" name="number" id="number" placeholder="Enter your contact number.." />
        <input type="email" name="email" id="email" placeholder="Enter Email.." />
        <textarea name="description" id="description" cols="30" rows="10" placeholder="Enter Description"></textarea>
        <button type="submit">Submit</button>
       </div>
    </form> 
    </>
  )
}
