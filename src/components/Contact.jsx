export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-6 rounded shadow">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="mb-4">Have a question or need our services? Send us a message!</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="border rounded px-4 py-2" required/>
            <input type="email" placeholder="Email Address" className="border rounded px-4 py-2" required/>
            <textarea placeholder="Your Message" rows="5" className="border rounded px-4 py-2" required></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>

        <div className="flex-1 bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <p><strong>Company:</strong> Imara Analytical Laboratories</p>
          <p><strong>P.O Box:</strong> 1555-20200 Kericho</p>
          <p><strong>Email:</strong> imaralaboratory@gmail.com</p>
          <p><strong>Phone:</strong> (+254 703 333 423) or (+254 736 351 633)</p>
          <div className="mt-4 w-full h-60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1982.3526039672365!2d35.24596822109867!3d-0.35390285221218487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1700000000000"
              className="w-full h-full"
              loading="lazy"
              title="IAL Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
