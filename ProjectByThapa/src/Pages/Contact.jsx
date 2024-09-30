export const Contact = ()=>{

const handleFormSubmit =(formData )=>{
// console.log(formData.entries());

const formInputData = Object.fromEntries(formData.entries());
console.log(formInputData);

}

    return(
        <>
        <section className="section-contact" >
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container" >

            <form action= {handleFormSubmit}>
                <input 
                 type="text"
                 className="form-control"
                 placeholder="Enter Your Name" 
                  required autoComplete="false"
                  name="username"  />

                <input 
                 type="email"
                 className="form-control"
                 placeholder="Enter Your email" 
                  required autoComplete="false"
                  name="email"  />

              <textarea
              className="form-control"
              rows="10"
              placeholder="Enter Your Message"
              name="messsage"
              required autoComplete="false"
              >
            
              </textarea>
              <button  type="submit" value="send" >Send</button>
            </form>
            </div>
        </section>
        
        </>
    )
}